import { Component, OnInit,NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, PopoverController,Platform, ModalController, ActionSheetController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
//import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../service/database/database.service';
import { StudentDataService } from '../service/student-data/student-data.service';
import {SubscriptionService} from '../service/subscription/subscription.service';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { AddReviewComponent } from '../add-review/add-review.component';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
const env = environment;


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  absenceDetail: any = []
  notes: any = [];
  category: string;
  studentDetails:any = {};
  userType:any;
  lang:any = {};
  userDetails:any = {};
  noteMessage:string = "";
  canAddStudentNote:boolean = true;
  noNotesFound:string = '';
  noAbsenceFound:string = '';
  selections:any = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
  aggStars:any = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
  ratingStars:any;
  showNoteModal:boolean = false;
  halfStar:boolean = false;
  halfStarPosition:number;
  studentBehaviour:any = {
    "icon": "",
    "text": ""
  }
  totalDelay:any;
  navData:any={};
  planLang:any;
  app_rate:any;
  student_detailse: any;
  student_points: any[] = [];
  /**
   * 
   * @param navParams     Use to get the value passed from previous page
   * @param app           Root app 
   * @param dataProvider  Use for getting data from the API
   * @param authProvider  Use for authentication purpose
   */
  constructor(public navCtrl: NavController, 
		  //	public navParams: NavParams, 
		  	public dataProvider: DataService,
		    public authProvider: AuthService, 
        public dbProvider: DatabaseService,
        public studentService:StudentDataService,
        public alertController: AlertController,
		    //public app: App, 
		    public translate: TranslateService,
		    public alertCtrl: AlertController, 
        private printer: Printer,
		    public camera: Camera, 
		    public network: Network,
        private route : ActivatedRoute,
        private router:Router,
        public zone:NgZone,
        private popover:PopoverController, 
		    public platform: Platform,
        private storage: Storage,
        public modalController: ModalController,
        public actionSheetController: ActionSheetController,
        private subscription:SubscriptionService) {
  		this.route.queryParams.subscribe(params => {
	      if (this.router.getCurrentNavigation().extras.state) {
	      		 this.navData = this.router.getCurrentNavigation().extras.state;
             this.storage.set('currentStudent',this.navData);
             localStorage.setItem("currentStudent",this.navData);
             this.totalDelay=this.navData.total_delay;
           console.log("navData::===>",this.navData,this.totalDelay);
	      }
	    });
   // this.category = "absence";
    this.translate.get("alertmessages").subscribe((val)=>{
      this.lang = val;
    })
    this.translate.get("plan").subscribe((val)=>{
      this.planLang = val;
    })
    this.translate.get("app_rate").subscribe((val)=>{
      this.app_rate = val;
    })
    this.translate.get("app_rate").subscribe((val)=>{
      this.app_rate = val;
    })
    this.translate.get("student-details").subscribe((val)=>{
      this.student_detailse = val;
    })
  }

  getStudentPoints(){
    this.dataProvider.getPointsValue().then(res => {
     this.student_points = res.points;
    });   
   }

  ionViewWillEnter() {
   if(this.platform.is('cordova')){
      if(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN){
        this.checkProfile();
      }else{
        if(this.navData.student_id){
          this.getOfflineNote();
          this.studentService.getStudent(this.navData.student_id,response=>{
            console.log('offli8ne',response);
            this.studentDetails = response;
              if(this.studentDetails.can_view_absent){
                this.category = "absence";
              }else{
                this.category = "notes";
              }
            //  console.log('studentDetails',this.studentDetails);
              if(this.studentDetails.absents.length == 0){
                this.noAbsenceFound = this.lang.no_absent;
              }
          },error=>{
            this.dataProvider.showToast(this.lang.no_internet);
          })
        }else{
            this.dataProvider.showToast(this.lang.no_internet); 
          this.navCtrl.back();
        }
      }
    }else{
      this.checkProfile();
    }
    this.getStudentPoints();
  }

  getOfflineNote(){
    this.studentService.getStudentNote(this.navData.student_id,response=>{
      this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
      this.notes = response;
      console.log('offlineNo',this.notes);
      if(response.agg_ranking > 0 && response.agg_ranking < 2.6){
        this.studentBehaviour.icon = "./assets/icon/warning.png";
        this.studentBehaviour.text = this.lang.warning_behaviour;

      }else if(response.agg_ranking > 2.5 && response.agg_ranking < 3.6){
        this.studentBehaviour.icon = "./assets/icon/good.png";
        this.studentBehaviour.text = this.lang.good_behaviour;

      }else if(response.agg_ranking > 3.5 && response.agg_ranking < 4.6){
        this.studentBehaviour.icon = "./assets/icon/very-good.png";
        this.studentBehaviour.text = this.lang.very_good_behaviour;

      }else if(response.agg_ranking > 4.5 && response.agg_ranking < 5.1){
        this.studentBehaviour.icon = "./assets/icon/excellent.png";
        this.studentBehaviour.text = this.lang.excellent_behaviour;

      }else{
        this.studentBehaviour.icon = "chatbubbles";
        this.studentBehaviour.text = this.lang.no_behaviour;
      }
      if(response.notes.length > 0){
        this.notes.notes.forEach((note:any) => {
          if(this.checkNoteDate(new Date(note.date)) && note.user_id == this.userDetails.details.user_no){
            this.canAddStudentNote = false;
          }
          if(note.rating > 0){
            note.selections = ['#fff', '#fff', '#fff', '#fff', '#fff'];
            for(let i=0; i< parseInt(note.rating); i++){
              note.selections[i] = "#04855f";
            }
          }
        })
        let realNo = 0;
        if(this.notes.agg_ranking % 1 == 0){
          realNo = parseInt(this.notes.agg_ranking);
        }else {
          realNo = Math.floor(this.notes.agg_ranking);
          this.halfStarPosition = realNo;
          this.halfStar = true;
        }
        for(let i=0; i< realNo; i++){
          this.aggStars[i] = "#04855f";
        }
      }else{
        this.noNotesFound = this.lang.no_note;
      } 
    },error=>{this.dataProvider.showToast(this.lang.no_internet);})
  }
  checkProfile(){
    this.dataProvider.showLoading();
     if(localStorage.getItem("userloggedin")){
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      this.userType = this.userDetails.details.user_type;
      console.log('student sid====>,',this.navData.student_id );
      let data = {
        "user_no": this.userDetails.details.user_no,
        "session_id": this.userDetails.session_id,
        "cid": this.navData.course_id,
        "date": this.navData.dateSelected,
        "sid": this.navData.student_id 
      };
      this.getNotes();
      this.dataProvider.getStudentDetails(data).then(response=>{       
        if(response.session){
          this.dataProvider.hideLoading();
          this.studentService.checkStudent(response.data);
          this.studentDetails = response.data;
          console.log("can_view_abs:::",this.studentDetails.can_view_absent);
          if(this.studentDetails.can_view_absent){
            
            this.category = "absence";
          }else{
            this.category = "notes";
          }
         // console.log('studentDetails',this.studentDetails);
          if(this.studentDetails.absents.length == 0){
            this.noAbsenceFound = this.lang.no_absent;
          }
        }else{
          this.authProvider.flushLocalStorage();
          this.dataProvider.errorALertMessage(response.message);
          //this.app.getRootNav().setRoot("LoginPage");
        }
      }).catch(error =>{
        console.log(error);
        this.dataProvider.hideLoading();
        this.dataProvider.errorALertMessage(error);
      })
    }else{
      this.dataProvider.hideLoading();
      this.authProvider.flushLocalStorage();
    //  this.app.getRootNav().setRoot("LoginPage");
    }
  }

  getNotes(){
    let data = {
      "user_no": this.userDetails.details.user_no,
      "session_id": this.userDetails.session_id,
      "cid": this.navData.course_id,
	    "date": this.navData.dateSelected,
	    "sid": this.navData.student_id
    };
    this.dataProvider.getStudentNotes(data).then((response)=>{
     console.log(response);
      this.studentService.checkStudentNotes(response,this.navData.student_id);
      this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
      this.notes = response;
      if(response.agg_ranking > 0 && response.agg_ranking < 2.6){
        this.studentBehaviour.icon = "./assets/icon/warning.png";
        this.studentBehaviour.text = this.lang.warning_behaviour;

      }else if(response.agg_ranking > 2.5 && response.agg_ranking < 3.6){
        this.studentBehaviour.icon = "./assets/icon/good.png";
        this.studentBehaviour.text = this.lang.good_behaviour;

      }else if(response.agg_ranking > 3.5 && response.agg_ranking < 4.6){
        this.studentBehaviour.icon = "./assets/icon/very-good.png";
        this.studentBehaviour.text = this.lang.very_good_behaviour;

      }else if(response.agg_ranking > 4.5 && response.agg_ranking < 5.1){
        this.studentBehaviour.icon = "./assets/icon/excellent.png";
        this.studentBehaviour.text = this.lang.excellent_behaviour;

      }else{
        this.studentBehaviour.icon = "chatbubbles";
        this.studentBehaviour.text = this.lang.no_behaviour;
      }
      if(response.notes.length > 0){
        this.notes.notes.forEach((note:any) => {
          if(this.checkNoteDate(new Date(note.date)) && note.user_id == this.userDetails.details.user_no){
            this.canAddStudentNote = false;
          }
          if(note.rating > 0){
            note.selections = ['#fff', '#fff', '#fff', '#fff', '#fff'];
            for(let i=0; i< parseInt(note.rating); i++){
              note.selections[i] = "#04855f";
            }
          }
        })
        let realNo = 0;
        if(this.notes.agg_ranking % 1 == 0){
          realNo = parseInt(this.notes.agg_ranking);
        }else {
          realNo = Math.floor(this.notes.agg_ranking);
          this.halfStarPosition = realNo;
          this.halfStar = true;
        }
        for(let i=0; i< realNo; i++){
          this.aggStars[i] = "#04855f";
        }
      }else{
        this.noNotesFound = this.lang.no_note;
      }  
    }).catch(error =>{
      this.dataProvider.errorALertMessage(error);
    })
  }

  /**
   * input alert to add absent note
   * @param notes Array of absence notes
   * @param date Date of the absence
   */
 async addAbsentNote(notes:any, date:any){
    let note = notes.filter((note:any)=>{
      return note.created_by == this.userDetails.details.user_no
    })
    if(note.length == 0){
     const alert = await this.alertCtrl.create({
        header: this.lang.absent_alert_title,
        backdropDismiss: false,
        inputs: [
          {
            name: 'note',
            placeholder: this.lang.absent_alert_text_placeholder,
            type: 'text'
          },
        ],
        buttons: [
          {
            text: this.lang.alert_btn_cancel_text,
          },
          {
            text: this.lang.alert_btn_submit_text,
            handler:(data)=>{
              if(data.note && data.note.trim() != ''){
                this.saveNote(data, notes, date);
              }else{
                this.dataProvider.showToast(this.lang.empty_note);
                return false;
              }
            }
          }
        ]
      })
     await alert.present()
    }else{
      this.dataProvider.showToast(this.lang.already_submit_note);
    }
  }

  /**
   * Save note function for absence 
   * @param noteData contains the note text entered by user
   * @param date contains the date of the absence
   */
  saveNote(noteData:any, notes:any, date:any){
    this.dataProvider.showLoading();
    let data = {
      sid: this.studentDetails.sid,
      cid: this.navData.course_id,
      date: date,
      note: noteData.note,
      user_no: this.userDetails.details.user_no,
      session_id: this.userDetails.session_id
    }

    this.dataProvider.saveAbsenceNote(data).then((response)=>{
      if(response.session){
        this.dataProvider.hideLoading();
        notes.push({
          note: noteData.note,
          ID: response.note_id,
          created_by: this.userDetails.details.user_no
        });
        this.dataProvider.showToast(response.message)
      }else{
        this.dataProvider.hideLoading();
        this.authProvider.flushLocalStorage();
        this.dataProvider.errorALertMessage(response.message);
       // this.app.getRootNav().setRoot("LoginPage");
      }
    }).catch(error=>{
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(error);
    })
  }

  /**
   *  Delete note function for absence 
   * @param notes Absent notes array
   * @param note_id note id
   * @param index index of note from frontend
   */
 async deleteAbsenceNote(notes:any, note_id:any, index:number){
  const alert= await this.alertCtrl.create({
      message: this.lang.want_to_delete,
      backdropDismiss: false,
      buttons: [
        {
          text: this.lang.no,
        },
        {
          text: this.lang.yes,
          handler: ()=>{
            this.dataProvider.showLoading();
            let data = {
              user_no: this.userDetails.details.user_no,
              session_id:  this.userDetails.session_id
            }
            this.dataProvider.deleteAbsenceNote(data, note_id).then((response)=>{
              if(response.session){
                this.dataProvider.hideLoading();
                notes.splice(index, 1);
                this.dataProvider.showToast(response.message);
              }else{
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                this.dataProvider.errorALertMessage(response.message);
              //  this.app.getRootNav().setRoot("LoginPage");
              }
            }).catch(error=>{
              this.dataProvider.hideLoading();
              this.dataProvider.errorALertMessage(error);
            })
          }
        }
      ]
    })
  await alert.present();
  }

  /**
   * Add user notes
   */
  addNotesNote(){
    console.log(this.noteMessage);
    if(this.noteMessage && this.noteMessage.trim() != '') {
      if(this.noteMessage.length <= 45) {
        if(this.canAddStudentNote) {
          this.dataProvider.showLoading();
          let data = {
            sid: this.navData.student_id,
            note: this.noteMessage,
            user_id: this.userDetails.details.user_no,
            rating: this.ratingStars,
            new_rating: JSON.stringify(this.ratingStars)
          }
          this.dataProvider.addStudentNote(data).then((note_id)=>{
            this.dataProvider.hideLoading();
            this.getNotes();
            this.noteMessage = '';
            this.showNoteModal = false;
            this.dataProvider.showToast(this.lang.add_review_success_message);

          }).catch(error=>{
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(error);
          })
        }else{
          this.dataProvider.showToast(this.lang.already_submit_note);  
        }
      }else {
        this.dataProvider.showToast(this.lang.max_note_length);
      }
    }
    else{
      this.dataProvider.showToast(this.lang.empty_note);
    }
  }

  addTextNotesNote(){
    
    if(this.noteMessage && this.noteMessage.trim() != '') {
      if(this.noteMessage.length <= 45) {
        if(this.canAddStudentNote) {
          this.dataProvider.showLoading();
          let data = {
            sid: this.navData.student_id,
            note: this.noteMessage,
            user_id: this.userDetails.details.user_no,
            rating: 0,
            new_rating: JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
          }
          this.dataProvider.addStudentNote(data).then((note_id)=>{
            this.dataProvider.hideLoading();
            this.getNotes();
            this.noteMessage = '';
            this.showNoteModal = false;
            this.dataProvider.showToast(this.lang.add_note_success_message);
          }).catch(error=>{
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(error);
          })
        }else{
          console.log(this.noteMessage);
          this.dataProvider.showToast(this.lang.already_submit_note);  
        }
      }else {
        this.dataProvider.showToast(this.lang.max_note_length);
      }
    }
    else{
      this.dataProvider.showToast(this.lang.empty_note);
    }
  }

 async editDeleteNotes(note_id:any, index:number,note){
   const alert= await this.alertCtrl.create({
      header: this.lang.cange_note,
      backdropDismiss: true,
      mode:'ios',
      buttons: [
        {
          text: this.lang.delete,
          handler: ()=>{
            this.deleteUserNote(note_id, index);
          }
        },
        {
          text: this.lang.edit_title,
          handler: async ()=>{
              // this.dataProvider.presentRatingPopover(this.app_rate,note,(res)=>{
              //   if(res){
              //     console.log(res);
              //     this.udateNotes(res,note_id);
              //   }
              // });
              // const modal = await this.modalController.create({
              //   component: AddReviewComponent,
              //   cssClass: 'my-custom-class',
              //   componentProps: {data: note}
              // });
              // modal.onDidDismiss().then(data => {
              //   console.log(data);
              //   if(data.data.data){
              //     // this.ratingStars = (data.data.data);
              //     // this.noteMessage = data.data.noteMessage;
              //     // this.addNotesNote();
              //     this.udateNotes(data.data,note_id);
              //   }
          
              // });
              // return await modal.present();
              console.log(note);

              if(note.new_ratting === '[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]'){
                this.openNoteModal('note', 'edit', note, note_id);
              } else {
                this.openNoteModal('review', 'edit', note, note_id);
              }

              // this.presentNoteActionSheet('edit', note, note_id);

          }
        }
      ]
    })
   await alert.present();
  }

udateNotes(data,note_id:any){
  let updates={
      sid:this.navData.student_id,
      note_id:note_id,
      rating:data.data,
      new_rating: data.data,
      note:data.noteMessage,
      updated_by:this.userDetails.details.user_no
  }
  this.dataProvider.editAbsentNotes(updates).then(res=>{
    console.log(res);
    if(res){
      this.dataProvider.showToast(res.data.msg);
      this.getNotes();
    }
  }).catch(err=>{
    console.log(err);
    this.dataProvider.showToast(err.message);
  })
}

 async deleteUserNote(note_id:any, index:number){
   const alert= await this.alertCtrl.create({
      message: this.lang.want_to_delete,
      backdropDismiss: false,
      buttons: [
        {
          text: this.lang.no,
        },
        {
          text: this.lang.yes,
          handler: ()=>{
            this.dataProvider.showLoading();
            let data = {
              user_no: this.userDetails.details.user_no,
              session_id:  this.userDetails.session_id
            }
            this.dataProvider.deleteStudentNote(data, note_id).then((response)=>{
              this.canAddStudentNote = true;
              this.getNotes();
              this.dataProvider.hideLoading();
            }).catch(error=>{
              this.dataProvider.hideLoading();
              this.dataProvider.errorALertMessage(error);
            })
          }
        }
      ]
    })
   await alert.present();
  }

  /**
   * function to match the dates
   * @param date date with which compare the current date
   */
  checkNoteDate(date:Date){
    let currentDate = new Date();
    if(date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()){
      return true;
    }else{
      return false;
    }
  }

  /**
   * alert to show image take choice
   */
 async takePicture(){
    if(this.userType == '1' || this.userType == '3'){
      const alert= await this.alertCtrl.create({
        header: this.lang.image_option,
        buttons: [
          {
            text: this.lang.camera,
            handler: ()=>{
              this.openCamera();
            }
          },
          {
            text: this.lang.gallery,
            handler: ()=>{
              this.openGallery()
            }
          }
        ]
      })
      await alert.present();
    }
  }

  /**
   * mobile camera to take image 
   */
  openCamera(){
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetHeight: 500,
      targetWidth: 500
    }

    this.camera.getPicture(options).then((imageData)=>{
      if(imageData){
        this.dataProvider.showLoading();
        let data = {
          user_no: this.userDetails.details.user_no,
          session_id: this.userDetails.session_id,
          imageData: 'data:image/png;base64,'+imageData,
          sid: this.navData.student_id
        }
        this.dataProvider.updateUserImage(data).then((response)=>{
          this.dataProvider.hideLoading();
          if (response.session) {
            this.studentDetails.pic = response.url;
          } else {
            this.authProvider.flushLocalStorage();
            this.dataProvider.errorALertMessage(response.message);
           // this.app.getRootNav().setRoot("LoginPage");
          }
        }).catch((error)=>{
          this.dataProvider.hideLoading();
          this.dataProvider.errorALertMessage(error);
        })
      }
    })
  }

  /**
   * Open gallery to take image
   */
  openGallery(){
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetHeight: 500,
      targetWidth: 500
    }

    this.camera.getPicture(options).then((imageData)=>{
      if(imageData){
        this.dataProvider.showLoading();
        let data = {
          user_no: this.userDetails.details.user_no,
          session_id: this.userDetails.session_id,
          imageData: 'data:image/png;base64,'+imageData,
          sid: this.navData.student_id
        }
        this.dataProvider.updateUserImage(data).then((response)=>{
          this.dataProvider.hideLoading();
          if (response.session) {
            this.studentDetails.pic = response.url;
          } else {
            this.authProvider.flushLocalStorage();
            this.dataProvider.errorALertMessage(response.message);
           // this.app.getRootNav().setRoot("LoginPage");
          }
        }).catch((error)=>{
          this.dataProvider.hideLoading();
          this.dataProvider.errorALertMessage(error);
        })
      }
    })
  }

  getSelectedStars(){
    return new Array(5);
  }

  selectStarsForRating(index:number){
    this.ratingStars = index+1;
    this.selections= ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
    for(let i=0;i<=index;i++){
      this.selections[i] = '#04855f';
    }
  }


  async presentNoteActionSheet(mode, note, note_id) {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this.student_detailse.student_review,
          handler: () => {
            this.openNoteModal('review', mode, note, note_id);
          },
        },
        {
          text: this.student_detailse.student_note,
          handler: () => {
            this.openNoteModal('note', mode, note, note_id);
          },
        },
        {
          text: this.student_detailse.student_point,
          handler: () => {
            this.presentPointsActionSheet(this.student_detailse);
          },
        },
        {
          text: this.student_detailse.cancel,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async presentPointsActionSheet(student) {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: this.createButtons(student)
        
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    if(role && role != 'backdrop'){
      this.addStudentPoints(role, student);
    }
  }

  createButtons(student) {
    let buttons = [];
    for (var index in this.student_points) {
      let button = {
        text: this.student_points[index],
        role: this.student_points[index],
        handler: () => {
          console.log('setting icon ' + this.student_points[index]);
          // this.addStudentPoints(this.student_points[index],student);
        }
      }
      buttons.push(button);
    }
    return buttons;
  }

  addStudentPoints(point, student){
    console.log(this.userDetails);
    console.log(student)
    let body = {
      sid: this.navData.student_id,
      userId: this.userDetails.details.user_no,
      points: point
    }
    this.dataProvider.addStudentPoints(body).then(res => {
      if(res.success){
        this.dataProvider.showToast(res.msg);
      }
    })
  }


  async openNoteModal(mode, note_mode, note, note_id){
    console.log(note_mode);
    if(mode === 'note'){
      // this.ratingStars = 1;
      // this.selections= ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee']
      
      if(note_mode === 'edit'){
        this.canAddStudentNote = true;
        this.noteMessage = note.note;
      }
      this.showNoteModal = true;
    } else {
      const modal = await this.modalController.create({
        component: AddReviewComponent,
        cssClass: 'my-custom-class',
        componentProps: note_mode === 'edit' ? {data: note} : null
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if(data.data.data){
          this.ratingStars = (data.data.data);
          this.noteMessage = data.data.noteMessage;
          if(note_mode === 'edit'){
            this.udateNotes(data.data,note_id);
          } else {
            this.addNotesNote();
          }
        }
  
      });
      return await modal.present();
    }
    
  }

  hideNoteModal(){
    this.showNoteModal = false;
  }
  openPdf(){
    let data={
      school_id:this.userDetails.details.school_id,
      sid:this.navData.student_id
    }
    let planData={
      user_no:this.userDetails.details.user_no
    }
    this.dataProvider.showLoading();
    this.dataProvider.openPdf(planData).then(res=>{
      let url=env.serverURL+'student_report_new?school_id='+data.school_id+'&sid='+data.sid;
      this.dataProvider.openStudentReport(url).then(res=>{
        this.dataProvider.hideLoading();
        console.log(res);
        if(res){
          window.open(res.url, '_system');
        }else{
          this.dataProvider.showToast('Unable to generate report');
        }
      }).catch(e=>{
          this.dataProvider.hideLoading();
          this.dataProvider.showToast('Unable to generate report');
      })
    }).catch(e=>{
      this.dataProvider.hideLoading();
      console.log(e)
      this.presentAlertConfirm();
    })
  }

    async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: this.planLang.not_valid,
      mode:'ios',
      buttons: [
        {
          text: this.planLang.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: this.planLang.subscribe,
          handler: () => {
            console.log('Confirm Okay');
            // this.subscription.blockAds();
            this.router.navigate(['available-plan']);
          }
        }
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

  async presentPrintOption() {
    if(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN){
     const alert=await this.alertCtrl.create({
        header: this.lang.report_option,
        buttons: [
          {
            text: this.lang.exel,
            handler: () => {
              this.printReport('exel');
            }
          },
          {
            text: this.lang.pdf,
            handler: () => {
              this.printReport('pdf');
            }
          }
        ]
      })
     await alert.present()
    }else{
      this.dataProvider.showToast(this.lang.no_internet);
    }
  }

  printReport(type){
    let planData={
      user_no:this.userDetails.details.user_no,
      report_type: type
    }
    this.dataProvider.showLoading();
    this.dataProvider.openPdf(planData).then(res=>{
        let course = this.navData;
        // this.courseInfo = course;
        let studentData = {
          // "date": this.dataProvider.getFormatedDate(this.dateSelected),
          "school_id":this.userDetails.details.school_id,
          "sid": this.navData.student_id,
          "report_type":type
        }

        if(type === "pdf"){
          let url = env.serverURL+'student_report_new?school_id='+studentData.school_id+'&sid='+studentData.sid;
          this.dataProvider.openStudentReport(url).then(res=>{
            this.dataProvider.hideLoading();
            console.log(res);
            if(res){
              // window.open(res.url, '_system');
              let options: PrintOptions = { orientation: 'portrait'};
                this.printer.print(res.data,options).then((onSuccess:any)=>{
              },(e:any)=>{
                   console.log('printer.print',e)
                   this.dataProvider.showToast(this.lang.report_error);
              });
            }else{
              this.dataProvider.showToast('Unable to generate report');
            }
          }).catch(e=>{
              this.dataProvider.hideLoading();
              this.dataProvider.showToast('Unable to generate report');
          })
        }
        else {
          this.dataProvider.getStudentReport(studentData).then(res => {
            this.dataProvider.hideLoading();
            if(res.data){
              if(type=="pdf"){
                let options: PrintOptions = { orientation: 'portrait'};
                  this.printer.print(res.data,options).then((onSuccess:any)=>{
                },(e:any)=>{
                     console.log('printer.print',e)
                     this.dataProvider.showToast(this.lang.report_error);
                });
              }else{
                window.open(res.data, '_system');
              }
            }else{
              this.dataProvider.showToast(this.lang.report_error);
            }
          },error=>{
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(this.lang.report_error);
          })
        }
        
    }).catch(e=>{
      this.dataProvider.hideLoading();
      console.log(e)
      this.presentAlertPlanConfirm();
    });
      
	}

  async presentAlertPlanConfirm() {
    const alert = await this.alertCtrl.create({
      header: this.planLang.not_valid,
      mode:'ios',
      buttons: [
        {
          text: this.planLang.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: this.planLang.subscribe,
          handler: () => {
            console.log('Confirm Okay');
            // this.subscription.blockAds();
            this.router.navigate(['available-plan']);
          }
        }
      ]
    });

    await alert.present();
  }

}
 
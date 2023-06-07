import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
//import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { File as FILE, FileEntry } from '@ionic-native/file/ngx';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
@Component({
  selector: 'app-follow-bulletins',
  templateUrl: './follow-bulletins.page.html',
  styleUrls: ['./follow-bulletins.page.scss'],
})
export class FollowBulletinsPage implements OnInit {
  lang: any;
  allUsers: any = [];
  users: any;
  tital: any;
  selectedUsers: any = [];
  userDetails: any = {};
  formdata: any = new FormData();
  selectedDocument: any = [];
  inputText = true;
  inputUser = false;
  uploadStaus: any;
  cameraImage64: any = '';
  constructor(public navCtrl: NavController,
    //	public navParams: NavParams,  
    public dataProvider: DataService,
    public authProvider: AuthService,
    private file: FILE,
    //public app: App, 
    public translate: TranslateService,
    public alertCtrl: AlertController,
    public camera: Camera,
    public network: Network,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public zone: NgZone,
    public platform: Platform) {

    this.translate.get("alertmessages").subscribe((response) => {
      this.lang = response;
    })
    this.dataProvider.events.subscribe(res => {
      console.log(res);
      this.uploadStaus = res;

    })
    this.cameraImage64 = this.router.getCurrentNavigation().extras.state.cameraImage.queryParams.base64Image;
    console.log('cameraImage64 :::', this.cameraImage64);

    this.getImageToFile(this.cameraImage64).then((inputFile: any) => {
      console.log('getImageToFile SUCC', inputFile);
      const fileName = inputFile.fileObj.name || "UNKNOWN.PNG";
      const file = inputFile.fileObj || {};
      file['extention'] = fileName.split(".").pop();
      file['auto_created'] = true;
      file['name'] = fileName;
      file['imgBlob'] = inputFile.imgBlob;
      file['currentImgSrc'] = (<any>window).Ionic.WebView.convertFileSrc(this.cameraImage64) ; //updated at 18/12/2021

      this.selectedDocument.push(file);

    }).catch((e: any) => {
      console.log('getImageToFile ERROR', e);
    });
    console.log('in counstrucor selectedDocument', this.selectedDocument);
  }

  async openImgPreview(image) {
    console.log("openImgPreview==>DOc==>", image);
    const imgSrc = (<any>window).Ionic.WebView.convertFileSrc(image);
    console.log("WIUND::::: ", imgSrc)
    const alert = await this.alertCtrl.create({
      header: 'Preview',
      cssClass:'previewImg',
      message: '<img src="' + imgSrc + '" class="card-alert">',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();

  }

  getImageToFile(cropImageSrc: string) {
    return new Promise((resolve, reject) => {
      this.file.resolveLocalFilesystemUrl(cropImageSrc).then(entry => {
        (<FileEntry>entry).file((fileObj) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], {
              type: fileObj.type
            });
            resolve({ fileObj: fileObj, imgBlob: imgBlob });
          }
          reader.readAsArrayBuffer(fileObj);
        }, (err) => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
  }

  ngOnInit() {
    if (localStorage.getItem("userloggedin")) {
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      console.log("usrdtls::", this.userDetails);
      this.getUsers();
    }
  }
  cahnge() {
    console.log(this.formdata);
  }
  openUser() {
    if (this.checkForm()) {
      this.inputText = false;
      this.inputUser = true;
    }

  }
  /* markUser(users) {
    console.log(users);
    if (this.userDetails.details.user_no != users.user_no) {
      this.selectedUsers.push(users.user_no);
    } else {
      this.dataProvider.showToast(this.lang.same_user)
    }

  } */

  onSelectFiles(ev: any) {
    console.log('ev', ev);
    let files = ev && ev.target && ev.target.files ? ev.target.files : [];

    console.log('onSelectFiles', files);
    for (let i = 0; i < files.length; i++) {
      let file: any = ev.target.files[i] ? ev.target.files[i] : <any>{};
      /*   updated on 18/12/2021  */
      
      console.log('currentImgSrcFILE--', file);
      if (file) {
        let ext = file.name.split(".").reverse()[0];
        //let tmpSrc =  (<any>window).URL.createObjectURL(file);
        // console.log('::tmpSrc::--',tmpSrc);
        //const imgSrc= (<any>window).Ionic.WebView.convertFileSrc(tmpSrc);

        const reader = new FileReader();
        reader.onloadend = (e) => {
          //resolve({fileObj : fileObj,imgBlob:imgBlob}); 
          console.log('onloadend reader--', e);
          file['currentImgSrc'] = reader.result;
        }
        reader.readAsDataURL(file);
        //console.log(ext);
        if (ext == 'jpg' || ext == 'png' || ext == 'doc' || ext == 'docx' || ext == 'pdf' || ext == 'jpeg') {
          file.extention = ext;
          this.selectedDocument.push(file);
          console.log("slected docs::",this.selectedDocument);
          //file['currentImgSrc']= e.target.result;
        } else {
          this.dataProvider.showToast(this.lang.file_format_error);
        }
      }
    }
  }

  getUsers() {
    let data = {
      'school_id': this.userDetails.details.school_id
    }
    this.dataProvider.showLoading();
    this.dataProvider.getSchoolUsers(data).then(res => {
      this.dataProvider.hideLoading();
      //console.log('seminar class',res);
      if (res.data) {
        this.users = res.data;
        if (this.users.length > 1) {
          this.allUsers = this.users.splice(0, 20);
        } else {
          this.allUsers = this.users;
        }
      }

    }).catch(error => {
      this.dataProvider.hideLoading();
      this.dataProvider.showToast(error);
      console.log(error)
    })
  }

  doInfinite(infiniteScroll: any) {
    setTimeout(() => {
      this.allUsers = this.allUsers.concat(this.users.splice(0, 20));
      infiniteScroll.target.complete();
    }, 500);
  }

  filterList(event) {
    //this.selectTopic=[];
    let input = (<HTMLInputElement>document.getElementById('search')).value;
    console.log(input);

    let data = {
      input: input,
      school_id: this.userDetails.details.school_id
    }
    this.dataProvider.searchUser(data).then(resp => {
      if (resp.data) {
        this.users = resp.data;
        if (this.users.length > 1) {
          this.allUsers = this.users.splice(0, 20);
        } else {
          this.allUsers = this.users;
        }
      }
    }).catch(arr => {
      console.log(arr)
    })
  }

  scanDocument() {
    document.getElementById('myFileInput').click()
  }

  removeImage(i) {
    this.selectedDocument.splice(i, 1);
    //console.log(this.selectedDocument);
  }
  submit() {
    console.log("selected users ln302::", this.selectedUsers);
    this.formdata.append('school_id', this.userDetails.details.school_id);
    this.formdata.append('sended_by', this.userDetails.details.user_no);
    this.formdata.append('sended_to', this.selectedUsers);
    this.formdata.append('tital', this.tital);
    for (let k in this.selectedDocument) {
      const fileEle = this.selectedDocument[k];
      if (fileEle.hasOwnProperty('auto_created') && fileEle.hasOwnProperty('imgBlob')) {
        this.formdata.append('files[]', fileEle['imgBlob'], fileEle['name']);
      } else {
        this.formdata.append('files[]', fileEle);
      }
    }
    this.dataProvider.showLoading();
    // this.dataProvider.createBulletins(this.formdata).then(res=>{
    //   this.dataProvider.hideLoading();
    //     console.log(res);
    //     this.dataProvider.showToast(res.message);
    //     this.router.navigate(['bulletins']);
    //   }).catch(err=>{
    //     this.dataProvider.showToast(err.message);
    //     console.log(err);
    //   })
    this.dataProvider.createBulletins(this.formdata).subscribe(res => {
      this.dataProvider.hideLoading();
      console.log(res);
      this.router.navigate(['bulletins']);
    }, e => {
      this.dataProvider.hideLoading();
    })

  }

  checkForm() {
    if (!this.selectedDocument) {
      this.dataProvider.showToast(this.lang.doc_error);
      return (false)
    } else if (this.selectedDocument.length < 1) {
      this.dataProvider.showToast(this.lang.doc_error);
      return (false)
    }
    else if (!this.tital || this.tital == '') {
      this.dataProvider.showToast(this.lang.title_error);
      return (false)
    }
    else {
      return (true);
    }
  }
  //===============added on date 22/12/2021 for selecting multiple users to share bullentins=========
  selectUser(users, eve) {    
    if(eve.detail.checked ==true){
      this.selectedUsers.push(users.user_no);
    }else{
      let iof = this.selectedUsers.indexOf(users.user_no);
      if(iof>=0){
        this.selectedUsers.splice(iof,1);
      }
    }
  }

}

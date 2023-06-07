import { Component, OnInit, Input,NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { DatabaseService } from '../service/database/database.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {CreateClassPage } from '../create-class/create-class.page';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-requested-parent',
  templateUrl: './requested-parent.page.html',
  styleUrls: ['./requested-parent.page.scss'],
})
export class RequestedParentPage implements OnInit {
lang:any;
lang1:any;
userDetails:any;
userType: string;
parentList:any=[];
noParants=false;
category='parents';
allParentList:any=[];
allParentFilter:any=[];
  constructor(public navCtrl: NavController, 
              public translate: TranslateService,
              public dataProvider: DataService,  
              public authProvider: AuthService,
              public alertCtrl: AlertController, 
              private route : ActivatedRoute,
              public zone:NgZone,
              private router:Router,
              public modalController: ModalController) {
      				this.translate.get("alertmessages").subscribe((res)=>{
                      this.lang = res;
              })
              this.translate.get("reg_new_parent").subscribe((res)=>{
                this.lang1 = res;
              })
              
          }

  ngOnInit() {
  }

  ionViewWillEnter(){
  	if(localStorage.getItem("userloggedin")){
      console.log('logged in');
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      this.userType = this.userDetails.details.user_type;
      console.log('logged in userDetails',this.userDetails.details);
      this.getRequestedParentList();
      this.getAllParents();
    }else{
      this.dataProvider.hideLoading();
      console.log('not logged in');
      this.authProvider.flushLocalStorage();
      this.router.navigate(['login'], { replaceUrl: true });
    }
  }

  getRequestedParentList(){
  	 let data={
      'school_id':this.userDetails.details.school_id
    }
    this.dataProvider.getRequestedParents(data).then(res=>{
      if(res.data){
        if(res.data.length>0){
          this.parentList=res.data;
        }else{
          this.noParants=true;
        }
      }else{
        this.noParants=true;
      }
    },error=>{
      console.log(error);
    })
  }  
  getAllParents(){
     let data={
      'school_id':this.userDetails.details.school_id
    }
  // this.dataProvider.showLoading();
    this.dataProvider.getAllParents(data).then(res=>{
   //  this.dataProvider.hideLoading(); 
      if(res.data){
        if(res.data.length>0){
          this.allParentList=res.data;
          if(this.allParentList.length > 1){
            this.allParentFilter = this.allParentList.splice(0, 20);
          }else{
            this.allParentFilter = this.allParentList;
          }
        }else{
          this.noParants=true;
        }
      }else{
          this.noParants=true;
        }
    },error=>{
   //  this.dataProvider.hideLoading();
      console.log(error);
    })
  }
  doInfinite(infiniteScroll:any) {
    setTimeout(() => {
      this.allParentFilter = this.allParentFilter.concat(this.allParentList.splice(0, 20));
      infiniteScroll.target.complete();
    }, 500);
  }

  acceptRequest(i,param){
    let elem= <HTMLInputElement>(document.getElementById('check'+i));
    let is_permitted;
    if(elem.checked){
      is_permitted=true;
    }else{
      is_permitted=false;
    }
    let data={
      'user_no':param.user_no,
      'is_permitted':is_permitted,
      'school_id':this.userDetails.details.school_id
    }
      this.dataProvider.acceptRequestedParents(data).then(res=>{
         if(res.session){
           this.getRequestedParentList();
           this.dataProvider.showToast(this.lang.request_accepted);
         }else{
           this.dataProvider.showToast(this.lang.request_not_accepted);
         }
      },error=>{
        this.dataProvider.showToast(error);
        console.log(error);
      })
  }


  changeStatus(i,param){
    let elem= <HTMLInputElement>(document.getElementById('permit'+i));
    let is_permitted;
    if(elem.checked){
      is_permitted=1;
    }else{
      is_permitted=2;
    }
    let data={
      'user_no':param.user_no,
      'is_permitted':is_permitted,
      'school_id':this.userDetails.details.school_id
    }
     this.dataProvider.showLoading();
      this.dataProvider.changeParentStatus(data).then(res=>{
        this.dataProvider.hideLoading();
       // console.log('parents',res);
         if(res.session){
           this.getAllParents();
           this.dataProvider.showToast(res.msg);
         }else{
           this.dataProvider.showToast(res.msg);
         }
      },error=>{
        this.dataProvider.showToast(error);
        this.dataProvider.hideLoading();
        console.log(error);
      })
  }
  deleteRequest(param){
    let data={
      'user_no':param.user_no,
      'school_id':this.userDetails.details.school_id
    }
     this.dataProvider.showLoading();
      this.dataProvider.deleteRequestedParents(data).then(res=>{
        this.dataProvider.hideLoading();
       // console.log('parents',res);
         if(res.session){
           this.getRequestedParentList();
           this.dataProvider.showToast(this.lang.request_deleted);
         }else{
           this.dataProvider.showToast(this.lang.request_not_deleted);
         }
      },error=>{
        this.dataProvider.showToast(error);
        this.dataProvider.hideLoading();
        console.log(error);
      })
  }

  async deleteParent(i,list){
    console.log(list)

     const alert= await this.alertCtrl.create({
      header: this.lang.delete_parent,
      backdropDismiss: true,
      mode:'ios',
      buttons: [
        {
          text: this.lang.delete,
          handler: ()=>{
           // this.deleteUserNote(note_id, index);
               let deleteData={
                 parent_user_no:list.user_no,  
                 user_no: this.userDetails.details.user_no,
                 school_id: this.userDetails.details.school_id,
                 session_id: this.userDetails.session_id
               }
               this.dataProvider.deleteParent(deleteData,res=>{
                   // callback(res);
                   this.getAllParents();
                   console.log(res);
                 });
              }
        },
        {
          text: this.lang.alert_btn_cancel_text,
          handler: ()=>{
          }
        }
      ]
    })
   await alert.present();
  }

  filterList(event){
    //this.selectTopic=[];
    let input = (<HTMLInputElement>document.getElementById('search')).value;
    let data={
      'school_id':this.userDetails.details.school_id,
      'search_str':input
    }
    this.dataProvider.serachParent(data).then(res => {
        if( res.data){
          console.log('search res===>',res);
          if(res.data){
            this.allParentList=res.data;
            // this.allParentFilter = this.allParentList.splice(0, 20);
              if(this.allParentList.length > 1){
                 this.allParentFilter = this.allParentList.splice(0, 20);
              }else{
                this.allParentFilter = this.allParentList;
              }
          }else{
              this.noParants=true;
          }
        }
    }).catch(error=>{
      this.dataProvider.showToast(error);
     // console.log(error)
    }) 
  }

  async presentAlert(){
  	const alert= await this.alertCtrl.create({
        header: this.lang1.pagetitle,
        inputs: [
          {
            name: 'parentName',
            type: 'text',
            placeholder: this.lang1.parentname,
          },
          {
            name: 'email',
            type: 'email',
            placeholder: this.lang1.email
          },
          {
            name: 'parentId',
            type: 'number',
            placeholder: this.lang1.parentid
          },
          {
            name: 'password',
            type: 'password',
            placeholder: this.lang1.password
          },
          {
            name: 'c_pass',
            type: 'password',
            placeholder: this.lang1.c_pass
          },
          {
            name: 'address',
            type: 'text',
            placeholder: this.lang1.address,
          },
          {
            name: 'personalNote',
            type: 'text',
            placeholder: this.lang1.personal_note,
          }
         
        ],
        buttons: [
          {
            text: 'cancel',
            role: 'cancel'
          },
          {
            text: this.lang1.reg_btn,
            handler: (data)=>{
              console.log(data);
              if(this.parentDataValidate(data)==false){
                return false;
              } else {
                data.parentId = parseInt(data.parentId);
                if(Number.isInteger(data.parentId)){
                  this.dataProvider.showLoading();
                  data.user_no = this.userDetails.details.user_no;
                  data.school_id = this.userDetails.details.school_id;
                  this.dataProvider.registerNewParent(data).then((res)=>{
                    this.dataProvider.hideLoading();
                    if(res.session){
                      //this.getStudents(false);
                      this.dataProvider.showToast(res.message);
                    }else{
                      this.dataProvider.showToast(res.message); 
                      return false;
                    }
                  }).catch((err)=>{
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(err);
                  })
                }else{
                  this.dataProvider.showToast(this.lang.user_id_required);
                  return false;
                }
              }
            }
          }
        ]
      })
      await alert.present();
  }

  parentDataValidate(data){
    let isValid = true;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(data.parentName=='' || data.parentName.trim()==''){ isValid = false; this.dataProvider.showToast(this.lang.usename_required); }
    if(data.parentId=='' || data.parentId==0){ isValid = false; this.dataProvider.showToast(this.lang.user_id_required); }    
    if(data.email.length > 0 && !data.email.match(pattern)){ isValid = false; this.dataProvider.showToast(this.lang.email_valid); }    
    if(data.password==''){ isValid = false; this.dataProvider.showToast(this.lang.password_required); }    
    if(data.c_pass != data.password){ isValid = false; this.dataProvider.showToast(this.lang.confirm_password_required); }
    return isValid;
  }
}

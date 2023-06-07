import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.page.html',
  styleUrls: ['./edit-user-profile.page.scss'],
})
export class EditUserProfilePage implements OnInit {
  navData: any;
  lang: any;
  userDetails: any;
  user: any = {};
  classes: any = [];
  show_save_user_spinner: boolean = false;
  show_delete_user_spinner: boolean = false;
  constructor(public navCtrl: NavController,
    public dataProvider: DataService,
    public authProvider: AuthService,
    public translate: TranslateService,
    public alertCtrl: AlertController,
    public network: Network,
    private route: ActivatedRoute,
    private router: Router,
    public zone: NgZone,
    public platform: Platform) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.navData = this.router.getCurrentNavigation().extras.state.user;
        console.log("navData===>", this.navData);
        this.user.email_id = this.navData.email_id;
        this.user.first_name = this.navData.first_name;
        this.user.username = this.navData.username;
        this.user.user_type = this.navData.user_type;
        this.user.status = this.navData.status;
        this.user.class = this.navData.classes;
      }
    });
    this.translate.get("alertmessages").subscribe((response) => {
      this.lang = response;
    })
    if (localStorage.getItem("userloggedin")) {
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      console.log("userDetais::", this.userDetails);
    }
    this.getClasses();
  }

  ngOnInit() {

  }

  saveUserProfile() {
    if (this.user.password != this.user.c_pass) {
      this.dataProvider.showToast(this.lang.pass_not_match);
    } else {
      console.log(this.user.class);
      this.show_save_user_spinner = true;
      this.user.school_id = this.navData.school_id;
      this.user.userId = this.navData.user_no;
      this.user.user_no = this.userDetails.details.user_no;
      console.log('userData==>', this.user);
      if(typeof this.user.class === 'object'){
        this.user.class = JSON.stringify(this.user.class);
      }
      // if(this.user.attendence_permit == true){
      //   this.user.attendence_permit = 1;
      // }else{
      //   this.user.attendence_permit = 0;

      // }
      let interval = setInterval(()=>{
        //call other function whatever you want to execute
        clearInterval(interval);
        this.show_save_user_spinner = false;
        this.dataProvider.updateUserProfile(this.user, res => {
          const navigation: NavigationExtras = {
            state: {
              isUpdated: true
            }
          };
          console.log("navigation==>", navigation);
          this.zone.run(() => {
            this.router.navigate(['users-list'], navigation);
          });
        });
        } ,  2000)
      
    }
  }

  async deleteUser() {
    const alert = await this.alertCtrl.create({
      header: this.lang.delete_user,
      backdropDismiss: true,
      mode: 'ios',
      buttons: [
        {
          text: this.lang.delete,
          handler: () => {
            this.show_delete_user_spinner = true;
            let deleteData = {
              users_user_no: this.navData.user_no,
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              session_id: this.userDetails.session_id
            }
            let interval = setInterval(()=>{
              //call other function whatever you want to execute
              clearInterval(interval);
              this.show_delete_user_spinner = false;
              this.dataProvider.deleteUser(deleteData, res => {
                const navigation: NavigationExtras = {
                  state: {
                    isUpdated: true
                  }
                };
                this.zone.run(() => {
                  this.router.navigate(['users-list'], navigation);
                })
              })
              } ,  2000)
            
          }
        },
        {
          text: this.lang.alert_btn_cancel_text,
          handler: () => { }
        }
      ]
    })
    await alert.present();
  }

  getClasses() {
    let data = {
      "user_no": this.userDetails.details.user_no,
      "school_id": this.userDetails.details.school_id,
      "session_id": this.userDetails.session_id
    };
    this.dataProvider.showLoading();
    this.dataProvider.getCourses(data).then(response => {
      this.dataProvider.hideLoading();
      if (response.session) {
        this.classes = response.data;
        console.log("classes::", this.classes);
      }
    }).catch(error => {
      this.dataProvider.hideLoading();
      this.dataProvider.errorALertMessage(error);
    })
  }

  check() {
    console.log(this.user.attendence_permit);
  }
  portChange(event) {
    console.log("ev", event);
    this.user.class= JSON.stringify(event.value);
    console.log("USER CLASS:: ",this.user.class);
  }

}

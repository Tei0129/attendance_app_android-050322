import { Component, OnInit, Input, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
  allUsers: any = [];
  userDetails: any;
  selectedUsers: any = [];
  trimmedUsers: any = [];
  noUser = false;
  lang: any;
  show_loading: boolean = true;

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService,
    public dataProvider: DataService,
    public authProvider: AuthService,
    public zone: NgZone,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let isUpdated = this.router.getCurrentNavigation().extras.state.isUpdated;
        if (isUpdated) {
          this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
          this.getUsers(false);

        }
      }
    });
    this.translate.get("alertmessages").subscribe((res) => {
      this.lang = res;
    })
  }

  ngOnInit() {
    if (localStorage.getItem("userloggedin")) {
      // console.log('logged in');
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      this.getUsers();

    }
  }

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  getUsers(loader = true) {
    let data = {
      'school_id': this.userDetails.details.school_id,
      'user_no': this.userDetails.details.user_no
    }
    // if (loader) this.dataProvider.showLoading();
    this.dataProvider.getAllUsers(data).then(res => {
      // if (loader) this.dataProvider.hideLoading();
      this.show_loading = false;
      console.log('allUsersdata', res.data);
      if (res.session) {
        this.selectedUsers = res.data;
        if (this.selectedUsers.length > 1) {
          
          this.trimmedUsers = this.selectedUsers.splice(0, 20);
          // if (loader) this.dataProvider.hideLoading();
        } else {
          this.trimmedUsers = this.selectedUsers;
          // if (loader) this.dataProvider.hideLoading();
        }
      } else {
        this.noUser = true;
        console.log('err', res);
      }

    }, error => {
      this.noUser = true;
      // if (loader) this.dataProvider.hideLoading();
      this.show_loading = false;
      console.log(error);
    })
  }

  doInfinite(infiniteScroll: any) {
    this.show_loading = true;
    infiniteScroll.target.complete();
    setTimeout(() => {
      this.show_loading = false;
      console.log('this.trimmedUsers--', this.trimmedUsers);
      this.trimmedUsers = this.trimmedUsers.concat(this.selectedUsers.splice(0, 20));
      infiniteScroll.target.complete();
    }, 500);

  }


  addNewUser() {
    this.router.navigate(['add-user']);
  }

  openEditPage(user) {
    console.log("nav user1111",user);
    const navigation: NavigationExtras = {
      state: { user: user }
    };
    
      this.router.navigate(['edit-user-profile'], navigation);
    
  }


}

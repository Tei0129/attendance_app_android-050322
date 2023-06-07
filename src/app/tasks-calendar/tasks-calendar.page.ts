import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { DatabaseService } from '../service/database/database.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CreateClassPage } from '../create-class/create-class.page';
import { PopoverController } from '@ionic/angular';
import { LoaderComponent } from '../components/loader/loader.component';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tasks-calendar',
  templateUrl: './tasks-calendar.page.html',
  styleUrls: ['./tasks-calendar.page.scss'],
})
export class TasksCalendarPage implements OnInit {
  classes: any = [];
  selectedClass: any = [];
  noDataFound: string = "";
  userType: any;
  popOver: any;
  lang: any = {};
  lang1: any = {};
  navData: any;
  data: any = [];
  dataAll: any = [];
  userDetails: any = {};
  category: any;
  classBackgroundColor = ["#ff7043", "#2962ff", "#43a047", "#6d4c41", "#ffab00", "#00b0ff", "#651fff", "#2962ff", "#d81b60", "#6a1b9a"]

  constructor(
    public navCtrl: NavController,
    // public app: App,
    public translate: TranslateService,
    public dataProvider: DataService,
    public authProvider: AuthService,
    //public events: Events,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    public popoverController: PopoverController,
    public zone: NgZone,
    private router: Router,
    public modalCtrl: ModalController,
    public actionSheet: ActionSheetController
  ) {
    this.translate.get("sidemenu").subscribe((res) => {
      this.lang = res;
      //console.log(this.lang);
    });
    this.translate.get("alertmessages").subscribe((response) => {
      this.lang1 = response;
    });
  }

  ngOnInit(loader: boolean = true) {
    if (localStorage.getItem("userloggedin")) {
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      console.log('userDetails==>', this.userDetails);
      console.log("classes ==>", this.classes);
      this.userType = this.userDetails.details.user_type;
      this.getCourse(loader);

    } else {
      this.dataProvider.hideLoading();
      //  console.log('not logged in');
      this.authProvider.flushLocalStorage();
      this.router.navigate(['login'], { replaceUrl: true });

    }

  }
  async presentPopover() {
    this.popOver = await this.popoverController.create({
      component: LoaderComponent,
      backdropDismiss: true,
      //event: ev,
      translucent: false,
      // animated:true,
      cssClass: 'loaderStyle',
      // mode:"ios"
    });
    return this.popOver.present();

  }
  dissmissPopOver() {
    setTimeout(() => {
      this.popOver.dismiss();
    }, 500);

  }

  getCourse(loader: boolean = true) {
    if (loader) this.presentPopover();
    let data = {
      "user_no": this.userDetails.details.user_no,
      "school_id": this.userDetails.details.school_id,
      "session_id": this.userDetails.session_id
    };

    this.dataProvider.getCourses(data).then(response => {
      console.log('classes response', response);
      if (loader) this.dissmissPopOver();
      if (response.session) {
        this.dataProvider.syncOffileData();
        let courses = response.data;
        if (response.linkData != undefined) {
          this.authProvider.piblisEvenetActiveLink(response.linkData);
          //this.events.publish("activeLink", response.linkData)
        }
        if (courses && courses.length > 0) {
          let i = 0;
          this.classes = courses;

          this.classes.forEach((course) => {
            course.backgroundColor = this.classBackgroundColor[i];
            i++;
            if (i == 9) i = 0;
          })
        } else {
          this.noDataFound = this.lang.no_class_found;
          this.classes = [];
        }
      } else {
        //  console.log('here');
        this.authProvider.flushLocalStorage();
        // this.dataProvider.errorALertMessage(response.message);
        this.router.navigate(['login'], { replaceUrl: true });
        // this.app.getRootNav().setRoot("LoginPage");
      }
    }).catch(error => {
      if (loader) this.dissmissPopOver();
      // this.dataProvider.errorALertMessage(error);
    })
  }

  openCalendar() {
    if (this.selectedClass.length < 1) {
      this.dataProvider.showToast(this.lang1.select_class);
    } else {
      let studentData = {
        "user_no": this.userDetails.details.user_no,
        "session_id": this.userDetails.session_id,
        "course_id": JSON.stringify(this.selectedClass),
        "school_id": this.userDetails.details.school_id,
      }
      console.log("multiple classes==>", studentData);
      this.dataProvider.showLoading();
      this.dataProvider.getAllClassNotes(studentData).then(res => {
        this.dataProvider.hideLoading();
        console.log("res from tasl-calendarr", res);
        if (res) {
          this.router.navigate(['note-calendar'], { state: { note: res, state: this.selectedClass } });
        }
      }).catch(error => {
        this.dataProvider.hideLoading();

        console.log(error);
      });

    }
  }
  selectUser(course, eve, id) {
    console.log('course=$$===>', course);
    if (eve.detail.checked == true) {
      this.selectedClass.push(course);
    } else {
      this.selectedClass.find((inc, ix) => {
        if (inc.cid == course.cid) {
          this.selectedClass.splice(ix, 1);
        }
      });
    }
    console.log(this.selectedClass);
  }

}


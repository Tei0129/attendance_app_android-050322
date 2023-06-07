import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentService } from '../service/document/document.service';
import { NoteCalendarPage } from '../note-calendar/note-calendar.page';
@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.page.html',
  styleUrls: ['./view-notes.page.scss'],
})
export class ViewNotesPage implements OnInit {
  data: any = [];
  state;
  lang: any;
  userDetails: any;
  userType: any;
  navData: any;
  notes: any;
  dataAll: any = [];

  constructor(public navCtrl: NavController,
    public translate: TranslateService,
    public dataProvider: DataService,
    private documentService: DocumentService,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    private photoViewer: PhotoViewer,
    public zone: NgZone,
    private router: Router,
    public modalController: ModalController,
  ) {
    this.translate.get("alertmessages").subscribe((res) => {
      this.lang = res;
    })
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if (!this.router.getCurrentNavigation().extras.state.isUpdated) {
          this.navData = this.router.getCurrentNavigation().extras.state.course;
          this.state = this.router.getCurrentNavigation().extras.state;
          // console.log("state contais class:::", this.state);
        } else {
          this.ngOnInit(false);
        }
      }
    });
  }

  ngOnInit(loader: boolean = true) {
    this.navData = this.router.getCurrentNavigation().extras.state.course;
    console.log('moda', this.data);
    if (localStorage.getItem("userloggedin")) {
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
      this.userType = this.userDetails.details.user_type;
      this.getAllClassNotes(loader);
    }
  }

  showPhoto(url) {
    console.log(url);
    this.photoViewer.show(url);
  }

  addNotes() {
    const navigation: NavigationExtras = {
      state: {
        state: this.state,
        data: this.data
      }
    };
    this.zone.run(() => {
      this.router.navigate(['add-notes'], navigation);
    });
  }

  openPdf(pdf) {
    window.open(pdf, '_system');
  }

  async deleteNote(note, index) {
    const alert = await this.alertCtrl.create({
      header: this.lang.delete_note,
      backdropDismiss: true,
      mode: 'ios',
      buttons: [
        {
          text: this.lang.delete,
          handler: () => {
            let data = {
              note_id: note.notes_id
            }
            this.dataAll.splice(index, 1);
            this.dataProvider.deleteNote(data, res => {
              console.log("delete note res::::", res);
              this.getAllClassNotes();
            })
          }
        },
        {
          text: this.lang.alert_btn_cancel_text,
          handler: () => {
          }
        }
      ]
    })
    await alert.present();
  }

  getAllClassNotes(loader: boolean = true) {
    let course = this.navData;
    let studentData = {
      "user_no": this.userDetails.details.user_no,
      "session_id": this.userDetails.session_id,
      "course_id": course.cid,
      "school_id": this.userDetails.details.school_id,
    }
    this.dataAll = [];
    if (loader) this.dataProvider.showLoading();
    this.dataProvider.getAllClassNotes(studentData).then(res => {
      this.dataProvider.hideLoading();
      if (res) {
        this.data = res;
      }
    }).catch(error => {
      this.dataProvider.hideLoading();
    })
  }

  /* doInfinite(infiniteScroll: any) {
    setTimeout(() => {
      this.dataAll = this.dataAll.concat(this.data.splice(0, 20));
      infiniteScroll.target.complete();
    }, 500);
  } */

  openCalModal() {
    const navigation: NavigationExtras = {
      state: {
        note: this.data,
        state: this.navData
      }
    };
    this.router.navigate(['note-calendar'], navigation);

  }

}

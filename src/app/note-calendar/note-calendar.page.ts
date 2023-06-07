import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CalendarComponent } from 'ion2-calendar';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-note-calendar',
  templateUrl: './note-calendar.page.html',
  styleUrls: ['./note-calendar.page.scss'],

})
export class NoteCalendarPage implements OnInit {
  userDetails: any = {};
  note: any = [];
  lang: any;
  state: any;
  eventSource = [];
  selectedDate = [];
  viewTitle: string;
  events: any;
  dates: any = [];
  calendarDateCount = 0;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
      formatWeekViewHourColumn: function (date: Date) {
        return null;
      },
    }
  };
  stateCids: any = [];
  fromPage: any;

  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;
  constructor(private modalctrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    public dataProvider: DataService,
    private printer: Printer,
    private translate: TranslateService
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.note = this.router.getCurrentNavigation().extras.state.note;
      this.state = this.router.getCurrentNavigation().extras.state.state;
      this.fromPage = this.router.getCurrentNavigation().extras.state.page;
      console.log('NAV S TA T--', this.note);
    }

    this.translate.get("alertmessages").subscribe((res) => {
      this.lang = res;
    })
    /*Calendar days rendered with exam note days */
    this.note.forEach(element => {
      if (element.send_to == 'exam') {
        this.eventSource.push({
          title: element.description,
          startTime: new Date(element.examNoteDate),
          endTime: new Date(element.examNoteDate)
        });
      }
    });

  }

  ngOnInit() {
    if (localStorage.getItem("userloggedin")) {
      this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
    }
  }
  next() {
    var mySwiper = document.querySelector('.swiper-container')['swiper'];
    mySwiper.slideNext();
  }

  back() {
    var mySwiper = document.querySelector('.swiper-container')['swiper'];
    mySwiper.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
    var monthDays = <any>document.querySelectorAll('.swiper-slide-active td:not(.text-muted)');
    if (monthDays.length) {
      for (let d = 0; d < monthDays.length; d++) {
        var fullDate = new Date(monthDays[d]?.innerText + ' ' + this.viewTitle);
        this.dates.find(x => {
          if (x == fullDate.toDateString()) {
            if (this.dates.length == 1 && this.dates[0] == fullDate.toDateString()) {
              this.dates.splice(0, 1);
            } else {
              monthDays[d].classList.add('calendar-bg-black');
            }
          }
        });
      }
      console.log('::fullDate this.dates::::::', this.dates);
    }

  }

  getEventClass() {
    var evnCls = document.querySelectorAll('.monthview-primary-with-event');
    for (let i = 0; i < evnCls.length; i++) {
      evnCls[i].setAttribute('style', 'background:' + '#ff7043');
    }
    var withCurrent = document.querySelectorAll('.monthview-primary-with-event');
  }

  onCurrentDateChanged(en: Date) {
    console.log('onCurrentDateChanged::::', en.toDateString());
    this.calendarDateCount++;
    let currentDate = new Date().toDateString();
    let dt = en.toDateString();
    let iof = this.dates.indexOf(dt);
    if (iof >= 0) {
      this.dates.splice(iof, 1);
    } else {
      this.dates.push(dt);
    }
    if (currentDate === dt && this.calendarDateCount <= 1) {
      this.dates.splice(0, 1);
    }
    console.log("dates array:::", this.dates);
  }

  tryOne(ev) {
    console.log('tryOne ev:::', ev);
    if (ev.target.tagName == 'TD') {

      if (ev.target.classList.value.indexOf('-black') > 0) {
        ev.target.classList.remove('calendar-bg-black');
        ev.target.classList.remove('monthview-selected');
      } else {
        ev.target.classList.add('calendar-bg-black');
      }
    }
  }

  // =================added on 28/12/2021 for print class note as pdf ================
  printReport() {
    console.log("from page:::", this.fromPage);
    if (!this.dates.length) {
      this.dataProvider.showToast(this.lang.select_date);
    }
    this.stateCids = [];
    if (this.fromPage == 'student-note') {
      console.log("from page:::", this.fromPage);
      if (this.note.length > 0 && this.note[0].cid) {
        this.stateCids.push(this.note[0].cid);
      }
    } else {
      if (this.state.cid) {
        this.stateCids = this.state.cid;
      } else {
        this.state.forEach(st => {
          this.stateCids.push(st.cid);
        });
      }
    }
// Array.isArray(this.stateCids) ? JSON.stringify(this.stateCids) : 
    let data = {
      course_id: Array.isArray(this.stateCids) ? JSON.stringify(this.stateCids) : JSON.stringify([this.stateCids]),
      user_no: this.userDetails.details.user_no,
      school_id: this.userDetails.details.school_id,
      title: this.viewTitle,
      dates: JSON.stringify(this.dates),
      is_multi: Array.isArray(this.stateCids) && this.stateCids.length > 1 ? true : false 
    };
    console.log("dates formt::", this.dates);
    this.dataProvider.printAllClassNotes(data).then(data => {
      console.log("pdfres:::", data);
      this.dataProvider.hideLoading();
      if (data) {
        let options: PrintOptions = { orientation: 'portrait' };
        this.printer.print(data.data, options).then((onSuccess: any) => {
        }, (e: any) => {
          console.log('printer.print', e)

        });
      }

    }).catch(er => {
      this.dataProvider.hideLoading();
      this.dataProvider.showToast(er);
    })
  }

}

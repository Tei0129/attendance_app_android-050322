import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
//import { TabsPage } from '../tabs/tabs';
import { Camera } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Printer } from '@ionic-native/printer/ngx';
import domtoimage from 'dom-to-image';
let SeminarListPage = /** @class */ (() => {
    let SeminarListPage = class SeminarListPage {
        constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, printer, route, router, zone, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.camera = camera;
            this.network = network;
            this.printer = printer;
            this.route = route;
            this.router = router;
            this.zone = zone;
            this.platform = platform;
            this.currentEvents = [];
            this.isHoliday = false;
            this.showCalenderModal = false;
            this.options = {
                canBackwardsSelected: true,
                from: 1,
                to: 0,
                disableWeeks: [0],
                daysConfig: []
            };
            this.seminarList = [];
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state.seminar;
                    console.log(this.navData);
                }
            });
            this.dateSelected = new Date();
            this.translate.get("alertmessages").subscribe((response) => {
                this.lang = response;
            });
        }
        printReport() {
            domtoimage.toPng(document.getElementById('printSection')).then((dataUrl) => {
                /*var img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
                console.error('domtoimage ', dataUrl);*/
                dataUrl = dataUrl.replace("data:image/png;base64,", "base64://");
                //console.error('domtoimage ', dataUrl);
                let options = { orientation: 'portrait' };
                this.printer.print(dataUrl, options).then((onSuccess) => {
                    console.log('printer.print', onSuccess);
                }, (e) => {
                    console.log('printer.print', e);
                });
            }).catch((error) => {
                console.error('oops, something went wrong!', error);
            });
        }
        printReport__OLD() {
            /* this.printer.isAvailable().then(() => {
           let printContent = document.getElementById('printSection');
           let options: PrintOptions = { orientation: 'portrait'};
       
           this.printer.print(this.printSection.nativeElement.innerHTML, options).then((onSuccess) => {
             // success
              console.log('onSuccess',onSuccess)
           }, error => {
            // handle error
             console.log('error1',error)
           });
         }, error => {
           // handle error
            console.log('error2',error)
         });*/
            // let options: PrintOptions = {
            //      name: 'MyDocument',
            //      duplex: true,
            //      orientation: 'landscape',
            //      monochrome: true
            // }
            // let me=this;
            // setTimeout(()=>{
            //   me.printer.print(elem, options).then((onSuccess)=>{
            //       console.log('onSuccess',onSuccess)
            //     }, (onError)=>{
            //       console.log('onError',onError)
            //     });
            // },500);
        }
        ngOnInit() {
            //console.log('html2canvas',html2canvas);
        }
        ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                let data = {
                    "user_no": this.userDetails.details.user_no,
                    "school_id": this.userDetails.details.school_id,
                    "session_id": this.userDetails.session_id
                };
                this.dataProvider.getHolidays(data).then(response => {
                    if (response) {
                        if (response.holidays.length > 0) {
                            this.holidayString = response.holiday_string;
                            response.holidays.forEach(holiday => {
                                let date = new Date(holiday.date);
                                let p = {
                                    date: holiday.date,
                                    disable: true
                                };
                                this.options.daysConfig.push(p);
                                this.currentEvents.push({
                                    year: date.getFullYear(),
                                    month: date.getMonth(),
                                    date: date.getDate()
                                });
                            });
                            // console.log(this.options.daysConfig)
                        }
                        let day = this.dateSelected.getDate();
                        day = day < 10 ? '0' + day : day;
                        let month = this.dateSelected.getMonth();
                        month = month + 1;
                        month = month < 10 ? '0' + month : month;
                        let strint_date = this.dateSelected.getFullYear() + '-' + month + '-' + day;
                        if (this.holidayString.indexOf(strint_date) > -1) {
                            this.isHoliday = true;
                        }
                        else {
                            this.isHoliday = false;
                        }
                    }
                }).catch(error => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(error);
                });
                this.getClasses();
            }
            else {
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
                //  this.app.getRootNav().setRoot("LoginPage");
            }
        }
        /**
       * get the list of classes from provider
       */
        getClasses(loader = true) {
            if (loader)
                this.dataProvider.showLoading();
            let course = this.navData;
            let studentData = {
                "date": this.dataProvider.getFormatedDate(this.dateSelected),
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "seminar_no": this.navData,
                "school_id": this.userDetails.details.school_id,
            };
            this.dataProvider.getSeminarClassList(studentData).then(res => {
                if (loader)
                    this.dataProvider.hideLoading();
                if (res.session) {
                    console.log('seminar class', res.data);
                    this.seminarList = res.data;
                }
                else {
                    if (loader)
                        this.dataProvider.hideLoading();
                    // this.authProvider.flushLocalStorage();
                    // this.dataProvider.errorALertMessage(res.message);
                    // this.router.navigate(['login'],{replaceUrl:true});
                    // this.app.getRootNav().setRoot("LoginPage");
                }
            });
        }
        openCalenderModal() {
            if (this.platform.is('cordova')) {
                if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                    this.showCalenderModal = true;
                    let query = document.getElementsByName('ios-arrow-forward');
                    let query1 = document.getElementsByName('ios-arrow-back');
                    let query2 = document.getElementsByName('md-arrow-dropdown');
                    setTimeout(() => {
                        query[0]['name'] = "chevron-forward-outline";
                        query1[0]['name'] = "chevron-back-outline";
                        query2[0]['name'] = "chevron-down-outline";
                    }, 500);
                }
                else {
                    this.dataProvider.showToast(this.lang.no_internet);
                }
            }
            else {
                this.showCalenderModal = true;
                let query = document.getElementsByName('ios-arrow-forward');
                let query1 = document.getElementsByName('ios-arrow-back');
                let query2 = document.getElementsByName('md-arrow-dropdown');
                setTimeout(() => {
                    query[0]['name'] = "chevron-forward-outline";
                    query1[0]['name'] = "chevron-back-outline";
                    query2[0]['name'] = "chevron-down-outline";
                }, 500);
            }
        }
        /**
         * Use to hide the calender
         */
        hideCalenderModal() {
            this.showCalenderModal = false;
        }
        onDaySelect(event) {
            if (event != undefined && event != null) {
                let date = new Date(event);
                // date.setDate(event.date);
                // date.setMonth(event.month);
                // date.setFullYear(event.year);
                let day = event.date;
                day = day < 10 ? '0' + day : day;
                let month = event.month;
                month = month + 1;
                month = month < 10 ? '0' + month : month;
                let strint_date = event.year + '-' + month + '-' + day;
                if (this.holidayString.indexOf(event) == -1) {
                    this.dateSelected = date;
                    let currentDate = new Date();
                    if (this.dateSelected.getTime() <= currentDate.getTime()) {
                        this.isHoliday = false;
                        this.hideCalenderModal();
                        this.getClasses();
                    }
                    else {
                        this.dataProvider.showToast(this.lang.future_date);
                    }
                }
                else {
                    this.dataProvider.showToast(this.lang.holiday);
                }
            }
        }
        /**
       * function to match the dates
       * @param date date with which compare the selected date
       */
        checkDateSelected(date) {
            if (date.getDate() == this.dateSelected.getDate() && date.getMonth() == this.dateSelected.getMonth() && date.getFullYear() == this.dateSelected.getFullYear()) {
                return true;
            }
            else {
                return false;
            }
        }
        /**
         * function to caheck the current date
         * @param date date with which compare the current date
         */
        checkCurrentDate(date) {
            let currentDate = new Date();
            if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    SeminarListPage = __decorate([
        Component({
            selector: 'app-seminar-list',
            templateUrl: './seminar-list.page.html',
            styleUrls: ['./seminar-list.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            TranslateService,
            AlertController,
            Camera,
            Network,
            Printer,
            ActivatedRoute,
            Router,
            NgZone,
            Platform])
    ], SeminarListPage);
    return SeminarListPage;
})();
export { SeminarListPage };
//# sourceMappingURL=seminar-list.page.js.map
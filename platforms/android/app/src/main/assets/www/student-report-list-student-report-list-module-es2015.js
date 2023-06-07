(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-report-list-student-report-list-module"],{

/***/ "031B":
/*!*******************************************************************!*\
  !*** ./src/app/student-report-list/student-report-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: StudentReportListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentReportListPageModule", function() { return StudentReportListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _student_report_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-report-list-routing.module */ "zV6B");
/* harmony import */ var _student_report_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-report-list.page */ "dl8m");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let StudentReportListPageModule = class StudentReportListPageModule {
};
StudentReportListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _student_report_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentReportListPageRoutingModule"]
        ],
        declarations: [_student_report_list_page__WEBPACK_IMPORTED_MODULE_6__["StudentReportListPage"]]
    })
], StudentReportListPageModule);



/***/ }),

/***/ "9VcW":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-report-list/student-report-list.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n   <ion-toolbar>\n   \t<ion-buttons slot=\"end\">\n   \t\t<ion-back-button></ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\"> \n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> {{ 'sidemenu.student_list'| translate }}</ion-title>\n  </ion-toolbar>\n  <ion-list padding no-margin>\n    <ion-row>\n      <ion-col size=\"4\" col-sm-2 align-self-center style=\"padding-right: 18px; color:black;\" class=\"text-right\" text-right>\n        {{courseInfo.name}}\n      </ion-col>\n      <ion-col size=\"8\" col-sm-10 align-self-center>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <div class=\"main-content\">\n    <ion-list padding *ngIf = \"attendanceResponse.students?.length > 0\" margin-top>\n      <ion-row class=\"right-direction student-card\"\n        *ngFor=\"let student of attendanceResponse.students; let sno = index;\">\n        <ion-col size=\"10\" col-sm-11>\n          <ion-row>\n            <ion-col size=\"12\" align-self-center class=\"text-right\" class=\"left-direction\"\n              (click)=\"openStudentDetail(student.sid)\">\n              <h4><span class=\"serial-number\">{{sno+1}}.</span> {{student.name}}</h4>\n              <p class=\"student-behaviour\">{{student.studentBehaviour}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"2\" col-sm-1 align-self-center>\n          <ion-item class=\"item-img\" lines=\"none\">\n            <ion-avatar (click)=\"openUserImageModal(student)\">\n              <img [src]=\"student.pic\">\n            </ion-avatar>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-label margin-top padding-top item-center class=\"norecord-found\" *ngIf=\"attendanceResponse.students?.length == 0\">{{noDataFound}}\n    </ion-label>\n  </div>\n</ion-content>\n\n<div class=\"custom-calender-modal-main\" *ngIf=\"showCalenderModal\">\n  <div class=\"calender-container\">\n    <div class=\"calender-body\" class=\"right-direction\">\n      <ion-calendar #calendar [options]=\"options\" canBackwardsSelected=\"true\"  (change)=\"onDaySelect($event)\"></ion-calendar>\n      <!-- [events]=\"currentEvents\" -->\n    </div>\n  </div>\n  <div class=\"clickd-div\" (click)=\"hideCalenderModal()\"></div>\n</div>\n\n<div class=\"custom-modal-main\" *ngIf=\"showProfileModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-header\">\n      <div class=\"image-sec\" [ngStyle]=\"{'background-image': 'url('+student.pic+')'}\">\n        <div class=\"add-image-icon\" *ngIf=\"userDetails.details.user_type == '7'\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"custom-modal-content\">\n      <h2>{{student.name}} \n        <!-- <ion-icon *ngIf=\"editMode\" (click)=\"editStudentClass($event,student)\" name=\"create-outline\"></ion-icon> -->\n      </h2>\n      <h2 *ngIf=\"editMode\">{{student.course_name}}</h2>\n      <p *ngIf=\"student.studentBehaviour != ''\">{{student.studentBehaviour}}</p>\n      <p>{{'list-student.total_absents' | translate}} : {{student.total_absent}}</p>\n    </div>\n    <div class=\"custom-modal-footer\">\n      <ion-row>\n        <ion-col size=\"4\"  class=\"lefthorizline text-left\">\n          <p  class=\"absence-count text-center\">{{student.unacceptable_absent_days}}</p>\n          <p  class=\"absence text-center\">{{'list-student.unacceptable_absence' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"text-center\">\n          <p class=\"absence-count text-center\">{{student.suspend_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.suspension_days' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"text-right\">\n          <p class=\"absence-count text-center\">{{student.medical_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.medical_days' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "dl8m":
/*!*****************************************************************!*\
  !*** ./src/app/student-report-list/student-report-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: StudentReportListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentReportListPage", function() { return StudentReportListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_student_report_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-report-list.page.html */ "9VcW");
/* harmony import */ var _student_report_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-report-list.page.scss */ "dzN9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let StudentReportListPage = class StudentReportListPage {
    constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, network, route, router, zone, platform) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.platform = platform;
        this.showProfileModal = false;
        this.noDataFound = "";
        this.totalSem = 7;
        this.student = {};
        this.attendanceResponse = {};
        this.userDetails = {};
        this.lang = {};
        this.students = [];
        this.studentBehaviour = '';
        this.courseInfo = {};
        this.classAll = ['', '', '', '', '', '', '', ''];
        this.options = {
            canBackwardsSelected: true,
            from: 1,
            to: 0,
            disableWeeks: [],
            daysConfig: []
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.navData = this.router.getCurrentNavigation().extras.state.course;
            }
        });
        this.dateSelected = new Date();
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
    }
    ngOnInit() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            if (this.userType == '1') {
            }
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.getStudents();
        }
        else {
            this.dataProvider.hideLoading();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    ionViewWillEnter() {
    }
    onDaySelect(ev) {
    }
    hideCalenderModal() {
    }
    /**
     * get the list of students from provider
     */
    getStudents(loader = true) {
        if (loader)
            this.dataProvider.showLoading();
        let course = this.navData;
        this.courseInfo = course;
        let studentData = {
            "date": this.dataProvider.getFormatedDate(this.dateSelected),
            "user_no": this.userDetails.details.user_no,
            "session_id": this.userDetails.session_id,
            "course_id": course.cid,
            "school_id": this.userDetails.details.school_id,
        };
        this.dataProvider.getClassStudentList(studentData).then(res => {
            if (loader)
                this.dataProvider.hideLoading();
            if (res.session) {
                res.data.students.forEach((student) => {
                    student.studentBehaviour = this.getStudentBehaviour(student.agg_ranking);
                });
                this.attendanceResponse = res.data;
            }
            else {
                if (loader)
                    this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                this.dataProvider.errorALertMessage(res.message);
                this.router.navigate(['login'], { replaceUrl: true });
                // this.app.getRootNav().setRoot("LoginPage");
            }
        });
    }
    /**
     * Open student detail page
     * @param student_id Id of the student you want to see the details
     */
    openStudentDetail(student_id) {
        const navigation = {
            state: { student_id: student_id,
                course_id: this.navData.cid,
                dateSelected: this.dataProvider.getFormatedDate(this.dateSelected) }
        };
        this.zone.run(() => {
            this.router.navigate(['student-report-manage'], navigation);
        });
    }
    /**
     * Open image modal popup
     * @param student Object of student details to show in image popup
     */
    openUserImageModal(student) {
        this.student = student;
        console.log(this.student);
        this.showProfileModal = true;
    }
    /**
     * Return the behaviour of the student
     * @param agg_ranking ranking
     */
    getStudentBehaviour(agg_ranking) {
        if (agg_ranking > 0 && agg_ranking < 2.6) {
            return this.lang.warning_behaviour;
        }
        else if (agg_ranking > 2.5 && agg_ranking < 3.6) {
            return this.lang.good_behaviour;
        }
        else if (agg_ranking > 3.5 && agg_ranking < 4.6) {
            return this.lang.very_good_behaviour;
        }
        else if (agg_ranking > 4.5 && agg_ranking < 5.1) {
            return this.lang.excellent_behaviour;
        }
        else {
            return this.lang.no_behaviour;
        }
    }
    /**
     * Hide image modal popup
     */
    hideUserImageModal(event) {
        if (event.target.className == "custom-modal-main") {
            this.showProfileModal = false;
        }
    }
};
StudentReportListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
StudentReportListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-report-list',
        template: _raw_loader_student_report_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_report_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], StudentReportListPage);



/***/ }),

/***/ "dzN9":
/*!*******************************************************************!*\
  !*** ./src/app/student-report-list/student-report-list.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-student-report-list:host .item-img {\n  --padding-start: unset;\n  --padding-end: unset;\n  --inner-padding-end: unset;\n  --inner-padding-start: unset;\n}\napp-student-report-list:host ion-header ion-list {\n  background: #fff;\n}\napp-student-report-list:host .item-inner {\n  border-bottom: none !important;\n}\napp-student-report-list:host .margin {\n  width: 92%;\n  margin: 13px;\n}\napp-student-report-list:host .checkbox-container {\n  width: 100%;\n  display: flex;\n}\napp-student-report-list:host .checkbox-container .checkbox-icon {\n  width: 14%;\n  height: auto;\n}\napp-student-report-list:host .title {\n  font-weight: 600;\n  color: #000;\n  padding-top: 1vh;\n  font-size: 15px;\n}\napp-student-report-list:host .sem-number-outer {\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\napp-student-report-list:host .att-not-marked {\n  background: #ececec;\n  color: #000;\n}\napp-student-report-list:host .att-marked {\n  background: #32db64;\n  color: #fff;\n}\napp-student-report-list:host .top-col {\n  text-align: center;\n}\napp-student-report-list:host .top-col p {\n  margin: unset;\n}\napp-student-report-list:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 27px;\n}\napp-student-report-list:host .student-behaviour {\n  margin: 0;\n  font-size: 10px;\n  color: #7d7d7d;\n  padding-top: 5px;\n}\napp-student-report-list:host .student-card {\n  background: #fff;\n  box-shadow: 1px 1px 6px #ececec;\n  border-radius: 2px;\n  margin-bottom: 10px;\n}\napp-student-report-list:host .student-card h4 {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  font-weight: 600;\n  padding-top: 7px;\n}\napp-student-report-list:host .student-card h4 .serial-number {\n  font-weight: normal;\n}\napp-student-report-list:host .checkbox-all {\n  margin: 0px 0;\n}\napp-student-report-list:host .checkbox-area {\n  margin: 5px 0;\n}\napp-student-report-list:host .checkbox-area .checkbox-remove {\n  border: 1px solid grey;\n  height: 24px;\n  width: 24px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*ion-icon{\n      font-size: 23px;\n      font-weight: 800;\n      padding-right: 7px;\n      padding-top: 0;\n  }*/\n}\napp-student-report-list:host .checkbox-area .checkbox-remove .att-icon:before {\n  font-size: 22px;\n}\napp-student-report-list:host .checkbox-area .present {\n  background: #32db64;\n}\napp-student-report-list:host .checkbox-area .absent {\n  background: #f53d3d;\n}\napp-student-report-list:host .checkbox-area .delay {\n  background: #ffa500;\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) and (orientation: portrait) {\n  app-student-report-list:host .title, app-student-report-list:host h4 {\n    font-size: 0.7rem;\n  }\n  app-student-report-list:host ion-list {\n    padding: 5px !important;\n  }\n  app-student-report-list:host .add-circle {\n    margin-right: 0px !important;\n    font-size: 24px !important;\n  }\n  app-student-report-list:host ion-header ion-icon {\n    min-width: 18px !important;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 380px) and (orientation: portrait) {\n  app-student-report-list:host .add-circle {\n    margin-right: 0px !important;\n    font-size: 24px !important;\n  }\n  app-student-report-list:host ion-header ion-icon {\n    min-width: 18px !important;\n  }\n}\n.all-check {\n  border-radius: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnQtcmVwb3J0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ1ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFBaEI7QUFHUTtFQUNJLGdCQUFBO0FBRFo7QUFJSTtFQUNJLDhCQUFBO0FBRlI7QUFJSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRlI7QUFHUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRFo7QUFJSTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUhaO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFIUjtBQUtJO0VBQ0ksa0JBQUE7QUFIUjtBQUlRO0VBQ0ksYUFBQTtBQUZaO0FBS0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSFI7QUFLSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSFI7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFJUTtFQUNRLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZoQjtBQUdZO0VBQ0ksbUJBQUE7QUFEaEI7QUFLSTtFQUNJLGFBQUE7QUFIUjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBSVE7RUFFSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0E7Ozs7O0lBQUE7QUFFWjtBQUlZO0VBQ0ksZUFBQTtBQUZoQjtBQUtRO0VBQ0ksbUJBQUE7QUFIWjtBQUtRO0VBQ0ksbUJBQUE7QUFIWjtBQUtRO0VBQ0ksbUJBQUE7QUFIWjtBQU9JO0VBQ0k7SUFDSSxpQkFBQTtFQUxWO0VBT007SUFDSSx1QkFBQTtFQUxWO0VBT007SUFDSSw0QkFBQTtJQUNBLDBCQUFBO0VBTFY7RUFPTTtJQUNJLDBCQUFBO0VBTFY7QUFDRjtBQVFJO0VBRUk7SUFDSSw0QkFBQTtJQUNBLDBCQUFBO0VBUFY7RUFTTTtJQUNJLDBCQUFBO0VBUFY7QUFDRjtBQVVBO0VBQ0ksa0JBQUE7QUFQSiIsImZpbGUiOiJzdHVkZW50LXJlcG9ydC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1zdHVkZW50LXJlcG9ydC1saXN0Omhvc3Qge1xyXG4gICAgLml0ZW0taW1ne1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgaW9uLWhlYWRlcntcclxuICAgICAgICBpb24tbGlzdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbntcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIG1hcmdpbjogMTNweDtcclxuICAgIH1cclxuICAgIC5jaGVja2JveC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmNoZWNrYm94LWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAvLyAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlbS1udW1iZXItb3V0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogMjNweDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmF0dC1ub3QtbWFya2Vke1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2VjZWNlYztcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5hdHQtbWFya2Vke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMmRiNjQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAudG9wLWNvbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOnVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGQtY2lyY2xle1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1iZWhhdmlvdXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxuICAgIC5zdHVkZW50LWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggI2VjZWNlYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIC5zZXJpYWwtbnVtYmVye1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGVja2JveC1hbGx7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMDtcclxuICAgIH1cclxuICAgIC5jaGVja2JveC1hcmVhe1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgLmNoZWNrYm94LXJlbW92ZXtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDpjb2xvcigkY29sb3JzLCByZW1vdmUtYXBwLCBiYXNlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8qaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAuYXR0LWljb246YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmVzZW50e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzJkYjY0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWJzZW50e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjUzZDNkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsYXl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmE1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAudGl0bGUsIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGQtY2lyY2xlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuICAgICAgICAuYWRkLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hbGwtY2hlY2t7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zV6B":
/*!***************************************************************************!*\
  !*** ./src/app/student-report-list/student-report-list-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: StudentReportListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentReportListPageRoutingModule", function() { return StudentReportListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_report_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-report-list.page */ "dl8m");




const routes = [
    {
        path: '',
        component: _student_report_list_page__WEBPACK_IMPORTED_MODULE_3__["StudentReportListPage"]
    }
];
let StudentReportListPageRoutingModule = class StudentReportListPageRoutingModule {
};
StudentReportListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentReportListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=student-report-list-student-report-list-module-es2015.js.map
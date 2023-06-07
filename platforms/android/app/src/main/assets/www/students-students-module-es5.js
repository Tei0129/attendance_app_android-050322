(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"], {
    /***/
    "/Hwp":
    /*!*********************************************!*\
      !*** ./src/app/students/students.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Hwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-students:host .header-row {\n  padding-top: 14px;\n}\napp-students:host .text-hidden {\n  width: 35px;\n  height: 23px;\n  overflow-x: overlay;\n  font-size: 12px;\n}\napp-students:host .margin {\n  width: 92%;\n  margin: 13px;\n}\napp-students:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 18px;\n}\napp-students:host .title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #000;\n}\napp-students:host .checkbox-inner {\n  position: absolute !important;\n  left: 8px !important;\n  height: 14px !important;\n  top: 0 !important;\n}\napp-students:host ion-item {\n  --padding-end: unset;\n  --padding-start: unset;\n}\napp-students:host .student-class h2 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n}\napp-students:host .student-class p {\n  margin: 0;\n  font-size: 12px;\n  color: #7d7d7d;\n  padding-top: 5px;\n}\napp-students:host .checkbox-area {\n  margin: 15px 0;\n}\napp-students:host .checkbox-area .checkbox-remove {\n  border: 1px solid grey;\n  height: 22px;\n  width: 21px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\napp-students:host .checkbox-area .checkbox-remove ion-icon {\n  font-size: 17px;\n  font-weight: 800;\n}\napp-students:host .checkbox-area .present {\n  background: #32db64;\n}\napp-students:host .checkbox-area .absent {\n  background: #f53d3d;\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) and (orientation: portrait) {\n  app-students:host .title, app-students:host h4 {\n    font-size: 0.9rem;\n  }\n  app-students:host ion-list {\n    padding: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNRLGlCQUFBO0FBQVo7QUFFSTtFQUNRLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQVo7QUFFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFEUjtBQUdJO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdJO0VBQ0Usb0JBQUE7RUFDRixzQkFBQTtBQURKO0FBSVE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDSSxlQUFBO0FBRmhCO0FBSVE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZaO0FBS0k7RUFDSSxjQUFBO0FBSFI7QUFJUTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGWjtBQUdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRGhCO0FBSVE7RUFDSSxtQkFBQTtBQUZaO0FBSVE7RUFDSSxtQkFBQTtBQUZaO0FBS0k7RUFDSTtJQUNJLGlCQUFBO0VBSFY7RUFLTTtJQUNJLHVCQUFBO0VBSFY7QUFDRiIsImZpbGUiOiJzdHVkZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc3R1ZGVudHM6aG9zdCB7XHJcbiAgICAuaGVhZGVyLXJvd3tcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1oaWRkZW57XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IG92ZXJsYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgIFxyXG4gICAgfVxyXG4gICAgLm1hcmdpbntcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIG1hcmdpbjogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkLWNpcmNsZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTowLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5jaGVja2JveC1pbm5lcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB1bnNldDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1jbGFzc3tcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtYXJlYXtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICAuY2hlY2tib3gtcmVtb3Zle1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJlc2VudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMyZGI2NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFic2VudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1M2QzZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgLnRpdGxlLCBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "O8DA":
    /*!*****************************************************!*\
      !*** ./src/app/students/students-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: StudentsPageRoutingModule */

    /***/
    function O8DA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsPageRoutingModule", function () {
        return StudentsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _students_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./students.page */
      "VHIv");

      var routes = [{
        path: '',
        component: _students_page__WEBPACK_IMPORTED_MODULE_3__["StudentsPage"]
      }];

      var StudentsPageRoutingModule = function StudentsPageRoutingModule() {
        _classCallCheck(this, StudentsPageRoutingModule);
      };

      StudentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StudentsPageRoutingModule);
      /***/
    },

    /***/
    "TVi2":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/students/students.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TVi2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"right-direction\" mode=\"md\">\n  <ion-toolbar transparent>\n   \t<ion-buttons slot=\"start\">\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row >\n      <ion-col size=\"6\" align-self-center no-padding>\n        <ion-buttons start clear>\n          <!-- <ion-button  small clear icon-only (click)=\"submitAttendance()\"\n            *ngIf=\"(userType == '1' || userType == '3') && !isHoliday\">\n            <ion-icon name=\"send-outline\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n          </ion-button> -->\n          <ion-button  small clear icon-only (click)=\"enableEditingMode()\"\n            *ngIf=\"userType == '1' && !editMode && !isHoliday\">\n            <ion-icon name=\"pencil\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"6\" class=\"header-row text-right\" align-self-center no-padding >\n        <div class=\"title\" (click)=\"openCalenderModal()\">{{dateSelected | date: 'mediumDate'}}</div>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-toolbar>\n  <ion-row>\n    <ion-col size=\"2\" align-self-center class=\"text-center\" style=\"background:white;color:black;\">{{'delay_stu_list.a_d' | translate}}</ion-col>\n    <ion-col size=\"4\" style=\"padding-right: 23px;background:white;\" align-self-center class=\"text-left\"></ion-col>\n    <ion-col size=\"6\" style=\"padding-right: 23px;background:white;color:black;\" align-self-center class=\"text-right\">{{courseInfo?.name}}</ion-col>\n    <!-- <ion-col size=\"1\"></ion-col> -->\n  </ion-row>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"main-content\">\n    <ion-list *ngIf = \"students?.length > 0\" lines=\"none\">\n      <ion-card class=\"student-class\" *ngFor=\"let student of students; let sno = index;\">\n        <ion-card-content no-padding style=\"padding: unset;\">\n          <ion-row justify-content-center class=\"right-direction\">\n            <ion-col text-left align-self-center no-padding class=\"checkbox-area\" size=\"3.5\">\n              <ion-row>\n                <ion-col size=\"5\" align-self-center no-padding>\n                  <div class=\"text-hidden\" text-center no-margin>{{student.useedforabsent.one /\n                    delayRule}}/{{student.useedforabsent.zero}}</div>\n                </ion-col>\n                <ion-col size=\"7\" align-self-center text-left (click)=\"changeAttendanceStatus(student)\">\n                  <div class=\"checkbox-remove\"\n                    [ngClass]=\"{'present': student.sheet['cem-1'] == true, 'absent':  student.suspend_leave == true || student.medical_leave == true, '': student.sheet['cem-1'] == 'undefined'}\">\n                    <ion-icon name=\"checkmark\" *ngIf=\"student.sheet['cem-1'] == true\" color=\"light\"></ion-icon>\n                    <ion-icon name=\"close\" *ngIf=\"student.suspend_leave || student.medical_leave\" color=\"light\">\n                    </ion-icon>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col no-padding size=\"8.5\" align-self-center no-padding>\n              <ion-item no-padding>\n                <ion-label  class=\"text-right\" (click)=\"openStudentDetail(student.sid,student)\" class=\"left-direction\">\n                  <h2><span class=\"serial-number\">{{sno+1}}.</span> {{student.name}}</h2>\n                  <p>{{'delay_stu_list.total_delay' | translate}} {{student.total_delay}}</p>\n                </ion-label>\n                <ion-avatar item-end slot=\"end\">\n                  <img [src]=\"student.pic\" (click)=\"openUserImageModal(student)\">\n                </ion-avatar>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n      <ion-button  expand=\"block\" class=\"btn-primary margin\" color=\"primary\" (click)=\"submitAttendance()\" *ngIf=\"(userType == '1' || userType == '3') && !isHoliday\">{{'list-student.submitbtn' | translate}}</ion-button>\n    </ion-list>\n    <ion-label item-center class=\"norecord-found\" *ngIf=\"students?.length == 0\">{{noDataFound}}</ion-label>\n  </div>\n</ion-content>\n\n<div class=\"custom-calender-modal-main\" *ngIf=\"showCalenderModal\">\n  <div class=\"calender-container\">\n    <div class=\"calender-body\" class=\"right-direction\">\n      <ion-calendar #calendar [options]=\"options\" canBackwardsSelected=\"true\"  (change)=\"onDaySelect($event)\"></ion-calendar>\n    </div>\n  </div>\n  <div class=\"clickd-div\" (click)=\"hideCalenderModal()\"></div>\n</div>\n\n<div class=\"custom-modal-main\" *ngIf=\"showProfileModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-header\">\n      <div class=\"image-sec\" [ngStyle]=\"{'background-image': 'url('+student.pic+')'}\">\n        <div class=\"add-image-icon\" (click)=\"takePicture()\" *ngIf=\"userDetails.details.user_type != '2' && userDetails.details.user_type != '7'\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"custom-modal-content\">\n      <h2 style=\"color:black;\">{{student.name}}</h2>\n      <p *ngIf=\"studentBehaviour != ''\">{{studentBehaviour}}</p>\n      <p>{{'list-student.total_absents' | translate}} : {{student.total_absent}}</p>\n    </div>\n    <div class=\"custom-modal-footer\">\n      <ion-row>\n        <ion-col size=\"4\"  class=\" text-left lefthorizline\">\n          <p  class=\" text-center absence-count\" style=\"color:black;\">{{student.unacceptable_absent_days}}</p>\n          <p  class=\"text-center absence\">{{'list-student.unacceptable_absence' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\"  class=\"text-center\">\n          <p  class=\"text-center absence-count\" style=\"color:black;\">{{student.suspend_days}}</p>\n          <p  class=\"text-center absence\">{{'list-student.suspension_days' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\"  class=\"text-right text-center\">\n          <p  class=\"text-center absence-count\" style=\"color:black;\">{{student.medical_days}}</p>\n          <p  class=\"text-center absence\">{{'list-student.medical_days' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "VHIv":
    /*!*******************************************!*\
      !*** ./src/app/students/students.page.ts ***!
      \*******************************************/

    /*! exports provided: StudentsPage */

    /***/
    function VHIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsPage", function () {
        return StudentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./students.page.html */
      "TVi2");
      /* harmony import */


      var _students_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./students.page.scss */
      "/Hwp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //import { TabsPage } from '../tabs/tabs';


      var StudentsPage = /*#__PURE__*/function () {
        function StudentsPage(navCtrl, //	public navParams: NavParams, 
        dataProvider, authProvider, //public app: App, 
        translate, alertCtrl, camera, network, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, StudentsPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.platform = platform;
          this.showProfileModal = false;
          this.students = [];
          this.student = {};
          this.userDetails = {};
          this.showCalenderModal = false;
          this.attendanceSheet = {};
          this.attMarkBegin = false;
          this.attNotMarked = true;
          this.lang = {};
          this.delayRule = 5;
          this.editMode = false;
          this.currentEvents = [];
          this.isHoliday = false;
          this.noDataFound = '';
          this.studentBehaviour = '';
          this.courseInfo = {};
          this.options = {
            canBackwardsSelected: true,
            from: 1,
            to: 0,
            disableWeeks: [],
            daysConfig: []
          };
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state.course;
              console.log(_this.navData);

              if (localStorage.getItem("userloggedin")) {
                _this.dateSelected = new Date();
                _this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                var data = {
                  "user_no": _this.userDetails.details.user_no,
                  "school_id": _this.userDetails.details.school_id,
                  "session_id": _this.userDetails.session_id
                };

                _this.dataProvider.getHolidays(data).then(function (response) {
                  if (response) {
                    if (response.holidays.length > 0) {
                      _this.holidayString = response.holiday_string;
                      response.holidays.forEach(function (holiday) {
                        var date = new Date(holiday.date);
                        var p = {
                          date: holiday.date,
                          disable: true
                        };

                        _this.options.daysConfig.push(p);

                        _this.currentEvents.push({
                          year: date.getFullYear(),
                          month: date.getMonth(),
                          date: date.getDate()
                        });
                      });
                      console.log(_this.options.daysConfig);

                      var day = _this.dateSelected.getDate();

                      day = day < 10 ? '0' + day : day;

                      var month = _this.dateSelected.getMonth();

                      month = month + 1;
                      month = month < 10 ? '0' + month : month;
                      var strint_date = _this.dateSelected.getFullYear() + '-' + month + '-' + day;

                      if (_this.holidayString.indexOf(strint_date) > -1) {
                        _this.isHoliday = true;
                      } else {
                        _this.isHoliday = false;
                      }
                    }
                  }
                })["catch"](function (error) {
                  _this.dataProvider.hideLoading();

                  _this.dataProvider.errorALertMessage(error);
                });

                _this.getStudents();
              } else {
                _this.dataProvider.hideLoading();

                _this.authProvider.flushLocalStorage();

                _this.router.navigate(['login'], {
                  replaceUrl: true
                }); //   this.app.getRootNav().setRoot("LoginPage");

              }
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(StudentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
          /**
           * get the list of students from provider
           */

        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this2 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (loader) this.dataProvider.showLoading();
            this.userType = this.userDetails.details.user_type;
            var course = this.navData;
            this.courseInfo = course;
            var studentData = {
              "date": this.dataProvider.getFormatedDate(this.dateSelected),
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "course_id": course.cid,
              "school_id": this.userDetails.details.school_id
            };

            if (localStorage.getItem("delayclasslocalatt")) {
              var attendance = JSON.parse(localStorage.getItem("delayclasslocalatt"));
              Object.keys(attendance).map(function (courseId) {
                if (!_this2.checkCurrentDate(new Date(attendance[courseId].date)) && localStorage.getItem("delayclasslocalatt")) {
                  localStorage.removeItem("delayclasslocalatt");
                }
              });
            }

            this.dataProvider.getDelayClassStudentList(studentData).then(function (res) {
              if (loader) _this2.dataProvider.hideLoading();

              if (res.session) {
                console.log('getDelayClassStudentList', res);
                var responseData = res.data;
                _this2.delayRule = parseInt(responseData.delay_rule);
                _this2.students = responseData.students;
                _this2.attMarkBegin = false;
                _this2.attendanceSheet = {};
                _this2.editMode = false;

                if (_this2.students.length == 0) {
                  _this2.noDataFound = _this2.lang.no_students_in_class;
                }

                if (_this2.checkDateSelected(new Date())) {
                  if (localStorage.getItem("delayclasslocalatt")) {
                    var localAtt = {};
                    localAtt = JSON.parse(localStorage.getItem("delayclasslocalatt"));
                    responseData.date = _this2.dataProvider.getFormatedDate(_this2.dateSelected);
                    localAtt[course.cid] = responseData;
                    localStorage.setItem("delayclasslocalatt", JSON.stringify(localAtt));
                  } else {
                    var _localAtt = {};
                    responseData.date = _this2.dataProvider.getFormatedDate(_this2.dateSelected);
                    _localAtt[course.cid] = responseData;

                    _this2.dataProvider.getFormatedDate(_this2.dateSelected);

                    localStorage.setItem("delayclasslocalatt", JSON.stringify(_localAtt));
                  }
                }
              } else {
                if (loader) _this2.dataProvider.hideLoading();

                _this2.authProvider.flushLocalStorage();

                _this2.dataProvider.errorALertMessage(res.message);

                _this2.router.navigate(['login'], {
                  replaceUrl: true
                }); //  this.app.getRootNav().setRoot("LoginPage");

              }
            });
          }
          /**
          * Open student detail page
          * @param student_id Id of the student you want to see the details
          */

        }, {
          key: "openStudentDetail",
          value: function openStudentDetail(student_id, student) {
            var _this3 = this;

            console.log('student', student);

            if (this.platform.is('cordova')) {
              if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                if (!this.attMarkBegin) {
                  var navigation = {
                    state: {
                      student_id: student_id,
                      course_id: this.navData.cid,
                      dateSelected: this.dataProvider.getFormatedDate(this.dateSelected),
                      total_delay: student.total_delay
                    }
                  }; //console.log(navigation);

                  this.zone.run(function () {
                    _this3.router.navigate(['student-detail'], navigation);
                  }); // this.navCtrl.push("StudentDetailPage", {
                  //   student_id: student_id,
                  //   course_id: this.navParams.get("course").cid,
                  //   dateSelected: this.dataProvider.getFormatedDate(this.dateSelected)
                  // });
                } else {
                  this.dataProvider.showToast(this.lang.complete_att_submission);
                }
              } else {
                this.dataProvider.showToast(this.lang.no_internet);
              }
            } else {
              if (!this.attMarkBegin) {
                var _navigation = {
                  state: {
                    student_id: student_id,
                    course_id: this.navData.cid,
                    dateSelected: this.dataProvider.getFormatedDate(this.dateSelected),
                    total_delay: student.total_delay
                  }
                }; //console.log(navigation);

                this.zone.run(function () {
                  _this3.router.navigate(['student-detail'], _navigation);
                }); // this.navCtrl.push("StudentDetailPage", {
                //   student_id: student_id,
                //   course_id: this.navParams.get("course").cid,
                //   dateSelected: this.dataProvider.getFormatedDate(this.dateSelected)
                // });
              } else {
                this.dataProvider.showToast(this.lang.complete_att_submission);
              }
            }
          }
          /**
           * Open image modal popup
           * @param student Object of student details to show in image popup
           */

        }, {
          key: "openUserImageModal",
          value: function openUserImageModal(student) {
            if (!this.attMarkBegin) {
              this.student = student;

              if (student.agg_ranking > 0 && student.agg_ranking < 2.6) {
                this.studentBehaviour = this.lang.warning_behaviour;
              } else if (student.agg_ranking > 2.5 && student.agg_ranking < 3.6) {
                this.studentBehaviour = this.lang.good_behaviour;
              } else if (student.agg_ranking > 3.5 && student.agg_ranking < 4.6) {
                this.studentBehaviour = this.lang.very_good_behaviour;
              } else if (student.agg_ranking > 4.5 && student.agg_ranking < 5.1) {
                this.studentBehaviour = this.lang.excellent_behaviour;
              } else {
                this.studentBehaviour = this.lang.no_behaviour;
              }

              this.showProfileModal = true;
            } else {
              this.dataProvider.showToast(this.lang.complete_att_submission);
            }
          }
          /**
           * Hide image modal popup
           */

        }, {
          key: "hideUserImageModal",
          value: function hideUserImageModal(event) {
            if (event.target.className == "custom-modal-main") {
              this.showProfileModal = false;
            }
          }
          /**
          * Use to open the calender
          */

        }, {
          key: "openCalenderModal",
          value: function openCalenderModal() {
            if (this.platform.is('cordova')) {
              if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                this.showCalenderModal = true;
                var query = document.getElementsByName('ios-arrow-forward');
                var query1 = document.getElementsByName('ios-arrow-back');
                var query2 = document.getElementsByName('md-arrow-dropdown');
                setTimeout(function () {
                  query[0]['name'] = "chevron-forward-outline";
                  query1[0]['name'] = "chevron-back-outline";
                  query2[0]['name'] = "chevron-down-outline";
                }, 500);
              } else {
                this.dataProvider.showToast(this.lang.no_internet);
              }
            } else {
              this.showCalenderModal = true;

              var _query = document.getElementsByName('ios-arrow-forward');

              var _query2 = document.getElementsByName('ios-arrow-back');

              var _query3 = document.getElementsByName('md-arrow-dropdown');

              setTimeout(function () {
                _query[0]['name'] = "chevron-forward-outline";
                _query2[0]['name'] = "chevron-back-outline";
                _query3[0]['name'] = "chevron-down-outline";
              }, 500);
            }
          }
          /**
           * Use to hide the calender
           */

        }, {
          key: "hideCalenderModal",
          value: function hideCalenderModal() {
            this.showCalenderModal = false;
          }
          /** calender event
          * Triggered when user select the date from the calender
          * @param event calender event to get the selected date
          */

        }, {
          key: "onDaySelect",
          value: function onDaySelect(event) {
            if (event != undefined && event != null) {
              var date = new Date(event); // date.setDate(event.date);
              // date.setMonth(event.month);
              // date.setFullYear(event.year);

              var day = event.date;
              day = day < 10 ? '0' + day : day;
              var month = event.month;
              month = month + 1;
              month = month < 10 ? '0' + month : month;
              var strint_date = event.year + '-' + month + '-' + day;

              if (this.holidayString.indexOf(event) == -1) {
                this.dateSelected = date;
                var currentDate = new Date();

                if (this.dateSelected.getTime() <= currentDate.getTime()) {
                  this.isHoliday = false;
                  this.hideCalenderModal();
                  this.getStudents();
                } else {
                  this.dataProvider.showToast(this.lang.future_date);
                }
              } else {
                this.dataProvider.showToast(this.lang.holiday);
              }
            }
          }
          /**
           * Change the status of the attendance
           * @param student student object whose attendance is selected to change
           */

        }, {
          key: "changeAttendanceStatus",
          value: function changeAttendanceStatus(student) {
            if (!this.isHoliday) {
              if (this.userType == '1') {
                if (this.editMode) {
                  if (student.suspend_leave || student.medical_leave) {
                    this.dataProvider.showToast(this.lang.att_modification_error);
                  } else {
                    this.attMarkBegin = true;
                    this.attNotMarked = false;

                    if (student.sheet['cem-1']) {
                      // present
                      student.sheet['cem-1'] = false; // mark absent

                      this.attendanceSheet['sid-' + student.sid] = '0';
                    } else {
                      student.sheet['cem-1'] = true; // mark present

                      this.attendanceSheet['sid-' + student.sid] = '1';
                    }
                  }
                } else {
                  this.dataProvider.showToast(this.lang.enable_edit);
                }
              } else if (this.userType == '3' && this.checkDateSelected(new Date())) {
                if (student.suspend_leave || student.medical_leave) {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else {
                  this.attMarkBegin = true;
                  this.attNotMarked = false;

                  if (student.sheet['cem-1'] && this.userType != "1") {
                    // present
                    this.dataProvider.showToast(this.lang.att_already_marked);
                  } else {
                    student.sheet['cem-1'] = true; // mark present

                    this.attendanceSheet['sid-' + student.sid] = '1';
                  }
                }
              } else {
                this.dataProvider.showToast(this.lang.att_modification_error);
              }
            } else {
              this.dataProvider.showToast(this.lang.holiday);
            }
          }
          /**
          * function to match the dates
          * @param date date with which compare the selected date
          */

        }, {
          key: "checkDateSelected",
          value: function checkDateSelected(date) {
            if (date.getDate() == this.dateSelected.getDate() && date.getMonth() == this.dateSelected.getMonth() && date.getFullYear() == this.dateSelected.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
          /**
           * For enabling editing mode
           */

        }, {
          key: "enableEditingMode",
          value: function enableEditingMode() {
            if (this.userType == '3' && this.checkDateSelected(new Date())) {
              this.editMode = true;
              this.dataProvider.showToast(this.lang.edit_mode_enabled);
            } else if (this.userType == '1') {
              this.editMode = true;
              this.dataProvider.showToast(this.lang.edit_mode_enabled);
            } else {
              this.dataProvider.showToast(this.lang.not_permission_to_enable);
            }
          }
          /**
           * Attendance submit function
           */

        }, {
          key: "submitAttendance",
          value: function submitAttendance() {
            var _this4 = this;

            if (this.attMarkBegin) {
              this.dataProvider.showLoading();
              var data = {};
              data.sheet = {};
              data.sheet["cem-1"] = {};
              data.user_no = this.userDetails.details.user_no;
              data.session_id = this.userDetails.session_id;
              data.cid = this.navData.cid;
              data.date = this.dataProvider.getFormatedDate(this.dateSelected);
              data.school_id = this.userDetails.details.school_id;
              Object.keys(this.attendanceSheet).map(function (key) {
                data.sheet["cem-1"][key] = _this4.attendanceSheet[key];
              });
              var submittedByUser = 0;

              if (this.userType == '1') {
                submittedByUser = 1;
              } else if (this.userType == '3') {
                submittedByUser = 2;
              }

              console.log(data);

              if (this.platform.is('cordova')) {
                if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                  this.dataProvider.markDelayAttendance(data, submittedByUser).then(function (response) {
                    _this4.dataProvider.hideLoading();

                    if (response) {
                      _this4.getStudents(false);

                      _this4.router.navigate(['tabs/delaylist'], {
                        replaceUrl: true
                      }); //  this.navCtrl.setRoot(TabsPage);

                    }
                  })["catch"](function (error) {
                    _this4.dataProvider.hideLoading();

                    _this4.dataProvider.errorALertMessage(error);
                  });
                } else {
                  this.dataProvider.hideLoading();

                  if (localStorage.getItem("delayattendance")) {
                    var delayAttendance = JSON.parse(localStorage.getItem("delayattendance"));
                    delayAttendance.push({
                      attendance: data,
                      submittedByUser: submittedByUser
                    });
                    localStorage.setItem("delayattendance", JSON.stringify(delayAttendance));
                  } else {
                    var _delayAttendance = [];

                    _delayAttendance.push({
                      attendance: data,
                      submittedByUser: submittedByUser
                    });

                    localStorage.setItem("delayattendance", JSON.stringify(_delayAttendance));
                  }

                  this.dataProvider.showToast(this.lang.offline_att_stored);
                }
              } else {
                this.dataProvider.markDelayAttendance(data, submittedByUser).then(function (response) {
                  _this4.dataProvider.hideLoading();

                  if (response) {
                    _this4.getStudents(false);

                    _this4.router.navigate(['tabs/delaylist'], {
                      replaceUrl: true
                    }); //this.navCtrl.setRoot(TabsPage);

                  }
                })["catch"](function (error) {
                  _this4.dataProvider.hideLoading();

                  _this4.dataProvider.errorALertMessage(error);
                });
              }
            } else {
              this.dataProvider.showToast(this.lang.select_att_to_update);
            }
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN)) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 3;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this5.openCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this5.openGallery();
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      _context.next = 9;
                      break;

                    case 8:
                      this.dataProvider.showToast(this.lang.no_internet);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this6 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.CAMERA,
              targetHeight: 500,
              targetWidth: 500
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this6.dataProvider.showLoading();

                var data = {
                  user_no: _this6.userDetails.details.user_no,
                  session_id: _this6.userDetails.session_id,
                  imageData: 'data:image/png;base64,' + imageData,
                  sid: _this6.student.sid
                };

                _this6.dataProvider.updateUserImage(data).then(function (response) {
                  _this6.dataProvider.hideLoading();

                  if (response.session) {
                    _this6.student.pic = response.url;
                  } else {
                    _this6.authProvider.flushLocalStorage();

                    _this6.dataProvider.errorALertMessage(response.message);

                    _this6.router.navigate(['login'], {
                      replaceUrl: true
                    }); // this.app.getRootNav().setRoot("LoginPage");

                  }
                })["catch"](function (error) {
                  _this6.dataProvider.hideLoading();

                  _this6.dataProvider.errorALertMessage(error);
                });
              }
            });
          }
          /**
           * Open gallery to take image
           */

        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this7 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              targetHeight: 500,
              targetWidth: 500
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this7.dataProvider.showLoading();

                var data = {
                  user_no: _this7.userDetails.details.user_no,
                  session_id: _this7.userDetails.session_id,
                  imageData: 'data:image/png;base64,' + imageData,
                  sid: _this7.student.sid
                };

                _this7.dataProvider.updateUserImage(data).then(function (response) {
                  _this7.dataProvider.hideLoading();

                  if (response.session) {
                    _this7.student.pic = response.url;
                  } else {
                    _this7.authProvider.flushLocalStorage();

                    _this7.dataProvider.errorALertMessage(response.message);

                    _this7.router.navigate(['login'], {
                      replaceUrl: true
                    }); // this.app.getRootNav().setRoot("LoginPage");

                  }
                })["catch"](function (error) {
                  _this7.dataProvider.hideLoading();

                  _this7.dataProvider.errorALertMessage(error);
                });
              }
            });
          }
          /**
           * function to caheck the current date
           * @param date date with which compare the current date
           */

        }, {
          key: "checkCurrentDate",
          value: function checkCurrentDate(date) {
            var currentDate = new Date();

            if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return StudentsPage;
      }();

      StudentsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      StudentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-students',
        template: _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_students_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], StudentsPage);
      /***/
    },

    /***/
    "qqi4":
    /*!*********************************************!*\
      !*** ./src/app/students/students.module.ts ***!
      \*********************************************/

    /*! exports provided: StudentsPageModule */

    /***/
    function qqi4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsPageModule", function () {
        return StudentsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./students-routing.module */
      "O8DA");
      /* harmony import */


      var _students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./students.page */
      "VHIv");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var StudentsPageModule = function StudentsPageModule() {
        _classCallCheck(this, StudentsPageModule);
      };

      StudentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _students_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_students_page__WEBPACK_IMPORTED_MODULE_6__["StudentsPage"]]
      })], StudentsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=students-students-module-es5.js.map
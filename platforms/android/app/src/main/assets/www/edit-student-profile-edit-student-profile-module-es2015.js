(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-student-profile-edit-student-profile-module"],{

/***/ "dg8o":
/*!*********************************************************************!*\
  !*** ./src/app/edit-student-profile/edit-student-profile.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body_div {\n  margin: 2px 5px 10px 5px;\n}\n.body_div ion-item {\n  width: 100%;\n  padding: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtc3R1ZGVudC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHdCQUFBO0FBQ0w7QUFBSztFQUNDLFdBQUE7RUFDQSxhQUFBO0FBRU4iLCJmaWxlIjoiZWRpdC1zdHVkZW50LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlfZGl2e1xyXG5cdCAgICBtYXJnaW46IDJweCA1cHggMTBweCA1cHg7XHJcblx0ICAgIGlvbi1pdGVte1xyXG5cdCAgICBcdHdpZHRoOiAxMDAlO1xyXG4gICAgXHRcdHBhZGRpbmc6IDE4cHg7XHJcblx0ICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "j/wL":
/*!*******************************************************************!*\
  !*** ./src/app/edit-student-profile/edit-student-profile.page.ts ***!
  \*******************************************************************/
/*! exports provided: EditStudentProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentProfilePage", function() { return EditStudentProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_student_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-student-profile.page.html */ "uj9r");
/* harmony import */ var _edit_student_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-student-profile.page.scss */ "dg8o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/database/database.service */ "HbOQ");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../service/data/data.service */ "v2nD");










//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';



//import { DatabaseProvider } from '../../providers/database/database';
let EditStudentProfilePage = class EditStudentProfilePage {
    constructor(popoverController, navCtrl, device, authProvider, platform, fcm, alertCtrl, translate, dataProvider, route, zone, router, dbProvider) {
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.device = device;
        this.authProvider = authProvider;
        this.platform = platform;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.route = route;
        this.zone = zone;
        this.router = router;
        this.dbProvider = dbProvider;
        this.student = {};
        this.classes = [];
        this.route.queryParams.subscribe(params => {
            this.translate.get("alertmessages").subscribe((val) => {
                this.lang = val;
            });
            if (this.router.getCurrentNavigation().extras.state) {
                this.navData = this.router.getCurrentNavigation().extras.state;
                this.studentName = this.navData.student.name;
                this.student_id = this.navData.student.student_id;
                console.log(this.navData);
                if (localStorage.getItem("userloggedin")) {
                    this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                    this.currentUser = this.userDetails.details.username;
                    this.currentUserEmail = this.userDetails.details.email_id;
                }
                if (localStorage.getItem('earlyLogin')) {
                    this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
                }
                this.getStudentProfile();
            }
        });
    }
    ngOnInit() {
        //	console.log(this.student,this.classes,this.studentSemester,this.studentName);
    }
    closeModal() {
        this.popoverController.dismiss();
    }
    getStudentProfile() {
        let data = {
            "user_no": this.userDetails.details.user_no,
            "session_id": this.userDetails.session_id,
            "cid": this.navData.course_id,
            "date": this.navData.dateSelected,
            "sid": this.navData.student.sid
        };
        this.dataProvider.getStudentDetails(data).then(response => {
            this.dataProvider.hideLoading();
            if (response.session) {
                console.log(response);
                this.student = response.data;
                this.getClasses();
            }
            else {
                this.dataProvider.errorALertMessage(response.message);
            }
        }).catch(error => {
            console.log(error);
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(error);
        });
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
                this.classes.forEach(res => {
                    if (res.name == this.student.course.name) {
                        this.studentSemester = res.cid;
                    }
                });
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(error);
        });
    }
    saveChanges() {
        const inputElement = document.getElementById("input");
        const inputElementid = document.getElementById("inputid");
        let i = inputElement.value;
        let id = inputElementid.value;
        const select = document.getElementById("select");
        let s = select.value;
        let data = {
            student: this.student,
            studentName: i,
            studentSemester: s
        };
        let updateData = {
            sid: this.student.sid,
            cid: this.student.cid,
            student_name: i,
            student_id: id,
            class_id: s,
            user_no: this.userDetails.details.user_no,
            school_id: this.userDetails.details.school_id,
            session_id: this.userDetails.session_id
        };
        console.log(updateData);
        this.dataProvider.updateStudentProfile(updateData, res => {
            // callback(res);
            const navigation = {
                state: {
                    isUpdated: true
                }
            };
            this.zone.run(() => {
                this.router.navigate(['manage-student'], navigation);
            });
            // this.router.navigate(['manage-student']);
            console.log(res);
        });
        //	console.log(data);
        //	this.popoverController.dismiss(data);
    }
    deleteStudent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.delete_student,
                backdropDismiss: true,
                mode: 'ios',
                buttons: [
                    {
                        text: this.lang.delete,
                        handler: () => {
                            // this.deleteUserNote(note_id, index);
                            let deleteData = {
                                sid: this.student.sid,
                                cid: this.student.cid,
                                user_no: this.userDetails.details.user_no,
                                school_id: this.userDetails.details.school_id,
                                session_id: this.userDetails.session_id
                            };
                            this.dataProvider.deleteStudent(deleteData, res => {
                                // callback(res);
                                const navigation = {
                                    state: {
                                        isUpdated: true
                                    }
                                };
                                this.zone.run(() => {
                                    this.router.navigate(['manage-student'], navigation);
                                });
                                console.log(res);
                            });
                        }
                    },
                    {
                        text: this.lang.alert_btn_cancel_text,
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteClass() {
        let data = {
            student: this.student,
            deleteClass: true
        };
        let deleteData = {
            sid: this.student.sid,
            cid: this.student.cid,
            user_no: this.userDetails.details.user_no,
            school_id: this.userDetails.details.school_id,
            session_id: this.userDetails.session_id
        };
        this.dataProvider.deleteStudentClass(deleteData, res => {
            // callback(res);
            this.router.navigate(['manage-student']);
            console.log(res);
        });
    }
};
EditStudentProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] }
];
EditStudentProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-student-profile',
        template: _raw_loader_edit_student_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_student_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]])
], EditStudentProfilePage);



/***/ }),

/***/ "qevg":
/*!*********************************************************************!*\
  !*** ./src/app/edit-student-profile/edit-student-profile.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditStudentProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentProfilePageModule", function() { return EditStudentProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_student_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-student-profile-routing.module */ "tRjN");
/* harmony import */ var _edit_student_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-student-profile.page */ "j/wL");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let EditStudentProfilePageModule = class EditStudentProfilePageModule {
};
EditStudentProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_student_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditStudentProfilePageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_edit_student_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditStudentProfilePage"]]
    })
], EditStudentProfilePageModule);



/***/ }),

/***/ "tRjN":
/*!*****************************************************************************!*\
  !*** ./src/app/edit-student-profile/edit-student-profile-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EditStudentProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentProfilePageRoutingModule", function() { return EditStudentProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_student_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-student-profile.page */ "j/wL");




const routes = [
    {
        path: '',
        component: _edit_student_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditStudentProfilePage"]
    }
];
let EditStudentProfilePageRoutingModule = class EditStudentProfilePageRoutingModule {
};
EditStudentProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditStudentProfilePageRoutingModule);



/***/ }),

/***/ "uj9r":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-student-profile/edit-student-profile.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'edit_student.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n\t<div class=\"body_div\">\n\t\t<ion-row class=\"input-row\">\n\t\t\t<ion-item class=\"item\">\n\t\t\t\t<ion-label>{{'edit_student.name' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{studentName}}\" value=\"{{studentName}}\" id=\"input\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"item\">\n\t\t\t\t<ion-label>{{'edit_student.id' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{student_id}}\" value=\"{{student_id}}\" id=\"inputid\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"item\">\n\t\t\t\t<ion-label>{{'edit_student.class' | translate}}</ion-label>\n\t\t\t\t<ion-select placeholder=\"{{student.course_name}}\" value=\"{{studentSemester}}\" id=\"select\" interface=\"popover\">\n\t\t\t\t\t<ion-select-option *ngFor=\"let c of classes\" value={{c.cid}}>{{c.name}}</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"btn-row\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"saveChanges()\">{{'edit_student.save' | translate}}</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"danger\" (click)=\"deleteStudent()\">{{'edit_student.delete' | translate}}</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=edit-student-profile-edit-student-profile-module-es2015.js.map
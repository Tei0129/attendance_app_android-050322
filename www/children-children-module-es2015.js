(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["children-children-module"],{

/***/ "APEF":
/*!*********************************************!*\
  !*** ./src/app/children/children.module.ts ***!
  \*********************************************/
/*! exports provided: ChildrenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenPageModule", function() { return ChildrenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _children_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./children-routing.module */ "ky4X");
/* harmony import */ var _children_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./children.page */ "N20Q");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let ChildrenPageModule = class ChildrenPageModule {
};
ChildrenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _children_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildrenPageRoutingModule"]
        ],
        declarations: [_children_page__WEBPACK_IMPORTED_MODULE_6__["ChildrenPage"]]
    })
], ChildrenPageModule);



/***/ }),

/***/ "N20Q":
/*!*******************************************!*\
  !*** ./src/app/children/children.page.ts ***!
  \*******************************************/
/*! exports provided: ChildrenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenPage", function() { return ChildrenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_children_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./children.page.html */ "RY/D");
/* harmony import */ var _children_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./children.page.scss */ "w474");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ChildrenPage = class ChildrenPage {
    /**
     *
     * @param navCtrl Use for navigation between pages
     * @param authProvider Use for authentication purpose
     * @param dataProvider Use for getting data from the API
     * @param translate for translation
     * @param app Root app
     */
    constructor(navCtrl, dataProvider, authProvider, router, route, zone, 
    //  public app: App,
    translate) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.translate = translate;
        /**
         * @member student: Contains information about the student selected
         * @member students Array of all the childern
         * @member showProfileModal Boolean variable used to show hide the profile modal
         * @member userDetails Contains the user details who is logged in from local storage
         * @member noDataFound used for diplaying the message when no child found
         * @member lang Contains the language translation object
         * @member studentBehaviour selected student behaviour
         */
        this.student = {};
        this.students = [];
        this.showProfileModal = false;
        this.userDetails = {};
        this.lang = {};
        this.studentBehaviour = '';
        this.ispermit = true;
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
        this.dataProvider.language.subscribe((resq) => {
            this.translate.get("alertmessages").subscribe((res) => {
                // console.log(this.lang);
                this.lang = res;
            });
        });
        this.authProvider.event.subscribe((res) => {
            //  console.log('change',res)
            if (res.changeUser) {
                this.ionViewWillEnter();
            }
        });
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            //  this.dataProvider.hideLoading();
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.students = this.userDetails.details.child;
            if (this.student) {
                if (this.students.length == 0) {
                    this.noDataFound = this.lang.no_student_assigned;
                }
            }
            else {
                this.noDataFound = this.lang.no_student_assigned;
            }
            this.dataProvider.getChildrens({ "user_no": this.userDetails.details.user_no, "school_id": this.userDetails.details.school_id }).then((children) => {
                console.log('children', children);
                this.students = children.data;
                this.userDetails.details.child = children.data;
                this.ispermit = children.permit;
                localStorage.setItem("userloggedin", JSON.stringify(this.userDetails));
            }).catch((error) => {
                this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            //  this.dataProvider.hideLoading();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    /**
     * Open image modal popup
     * @param student Object of student details to show in image popup
     */
    openUserImageModal(student) {
        this.student = student;
        if (student.agg_ranking > 0 && student.agg_ranking < 2.6) {
            this.studentBehaviour = this.lang.warning_behaviour;
        }
        else if (student.agg_ranking > 2.5 && student.agg_ranking < 3.6) {
            this.studentBehaviour = this.lang.good_behaviour;
        }
        else if (student.agg_ranking > 3.5 && student.agg_ranking < 4.6) {
            this.studentBehaviour = this.lang.very_good_behaviour;
        }
        else if (student.agg_ranking > 4.5 && student.agg_ranking < 5.1) {
            this.studentBehaviour = this.lang.excellent_behaviour;
        }
        else {
            this.studentBehaviour = this.lang.no_behaviour;
        }
        this.showProfileModal = true;
    }
    /**
     * Hide image modal popup
     */
    hideUserImageModal(event) {
        if (event.target.className == "custom-modal-main") {
            this.showProfileModal = false;
        }
    }
    /**
    * Open student detail page
    * @param student_id Id of the student you want to see the details
    */
    openStudentDetail(student_id) {
        // this.navCtrl.push("StudentDetailPage", {
        //   student_id: student_id,
        //   course_id: '',
        //   dateSelected: this.dataProvider.getFormatedDate(new Date())
        // });
        const navigation = {
            state: {
                student_id: student_id,
                course_id: '',
                dateSelected: this.dataProvider.getFormatedDate(new Date())
            }
        };
        //console.log(navigation);
        this.zone.run(() => {
            this.router.navigate(['student-detail'], navigation);
        });
    }
    ngOnInit() {
    }
};
ChildrenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
ChildrenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-children',
        template: _raw_loader_children_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_children_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], ChildrenPage);



/***/ }),

/***/ "RY/D":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/children/children.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n   <ion-toolbar>\n   \t<ion-buttons slot=\"end\">\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>\n      {{'children.title' | translate}}\n    </ion-title>\n  </ion-toolbar>\n  <ion-row style=\"font-size: 13px;\">\n    <ion-col size=\"1\" ></ion-col>\n    <ion-col size=\"5\" align-self-center text-right>{{'children.student_name' | translate}}</ion-col>\n    <ion-col size=\"5\" no-padding align-self-center style=\"text-align: left;\" text-left>{{'children.a_d' | translate}}</ion-col>\n    <ion-col size=\"1\" ></ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <!-- (swipe)=\"swipeEvent($event)\" -->\n  <div class=\"main-content\" >\n    <ion-list>\n      <ion-card class=\"student-class\" *ngFor=\"let student of students\">\n        <ion-card-content no-padding>\n          <ion-row justify-content-center class=\"right-direction\">\n            <ion-col align-self-center no-padding class=\"checkbox-area\" size=\"2\" text-center>\n              <div *ngIf=\" ispermit\" class=\"abs-outer\">{{student.attendance}}</div>\n            </ion-col>\n            <ion-col no-padding size=\"10\" align-self-center no-padding>\n              <ion-item no-padding lines=\"none\" class=\"text-right\">\n                <ion-label text-right (click)=\"openStudentDetail(student.sid)\">\n                  <h2>{{student.name}}</h2>\n                  <p *ngIf=\"student.unacceptable_absent_days && ispermit\" >{{'list-student.unacceptable_absence' | translate}} : {{student.unacceptable_absent_days}}</p>\n                </ion-label>\n                <ion-avatar item-end slot=\"end\">\n                  <img [src]=\"student.pic\" (click)=\"openUserImageModal(student)\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n                </ion-avatar>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-label class=\"norecord-found\" text-center *ngIf = \"students?.length == 0\">{{noDataFound}}</ion-label>\n  </div>\n</ion-content>\n\n<div class=\"custom-modal-main\" *ngIf=\"showProfileModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-header\">\n      <div class=\"image-sec\" [ngStyle]=\"{'background-image': 'url('+student.pic+')'}\"></div>\n    </div>\n    <div class=\"custom-modal-content\">\n      <h2>{{student.name}}</h2>\n      <p *ngIf = \"studentBehaviour != ''\">{{studentBehaviour}}</p>\n      <p>{{'list-student.total_absents' | translate}} : {{student.attendance}}</p>\n    </div>\n    <div class=\"custom-modal-footer\">\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"lefthorizline\">\n          <p text-center class=\"absence-count\">{{student.unacceptable_absent_days}}</p>\n          <p text-center class=\"absence\">{{'list-student.unacceptable_absence' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" text-center>\n          <p text-center class=\"absence-count\">{{student.suspend_days}}</p>\n          <p text-center class=\"absence\">{{'list-student.suspension_days' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" text-right>\n          <p text-center class=\"absence-count\">{{student.medical_days}}</p>\n          <p text-center class=\"absence\">{{'list-student.medical_days' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "ky4X":
/*!*****************************************************!*\
  !*** ./src/app/children/children-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChildrenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenPageRoutingModule", function() { return ChildrenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _children_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./children.page */ "N20Q");




const routes = [
    {
        path: '',
        component: _children_page__WEBPACK_IMPORTED_MODULE_3__["ChildrenPage"]
    }
];
let ChildrenPageRoutingModule = class ChildrenPageRoutingModule {
};
ChildrenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChildrenPageRoutingModule);



/***/ }),

/***/ "w474":
/*!*********************************************!*\
  !*** ./src/app/children/children.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".abs-outer {\n  width: 30px;\n  height: 30px;\n  background: #ececec;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2.5vh;\n}\n\nion-card-content {\n  padding: unset;\n  border-bottom: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoaWxkcmVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUksYUFBQTtBQUFaOztBQUVJO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FBQ1IiLCJmaWxlIjoiY2hpbGRyZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5hYnMtb3V0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC8vICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luOiAyLjV2aDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcbiAgICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=children-children-module-es2015.js.map
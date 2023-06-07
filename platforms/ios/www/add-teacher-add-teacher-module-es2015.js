(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-teacher-add-teacher-module"],{

/***/ "6+bF":
/*!*************************************************!*\
  !*** ./src/app/add-teacher/add-teacher.page.ts ***!
  \*************************************************/
/*! exports provided: AddTeacherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherPage", function() { return AddTeacherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_teacher_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-teacher.page.html */ "T2ey");
/* harmony import */ var _add_teacher_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-teacher.page.scss */ "lYDd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AddTeacherPage = class AddTeacherPage {
    constructor(navCtrl, translate, dataProvider, authProvider, alertCtrl, route, zone, router, modalController) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.zone = zone;
        this.router = router;
        this.modalController = modalController;
        this.teacherData = {};
        this.validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.lang = {};
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
            //console.log('langres',res);
        });
    }
    ngOnInit() {
        if (localStorage.getItem("userloggedin")) {
            // console.log('logged in');
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
        }
    }
    submit() {
        console.log(this.teacherData);
        if (this.validateForm()) {
            console.log('validateForm');
            this.teacherData.email_id = this.teacherData.email_id || '';
            this.teacherData.user_no = this.userDetails.details.user_no;
            this.teacherData.school_id = this.userDetails.details.school_id;
            this.dataProvider.showLoading();
            this.dataProvider.registerTeacher(this.teacherData).then((res) => {
                this.dataProvider.hideLoading();
                console.log('plan', res);
                const navigation = {
                    state: {
                        isUpdated: true
                    }
                };
                this.zone.run(() => {
                    this.router.navigate(['manage-teacher'], navigation);
                });
            }).catch(e => {
                this.dataProvider.showToast(e);
                this.dataProvider.hideLoading();
                console.log(e);
            });
        }
    }
    validateForm() {
        if (this.teacherData.email_id && !this.teacherData.email_id.match(this.validRegex)) {
            this.dataProvider.showToast(this.lang.email_valid);
            return false;
        }
        else if (!this.teacherData.first_name || this.teacherData.first_name == '') {
            this.dataProvider.showToast(this.lang.usename_required);
            return false;
        }
        else if (!this.teacherData.username || this.teacherData.username == '') {
            this.dataProvider.showToast(this.lang.user_id_required);
            return false;
        }
        else if (!this.teacherData.password || this.teacherData.password == '') {
            this.dataProvider.showToast(this.lang.password_required);
            return false;
        }
        else if (!this.teacherData.confirm_password || (this.teacherData.confirm_password != this.teacherData.password)) {
            this.dataProvider.showToast(this.lang.confirm_password_required);
            return false;
        }
        else {
            return true;
        }
    }
};
AddTeacherPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AddTeacherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-teacher',
        template: _raw_loader_add_teacher_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_teacher_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], AddTeacherPage);



/***/ }),

/***/ "T2ey":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-teacher/add-teacher.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'add_teacher.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"content\">\n\t\t\n\t\t<ion-list class=\"form-list\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_teacher.Email' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"email\" [(ngModel)]=\"teacherData.email_id\" ></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_teacher.Name' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"teacherData.first_name\" ></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_teacher.user_id' |translate}}</ion-label>\n\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"teacherData.username\" ></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_teacher.Password' |translate}}</ion-label>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"teacherData.password\" ></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_teacher.confirm_password'| translate}}</ion-label>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"teacherData.confirm_password\" ></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t\t<div class=\"btn\">\n\t\t\t<ion-button expand=\"block\" (click)=\"submit()\">{{'add_teacher.Submit'| translate}}</ion-button>\n\t\t</div>\n\t</div>\n\n</ion-content>\n");

/***/ }),

/***/ "lYDd":
/*!***************************************************!*\
  !*** ./src/app/add-teacher/add-teacher.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 100%;\n  padding: 12px;\n  background: #f1f1f1;\n}\n.content .btn {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC10ZWFjaGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUdDO0VBQ0MsWUFBQTtBQURGIiwiZmlsZSI6ImFkZC10ZWFjaGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcblx0LmZvcm0tbGlzdHtcclxuXHJcblx0fVxyXG5cdC5idG57XHJcblx0XHRtYXJnaW46MjBweDtcclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "oSRS":
/*!***********************************************************!*\
  !*** ./src/app/add-teacher/add-teacher-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddTeacherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherPageRoutingModule", function() { return AddTeacherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_teacher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-teacher.page */ "6+bF");




const routes = [
    {
        path: '',
        component: _add_teacher_page__WEBPACK_IMPORTED_MODULE_3__["AddTeacherPage"]
    }
];
let AddTeacherPageRoutingModule = class AddTeacherPageRoutingModule {
};
AddTeacherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddTeacherPageRoutingModule);



/***/ }),

/***/ "veIr":
/*!***************************************************!*\
  !*** ./src/app/add-teacher/add-teacher.module.ts ***!
  \***************************************************/
/*! exports provided: AddTeacherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherPageModule", function() { return AddTeacherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-teacher-routing.module */ "oSRS");
/* harmony import */ var _add_teacher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-teacher.page */ "6+bF");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let AddTeacherPageModule = class AddTeacherPageModule {
};
AddTeacherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTeacherPageRoutingModule"]
        ],
        declarations: [_add_teacher_page__WEBPACK_IMPORTED_MODULE_6__["AddTeacherPage"]]
    })
], AddTeacherPageModule);



/***/ })

}]);
//# sourceMappingURL=add-teacher-add-teacher-module-es2015.js.map
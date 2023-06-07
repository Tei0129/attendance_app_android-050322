(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-user-add-user-module"],{

/***/ "MQEE":
/*!*****************************************************!*\
  !*** ./src/app/add-user/add-user-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageRoutingModule", function() { return AddUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user.page */ "Ts82");




const routes = [
    {
        path: '',
        component: _add_user_page__WEBPACK_IMPORTED_MODULE_3__["AddUserPage"]
    }
];
let AddUserPageRoutingModule = class AddUserPageRoutingModule {
};
AddUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddUserPageRoutingModule);



/***/ }),

/***/ "Ts82":
/*!*******************************************!*\
  !*** ./src/app/add-user/add-user.page.ts ***!
  \*******************************************/
/*! exports provided: AddUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPage", function() { return AddUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-user.page.html */ "jmg2");
/* harmony import */ var _add_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user.page.scss */ "VgNZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AddUserPage = class AddUserPage {
    constructor(navCtrl, 
    // public app: App, 
    translate, dataProvider, authProvider, 
    //public events: Events,
    alertCtrl, route, zone, router, modalController) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.zone = zone;
        this.router = router;
        this.modalController = modalController;
        this.usersData = {};
        this.classes = [];
        this.validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.lang = {};
        this.show_save_user_spinner = false;
        this.usersDataclass = [];
        this.email_validation = false;
        this.confirm_password_validation = false;
        this.password_validation = false;
        this.user_name_validation = false;
        this.submitted = false;
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
            //console.log('alertmsg',res);
        });
    }
    ngOnInit() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            //console.log('userdls',this.userDetails);
        }
        this.getCourses();
    }
    submit() {
        // console.log('userDtaa', this.usersData);	
        if (this.validateForm()) {
            this.usersData.email_id = this.usersData.email_id || '';
            this.usersData.user_no = this.userDetails.details.user_no;
            this.usersData.school_id = this.userDetails.details.school_id;
            this.usersData.class = JSON.stringify(this.usersDataclass);
            // this.dataProvider.showLoading();
            this.show_save_user_spinner = true;
            this.dataProvider.registerNewUser(this.usersData).then((res) => {
                // this.dataProvider.hideLoading();
                this.show_save_user_spinner = false;
                // console.log('userdata', res);
                const navigation = {
                    state: {
                        isUpdated: true
                    }
                };
                this.zone.run(() => {
                    this.router.navigate(['users-list'], navigation);
                });
            }).catch(e => {
                this.dataProvider.showToast(e);
                this.dataProvider.showLoading();
            });
        }
    }
    validateForm() {
        let is_validate = true;
        this.email_validation = false;
        this.user_name_validation = false;
        this.password_validation = false;
        this.user_id_required = false;
        this.submitted = true;
        this.confirm_password_validation = false;
        console.log(this.usersData);
        if (this.usersData.email_id && !this.usersData.email_id.match(this.validRegex)) {
            // this.dataProvider.showToast(this.lang.email_valid);
            this.email_validation = true;
            is_validate = false;
        }
        if (!this.usersData.first_name || this.usersData.first_name == '') {
            // this.dataProvider.showToast(this.lang.usename_required);
            this.user_name_validation = true;
            is_validate = false;
        }
        if (!this.usersData.username || this.usersData.username == '') {
            this.dataProvider.showToast(this.lang.user_id_required);
            this.user_id_required = true;
            is_validate = false;
        }
        if (!this.usersData.password || this.usersData.password == '') {
            // this.dataProvider.showToast(this.lang.password_required);
            this.password_validation = true;
            is_validate = false;
        }
        if (!this.usersData.confirm_password || (this.usersData.confirm_password != this.usersData.password)) {
            // this.dataProvider.showToast(this.lang.confirm_password_required);
            this.confirm_password_validation = true;
            is_validate = false;
        }
        return is_validate;
    }
    check() {
        console.log(this.usersData.attendence_permit);
    }
    getCourses() {
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
                console.log("classs==>", this.classes);
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(error);
        });
    }
    portChange(event) {
        console.log("ev", event);
        // this.usersDataclass= event.value;
    }
};
AddUserPage.ctorParameters = () => [
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
AddUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-user',
        template: _raw_loader_add_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
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
], AddUserPage);



/***/ }),

/***/ "VgNZ":
/*!*********************************************!*\
  !*** ./src/app/add-user/add-user.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 100%;\n  padding: 12px;\n  background: #f1f1f1;\n}\n.content .btn {\n  margin: 20px;\n}\n.valid-input {\n  color: green;\n}\n.invalid-input {\n  color: red;\n}\n.time-row {\n  border: 1px solid gray;\n  margin: 14px;\n}\n.time-row ion-item {\n  width: 100%;\n}\n.time-row .input-item {\n  --min-height: 75px;\n}\n.time-row .input-item ion-input {\n  --padding-start: 5px;\n  border: 1px solid black;\n  width: 167px;\n  height: 33px;\n  border-radius: 6px;\n}\n.time-row .input-item span {\n  font-size: 11px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNDO0VBQ0MsWUFBQTtBQUNGO0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUFDQTtFQUNJLFVBQUE7QUFFSjtBQUFBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBR0o7QUFGSTtFQUNJLFdBQUE7QUFJUjtBQUZJO0VBQ0ksa0JBQUE7QUFJUjtBQUhRO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDTixZQUFBO0VBQ00sa0JBQUE7QUFLWjtBQUhRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFLWiIsImZpbGUiOiJhZGQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG5cclxuXHQuYnRue1xyXG5cdFx0bWFyZ2luOjIwcHg7XHJcblx0fVxyXG59XHJcbi52YWxpZC1pbnB1dHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4uaW52YWxpZC1pbnB1dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLnRpbWUtcm93e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIG1hcmdpbjogMTRweDtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIH1cclxuICAgIC5pbnB1dC1pdGVte1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNzVweDtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgd2lkdGg6IDE2N3B4O1xyXG5cdFx0ICAgIGhlaWdodDogMzNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "jmg2":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'add_users.title' | translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n\t\t<ion-list class=\"form-list\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_users.Email' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"email\" [(ngModel)]=\"usersData.email_id\"></ion-input>\n\t\t\t\t<ion-icon *ngIf=\"(usersData.email_id && !email_validation) && submitted\" slot=\"end\" class=\"valid-input\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"(!usersData.email_id || email_validation) && submitted\" slot=\"end\" class=\"invalid-input\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_users.Name' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"usersData.first_name\"></ion-input>\n\t\t\t\t<ion-icon *ngIf=\"usersData.first_name && !user_name_validation && submitted\" slot=\"end\" class=\"valid-input\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"!usersData.first_name && user_name_validation && submitted\" slot=\"end\" class=\"invalid-input\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_users.user_id' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"usersData.username\"></ion-input>\n\t\t\t\t<ion-icon *ngIf=\"usersData.username && !user_id_required && submitted\" slot=\"end\" class=\"valid-input\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"!usersData.username && user_id_required && submitted\" slot=\"end\" class=\"invalid-input\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_users.Password' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"usersData.password\"></ion-input>\n\t\t\t\t<ion-icon *ngIf=\"usersData.password && !password_validation && submitted\" slot=\"end\" class=\"valid-input\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"!usersData.password && password_validation && submitted\" slot=\"end\" class=\"invalid-input\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'add_users.confirm_password' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"usersData.confirm_password\"></ion-input>\n\t\t\t\t<ion-icon *ngIf=\"usersData.confirm_password && !confirm_password_validation && submitted\" slot=\"end\" class=\"valid-input\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"!usersData.confirm_password && confirm_password_validation && submitted\" slot=\"end\" class=\"invalid-input\" name=\"close-circle-outline\"></ion-icon>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'user_profile.user_type' | translate}}</ion-label>\n\t\t\t\t<ion-select interface=\"action-sheet\" mode=\"ios\" [(ngModel)]=\"usersData.user_type\" [value]=\"usersData.user_type\">\n\t\t\t\t  <ion-select-option value=\"3\">{{'user_profile.Moderator'| translate}}</ion-select-option>\n\t\t\t\t  <ion-select-option value=\"1\">{{'user_profile.Admin'| translate}}</ion-select-option>\n\t\t\t\t  <ion-select-option value=\"5\">{{'user_profile.Register'| translate}}</ion-select-option>\n\t\t\t\t  <ion-select-option value=\"6\">{{'user_profile.Medical'| translate}}</ion-select-option>\n\t\t\t\t  <ion-select-option value=\"7\">{{'user_profile.Viewer'| translate}}</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t  </ion-item>\n\t\t</ion-list>\n\t\t<ion-row class=\"time-row\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-toggle slot=\"end\" color=\"primary\" (onChange)=\"check()\" [(ngModel)]=\"usersData.attendence_permit\"></ion-toggle>\t\t\t\n                <h3>{{'user_profile.edit_permission'| translate}}</h3>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"input-item\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"usersData.time\" placeholder=\"{{'user_profile.time' | translate}}\"></ion-input>\n\t\t\t\t\t<span>{{'user_profile.note'|translate}} : {{'user_profile.input_time_type'| translate}}</span>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{'teacher_profile.class'| translate}}</ion-label>\n\t\t\t\t<ionic-selectable style=\"height: 6vh; margin-top: -2px;overflow: hidden;\" \n\t\t\t\t  [(ngModel)]=\"usersDataclass\"\n\t\t\t\t  [isMultiple]=\"true\"\n\t\t\t\t  [items]=\"classes\"\n\t\t\t\t  itemValueField=\"cid\"\n\t\t\t\t  itemTextField=\"name\"\n\t\t\t\t  (onChange)=\"portChange($event)\"\n\t\t\t\t  [canSearch]=\"true\">\n\t\t\t\t</ionic-selectable>\n\t\t\t  </ion-item>\n\t\t</ion-row>\n\t\t<div class=\"radio-div\">\n\t\t\t<!-- <ion-radio-group [(ngModel)]=\"usersData.user_type\" [value]=\"usersData.user_type\">\n\t\t\t\t\t<h3 class=\"radio-head\">{{'user_profile.user_type'| translate}}</h3>\n\t\t\t\t<ion-row class=\"user_type\">\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t\t  <ion-radio value=\"3\"></ion-radio>\n\t\t\t\t\t\t\t  <div>\t\n\t\t\t\t\t\t\t\t  <ion-label>{{'user_profile.Moderator'| translate}}</ion-label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t\t  <ion-radio value=\"1\"></ion-radio>\n\t\t\t\t\t\t\t  <div>\t\n\t\t\t\t\t\t\t\t  <ion-label>{{'user_profile.Admin'| translate}}</ion-label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t\t  <ion-radio value=\"5\"></ion-radio>\n\t\t\t\t\t\t\t  <div>\t\n\t\t\t\t\t\t\t\t  <ion-label>{{'user_profile.Register'| translate}}</ion-label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t\t  <ion-radio value=\"6\"></ion-radio>\n\t\t\t\t\t\t\t  <div>\t\n\t\t\t\t\t\t\t\t  <ion-label>{{'user_profile.Medical'| translate}}</ion-label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t\t\t  <ion-radio value=\"7\"></ion-radio>\n\t\t\t\t\t\t\t  <div>\t\n\t\t\t\t\t\t\t\t  <ion-label>{{'user_profile.Viewer'| translate}}</ion-label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-radio-group> -->\n\t\t\t<!-- <ion-list>\n\t\t\t\t\n\t\t\t  </ion-list> -->\n\t\t</div>\n\t\t\n\t\t<div class=\"btn\">\n\t\t\t<ion-button expand=\"block\" (click)=\"submit()\"><ion-spinner name=\"crescent\" *ngIf=\"show_save_user_spinner\"></ion-spinner><span *ngIf=\"!show_save_user_spinner\"> {{'add_users.Submit' | translate}} </span></ion-button>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "wxhZ":
/*!*********************************************!*\
  !*** ./src/app/add-user/add-user.module.ts ***!
  \*********************************************/
/*! exports provided: AddUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function() { return AddUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user-routing.module */ "MQEE");
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user.page */ "Ts82");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let AddUserPageModule = class AddUserPageModule {
};
AddUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUserPageRoutingModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_add_user_page__WEBPACK_IMPORTED_MODULE_6__["AddUserPage"]]
    })
], AddUserPageModule);



/***/ })

}]);
//# sourceMappingURL=add-user-add-user-module-es2015.js.map
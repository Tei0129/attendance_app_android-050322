(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parent-register-parent-register-module"],{

/***/ "6dVA":
/*!*******************************************************************!*\
  !*** ./src/app/parent-register/parent-register-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ParentRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRegisterPageRoutingModule", function() { return ParentRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parent_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent-register.page */ "Zd8D");




const routes = [
    {
        path: '',
        component: _parent_register_page__WEBPACK_IMPORTED_MODULE_3__["ParentRegisterPage"]
    }
];
let ParentRegisterPageRoutingModule = class ParentRegisterPageRoutingModule {
};
ParentRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ParentRegisterPageRoutingModule);



/***/ }),

/***/ "E60M":
/*!***********************************************************!*\
  !*** ./src/app/parent-register/parent-register.module.ts ***!
  \***********************************************************/
/*! exports provided: ParentRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRegisterPageModule", function() { return ParentRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _parent_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parent-register-routing.module */ "6dVA");
/* harmony import */ var _parent_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parent-register.page */ "Zd8D");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let ParentRegisterPageModule = class ParentRegisterPageModule {
};
ParentRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _parent_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParentRegisterPageRoutingModule"]
        ],
        declarations: [_parent_register_page__WEBPACK_IMPORTED_MODULE_6__["ParentRegisterPage"]]
    })
], ParentRegisterPageModule);



/***/ }),

/***/ "Zd8D":
/*!*********************************************************!*\
  !*** ./src/app/parent-register/parent-register.page.ts ***!
  \*********************************************************/
/*! exports provided: ParentRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRegisterPage", function() { return ParentRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parent_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parent-register.page.html */ "veAi");
/* harmony import */ var _parent_register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent-register.page.scss */ "xoRU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/database/database.service */ "HbOQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/loader.component */ "vPOg");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");













let ParentRegisterPage = class ParentRegisterPage {
    constructor(authProvider, dataProvider, route, router, fcm, device, popoverController, platform, dbProvider) {
        this.authProvider = authProvider;
        this.dataProvider = dataProvider;
        this.route = route;
        this.router = router;
        this.fcm = fcm;
        this.device = device;
        this.popoverController = popoverController;
        this.platform = platform;
        this.dbProvider = dbProvider;
        this.parent = {};
        this.loggedinUser = [];
        this.user = {};
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.user_no = this.router.getCurrentNavigation().extras.state.un;
                this.school_id = this.router.getCurrentNavigation().extras.state.id;
                console.log('ionViewDidLoad RegisterparentPage');
                console.log("user_no" + this.user_no);
                console.log("school_id" + this.school_id);
            }
        });
    }
    ngOnInit() {
    }
    _keyPress(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    ionViewWillEnter() {
        this.dbProvider.createTable();
        if (localStorage.getItem('earlyLogin')) {
            this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
            console.log(this.loggedinUser);
        }
        if (this.platform.is("cordova")) {
            this.user.device_id = this.device.uuid;
            if (this.device.platform == 'android' || this.device.platform == 'Android') {
                this.user.os_type = 1;
            }
            else {
                this.user.os_type = 2;
            }
            this.fcm.getToken().then((token) => {
                this.user.registration_id = token;
            });
        }
    }
    registerparent() {
        this.dataProvider.showLoading();
        this.dataProvider.registerNewParent({
            "user_no": this.user_no,
            "school_id": this.school_id,
            "parentId": this.parent.parentId,
            "parentName": this.parent.name,
            "studentId": this.parent.studentId,
            "studentName": this.parent.studentName,
            "password": this.parent.password
        }).then((response) => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(response);
            this.user.email_id = this.parent.parentId;
            this.user.password = this.parent.password;
            // this.navCtrl.pop();
            this.login();
        }).catch((err) => {
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(err);
        });
    }
    login() {
        console.log('logindata', this.user);
        this.presentPopover();
        this.authProvider.doLogin(this.user).then((response) => {
            this.dissmissPopOver();
            console.log('res', response);
            if (this.loggedinUser.length > 0) {
                let isexist = false;
                let index;
                for (let i = 0; i < this.loggedinUser.length; i++) {
                    if (this.loggedinUser[i].email_id == this.user.email_id) {
                        isexist = true;
                        index = i;
                    }
                }
                let img;
                if (response.details.is_school_admin == 1) {
                    img = response.details.school_logo;
                }
                else {
                    img = response.details.pic;
                }
                let data = {
                    name: response.details.first_name,
                    email_id: this.user.email_id,
                    password: this.user.password,
                    user_no: response.details.user_no,
                    image: img
                };
                if (!isexist) {
                    this.loggedinUser.push(data);
                }
                else {
                    this.loggedinUser[index] = data;
                }
                console.log('early Log', this.loggedinUser);
                localStorage.setItem("earlyLogin", JSON.stringify(this.loggedinUser));
            }
            else {
                let img;
                if (response.details.is_school_admin == 1) {
                    img = response.details.school_logo;
                }
                else {
                    img = response.details.pic;
                }
                let data = {
                    name: response.details.first_name,
                    email_id: this.user.email_id,
                    password: this.user.password,
                    user_no: response.details.user_no,
                    image: img
                };
                this.loggedinUser.push(data);
                console.log('early Log', this.loggedinUser);
                localStorage.setItem("earlyLogin", JSON.stringify(this.loggedinUser));
            }
            this.authProvider.publishEvent(true);
            this.authProvider.changeUser(true);
            if (response.details.user_type == '4') {
                this.router.navigate(['tabs/children'], { replaceUrl: true });
            }
            else if (response.details.user_type == '8') {
                this.router.navigate(['tabs/student-notes'], { replaceUrl: true });
            }
            else {
                this.router.navigate(['tabs'], { replaceUrl: true });
            }
        }).catch((error) => {
            this.dissmissPopOver();
            this.dataProvider.errorALertMessage(error);
        });
    }
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle',
            });
            return this.popOver.present();
        });
    }
    dissmissPopOver() {
        this.popOver.dismiss();
    }
};
ParentRegisterPage.ctorParameters = () => [
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }
];
ParentRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parent-register',
        template: _raw_loader_parent_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parent_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
], ParentRegisterPage);



/***/ }),

/***/ "veAi":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent-register/parent-register.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title text-right>{{'reg_parent.pagetitle' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding mode=\"md\">\n  <form #registerForm='ngForm'>\n    <ion-list>\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'reg_parent.parentid' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"parentID\" #parentID='ngModel' class=\"centerInput\" [(ngModel)]=\"parent.parentId\"\n          pattern=\"[0-9]*$\" (keypress)=\"_keyPress($event)\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"parentID.invalid && (parentID.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"parentID.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n        <div *ngIf=\"parentID.errors.pattern\">\n          {{'validations.invalidparentId' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'reg_parent.parentname' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"parentName\" #parentName='ngModel' class=\"centerInput\" [(ngModel)]=\"parent.name\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"parentName.invalid && (parentName.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"parentName.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'reg_parent.studentid' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"studentId\" #studentId='ngModel' class=\"centerInput\" [(ngModel)]=\"parent.studentId\" text-right required (keypress)=\"_keyPress($event)\">\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"studentId.invalid && (studentId.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"studentId.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'reg_parent.studentname' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"studentName\" #studentName='ngModel' class=\"centerInput\" [(ngModel)]=\"parent.studentName\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"studentName.invalid && (studentName.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"studentName.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'reg_parent.parentpassword' | translate}}</ion-label>\n        <ion-input type=\"password\" name=\"parentPassword\" #parentPassword='ngModel' class=\"centerInput\" [(ngModel)]=\"parent.password\" text-right required></ion-input>\n      </ion-item>\n      <div *ngIf=\"parentPassword.invalid && (parentPassword.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"parentPassword.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-row padding>\n        <ion-button  expand=\"full\" class=\"btn-primary\" shape=\"round\" color=\"primary\"  [disabled]=\"registerForm.invalid\"\n          (click)=\"registerparent()\">{{'reg_parent.reg_btn' | translate}}</ion-button>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>\n ");

/***/ }),

/***/ "xoRU":
/*!***********************************************************!*\
  !*** ./src/app/parent-register/parent-register.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-parent-register:host ion-list {\n  padding: 12px;\n}\napp-parent-register:host .background-input {\n  --background: #ececec;\n  margin: 10px 0;\n}\napp-parent-register:host ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhcmVudC1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDSyxhQUFBO0FBQU47QUFFSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBRUk7RUFDQyxXQUFBO0FBQUwiLCJmaWxlIjoicGFyZW50LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1wYXJlbnQtcmVnaXN0ZXI6aG9zdCB7XHJcblx0aW9uLWxpc3R7XHJcblx0XHQgICAgcGFkZGluZzogMTJweDtcclxuXHR9XHJcbiAgICAuYmFja2dyb3VuZC1pbnB1dHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgXHR3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=parent-register-parent-register-module-es2015.js.map
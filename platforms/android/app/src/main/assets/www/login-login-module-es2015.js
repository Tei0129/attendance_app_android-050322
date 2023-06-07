(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/database/database.service */ "HbOQ");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/loader/loader.component */ "vPOg");










//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';


//import { DatabaseProvider } from '../../providers/database/database';


let LoginPage = class LoginPage {
    /**
     *
     * @param navCtrl Use for navigation between pages
     * @param device device native wrapper to get the information about device
     * @param authProvider Use for authentication purpose
     * @param dataProvider Use for getting data from the API
     * @param platform Platform object
     * @param fcm Firebase object to get the FCM token
     * @param events events object to handle the events in the app
     * @param translate for translation
     */
    constructor(navCtrl, device, authProvider, dataProvider, platform, fcm, translate, route, popoverController, zone, router, dbProvider) {
        this.navCtrl = navCtrl;
        this.device = device;
        this.authProvider = authProvider;
        this.dataProvider = dataProvider;
        this.platform = platform;
        this.fcm = fcm;
        this.translate = translate;
        this.route = route;
        this.popoverController = popoverController;
        this.zone = zone;
        this.router = router;
        this.dbProvider = dbProvider;
        this.bottomAds = [];
        this.loggedinUser = [];
        this.user = {};
        this.rememberMe = false;
        this.slideOptions = {
            initialSlide: 0,
            autoplay: true,
            speed: 1000,
        };
        this.viewPass = false;
        this.inputType = 'password';
        this.dissmissPopOver();
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    openRegister() {
        this.router.navigate(['school-registration'], { replaceUrl: false });
    }
    ionViewWillEnter() {
        this.dbProvider.createTable();
        if (localStorage.getItem("usercredentials")) {
            let credentials = JSON.parse(localStorage.getItem("usercredentials"));
            this.user.email_id = credentials.email_id;
            this.user.password = credentials.password;
            this.rememberMe = credentials.rememberMe;
        }
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
        this.dataProvider.getAds().then((response) => {
            if (response && response.ads) {
                let ads = response.ads;
                if (ads.length > 0 && ads.left.medias && ads.left.medias.length > 0) {
                    this.topLeftAd = ads.left.medias[0].url;
                    this.topRightAd = ads.right.medias[0].url;
                    this.bottomAds = ads.bottom.medias;
                }
                else {
                    this.dissmissPopOver();
                }
            }
        });
    }
    /**
     * Login function to check the authentication
  
     */
    togglePass() {
        this.viewPass = !this.viewPass;
        if (this.viewPass) {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    }
    loginOldUser(oldUser) {
        this.user.email_id = oldUser.email_id;
        this.user.password = oldUser.password;
        this.login();
    }
    login() {
        console.log('logindata', this.user);
        if (this.rememberMe) {
            localStorage.setItem("usercredentials", JSON.stringify({
                email_id: this.user.email_id,
                password: this.user.password,
                rememberMe: this.rememberMe
            }));
        }
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
    forgotPassword() {
        let email;
        if (this.user) {
            email = this.user.email_id;
        }
        const navigation = {
            state: { email: email }
        };
        this.zone.run(() => {
            this.router.navigate(['forgot-password'], navigation);
        });
    }
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle',
            });
            // return this.popOver.present();
            yield this.popOver.present();
        });
    }
    dissmissPopOver() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
            // await this.popOver.dismiss();
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'login.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <form #loginform='ngForm'>\n  <div class=\"top-ads-banner\">\n    <div class=\"ad-sec\" [ngStyle]=\"{'background-image': 'url('+topLeftAd+')'}\"></div>\n    <div class=\"ad-sec\" [ngStyle]=\"{'background-image': 'url('+topRightAd+')'}\"></div>\n  </div>\n<!--   <div class=\"earlyLogin\" *ngIf=\"loggedinUser.length>0\">\n    <ion-item *ngFor=\"let oldUser of loggedinUser\" (click)=\"loginOldUser(oldUser)\">\n      <ion-label>\n        Login as {{oldUser.email_id}}\n      </ion-label>\n    </ion-item>\n  </div> -->\n  <div class=\"login-sec\">\n    <ion-list >\n      <ion-item >\n        <ion-icon slot=\"end\"  name=\"\"></ion-icon>\n        <ion-input type=\"text\" placeholder=\"{{'login.username' | translate}}\" #username='ngModel' name=\"name\" [(ngModel)]=\"user.email_id\" class=\"centerInput\" required ></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-icon slot=\"end\" (click)=\"togglePass()\" *ngIf=\"!viewPass\" name=\"eye\"></ion-icon>\n        <ion-icon slot=\"end\" (click)=\"togglePass()\" *ngIf=\"viewPass\" name=\"eye-off\"></ion-icon>\n        \n        <ion-input  [type]=\"inputType\" placeholder=\"{{'login.password' | translate}}\" #password='ngModel' name=\"pass\" [(ngModel)]=\"user.password\" class=\"centerInput\"\n          required ></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class=\"remember-me\" no-lines text-center>\n      <ion-checkbox [(ngModel)] = \"rememberMe\" name=\"rememberme\"></ion-checkbox>\n      <span>{{'login.remember_me' | translate}}</span>\n      <span class=\"fogotPassword\" (click)=\"forgotPassword()\">{{'login.forgot' | translate}}</span>\n    </div>\n    <ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"login()\">{{'login.login_btn' | translate}}</ion-button>\n    <div class=\"divider-section\">\n      <div class=\"diamond-box\">\n        <span class=\"or-text\">{{'login.or' | translate}}</span>\n      </div>\n    </div>\n    <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" fill=\"outline\" color=\"secondary\" (click)=\"openRegister()\">{{'login.register_school' | translate}}</ion-button>\n  </div>\n  <div class=\"bottom-slider\">\n    <ion-slides [options]=\"slideOptions\"  *ngIf=\"bottomAds?.length > 0\" pager=\"true\">\n      <ion-slide *ngFor=\"let ad of bottomAds\">\n        <img [src]=\"ad.url\" />\n      </ion-slide>\n    </ion-slides>\n  </div>\n  </form>\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-login:host .input-cover {\n  display: none;\n}\napp-login:host .earlyLogin {\n  text-align: center;\n  margin: 0px auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\napp-login:host .earlyLogin ion-item {\n  text-align: center;\n  border: 1px solid #6db570;\n  --color: #3fbf45;\n  border-radius: 31px;\n  margin: 15px;\n}\napp-login:host ion-content {\n  --padding: 2px;\n}\napp-login:host ion-content .top-ads-banner {\n  width: 100%;\n  margin: 19px 0;\n  text-align: center;\n}\napp-login:host ion-content .top-ads-banner .ad-sec {\n  width: 48%;\n  height: 105px;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\napp-login:host ion-content .login-sec {\n  width: 90%;\n  margin: 0 auto;\n}\napp-login:host ion-content .login-sec ion-list {\n  border-radius: 20px;\n  overflow: hidden;\n}\napp-login:host ion-content .login-sec ion-input {\n  padding: 8px;\n}\napp-login:host ion-content .login-sec .text-input::-webkit-input-placeholder {\n  text-align: center;\n}\napp-login:host ion-content .login-sec .text-input:-moz-placeholder {\n  text-align: center;\n}\napp-login:host ion-content .login-sec .text-input::-moz-placeholder {\n  text-align: center;\n}\napp-login:host ion-content .login-sec .text-input:-ms-input-placeholder {\n  text-align: center;\n}\napp-login:host ion-content .login-sec .remember-me {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  padding: 22px 0;\n}\napp-login:host ion-content .login-sec .remember-me span {\n  margin-right: 13px;\n  font-size: 13px;\n}\napp-login:host ion-content .login-sec .remember-me .checkbox-inner {\n  position: absolute !important;\n  left: 9px !important;\n  height: 14px !important;\n  top: 4px !important;\n}\napp-login:host ion-content .login-sec .divider-section {\n  position: relative;\n  width: 100%;\n  border: 1px solid #ddd;\n  margin: 2.4em 0;\n}\napp-login:host ion-content .login-sec .divider-section .diamond-box {\n  position: absolute;\n  border: 1px solid #ddd;\n  top: -4px;\n  background: #fff;\n  transform: rotate(-316deg) translateX(-50%);\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n}\napp-login:host ion-content .login-sec .divider-section .diamond-box .or-text {\n  transform: rotate(318deg);\n  position: absolute;\n  font-size: 12px;\n}\napp-login:host ion-content .bottom-slider {\n  direction: ltr !important;\n}\napp-login:host .fogotPassword {\n  direction: ltr;\n  /* left: 2px; */\n  font-weight: 700;\n  color: #43a047;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUFSO0FBQ1E7RUFDUSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDaEI7QUFFSTtFQUNJLGNBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBRWhCO0FBQ1E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBRWhCO0FBQVk7RUFDSSxZQUFBO0FBRWhCO0FBQVk7RUFDSSxrQkFBQTtBQUVoQjtBQUNjO0VBQ0Usa0JBQUE7QUFDaEI7QUFFYztFQUNFLGtCQUFBO0FBQWhCO0FBR2M7RUFDRSxrQkFBQTtBQURoQjtBQUdZO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBRGhCO0FBRWdCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQXBCO0FBRWdCO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBcEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURoQjtBQUVnQjtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQXBCO0FBQ29CO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDeEI7QUFJUTtFQUNJLHlCQUFBO0FBRlo7QUFLSTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUpSIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1sb2dpbjpob3N0IHtcclxuICAgIC5pbnB1dC1jb3ZlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5lYXJseUxvZ2lue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZGI1NzA7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiAjM2ZiZjQ1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICAtLXBhZGRpbmc6IDJweDtcclxuICAgICAgICAudG9wLWFkcy1iYW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxOXB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLmFkLXNlYyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLXNlYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBpb24tbGlzdHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAudGV4dC1pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnRleHQtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAudGV4dC1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIycHggMDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2hlY2tib3gtaW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGl2aWRlci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMi40ZW0gMDtcclxuICAgICAgICAgICAgICAgIC5kaWFtb25kLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNmRlZykgdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAub3ItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxOGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm90dG9tLXNsaWRlciB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbHRyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvZ290UGFzc3dvcmR7XHJcbiAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgIC8qIGxlZnQ6IDJweDsgKi9cclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjNDNhMDQ3O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map
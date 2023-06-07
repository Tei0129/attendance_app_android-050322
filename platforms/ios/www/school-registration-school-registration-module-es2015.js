(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-registration-school-registration-module"],{

/***/ "30KU":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/school-registration/school-registration.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"right-direction\" mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" class=\"back-btn\">\n     <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-right>{{'reg_school.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding mode=\"md\">\n  <form #registerForm='ngForm'>\n    <ion-list style=\"background: unset;\">\n      <div class=\"image-column\">\n          <img [src]=\"school_logo\" class=\"profilepicture\">\n        <div class=\"add-image-icon\" (click)=\"takePicture('schoollogo')\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.school_name' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"schoolName\" #schoolName='ngModel' [(ngModel)]=\"school.schoolName\" text-right\n          required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"schoolName.invalid && (schoolName.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"schoolName.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.school_details' | translate}}</ion-label>\n        <ion-textarea name=\"schoolDetails\" #schoolDetails='ngModel' [(ngModel)]=\"school.schoolDetails\" text-right\n          required>\n        </ion-textarea>\n      </ion-item>\n      <div *ngIf=\"schoolDetails.invalid && (schoolDetails.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"schoolDetails.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n        <ion-item class=\"background-input\" align-items-center>\n          <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.password' | translate}}</ion-label>\n          <ion-input type=\"password\" name=\"password\" #password='ngModel' [(ngModel)]=\"school.password\" text-right\n            required>\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"password.invalid && (password.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.required\">\n            {{'validations.required' | translate}}\n          </div>\n        </div>\n        <ion-item class=\"background-input\" align-items-center>\n          <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.username' | translate}}</ion-label>\n          <ion-input type=\"text\" name=\"username\" #username='ngModel' [(ngModel)]=\"school.username\" pattern=\"[A-Za-z0-9_-]*$\" text-right required>\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"username.invalid && (username.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"username.errors.required\">\n            {{'validations.required' | translate}}\n          </div>\n          <div *ngIf=\"username.errors.pattern\">\n            {{'validations.invalidusername' | translate}}\n          </div>\n        </div>\n     \n     \n        <ion-item class=\"background-input\" align-items-center>\n          <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.contact' | translate}}</ion-label>\n          <ion-input type=\"text\" name=\"contact\" #contact='ngModel' [(ngModel)]=\"school.contact\" text-right required>\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"contact.invalid && (contact.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"contact.errors.required\">\n            {{'validations.required' | translate}}\n          </div>\n        </div>\n        <ion-item class=\"background-input\" align-items-center>\n          <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.email' | translate}}</ion-label>\n          <ion-input type=\"email\" name=\"email\" #email='ngModel' pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n            [(ngModel)]=\"school.email\" text-right required>\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"email.invalid && (email.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"email.errors.required\">\n            {{'validations.required' | translate}}\n          </div>\n          <div *ngIf=\"email.errors.pattern\">\n            {{'validations.invalidemail' | translate}}\n          </div>\n        </div>\n        <ion-item class=\"background-input\" align-items-center>\n          <ion-label color=\"dark\" position=\"stacked\">{{'reg_school.country' | translate}}</ion-label>\n          <ion-input type=\"text\" name=\"country\" #country='ngModel' [(ngModel)]=\"countryName\" text-right required readonly=\"true\">\n          </ion-input>\n        </ion-item>\n        <!-- <ion-item class=\"background-input\" align-items-center>\n          <ion-label color=\"dark\">{{'reg_school.delay_rule' | translate}}</ion-label>\n          <ion-select name=\"delayRule\" #delayRule='ngModel' [(ngModel)]=\"school.delayRule\" interface=\"popover\">\n              <ion-select-option *ngFor = \"let delay of getDelayRule();let i = index;\" [value] = \"(i+1)\">{{i+1}}</ion-select-option>\n          </ion-select>\n        </ion-item> -->\n\n   <!--    <ion-row class=\"right-direction background-input\" margin-top>\n        <ion-col size=\"10\" align-self-center text-left padding>\n          <h5 no-margin>{{'reg_school.picture' | translate}}</h5>\n        </ion-col>\n        <ion-col size=\"2\" align-self-center>\n          <ion-button  small icon-only clear color=\"dark\" (click)=\"takePicture('schoolimage')\">\n            <ion-icon name=\"attach\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"school.school_image != '' && school.school_image != undefined\">\n          <div class=\"image-sec\" [ngStyle]=\"{'background-image': 'url('+school_image+')'}\">\n          </div>\n        </ion-col>\n      </ion-row> -->\n      <ion-row padding>\n        <ion-button    expand=\"full\" class=\"btn-primary\" shape=\"round\" [disabled]=\"registerForm.invalid\"\n          (click)=\"registerSchool()\"><ion-spinner name=\"crescent\"></ion-spinner> {{'reg_school.register_btn' | translate}}</ion-button>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content> ");

/***/ }),

/***/ "AVMY":
/*!*******************************************************************!*\
  !*** ./src/app/school-registration/school-registration.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-school-registration:host ion-toolbar {\n  text-align: right;\n}\napp-school-registration:host ion-content {\n  --background: #fafafa;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\napp-school-registration:host .image-column {\n  text-align: center;\n}\napp-school-registration:host .image-column .profilepicture {\n  margin: 15px 0;\n  border-radius: 50%;\n  height: 100px;\n}\napp-school-registration:host .image-sec {\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover;\n}\napp-school-registration:host .add-image-icon {\n  position: absolute;\n  top: 105px;\n  left: 56%;\n  background: #fff;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\napp-school-registration:host .add-image-icon ion-icon {\n  color: green;\n  font-size: 25px;\n}\napp-school-registration:host .background-input {\n  background-color: #ececec;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjaG9vbC1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUFBUjtBQUVJO0VBQ0kscUJBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFDUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDWjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ1o7QUFLSTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtBQUpSIiwiZmlsZSI6InNjaG9vbC1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXNjaG9vbC1yZWdpc3RyYXRpb246aG9zdCB7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWNvbHVtbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnByb2ZpbGVwaWN0dXJle1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gIC5pbWFnZS1zZWMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSBcclxuICAgIC5hZGQtaW1hZ2UtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTA1cHg7XHJcbiAgICAgICAgbGVmdDogNTYlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbjo6YmVmb3Jle1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5kLWlucHV0e1xyXG4gICAgICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9IFxyXG59Il19 */");

/***/ }),

/***/ "eLfT":
/*!*****************************************************************!*\
  !*** ./src/app/school-registration/school-registration.page.ts ***!
  \*****************************************************************/
/*! exports provided: SchoolRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolRegistrationPage", function() { return SchoolRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_school_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./school-registration.page.html */ "30KU");
/* harmony import */ var _school_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./school-registration.page.scss */ "AVMY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _service_location_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/location/location.service */ "9XNo");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/geo-service/geo-service */ "G+rw");












let SchoolRegistrationPage = class SchoolRegistrationPage {
    constructor(navCtrl, camera, alertCtrl, translate, geo, dataProvider, authProvider, locationSrevice, router) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.geo = geo;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.locationSrevice = locationSrevice;
        this.router = router;
        this.school = {};
        this.school_logo = './assets/imgs/logo.png';
        this.school_image = '';
        this.lang = {};
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getLocation();
    }
    getDelayRule() {
        return Array(20);
    }
    getLocation() {
        console.log('call');
        // this.locationSrevice.checkGPSPermission(resp=>{
        //   this.location=resp;
        //   console.log('page',this.location);
        //   this.countryName=resp.countryName;
        //   this.countryCode=resp.countryCode;
        // },e=>{
        //   console.log(e);
        // })
        this.geo.getMyLocation().then(resp => {
            console.log(resp.countrycode);
            if (resp != '') {
                this.location = resp;
                console.log('page', this.location);
                this.countryName = resp.countryname;
                this.countryCode = resp.countrycode;
            }
            else {
                console.log(resp);
            }
        });
    }
    /**
     * alert to show image take choice
     */
    takePicture(imageType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.image_option,
                buttons: [
                    {
                        text: this.lang.camera,
                        handler: () => {
                            this.openCamera(imageType);
                        }
                    },
                    {
                        text: this.lang.gallery,
                        handler: () => {
                            this.openGallery(imageType);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    /**
     * mobile camera to take image
     */
    openCamera(imageType) {
        let options = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                if (imageType == 'schoollogo') {
                    this.school.school_logo = 'data:image/png;base64,' + imageData;
                    this.school_logo = 'data:image/png;base64,' + imageData;
                }
                else {
                    this.school.school_image = 'data:image/png;base64,' + imageData;
                    this.school_image = 'data:image/png;base64,' + imageData;
                }
            }
        });
    }
    /**
     * Open gallery to take image
     */
    openGallery(imageType) {
        let options = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetHeight: 500,
            targetWidth: 500
        };
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                if (imageType == 'schoollogo') {
                    this.school.school_logo = 'data:image/png;base64,' + imageData;
                    this.school_logo = 'data:image/png;base64,' + imageData;
                }
                else {
                    this.school.school_image = 'data:image/png;base64,' + imageData;
                    this.school_image = 'data:image/png;base64,' + imageData;
                }
            }
        });
    }
    /**
     * Register school
     */
    registerSchool() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataProvider.showLoading();
            this.school.country_code = this.countryCode;
            this.authProvider.registerSchool(this.school).then((response) => {
                this.dataProvider.hideLoading();
                this.presentAlert(response);
            }).catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(err);
            });
        });
    }
    presentAlert(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.dataProvider.alertCtrl.create({
                header: "Message",
                message: response,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.navCtrl.pop();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
SchoolRegistrationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_11__["GeoServiceProvider"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_location_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
SchoolRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-school-registration',
        template: _raw_loader_school_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_school_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_11__["GeoServiceProvider"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _service_location_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], SchoolRegistrationPage);



/***/ }),

/***/ "v2GW":
/*!*******************************************************************!*\
  !*** ./src/app/school-registration/school-registration.module.ts ***!
  \*******************************************************************/
/*! exports provided: SchoolRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolRegistrationPageModule", function() { return SchoolRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _school_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school-registration-routing.module */ "x47w");
/* harmony import */ var _school_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school-registration.page */ "eLfT");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let SchoolRegistrationPageModule = class SchoolRegistrationPageModule {
};
SchoolRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _school_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchoolRegistrationPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_school_registration_page__WEBPACK_IMPORTED_MODULE_6__["SchoolRegistrationPage"]]
    })
], SchoolRegistrationPageModule);



/***/ }),

/***/ "x47w":
/*!***************************************************************************!*\
  !*** ./src/app/school-registration/school-registration-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SchoolRegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolRegistrationPageRoutingModule", function() { return SchoolRegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _school_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-registration.page */ "eLfT");




const routes = [
    {
        path: '',
        component: _school_registration_page__WEBPACK_IMPORTED_MODULE_3__["SchoolRegistrationPage"]
    }
];
let SchoolRegistrationPageRoutingModule = class SchoolRegistrationPageRoutingModule {
};
SchoolRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SchoolRegistrationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=school-registration-school-registration-module-es2015.js.map
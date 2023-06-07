(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/AaM":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database/database.service */ "HbOQ");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loader/loader.component */ "vPOg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");



//import { LoginModel } from '../../model/login.model';

//import { Events } from 'ionic-angular';







let AuthService = class AuthService {
    /**
      * Represents a Auth provider from API.
      * @constructor
      * @param {Http} http - for making http request.
      * @param {Events} events - events for the app
    */
    constructor(http, network, platform, dbProvider, popoverController, router, storage) {
        this.http = http;
        this.network = network;
        this.platform = platform;
        this.dbProvider = dbProvider;
        this.popoverController = popoverController;
        this.router = router;
        this.storage = storage;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventChangeUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * Login function from the API
     * @param user: Object of LoginModel
     */
    changeUser(peram) {
        let em = { "changeUser": peram };
        this.event.emit(em);
    }
    publishEvent(peram) {
        let em = { "loggedin": peram };
        this.event.emit(em);
    }
    piblisEvenetActiveLink(param) {
        let em = { "activeLink": param };
        this.event.emit(em);
    }
    deleteNote(param) {
        let em = { "deleteNote": param };
        this.event.emit(em);
    }
    doLogin(user) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    user['lang_code'] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].lang_code;
                    let body = this.makeObjectToUrlParams(user);
                    header.append('Content-Type', 'application/json');
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + 'login', body, { headers: header }).subscribe((response) => {
                        let resObj = response;
                        if (resObj.success) {
                            localStorage.setItem("userloggedin", JSON.stringify(resObj));
                            resolve(resObj);
                        }
                        else {
                            reject(resObj.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                        }
                    });
                }
                else {
                    reject("الرجاء التأكد من اتصالك بالانترنت");
                }
            });
        });
    }
    /**
     * Register School
     * @param school: school object to register
     */
    registerSchool(school) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    //school['lang_code'] = environment.lang_code;
                    let body = this.makeObjectToUrlParams(school);
                    headers.append('Content-Type', 'application/json');
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + 'schoolRegister', body, { headers }).subscribe((response) => {
                        let resObj = response;
                        if (resObj.success == true) {
                            resolve(resObj.msg);
                        }
                        else {
                            reject(resObj.msg);
                        }
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                        }
                    });
                }
                else {
                    reject("الرجاء التأكد من اتصالك بالانترنت");
                }
            });
        });
    }
    /**
     * Logout function
     * @param data - user_no, session_id
     */
    doLogout(data, option) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    let body = this.makeObjectToUrlParams(data);
                    header.append('Content-Type', 'application/json');
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + 'logout', body, { headers: header }).subscribe((response) => {
                        if (response.success) {
                            this.flushLocalStorage();
                            let em = { "loggedin": false };
                            this.event.emit(em);
                            this.publishEvent(false);
                            if (!option) {
                                let oldUser = JSON.parse(localStorage.getItem("earlyLogin"));
                                if (oldUser) {
                                    if (oldUser.length > 1) {
                                        reject(false);
                                        this.logInOtherAccount(data);
                                    }
                                    else {
                                        localStorage.removeItem("earlyLogin");
                                        resolve(true);
                                    }
                                }
                                else {
                                    localStorage.removeItem("earlyLogin");
                                    resolve(true);
                                }
                            }
                            else {
                                resolve(true);
                            }
                        }
                        else {
                            reject(response.json().msg);
                        }
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                        }
                    });
                }
                else {
                    reject("الرجاء التأكد من اتصالك بالانترنت");
                }
            });
        });
    }
    logInOtherAccount(data) {
        let ind;
        let loggedinUser;
        if (localStorage.getItem('earlyLogin')) {
            loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
            setTimeout(res => {
                console.log('here1', loggedinUser);
                for (let i = 0; i < loggedinUser.length; i++) {
                    if (loggedinUser[i].user_no == data.user_no) {
                        ind = i;
                        console.log('here', i);
                    }
                }
                loggedinUser.splice(ind, 1);
                localStorage.setItem("earlyLogin", JSON.stringify(loggedinUser));
                console.log('here2', loggedinUser);
                if (loggedinUser) {
                    if (loggedinUser.length > 0) {
                        this.logInOldUser(loggedinUser[0]);
                    }
                    else {
                        this.router.navigate(['login']);
                    }
                }
                else {
                    this.router.navigate(['login']);
                }
            }, 400);
        }
    }
    logInOldUser(users) {
        console.log('next', users);
        this.presentPopover('');
        this.doLogin(users).then((response) => {
            console.log('res', response);
            this.publishEvent(true);
            this.changeUser(true);
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
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle',
            });
            yield popOver.present();
            setTimeout(res => {
                popOver.dismiss();
            }, 2000);
        });
    }
    /** Function to convert object into param string
      * @param {Object} data - contains the properties to post to API
      * @returns Param string
    */
    makeObjectToUrlParams(data) {
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            body = body.append(key, data[key]);
        });
        //let body: HttpParams = new HttpParams();
        // Object.keys(data).map((key) => {
        // 	console.log(key);
        //   body.set(key, data[key]);
        // })
        console.log(body);
        return body;
    }
    /**
     * Clear the localstorage
     */
    flushLocalStorage() {
        localStorage.removeItem("userloggedin");
        this.dbProvider.deleteDataBase();
        localStorage.removeItem("attendance");
        this.storage.clear();
    }
    /**
     * Check whether network is available or not
     */
    getNetworkInformation() {
        return new Promise((resolve) => {
            if (this.platform.is('cordova')) {
                if (this.network.type == this.network.Connection.UNKNOWN || this.network.type == this.network.Connection.NONE) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            }
            else {
                resolve(true);
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], AuthService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kamranfaiz/Downloads/attendance-app/attendance_app_android-050322/src/main.ts */"zUnb");


/***/ }),

/***/ "0165":
/*!******************************************************!*\
  !*** ./src/app/service/document/document.service.ts ***!
  \******************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");



let DocumentService = class DocumentService {
    constructor(iab) {
        this.iab = iab;
    }
    openPdf__OLD(path) {
        //use some really slow page for testing
        //if you have a spinner.html, you can load that instead of path here in inappbrowser, but make sure it works in all devices.
        var ref = this.iab.create(path, '_blank');
        //spinner html
        var spinner = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,height=device-height,initial-scale=1'><style>.loader {position: absolute;    margin-left: -2em;    left: 50%;    top: 50%;    margin-top: -2em;    border: 5px solid #f3f3f3;    border-radius: 50%;    border-top: 5px solid #3498db;    width: 50px;    height: 50px;    -webkit-animation: spin 1.5s linear infinite;    animation: spin 1.5s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform:rotate(360deg); }}</style></head><body><div class='loader'></div></body></html>";
        //intended webpage is loaded here (facebook)
        ref.executeScript({ code: "(function() {document.write(\"" + spinner + "\");window.location.href='" + path + "';})()" });
    }
    openPdf(url, isFile) {
        console.log('calling openPdf :::', url);
        //	url="https://ionicframework.com/docs/native/in-app-browser";
        if (isFile) {
            url = url + '.pdf';
        }
        window.open(url, '_system');
        //  	this.winRef = (<any>window).open(url,'_blank','location=yes,hidden=no,enableViewportScale=yes,toolbar=no,hardwareback=yes');
        //  	// this.winRef.insertCSS({ code: ".loader {position: absolute;    margin-left: -2em;    left: 50%;    top: 50%;    margin-top: -2em;    border: 5px solid #f3f3f3;    border-radius: 50%;    border-top: 5px solid #3498db;    width: 50px;    height: 50px;    -webkit-animation: spin 1.5s linear infinite;    animation: spin 1.5s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform:rotate(360deg); }}" });
        //  	// this.winRef.executeScript({ code: "(function() {document.body.classList.add('loader');})()"});
        //  	let spinner ="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,height=device-height,initial-scale=1'><style>.loader {position: absolute;    margin-left: -2em;    left: 50%;    top: 50%;    margin-top: -2em;    border: 5px solid #f3f3f3;    border-radius: 50%;    border-top: 5px solid #3498db;    width: 50px;    height: 50px;    -webkit-animation: spin 1.5s linear infinite;    animation: spin 1.5s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform:rotate(360deg); }}</style></head><body><div class='loader'></div></body></html>";
        // //intended webpage is loaded here (facebook)
        // this.winRef.executeScript({code: "(function() {document.write(\""+spinner+"\");})()"});
        //  	this.winRef.addEventListener('loadstart', ()=>{
        //  	//	alert('calling load start');
        //  	}); 
        //    this.winRef.addEventListener('loadstop', ()=>{
        //    //	alert('calling load stop');
        // this.winRef.executeScript({code: "(function() {document.remove(\""+spinner+"\");window.location.href='"+url+"';})()"});
        //    	this.winRef.executeScript({ code: "(function() {document.body.classList.remove('loader');})()"});
        //    }); 
        //    this.winRef.addEventListener('loaderror', (e:any)=>{
        //    	alert('calling loaderror');
        //    }); 
    }
};
DocumentService.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] }
];
DocumentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
], DocumentService);



/***/ }),

/***/ "04TA":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-student-profile/edit-student-profile.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n\t<ion-icon class=\"edit-icon\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n\t<ion-row class=\"input-row\">\n\t\t<ion-item class=\"item\">\n\t\t\t<ion-label>{{'edit_student.name' | translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" placeholder=\"{{studentName}}\" value=\"{{studentName}}\" id=\"input\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item class=\"item\">\n\t\t\t<ion-label>{{'edit_student.class' | translate}}</ion-label>\n\t\t\t<ion-select placeholder=\"{{student.course_name}}\" value=\"{{studentSemester}}\" id=\"select\" interface=\"popover\">\n\t\t\t\t<ion-select-option *ngFor=\"let c of classes\" value={{c.cid}}>{{c.name}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t</ion-row>\n\n\t<ion-row class=\"btn-row\">\n\t\t<ion-col>\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"saveChanges()\">{{'edit_student.save' | translate}}</ion-button>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\" (click)=\"deleteClass()\">{{'edit_student.delete_class' | translate}}</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n\t\n</div>\n");

/***/ }),

/***/ "1Ee9":
/*!*****************************************************************!*\
  !*** ./src/app/connect-new-message/connect-new-message.page.ts ***!
  \*****************************************************************/
/*! exports provided: ConnectNewMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectNewMessagePage", function() { return ConnectNewMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_connect_new_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./connect-new-message.page.html */ "zdC0");
/* harmony import */ var _connect_new_message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect-new-message.page.scss */ "sdmF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let ConnectNewMessagePage = class ConnectNewMessagePage {
    /**
     * Class list constructor
     * @param navCtrl Use for navigation between pages
     * @param app   Root app
     * @param dataProvider  Use for getting data from the API
     * @param authProvider  Use for authentication purpose
     * @param viewCtrl View controller
     */
    constructor(navCtrl, viewCtrl, dataProvider, authProvider, translate, camera, alertCtrl, router) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.translate = translate;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userDetails = {};
        this.message = {
            title: '',
            message: '',
            ticketImage: ''
        };
        this.ticketImage = '';
        this.lang = {};
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    ionViewWillEnter() {
        this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
    }
    /**
     * For dismissing the modal
     */
    dismiss() {
        this.viewCtrl.dismiss();
    }
    /**
     * Send message to provider
     */
    sendMessage() {
        if (this.message.title.length > 35) {
            this.dataProvider.showToast(this.lang.max_title);
        }
        else if (this.message.message.length > 140) {
            this.dataProvider.showToast(this.lang.max_body);
        }
        else {
            this.dataProvider.showLoading();
            let data = {
                user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id,
                session_id: this.userDetails.session_id,
                message: this.message
            };
            this.dataProvider.createParentConnectChat(data).then((response) => {
                this.dataProvider.hideLoading();
                if (response.session) {
                    this.dataProvider.showToast(response.message);
                    this.viewCtrl.dismiss(true);
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    // this.app.getRootNav().setRoot("LoginPage");
                    this.viewCtrl.dismiss(true);
                    this.router.navigate(['login'], { replaceUrl: true });
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
    }
    /**
     * alert to show image take choice
     */
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.image_option,
                buttons: [
                    {
                        text: this.lang.camera,
                        handler: () => {
                            this.openCamera();
                        }
                    },
                    {
                        text: this.lang.gallery,
                        handler: () => {
                            this.openGallery();
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
    openCamera() {
        let options = {
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
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                this.message.ticketImage = "data:image/png;base64," + imageData;
                this.ticketImage = "data:image/png;base64," + imageData;
            }
        });
    }
    /**
     * Open gallery to take image
     */
    openGallery() {
        let options = {
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
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                this.message.ticketImage = "data:image/png;base64," + imageData;
                this.ticketImage = "data:image/png;base64," + imageData;
            }
        });
    }
    ngOnInit() {
    }
};
ConnectNewMessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
ConnectNewMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-connect-new-message',
        template: _raw_loader_connect_new_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_connect_new_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], ConnectNewMessagePage);



/***/ }),

/***/ "4tkT":
/*!***************************************************************************!*\
  !*** ./src/app/connect-new-message/connect-new-message-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConnectNewMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectNewMessagePageRoutingModule", function() { return ConnectNewMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connect_new_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect-new-message.page */ "1Ee9");




const routes = [
    {
        path: '',
        component: _connect_new_message_page__WEBPACK_IMPORTED_MODULE_3__["ConnectNewMessagePage"]
    }
];
let ConnectNewMessagePageRoutingModule = class ConnectNewMessagePageRoutingModule {
};
ConnectNewMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnectNewMessagePageRoutingModule);



/***/ }),

/***/ "9XNo":
/*!******************************************************!*\
  !*** ./src/app/service/location/location.service.ts ***!
  \******************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");


//import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';


let LocationService = class LocationService {
    //Geocoder configuration
    // geoencoderOptions: NativeGeocoderOptions = {
    //   useLocale: true,
    //   maxResults: 5
    // };
    constructor(
    //  private geolocation: Geolocation,
    // private nativeGeocoder: NativeGeocoder,
    androidPermissions, locationAccuracy) {
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
    }
    checkGPSPermission(callback, e) {
        // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
        //   result => {
        //     if (result.hasPermission) {
        //
        //       //If having permission show 'Turn On GPS' dialogue
        //       this.askToTurnOnGPS(res=>{
        //             callback(res);
        //           },err=>{
        //             e(err);
        //           });
        //     } else {
        //
        //       //If not having permission ask for permission
        //       this.requestGPSPermission(res=>{
        //             callback(res);
        //           },err=>{
        //             e(err);
        //           });
        //     }
        //   },
        //   err => {
        //     e(err);
        //     alert(err);
        //   }
        // );
    }
    requestGPSPermission(callback, e) {
        // this.locationAccuracy.canRequest().then((canRequest: boolean) => {
        //   if (canRequest) {
        //     console.log("4");
        //     this.getGeolocation(res=>{
        //       callback(res);
        //     },err=>{
        //       e(err);
        //     })
        //   } else {
        //     //Show 'GPS Permission Request' dialogue
        //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        //       .then(
        //         () => {
        //           // call method to turn on GPS
        //           this.askToTurnOnGPS(res=>{
        //             callback(res);
        //           },err=>{
        //             e(err);
        //           });
        //         },
        //         error => {
        //           //Show alert if user click on 'No Thanks'
        //           e(error);
        //           alert('requestPermission Error requesting location permissions ' + error)
        //         }
        //       );
        //   }
        // });
    }
    askToTurnOnGPS(callback, e) {
        // this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        //   () => {
        //     // When GPS Turned ON call method to get Accurate location coordinates
        //     this.getGeolocation(res=>{
        //       callback(res);
        //     },err=>{
        //       e(err);
        //     })
        //   },
        //   error =>{
        //     e(error);
        //     alert('Error requesting location permissions ' + JSON.stringify(error))
        //   }
        // );
    }
    //Get current coordinates of device
    getGeolocation(callback, e) {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   console.log(resp);
        //   this.latitude = resp.coords.latitude;
        //   this.longitude = resp.coords.longitude;
        //   this.accuracy = resp.coords.accuracy;
        //
        //   this.getGeoencoder(resp.coords.latitude, resp.coords.longitude,resp=>{
        //   	console.log(resp);
        //   	callback(resp);
        //   },error=>{
        //   	e(error);
        //   });
        //
        // }).catch((error) => {
        // 	e(error);
        //  // alert('Error getting location' + JSON.stringify(error));
        // });
    }
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude, longitude, callback, e) {
        // this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
        //   .then((result: NativeGeocoderResult[]) => {
        //     console.log(result);
        //     this.address = this.generateAddress(result[0]);
        //     callback(result[0]);
        //   })
        //   .catch((error: any) => {
        //   	e(error);
        //   //  alert('Error getting location' + JSON.stringify(error));
        //   });
    }
    //Return Comma saperated address
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
};
LocationService.ctorParameters = () => [
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__["LocationAccuracy"] }
];
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"],
        _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__["LocationAccuracy"]])
], LocationService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.  
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // serverURL: "http://192.168.1.20/att-admin/app_service_new/", 
    // serverURL: "https://webapp.ws/Att-App/cpanel/app_service_new/",
    serverURL: "https://basmapp.com/Att-App/app_service_new/",
    lang_code: 'en'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CGfp":
/*!*******************************************************!*\
  !*** ./src/app/pipes/date-format/date-format.pipe.ts ***!
  \*******************************************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DateFormatPipe = class DateFormatPipe {
    constructor() {
        this.DATE_FMT = "yy MM dd";
        this.monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dayNames = ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    }
    transform(value, ...args) {
        let date = new Date(value);
        let year = date.getFullYear().toString();
        let formatedDate = year.slice(2, 4) + ' ' + this.monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + this.dayNames[date.getDay()];
        return formatedDate;
    }
};
DateFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateFormat',
    })
], DateFormatPipe);



/***/ }),

/***/ "G+rw":
/*!****************************************************!*\
  !*** ./src/app/service/geo-service/geo-service.ts ***!
  \****************************************************/
/*! exports provided: GeoServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoServiceProvider", function() { return GeoServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




/**
 * GeoService manages users location and country
 */
let GeoServiceProvider = class GeoServiceProvider {
    /**
     * @ignore
     */
    constructor(http, translate) {
        this.http = http;
        this.translate = translate;
        this.countries = {
            "": "Worldwide",
            "AD": "أندورا",
            "AF": "أفغانستان",
            "AG": "أنتيغوا وباربودا",
            "AI": "أنجويلا",
            "AL": "ألبانيا",
            "AM": "أرمينيا",
            "AO": "أنجولا",
            "AQ": "المنطقة القطبية الجنوبية",
            "AR": "الأرجنتين",
            "AS": "ساموا-الأمريكي",
            "AT": "النمسا",
            "AU": "أستراليا",
            "AW": "أروبا",
            "AX": "جزر أولاند",
            "AZ": "أذربيجان",
            "BA": "البوسنة والهرسك",
            "BB": "باربادوس",
            "BD": "بنغلاديش",
            "BE": "بلجيكا",
            "BF": "بوركينا فاسو",
            "BG": "بلغاريا",
            "BH": "البحرين",
            "BI": "بوروندي",
            "BJ": "بنين",
            "BL": "سان بارتيلمي",
            "BM": "برمودا",
            "BN": "بروناي",
            "BO": "بوليفيا",
            "BQ": "الجزر الكاريبية الهولندية",
            "BR": "البرازيل",
            "BS": "باهاماس",
            "BT": "بوتان",
            "BV": "جزيرة بوفيه",
            "BW": "بوتسوانا",
            "BY": "بيلاروس",
            "BZ": "بيليز",
            "CA": "كندا",
            "CC": "جزر كوكس",
            "CD": "جمهورية الكونغو الديمقراطية",
            "CF": "جمهورية أفريقيا الوسطى",
            "CG": "جمهورية الكونغو",
            "CH": "سويسرا",
            "CI": "ساحل العاج",
            "CK": "جزر كوك",
            "CL": "تشيلي",
            "CM": "الكاميرون",
            "CN": "الصين",
            "CO": "كولومبيا",
            "CR": "كوستاريكا",
            "CU": "كوبا",
            "CV": "الرأس الأخضر",
            "CW": "كوراساو",
            "CX": "جزيرة عيد الميلاد",
            "CY": "قبرص",
            "CZ": "التشيك",
            "DE": "ألمانيا",
            "DJ": "جيبوتي",
            "DK": "الدنمارك",
            "DM": "دومينيكا",
            "DO": "جمهورية الدومينيكان",
            "DZ": "الجزائر",
            "EC": "الإكوادور",
            "EE": "إستونيا",
            "EG": "مصر",
            "ER": "إريتريا",
            "ES": "إسبانيا",
            "ET": "إثيوبيا",
            "FI": "فنلندا",
            "FJ": "فيجي",
            "FK": "جزر فوكلاند",
            "FM": "ولايات ميكرونيسيا المتحدة",
            "FO": "جزر فارو",
            "FR": "فرنسا",
            "GA": "الغابون",
            "GB": "المملكة المتحدة",
            "GD": "غرينادا",
            "GE": "جورجيا",
            "GF": "غينيا الفرنسية",
            "GG": "غيرنزي",
            "GH": "غانا",
            "GI": "جبل طارق",
            "GL": "جرينلاند",
            "GM": "غامبيا",
            "GN": "غينيا",
            "GP": "غوادلوب",
            "GQ": "غينيا الاستوائية",
            "GR": "اليونان",
            "GS": "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
            "GT": "غواتيمالا",
            "GU": "غوام",
            "GW": "غينيا بيساو",
            "GY": "غيانا",
            "HK": "هونغ كونغ",
            "HM": "جزيرة هيرد وجزر ماكدونالد",
            "HN": "هندوراس",
            "HR": "كرواتيا",
            "HT": "هايتي",
            "HU": "المجر",
            "ID": "إندونيسيا",
            "IE": "جمهورية أيرلندا",
            "IM": "جزيرة مان",
            "IN": "الهند",
            "IO": "إقليم المحيط الهندي البريطاني",
            "IR": "إيران",
            "IS": "أيسلندا",
            "IT": "إيطاليا",
            "IQ": "العراق",
            "JE": "جيرزي",
            "JM": "جامايكا",
            "JO": "الأردن",
            "JP": "اليابان",
            "KE": "كينيا",
            "KG": "قيرغيزستان",
            "KH": "كمبوديا",
            "KI": "كيريباتي",
            "KM": "جزر القمر",
            "KN": "سانت كيتس ونيفيس",
            "KP": "كوريا الشمالية",
            "KR": "كوريا الجنوبية",
            "KW": "الكويت",
            "KY": "جزر كايمان",
            "KZ": "كازاخستان",
            "LA": "لاوس",
            "LB": "لبنان",
            "LC": "سانت لوسيا",
            "LI": "ليختنشتاين",
            "LK": "سريلانكا",
            "LR": "ليبيريا",
            "LS": "ليسوتو",
            "LT": "ليتوانيا",
            "LU": "لوكسمبورغ",
            "LV": "لاتفيا",
            "LY": "ليبيا",
            "MA": "المغرب",
            "MC": "موناكو",
            "MD": "مولدافيا",
            "ME": "الجبل الأسود",
            "MF": "سانت مارتن الفرنسية",
            "MG": "مدغشقر",
            "MH": "جزر مارشال",
            "MK": "جمهورية مقدونيا",
            "ML": "مالي",
            "MM": "بورما",
            "MN": "منغوليا",
            "MO": "ماكاو",
            "MP": "جزر ماريانا الشمالية",
            "MQ": "مارتينيك",
            "MR": "موريتانيا",
            "MS": "مونتسرات",
            "MT": "مالطا",
            "MU": "موريشيوس",
            "MV": "جزر المالديف",
            "MW": "مالاوي",
            "MX": "المكسيك",
            "MY": "ماليزيا",
            "MZ": "موزمبيق",
            "NA": "ناميبيا",
            "NC": "كاليدونيا الجديدة",
            "NE": "النيجر",
            "NF": "جزيرة نورفولك",
            "NG": "نيجيريا",
            "NI": "نيكاراغوا",
            "NL": "هولندا",
            "NO": "النرويج",
            "NP": "نيبال",
            "NR": "ناورو",
            "NU": "نييوي",
            "NZ": "نيوزيلندا",
            "OM": "عمان",
            "PA": "بنما",
            "PE": "بيرو",
            "PF": "بولينيزيا الفرنسية",
            "PG": "بابوا غينيا الجديدة",
            "PH": "الفلبين",
            "PK": "باكستان",
            "PL": "بولندا",
            "PM": "سان بيير وميكلون",
            "PN": "جزر بيتكيرن",
            "PR": "بورتوريكو",
            "PS": "فلسطين",
            "PT": "البرتغال",
            "PW": "بالاو",
            "PY": "باراغواي",
            "QA": "قطر",
            "RE": "ريونيون",
            "RO": "رومانيا",
            "RS": "صربيا",
            "RU": "روسيا",
            "RW": "رواندا",
            "SA": "السعودية",
            "SB": "جزر سليمان",
            "SC": "سيشل",
            "SD": "السودان",
            "SE": "السويد",
            "SG": "سنغافورة",
            "SH": "سانت هيلينا وأسينشين وتريستان دا كونا",
            "SI": "سلوفينيا",
            "SJ": "سفالبارد ويان ماين",
            "SK": "سلوفاكيا",
            "SL": "سيراليون",
            "SM": "سان مارينو",
            "SN": "السنغال",
            "SO": "الصومال",
            "SR": "سورينام",
            "SS": "جنوب السودان",
            "ST": "ساو تومي وبرينسيب",
            "SV": "السلفادور",
            "SX": "سينت مارتن",
            "SY": "سوريا",
            "SZ": "سوازيلاند",
            "TC": "جزر توركس وكايكوس",
            "TD": "تشاد",
            "TF": "أراض فرنسية جنوبية وأنتارتيكية",
            "TG": "توغو",
            "TH": "تايلاند",
            "TJ": "طاجيكستان",
            "TK": "توكلو",
            "TL": "تيمور الشرقية",
            "TM": "تركمانستان",
            "TN": "تونس",
            "TO": "تونغا",
            "TR": "تركيا",
            "TT": "ترينيداد وتوباغو",
            "TV": "توفالو",
            "TW": "تايوان",
            "TZ": "تنزانيا",
            "UA": "أوكرانيا",
            "UG": "أوغندا",
            "UM": "جزر الولايات المتحدة الصغيرة النائية",
            "US": "الولايات المتحدة",
            "UY": "الأوروغواي",
            "UZ": "أوزبكستان",
            "VA": "الفاتيكان",
            "VC": "سانت فنسنت والجرينادين",
            "VE": "فنزويلا",
            "VG": "الجزر العذراء البريطانية",
            "VI": "جزر العذراء الأمريكية",
            "VN": "فيتنام",
            "VU": "فانواتو",
            "WF": "والس وفوتونا",
            "WS": "ساموا",
            "YE": "اليمن",
            "YT": "مايوت",
            "ZA": "جنوب أفريقيا",
            "ZM": "زامبيا",
            "ZW": "زيمبابوي"
        };
        this.phones = {
            'AF': '+93',
            'AL': '+355',
            'DZ': '+213',
            'AS': '+1684',
            'AD': '+376',
            'AO': '+244',
            'AI': '+1264',
            'AQ': '+672',
            'AG': '+1268',
            'AR': '+54',
            'AM': '+374',
            'AW': '+297',
            'AU': '+61',
            'AT': '+43',
            'AZ': '+994',
            'BS': '+1242',
            'BH': '+973',
            'BD': '+880',
            'BB': '+1246',
            'BY': '+375',
            'BE': '+32',
            'BZ': '+501',
            'BJ': '+229',
            'BM': '+1441',
            'BT': '+975',
            'BO': '+591',
            'BA': '+387',
            'BW': '+267',
            'BR': '+55',
            'BN': '+673',
            'BG': '+359',
            'BF': '+226',
            'BI': '+257',
            'KH': '+855',
            'CM': '+237',
            'CA': '+1',
            'CV': '+238',
            'KY': '+1345',
            'CF': '+236',
            'TD': '+235',
            'CL': '+56',
            'CN': '+86',
            'CX': '+53',
            'CC': '+61',
            'CO': '+57',
            'KM': '+269',
            'CD': '+243',
            'CG': '+242',
            'CK': '+682',
            'CR': '+506',
            'CI': '+225',
            'HR': '+385',
            'CU': '+53',
            'CY': '+357',
            'CZ': '+420',
            'DK': '+45',
            'DJ': '+253',
            'DM': '+1767',
            'DO': '+1809',
            'TP': '+670',
            'EC': '+593',
            'EG': '+20',
            'SV': '+503',
            'GQ': '+240',
            'ER': '+291',
            'EE': '+372',
            'ET': '+251',
            'FK': '+500',
            'FO': '+298',
            'FJ': '+679',
            'FI': '+358',
            'FR': '+33',
            'GF': '+594',
            'PF': '+689',
            'GA': '+241',
            'GM': '+220',
            'GE': '+995',
            'DE': '+49',
            'GH': '+233',
            'GI': '+350',
            'GR': '+30',
            'GL': '+299',
            'GD': '+1473',
            'GP': '+590',
            'GU': '+1671',
            'GT': '+502',
            'GN': '+224',
            'GW': '+245',
            'GY': '+592',
            'HT': '+509',
            'HN': '+504',
            'HK': '+852',
            'HU': '+36',
            'IS': '+354',
            'IN': '+91',
            'ID': '+62',
            'IR': '+98',
            'IQ': '+964',
            'IE': '+353',
            'IT': '+39',
            'JM': '+1876',
            'JP': '+81',
            'JO': '+962',
            'KZ': '+7',
            'KE': '+254',
            'KI': '+686',
            'KP': '+850',
            'KR': '+82',
            'KW': '+965',
            'KG': '+996',
            'LA': '+856',
            'LV': '+371',
            'LB': '+961',
            'LS': '+266',
            'LR': '+231',
            'LY': '+218',
            'LI': '+423',
            'LT': '+370',
            'LU': '+352',
            'MO': '+853',
            'MK': '+389',
            'MG': '+261',
            'MW': '+265',
            'MY': '+60',
            'MV': '+960',
            'ML': '+223',
            'MT': '+356',
            'MH': '+692',
            'MQ': '+596',
            'MR': '+222',
            'MU': '+230',
            'YT': '+269',
            'MX': '+52',
            'FM': '+691',
            'MD': '+373',
            'MC': '+377',
            'MN': '+976',
            'MS': '+1664',
            'MA': '+212',
            'MZ': '+258',
            'MM': '+95',
            'NA': '+264',
            'NR': '+674',
            'NP': '+977',
            'NL': '+31',
            'AN': '+599',
            'NC': '+687',
            'NZ': '+64',
            'NI': '+505',
            'NE': '+227',
            'NG': '+234',
            'NU': '+683',
            'NF': '+672',
            'MP': '+1670',
            'NO': '+47',
            'OM': '+968',
            'PK': '+92',
            'PW': '+680',
            'PS': '+970',
            'PA': '+507',
            'PG': '+675',
            'PY': '+595',
            'PE': '+51',
            'PH': '+63',
            'PL': '+48',
            'PT': '+351',
            'PR': '+1787',
            'QA': '+974',
            'RE': '+262',
            'RO': '+40',
            'RU': '+7',
            'RW': '+250',
            'SH': '+290',
            'KN': '+1869',
            'LC': '+1758',
            'PM': '+508',
            'VC': '+1784',
            'WS': '+685',
            'SM': '+378',
            'ST': '+239',
            'SA': '+966',
            'SN': '+221',
            'SC': '+248',
            'SL': '+232',
            'SG': '+65',
            'SK': '+421',
            'SI': '+386',
            'SB': '+677',
            'SO': '+252',
            'ZA': '+27',
            'ES': '+34',
            'LK': '+94',
            'SD': '+249',
            'SR': '+597',
            'SZ': '+268',
            'SE': '+46',
            'CH': '+41',
            'SY': '+963',
            'TW': '+886',
            'TJ': '+992',
            'TZ': '+255',
            'TH': '+66',
            'TK': '+690',
            'TO': '+676',
            'TT': '+1868',
            'TN': '+216',
            'TR': '+90',
            'TM': '+993',
            'TC': '+1649',
            'TV': '+688',
            'UG': '+256',
            'UA': '+380',
            'AE': '+971',
            'GB': '+44',
            'US': '+1',
            'UY': '+598',
            'UZ': '+998',
            'VU': '+678',
            'VA': '+418',
            'VE': '+58',
            'VN': '+84',
            'VI': '+1284',
            'VQ': '+1340',
            'WF': '+681',
            'YE': '+967',
            'ZM': '+260',
            'ZW': '+263'
        };
        this.country_english = {
            "AD": "Andorra",
            "AE": "United Arab Emirates",
            "AF": "Afghanistan",
            "AG": "Antigua and Barbuda",
            "AI": "Anguilla",
            "AL": "Albania",
            "AM": "Armenia",
            "AO": "Angola", "AQ": "Antarctica",
            "AS": "American Samoa",
            "AR": "Argentina",
            "AT": "Austria",
            "AU": "Australia",
            "AW": "Aruba",
            "AX": "Aland Islands",
            "AZ": "Azerbaijan",
            "BA": "Bosnia and Herzegovina",
            "BB": "Barbados",
            "BD": "Bangladesh",
            "BE": "Belgium",
            "BF": "Burkina Faso",
            "BG": "Bulgaria",
            "BH": "Bahrain",
            "BI": "Burundi",
            "BJ": "Benin",
            "BL": "Saint Barthelemy",
            "BM": "Bermuda",
            "BN": "Brunei",
            "BO": "Bolivia",
            "BQ": "Bonaire",
            "BR": "Brazil",
            "BS": "Bahamas",
            "BT": "Bhutan",
            "BV": "Bouvet Island",
            "BW": "Botswana",
            "BY": "Belarus",
            "BZ": "Belize",
            "CA": "Canada",
            "CC": "Cocos Islands",
            "CD": "Democratic Republic of the Congo",
            "CF": "Central African Republic",
            "CG": "Republic of the Congo",
            "CH": "Switzerland",
            "CI": "Ivory Coast",
            "CK": "Cook Islands",
            "CL": "Chile",
            "CM": "Cameroon",
            "CN": "China",
            "CO": "Colombia",
            "CR": "Costa Rica",
            "CU": "Cuba",
            "CV": "Cape Verde",
            "CW": "Curacao",
            "CX": "Christmas Island",
            "CY": "Cyprus",
            "CZ": "Czech Republic",
            "DE": "Germany",
            "DJ": "Djibouti",
            "DK": "Denmark",
            "DM": "Dominica",
            "DO": "Dominican Republic",
            "DZ": "Algeria",
            "EC": "Ecuador",
            "EE": "Estonia",
            "EG": "Egypt",
            "EH": "Western Sahara",
            "ER": "Eritrea",
            "ES": "Spain",
            "ET": "Ethiopia",
            "FI": "Finland",
            "FJ": "Fiji",
            "FK": "Falkland Islands",
            "FM": "Micronesia",
            "FO": "Faroe Islands",
            "FR": "France",
            "GA": "Gabon",
            "GB": "United Kingdom",
            "GD": "Grenada",
            "GE": "Georgia",
            "GF": "French Guiana",
            "GG": "Guernsey",
            "GH": "Ghana",
            "GI": "Gibraltar",
            "GL": "Greenland",
            "GM": "Gambia",
            "GN": "Guinea",
            "GP": "Guadeloupe",
            "GQ": "Equatorial Guinea",
            "GR": "Greece",
            "GS": "South Georgia and the South Sandwich Islands",
            "GT": "Guatemala",
            "GU": "Guam",
            "GW": "Guinea-Bissau",
            "GY": "Guyana",
            "HK": "Hong Kong",
            "HM": "Heard Island and McDonald Islands",
            "HN": "Honduras",
            "HR": "Croatia",
            "HT": "Haiti",
            "HU": "Hungary",
            "ID": "Indonesia",
            "IE": "Ireland",
            "IL": "Israel",
            "IM": "Isle of Man",
            "IN": "India",
            "IO": "British Indian Ocean Territory",
            "IQ": "Iraq",
            "IR": "Iran",
            "IS": "Iceland",
            "IT": "Italy",
            "JE": "Jersey",
            "JM": "Jamaica",
            "JO": "Jordan",
            "JP": "Japan",
            "KE": "Kenya",
            "KG": "Kyrgyzstan",
            "KH": "Cambodia",
            "KI": "Kiribati",
            "KM": "Comoros",
            "KN": "Saint Kitts and Nevis",
            "KP": "North Korea",
            "KR": "South Korea",
            "KW": "Kuwait",
            "KY": "Cayman Islands",
            "KZ": "Kazakhstan",
            "LA": "Laos",
            "LB": "Lebanon",
            "LC": "Saint Lucia",
            "LI": "Liechtenstein",
            "LK": "Sri Lanka",
            "LR": "Liberia",
            "LS": "Lesotho",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "LV": "Latvia",
            "LY": "Libya",
            "MA": "Morocco",
            "MC": "Monaco",
            "MD": "Moldova",
            "ME": "Montenegro",
            "MF": "Saint Martin",
            "MG": "Madagascar",
            "MH": "Marshall Islands",
            "MK": "Macedonia",
            "ML": "Mali",
            "MM": "Myanmar",
            "MN": "Mongolia",
            "MO": "Macao",
            "MP": "Northern Mariana Islands",
            "MQ": "Martinique",
            "MR": "Mauritania",
            "MS": "Montserrat",
            "MT": "Malta",
            "MU": "Mauritius",
            "MV": "Maldives",
            "MW": "Malawi",
            "MX": "Mexico",
            "MY": "Malaysia",
            "MZ": "Mozambique",
            "NA": "Namibia",
            "NC": "New Caledonia",
            "NE": "Niger",
            "NF": "Norfolk Island",
            "NG": "Nigeria",
            "NI": "Nicaragua",
            "NL": "Netherlands",
            "NO": "Norway",
            "NP": "Nepal",
            "NR": "Nauru",
            "NU": "Niue",
            "NZ": "New Zealand",
            "OM": "Oman",
            "PA": "Panama",
            "PE": "Peru",
            "PF": "French Polynesia",
            "PG": "Papua New Guinea",
            "PH": "Philippines",
            "PK": "Pakistan",
            "PL": "Poland",
            "PM": "Saint Pierre and Miquelon",
            "PN": "Pitcairn",
            "PR": "Puerto Rico",
            "PS": "Palestinian Territory",
            "PT": "Portugal",
            "PW": "Palau",
            "PY": "Paraguay",
            "QA": "Qatar",
            "RE": "Reunion",
            "RO": "Romania",
            "RS": "Serbia",
            "RU": "Russia",
            "RW": "Rwanda",
            "SA": "Saudi Arabia",
            "SB": "Solomon Islands",
            "SC": "Seychelles",
            "SD": "Sudan",
            "SE": "Sweden",
            "SG": "Singapore",
            "SH": "Saint Helena",
            "SI": "Slovenia",
            "SJ": "Svalbard and Jan Mayen",
            "SK": "Slovakia",
            "SL": "Sierra Leone",
            "SM": "San Marino",
            "SN": "Senegal",
            "SO": "Somalia",
            "SR": "Suriname",
            "SS": "South Sudan",
            "ST": "Sao Tome and Principe",
            "SV": "El Salvador",
            "SX": "Sint Maarten",
            "SY": "Syria",
            "SZ": "Swaziland",
            "TC": "Turks and Caicos Islands",
            "TD": "Chad",
            "TF": "French Southern Territories",
            "TG": "Togo",
            "TH": "Thailand",
            "TJ": "Tajikistan",
            "TK": "Tokelau",
            "TL": "East Timor",
            "TM": "Turkmenistan",
            "TN": "Tunisia",
            "TO": "Tonga",
            "TR": "Turkey",
            "TT": "Trinidad and Tobago",
            "TV": "Tuvalu",
            "TW": "Taiwan",
            "TZ": "Tanzania",
            "UA": "Ukraine",
            "UG": "Uganda",
            "UM": "United States Minor Outlying Islands",
            "US": "United States",
            "UY": "Uruguay",
            "UZ": "Uzbekistan",
            "VA": "Vatican",
            "VC": "Saint Vincent and the Grenadines",
            "VE": "Venezuela",
            "VG": "British Virgin Islands",
            "VI": "U.S. Virgin Islands",
            "VN": "Vietnam",
            "VU": "Vanuatu",
            "WF": "Wallis and Futuna",
            "WS": "Samoa",
            "XK": "Kosovo",
            "YE": "Yemen",
            "YT": "Mayotte",
            "ZA": "South Africa",
            "ZM": "Zambia",
            "ZW": "Zimbabwe"
        };
    }
    /**
     * get name of country of given ios code
     * @param {string} code ISO-2 code in uppercase
     * @returns {any}
     */
    getCountryName(code) {
        return this.countries[('' + code).toUpperCase()];
    }
    /**
     * Request for location info
     * @returns {Observable<Object>}
     */
    getMyLocation() {
        return this.http.get("https://iplist.cc/api/").toPromise()
            .then(data => {
            console.log('GeoService', data);
            if (data && data.hasOwnProperty('countrycode')) {
                return data;
            }
            else {
                return '';
            }
        }).catch(() => {
            return '';
        });
    }
    getCountryPhone(code) {
        return this.phones[code];
    }
    getCountriesData(trans) {
        let data = {};
        for (let key in this.countries) {
            if (this.countries.hasOwnProperty(key)) {
                if (this.countries[key] && this.phones[key]) {
                    data[key] = {
                        code: key.toLowerCase(),
                        name: trans.instant('COUNTRIES.' + key),
                        phone: this.phones[key]
                    };
                }
            }
        }
        return data;
    }
    getAllCountries() {
        let data = [];
        let i = 0;
        Object.keys(this.countries).map((key) => {
            //   console.log('key',key);
            let a = {
                code: key,
                name: this.countries[key]
            };
            data.push(a);
            i++;
        });
        data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return data;
    }
    getArCountries() {
        let data = [];
        let i = 0;
        Object.keys(this.countries).map((key) => {
            //   console.log('key',key);
            if (key != '') {
                let a = {
                    code: key,
                    name: this.countries[key]
                };
                data.push(a);
                i++;
            }
        });
        data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return data;
    }
    getEnCountries() {
        let data = [];
        let i = 0;
        Object.keys(this.country_english).map((key) => {
            //   console.log('key',key);
            let a = {
                code: key,
                name: this.country_english[key]
            };
            data.push(a);
            i++;
        });
        data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return data;
    }
    getCountryDetails(code) {
        let data = {
            country_en_name: '',
            country_code: '',
            country_ar_name: ''
        };
        Object.keys(this.country_english).map((key) => {
            if (code == key) {
                data.country_en_name = this.country_english[key];
                data.country_code = key;
            }
        });
        Object.keys(this.countries).map((key) => {
            if (code == key) {
                data.country_ar_name = this.countries[key];
            }
        });
        return data;
    }
};
GeoServiceProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
GeoServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], GeoServiceProvider);



/***/ }),

/***/ "GhJt":
/*!***********************************************************************************!*\
  !*** ./src/app/components/edit-student-profile/edit-student-profile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditStudentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentProfileComponent", function() { return EditStudentProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_student_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-student-profile.component.html */ "04TA");
/* harmony import */ var _edit_student_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-student-profile.component.scss */ "HRLN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/database/database.service */ "HbOQ");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");










//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';


//import { DatabaseProvider } from '../../providers/database/database';
let EditStudentProfileComponent = class EditStudentProfileComponent {
    constructor(popoverController, navCtrl, device, authProvider, platform, fcm, 
    // public events: Events, 
    translate, route, zone, router, dbProvider) {
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.device = device;
        this.authProvider = authProvider;
        this.platform = platform;
        this.fcm = fcm;
        this.translate = translate;
        this.route = route;
        this.zone = zone;
        this.router = router;
        this.dbProvider = dbProvider;
    }
    ngOnInit() {
        this.studentName = this.student.name;
        this.classes.forEach(res => {
            if (res.name == this.student.course_name) {
                this.studentSemester = res.cid;
            }
        });
        //	console.log(this.student,this.classes,this.studentSemester,this.studentName);
        if (localStorage.getItem("userloggedin")) {
            // console.log('logged in');
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.currentUser = this.userDetails.details.username;
            this.currentUserEmail = this.userDetails.details.email_id;
            // console.log('th',this.currentUser);
        }
        if (localStorage.getItem('earlyLogin')) {
            this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
            // console.log(this.loggedinUser);
        }
    }
    closeModal() {
        this.popoverController.dismiss();
    }
    saveChanges() {
        const inputElement = document.getElementById("input");
        let i = inputElement.value;
        const select = document.getElementById("select");
        let s = select.value;
        let data = {
            student: this.student,
            studentName: i,
            studentSemester: s
        };
        //	console.log(data);
        this.popoverController.dismiss(data);
    }
    deleteClass() {
        let data = {
            student: this.student,
            deleteClass: true
        };
        this.popoverController.dismiss(data);
    }
};
EditStudentProfileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] }
];
EditStudentProfileComponent.propDecorators = {
    student: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EditStudentProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-student-profile',
        template: _raw_loader_edit_student_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_student_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]])
], EditStudentProfileComponent);



/***/ }),

/***/ "HRLN":
/*!*************************************************************************************!*\
  !*** ./src/app/components/edit-student-profile/edit-student-profile.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  margin: 4vh;\n}\n.body .edit-icon {\n  font-size: 3vh;\n  position: absolute;\n  right: 1vh;\n  top: 1vh;\n  z-index: 2;\n}\n.body .input-row {\n  padding-bottom: 4vh;\n}\n.body .input-row .item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQVE7RUFDSyxjQUFBO0VBQ04sa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFUDtBQUFRO0VBQ0MsbUJBQUE7QUFFVDtBQURTO0VBQ0MsV0FBQTtBQUdWIiwiZmlsZSI6ImVkaXQtc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBtYXJnaW46IDR2aDtcclxuICAgICAgICAuZWRpdC1pY29ue1xyXG4gICAgICAgIFx0ICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG5cdFx0XHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHQgICAgcmlnaHQ6IDF2aDtcclxuXHRcdFx0ICAgIHRvcDogMXZoO1xyXG5cdFx0XHQgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LXJvd3tcclxuICAgICAgICBcdHBhZGRpbmctYm90dG9tOiA0dmg7XHJcbiAgICAgICAgXHQuaXRlbXtcclxuICAgICAgICBcdFx0d2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "HbOQ":
/*!******************************************************!*\
  !*** ./src/app/service/database/database.service.ts ***!
  \******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let DatabaseService = class DatabaseService {
    constructor(http, sqlite, platform) {
        this.http = http;
        this.sqlite = sqlite;
        this.platform = platform;
    }
    /**
     * Open the local database
     */
    openDataBase() {
        return new Promise((resolve) => {
            this.platform.ready().then(() => {
                if (this.platform.is('cordova')) {
                    this.sqlite.create({
                        name: 'attendance.db',
                        location: 'default'
                    })
                        .then((db) => {
                        this.db = db;
                        resolve(true);
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    /**
     * Create classes, students, private_message, parent_connect table
     */
    createTable() {
        return new Promise((resolve, reject) => {
            this.platform.ready().then(() => {
                if (this.platform.is('cordova')) {
                    this.sqlite.create({
                        name: 'attendance.db',
                        location: 'default'
                    })
                        .then((db) => {
                        this.db = db;
                        db.executeSql(`CREATE TABLE IF NOT EXISTS classes( 
                              cid INT PRIMARY KEY,
                              name VARCHAR(50),
                              desc VARCHAR(50),
                              code VARCHAR(10))`, [])
                            .then(() => {
                            console.log('classes Table created');
                            db.executeSql(`CREATE TABLE IF NOT EXISTS students(
                      sid INT,
                      name VARCHAR(50), 
                      pic TEXT,
                      cid INT,
                      add_ranking FLOAT,
                      medical_days INTEGER, 
                      suspend_days INTEGER, 
                      total_absent INTEGER, 
                      unacceptable_absent_days INTEGER,
                      total_delay INTEGER,
                      zero INTEGER,
                      one INTEGER,
                      delay_rule INTEGER)`, [])
                                .then(() => {
                                console.log('students Table created');
                                db.executeSql(`CREATE TABLE IF NOT EXISTS private_message(
                                    ID BIGINT PRIMARY KEY,
                                    date datetime, 
                                    first_name varchar(50),
                                    notification TEXT,
                                    pic TEXT,
                                    status INT,
                                    title VARCHAR(50),
                                    user_no INT,
                                    user_right VARCHAR(5),
                                    user_type INT)`, [])
                                    .then(() => {
                                    console.log('private_message Table created');
                                    db.executeSql(`CREATE TABLE IF NOT EXISTS parent_connect(
                            id BIGINT PRIMARY KEY,
                            created datetime, 
                            first_name varchar(50),
                            last_name varchar(50),
                            message VARCHAR(150),
                            name VARCHAR(150),
                            parent_user_no INT,
                            pic TEXT,
                            school_id INT,
                            ticket_status INT,
                            ticket_status_updated_by BIGINT,
                            title VARCHAR(50),
                            updated_time TIMESTAMP)`, []).then(() => {
                                        console.log('parent_connect Table created');
                                        db.executeSql(`CREATE TABLE IF NOT EXISTS news(
                                id INT PRIMARY KEY,
                                ago VARCHAR(20), 
                                already_like varchar(10),
                                content TEXT,
                                detail TEXT,
                                school_id INT,
                                news_image TEXT,
                                school_logo TEXT,
                                school_name TEXT,
                                status INT,
                                title VARCHAR(150),
                                total_likes INT
                                )`, []).then(() => {
                                            console.log('parent_connect Table created');
                                            resolve(true);
                                        })
                                            .catch(e => {
                                            console.log(e);
                                            reject(false);
                                        });
                                    })
                                        .catch(e => {
                                        console.log(e);
                                        reject(false);
                                    });
                                })
                                    .catch(e => {
                                    console.log(e);
                                    reject(false);
                                });
                            })
                                .catch(e => {
                                console.log(e);
                                reject(false);
                            });
                        })
                            .catch(e => {
                            console.log(e);
                            reject(false);
                        });
                    })
                        .catch(e => {
                        console.log(e);
                        reject(false);
                    });
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    /**
     * insert or update the private messages locally
     * @param classes Array of class object
     */
    insertNews(recentNews) {
        if (this.platform.is('cordova')) {
            this.db.executeSql('DELETE From news', []).then(() => {
                recentNews.forEach((news) => {
                    this.db.executeSql(`INSERT INTO news (id, ago, already_like, content, detail, school_id, news_image, school_logo, school_name, status, title, total_likes) 
          VALUES(${news.id}, "${news.ago}", "${news.already_like}", "${news.content}", "${news.detail}", "${news.news_image}", ${news.school_id}, "${news.school_logo}", "${news.school_name}", "${news.status}", "${news.title}", ${news.total_likes})`, []).then(() => {
                        console.log(news.id, " inserted");
                    }).catch((err) => {
                        console.log(`INSERT INTO news (id, ago, already_like, content, detail, school_id, news_image, school_logo, school_name, status, title, total_likes) 
            VALUES(${news.id}, "${news.ago}", "${news.already_like}", "${news.content}", "${news.detail}", "${news.news_image}", ${news.school_id}, "${news.school_logo}", "${news.school_name}", "${news.status}", "${news.title}", ${news.total_likes})`);
                        console.log(err);
                    });
                });
            });
        }
    }
    /**
     * Get latest local news
     */
    getNews() {
        return new Promise((resolve, reject) => {
            this.db.executeSql('SELECT * from news', []).then((response) => {
                let news = [];
                for (let i = 0; i < response.rows.length; i++) {
                    let data = response.rows.item(i);
                    if (data.news_image) {
                        data.news_image = './assets/imgs/no-preview.png';
                    }
                    data.school_logo = '';
                    news.push(data);
                }
                console.log(news);
                resolve(news);
            }).catch((error) => {
                console.log(error);
                reject("Some problem exist try again later");
            });
        });
    }
    /**
     * insert or update the classes locally
     * @param classes Array of class object
     */
    insertClasses(classes) {
        if (this.platform.is('cordova')) {
            classes.forEach((data) => {
                this.db.executeSql(`INSERT OR REPLACE INTO classes (cid, name, desc, code) 
        VALUES(${data.cid}, "${data.name}", "${data.desc}", "${data.code}")`, []).then(() => {
                    console.log(data.name, " inserted");
                }).catch((err) => {
                    console.log(err);
                });
            });
        }
    }
    /**
     * Return the classes stored locally
     */
    getClasses() {
        return new Promise((resolve, reject) => {
            this.db.executeSql('SELECT * from classes', []).then((response) => {
                let classes = [];
                for (let i = 0; i < response.rows.length; i++) {
                    classes.push(response.rows.item(i));
                }
                resolve(classes);
            }).catch((error) => {
                console.log(error);
                reject("Some problem exist try again later");
            });
        });
    }
    /**
     * Insert students locally
     * @param students Arrya contains the student object
     */
    insertStudentList(students, delay_rule) {
        if (this.platform.is('cordova')) {
            students.forEach((student) => {
                if (student.add_ranking == undefined) {
                    student.add_ranking = 0;
                }
                if (student.total_delay == undefined) {
                    student.total_delay = 0;
                }
                if (student.useedforabsent == undefined) {
                    student.useedforabsent = { zero: 0, one: 0 };
                }
                this.db.executeSql(`Select sid from students where sid = "${student.sid}" and cid = "${student.cid}"`, []).then((response) => {
                    if (response.rows.length > 0) {
                        this.db.executeSql('UPDATE students SET name = ?, pic = ?, add_ranking =?, medical_days = ?, suspend_days =?, total_absent=?, unacceptable_absent_days = ?, total_delay = ?, zero = ?, one = ?, delay_rule = ? WHERE sid = "' + student.sid + '" and cid = "' + student.cid + '"', [student.name, student.pic, student.add_ranking, student.medical_days, student.suspend_days, student.total_absent, student.unacceptable_absent_days, student.total_delay, student.useedforabsent.zero, student.useedforabsent.one, delay_rule]).catch((err) => {
                            console.log(err);
                        }).then(() => {
                            console.log("Student updated successfully");
                        });
                    }
                    else {
                        this.db.executeSql(`INSERT  INTO students (sid, name, pic, cid, add_ranking, medical_days, suspend_days, total_absent, unacceptable_absent_days, total_delay, zero, one, delay_rule)
                                  VALUES(${student.sid},"${student.name}","${student.pic}",${student.cid},${student.add_ranking},${student.medical_days},${student.suspend_days},
                                  ${student.total_absent},${student.unacceptable_absent_days}, ${student.total_delay}, ${student.useedforabsent.zero}, ${student.useedforabsent.one}, ${delay_rule})`, []).then(() => {
                            console.log("Student inserted successfully");
                        }).catch((err) => {
                            console.log("insert error");
                            console.log(err);
                        });
                    }
                });
            });
        }
    }
    /**
     * Get the student list registered for particular course/class
     * @param cid Contains the course id
     */
    getStudentList(cid) {
        return new Promise((resolve, reject) => {
            this.db.executeSql('SELECT * from students WHERE cid = ' + cid, []).then((response) => {
                let students = [];
                for (let i = 0; i < response.rows.length; i++) {
                    let student = response.rows.item(i);
                    student.sheet = [];
                    student.useedforabsent = { zero: student.zero, one: student.one };
                    students.push(student);
                }
                resolve(students);
            }).catch((error) => {
                console.log(error);
                reject("Some problem exist try again later");
            });
        });
    }
    getStudent(sid) {
        return new Promise((resolve, reject) => {
            this.db.executeSql('SELECT * from students WHERE sid = ' + sid, []).then((response) => {
                let students = [];
                for (let i = 0; i < response.rows.length; i++) {
                    let student = response.rows.item(i);
                    student.sheet = [];
                    student.useedforabsent = { zero: student.zero, one: student.one };
                    students.push(student);
                }
                resolve(response);
            }).catch((error) => {
                console.log(error);
                reject("Some problem exist try again later");
            });
        });
    }
    /**
     * insert or update the private messages locally
     * @param classes Array of class object
     */
    insertPrivateMessages(messages) {
        if (this.platform.is('cordova')) {
            messages.forEach((message) => {
                this.db.executeSql(`INSERT OR REPLACE INTO private_message (ID, date, first_name, notification, pic, status, title, user_no, user_right, user_type) 
        VALUES(${message.ID}, "${message.date}", "${message.first_name}", "${message.notification}", "${message.pic}", ${message.status}, "${message.title}", ${message.user_no}, "${message.user_right}", ${message.user_type})`, []).then(() => {
                    console.log(message.ID, " inserted");
                }).catch((err) => {
                    console.log(err);
                });
            });
        }
    }
    /**
     * Get the Private messages
     */
    getPrivateMessages() {
        return new Promise((resolve, reject) => {
            this.db.executeSql('SELECT * from private_message', []).then((response) => {
                let messages = [];
                for (let i = 0; i < response.rows.length; i++) {
                    messages.push(response.rows.item(i));
                }
                resolve(messages);
            }).catch((error) => {
                console.log(error);
                reject("Some problem exist try again later");
            });
        });
    }
    /**
     * insert or update the Parent connect support ticket
     * @param classes Array of class object
     */
    insertParentConnectMessages(messages) {
        if (this.platform.is('cordova')) {
            messages.forEach((message) => {
                this.db.executeSql(`INSERT OR REPLACE INTO parent_connect (id, created, first_name, last_name, message, name, parent_user_no, pic, school_id, ticket_status, ticket_status_updated_by, title, updated_time) 
        VALUES(${message.id}, "${message.created}", "${message.first_name}", "${message.last_name}", "${message.message}", "${message.name}", ${message.parent_user_no}, "${message.pic}", ${message.school_id}, ${message.ticket_status}, ${message.ticket_status_updated_by}, "${message.title}", "${message.updated_time}")`, []).then(() => {
                    console.log(message.id, " inserted");
                }).catch((err) => {
                    console.log(err);
                });
            });
        }
    }
    /**
     * Get the student list registered for particular course/class
     */
    getParentConnectMessages() {
        return new Promise((resolve, reject) => {
            this.db.executeSql('SELECT * from parent_connect', []).then((response) => {
                let messages = [];
                for (let i = 0; i < response.rows.length; i++) {
                    messages.push(response.rows.item(i));
                }
                resolve(messages);
            }).catch((error) => {
                console.log(error);
                reject("Some problem exist try again later");
            });
        });
    }
    /**
     * truncate the table when user logged out
     */
    deleteDataBase() {
        if (this.platform.is('cordova')) {
            this.db.executeSql('DELETE FROM classes', []).then(() => {
                console.log("Table deleted");
            });
            this.db.executeSql('DELETE FROM students', []).then(() => {
                console.log("Table deleted");
            });
            this.db.executeSql('DELETE FROM private_message', []).then(() => {
                console.log("Table deleted");
            });
            this.db.executeSql('DELETE FROM parent_connect', []).then(() => {
                console.log("Table deleted");
            });
        }
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], DatabaseService);



/***/ }),

/***/ "JzvJ":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background: transparent;\n  text-align: center;\n  font-family: \"Comfortaa\", cursive;\n}\n\nsvg {\n  width: 100px;\n  height: 100px;\n  margin: 20px;\n  display: inline-block;\n}\n\nh1 {\n  text-align: center;\n  color: #fff;\n  margin: 0 0 100px;\n  font-size: 34px;\n  font-weight: 100;\n  text-transform: uppercase;\n  background-color: #e43725;\n  padding: 20px 0;\n}\n\nh1 b {\n  font-weight: 700;\n}\n\n.made-with-love {\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 10px;\n  font-family: arial;\n  color: #fff;\n}\n\n.made-with-love i {\n  font-style: normal;\n  color: #f50057;\n  font-size: 14px;\n  position: relative;\n  top: 2px;\n}\n\n.made-with-love a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.made-with-love a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFFRTtFQUNFLGdCQUFBO0FBQUo7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFFSTtFQUNFLDBCQUFBO0FBQU4iLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXJpYWJsZXNcclxuJGJhc2VDb2xvcjogI2U3NGMzYztcclxuJGZvbnRDb2xvcjogI2ZmZjtcclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XHJcbn1cclxuc3ZnIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIDAgMTAwcHg7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2U3NGMzYywgNSk7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vZm9sbG93IG1lIHRlbXBsYXRlXHJcbi5tYWRlLXdpdGgtbG92ZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2Y1MDA1NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvKTtcclxuLy8gYSB7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIGJvdHRvbTogMiU7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGNvbG9yOiAjMGZhO1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gYm9keSwgaHRtbCB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi8vIC5ib2R5IHtcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMDBiMzc3KSwgdG8oIzAwZDY4ZikpO1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYjM3NywgIzAwZDY4Zik7XHJcbi8vICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA5MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuLy8gICAvLyBtYXJnaW46IDBweDtcclxuLy8gICAvLyBwYWRkaW5nOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kZW1vIHtcclxuLy8gICB3aWR0aDogMTAwcHg7XHJcbi8vICAgaGVpZ2h0OiAxMDJweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDQ1JTtcclxuLy8gICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4vLyB9XHJcblxyXG4vLyAuY2lyY2xlIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbi8vIC5jaXJjbGUgLmlubmVyIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuLy8gICBib3JkZXI6IDVweCBzb2xpZCAjM2Q1YWZlO1xyXG4vLyAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuLy8gICBib3JkZXItdG9wOiBub25lO1xyXG4vLyAgIGJhY2tncm91ZG4tY2xpcDogcGFkZGluZztcclxuLy8gICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggcmdiYSgwLCAyNTUsIDE3MCwgMC4xNSk7XHJcbi8vIH1cclxuXHJcbi8vIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuLy8gICBmcm9tIHtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyAgIH1cclxuLy8gICB0byB7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4vLyAgIGZyb20ge1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgfVxyXG4vLyAgIHRvIHtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmNpcmNsZTpudGgtb2YtdHlwZSgwKSB7XHJcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuLy8gICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyB9XHJcbi8vIC5jaXJjbGU6bnRoLW9mLXR5cGUoMCkgLmlubmVyIHtcclxuLy8gICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbi8vICAgICAgICAgICBhbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyB9XHJcblxyXG4vLyAuY2lyY2xlOm50aC1vZi10eXBlKDEpIHtcclxuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcclxuLy8gICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcclxuLy8gfVxyXG4vLyAuY2lyY2xlOm50aC1vZi10eXBlKDEpIC5pbm5lciB7XHJcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuLy8gfVxyXG5cclxuLy8gLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XHJcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDBkZWcpO1xyXG4vLyAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTQwZGVnKTtcclxuLy8gfVxyXG4vLyAuY2lyY2xlOm50aC1vZi10eXBlKDIpIC5pbm5lciB7XHJcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuLy8gfVxyXG5cclxuLy8gLmRlbW8ge1xyXG4vLyAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDVzIGluZmluaXRlIGxpbmVhcjtcclxuLy8gICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbi8vIH0iXX0= */");

/***/ }),

/***/ "MsQK":
/*!************************************************************!*\
  !*** ./src/app/service/file-upload/file-upload.service.ts ***!
  \************************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data.service */ "v2nD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");








const env = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
let FileUploadService = class FileUploadService {
    constructor(httpClient, http, file, dataProvider, transfer) {
        this.httpClient = httpClient;
        this.http = http;
        this.file = file;
        this.dataProvider = dataProvider;
        this.transfer = transfer;
        this.uploadProgress = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
        this.dataProvider.language.subscribe(res => {
            console.log('res>>>>', res);
            _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lang_code = res;
        });
    }
    uploadfile(imagePath, data, endPoint, callBack) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataProvider.showLoading();
            const formData = new FormData();
            if (imagePath) {
                const imageFile = yield this.getSingleFile(imagePath);
                formData.append('file', imageFile, imageFile.name);
            }
            Object.keys(data).map((key) => {
                formData.append(key, data[key]);
            });
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            formData.append('lang_code', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lang_code);
            header.append('Content-Type', 'application/json');
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint, formData).subscribe((response) => {
                this.dataProvider.hideLoading();
                if (response) {
                    if (response['_body'] != '') {
                        let resObj = response;
                        callBack(response);
                    }
                    else {
                        callBack(false);
                    }
                }
            }, (error) => {
                this.dataProvider.hideLoading();
                callBack(false);
            });
        });
    }
    getSingleFile(filePath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get FileEntry from image path
            const fileEntry = yield this.file.resolveLocalFilesystemUrl(filePath);
            // Get File from FileEntry. Again note that this file does not contain the actual file data yet.
            const cordovaFile = yield this.convertFileEntryToCordovaFile(fileEntry);
            console.log('cordovaFile', cordovaFile);
            // Use FileReader on the File object to populate it with the true file contents.
            return this.convertCordovaFileToJavascriptFile(cordovaFile);
        });
    }
    convertFileEntryToCordovaFile(fileEntry) {
        return new Promise((resolve, reject) => {
            fileEntry.file(resolve, reject);
        });
    }
    convertCordovaFileToJavascriptFile(cordovaFile) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.error) {
                    reject(reader.error);
                }
                else {
                    const blob = new Blob([reader.result], { type: cordovaFile.type });
                    blob.lastModifiedDate = new Date();
                    blob.name = cordovaFile.name;
                    console.log('blob', blob);
                    resolve(blob);
                }
            };
            reader.readAsArrayBuffer(cordovaFile);
        });
    }
    uploadByTransfer(media, formData, endPoint, callBack) {
        this.dataProvider.showLoading();
        const today = new Date();
        if (media) {
            const readyToUpload = (file) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const localURL = file && file.localURL ? file.localURL : '';
                let fileName = "";
                let tmpFile = localURL.substr(localURL.lastIndexOf('/') + 1);
                if (tmpFile) {
                    const splitted = tmpFile.split('?');
                    fileName = splitted[0] || "";
                }
                if (fileName == "")
                    fileName = file && file.lastModified ? file.lastModified : 'CDW-' + today.getTime();
                let options = {
                    fileKey: 'file',
                    fileName: fileName,
                    mimeType: "multipart/form-data",
                    params: formData,
                    chunkedMode: false,
                    headers: {
                        Connection: "close"
                    }
                };
                console.log('upload', options);
                const transfer = this.transfer.create();
                transfer.upload(media, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint, options).then((transferResponse) => {
                    console.log('transferResponse', transferResponse);
                    this.dataProvider.hideLoading();
                    callBack(transferResponse);
                }, (e) => {
                    console.log('transferResponse ERROR', e);
                    this.dataProvider.hideLoading();
                    callBack(false);
                });
            });
            this.file.resolveLocalFilesystemUrl(media).then(entry => {
                entry.file(file => readyToUpload(file));
            })
                .catch(err => {
                this.dataProvider.hideLoading();
                // this.presentToast('Error while reading file.');
                console.log('resolveLocalFilesystemUrl CATCH ERROR:::', err);
                callBack(false);
            });
        }
        else {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            formData.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lang_code;
            header.append('Content-Type', 'application/json');
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint, formData, { headers: header }).subscribe((response) => {
                this.dataProvider.hideLoading();
                if (response) {
                    if (response['_body'] != '') {
                        let resObj = response;
                        callBack(response);
                    }
                    else {
                        callBack(false);
                    }
                }
            }, (error) => {
                this.dataProvider.hideLoading();
                callBack(false);
            });
        }
    }
    upload____OLD(media, formData, endPoint, callBack) {
        this.dataProvider.showLoading();
        const readyToUpload = (file) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const today = new Date();
            const localURL = file && file.localURL ? file.localURL : '';
            let fileName = "";
            let tmpFile = localURL.substr(localURL.lastIndexOf('/') + 1);
            if (tmpFile) {
                const splitted = tmpFile.split('?');
                fileName = splitted[0] || "";
            }
            if (fileName == "")
                fileName = file && file.lastModified ? file.lastModified : 'CDW-' + today.getTime();
            let options = {
                fileKey: 'file',
                fileName: fileName,
                mimeType: formData.type,
                params: formData,
                chunkedMode: false
            };
            console.log('upload', options);
            const transfer = this.transfer.create();
            transfer.upload(media, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint), options).then((transferResponse) => {
                console.log('transferResponse', transferResponse);
                this.dataProvider.hideLoading();
                callBack(transferResponse);
            }, (e) => {
                console.log('transferResponse ERROR', e);
                this.dataProvider.hideLoading();
                callBack(false);
            });
        });
        this.file.resolveLocalFilesystemUrl(media).then(entry => {
            entry.file(file => readyToUpload(file));
        })
            .catch(err => {
            this.dataProvider.hideLoading();
            // this.presentToast('Error while reading file.');
            console.log('resolveLocalFilesystemUrl CATCH ERROR:::', err);
            callBack(false);
        });
    }
    uploadByBlob(data) {
        console.log(data);
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"] }
];
FileUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]])
], FileUploadService);



/***/ }),

/***/ "Oo+P":
/*!*************************************************************!*\
  !*** ./src/app/components/rate-app/rate-app.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 373px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n  background: #dadce4;\n}\n\n.rating {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  flex-direction: row-reverse;\n  height: 150px;\n  position: relative;\n}\n\n.rating-0 {\n  filter: grayscale(100%);\n}\n\n.rating > input {\n  display: none;\n}\n\n.rating > label {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  margin-top: auto;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 76%;\n  transition: 0.3s;\n}\n\n.rating > input:checked ~ label,\n.rating > input:checked ~ label ~ label {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n\n.rating > input:not(:checked) ~ label:hover,\n.rating > input:not(:checked) ~ label:hover ~ label {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n\n.emoji-wrapper {\n  width: 100%;\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.emoji-wrapper:before,\n.emoji-wrapper:after {\n  content: \"\";\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n\n.emoji-wrapper:before {\n  top: 0;\n  background: linear-gradient(to bottom, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n\n.emoji-wrapper:after {\n  bottom: 0;\n  background: linear-gradient(to top, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n\n.emoji {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s;\n}\n\n.emoji > svg {\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n\n#rating-1:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-100px);\n}\n\n#rating-2:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-200px);\n}\n\n#rating-3:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-300px);\n}\n\n#rating-4:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-400px);\n}\n\n#rating-5:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-500px);\n}\n\n.feedback {\n  max-width: 360px;\n  background-color: #fff;\n  width: 100%;\n  padding: 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);\n}\n\n.desc-data {\n  width: 79vw;\n  font-size: 12px;\n}\n\n.rating-star {\n  font-size: 1.5rem;\n}\n\n.max_length {\n  text-align: left;\n  padding-left: 16px;\n  color: #ababab;\n  margin-top: 10px;\n}\n\nion-button {\n  height: 36px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGUtYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUdFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUVRLG1CQUFBO0VBRUEsdUJBQUE7RUFDUixlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBRVEsdUJBQUE7RUFDUixnQkFBQTtFQUdRLDJCQUFBO0VBQ1IsYUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFVSx1QkFBQTtBQUFWOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUdBOztFQUVFLHFpQkFBQTtBQUFGOztBQUdBOztFQUVFLHFpQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUdBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLE1BQUE7RUFFQSx3RkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUVBLHFGQUFBO0FBQUY7O0FBR0E7RUFFRSxhQUFBO0VBR1Esc0JBQUE7RUFFQSxtQkFBQTtFQUVSLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFFVSw2QkFBQTtBQUFWOztBQUdBO0VBRVUsNkJBQUE7QUFBVjs7QUFHQTtFQUVVLDZCQUFBO0FBQVY7O0FBR0E7RUFFVSw2QkFBQTtBQUFWOztBQUdBO0VBRVUsNkJBQUE7QUFBVjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUdRLHNCQUFBO0VBQ1IsZUFBQTtFQUVRLG1CQUFBO0VBQ1IsMENBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDRSxlQUFBO0FBQUo7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJyYXRlLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3N1YnRsZXBhdHRlcm5zL3BhdHRlcm5zL2NvbmNyZXRlLXRleHR1cmUucG5nXCIpO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogMzczcHg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkYWRjZTQ7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmF0aW5nLTAge1xyXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmF0aW5nID4gbGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNlM2UzZTMnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDc2JTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB+IGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNmY2Q5M2EnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0Om5vdCg6Y2hlY2tlZCkgfiBsYWJlbDpob3ZlcixcclxuLnJhdGluZyA+IGlucHV0Om5vdCg6Y2hlY2tlZCkgfiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNkOGIxMWUnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmVtb2ppLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZW1vamktd3JhcHBlcjpiZWZvcmUsXHJcbi5lbW9qaS13cmFwcGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZW1vamktd3JhcHBlcjpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHdoaXRlKSwgY29sb3Itc3RvcCgzNSUsIHdoaXRlKSwgdG8ocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDAlLCB3aGl0ZSAzNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5lbW9qaS13cmFwcGVyOmFmdGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSh3aGl0ZSksIGNvbG9yLXN0b3AoMzUlLCB3aGl0ZSksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB3aGl0ZSAwJSwgd2hpdGUgMzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG59XHJcblxyXG4uZW1vamkge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5lbW9qaSA+IHN2ZyB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4jcmF0aW5nLTE6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbn1cclxuXHJcbiNyYXRpbmctMjpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHB4KTtcclxufVxyXG5cclxuI3JhdGluZy0zOmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xyXG59XHJcblxyXG4jcmF0aW5nLTQ6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MDBweCk7XHJcbn1cclxuXHJcbiNyYXRpbmctNTpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcclxufVxyXG5cclxuLmZlZWRiYWNrIHtcclxuICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uZGVzYy1kYXRhe1xyXG4gIHdpZHRoOiA3OXZ3O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yYXRpbmctc3RhcntcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ubWF4X2xlbmd0aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgY29sb3I6ICNhYmFiYWI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICBoZWlnaHQ6MzZweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SSFD":
/*!*******************************************************************!*\
  !*** ./src/app/connect-new-message/connect-new-message.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConnectNewMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectNewMessagePageModule", function() { return ConnectNewMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _connect_new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect-new-message-routing.module */ "4tkT");
/* harmony import */ var _connect_new_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect-new-message.page */ "1Ee9");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let ConnectNewMessagePageModule = class ConnectNewMessagePageModule {
};
ConnectNewMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connect_new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectNewMessagePageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_connect_new_message_page__WEBPACK_IMPORTED_MODULE_6__["ConnectNewMessagePage"]]
    })
], ConnectNewMessagePageModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/data/data.service */ "v2nD");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/database/database.service */ "HbOQ");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "lQWD");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");








//import { tabs } from '../pages/tabs/tabs';












let AppComponent = class AppComponent {
    /**
     * Constructor
     * @param platform platform object
     * @param statusBar statusbar object to of StatusBar plugin
     * @param splashScreen used for splash screen hide
     * @param translate translation service
     * @param events used for app custom events
     * @param auth Authentication provider object
     * @param screen Object of ScreenOrientation for screen orientation
     * @param dataProvider Dataprovider provider object
     * @param dbProvider Local database  provider object
     * @param network Network object of plugin NetworkInformation
     */
    constructor(platform, statusBar, splashScreen, translate, auth, screen, dataProvider, dbProvider, network, zone, route, storage, deeplinks, navController, socialSharing, iap, fcm, menuCtrl, toastController, router) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.auth = auth;
        this.screen = screen;
        this.dataProvider = dataProvider;
        this.dbProvider = dbProvider;
        this.network = network;
        this.zone = zone;
        this.route = route;
        this.storage = storage;
        this.deeplinks = deeplinks;
        this.navController = navController;
        this.socialSharing = socialSharing;
        this.iap = iap;
        this.fcm = fcm;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.router = router;
        this.loggedin = false;
        this.user = {};
        this.lang = {};
        this.activeLink = {};
        this.changedLanguage = 'English';
        this.checked = false;
        this.runNetwork = false;
        this.routeDone = false;
        this.storage.get('language').then(res => {
            // console.log('res',res);
            if (res) {
                if (res == 'en') {
                    this.checked = false;
                }
                else {
                    this.checked = true;
                }
                this.translate.setDefaultLang(res);
                this.dataProvider.language.emit(res);
            }
            else {
                this.checked = true;
                this.translate.setDefaultLang('ar');
                this.dataProvider.language.emit('ar');
            }
            this.initializeApp();
        });
        this.auth.event.subscribe((status) => {
            if (status.loggedin) {
                this.loggedin = status.loggedin;
                this.setUserdetails();
                if (status.loggedin) {
                    this.pages = [];
                    if (this.user.userType == 'parent') {
                    }
                    else if (this.user.userType != 'student') {
                        this.pages.push({ title: this.lang.sidemenu.class_list, component: "tabs", icon: "list" });
                    }
                    else if (this.user.userType == 'moderator') {
                        this.pages.push({ title: this.lang.sidemenu.student_report, component: "student-report-classes", icon: "bar-chart" });
                        this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                    }
                    if (this.user.userType == 'moderator') {
                        this.pages.push({ title: this.lang.sidemenu.student_report, component: "student-report-classes", icon: "bar-chart" });
                    }
                    if (this.user.userType == 'admin') {
                        this.pages.push({ title: this.lang.sidemenu.student_report, component: "student-report-classes", icon: "bar-chart" });
                        this.pages.push({ title: this.lang.sidemenu.users_list, component: "users-list", icon: "list" }); //added new list 12/11/21
                        this.pages.push({ title: this.lang.sidemenu.manage_teacher, component: "manage-teacher", icon: "list" });
                        this.pages.push({ title: this.lang.sidemenu.manage_student, component: "manage-student", icon: "list" });
                        this.pages.push({ title: this.lang.sidemenu.new_parent, component: "requested-parent", icon: "list" });
                        this.pages.push({ title: this.lang.sidemenu.tasks_calendar, component: "tasks-calendar", icon: "calendar-outline" });
                        this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                        this.pages.push({ title: this.lang.sidemenu.parent_connect, component: "parentconnect", icon: "list" });
                    }
                    if (this.user.userType == 'student') {
                    }
                    if (this.user.userType == 'teacher' || this.user.userType == 'moderator') {
                        this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                    }
                    this.pages.push({ title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" });
                }
                else {
                    this.pages = [
                        { title: this.lang.sidemenu.login, component: "login", icon: "log-in" },
                        { title: this.lang.sidemenu.news, component: "news", icon: "time" },
                        { title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" }
                    ];
                }
            }
            if (status.loggedin == false) {
                this.user = {};
                this.loggedin = status.loggedin;
                this.pages = [
                    { title: this.lang.sidemenu.login, component: "login", icon: "log-in" },
                    { title: this.lang.sidemenu.news, component: "news", icon: "time" },
                    { title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" }
                ];
            }
        });
    }
    /**
     * Initializer function will run when app is ready
     */
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString("#FFFFFF");
            this.statusBar.overlaysWebView(false);
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.platform.is('cordova')) {
                window.open = cordova.InAppBrowser.open;
            }
            this.translate.get(["sidemenu", "alertmessages", "app_rate", "switch_account"]).subscribe((response) => {
                this.lang = response;
                this.dbProvider.openDataBase().then(() => {
                    if (localStorage.getItem("userloggedin")) {
                        this.loggedin = true;
                        this.setUserdetails();
                        this.pages = [];
                        if (this.user.userType == 'parent') {
                        }
                        else if (this.user.userType != 'student') {
                            this.pages.push({ title: this.lang.sidemenu.class_list, component: "tabs", icon: "list" });
                        }
                        else if (this.user.userType == 'moderator') {
                            this.pages.push({ title: this.lang.sidemenu.student_report, component: "student-report-classes", icon: "bar-chart" });
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                        }
                        if (this.user.userType == 'moderator') {
                            this.pages.push({ title: this.lang.sidemenu.student_report, component: "student-report-classes", icon: "bar-chart" });
                        }
                        if (this.user.userType == 'admin') {
                            console.log("checking user type:::", this.user.userType);
                            this.pages.push({ title: this.lang.sidemenu.student_report, component: "student-report-classes", icon: "bar-chart" });
                            this.pages.push({ title: this.lang.sidemenu.users_list, component: "users-list", icon: "list" }); //added new list 12/11/21
                            this.pages.push({ title: this.lang.sidemenu.manage_teacher, component: "manage-teacher", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.manage_student, component: "manage-student", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.new_parent, component: "requested-parent", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.tasks_calendar, component: "tasks-calendar", icon: "calendar-outline" }); //added 12/11/21
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.parent_connect, component: "parentconnect", icon: "list" });
                        }
                        if (this.user.userType == 'student') {
                        }
                        if (this.user.userType == 'teacher' || this.user.userType == 'moderator') {
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                        }
                        this.pages.push({ title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" });
                        if (this.user.userType == 'parent') {
                            this.rootPage = "ChildrenPage";
                        }
                        else {
                            this.rootPage = 'tabs';
                        }
                    }
                    else {
                        this.checkRoute();
                        this.pages = [
                            { title: this.lang.sidemenu.login, component: "login", icon: "log-in" },
                            { title: this.lang.sidemenu.news, component: "news", icon: "list" },
                            { title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" }
                        ];
                        this.rootPage = "login";
                    }
                    this.deeplinks.routeWithNavController(this.navController, {
                        '/registerteacher': 'register-teacher',
                        '/parent_register': 'parent-register'
                    }).subscribe((match) => {
                        console.log('Successfully matched route', match);
                        let link = match.$link.path;
                        let query = match.$link.queryString;
                        let que = query.split("&");
                        let id = que[0].split("=");
                        let un = que[1].split("=");
                        let res = link.split("/");
                        let es = res[3].split(".");
                        let s = es[0];
                        console.log('app', s, id, un);
                        const navigation = {
                            state: {
                                id: id[1],
                                un: un[1]
                            }
                        };
                        if (s == 'parent_register') {
                            this.zone.run(() => {
                                this.router.navigate(['parent-register'], navigation);
                            });
                        }
                        else {
                            this.zone.run(() => {
                                this.router.navigate(['register-teacher'], navigation);
                            });
                        }
                        this.routeDone = true;
                    }, (nomatch) => {
                        // console.error('Got a deeplink that didn\'t match', nomatch);
                    });
                });
                if (this.platform.is('cordova')) {
                    this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(() => {
                    }).catch((err) => {
                        console.log(err);
                    });
                    setTimeout(() => {
                        if (this.network.type == this.network.Connection.UNKNOWN || this.network.type == this.network.Connection.NONE) {
                            // this.dataProvider.showToast(this.lang.alertmessages.offline);
                            // console.log('notOnline:::::::::::::::::::',this.network.type);
                        }
                    }, 1000);
                    this.network.onDisconnect().subscribe(() => {
                        // console.log('notOnline:::::::::::::::::::',this.network.type);
                        this.dataProvider.showToast(this.lang.alertmessages.not_online);
                    });
                    this.network.onConnect().subscribe(() => {
                        // console.log('online:::::::::::::::::::',this.network.type);
                        if (!this.runNetwork) {
                            this.runNetwork = true;
                            //  this.dataProvider.showToast(this.lang.alertmessages.online);
                        }
                    });
                }
            });
            this.auth.event.subscribe((data) => {
                if (data) {
                    if (data.activeLink) {
                        // console.log('activeLink',data.activeLink);
                        this.activeLink = data.activeLink;
                    }
                }
            });
            if (this.platform.is('ios')) {
                const w = window;
                // w.FCMPlugin.requestPushPermissionIOS(() => {
                //   console.log('push permissions recieved');
                // }, (e) => {
                //   console.log('push permissions failed', e);
                // });
            }
            this.fcm.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("Received in background", data);
                }
                else {
                    console.log("Received in foreground", data);
                    if (this.platform.is('ios')) {
                        this.presentToast(data.aps.alert.body);
                    }
                    else {
                        this.presentToast(data.body);
                    }
                }
                ;
            });
        });
    }
    /** present toast for notification
        @param: message -- message of notification
     **/
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: "top",
                mode: 'ios',
                color: 'danger'
            });
            toast.present();
        });
    }
    /**
     * Function to open the page
     * @param page Page object of pages array
     */
    openPage(page) {
        if (page.component) {
            if (page.component == "login") {
                this.router.navigate([page.component]);
            }
            else {
                this.router.navigate([page.component]);
            }
        }
        else {
            this.router.navigate([page]);
        }
        this.activePage = page;
        this.menuCtrl.close();
    }
    /**
     * Used to get the active page
     * @param page Page object of pages array
     */
    getActivePage(page) {
        return this.activePage == page;
    }
    checkRoute() {
        if (!this.routeDone) {
            if (this.user.userType == 'parent') {
                this.router.navigate(['tabs/children'], { replaceUrl: true });
            }
            else if (!this.user.userType) {
                this.router.navigate(['login'], { replaceUrl: true });
            }
            else if (this.user.userType == 'student') {
                this.router.navigate(['tabs/student-notes'], { replaceUrl: true });
            }
            else {
                this.router.navigate(['tabs'], { replaceUrl: true });
            }
        }
    }
    /**
     * Logout function
     */
    logout() {
        let userDetail = JSON.parse(localStorage.getItem("userloggedin"));
        let data = {
            "user_no": userDetail.details.user_no,
            "session_id": userDetail.session_id
        };
        this.dataProvider.showLoading();
        this.auth.doLogout(data).then((resp) => {
            this.dataProvider.hideLoading();
            this.router.navigate(['login'], { replaceUrl: true });
        }).catch((error) => {
            this.dataProvider.hideLoading();
        });
        this.menuCtrl.close();
    }
    /**
     * Function to use set user details
     */
    setUserdetails() {
        //  console.log('details',localStorage.getItem("userloggedin"));
        if (localStorage.getItem("userloggedin")) {
            let userDetail = JSON.parse(localStorage.getItem("userloggedin"));
            this.isSchoolAdmin = userDetail.details.is_school_admin;
            // console.log('isSchoolAdmin',this.isSchoolAdmin);
            // console.log(userDetail.details);
            if (userDetail.details.is_school_admin == 1) {
                this.user.name = userDetail.details.school_name;
                this.user.image = userDetail.details.school_logo ? userDetail.details.school_logo : "./assets/imgs/logo.png";
            }
            else {
                this.user.name = userDetail.details.first_name + " " + userDetail.details.last_name;
                this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
            }
            // this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
            this.user.description = userDetail.details.school_name;
            this.user.school_image = userDetail.details.school_logo;
            this.user.is_school_admin = userDetail.details.is_school_admin;
            if (userDetail.details.user_type == '1') {
                if (userDetail.details.school_details != '') {
                    if (userDetail.details.is_school_admin != 1) {
                        this.user.description = '';
                    }
                    else {
                        this.user.description = userDetail.details.school_details;
                    }
                }
                this.user.userType = 'admin';
            }
            else if (userDetail.details.user_type == '2') {
                this.user.userType = 'teacher';
            }
            else if (userDetail.details.user_type == '3') {
                this.user.userType = 'moderator';
            }
            else if (userDetail.details.user_type == '4') {
                this.user.userType = 'parent';
            }
            else if (userDetail.details.user_type == '7') {
                this.user.userType = 'viewer';
            }
            else if (userDetail.details.user_type == '8') {
                this.user.userType = 'student';
            }
        }
        else {
            // this.user.name = "Guest";
            // this.user.image = "./assets/imgs/logo.png";
            // this.user.userType = 'guest';
        }
        this.checkRoute();
    }
    /**
     * Share teacher registration link
     */
    shareRegistrationLink() {
        this.socialSharing.share("Teacher Registration", "This is registration link for the new teacher.", null, this.activeLink.link).then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    shareParentRegistrationLink() {
        this.socialSharing.share("Parent Registration", "This is registration link for the new parents.", null, this.activeLink.parent_link_active).then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    registerParent(page) {
        if (page == 'parent_register') {
            this.router.navigate(['parent-register']);
        }
        else {
            this.router.navigate(['requested-parent']);
        }
        this.menuCtrl.close();
    }
    shareApp() {
        this.dataProvider.showLoading();
        this.dataProvider.getShareLink('elem').then(response => {
            this.dataProvider.hideLoading();
            console.log(response.short_url);
            this.socialSharing.share(null, null, null, response.short_url).then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            });
            this.menuCtrl.close();
        }).catch(e => {
            this.dataProvider.hideLoading();
            console.log(e);
        });
    }
    rateApp() {
        let lang = this.translate.getDefaultLang();
        //console.log(lang);
        // this.dataProvider.presentRatingPopover(this.lang.app_rate);
        this.dataProvider.showRatePrompt(lang);
        this.menuCtrl.close();
    }
    /**
     * Open backend url
     */
    openBackendUrl() {
        if (this.platform.is('cordova')) {
            const browser = this.iap.create("https://basmapp.com/Att-App/", '_blank');
            browser.show();
        }
        this.menuCtrl.close();
    }
    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            // this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
    setLanguage(event) {
        let elem = (document.getElementById('laguage_check'));
        let lang;
        // console.log(elem.checked);
        if (elem.checked == true) {
            this.storage.set('language', 'ar');
            this.translate.use('ar');
            this.changedLanguage = 'Arabic';
            lang = 'ar';
        }
        else {
            this.storage.set('language', 'en');
            this.translate.use('en');
            this.changedLanguage = 'English';
            lang = 'en';
        }
        //this.menuCtrl.close();
        //this.translate.setDefaultLang(this.changedLanguage);
        this.checkRoute();
        this.translate.get(["sidemenu", "alertmessages", "app_rate"]).subscribe((response) => {
            this.lang = response;
            this.initializeApp();
            this.dataProvider.language.emit(lang);
        });
    }
    changeAccount(event) {
        console.log("changeAcc::", event);
        this.dataProvider.switchAccount(event, this.lang.switch_account);
        this.menuCtrl.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"],
        _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__["FCM"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]])
], AppComponent);



/***/ }),

/***/ "TgDs":
/*!**************************************************************!*\
  !*** ./src/app/service/student-data/student-data.service.ts ***!
  \**************************************************************/
/*! exports provided: StudentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDataService", function() { return StudentDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");






let StudentDataService = class StudentDataService {
    constructor(http, sqlite, platform, storage) {
        this.http = http;
        this.sqlite = sqlite;
        this.platform = platform;
        this.storage = storage;
        this.studentList = [];
        this.studentNote = [];
        this.staticalData = [];
    }
    checkStudent(student) {
        this.storage.get('offlineStudent').then((data) => {
            if (data) {
                this.studentList = data;
                this.studentList[student.sid] = student;
            }
            else {
                this.studentList[student.sid] = student;
            }
            this.storage.set('offlineStudent', this.studentList);
        });
    }
    checkStudentNotes(note, student_id) {
        this.storage.get('offlineStudentNote').then((data) => {
            if (data) {
                this.studentNote = data;
                this.studentNote[student_id] = note;
            }
            else {
                this.studentNote[student_id] = note;
            }
            this.storage.set('offlineStudentNote', this.studentNote);
            //	console.log('offlineStudentNote',this.studentNote)
        });
    }
    getStudent(student_id, callback, error) {
        this.storage.get('offlineStudent').then((res) => {
            if (res) {
                this.studentList = res;
                //console.log(this.studentList,student_id);
                let data = this.studentList[student_id];
                if (data) {
                    callback(data);
                }
                else {
                    error(data);
                }
            }
            else {
                error('data');
            }
        });
    }
    getStudentNote(student_id, callback, error) {
        this.storage.get('offlineStudentNote').then((res) => {
            if (res) {
                this.studentNote = res;
                let data = this.studentNote[student_id];
                if (data) {
                    callback(data);
                }
                else {
                    error(data);
                }
            }
            else {
                error('data');
            }
        });
    }
    setStaticalData(user_ID, data) {
        this.storage.get('offlinestatical').then(res => {
            if (res) {
                this.staticalData = res;
                this.staticalData[user_ID] = data;
            }
            else {
                this.staticalData[user_ID] = data;
            }
            console.log('offlinestaticalSet', this.staticalData);
            this.storage.set('offlinestatical', this.staticalData);
        });
    }
    getOfflineStatical(user_ID, callback) {
        this.storage.get('offlinestatical').then(res => {
            if (res) {
                console.log('offlinestaticalGet', res);
                callback(res[user_ID]);
            }
            else {
                callback([]);
            }
        });
    }
};
StudentDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
StudentDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], StudentDataService);



/***/ }),

/***/ "VPdO":
/*!***********************************************************************!*\
  !*** ./src/app/components/switch-account/switch-account.component.ts ***!
  \***********************************************************************/
/*! exports provided: SwitchAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchAccountComponent", function() { return SwitchAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_switch_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./switch-account.component.html */ "fHPS");
/* harmony import */ var _switch_account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch-account.component.scss */ "r+W6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/database/database.service */ "HbOQ");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/loader/loader.component */ "vPOg");











//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';



//import { DatabaseProvider } from '../../providers/database/database';
let SwitchAccountComponent = class SwitchAccountComponent {
    constructor(popoverController, navCtrl, device, authProvider, platform, fcm, alertController, 
    // public events: Events, 
    translate, route, zone, router, dbProvider, storage) {
        this.popoverController = popoverController;
        this.navCtrl = navCtrl;
        this.device = device;
        this.authProvider = authProvider;
        this.platform = platform;
        this.fcm = fcm;
        this.alertController = alertController;
        this.translate = translate;
        this.route = route;
        this.zone = zone;
        this.router = router;
        this.dbProvider = dbProvider;
        this.storage = storage;
    }
    ngOnInit() {
        console.log(this.lang);
        this.fcm.getToken().then((token) => {
            this.fcm_Token = token;
        });
        if (this.platform.is("cordova")) {
            this.device_id = this.device.uuid;
            if (this.device.platform == 'android' || this.device.platform == 'Android') {
                this.os_type = 1;
            }
            else {
                this.os_type = 2;
            }
        }
        if (localStorage.getItem("userloggedin")) {
            // console.log('logged in');
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.currentUser = this.userDetails.details.username;
            this.currentUserEmail = this.userDetails.details.email_id;
            console.log('th', this.currentUser);
        }
        if (localStorage.getItem('earlyLogin')) {
            this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
            console.log(this.loggedinUser);
        }
    }
    removeUser(i) {
        this.warnRemove(res => {
            this.loggedinUser.splice(i, 1);
            localStorage.setItem("earlyLogin", JSON.stringify(this.loggedinUser));
        }, e => {
        });
    }
    warnRemove(callBack, error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.lang.confirm,
                message: this.lang.alert_mssg,
                buttons: [
                    {
                        text: this.lang.cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            error(false);
                        }
                    }, {
                        text: this.lang.okay,
                        handler: () => {
                            console.log('Confirm Okay');
                            callBack(true);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    closeModal() {
        this.popoverController.dismiss();
    }
    loginOldUser(users) {
        console.log(users);
        this.flushLocalStorage();
        setTimeout(res => {
            this.login(users);
        }, 100);
    }
    registerSchol() {
        this.router.navigate(['school-registration']);
        this.closeModal();
    }
    addNewAccount() {
        let data = {
            "user_no": this.userDetails.details.userDetail,
            "session_id": this.userDetails.session_id
        };
        this.presentPopover('');
        // this.dataProvider.showLoading(data);
        this.dismissPopover();
        this.router.navigate(['login']);
        // this.authProvider.doLogout(data,'here').then(res=>{
        //   this.dismissPopover();
        //   this.router.navigate(['login']);
        // }).catch(e=>{
        // this.dismissPopover();
        // })
        this.closeModal();
    }
    flushLocalStorage() {
        localStorage.removeItem("userloggedin");
        this.dbProvider.deleteDataBase();
        localStorage.removeItem("attendance");
        this.storage.clear();
    }
    login(users) {
        this.closeModal();
        this.presentPopover('');
        console.log('logindata', this.user);
        //  this.dataProvider.showLoading(); 
        users.device_id = this.device_id;
        users.os_type = this.os_type;
        users.registration_id = this.fcm_Token;
        this.authProvider.doLogin(users).then((response) => {
            this.dismissPopover();
            //  this.dataProvider.hideLoading();
            // this.events.publish("loggedin", true);
            console.log('res', response);
            this.authProvider.publishEvent(true);
            this.authProvider.changeUser(true);
            if (response.details.user_type == '4') {
                this.router.navigate(['tabs/children'], { replaceUrl: true });
                // this.navCtrl.setRoot("ChildrenPage");
            }
            else if (response.details.user_type == '8') {
                this.router.navigate(['tabs/student-notes'], { replaceUrl: true });
                //this.navCtrl.setRoot(TabsPage);
            }
            else {
                this.router.navigate(['tabs'], { replaceUrl: true });
            }
        }).catch((error) => {
            this.dismissPopover();
            //    this.dataProvider.hideLoading();
            // this.dataProvider.errorALertMessage(error);
            this.router.navigate(['login'], { replaceUrl: true });
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle',
            });
            return this.popOver.present();
            // setTimeout(res=>{
            //       this.popOver.dismiss();
            // },2500)
        });
    }
    dismissPopover() {
        if (this.popOver)
            this.popOver.dismiss();
    }
};
SwitchAccountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
SwitchAccountComponent.propDecorators = {
    lang: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SwitchAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-switch-account',
        template: _raw_loader_switch_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_switch_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])
], SwitchAccountComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" side=\"end\" persistent=\"true\">\n      <ion-content class=\"sidemenu-color\">\n            <div *ngIf=\"user.name\" class=\"sidemenu-header\">\n              <ion-row>\n                <ion-col size=\"6\" >\n                    <img [src]=\"user.image\" class=\"profile-picture\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n                </ion-col>\n                <ion-col size=\"6\" >\n                 <!--  <div (click)=\"changeAccount($event)\" class=\"switch-account\"> {{'sidemenu.switch' | translate}}</div> -->\n                  <ion-button mode=\"ios\" size=\"small\" (click)=\"changeAccount($event)\" class=\"switch-account\" style=\"--background: #f4f5f8;color: #000;\">{{'sidemenu.switch' | translate}}</ion-button>\n                </ion-col> \n              </ion-row>\n                    <p class=\"username\">{{user.name}}</p>\n                    <p class=\"username-detail\">{{user.description}}</p>\n            </div>\n        <ion-list padding>\n          <ion-row  class=\"sidemenu-names lang-row\" >\n            <ion-col size=\"6\" text-right >\n              {{'sidemenu.lang' | translate}}  \n            </ion-col>\n            <ion-col size=\"6\" text-center class=\"select-language\">\n              <label class=\"switch\">\n                <input class=\"switch-input\" [checked]=\"checked\" [value]=\"'on'\" type=\"checkbox\" id=\"laguage_check\" (change)=\"setLanguage($event)\" />\n                <span class=\"switch-label\" data-on=\"Arabic\" data-off=\"English\"></span> <span class=\"switch-handle\"></span> \n              </label>\n              <!-- <ion-icon [name]=\"page.icon\" color=\"menuicon\"></ion-icon> -->\n             <!--  <ion-select name=\"language\" placeholder=\"{{changedLanguage}}\" (ionChange)=\"setLanguage($event)\" interface=\"popover\">\n                  <ion-select-option value=\"ar\">Arabic</ion-select-option>\n                  <ion-select-option value=\"en\">English</ion-select-option>\n              </ion-select> -->\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let page of pages\" class=\"sidemenu-names\" [class.activeMenuPage]=\"getActivePage(page)\" menuClose\n            (click)=\"openPage(page)\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon [name]=\"page.icon\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{page.title}}\n            </ion-col>\n          </ion-row>\n           <ion-row class=\"sidemenu-names\" *ngIf=\"activeLink.teacher_link == '1' && user.userType == 'admin'\"\n              (click)=\"shareRegistrationLink()\">\n              <ion-col size=\"3\" text-center>\n                <ion-icon name=\"share\" color=\"menuicon\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"9\" text-right>\n                {{'sidemenu.register_link' | translate}}\n              </ion-col>\n            </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"activeLink.parent_link == '1' && user.userType == 'admin' && isSchoolAdmin\"\n            (click)=\"shareParentRegistrationLink()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"share\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.register_parent' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.name\"\n            (click)=\"openPage('settings')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"settings\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.settings' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.name && (user.userType != 'parent' && user.userType !='student')\"\n            (click)=\"openPage('available-plan')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon color=\"menuicon\" name=\"card\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.Plans' | translate}}\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'student'\"\n            (click)=\"openPage('warning-report')\">\n            <ion-col size=\"3\" text-center>\n             <ion-icon name=\"warning\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.warning_report' | translate}}\n            </ion-col>\n          </ion-row> -->\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'admin' || user.userType == 'moderator' || user.userType == 'viewer'\" \n            (click)=\"openBackendUrl()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"globe\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.backend' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" (click)=\"rateApp()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"star-half\"  color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.rate' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" (click)=\"shareApp()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon  color=\"menuicon\" name=\"share-social\" ></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.share' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" (click)=\"openPage('contact-us')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon  color=\"menuicon\" name=\"people-outline\" ></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.contact_us' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'admin' || user.userType == 'moderator' || user.userType == 'viewer'\" \n            (click)=\"openPage('about-us')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"home\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.about_us' | translate}}\n            </ion-col>\n          </ion-row>\n\n         <!--  <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'admin'\"\n            (click)=\"registerParent('new_parent')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"list\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.new_parent' | translate}} \n            </ion-col>\n          </ion-row> -->\n          \n          \n          \n          \n        </ion-list>\n        <div class=\"logouts\">\n          <ion-button  center expand=\"block\" color=\"danger\" class=\"logout\" menuClose (click)=\"logout()\"\n            *ngIf=\"loggedin\">{{'sidemenu.logout' | translate}}</ion-button>\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "YXaF":
/*!****************************************************!*\
  !*** ./src/app/add-review/add-review.component.ts ***!
  \****************************************************/
/*! exports provided: AddReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewComponent", function() { return AddReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_review_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-review.component.html */ "ies4");
/* harmony import */ var _add_review_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-review.component.scss */ "aIeY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");







let AddReviewComponent = class AddReviewComponent {
    constructor(modalController, dataProvider, translate) {
        this.modalController = modalController;
        this.dataProvider = dataProvider;
        this.translate = translate;
        this.selections = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
        this.postData = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
        this.stars_array = [
            {
                title: 'متميز'
            },
            {
                title: 'جيد جداً'
            },
            {
                title: 'جيد'
            },
            {
                title: 'مقبول'
            },
            {
                title: 'ضعيف'
            },
        ];
        this.noteMessage = '';
    }
    ngOnInit() {
        // this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
        this.translate.get("alertmessages").subscribe((val) => {
            this.lang = val;
        });
        if (this.data) {
            if (this.data.note) {
                this.noteMessage = this.data.note;
            }
            if (this.data.new_ratting) {
                this.postData = JSON.parse(this.data.new_ratting);
                this.selections = this.postData;
            }
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            role: false,
            'dismissed': true,
        });
    }
    getSelectedStars() {
        let stars_array = [
            {
                title: 'متميز'
            },
            {
                title: 'جيد جداً'
            },
            {
                title: 'جيد'
            },
            {
                title: 'مقبول'
            },
            {
                title: 'ضعيف'
            }
        ];
        console.log(stars_array);
        return stars_array;
        return new Array(5);
    }
    getSemArray() {
        let stars_array = [
            {
                title: 'متميز'
            },
            {
                title: 'جيد جداً'
            },
            {
                title: 'جيد'
            },
            {
                title: 'مقبول'
            },
            {
                title: 'ضعيف'
            }
        ];
        console.log(stars_array);
        return stars_array;
    }
    selectStarsForRating(post_data_index, index) {
        if (index === 0) {
            index = 4;
        }
        else if (index === 1) {
            index = 3;
        }
        else if (index === 2) {
            index = 2;
        }
        else if (index === 3) {
            index = 1;
        }
        else if (index === 4) {
            index = 0;
        }
        this.postData[post_data_index] = index + 1;
        this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        for (let i = 0; i <= index; i++) {
            this.selections[post_data_index] = '#04855f';
        }
        console.log(this.postData);
    }
    onClickSend() {
        if (this.noteMessage && this.noteMessage.trim() != '') {
            if (this.noteMessage.length <= 45) {
                this.modalController.dismiss({
                    'dismissed': true,
                    data: this.postData,
                    noteMessage: this.noteMessage
                });
            }
            else {
                this.dataProvider.showToast(this.lang.max_note_length);
            }
        }
        else {
            this.dataProvider.showToast(this.lang.empty_note);
        }
    }
};
AddReviewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
AddReviewComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AddReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-review',
        template: _raw_loader_add_review_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_review_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], AddReviewComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/data/data.service */ "v2nD");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/database/database.service */ "HbOQ");
/* harmony import */ var _service_location_location_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/location/location.service */ "9XNo");
/* harmony import */ var _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/student-data/student-data.service */ "TgDs");
/* harmony import */ var _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/subscription/subscription.service */ "iISc");
/* harmony import */ var _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/file-upload/file-upload.service */ "MsQK");
/* harmony import */ var _service_document_document_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/document/document.service */ "0165");
/* harmony import */ var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/geo-service/geo-service */ "G+rw");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _create_class_create_class_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./create-class/create-class.module */ "ZMI9");
/* harmony import */ var _connect_new_message_connect_new_message_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./connect-new-message/connect-new-message.module */ "SSFD");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");
/* harmony import */ var _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/rate-app/rate-app.component */ "hyCl");
/* harmony import */ var _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/switch-account/switch-account.component */ "VPdO");
/* harmony import */ var _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/edit-student-profile/edit-student-profile.component */ "GhJt");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _ionic_native_document_scanner_ngx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ionic-native/document-scanner/ngx */ "Vj9j");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ionic-selectable */ "8xsl");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "0PQT");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "lQWD");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "7DPu");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "METt");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pipes/pipes.module */ "iTUp");
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./add-review/add-review.component */ "YXaF");












// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';














//import { Deeplinks } from '@ionic-native/deeplinks';









//import { Geolocation } from '@ionic-native/geolocation/ngx';

//import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';




//import {EditCalssPageModule} from './common-modal/edit-calss/edit-calss.module';
// import {ViewClassNotesPageModule} from './common-modal/view-class-notes/view-class-notes.module';
// import {SelectMessageUserPageModule} from './common-modal/select-message-user/select-message-user.module';


// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';














function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__["LoaderComponent"],
            _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_37__["RateAppComponent"],
            _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_38__["SwitchAccountComponent"],
            _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_39__["EditStudentProfileComponent"],
            _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_55__["AddReviewComponent"]
        ],
        entryComponents: [
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__["LoaderComponent"],
            _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_37__["RateAppComponent"],
            _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_38__["SwitchAccountComponent"],
            _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_39__["EditStudentProfileComponent"],
            _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_55__["AddReviewComponent"]
        ],
        imports: [
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_53__["NgCalendarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({ mode: 'md' }),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _create_class_create_class_module__WEBPACK_IMPORTED_MODULE_30__["CreateClassPageModule"],
            _connect_new_message_connect_new_message_module__WEBPACK_IMPORTED_MODULE_31__["ConnectNewMessagePageModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_45__["IonicSelectableModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_54__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            // EditCalssPageModule,
            // ViewClassNotesPageModule,
            // SelectMessageUserPageModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]] // <--- add this
                } // <--- add this
            }) // <--- add this
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _service_data_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"],
            _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _service_document_document_service__WEBPACK_IMPORTED_MODULE_19__["DocumentService"],
            _service_location_location_service__WEBPACK_IMPORTED_MODULE_15__["LocationService"],
            _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_16__["StudentDataService"],
            _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_17__["SubscriptionService"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_11__["SQLite"],
            _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_49__["InAppPurchase2"],
            // PhotoLibrary,
            _service_database_database_service__WEBPACK_IMPORTED_MODULE_14__["DatabaseService"],
            _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_18__["FileUploadService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"],
            _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_48__["Deeplinks"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_25__["ScreenOrientation"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_26__["SocialSharing"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_27__["InAppBrowser"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_28__["Device"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_32__["FCM"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_29__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_43__["FileTransfer"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_52__["Diagnostic"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_51__["FileOpener"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_44__["File"],
            _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_20__["GeoServiceProvider"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_47__["FilePath"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_42__["MediaCapture"],
            _ionic_native_document_scanner_ngx__WEBPACK_IMPORTED_MODULE_41__["DocumentScanner"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_33__["PhotoViewer"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_46__["Base64"],
            // PayPal,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_34__["AndroidPermissions"],
            // FileChooser,
            //  Geolocation,
            _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_50__["Printer"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_35__["LocationAccuracy"],
            //NativeGeocoder,
            _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_40__["AppRate"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZMI9":
/*!*****************************************************!*\
  !*** ./src/app/create-class/create-class.module.ts ***!
  \*****************************************************/
/*! exports provided: CreateClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassPageModule", function() { return CreateClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-class-routing.module */ "hXrW");
/* harmony import */ var _create_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-class.page */ "kLqr");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let CreateClassPageModule = class CreateClassPageModule {
};
CreateClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateClassPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_create_class_page__WEBPACK_IMPORTED_MODULE_6__["CreateClassPage"]]
    })
], CreateClassPageModule);



/***/ }),

/***/ "aIeY":
/*!******************************************************!*\
  !*** ./src/app/add-review/add-review.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-area {\n  margin: 5px 0;\n}\n.checkbox-area .checkbox-remove {\n  border: 1px solid grey;\n  height: 24px;\n  width: 24px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*ion-icon{\n      font-size: 23px;\n      font-weight: 800;\n      padding-right: 7px;\n      padding-top: 0;\n  }*/\n}\n.checkbox-area .checkbox-remove .att-icon:before {\n  font-size: 22px;\n}\n.checkbox-area .present {\n  width: 100%;\n  height: 100%;\n  background: #32db64;\n}\n.checkbox-area .absent {\n  background: #f53d3d;\n}\n.checkbox-area .delay {\n  background: #ffa500;\n}\n.checkbox-container {\n  width: 100%;\n  display: flex;\n}\n.checkbox-container .checkbox-icon {\n  width: 14%;\n  height: auto;\n}\nh3 {\n  line-height: inherit;\n  font-size: 16px;\n}\nh5 {\n  text-align: center;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFBSTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQTs7Ozs7SUFBQTtBQU1SO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFFUjtBQUVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImFkZC1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gtYXJlYXtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIC5jaGVja2JveC1yZW1vdmV7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6Y29sb3IoJGNvbG9ycywgcmVtb3ZlLWFwcCwgYmFzZSkgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvKmlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICB9Ki9cbiAgICAgICAgLmF0dC1pY29uOmJlZm9yZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJlc2VudHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzMyZGI2NDtcbiAgICB9XG4gICAgLmFic2VudHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1M2QzZDtcbiAgICB9XG4gICAgLmRlbGF5e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZhNTAwO1xuICAgIH1cbn1cbi5jaGVja2JveC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmNoZWNrYm94LWljb24ge1xuICAgICAgICB3aWR0aDogMTQlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxufVxuXG5oM3tcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmg1e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "aKU5":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rate-app/rate-app.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\" *ngIf=\"lang\">\n  <div class=\"feedback\">\n    <div class=\"rating\">\n      <input type=\"radio\" name=\"rating\" id=\"rating-5\">\n      <label for=\"rating-5\" (click)=\"provideRating(5,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-4\" >\n      <label for=\"rating-4\" (click)=\"provideRating(4 ,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-3\">\n      <label for=\"rating-3\" (click)=\"provideRating(3 ,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-2\">\n      <label for=\"rating-2\" (click)=\"provideRating(2 ,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-1\">\n      <label for=\"rating-1\" (click)=\"provideRating(1,$event)\"></label>\n      <div class=\"emoji-wrapper\">\n        <div class=\"emoji\">\n          <svg class=\"rating-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z\" fill=\"#f4c534\" />\n            <ellipse transform=\"scale(-1) rotate(31.21 715.433 -595.455)\" cx=\"166.318\" cy=\"199.829\" rx=\"56.146\" ry=\"56.13\" fill=\"#fff\" />\n            <ellipse transform=\"rotate(-148.804 180.87 175.82)\" cx=\"180.871\" cy=\"175.822\" rx=\"28.048\" ry=\"28.08\" fill=\"#3e4347\" />\n            <ellipse transform=\"rotate(-113.778 194.434 165.995)\" cx=\"194.433\" cy=\"165.993\" rx=\"8.016\" ry=\"5.296\" fill=\"#5a5f63\" />\n            <ellipse transform=\"scale(-1) rotate(31.21 715.397 -1237.664)\" cx=\"345.695\" cy=\"199.819\" rx=\"56.146\" ry=\"56.13\" fill=\"#fff\" />\n            <ellipse transform=\"rotate(-148.804 360.25 175.837)\" cx=\"360.252\" cy=\"175.84\" rx=\"28.048\" ry=\"28.08\" fill=\"#3e4347\" />\n            <ellipse transform=\"scale(-1) rotate(66.227 254.508 -573.138)\" cx=\"373.794\" cy=\"165.987\" rx=\"8.016\" ry=\"5.296\" fill=\"#5a5f63\" />\n            <path d=\"M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z\" fill=\"#3e4347\" />\n          </svg>\n          <svg class=\"rating-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <path d=\"M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z\" fill=\"#3e4347\" />\n            <path d=\"M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z\" fill=\"#f4c534\" />\n            <path d=\"M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z\" fill=\"#fff\" />\n            <path d=\"M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z\" fill=\"#3e4347\" />\n            <path d=\"M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z\" fill=\"#fff\" />\n            <path d=\"M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z\" fill=\"#f4c534\" />\n            <path d=\"M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z\" fill=\"#fff\" />\n            <path d=\"M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z\" fill=\"#3e4347\" />\n            <path d=\"M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z\" fill=\"#fff\" />\n          </svg>\n          <svg class=\"rating-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <path d=\"M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z\" fill=\"#3e4347\" />\n            <path d=\"M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z\" fill=\"#fff\" />\n            <circle cx=\"340\" cy=\"260.4\" r=\"36.2\" fill=\"#3e4347\" />\n            <g fill=\"#fff\">\n              <ellipse transform=\"rotate(-135 326.4 246.6)\" cx=\"326.4\" cy=\"246.6\" rx=\"6.5\" ry=\"10\" />\n              <path d=\"M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z\" />\n            </g>\n            <circle cx=\"168.5\" cy=\"260.4\" r=\"36.2\" fill=\"#3e4347\" />\n            <ellipse transform=\"rotate(-135 182.1 246.7)\" cx=\"182.1\" cy=\"246.7\" rx=\"10\" ry=\"6.5\" fill=\"#fff\" />\n          </svg>\n          <svg class=\"rating-3\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z\" fill=\"#3e4347\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <g fill=\"#fff\">\n              <path d=\"M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z\" />\n              <ellipse cx=\"356.4\" cy=\"205.3\" rx=\"81.1\" ry=\"81\" />\n            </g>\n            <ellipse cx=\"356.4\" cy=\"205.3\" rx=\"44.2\" ry=\"44.2\" fill=\"#3e4347\" />\n            <g fill=\"#fff\">\n              <ellipse transform=\"scale(-1) rotate(45 454 -906)\" cx=\"375.3\" cy=\"188.1\" rx=\"12\" ry=\"8.1\" />\n              <ellipse cx=\"155.6\" cy=\"205.3\" rx=\"81.1\" ry=\"81\" />\n            </g>\n            <ellipse cx=\"155.6\" cy=\"205.3\" rx=\"44.2\" ry=\"44.2\" fill=\"#3e4347\" />\n            <ellipse transform=\"scale(-1) rotate(45 454 -421.3)\" cx=\"174.5\" cy=\"188\" rx=\"12\" ry=\"8.1\" fill=\"#fff\" />\n          </svg>\n          <svg class=\"rating-4\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <path d=\"M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z\" fill=\"#e24b4b\" />\n            <path d=\"M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z\" fill=\"#d03f3f\" />\n            <path d=\"M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z\" fill=\"#fff\" />\n            <path d=\"M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z\" fill=\"#e24b4b\" />\n            <path d=\"M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z\" fill=\"#d03f3f\" />\n            <path d=\"M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z\" fill=\"#fff\" />\n            <path d=\"M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z\" fill=\"#3e4347\" />\n            <path d=\"M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z\" fill=\"#e24b4b\" />\n          </svg>\n          <svg class=\"rating-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <g fill=\"#ffd93b\">\n              <circle cx=\"256\" cy=\"256\" r=\"256\" />\n              <path d=\"M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z\" />\n            </g>\n            <path d=\"M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z\" fill=\"#e9eff4\" />\n            <path d=\"M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z\" fill=\"#45cbea\" />\n            <path d=\"M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z\" fill=\"#e84d88\" />\n            <g fill=\"#38c0dc\">\n              <path d=\"M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z\" />\n            </g>\n            <g fill=\"#d23f77\">\n              <path d=\"M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z\" />\n            </g>\n            <path d=\"M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z\" fill=\"#3e4347\" />\n            <path d=\"M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z\" fill=\"#e24b4b\" />\n            <path d=\"M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z\" fill=\"#fff\" opacity=\".2\" />\n          </svg>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-row>\n    <ion-item class=\"desc-data\">\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea id=\"textArea\" ></ion-textarea>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n  \t<ion-col size=\"6\">\n  \t\t<ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"rate()\">{{lang.rate}}</ion-button>\n  \t</ion-col>\n  \t<ion-col size=\"6\">\n  \t\t<ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\"  color=\"secondary\" (click)=\"closePopup(undefined)\">{{lang.cancel}}</ion-button>\n  \t</ion-col>\n  </ion-row>\n</div> -->\n<div class=\"custom-modal-main\" *ngIf=\"lang\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-note-header\">\n      <h4>{{'student-details.add_note' | translate}}</h4>\n    </div>\n\n    <div class=\"custom-note-content\">\n      <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n        <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[i]}\" (click)=\"selectStarsForRating(i)\"></ion-icon>\n      </span>\n      <div class=\"note-desc\">\n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"noteMessage\" id=\"textArea\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-input>\n        </ion-item>\n        <p class=\"max_length\">{{noteMessage.length}}/45</p>\n      </div>\n    </div>\n    <div class=\"custom-modal-footer right-direction\">\n      <ion-row>\n        <ion-col size=\"6\" text-right>\n         <ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\" (click)=\"closePopup(undefined)\">{{lang.cancel}}</ion-button> \n        </ion-col>\n        <ion-col size=\"6\" text-center>\n          <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" color=\"primary\" (click)=\"rate()\">{{lang.rate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AuthGuard = class AuthGuard {
    constructor(zone, navCtrl) {
        this.zone = zone;
        this.navCtrl = navCtrl;
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // todo: apply login status
            const isLoggedIn = JSON.parse(localStorage.getItem("userloggedin"));
            let isUser;
            if (isLoggedIn) {
                if (isLoggedIn.userType != 'guest') {
                    isUser = true;
                }
                else {
                    isUser = false;
                }
            }
            else {
                isUser = false;
            }
            console.log('isLoggedIn', isLoggedIn);
            if (!isLoggedIn) {
                // this.zone.run(() => { this.navCtrl.navigateRoot('/landing'); });
            }
            else {
                //	this.zone.run(() => { this.navCtrl.navigateRoot('/tabs'); });
            }
            //return await isLoggedIn.userType == 'guest'? false : true;
            return isUser;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AuthGuard);



/***/ }),

/***/ "fHPS":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/switch-account/switch-account.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"body\">\n\t\t  <div class=\"earlyLogin\" *ngIf=\"loggedinUser.length>0\">\n\t\t    <ion-item *ngFor=\"let oldUser of loggedinUser; let i=index\" >\n\t\t    \t<ion-avatar slot=\"start\" (click)=\"loginOldUser(oldUser)\">\n\t\t    \t\t<!-- <img src=\"{{oldUser.image}}\" onerror=\"this.src='https://www.epicentrofestival.com/wp-content/uploads/2019/12/Person-Clipart-Person-Clip-Art-Image-Clip-Art-Library-Hypertext-Transfer-Protocol-720x962.jpg';\"> -->\n\t\t    \t\t<img src=\"{{oldUser.image}}\" onerror=\"this.src='http://webapp.ws/Att-App/cpanel/uploads/app_icon.png';\">\n\t\t    \t</ion-avatar >\n\t\t      <ion-label (click)=\"loginOldUser(oldUser)\">\n\t\t        <p> {{oldUser.name}}</p>\n\t\t        <p> {{oldUser.email_id}}</p>\n\t\t      </ion-label>\n\t\t        <ion-icon name=\"checkmark-circle-outline\" class=\"used-user\" slot=\"end\" *ngIf=\"oldUser && currentUser && oldUser.email_id==currentUser || oldUser.email_id ==currentUserEmail \"></ion-icon>\n\t\t        <ion-icon name=\"close-outline\" class=\"unused-user\" slot=\"end\" *ngIf=\"oldUser && currentUser && oldUser.email_id!=currentUser && oldUser.email_id !=currentUserEmail\" (click)=\"removeUser(i)\"></ion-icon>\n\t\t    </ion-item>\n\n\t\t    <ion-button style=\"font-size: 10px;\" expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"addNewAccount()\">\n\t\t    \t{{lang.different_login}}\n\t\t        <!-- <ion-icon name=\"person-add-outline\" class=\"addUser\"></ion-icon> -->\n\t\t    </ion-button>\n\n\t\t    <!-- <ion-item  (click)=\"addNewAccount()\">\n\t\t      <ion-label>\n\t\t        {{'switch_account.different_login | translate'}}\n\t\t        <ion-icon name=\"person-add-outline\" class=\"addUser\"></ion-icon>\n\t\t      </ion-label>\n\t\t    </ion-item> -->\n\t\t    <!-- <ion-row class=\"login-type\">\n\t\t    \t<ion-col size=\"6\" class=\"type-col \">\n\t\t    \t\t<div class=\"type-div\" (click)=\"closeModal()\">\n\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t    \t</ion-col>\n\t\t    \t<ion-col size=\"6\" class=\"type-col col1\" (click)=\"registerSchol()\">\n\t\t    \t\t<div class=\"type-div\">\n\t\t    \t\t\tRegister new school\n\t\t    \t\t</div>\n\t\t    \t</ion-col>\n\t\t    </ion-row> -->\n\t\t  </div>\n  </div>\n\n ");

/***/ }),

/***/ "hXrW":
/*!*************************************************************!*\
  !*** ./src/app/create-class/create-class-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassPageRoutingModule", function() { return CreateClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-class.page */ "kLqr");




const routes = [
    {
        path: '',
        component: _create_class_page__WEBPACK_IMPORTED_MODULE_3__["CreateClassPage"]
    }
];
let CreateClassPageRoutingModule = class CreateClassPageRoutingModule {
};
CreateClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateClassPageRoutingModule);



/***/ }),

/***/ "hyCl":
/*!***********************************************************!*\
  !*** ./src/app/components/rate-app/rate-app.component.ts ***!
  \***********************************************************/
/*! exports provided: RateAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateAppComponent", function() { return RateAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rate_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rate-app.component.html */ "aKU5");
/* harmony import */ var _rate_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-app.component.scss */ "Oo+P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let RateAppComponent = class RateAppComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.noteMessage = "";
        this.providedStars = 1;
        this.showNoteModal = false;
        this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        this.ratingStars = 1;
    }
    ngOnInit() {
        console.log(this.lang, this.data);
        console.log("reate app data::::", this.data);
        this.noteMessage = this.data.note;
        this.providedStars = this.data.rating;
        console.log("this.noteMessage:::", this.noteMessage);
        this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        for (let i = 0; i < this.data.rating; i++) {
            this.selections[i] = '#04855f';
        }
        /*  setTimeout(()=>{
             const inputElement = document.getElementById("textArea") as HTMLInputElement;
             inputElement.value=this.data.note;
             if(this.data.rating=='1'){
              let ch:any=document.getElementById('rating-1');
              console.log(ch);
              setTimeout(()=>{
                ch.checked=true;
              },300)
             }
             if(this.data.rating=='2'){
              let ch:any=document.getElementById('rating-2');
              console.log(ch);
              setTimeout(()=>{
                ch.checked=true;
              },300)
             }
             if(this.data.rating=='3'){
              let ch:any=document.getElementById('rating-3');
              console.log(ch);
              setTimeout(()=>{
                ch.checked=true;
              },300)
             }
             if(this.data.rating=='4'){
              let ch:any=document.getElementById('rating-4');
              console.log(ch);
              setTimeout(()=>{
                ch.checked=true;
              },300)
             }
             if(this.data.rating=='5'){
              let ch:any=document.getElementById('rating-5');
              console.log(ch);
              setTimeout(()=>{
                ch.checked=true;
              },300)
             }
         },500)
      */
    }
    closePopup(data) {
        this.popoverController.dismiss(data);
    }
    /* for rating */
    rate() {
        const inputElement = document.getElementById("textArea");
        let i = inputElement.value;
        let stars;
        if (this.providedStars) {
            stars = this.providedStars;
        }
        else {
            stars = this.data.rating;
        }
        let data = {
            stars: stars,
            description: i
        };
        // console.log(data);
        this.closePopup(data);
    }
    provideRating(stars, eve) {
        console.log(eve);
        this.providedStars = stars;
    }
    getSelectedStars() {
        return new Array(5);
    }
    selectStarsForRating(index) {
        this.providedStars = index + 1;
        this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        for (let i = 0; i <= index; i++) {
            this.selections[i] = '#04855f';
        }
        console.log("stars for rating", this.providedStars);
    }
    /* modal open for rating having 5 stars*/
    openNoteModal() {
        this.ratingStars = 1;
        this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        this.showNoteModal = true;
    }
    hideNoteModal() {
        this.showNoteModal = false;
    }
};
RateAppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
RateAppComponent.propDecorators = {
    lang: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RateAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rate-app',
        template: _raw_loader_rate_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rate_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], RateAppComponent);



/***/ }),

/***/ "iISc":
/*!**************************************************************!*\
  !*** ./src/app/service/subscription/subscription.service.ts ***!
  \**************************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.service */ "v2nD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "7DPu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");


// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';






const env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
let SubscriptionService = class SubscriptionService {
    constructor(
    // private payPal: PayPal,
    dataService, iap2, platform, loadingCtrl, toastCtrl, alertCtrl, route, storage, router, zone) {
        this.dataService = dataService;
        this.iap2 = iap2;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.storage = storage;
        this.router = router;
        this.zone = zone;
        this.isPurchased = [];
        this.paymentDone = false;
        this.products = [
            {
                id: 'com.monthlysubscribe.com',
                price: '1.99',
                billingPeriod: 1,
                billingPeriodUnit: 'month',
                appleProductId: '',
                googleProductId: 'com.monthlysubscribe.com',
                type: this.iap2.CONSUMABLE,
            },
            {
                id: 'com.yearlysubscription.com',
                price: '19.95',
                billingPeriod: 1,
                billingPeriodUnit: 'year',
                appleProductId: '',
                googleProductId: 'com.yearlysubscription.com',
                type: this.iap2.CONSUMABLE
            },
            {
                id: 'com.monthlysubscribe.com',
                price: '7.99',
                billingPeriod: 1,
                billingPeriodUnit: 'month',
                appleProductId: '',
                googleProductId: 'com.monthlysubscribe.com',
                type: this.iap2.CONSUMABLE,
            },
            {
                id: 'com.yearlysubscription.com',
                price: '59.99',
                billingPeriod: 1,
                billingPeriodUnit: 'year',
                appleProductId: '',
                googleProductId: 'com.yearlysubscription.com',
                type: this.iap2.CONSUMABLE
            }
        ];
        this.products_ios = [
            {
                id: 'apple.monthlySubscription',
                price: '1.99',
                billingPeriod: 1,
                billingPeriodUnit: 'month',
                appleProductId: 'apple.monthlySubscription',
                googleProductId: 'com.monthlysubscribe.com',
                type: this.iap2.CONSUMABLE,
            },
            {
                id: 'apple.yearlySubscription.com',
                price: '19.99',
                billingPeriod: 1,
                billingPeriodUnit: 'year',
                appleProductId: 'apple.yearlySubscription.com',
                googleProductId: 'com.yearlysubscription.com',
                type: this.iap2.CONSUMABLE
            },
            {
                id: 'apple.monthlySubscription',
                price: '7.99',
                billingPeriod: 1,
                billingPeriodUnit: 'month',
                appleProductId: 'apple.monthlySubscription',
                googleProductId: 'com.monthlysubscribe.com',
                type: this.iap2.CONSUMABLE,
            },
            {
                id: 'apple.yearlySubscription.com',
                price: '59.99',
                billingPeriod: 1,
                billingPeriodUnit: 'year',
                appleProductId: 'apple.yearlySubscription.com',
                googleProductId: 'com.yearlysubscription.com',
                type: this.iap2.CONSUMABLE
            }
        ];
        this.platform.ready().then(() => {
            this.setup();
        });
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
        }
    }
    setup() {
        console.log('callSetup');
        this.iap2.verbosity = this.iap2.DEBUG;
        if (this.platform.is('ios')) {
            this.iap2.register(this.products_ios);
        }
        else if (this.platform.is('android')) {
            this.iap2.register(this.products);
        }
        this.iap2.refresh();
    }
    checkout(p) {
        this.dataService.showLoading();
        let productId;
        let pData = {};
        if (this.platform.is('ios')) {
            productId = this.products_ios[p].appleProductId;
            pData = {
                id: this.products_ios[p].id,
                price: this.products_ios[p].price,
                billingPeriod: this.products_ios[p].billingPeriod,
                billingPeriodUnit: this.products_ios[p].billingPeriodUnit
            };
        }
        else if (this.platform.is('android')) {
            productId = this.products[p].googleProductId;
            pData = {
                id: this.products[p].id,
                price: this.products[p].price,
                billingPeriod: this.products[p].billingPeriod,
                billingPeriodUnit: this.products[p].billingPeriodUnit
            };
        }
        console.log('productId', productId);
        this.registerHandlersForPurchase(productId, pData);
        try {
            let product = this.iap2.get(productId);
            console.log('Product Info: ', product);
            this.iap2.order(productId).then((p) => {
                this.dataService.hideLoading();
                console.log('Purchase Succesful' + JSON.stringify(p));
            }).catch((e) => {
                // this.dataService.showToast('Error Ordering From Store')
                this.dataService.hideLoading();
                console.log('Error Ordering From Store' + e);
            });
        }
        catch (err) {
            // this.dataService.showToast('Error Ordering From Store')
            this.dataService.hideLoading();
            console.log('Error Ordering ' + JSON.stringify(err));
        }
    }
    registerHandlersForPurchase(productId, pData) {
        let self = this.iap2;
        console.log('self::::', self);
        this.iap2.when(productId).updated(function (product) {
            if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
                console.log('updated', product);
                product.finish();
            }
        });
        this.iap2.when(productId).owned((product) => {
            product.finish();
        });
        this.iap2.when(productId).approved((product) => {
            product.finish();
            console.log('approved', product);
            if (this.platform.is('android')) {
                this.subcribeToServer(product, pData);
            }
            else {
                this.purchaseToServer(product, pData);
            }
        });
        this.iap2.when(productId).refunded((product) => {
        });
        this.iap2.when(productId).expired((product) => {
        });
    }
    subcribeToServer(subs, pData) {
        let receipt = JSON.parse(subs.transaction.receipt);
        let data = {
            plan_id: pData.id,
            iap_id: receipt.orderId,
            paymentType: subs.transaction.type,
            billingPeriod: pData.billingPeriod,
            billingPeriodUnit: pData.billingPeriodUnit,
            ammount: pData.price,
            user_id: this.userDetails.details.user_no,
            school: this.userDetails.details.school_id
        };
        this.dataService.subscribePlan(data).then(res => {
            this.paymentDone = true;
            this.storage.get('currentStudent').then((data) => {
                this.iap2.refresh();
                this.dataService.showToast('Plan subscribed Successfully');
                const navigation = {
                    state: data
                };
                this.zone.run(() => {
                    this.router.navigate(['student-detail'], navigation);
                });
            });
        }, e => {
            this.dataService.showToast('Error in processing payment');
        });
    }
    purchaseToServer(subs, pData) {
        let receipt = JSON.parse(subs.transaction.receipt);
        let data = {
            plan_id: pData.id,
            iap_id: receipt.orderId,
            paymentType: subs.transaction.type,
            billingPeriod: pData.billingPeriod,
            billingPeriodUnit: pData.billingPeriodUnit,
            ammount: pData.price,
            user_id: this.userDetails.details.user_no,
            school: this.userDetails.details.school_id
        };
        this.dataService.purchase(data).then(res => {
            this.paymentDone = true;
            this.storage.get('currentStudent').then((data) => {
                this.iap2.refresh();
                const navigation = {
                    state: data
                };
                this.zone.run(() => {
                    this.router.navigate(['student-detail'], navigation);
                });
            });
        }, e => {
            this.dataService.showToast('Error in processing payment');
        });
    }
    paymentStatus(pid, callback) {
        let productId;
        if (this.platform.is('ios')) {
            productId = this.products_ios[pid].appleProductId;
            this.iap2.when(productId).approved(p => p.verify()).verified(p => p.finish());
        }
        else if (this.platform.is('android')) {
            productId = this.products[pid].googleProductId;
        }
        this.iap2.refresh();
        callback(true);
    }
    doPaypalPayment(data) {
        return new Promise((resolve, reject) => {
            resolve('true');
        });
    }
};
SubscriptionService.ctorParameters = () => [
    { type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], SubscriptionService);



/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-format/date-format.pipe */ "CGfp");
/* harmony import */ var _safe_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe/safe.pipe */ "zl9O");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-search.pipe */ "wHzU");







let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"],
            _safe_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"],
            _user_search_pipe__WEBPACK_IMPORTED_MODULE_6__["UserSearchPipe"]],
        imports: [],
        exports: [_date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"],
            _safe_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
    })
], PipesModule);



/***/ }),

/***/ "ies4":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-modal>\n  <ng-template> -->\n    <ion-header>\n      <ion-toolbar>\n        <ion-title style=\"font-size: 15px;\">{{'create_notes.model_title' | translate}}</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"dismiss()\"><ion-icon name=\"close\" class=\"att-icon\" color=\"dark\">\n          </ion-icon></ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <!-- <ion-card> -->\n        <!-- <ion-list> -->\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١۔حضور المتعلم ومواظبته والتزامه بالمواعيد أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(0, i)\">\n                        <h5 style=\"text-align: center; font-size: 14px;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[0] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[0] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>حضور المتعلم ومواظبته والتزامه بالمواعيد أثناء الحصة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[0]}\" (click)=\"selectStarsForRating(0, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٢۔التعاون مع الزملاء المتعلمين أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(1, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[1] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[1] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>التعاون مع الزملاء المتعلمين أثناء الحصة الدراسية:</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[1]}\" (click)=\"selectStarsForRating(1, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٣۔يعتمد سلوك المتعلم على احترام زملائه</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(2, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[2] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[2] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>يعتمد سلوك المتعلم على احترام زملائه:</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[2]}\" (click)=\"selectStarsForRating(2, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٤۔ترتبط العلاقة بين المتعلم والمعلم على أساس الاحترام المتبادل</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(3, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[3] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[3] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>ترتبط العلاقة بين المتعلم والمعلم على أساس الاحترام المتبادل</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[3]}\" (click)=\"selectStarsForRating(3, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٥۔الالتزام بضوابط المحافظة على الممتلكات العامة</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(4, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[4] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[4] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>الالتزام بضوابط المحافظة على الممتلكات العامة</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[4]}\" (click)=\"selectStarsForRating(4, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٦۔مدى إدراك المتعلم بحقوقه والتزامه بواجباته</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(5, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[5] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[5] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مدى إدراك المتعلم بحقوقه والتزامه بواجباته</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[5]}\" (click)=\"selectStarsForRating(5, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٧۔مدى فهم واستيعاب المتعلم للنظم واللوائح داخل المؤسسة التعليمية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(6, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[6] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[6] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مدى فهم واستيعاب المتعلم للنظم واللوائح داخل المؤسسة التعليمية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[6]}\" (click)=\"selectStarsForRating(6, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٨۔الاهتمام والتركيز في المشاركة أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(7, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[7] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[7] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>الاهتمام والتركيز في المشاركة أثناء الحصة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[6]}\" (click)=\"selectStarsForRating(7, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          \n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>٩۔قدرة المتعلم على الاستيعاب الذهني أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(8, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[8] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[8] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على الاستيعاب الذهني أثناء الحصة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[7]}\" (click)=\"selectStarsForRating(8, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١٠۔قدرة المتعلم على القراءة بطلاقة مع الفهم الدقيق للمعاني</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(9, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[9] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[9] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على القراءة بطلاقة مع الفهم الدقيق للمعاني</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[8]}\" (click)=\"selectStarsForRating(9, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١١۔قدرة المتعلم على تنظيم الأفكار والتعبير عنها كتابياً</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(10, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[10] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[10] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على تنظيم الأفكار والتعبير عنها كتابياً</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[9]}\" (click)=\"selectStarsForRating(10, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١٢۔يُظهر المتعلم موقفاً مسؤولاً ولدية قدرة على اتخاذ القرار بالاعتماد على نفسة</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(11, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[11] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[11] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>يُظهر المتعلم موقفاً مسؤولاً ولدية قدرة على اتخاذ القرار بالاعتماد على نفسة</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[10]}\" (click)=\"selectStarsForRating(11, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١٣۔مدى الاستفادة من حصيلة المعارف والمهارات السابقة في الاختبار العملي</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(12, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[12] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[12] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مدى الاستفادة من حصيلة المعارف والمهارات السابقة في الاختبار العملي</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[11]}\" (click)=\"selectStarsForRating(12, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١٤۔مستوى تحصيل المتعلم دراسياً قياساً بأهداف المادة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(13, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[13] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[13] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مستوى تحصيل المتعلم دراسياً قياساً بأهداف المادة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[12]}\" (click)=\"selectStarsForRating(13, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١٥۔قدرة المتعلم على اجراء العمليات الحسابية بهدف حل المشكلات والتفكير الناقد</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(14, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[14] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[14] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على اجراء العمليات الحسابية بهدف حل المشكلات والتفكير الناقد</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[13]}\" (click)=\"selectStarsForRating(14, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>١٦۔مهارات الابتكار والتخطيط في أداء المشاريع</h3>\n                  </ion-col>\n                </ion-row>\n               \n                <!-- <span *ngFor=\"let star of stars_array;let i = index;\">\n                  <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[14]}\" (click)=\"selectStarsForRating(15, i)\"></ion-icon>\n                  [ngClass]=\"{'present': student.sheet['cem-'+ (i+1)] == '1', 'absent': student.sheet['cem-'+ (i+1)] == '0', 'delay': student.sheet['cem-'+ (i+1)] == '3', '': student.sheet['cem-'+ (i+1)] == 'undefined'}\"\n                </span> -->\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(15, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[15] === (5 - i)\" color=\"light\" [ngClass]=\"{'present': postData[15] === (5 - i)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <ion-col size=\"12\" align-self-center>\n                <div class=\"left-direction checkbox-container\">\n                  <div class=\"checkbox-icon\" *ngFor=\"let sem of getSemArray(); let i = index;\"\n                    (click)=\"showTeacherName(attendanceResponse.semteacher['sem-' + (i + 1)])\">\n                    <div class=\"sem-number-outer\"\n                      >\n                      {{i+1}}</div>\n                  </div>\n                </div>\n              </ion-col> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-textarea rows=\"6\" [(ngModel)]=\"noteMessage\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-textarea>\n            </ion-item>\n          </ion-card>\n        <!-- </ion-list> [ngClass]=\"{'att-not-marked': attendanceResponse.semteacher['sem-' + (i + 1)] == undefined ,'att-marked': attendanceResponse.semteacher['sem-' + (i + 1)] != undefined }\" -->\n      <!-- </ion-card> -->\n      <ion-button expand=\"block\" (click)=\"onClickSend()\">{{'contact.submit' | translate}}</ion-button>\n    </ion-content>\n  <!-- </ng-template>\n</ion-modal> -->");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kLqr":
/*!***************************************************!*\
  !*** ./src/app/create-class/create-class.page.ts ***!
  \***************************************************/
/*! exports provided: CreateClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassPage", function() { return CreateClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-class.page.html */ "vUv2");
/* harmony import */ var _create_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-class.page.scss */ "vrpw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







let CreateClassPage = class CreateClassPage {
    /**
     *
     * @param navCtrl Use for navigation between pages
     * @param translate used for translation service
     * @param viewCtrl For view dismiss
     * @param dataProvider Use for getting data from the API
     */
    constructor(navCtrl, translate, viewCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.dataProvider = dataProvider;
        this.class = {};
        this.lang = {};
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
    }
    ionViewWillEnter() {
        console.log('ionViewDidLoad CreateClassPage');
        if (localStorage.getItem("userloggedin")) {
            let user = JSON.parse(localStorage.getItem("userloggedin"));
            this.class['school_id'] = user.details.school_id;
            this.class['user_no'] = user.details.user_no;
        }
        else {
            this.viewCtrl.dismiss(false);
        }
    }
    getSeminars() {
        return Array(8);
    }
    registerClass() {
        this.dataProvider.showLoading();
        this.dataProvider.createNewCourse(this.class).then((response) => {
            this.dataProvider.hideLoading();
            if (response.session) {
                this.dataProvider.showToast(response.message);
                this.viewCtrl.dismiss(true);
            }
            else {
                this.dataProvider.showToast(response.message);
            }
        }).catch((err) => {
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(err);
        });
    }
    ngOnInit() {
    }
};
CreateClassPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
CreateClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-class',
        template: _raw_loader_create_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], CreateClassPage);



/***/ }),

/***/ "r+W6":
/*!*************************************************************************!*\
  !*** ./src/app/components/switch-account/switch-account.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".earlyLogin {\n  text-align: center;\n  margin: 0px auto;\n  width: 100%;\n}\n.earlyLogin ion-item {\n  font-size: 15px;\n  margin-bottom: 9px;\n}\n.earlyLogin ion-item .used-user {\n  font-size: 35px;\n  color: green;\n}\n.earlyLogin ion-item .unused-user {\n  font-size: 25px;\n  color: red;\n}\n.earlyLogin ion-item .addUser {\n  font-size: 25px;\n}\n.login-type .type-col .type-div {\n  font-size: 15px;\n}\n.login-type .col1 {\n  border-right: 1px solid #60b060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N3aXRjaC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDUjtBQUFRO0VBQ1ksZUFBQTtFQUNBLGtCQUFBO0FBRXBCO0FBRG9CO0VBQ1EsZUFBQTtFQUNBLFlBQUE7QUFHNUI7QUFEb0I7RUFDUSxlQUFBO0VBQ0EsVUFBQTtBQUc1QjtBQURvQjtFQUNJLGVBQUE7QUFHeEI7QUFJWTtFQUNRLGVBQUE7QUFEcEI7QUFJUTtFQUNRLCtCQUFBO0FBRmhCIiwiZmlsZSI6InN3aXRjaC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5lYXJseUxvZ2lue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZWQtdXNlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVudXNlZC11c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFVzZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi10eXBle1xyXG4gICAgICAgIC50eXBlLWNvbHtcclxuICAgICAgICAgICAgLnR5cGUtZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sMXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MGIwNjA7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "sdmF":
/*!*******************************************************************!*\
  !*** ./src/app/connect-new-message/connect-new-message.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-connect-new-message:host .subject {\n  border: 1px solid grey;\n  margin: 10px 0;\n  position: relative;\n}\napp-connect-new-message:host .send-btn {\n  height: 60px;\n}\napp-connect-new-message:host .close {\n  float: left;\n}\napp-connect-new-message:host .attachment {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-connect-new-message:host .attach-image {\n  width: 100%;\n  height: 100px;\n  text-align: right;\n}\napp-connect-new-message:host .attach-image img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nvbm5lY3QtbmV3LW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBRUk7RUFFSSxXQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDSSxtQkFBQTtFQUNSLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSSxVQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUVRO0VBQ0ksWUFBQTtBQUFaIiwiZmlsZSI6ImNvbm5lY3QtbmV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbm5lY3QtbmV3LW1lc3NhZ2U6aG9zdCB7XHJcbiAgICAuc3ViamVjdHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zZW5kLWJ0bntcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuY2xvc2VcclxuICAgIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC0tYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC5hdHRhY2gtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "v2nD":
/*!**********************************************!*\
  !*** ./src/app/service/data/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database/database.service */ "HbOQ");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loader/loader.component */ "vPOg");
/* harmony import */ var _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/rate-app/rate-app.component */ "hyCl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/switch-account/switch-account.component */ "VPdO");
/* harmony import */ var _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/edit-student-profile/edit-student-profile.component */ "GhJt");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var _student_data_student_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../student-data/student-data.service */ "TgDs");





//import { HttpParams, Http, Headers } from '@angular/common/http';


// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';





//import { EditCalssPage } from '../../common-modal/edit-calss/edit-calss.page';
// import { ViewClassNotesPage } from '../../common-modal/view-class-notes/view-class-notes.page';








const env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
let DataService = class DataService {
    /**
      * Represents a Data provider from API.
      * @constructor
      * @param {Http} http - for making http request.
      * @param {AlertController} alertCtrl - Alert popup.
      * @param {LoadingController} loadingCtrl - Loading popup.
      * @param {ToastController} toastCtrl - show toast
    */
    constructor(httpClient, http, alertCtrl, platform, loadingCtrl, toastCtrl, translate, modalController, network, popoverController, dbProvider, file, studentService, transfer, filePath, appRate, diagnostic) {
        this.httpClient = httpClient;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.modalController = modalController;
        this.network = network;
        this.popoverController = popoverController;
        this.dbProvider = dbProvider;
        this.file = file;
        this.studentService = studentService;
        this.transfer = transfer;
        this.filePath = filePath;
        this.appRate = appRate;
        this.diagnostic = diagnostic;
        this.lang = {};
        this.mediaDirectory = '';
        this.uploadProgress = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](0);
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.language = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.platform.ready().then(() => {
            setTimeout(res => {
                this.translate.get("alertmessages").subscribe((res) => {
                    this.lang = res;
                    // console.log(this.translate.instant('alertmessages'))
                });
            }, 2000);
        });
        this.language.subscribe(res => {
            console.log('res>>>>', res);
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code = res;
        });
    }
    /**
     * This is a user rating popup
     * @return rating in int
     * @param ev - event
     */
    presentRatingPopover(lang, note, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('call');
            const popover = yield this.popoverController.create({
                component: _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_8__["RateAppComponent"],
                // event: ev,
                translucent: false,
                mode: "ios",
                cssClass: 'ratePopup',
                backdropDismiss: false,
                componentProps: { lang: lang, data: note }
            });
            yield popover.present();
            popover.onDidDismiss().then((response) => {
                // console.log('call',response);
                if (response.data) {
                    callback(response.data);
                }
                else {
                    callback(false);
                }
            });
        });
    }
    editClassModal(course, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(course);
            //   const modal = await this.modalController.create({
            //   component: EditCalssPage,
            //   cssClass: 'my-custom-class',
            //   componentProps: {couerse:course}
            // });
            // await modal.present();
            // modal.onDidDismiss().then(res=>{
            //   callback(res);
            // })
        });
    }
    viewNotes(data, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //   const modal = await this.modalController.create({
            //   component: ViewClassNotesPage,
            //   cssClass: 'my-custom-class',
            //   componentProps: {data:data,state:state}
            // });
            // await modal.present();
        });
    }
    /**
    * submit rating to playstore
    * @param rating - int rating value
    */
    submitRating(rating) {
        console.log(rating);
    }
    showRatePrompt(lang) {
        this.appRate.preferences = Object.assign(Object.assign({}, this.appRate.preferences), { storeAppURL: {
                ios: '< my_app_id >',
                android: 'market://details?id=com.webapp.attendance'
            }, simpleMode: true, useLanguage: lang, callbacks: {
                onRateDialogShow: function (callback) {
                    console.log('User Prompt for Rating');
                },
                onButtonClicked: function (buttonIndex) {
                    console.log('Selected Button Index', buttonIndex);
                }
            } });
        // this.appRate.preferences.openUrl = function(url) {
        // window.open(url, '_system', 'location=yes');
        // };
        this.appRate.promptForRating(true);
    }
    switchAccount(ev, lang) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_10__["SwitchAccountComponent"],
                // event: ev,
                translucent: false,
                // mode:"ios",
                cssClass: 'switch-account',
                backdropDismiss: true,
                componentProps: { lang: lang }
            });
            yield popover.present();
            popover.onDidDismiss().then((response) => {
                // console.log('call',response);
                // if(response.data){
                //   this.submitRating(response.data)
                // }else{
                //   this.showToast(lang.no_rating);
                // }
            });
        });
    }
    editStudentClass(ev, student, classes, user, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_11__["EditStudentProfileComponent"],
                event: ev,
                translucent: false,
                mode: "ios",
                cssClass: 'edit-student',
                backdropDismiss: true,
                componentProps: { student: student, classes: classes }
            });
            yield popover.present();
            popover.onDidDismiss().then((response) => {
                // console.log('call',response);
                if (response.data) {
                    if (response.data.deleteClass) {
                        let deleteData = {
                            sid: response.data.student.sid,
                            cid: response.data.student.cid,
                            user_no: user.user_no,
                            school_id: user.school_id,
                            session_id: user.session_id
                        };
                        this.deleteStudentClass(deleteData, res => {
                            callback(res);
                        });
                    }
                    else {
                        let updateData = {
                            sid: response.data.student.sid,
                            cid: response.data.student.cid,
                            student_name: response.data.studentName,
                            class_id: response.data.studentSemester,
                            user_no: user.user_no,
                            school_id: user.school_id,
                            session_id: user.session_id
                        };
                        this.updateStudentProfile(updateData, res => {
                            callback(res);
                        });
                    }
                }
            });
        });
    }
    deleteStudentClass(data, callback) {
        console.log('delete', data);
        this.postRequest(data, 'deleteStudentClass').then((response) => {
            if (response) {
                this.showToast(response.msg);
                callback(response);
            }
        }).catch((error) => {
            console.log(error);
            //this.showToast(response.message);
        });
    }
    deleteStudent(data, callback) {
        console.log('delete', data);
        this.postRequest(data, 'deleteStudent').then((response) => {
            if (response) {
                this.showToast(this.lang.delete_student_success_msg);
                callback(response);
            }
        }).catch((error) => {
            console.log(error);
            //this.showToast(response.message);
        });
    }
    deleteTeacher(data, callback) {
        console.log('delete', data);
        this.postRequest(data, 'deleteTeacher').then((response) => {
            if (response) {
                this.showToast(response.msg);
                callback(response);
            }
        }).catch((error) => {
            console.log(error);
            //this.showToast(response.message);
        });
    }
    deleteParent(data, callback) {
        console.log('delete', data);
        this.postRequest(data, 'deleteParent').then((response) => {
            if (response) {
                this.showToast(response.msg);
                callback(response);
            }
        }).catch((error) => {
            console.log(error);
            //this.showToast(response.message);
        });
    }
    /*-----------delete user except parent,student and teacher----------*/
    deleteUser(data, callback) {
        this.postRequest(data, 'deleteUser').then((response) => {
            if (response) {
                this.showToast(response.msg);
                callback(response);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    deleteNote(data, callback) {
        console.log('delete', data);
        this.postRequest(data, 'deleteNotes').then((response) => {
            if (response) {
                this.showToast(response.msg);
                callback(response);
            }
        }).catch((error) => {
            console.log(error);
            //this.showToast(response.message);
        });
    }
    updateStudentProfile(data, callback) {
        console.log('update', data);
        this.postRequest(data, 'updateStudentProfile').then((response) => {
            if (response) {
                callback(response);
                this.showToast(this.lang.edit_student_success_msg);
            }
        }).catch((error) => {
            console.log(error);
            //this.showToast(response.message);
        });
    }
    updateTeacherProfile(data, callback) {
        console.log('update', data);
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json');
        data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            body = body.append(key, data[key]);
        });
        body['class'] = [];
        Object.keys(data.class).map((key) => {
            Object.keys(data.class[key]).map((sid) => {
                body = body.append('classes' + '[' + key + ']' + '[' + sid + ']', data.class[key][sid]);
            });
        });
        this.httpClient.post(env.serverURL + 'updateTeacherProfile', body, { headers: header }).subscribe((response) => {
            if (response) {
                console.log('tescherList', response);
                if (response.response == false) {
                    callback({ session: false, message: response.msg });
                }
                else if (response.response == true) {
                    // this.dbProvider.insertClasses(response.courses);
                    callback({ session: true, data: response.msg });
                }
                else {
                    callback(response.msg);
                }
            }
            else {
            }
        }, (error) => {
            console.log(error);
            if (error.message != undefined && error.message != '' && error.message != null) {
                callback(error.message);
            }
            else {
                callback(this.lang.usnexpectedError);
            }
        });
    }
    /* --------------update users profile-------newcode 15/11/21 */
    updateUserProfile(data, callback) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('content-type', 'application/json');
        data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            body = body.append(key, data[key]);
        });
        // body['class']=[];
        // Object.keys(data.class).map((key)=>{
        //   Object.keys(data.class.key).map((sid)=>{
        //     body = body.append('classes'+'['+ key+']'+'['+sid+']' , data.class[key][sid]);
        //   })
        // })
        this.httpClient.post(env.serverURL + 'updateNewUser', body, { headers: header }).subscribe((response) => {
            if (response) {
                console.log('usersList', response);
                if (response.response == false) {
                    callback({ session: false, message: response.msg });
                }
                else if (response.response == true) {
                    // this.dbProvider.insertClasses(response.courses);
                    callback({ session: true, data: response.msg });
                }
                else {
                    callback(response.msg);
                }
            }
            else {
            }
        }, (error) => {
            console.log(error);
            if (error.message != undefined && error.message != '' && error.message != null) {
                callback(error.message);
            }
            else {
                callback(this.lang.usnexpectedError);
            }
        });
    }
    /**
     * This is a user defined loader
     * @param ev - event
     */
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle'
                // mode:"ios"
            });
            return yield this.popOver.present();
        });
    }
    closePopup() {
        if (this.popOver)
            this.popOver.dismiss();
    }
    /**
     * This is a toast message function
     * @param message - string of message to be shown
     */
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.toastCtrl.create({
                message: message,
                position: 'bottom',
                cssClass: 'toastClass',
                duration: 3000
            });
            yield alert.present();
        });
    }
    /** ALert message popup.
     * @param {String} error - Error message to display
    */
    errorALertMessage(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'تحذير',
                message: error,
                backdropDismiss: false,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    /** ALert message popup.
     * @param {String} error - Error message to display
    */
    msgALertMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'معلومات',
                message: msg,
                backdropDismiss: false,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    /** Show Loading popup. */
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentPopover('');
        });
    }
    /** Hide loading popup. */
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(res => {
                this.closePopup();
                // this.loader.dismiss();
                this.popOver.dismiss();
            }, 1000);
        });
    }
    /** Search all user from API.
     * @returns Array of users list or error
    */
    searchUser(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'search_user').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    searchAllUser(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'search_user_all').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    /* searchUser except teacher,parent and student date 12/11/2021 */
    newUserSearch(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'new_user_search').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    markBulletinRead(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'markBulletinRead').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    deleteBulletin(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'delete_bulletins').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    closeBulletin(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'closed_bulletins').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    reOpenBulletin(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'reOpenBulletin').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    getBulletinDetails(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'bulletins_details').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    getStudentReports(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getStudentReports').then((response) => {
                if (response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    submitStudentReports(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'submitStudentReports').then((response) => {
                if (response.success) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    removeStudentReportByType(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'removeStudentReportByType').then((response) => {
                if (response.success) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    printAllReports(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'printAllReports').then((response) => {
                if (response.success) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    //==========added on 28/12/21 for print class notes as pdf=========
    printAllClassNotes(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, data.is_multi ? 'printMultipleClassNotes' : 'printClassNotes').then((response) => {
                // this.postRequest(data, 'printClassNotes').then((response: any) => {
                if (response.success) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    getBulletins(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getBulletins').then((response) => {
                if (response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    editAbsentNotes(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'editAbsentNotes').then((response) => {
                if (response) {
                    resolve({ session: true, data: response, message: response.mg });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    shareBulletins(data) {
        return new Promise((resolve, reject) => {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            let body = this.makeObjectToUrlParams(data);
            Object.keys(data.users).map((key) => {
                console.log('key', key);
                body = body.append('shareto_user_no' + '[' + key + ']', data.users[key]);
            });
            // console.log(body);
            this.httpClient.post(env.serverURL + 'shareBulletins', body, { headers: header }).subscribe((response) => {
                if (response) {
                    resolve({ session: true, data: response.response, message: response.msg });
                }
                else {
                    reject(response.msg);
                }
            }, (error) => {
                console.log(error);
            });
            // console.log(data);
            // this.postRequest(data, 'shareBulletins').then((response: any) => {
            //   if (response) {
            //       resolve({ session: true, data: response.response,message:response.msg});
            //   } else {
            //       reject(response.msg)
            //   }
            // }).catch((error) => {
            //   console.log(error);
            // })
        });
    }
    commentBulletins(data) {
        return new Promise((resolve, reject) => {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            let body = this.makeObjectToUrlParams(data);
            this.httpClient.post(env.serverURL + 'commentBulletins', body, { headers: header }).subscribe((response) => {
                if (response) {
                    resolve({ session: true, data: response.response, message: response.msg });
                }
                else {
                    reject(response.msg);
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
    /** Search all student of School from API.
   * @returns Array of users list or error
  */
    serachStudent(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'search_student').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    searTeacher(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getTeacherWithPagging').then((response) => {
                if (response) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    /** Search all parent of School from API.
 * @returns Array of users list or error
*/
    serachParent(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'serachParent').then((response) => {
                if (response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    /** Get school list from API.
     * @returns Array of school list or error
    */
    getSchool(country_code) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    let url = env.serverURL + 'getSchoolsHavingMaterials/' + ((country_code && typeof country_code !== 'undefined') ? '?country_code=' + country_code : '');
                    this.httpClient.post(url, country_code, { headers: header }).subscribe((response) => {
                        if (response.success) {
                            resolve(response.schools);
                        }
                        else {
                            reject("Server is not responding");
                        }
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /** Get teacher list of a perticular school  from API.
   * @returns Array of teacher list or error
  */
    getTeachers(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getAllTeachers').then((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        // this.dbProvider.insertClasses(response.courses);
                        resolve({ session: true, data: response.profile });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    // this.dbProvider.getClasses().then((classes) => {
                    //   resolve({ session: true, data: classes });
                    // }).catch((error) => {
                    //   reject(error);
                    // })
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /* get all the users except teacher studet and parent */
    getAllUsers(users) {
        return new Promise((resolve, reject) => {
            this.postRequest(users, 'getSchoolUsersList').then((response) => {
                if (response) {
                    console.log('alluserslist', response);
                    if (response.session == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.session == true) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** update teacher list of a perticular class of a school .
     * @returns updation status
    */
    updateTeacher(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            body = body.append("class_id", data.class_id);
            body = body.append("school_id", data.school_id);
            body = body.append("user_no", data.user_no);
            body = body.append("lang_code", data.lang_code);
            body['teachersList'] = [];
            let obj = [];
            for (let i = 0; i < data.teachersList.length; i++) {
                // code...
            }
            Object.keys(data.teachersList).map((key) => {
                console.log('key', key);
                Object.keys(data.teachersList[key]).map((sid) => {
                    console.log('ap', sid);
                    body = body.append('teachersList' + '[' + key + ']' + '[' + sid + ']', data.teachersList[key][sid]);
                });
            });
            // console.log(body);
            this.httpClient.post(env.serverURL + 'updateTeachers', body, { headers: header }).subscribe((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        // this.dbProvider.insertClasses(response.courses);
                        resolve({ session: true, data: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    // this.dbProvider.getClasses().then((classes) => {
                    //   resolve({ session: true, data: classes });
                    // }).catch((error) => {
                    //   reject(error);
                    // })
                }
            }, (error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** update teacher list of a perticular class of a school .
     * @returns updation status
    */
    createBulletins(data) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json');
        data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'createBulletins', data, {
            responseType: 'arraybuffer',
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(event => this.getStatusMessage(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(message => message), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
    }
    createclassNotes(data) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json');
        data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'createNotes', data, {
            responseType: 'arraybuffer',
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(event => this.getStatusMessage(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(message => message), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
    }
    getStatusMessage(event) {
        let status;
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                status = Math.round(100 * event.loaded / event.total);
                this.uploadProgress.next(status);
                this.events.emit(status);
                return status;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return `Done`;
        }
    }
    // createBulletins(data): Promise<any> {
    //   return new Promise((resolve, reject) => {
    //       // console.log(data['FormData']);
    //      let header = new HttpHeaders();
    //         header.append('Content-Type', 'application/json');
    //        //   let body = new HttpParams();
    //        // body= body.append("title", data.title);
    //        // body= body.append("school_id", data.school_id);
    //        // body= body.append("user_no", data.user_no);
    //        // body['files']=<any>[];
    //        //   Object.keys(data.files).map((key) => {
    //        //     console.log('key',key);
    //        //       Object.keys(data.files[key]).map((k) => {
    //        //         console.log('key',key);
    //        //          body=body.append('files'+'['+ key+']'+'['+k+']', data.files[key][k]);
    //        //      })
    //        //  })
    //        //       console.log(body);
    //     this.httpClient.post( env.serverURL + 'createBulletins',data, { headers: header }).subscribe((response: any) => {
    //       if (response) {
    //        console.log('tescherList',response);
    //          if (response.success==true) {
    //           resolve({ session: true, data: response.msg});
    //         } else {
    //           reject(response.msg)
    //         }
    //       } else {
    //       }
    //     },(error) => {
    //       console.log(error);
    //       if (error.message != undefined && error.message != '' && error.message != null) {
    //         reject(error.message)
    //       } else {
    //         reject(this.lang.usnexpectedError)
    //       }
    //     });
    //   })
    // }
    /** delete a class from a school.
     * @returns status of deletion
    */
    deleteClass(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'deleteClass').then((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        // this.dbProvider.insertClasses(response.courses);
                        resolve({ session: true, data: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    // this.dbProvider.getClasses().then((classes) => {
                    //   resolve({ session: true, data: classes });
                    // }).catch((error) => {
                    //   reject(error);
                    // })
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    openPdf(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'check_user_plan').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    openStudentReport(url) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            this.http.get(url, { headers: header }).subscribe((res) => {
                resolve(res);
            }, e => {
                resolve(e);
            });
        });
    }
    getPlan(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getPlan').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getUserPlan(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getUserPlan').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    registerTeacher(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'createNewTeacher').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /*=================create new user except teacher,parent and student======================*/
    registerNewUser(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'addNewUser').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    subscribePlan(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'subscribe_plans').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    purchase(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'purchase').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }
                else {
                    reject(response);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get parent list of a perticular school who recently registered on app  from API.
     * @returns Array of parent list or error
    */
    getRequestedParents(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getNewParents').then((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        // this.dbProvider.insertClasses(response.courses);
                        resolve({ session: true, data: response.parents });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    // this.dbProvider.getClasses().then((classes) => {
                    //   resolve({ session: true, data: classes });
                    // }).catch((error) => {
                    //   reject(error);
                    // })
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getAllParents(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getAllParents').then((response) => {
                if (response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** take action on requested registered parents.
     * @returns status of action
     * @param parent id
     * @param school id
  
    */
    acceptRequestedParents(data) {
        return new Promise((resolve, reject) => {
            //console.log('requtedprrr=>>>',data);
            this.postRequest(data, 'acceptParentRequest').then((response) => {
                if (response) {
                    if (response.response == false) {
                        resolve({ session: false });
                    }
                    else {
                        resolve({ session: true });
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    changeParentStatus(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'changeParentStatus').then((response) => {
                if (response) {
                    if (response.response == false) {
                        resolve({ session: false, msg: response.msg });
                    }
                    else {
                        resolve({ session: true, msg: response.msg });
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** delete requested registered parents.
   * @returns status of action
   * @param parent id
   * @param school id

  */
    deleteRequestedParents(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'deleteParentRequest').then((response) => {
                if (response) {
                    if (response.response == false) {
                        resolve({ session: false });
                    }
                    else {
                        resolve({ session: true });
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get E-Learning categories list from API.
    * @returns Array of category list or error
   */
    getElearningMaterials(schoolId, country_code) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    let url = env.serverURL + 'getElearningMaterials/' + schoolId + ((country_code && typeof country_code !== 'undefined') ? '?country_code=' + country_code : '');
                    this.httpClient.get(url, { headers: header }).subscribe((response) => {
                        if (response.success) {
                            resolve(response.materials);
                        }
                        else {
                            reject("Server is not responding");
                        }
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    getShareLink(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    let url = env.serverURL + 'getAppShareLink?' + 'lang=en';
                    this.httpClient.get(url, { headers: header }).subscribe((response) => {
                        if (response) {
                            resolve(response);
                        }
                        else {
                            reject("Server is not responding");
                        }
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /** Get E-Learning material data from API.
      * @returns Array of material data or error
     */
    getMaterialDetails(materialId) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    this.httpClient.get(env.serverURL + 'getMaterialDetails/' + materialId, { headers: header }).subscribe((response) => {
                        if (response.success) {
                            resolve(response.material);
                        }
                        else {
                            reject("Server is not responding");
                        }
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /** Get ads on login page.
     * @returns Array of ads or error
    */
    getAds() {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    this.httpClient.get(env.serverURL + 'getAds', { headers: header }).subscribe((response) => {
                        resolve(response);
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    /** Get news from API for news page.
     * @returns Array of news or error
    */
    getNews() {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    this.httpClient.get(env.serverURL + 'getNews', { headers: header }).subscribe((response) => {
                        if (response.success) {
                            resolve(response.news);
                        }
                        resolve(response);
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /** Get news from API with paging.
     * @param {number} start - starting point of news list
     * @param {number} newsPerPage - how many news in one page
     * @param {object} userDeatils logged in user details
     * @param {char} countrycode - to get news of current locaion
     * @returns Array of News as per location or error
    */
    getNewsJoin(start, newsPerPage, userDeatils, countryCode) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/json');
                    let url = '';
                    if (userDeatils) {
                        url = env.serverURL + 'getNewsjoin/' + start + '/' + newsPerPage + '/desc/' + userDeatils.user_no;
                    }
                    else {
                        url = env.serverURL + 'getNewsjoin/' + start + '/' + newsPerPage + '/desc';
                    }
                    if (countryCode && typeof countryCode !== 'undefined') {
                        url = url + '?code=' + countryCode;
                    }
                    this.httpClient.get(url, { headers: header }).subscribe((response) => {
                        if (response.success) {
                            if (response.news.length > 20) {
                                this.dbProvider.insertNews(response.news.slice(0, 20));
                            }
                            else {
                                this.dbProvider.insertNews(response.news);
                            }
                            resolve(response.news);
                        }
                        resolve(response);
                    }, (error) => {
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    this.dbProvider.getNews().then((news) => {
                        resolve(news);
                    }).catch((err) => {
                        reject(err);
                    });
                }
            });
        });
    }
    /**
     * Like the news post
     * @param data user_no, news_id, session_id
     */
    likeNewsPost(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'likeNewsPost').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Dislike the news post
     * @param data user_no, news_id, session_id
     */
    dislikeNewsPost(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'dislikeNewsPost').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, data: response.courses });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get courses from API to show on classlist page.
     * @param {Object} data - contains user_no, school_id, session_id
     * @returns list of courses or error
    */
    getCourses(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getCourses/' + data.school_id).then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        this.dbProvider.insertClasses(response.courses);
                        resolve({ session: true, data: response.courses, linkData: response.activeLink });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    this.dbProvider.getClasses().then((classes) => {
                        resolve({ session: true, data: classes });
                    }).catch((error) => {
                        reject(error);
                    });
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get courses from API to show on classlist page.
    * @param {Object} data - contains user_no, school_id, session_id
    * @returns list of courses or error
   */
    getTeachersClass(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getTeachersClass/' + data.school_id).then((response) => {
                if (response) {
                    if (response.success) {
                        resolve({ session: true, data: response.courses });
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get follow up fields.
   * @param {Object} data - contains user_no, school_id, session_id
   * @returns list of courses or error
  */
    getFollowupFields(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getFollowupFields').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve({ session: true, data: response.result });
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** delete fields.
   * @param {Object} data - contains user_no, school_id, session_id
   * @returns list of courses or error
  */
    deleteFollowupFields(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'deleteFollowupFields').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve({ session: true, data: response.result });
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getSelectedCourses(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getSelectedCourses/' + data.school_id).then((response) => {
                if (response) {
                    if (response.success) {
                        resolve({ session: true, data: response.selectedCourses });
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get courses from API to show on classlist page.
     * @param {Object} data - contains user_no, school_id, session_id
     * @returns list of courses or error
    */
    setTeachersClass(data) {
        return new Promise((resolve, reject) => {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            Object.keys(data).forEach(function (key) {
                body = body.append(key, data[key]);
            });
            // body['updates']=[];
            Object.keys(data.updates).map((key) => {
                Object.keys(data.updates[key]).map((sid) => {
                    body = body.append('courcesData' + '[' + key + ']' + '[' + sid + ']', data.updates[key][sid]);
                });
            });
            this.httpClient.post(env.serverURL + 'setTeachersClass/' + data.school_id, body, { headers: header }).subscribe((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        resolve({ session: true, data: response.msg });
                    }
                    else {
                        resolve(response.msg);
                    }
                }
                else {
                }
            }, (error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** set inpu5t field for follow up student.
   * @param {Object} data - contains user_no, school_id, session_id
   * @returns list of courses or error
  */
    saveFollowupFields(data) {
        return new Promise((resolve, reject) => {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            Object.keys(data).forEach(function (key) {
                if (key != 'field')
                    body = body.append(key, data[key]);
            });
            // body['updates']=[];
            Object.keys(data.field).map((key) => {
                Object.keys(data.field[key]).map((sid) => {
                    body = body.append('field' + '[' + key + ']' + '[' + sid + ']', data.field[key][sid]);
                });
            });
            this.httpClient.post(env.serverURL + 'saveFollowupFields', body, { headers: header }).subscribe((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.success == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success == true) {
                        resolve({ session: true, data: response.result });
                    }
                    else {
                        resolve(response.msg);
                    }
                }
                else {
                }
            }, (error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** get all seminars and their total present absent total student
    
    */
    getSeminarClassList(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'getSeminarClassList/' + data.school_id).then((response) => {
                if (response) {
                    if (!response.response) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** reorder all classes
  
  */
    reorderClasses(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/x-www-form-urlencoded');
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            body = body.append("school_id", data.school_id);
            body = body.append("user_no", data.user_no);
            body = body.append("lang_code", data.lang_code);
            Object.keys(data.list).map((key) => {
                Object.keys(data.list[key]).map((sid) => {
                    body = body.append('list[' + key + '][' + sid + ']', data.list[key][sid]);
                });
            });
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'reorderClasses', body, { headers: header }).subscribe((res) => {
                let response = res;
                if (response.success == true) {
                    resolve(true);
                }
                else {
                    // this.errorALertMessage(response.msg);
                    resolve(false);
                }
            }, (error) => {
                console.log(error);
                resolve(false);
            });
        });
    }
    /** submit email for forgot password
    */
    submitEmail(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'forgot_password').then((response) => {
                if (response) {
                    if (!response.response) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Check OTP for sorgot password
    */
    checkOtp(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'checkOtp').then((response) => {
                if (response) {
                    if (!response.response) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** reset pass. for sorgot password
    */
    resetPassword(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'reset_password').then((response) => {
                if (response) {
                    if (!response.response) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** get all student of a school
    */
    getSchoolStudents(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'get_school_stu').then((response) => {
                if (response) {
                    if (!response.response) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** get all student of a school
  */
    getSchoolUsers(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'get_school_users').then((response) => {
                if (response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                reject(error.message);
            });
        });
    }
    getAllSchoolUsers(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.postRequest(data, 'get_school_users_all').then((response) => {
                if (response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                reject(error.message);
            });
        });
    }
    todayDashboard(data) {
        return new Promise((resolve, reject) => {
            // console.log(data);
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    this.postRequest(data, 'todayDashboard/' + data.school_id).then((response) => {
                        if (response) {
                            if (!response.response) {
                                resolve({ session: false, message: response.msg });
                            }
                            else if (response.response) {
                                resolve({ session: true, data: response.response });
                                this.studentService.setStaticalData(data.user_no, response.response);
                            }
                            else {
                                reject(response.msg);
                            }
                        }
                        else {
                            reject(response.msg);
                        }
                    }).catch((error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    this.studentService.getOfflineStatical(data.user_no, res => {
                        resolve({ session: true, data: res });
                    });
                }
            });
        });
    }
    /** Register new course.
    * @param {Object} data - contains user_no, school_id, code, name, desc, semno
    * @returns Success or error msg
   */
    createNewCourse(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'createCourse').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Register new teacher.
       * @param {Object} data - contains user_no, school_id, Teacher Id, teacher name, teacher password
       * @returns Success or error msg
      */
    registerNewTeacher(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'registerNewTeacher').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(response.msg);
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    registerNewParent(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'registerNewParent').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(response.msg);
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    createNewParent(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'createNewParent').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(response.msg);
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getAllRules(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getAllRules').then((response) => {
                if (response) {
                    if (response.details) {
                        resolve(response.details);
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    //  reject(this.lang.usnexpectedError)
                }
            });
        });
    }
    /** Register new Student.
       * @param {Object} data - contains user_no, school_id, name, student_id
       * @returns Success or Error msg
      */
    registerStudent(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'registerStudent').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    this.dbProvider.getClasses().then((classes) => {
                        resolve({ session: true, data: classes });
                    }).catch((error) => {
                        reject(error);
                    });
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Update course description
     * @param data user_no, session_id, cid, course object
     */
    updateCourseDesc(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    headers.set('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("cid", data.cid);
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("lang_code", data.lang_code);
                    body = body.append('course[name]', data.course.name);
                    body = body.append('course[desc]', data.course.desc);
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + '/manageCourse', body, { headers }).subscribe((res) => {
                        let response = res;
                        if (!response['session']) {
                            resolve({ session: false, message: response['msg'] });
                        }
                        else if (response['success']) {
                            resolve({ session: true, data: response['courses'] });
                        }
                        else {
                            reject(response['msg']);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
     * Get holiday list from backend
     * @param data user_no, school_id, session_id
     */
    getHolidays(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getHolidays/' + data.school_id).then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    resolve(false);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get student list according to course.
     * @param {Object} data - date, user_no, session_id, course_id, school_id
     * @returns list of students or error
    */
    getClassStudentList(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getStudents/' + data.course_id).then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        this.dbProvider.insertStudentList(response.students, 5);
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    if (localStorage.getItem("classlocalatt")) {
                        let attendance = JSON.parse(localStorage.getItem("classlocalatt"));
                        if (attendance[data.course_id]) {
                            resolve({ session: true, data: attendance[data.course_id] });
                        }
                        else {
                            this.dbProvider.getStudentList(data.course_id).then((students) => {
                                resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [] } });
                            }).catch((error) => {
                                reject(error);
                            });
                        }
                    }
                    else {
                        this.dbProvider.getStudentList(data.course_id).then((students) => {
                            resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [] } });
                        }).catch((error) => {
                            reject(error);
                        });
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get student list according to course.
     * @param {Object} data - date, user_no, session_id, course_id, school_id
     * @returns list of students or error
    */
    getFollowUpStudentList(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getFollowUpStudentList/' + data.course_id).then((response) => {
                if (!response.session) {
                    resolve({ session: false, message: response.msg });
                }
                else if (response.success) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Delete student marks according to course and user id with selected date.
     * @param {Object} data - date, user_no, session_id, course_id, school_id
     * @returns list of students or error
    */
    deleteFollowUpStudentList(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'deleteFollowUpStudentList/' + data.course_id).then((response) => {
                if (!response.session) {
                    resolve({ session: false, message: response.msg });
                }
                else if (response.success) {
                    resolve({ session: true, data: response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get student PDF.
   * @param {Object} data - date, user_no, session_id, course_id, school_id
   * @returns list of students or error
  */
    getMarksReport(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getMarksReport/' + data.course_id).then((response) => {
                if (response.response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getStudentReport(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'student_report_new_excel').then((response) => {
                if (response.response) {
                    resolve({ session: true, data: response.response });
                }
                else {
                    reject(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get delay student list according to course.
     * @param {Object} data - date, user_no, session_id, course_id, school_id
     * @returns list of students or error
    */
    getDelayClassStudentList(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getStudents_delay/' + data.course_id).then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        this.dbProvider.insertStudentList(response.students, response.delay_rule);
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    if (localStorage.getItem("delayclasslocalatt")) {
                        let attendance = JSON.parse(localStorage.getItem("delayclasslocalatt"));
                        if (attendance[data.course_id]) {
                            resolve({ session: true, data: attendance[data.course_id] });
                        }
                        else {
                            this.dbProvider.getStudentList(data.course_id).then((students) => {
                                if (students.length > 0) {
                                    resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: students[0].delay_rule } });
                                }
                                else {
                                    resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: 5 } });
                                }
                            }).catch((error) => {
                                reject(error);
                            });
                        }
                    }
                    else {
                        this.dbProvider.getStudentList(data.course_id).then((students) => {
                            if (students.length > 0) {
                                resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: students[0].delay_rule } });
                            }
                            else {
                                resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: 5 } });
                            }
                        }).catch((error) => {
                            reject(error);
                        });
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get student details.
     * @param {Object} data - user_no, session_id, cid, date, sid
     * @returns Student details or error
    */
    getStudentDetails(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    this.postRequest(data, 'viewStudent/' + data.sid).then((response) => {
                        if (response) {
                            if (!response.session) {
                                reject(response.msg);
                            }
                            else if (response.success) {
                                resolve({ session: true, data: response.details });
                                let a = response.details;
                                let data = [];
                                data.push(a);
                            }
                            else {
                                reject(response.msg);
                            }
                        }
                        else {
                            reject(this.lang.networkNotWorking);
                        }
                    }).catch((error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
            });
        });
    }
    /** Get notes of the student.
     * @param {Object} data - user_no, session_id, cid, date, sid
     * @returns List of notes or error
    */
    getStudentNotes(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getStudentNote/' + data.sid).then((response) => {
                if (response) {
                    if (response.status) {
                        resolve(response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    createNotes(data) {
        return new Promise((resolve, reject) => {
            let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            Object.keys(data).forEach(function (key) {
                body = body.append(key, data[key]);
            });
            body['studentIds'] = [];
            Object.keys(data.studentIds).map((key) => {
                Object.keys(data.studentIds[key]).map((sid) => {
                    body = body.append('studentId' + '[' + key + ']' + '[' + sid + ']', data.studentIds[key][sid]);
                });
            });
            this.httpClient.post(env.serverURL + 'createNotes', body, { headers: header }).subscribe((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        resolve({ session: true, data: response.msg });
                    }
                    else {
                        resolve(response.msg);
                    }
                }
                else {
                }
            }, (error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getClassNotes(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'studentClassNotes').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response.response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getAllClassNotes(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'all_classNotes').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response.response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    getAllWarning(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getWarningReport').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response.response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    printWarning(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getWarningReportPdf').then((response) => {
                if (response) {
                    if (response.response) {
                        resolve(response.response);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Get notification of the school.
     * @param {Object} data- user_no, school_id, session_id
     * @returns list of notifications or error
     */
    getNotifications(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getNotifications/' + data.school_id).then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        this.dbProvider.insertPrivateMessages(response.list);
                        resolve({ session: true, data: response.list });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    this.dbProvider.getPrivateMessages().then((messages) => {
                        resolve({ session: true, data: messages });
                    });
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * delete user notification
     * @param data user_no, nid, session_id
     */
    deleteNotification(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'deleteNotifications').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Attendance mark post function
     * @param data user_no, session_id, cid, date, school_id, sheet
     */
    markAttendance(data) {
        // console.log(data);
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("cid", data.cid);
                    body = body.append("date", data.date);
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("lang_code", data.lang_code);
                    let index = 0;
                    Object.keys(data.removal_sheet).map((key) => {
                        body = body.append('removal_sheet[' + index + '][sid]', data.removal_sheet[key].sid);
                        body = body.append('removal_sheet[' + index + '][sem]', data.removal_sheet[key].sem);
                        index++;
                    });
                    Object.keys(data.sheet).map((key) => {
                        Object.keys(data.sheet[key]).map((sid) => {
                            body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                        });
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveAttendance/' + data.school_id, body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
   * Attendance mark post function
   * @param data user_no, session_id, cid, date, school_id, sheet
   */
    submitMarks(data, marksheet) {
        // console.log(data);
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("cid", data.course_id);
                    body = body.append("date", data.date);
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("lang_code", data.lang_code);
                    Object.keys(marksheet).map((key) => {
                        Object.keys(marksheet[key]).map((sid) => {
                            body = body.append('marksheet[' + key + '][' + sid + ']', marksheet[key][sid]);
                        });
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveStudentMarks/' + data.school_id, body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
    * Delay attendance mark post function
    * @param data user_no, session_id, cid, date, school_id, sheet
    * @param submittedByUser submitted by which user 1 - admin, 2- moderator
    */
    markDelayAttendance(data, submittedByUser) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("cid", data.cid);
                    body = body.append("date", data.date);
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("lang_code", data.lang_code);
                    Object.keys(data.sheet).map((key) => {
                        Object.keys(data.sheet[key]).map((sid) => {
                            body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                        });
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'ManroxTesting2/' + data.school_id + '/' + submittedByUser, body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (response.success == true) {
                            resolve(true);
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
     * Absence save note
     * @param data sid, cid, date, note, user_no, session_id
     */
    saveAbsenceNote(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'saveNote').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg, res: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Absence delete note
     * @param data user_no, session_id
     * @param note_id Note id which will be deleted
     */
    deleteAbsenceNote(data, note_id) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'deleteNote/' + note_id).then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Submit Student note
     * @param data sid, note, user_id
     */
    addStudentNote(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'addStudentNote').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(response.note_id);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Update user image
     * @param data Base64 image data
     */
    updateUserImage(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'updateStudentImage/' + data.sid).then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, url: response.imageUrl });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * send Private message
     * @param data user_no, session_id, notification, isemail, school_id
     */
    addNews(data, school_id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json');
        data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'postNews', data, {
            responseType: 'arraybuffer',
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(event => this.getStatusMessage(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(message => message), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
    }
    sendMessage(data, school_id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json');
        data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'sendMessage/' + school_id, data, {
            responseType: 'arraybuffer',
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(event => this.getStatusMessage(event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(message => message), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
    }
    // sendMessage(data: any): Promise<any> {
    //   return new Promise((resolve, reject) => {
    //     console.log(data);
    //     this.getNetworkInformation().then((isNetworkAvailable) => {
    //       if (isNetworkAvailable) {
    //         data.lang_code = environment.lang_code;
    //         let header = new HttpHeaders();
    //         header.append('Content-Type', 'application/x-www-form-urlencoded');
    //         let body: HttpParams = new HttpParams();
    //         body= body.append("user_no", data.user_no);
    //         body= body.append("session_id", data.session_id);
    //         body= body.append("isemail", data.isemail);
    //         body= body.append("lang_code", data.lang_code);
    //         Object.keys(data.notification).map((key) => {
    //           if (key == 'send_to') {
    //             Object.keys(data.notification[key]).map((send_to_key) => {
    //               body= body.append('notification[' + key + '][' + send_to_key + ']', data.notification[key][send_to_key]);
    //             })
    //           } else {
    //             body= body.append('notification[' + key + ']', data.notification[key]);
    //           }
    //         })
    //         this.http.post(environment.serverURL + 'sendMessage/' + data.school_id, body, { headers: header }).subscribe(() => {
    //           resolve(true);
    //         }, (error) => {
    //           console.log(error);
    //           if (error.message != undefined && error.message != '' && error.message != null) {
    //             reject(error.message)
    //           } else {
    //             reject(this.lang.usnexpectedError)
    //           }
    //         })
    //       } else {
    //         reject(this.lang.networkNotWorking);
    //       }
    //     })
    //   })
    // }
    postNews___OLD(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("title", data.title);
                    body = body.append("news_description", data.news_description);
                    body = body.append("video", data.video);
                    body = body.append("image", data.image);
                    body = body.append("user_no", data.user_no);
                    body = body.append("user_type", data.user_type);
                    body = body.append("school_id", data.school_id);
                    body = body.append("countryCode", data.countryCode);
                    body = body.append("lang_code", data.lang_code);
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'postNews', body, { headers: header }).subscribe(() => {
                        resolve(true);
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    // postNews(data: any): Promise<any> {
    //   return new Promise((resolve, reject) => {
    //     this.getNetworkInformation().then((isNetworkAvailable) => {
    //       if (isNetworkAvailable) {
    //         data.lang_code = environment.lang_code;
    //         let header = new HttpHeaders();
    //         header.append('Content-Type', 'application/x-www-form-urlencoded');
    //         let body: any = new FormData();
    //         body.append("title", data.title);
    //         body.append("news_description", data.news_description);
    //         body.append("video", data.video);
    //         //body.append("image", data.image);
    //         body.append("user_no", data.user_no);
    //         body.append("user_type", data.user_type);
    //         body.append("school_id", data.school_id);
    //         body.append("countryCode", data.countryCode);
    //         body.append("lang_code", data.lang_code);
    //         this.http.post(environment.serverURL + 'postNews', body/*, { headers: header }*/).subscribe(() => {
    //           resolve(true);
    //         }, (error) => {
    //           console.log(error);
    //           if (error.message != undefined && error.message != '' && error.message != null) {
    //             reject(error.message)
    //           } else {
    //             reject(this.lang.usnexpectedError)
    //           }
    //         })
    //       } else {
    //         reject(this.lang.networkNotWorking);
    //       }
    //     })
    //   })
    // }
    /**
     * Update user settings
     * @param data user_no, session_id, user object
     */
    updateUserSettings(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = this.makeObjectToUrlParams(data);
                    Object.keys(data.users).map((key) => {
                        if (data.users[key] != '') {
                            body = body.append('user[' + key + ']', data.users[key]);
                        }
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveUser', body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg, pic: response.picUrl });
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    deleteSchoolSettings(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = this.makeObjectToUrlParams(data);
                    Object.keys(data).map((key) => {
                        if (data[key] != '') {
                            body = body.append(key, data[key]);
                        }
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'deleteSchool', body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, message: response.msg, deactive_date: response.response.deactivate_date });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg, deactivate_date: response.response.deactivate_date });
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    revertDeletedSchoolSettings(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = this.makeObjectToUrlParams(data);
                    Object.keys(data).map((key) => {
                        if (data[key] != '') {
                            body = body.append(key, data[key]);
                        }
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'revertDeleteSchool', body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, message: response.msg, deactive_date: response.response.deactivate_date });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg, deactive_date: response.response.deactivate_date });
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
     * Get parent connect listing
     * @param data
     */
    getConnectChatList(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getParentConnectChatList').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        this.dbProvider.insertParentConnectMessages(response.chat_list);
                        resolve({ session: true, chatList: response.chat_list });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    this.dbProvider.getParentConnectMessages().then((messages) => {
                        resolve({ session: true, chatList: messages });
                    }).catch((error) => {
                        reject(error);
                    });
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * create parent connect chat
     * @param data user_no, school_id, session_id, message object
     */
    createParentConnectChat(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("user_no", data.user_no);
                    body = body.append("session_id", data.session_id);
                    body = body.append("school_id", data.school_id);
                    body = body.append("lang_code", data.lang_code);
                    if (data.chat_msg) {
                        Object.keys(data.chat_msg).forEach(function (key) {
                            body = body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                        });
                    }
                    Object.keys(data.message).map((key) => {
                        if (data.message[key] != '') {
                            body = body.append('message[' + key + ']', data.message[key]);
                        }
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'createParentConnectChat', body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, data: response, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, url: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
     * Close parent connect chat
     * @param data user_no, chat_list_id, session_id
     */
    closeParentConnectChat(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'closeParentConnectChat').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Reopen parent connect chat
     * @param data user_no, chat_list_id, session_id
     */
    reopenParentConnectChat(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'reopenParentConnectChat').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Get parent connect chat messages
     * @param data user_no, school_id, user_type, session_id, chat_id
     */
    getParentConnectChatMessages(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getParentConnectChatMessages').then((response) => {
                if (response) {
                    if (!response.session) {
                        resolve({ session: false, message: response.msg });
                    }
                    else if (response.success) {
                        resolve({ session: true, chat: response.chat });
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Send parent connect chat message
     * @param data session_id, user_type, chat_msg object
     */
    sendParentConnectChatMsg(data) {
        // console.log(data);
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("user_type", data.user_type);
                    body = body.append("lang_code", data.lang_code);
                    Object.keys(data.chat_msg).forEach(function (key) {
                        body = body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                    });
                    // Object.keys(data.chat_msg).map((key) => {
                    //   if (data.chat_msg[key] != '') {
                    //     body= body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                    //   }
                    // })
                    // console.log('body',body);
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'sendParentConnectChatMessage', body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            if (response.attachment_url) {
                                resolve({ session: true, message: response.msg, msg_id: response.msg_id, attachment_url: response.attachment_url });
                            }
                            else {
                                resolve({ session: true, message: response.msg, msg_id: response.msg_id });
                            }
                        }
                        else {
                            reject(response.msg);
                        }
                    }, (error) => {
                        console.log(error);
                        if (error.message != undefined && error.message != '' && error.message != null) {
                            reject(error.message);
                        }
                        else {
                            reject(this.lang.usnexpectedError);
                        }
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
     * Send the contact form
     * @param data
     */
    sendContact(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'sendcontact').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(true);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
    * Absence delete note
    * @param data user_no, session_id
    * @param note_id Note id which will be deleted
    */
    deleteStudentNote(data, note_id) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'deleteStudentNote/' + note_id).then((response) => {
                if (response) {
                    if (response.success) {
                        resolve(true);
                    }
                    else {
                        reject(response.msg);
                    }
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /**
     * Function to sync offline attendance
     */
    syncOffileData() {
        if (!this.syncInterval) {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    if (localStorage.getItem("attendance")) {
                        let attendances = JSON.parse(localStorage.getItem("attendance"));
                        let promises = [];
                        attendances.forEach((attendance) => {
                            promises.push(this.markOfflineAttendance(attendance));
                        });
                        Promise.all(promises).then((res) => {
                            this.showToast('Attendance Synced successfully');
                            localStorage.removeItem("attendance");
                        });
                    }
                    if (localStorage.getItem("delayattendance")) {
                        let delayAttendances = JSON.parse(localStorage.getItem("delayattendance"));
                        let delayPromises = [];
                        delayAttendances.forEach((delayAttendance) => {
                            delayPromises.push(this.markOfflineDelayAttendance(delayAttendance.attendance, delayAttendance.submittedByUser));
                        });
                        Promise.all(delayPromises).then((res) => {
                            this.showToast('Delay Attendance Synced successfully');
                            localStorage.removeItem("delayattendance");
                        });
                    }
                }
            });
            this.syncInterval = setInterval(() => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        if (localStorage.getItem("attendance")) {
                            let attendances = JSON.parse(localStorage.getItem("attendance"));
                            let promises = [];
                            attendances.forEach((attendance) => {
                                promises.push(this.markOfflineAttendance(attendance));
                            });
                            Promise.all(promises).then((res) => {
                                // console.log(res);
                                this.showToast('Attendance Synced successfully');
                                localStorage.removeItem("attendance");
                            });
                        }
                    }
                    if (localStorage.getItem("delayattendance")) {
                        let delayAttendances = JSON.parse(localStorage.getItem("delayattendance"));
                        let delayPromises = [];
                        delayAttendances.forEach((delayAttendance) => {
                            delayPromises.push(this.markOfflineDelayAttendance(delayAttendance.attendance, delayAttendance.submittedByUser));
                        });
                        Promise.all(delayPromises).then((res) => {
                            this.showToast('Delay Attendance Synced successfully');
                            localStorage.removeItem("delayattendance");
                        });
                    }
                });
            }, 20000);
        }
    }
    /**
     * Offline Attendance mark post function
     * @param data user_no, session_id, cid, date, school_id, sheet
     */
    markOfflineAttendance(data) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("cid", data.cid);
                    body = body.append("date", data.date);
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("lang_code", data.lang_code);
                    let index = 0;
                    Object.keys(data.removal_sheet).map((key) => {
                        body = body.append('removal_sheet[' + index + '][sid]', data.removal_sheet[key].sid);
                        body = body.append('removal_sheet[' + index + '][sem]', data.removal_sheet[key].sem);
                        index++;
                    });
                    Object.keys(data.sheet).map((key) => {
                        Object.keys(data.sheet[key]).map((sid) => {
                            body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                        });
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveOfflineAttendance/' + data.school_id, body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (response.success) {
                            resolve(true);
                        }
                        else {
                            // this.errorALertMessage(response.msg);
                            resolve(false);
                        }
                    }, (error) => {
                        console.log(error);
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    /**
     * Offline Delay attendance mark post function
     * @param data user_no, session_id, cid, date, school_id, sheet
     * @param submittedByUser submitted by which user 1 - admin, 2- moderator
     */
    markOfflineDelayAttendance(data, submittedByUser) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                    body = body.append("cid", data.cid);
                    body = body.append("date", data.date);
                    body = body.append("session_id", data.session_id);
                    body = body.append("user_no", data.user_no);
                    body = body.append("lang_code", data.lang_code);
                    Object.keys(data.sheet).map((key) => {
                        Object.keys(data.sheet[key]).map((sid) => {
                            body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                        });
                    });
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveOfflineDelayAttendance/' + data.school_id + '/' + submittedByUser, body, { headers: header }).subscribe((res) => {
                        let response = res;
                        if (response.success == true) {
                            resolve(true);
                        }
                        else {
                            // this.errorALertMessage(response.msg);
                            resolve(false);
                        }
                    }, (error) => {
                        console.log(error);
                        resolve(false);
                    });
                }
                else {
                    reject(this.lang.networkNotWorking);
                }
            });
        });
    }
    getChildrens(data) {
        return new Promise((resolve, reject) => {
            this.postRequest(data, 'getChildrens').then((response) => {
                if (response) {
                    if (response.success) {
                        resolve({ data: response.child, permit: response.can_view_absent });
                    }
                    else {
                        reject(response.msg);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    reject(error.message);
                }
                else {
                    reject(this.lang.usnexpectedError);
                }
            });
        });
    }
    /** Post request function.
     * @param {Object} data - contains the properties to post to API
     * @param {String} slug - contains the API method to call
     * @returns Success or error
     */
    postRequest(data, slug) {
        return new Promise((resolve, reject) => {
            this.getNetworkInformation().then((isNetworkAvailable) => {
                if (isNetworkAvailable) {
                    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                    let body = this.makeObjectToUrlParams(data);
                    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                    this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + slug, body, { headers: header }).subscribe((response) => {
                        if (response) {
                            if (response['_body'] != '') {
                                let resObj = response;
                                resolve(resObj);
                            }
                            else {
                                reject("Unable to find any record");
                            }
                        }
                    }, (error) => {
                        reject(error);
                    });
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    /** Function to convert object into param string
     * @param {Object} data - contains the properties to post to API
     * @returns Param string
    */
    makeObjectToUrlParams(data) {
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(data).forEach(function (key) {
            body = body.append(key, data[key]);
        });
        return body;
    }
    /**
     * get date in yyyy-mm-dd
     * @param date date object
     */
    getFormatedDate(date) {
        let m = date.getMonth() + 1;
        return date.getFullYear() + '-' + m + '-' + date.getDate();
    }
    /**
     * Check whether network is available or not
     */
    getNetworkInformation() {
        return new Promise((resolve) => {
            if (this.platform.is('cordova')) {
                if (this.network.type == this.network.Connection.UNKNOWN || this.network.type == this.network.Connection.NONE) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            }
            else {
                resolve(true);
            }
        });
    }
    /**
     * Download image
     * @param url image url
     */
    downloadImage(url) {
        return new Promise((resolve, reject) => {
            let n = new Date().valueOf();
            const fileTransfer = this.transfer.create();
            if (this.platform.is('ios')) {
                let targetPath = this.file.dataDirectory + "Download/" + n + ".png"; //this.cordova.file.dataDirectory
                fileTransfer.download(encodeURI(url), targetPath, true).then((entry) => {
                    resolve(true);
                    console.log('download complete: ' + entry.toURL());
                    // env.isDownloadPopupVisible = true;
                }, (error) => {
                    // env.canDownloadFile = false;
                    reject(this.lang.usnexpectedError);
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("upload error code" + error.code);
                });
            }
            else {
                let targetPath = this.file.externalRootDirectory + "Download/" + n + ".png"; //this.cordova.file.dataDirectory
                fileTransfer.download(url, targetPath, true).then((entry) => {
                    resolve(true);
                    console.log('download complete: ' + entry.toURL());
                    // env.isDownloadPopupVisible = true;
                }, (error) => {
                    // env.canDownloadFile = false;
                    reject(this.lang.usnexpectedError);
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("upload error code" + error.code);
                });
            }
        });
    }
    checkStoragePermission() {
        return new Promise((resolve) => {
            // this.photoLibrary.requestAuthorization({read:true,write:true}).then(()=>{
            //   resolve(true);
            // }).catch(()=>{
            //   resolve(false);
            // })
            this.diagnostic.requestExternalStorageAuthorization().then(() => {
                //User gave permission 
                resolve(true);
            }).catch(error => {
                resolve(false);
                //Handle error
            });
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"] },
    { type: _student_data_student_data_service__WEBPACK_IMPORTED_MODULE_19__["StudentDataService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"] },
    { type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__["Diagnostic"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"],
        _student_data_student_data_service__WEBPACK_IMPORTED_MODULE_19__["StudentDataService"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"],
        _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"],
        _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__["Diagnostic"]])
], DataService);



/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loader.component.html */ "xTTx");
/* harmony import */ var _loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component.scss */ "JzvJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() { }
};
LoaderComponent.ctorParameters = () => [];
LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoaderComponent);



/***/ }),

/***/ "vUv2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-class/create-class.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-title text-right>{{'createClass.pagetitle' | translate}}\n      <ion-icon item-end name=\"close\" (click)=\"viewCtrl.dismiss(false)\" class=\"close\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding mode=\"md\">\n  <form #registerForm='ngForm'>\n    <ion-list style=\"margin: 10px;\">\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'createClass.class_code' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"classCode\" #classCode='ngModel' [(ngModel)]=\"class.code\"\n          pattern=\"[A-Za-z0-9]*$\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"classCode.invalid && (classCode.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"classCode.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n        <div *ngIf=\"classCode.errors.pattern\">\n          {{'validations.invalidclasscode' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'createClass.class_name' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"className\" #className='ngModel' [(ngModel)]=\"class.name\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"className.invalid && (className.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"className.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'createClass.class_desc' | translate}}</ion-label>\n        <ion-textarea name=\"classDesc\" #classDesc='ngModel' [(ngModel)]=\"class.desc\" text-right required>\n        </ion-textarea>\n      </ion-item>\n      <div *ngIf=\"classDesc.invalid && (classDesc.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"classDesc.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\">{{'createClass.seminar' | translate}}</ion-label>\n        <ion-select name=\"seminar\" #seminar='ngModel' [(ngModel)]=\"class.semno\" interface=\"popover\">\n          <ion-select-option *ngFor=\"let seminar of getSeminars();let i = index;\" [value]=\"(i+1)\">{{i+1}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-row padding>\n        <ion-button  expand=\"full\" class=\"btn-primary\" shape=\"round\" color=\"primary\" [disabled]=\"registerForm.invalid\"\n          (click)=\"registerClass()\">{{'createClass.reg_btn' | translate}}</ion-button>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule), canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'register-student',
        loadChildren: () => __webpack_require__.e(/*! import() | register-student-register-student-module */ "register-student-register-student-module").then(__webpack_require__.bind(null, /*! ./register-student/register-student.module */ "CmRx")).then(m => m.RegisterStudentPageModule)
    },
    {
        path: 'register-teacher',
        loadChildren: () => __webpack_require__.e(/*! import() | register-teacher-register-teacher-module */ "register-teacher-register-teacher-module").then(__webpack_require__.bind(null, /*! ./register-teacher/register-teacher.module */ "Rl8z")).then(m => m.RegisterTeacherPageModule)
    },
    {
        path: 'school-registration',
        loadChildren: () => __webpack_require__.e(/*! import() | school-registration-school-registration-module */ "school-registration-school-registration-module").then(__webpack_require__.bind(null, /*! ./school-registration/school-registration.module */ "v2GW")).then(m => m.SchoolRegistrationPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() | about-us-about-us-module */ "about-us-about-us-module").then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "00wH")).then(m => m.AboutUsPageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-us-contact-us-module */ "contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ./contact-us/contact-us.module */ "lhKH")).then(m => m.ContactUsPageModule)
    },
    {
        path: 'news',
        loadChildren: () => __webpack_require__.e(/*! import() | news-news-module */ "news-news-module").then(__webpack_require__.bind(null, /*! ./news/news.module */ "YXEz")).then(m => m.NewsPageModule)
    },
    {
        path: 'tabs/news',
        loadChildren: () => __webpack_require__.e(/*! import() | news-news-module */ "news-news-module").then(__webpack_require__.bind(null, /*! ./news/news.module */ "YXEz")).then(m => m.NewsPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'classlist',
        loadChildren: () => __webpack_require__.e(/*! import() | classlist-classlist-module */ "classlist-classlist-module").then(__webpack_require__.bind(null, /*! ./classlist/classlist.module */ "GgPW")).then(m => m.ClasslistPageModule)
    },
    {
        path: 'tabs/classlist',
        loadChildren: () => __webpack_require__.e(/*! import() | classlist-classlist-module */ "classlist-classlist-module").then(__webpack_require__.bind(null, /*! ./classlist/classlist.module */ "GgPW")).then(m => m.ClasslistPageModule)
    },
    {
        path: 'delaylist',
        loadChildren: () => __webpack_require__.e(/*! import() | delaylist-delaylist-module */ "delaylist-delaylist-module").then(__webpack_require__.bind(null, /*! ./delaylist/delaylist.module */ "dVcN")).then(m => m.DelaylistPageModule)
    },
    {
        path: 'tabs/delaylist',
        loadChildren: () => __webpack_require__.e(/*! import() | delaylist-delaylist-module */ "delaylist-delaylist-module").then(__webpack_require__.bind(null, /*! ./delaylist/delaylist.module */ "dVcN")).then(m => m.DelaylistPageModule)
    },
    {
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() | messages-messages-module */ "messages-messages-module").then(__webpack_require__.bind(null, /*! ./messages/messages.module */ "TdLt")).then(m => m.MessagesPageModule)
    },
    {
        path: 'tabs/messages',
        loadChildren: () => __webpack_require__.e(/*! import() | messages-messages-module */ "messages-messages-module").then(__webpack_require__.bind(null, /*! ./messages/messages.module */ "TdLt")).then(m => m.MessagesPageModule)
    },
    {
        path: 'list-student',
        loadChildren: () => __webpack_require__.e(/*! import() | list-student-list-student-module */ "list-student-list-student-module").then(__webpack_require__.bind(null, /*! ./list-student/list-student.module */ "JkIs")).then(m => m.ListStudentPageModule)
    },
    {
        path: 'student-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | student-detail-student-detail-module */ "student-detail-student-detail-module").then(__webpack_require__.bind(null, /*! ./student-detail/student-detail.module */ "Kulp")).then(m => m.StudentDetailPageModule)
    },
    {
        path: 'create-class',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./create-class/create-class.module */ "ZMI9")).then(m => m.CreateClassPageModule)
    },
    {
        path: 'sendmessage',
        loadChildren: () => __webpack_require__.e(/*! import() | sendmessage-sendmessage-module */ "sendmessage-sendmessage-module").then(__webpack_require__.bind(null, /*! ./sendmessage/sendmessage.module */ "8Jp3")).then(m => m.SendmessagePageModule)
    },
    {
        path: 'tabs/sendmessage',
        loadChildren: () => __webpack_require__.e(/*! import() | sendmessage-sendmessage-module */ "sendmessage-sendmessage-module").then(__webpack_require__.bind(null, /*! ./sendmessage/sendmessage.module */ "8Jp3")).then(m => m.SendmessagePageModule)
    },
    {
        path: 'parentconnect',
        loadChildren: () => __webpack_require__.e(/*! import() | parentconnect-parentconnect-module */ "parentconnect-parentconnect-module").then(__webpack_require__.bind(null, /*! ./parentconnect/parentconnect.module */ "wx9S")).then(m => m.ParentconnectPageModule)
    },
    {
        path: 'tabs/parentconnect',
        loadChildren: () => __webpack_require__.e(/*! import() | parentconnect-parentconnect-module */ "parentconnect-parentconnect-module").then(__webpack_require__.bind(null, /*! ./parentconnect/parentconnect.module */ "wx9S")).then(m => m.ParentconnectPageModule)
    },
    {
        path: 'connect-new-message',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./connect-new-message/connect-new-message.module */ "SSFD")).then(m => m.ConnectNewMessagePageModule)
    },
    {
        path: 'connect-chat',
        loadChildren: () => __webpack_require__.e(/*! import() | connect-chat-connect-chat-module */ "connect-chat-connect-chat-module").then(__webpack_require__.bind(null, /*! ./connect-chat/connect-chat.module */ "J7Fa")).then(m => m.ConnectChatPageModule)
    },
    {
        path: 'elearning-schools',
        loadChildren: () => __webpack_require__.e(/*! import() | elearning-schools-elearning-schools-module */ "elearning-schools-elearning-schools-module").then(__webpack_require__.bind(null, /*! ./elearning-schools/elearning-schools.module */ "48fY")).then(m => m.ElearningSchoolsPageModule)
    },
    {
        path: 'tabs/elearning-schools',
        loadChildren: () => __webpack_require__.e(/*! import() | elearning-schools-elearning-schools-module */ "elearning-schools-elearning-schools-module").then(__webpack_require__.bind(null, /*! ./elearning-schools/elearning-schools.module */ "48fY")).then(m => m.ElearningSchoolsPageModule)
    },
    {
        path: 'elearning-school-video',
        loadChildren: () => __webpack_require__.e(/*! import() | elearning-school-video-elearning-school-video-module */ "elearning-school-video-elearning-school-video-module").then(__webpack_require__.bind(null, /*! ./elearning-school-video/elearning-school-video.module */ "dKNw")).then(m => m.ElearningSchoolVideoPageModule)
    },
    {
        path: 'playvideo',
        loadChildren: () => __webpack_require__.e(/*! import() | playvideo-playvideo-module */ "playvideo-playvideo-module").then(__webpack_require__.bind(null, /*! ./playvideo/playvideo.module */ "dowu")).then(m => m.PlayvideoPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'children',
        loadChildren: () => __webpack_require__.e(/*! import() | children-children-module */ "children-children-module").then(__webpack_require__.bind(null, /*! ./children/children.module */ "APEF")).then(m => m.ChildrenPageModule), canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'tabs/children',
        loadChildren: () => __webpack_require__.e(/*! import() | children-children-module */ "children-children-module").then(__webpack_require__.bind(null, /*! ./children/children.module */ "APEF")).then(m => m.ChildrenPageModule), canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'private-message',
        loadChildren: () => __webpack_require__.e(/*! import() | private-message-private-message-module */ "private-message-private-message-module").then(__webpack_require__.bind(null, /*! ./private-message/private-message.module */ "fO8F")).then(m => m.PrivateMessagePageModule)
    },
    {
        path: 'tabs/private-message',
        loadChildren: () => __webpack_require__.e(/*! import() | private-message-private-message-module */ "private-message-private-message-module").then(__webpack_require__.bind(null, /*! ./private-message/private-message.module */ "fO8F")).then(m => m.PrivateMessagePageModule)
    },
    {
        path: 'students',
        loadChildren: () => __webpack_require__.e(/*! import() | students-students-module */ "students-students-module").then(__webpack_require__.bind(null, /*! ./students/students.module */ "qqi4")).then(m => m.StudentsPageModule)
    },
    {
        path: 'post-news',
        loadChildren: () => __webpack_require__.e(/*! import() | post-news-post-news-module */ "post-news-post-news-module").then(__webpack_require__.bind(null, /*! ./post-news/post-news.module */ "+eoj")).then(m => m.PostNewsPageModule)
    },
    {
        path: 'parent-register',
        loadChildren: () => __webpack_require__.e(/*! import() | parent-register-parent-register-module */ "parent-register-parent-register-module").then(__webpack_require__.bind(null, /*! ./parent-register/parent-register.module */ "E60M")).then(m => m.ParentRegisterPageModule)
    },
    {
        path: 'edit-calss',
        loadChildren: () => __webpack_require__.e(/*! import() | common-modal-edit-calss-edit-calss-module */ "common-modal-edit-calss-edit-calss-module").then(__webpack_require__.bind(null, /*! ./common-modal/edit-calss/edit-calss.module */ "Hf6G")).then(m => m.EditCalssPageModule)
    },
    {
        path: 'requested-parent',
        loadChildren: () => __webpack_require__.e(/*! import() | requested-parent-requested-parent-module */ "requested-parent-requested-parent-module").then(__webpack_require__.bind(null, /*! ./requested-parent/requested-parent.module */ "XBf2")).then(m => m.RequestedParentPageModule)
    },
    {
        path: 'seminar-list',
        loadChildren: () => __webpack_require__.e(/*! import() | seminar-list-seminar-list-module */ "seminar-list-seminar-list-module").then(__webpack_require__.bind(null, /*! ./seminar-list/seminar-list.module */ "zk2D")).then(m => m.SeminarListPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'search-student',
        loadChildren: () => __webpack_require__.e(/*! import() | search-student-search-student-module */ "search-student-search-student-module").then(__webpack_require__.bind(null, /*! ./search-student/search-student.module */ "zmfO")).then(m => m.SearchStudentPageModule)
    },
    {
        path: 'student-notes',
        loadChildren: () => __webpack_require__.e(/*! import() | student-notes-student-notes-module */ "student-notes-student-notes-module").then(__webpack_require__.bind(null, /*! ./student-notes/student-notes.module */ "E6Hu")).then(m => m.StudentNotesPageModule)
    },
    {
        path: 'tabs/student-notes',
        loadChildren: () => __webpack_require__.e(/*! import() | student-notes-student-notes-module */ "student-notes-student-notes-module").then(__webpack_require__.bind(null, /*! ./student-notes/student-notes.module */ "E6Hu")).then(m => m.StudentNotesPageModule)
    },
    {
        path: 'add-notes',
        loadChildren: () => __webpack_require__.e(/*! import() | add-notes-add-notes-module */ "add-notes-add-notes-module").then(__webpack_require__.bind(null, /*! ./add-notes/add-notes.module */ "tNxg")).then(m => m.AddNotesPageModule)
    },
    {
        path: 'view-class-notes',
        loadChildren: () => __webpack_require__.e(/*! import() | common-modal-view-class-notes-view-class-notes-module */ "common-modal-view-class-notes-view-class-notes-module").then(__webpack_require__.bind(null, /*! ./common-modal/view-class-notes/view-class-notes.module */ "Hied")).then(m => m.ViewClassNotesPageModule)
    },
    {
        path: 'manage-teacher',
        loadChildren: () => __webpack_require__.e(/*! import() | manage-teacher-manage-teacher-module */ "manage-teacher-manage-teacher-module").then(__webpack_require__.bind(null, /*! ./manage-teacher/manage-teacher.module */ "qa+G")).then(m => m.ManageTeacherPageModule)
    },
    {
        path: 'edit-teacher-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-teacher-profile-edit-teacher-profile-module */ "edit-teacher-profile-edit-teacher-profile-module").then(__webpack_require__.bind(null, /*! ./edit-teacher-profile/edit-teacher-profile.module */ "a/Pt")).then(m => m.EditTeacherProfilePageModule)
    },
    {
        path: 'follow-bulletins',
        loadChildren: () => __webpack_require__.e(/*! import() | follow-bulletins-follow-bulletins-module */ "follow-bulletins-follow-bulletins-module").then(__webpack_require__.bind(null, /*! ./follow-bulletins/follow-bulletins.module */ "Wgra")).then(m => m.FollowBulletinsPageModule)
    },
    {
        path: 'bulletins',
        loadChildren: () => __webpack_require__.e(/*! import() | bulletins-bulletins-module */ "bulletins-bulletins-module").then(__webpack_require__.bind(null, /*! ./bulletins/bulletins.module */ "O/+U")).then(m => m.BulletinsPageModule)
    },
    {
        path: 'manage-student',
        loadChildren: () => __webpack_require__.e(/*! import() | manage-student-manage-student-module */ "manage-student-manage-student-module").then(__webpack_require__.bind(null, /*! ./manage-student/manage-student.module */ "LEmS")).then(m => m.ManageStudentPageModule)
    },
    {
        path: 'edit-student-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-student-profile-edit-student-profile-module */ "edit-student-profile-edit-student-profile-module").then(__webpack_require__.bind(null, /*! ./edit-student-profile/edit-student-profile.module */ "qevg")).then(m => m.EditStudentProfilePageModule)
    },
    {
        path: 'available-plan',
        loadChildren: () => __webpack_require__.e(/*! import() | available-plan-available-plan-module */ "available-plan-available-plan-module").then(__webpack_require__.bind(null, /*! ./available-plan/available-plan.module */ "syir")).then(m => m.AvailablePlanPageModule)
    },
    {
        path: 'select-bulletins-user',
        loadChildren: () => __webpack_require__.e(/*! import() | select-bulletins-user-select-bulletins-user-module */ "select-bulletins-user-select-bulletins-user-module").then(__webpack_require__.bind(null, /*! ./select-bulletins-user/select-bulletins-user.module */ "gpDj")).then(m => m.SelectBulletinsUserPageModule)
    },
    {
        path: 'share-bulletins',
        loadChildren: () => __webpack_require__.e(/*! import() | share-bulletins-share-bulletins-module */ "share-bulletins-share-bulletins-module").then(__webpack_require__.bind(null, /*! ./share-bulletins/share-bulletins.module */ "PP/t")).then(m => m.ShareBulletinsPageModule)
    },
    {
        path: 'view-notes',
        loadChildren: () => Promise.all(/*! import() | view-notes-view-notes-module */[__webpack_require__.e("default~note-calendar-note-calendar-module~view-notes-view-notes-module"), __webpack_require__.e("view-notes-view-notes-module")]).then(__webpack_require__.bind(null, /*! ./view-notes/view-notes.module */ "Lu3m")).then(m => m.ViewNotesPageModule)
    },
    {
        path: 'view-bulletin',
        loadChildren: () => __webpack_require__.e(/*! import() | view-bulletin-view-bulletin-module */ "view-bulletin-view-bulletin-module").then(__webpack_require__.bind(null, /*! ./view-bulletin/view-bulletin.module */ "jV4k")).then(m => m.ViewBulletinPageModule)
    },
    {
        path: 'select-message-user',
        loadChildren: () => __webpack_require__.e(/*! import() | common-modal-select-message-user-select-message-user-module */ "common-modal-select-message-user-select-message-user-module").then(__webpack_require__.bind(null, /*! ./common-modal/select-message-user/select-message-user.module */ "QllI")).then(m => m.SelectMessageUserPageModule)
    },
    {
        path: 'warning-report',
        loadChildren: () => __webpack_require__.e(/*! import() | warning-report-warning-report-module */ "warning-report-warning-report-module").then(__webpack_require__.bind(null, /*! ./warning-report/warning-report.module */ "jsql")).then(m => m.WarningReportPageModule)
    },
    {
        path: 'follow-up-student',
        loadChildren: () => __webpack_require__.e(/*! import() | follow-up-student-follow-up-student-module */ "follow-up-student-follow-up-student-module").then(__webpack_require__.bind(null, /*! ./follow-up-student/follow-up-student.module */ "7Cvm")).then(m => m.FollowUpStudentPageModule)
    },
    {
        path: 'add-class',
        loadChildren: () => __webpack_require__.e(/*! import() | add-class-add-class-module */ "add-class-add-class-module").then(__webpack_require__.bind(null, /*! ./add-class/add-class.module */ "gwAL")).then(m => m.AddClassPageModule)
    },
    {
        path: 'followup-student-list',
        loadChildren: () => __webpack_require__.e(/*! import() | followup-student-list-followup-student-list-module */ "followup-student-list-followup-student-list-module").then(__webpack_require__.bind(null, /*! ./followup-student-list/followup-student-list.module */ "CXad")).then(m => m.FollowupStudentListPageModule)
    },
    {
        path: 'student-report-classes',
        loadChildren: () => __webpack_require__.e(/*! import() | student-report-classes-student-report-classes-module */ "student-report-classes-student-report-classes-module").then(__webpack_require__.bind(null, /*! ./student-report-classes/student-report-classes.module */ "GZxE")).then(m => m.StudentReportClassesPageModule)
    },
    {
        path: 'student-report-list',
        loadChildren: () => __webpack_require__.e(/*! import() | student-report-list-student-report-list-module */ "student-report-list-student-report-list-module").then(__webpack_require__.bind(null, /*! ./student-report-list/student-report-list.module */ "031B")).then(m => m.StudentReportListPageModule)
    },
    {
        path: 'student-report-manage',
        loadChildren: () => __webpack_require__.e(/*! import() | student-report-manage-student-report-manage-module */ "student-report-manage-student-report-manage-module").then(__webpack_require__.bind(null, /*! ./student-report-manage/student-report-manage.module */ "pTSB")).then(m => m.StudentReportManagePageModule)
    },
    {
        path: 'followup-add-fields',
        loadChildren: () => __webpack_require__.e(/*! import() | followup-add-fields-followup-add-fields-module */ "followup-add-fields-followup-add-fields-module").then(__webpack_require__.bind(null, /*! ./followup-add-fields/followup-add-fields.module */ "bpOT")).then(m => m.FollowupAddFieldsPageModule)
    },
    {
        path: 'add-teacher',
        loadChildren: () => __webpack_require__.e(/*! import() | add-teacher-add-teacher-module */ "add-teacher-add-teacher-module").then(__webpack_require__.bind(null, /*! ./add-teacher/add-teacher.module */ "veIr")).then(m => m.AddTeacherPageModule)
    },
    {
        path: 'add-parent',
        loadChildren: () => __webpack_require__.e(/*! import() | add-parent-add-parent-module */ "add-parent-add-parent-module").then(__webpack_require__.bind(null, /*! ./add-parent/add-parent.module */ "5zoF")).then(m => m.AddParentPageModule)
    },
    {
        path: 'note-calendar',
        loadChildren: () => __webpack_require__.e(/*! import() | note-calendar-note-calendar-module */ "default~note-calendar-note-calendar-module~view-notes-view-notes-module").then(__webpack_require__.bind(null, /*! ./note-calendar/note-calendar.module */ "tXSK")).then(m => m.NoteCalendarPageModule)
    },
    {
        path: 'users-list',
        loadChildren: () => __webpack_require__.e(/*! import() | users-list-users-list-module */ "users-list-users-list-module").then(__webpack_require__.bind(null, /*! ./users-list/users-list.module */ "38c6")).then(m => m.UsersListPageModule)
    },
    {
        path: 'add-user',
        loadChildren: () => __webpack_require__.e(/*! import() | add-user-add-user-module */ "add-user-add-user-module").then(__webpack_require__.bind(null, /*! ./add-user/add-user.module */ "wxhZ")).then(m => m.AddUserPageModule)
    },
    {
        path: 'edit-user-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-user-profile-edit-user-profile-module */ "edit-user-profile-edit-user-profile-module").then(__webpack_require__.bind(null, /*! ./edit-user-profile/edit-user-profile.module */ "YvNW")).then(m => m.EditUserProfilePageModule)
    },
    {
        path: 'tasks-calendar',
        loadChildren: () => __webpack_require__.e(/*! import() | tasks-calendar-tasks-calendar-module */ "tasks-calendar-tasks-calendar-module").then(__webpack_require__.bind(null, /*! ./tasks-calendar/tasks-calendar.module */ "blCk")).then(m => m.TasksCalendarPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vrpw":
/*!*****************************************************!*\
  !*** ./src/app/create-class/create-class.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-create-class:host .close {\n  float: left;\n}\napp-create-class:host .background-input {\n  --background: #ececec;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyZWF0ZS1jbGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0FBQVI7QUFFSTtFQUNHLHFCQUFBO0VBQ0MsZ0JBQUE7QUFBUiIsImZpbGUiOiJjcmVhdGUtY2xhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNyZWF0ZS1jbGFzczpob3N0IHtcclxuICAgIC5jbG9zZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5kLWlucHV0e1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICB9IFxyXG59Il19 */");

/***/ }),

/***/ "wHzU":
/*!*******************************************!*\
  !*** ./src/app/pipes/user-search.pipe.ts ***!
  \*******************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let UserSearchPipe = class UserSearchPipe {
    transform(trimmedUsers, userSearchValue) {
        if (!trimmedUsers || !userSearchValue) {
            return trimmedUsers;
        }
        return trimmedUsers.filter(pro => pro.first_name.toLocaleLowerCase().includes(userSearchValue.toLocaleLowerCase()));
    }
};
UserSearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userSearch'
    })
], UserSearchPipe);



/***/ }),

/***/ "xTTx":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n\t<!-- <div class='demo'>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t</div> -->\n\t\n\t<svg version=\"1.1\" id=\"L7\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t  <path fill=\"#fff\" d=\"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n\t  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z\">\n\t    <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"2s\" from=\"0 50 50\" to=\"360 50 50\" repeatCount=\"indefinite\" />\n\t  </path>\n\t  <path fill=\"#fff\" d=\"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n\t  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z\">\n\t    <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"1s\" from=\"0 50 50\" to=\"-360 50 50\" repeatCount=\"indefinite\" />\n\t  </path>\n\t  <path fill=\"#fff\" d=\"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n\t  L82,35.7z\">\n\t    <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"2s\" from=\"0 50 50\" to=\"360 50 50\" repeatCount=\"indefinite\" />\n\t  </path>\n\t</svg>\n</div>\n<!-- <a href='http://mattroelle.com'>mattroelle.com</a> -->\n\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  margin-right: 4vh;\n}\n\n.lang-row {\n  margin: 8px 0;\n}\n\n.select-language {\n  padding: unset !important;\n  margin: unset;\n}\n\n.select-language ion-select {\n  padding: 4px 0px 7px 29px !important;\n  --placeholder-color: #fff !important;\n  --placeholder-opacity: 1 !important;\n}\n\n.switch-account {\n  width: 104px;\n  /* padding: 2px; */\n  /* font-size: 12px; */\n  /* color: #5d5959; */\n  /* background: #f7f3f3; */\n  /* text-align: center; */\n  /* border: 1px solid green; */\n  /* border-radius: 8px; */\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.switch {\n  position: relative;\n  display: block;\n  vertical-align: top;\n  width: 100px;\n  height: 30px;\n  padding: 3px;\n  /* margin: 0 10px 10px 0; */\n  /* background: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px); */\n  /* background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px); */\n  border-radius: 18px;\n  /* box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05); */\n  cursor: pointer;\n}\n\n.switch-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n\n.switch-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  font-size: 10px;\n  text-transform: capitalize;\n  background: #eceeef;\n  border-radius: inherit;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n}\n\n.switch-label:before, .switch-label:after {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5em;\n  line-height: 1;\n  transition: inherit;\n}\n\n.switch-label:before {\n  content: attr(data-off);\n  right: 11px;\n  color: #000000;\n  text-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n\n.switch-label:after {\n  content: attr(data-on);\n  left: 11px;\n  color: #FFFFFF;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n}\n\n.switch-input:checked ~ .switch-label {\n  background: #5adc60;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.switch-input:checked ~ .switch-label:before {\n  opacity: 0;\n}\n\n.switch-input:checked ~ .switch-label:after {\n  opacity: 1;\n}\n\n.switch-handle {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 28px;\n  height: 28px;\n  background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n  background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n  border-radius: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n.switch-handle:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -6px 0 0 -6px;\n  width: 12px;\n  height: 12px;\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n  border-radius: 6px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n\n.switch-input:checked ~ .switch-handle {\n  left: 74px;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n/* Transition\n    ========================== */\n\n.switch-label, .switch-handle {\n  transition: All 0.3s ease;\n  -webkit-transition: All 0.3s ease;\n  -moz-transition: All 0.3s ease;\n  -o-transition: All 0.3s ease;\n}\n\n.logouts {\n  margin-bottom: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFBO0FBQUQ7O0FBRUE7RUFDSyxhQUFBO0FBQ0w7O0FBRUE7RUFDSyx5QkFBQTtFQUNBLGFBQUE7QUFDTDs7QUFBSTtFQUNDLG9DQUFBO0VBQ0Qsb0NBQUE7RUFDQSxtQ0FBQTtBQUVKOztBQUNFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVJO0VBQ0Usa0JBQUE7RUFDRCxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1FQUFBO0VBQ0EsMkVBQUE7RUFDQSxtQkFBQTtFQUNBLHlFQUFBO0VBQ0EsZUFBQTtBQUNMOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFFTjs7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0ZBQUE7QUFHTjs7QUFESTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLG1CQUFBO0FBSU47O0FBRkk7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUFLTjs7QUFISTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFNTjs7QUFKSTtFQUNFLG1CQUFBO0VBQ0EsaUZBQUE7QUFPTjs7QUFMSTtFQUNFLFVBQUE7QUFRTjs7QUFOSTtFQUNFLFVBQUE7QUFTTjs7QUFQSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0Esb0VBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBVU47O0FBUkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQVdOOztBQVRJO0VBQ0UsVUFBQTtFQUNBLDJDQUFBO0FBWU47O0FBVkk7Z0NBQUE7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQWFOOztBQVhJO0VBQ0UsbUJBQUE7QUFjTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1saXN0e1xuXHRtYXJnaW4tcmlnaHQ6IDR2aDtcbn1cbi5sYW5nLXJvd3tcblx0ICAgIG1hcmdpbjogOHB4IDA7XG59XG5cbi5zZWxlY3QtbGFuZ3VhZ2V7XG5cdCAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIFx0bWFyZ2luOiB1bnNldDtcbiAgICBpb24tc2VsZWN0e1xuICAgIFx0cGFkZGluZzogNHB4IDBweCA3cHggMjlweCAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG59XG4gIC5zd2l0Y2gtYWNjb3VudHtcbiAgICAgICAgICAgIFxuICAgIHdpZHRoOiAxMDRweDtcbiAgICAvKiBwYWRkaW5nOiAycHg7ICovXG4gICAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xuICAgIC8qIGNvbG9yOiAjNWQ1OTU5OyAqL1xuICAgIC8qIGJhY2tncm91bmQ6ICNmN2YzZjM7ICovXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDhweDsgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcblxuICB9XG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblx0ICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdCAgICB3aWR0aDogMTAwcHg7XG5cdCAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICBwYWRkaW5nOiAzcHg7XG5cdCAgICAvKiBtYXJnaW46IDAgMTBweCAxMHB4IDA7ICovXG5cdCAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlZWVlLCAjRkZGRkZGIDI1cHgpOyAqL1xuXHQgICAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlLCAjRkZGRkZGIDI1cHgpOyAqL1xuXHQgICAgYm9yZGVyLXJhZGl1czogMThweDtcblx0ICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB3aGl0ZSwgaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5zd2l0Y2gtaW5wdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGFiZWwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNlY2VlZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB9XG4gICAgLnN3aXRjaC1sYWJlbDpiZWZvcmUsIC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtLjVlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBpbmhlcml0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBpbmhlcml0O1xuICAgICAgLW8tdHJhbnNpdGlvbjogaW5oZXJpdDtcbiAgICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpO1xuICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuICAgICAgY29udGVudDogYXR0cihkYXRhLW9uKTtcbiAgICAgIGxlZnQ6IDExcHg7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsIHtcbiAgIFx0ICBiYWNrZ3JvdW5kOiAjNWFkYzYwO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsOmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5zd2l0Y2gtaGFuZGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNHB4O1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRkZGIDQwJSwgI2YwZjBmMCk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIC5zd2l0Y2gtaGFuZGxlOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW46IC02cHggMCAwIC02cHg7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWVlZWUsICNGRkZGRkYpO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlLCAjRkZGRkZGKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgfVxuICAgIC5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtaGFuZGxlIHtcbiAgICAgIGxlZnQ6IDc0cHg7XG4gICAgICBib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICAvKiBUcmFuc2l0aW9uXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLnN3aXRjaC1sYWJlbCwgLnN3aXRjaC1oYW5kbGUge1xuICAgICAgdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgICAgIC1vLXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG4gICAgfVxuICAgIC5sb2dvdXRze1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zdC0":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect-new-message/connect-new-message.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-title>{{'parentconnect__newmsg.pagetitle' | translate}}\n      <ion-icon item-end name=\"close\" (click)=\"dismiss()\" class=\"close\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding mode=\"md\"> \n  <form #ticketForm='ngForm'>\n    <div class=\"subject\">\n      <ion-item>\n        <ion-input class=\"message\" placeholder=\"{{'parentconnect__newmsg.title' | translate}}\"\n          [(ngModel)]=\"message.title\" text-right name=\"title\" #title='ngModel' required maxlength=\"35\"></ion-input>\n      </ion-item>\n    </div>\n    <div class=\"subject\">\n      <ion-item>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"{{'parentconnect__newmsg.msg_body' | translate}}\"\n          [(ngModel)]=\"message.message\" text-right name=\"msg_body\" #msg_body='ngModel' required maxlength=\"140\">\n        </ion-textarea>\n      </ion-item>\n      <ion-button class=\"attachment\" icon-only  (click) = \"takePicture()\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"ticketImage != ''\">\n      <img [src]=\"ticketImage\" />\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-button  expand=\"full\" class=\"send-btn\" (click)=\"sendMessage()\">{{'parentconnect__newmsg.send' |\n    translate}}</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "zl9O":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe/safe.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



/**
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
let SafePipe = class SafePipe {
    /**
     * Takes a value and makes it lowercase.
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, ...args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
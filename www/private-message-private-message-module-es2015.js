(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["private-message-private-message-module"],{

/***/ "Dy5+":
/*!*********************************************************!*\
  !*** ./src/app/private-message/private-message.page.ts ***!
  \*********************************************************/
/*! exports provided: PrivateMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateMessagePage", function() { return PrivateMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_private_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./private-message.page.html */ "lE0w");
/* harmony import */ var _private_message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private-message.page.scss */ "Ggnp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let PrivateMessagePage = class PrivateMessagePage {
    /**
       * Messages constructor
       * @param navCtrl Use for navigation between pages
       * @param app   Root app
       * @param dataProvider  Use for getting data from the API
       * @param authProvider  Use for authentication purpose
     */
    constructor(navCtrl, authProvider, 
    //public app: App,
    dataProvider, translate, router, route, zone, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.dataProvider = dataProvider;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        /**
         * @member notifications contains the array of notification messages
         * @member userDetails Contains the user details who is logged in from local storage
         * @member noDataFound used for diplaying the message when no child found
         * @member lang Contains the language translation object
         */
        this.notifications = [];
        this.noRecordFound = '';
        this.lang = {};
        this.userDetails = {};
        this.imageModal = false;
        this.imageUrl = "";
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
        this.authProvider.event.subscribe((res) => {
            //  console.log('change',res)
            if (res.changeUser) {
                this.reloadData();
            }
        });
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getNotifications(data).then(response => {
                this.dataProvider.hideLoading();
                if (response.session) {
                    console.log(response);
                    this.notifications = response.data;
                    if (this.notifications.length == 0) {
                        this.noRecordFound = this.lang.no_private_msg;
                    }
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    this.router.navigate(['login'], { replaceUrl: true });
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
                // this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            this.dataProvider.hideLoading();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.reloadData();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    reloadData() {
        // this.dataProvider.showLoading();
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.getNotifications(data).then(response => {
                // this.dataProvider.hideLoading();
                if (response.session) {
                    this.notifications = response.data;
                    if (this.notifications.length == 0) {
                        this.noRecordFound = this.lang.no_private_msg;
                    }
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    this.router.navigate(['login'], { replaceUrl: true });
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
                // this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            // this.dataProvider.hideLoading();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    /**
     * to delete the notification
     * @param notificationId notification id which user wants to delete
     * @param index index of the notification message
     */
    deleteNotification(notificationId, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: this.lang.want_to_delete,
                backdropDismiss: false,
                buttons: [
                    {
                        text: this.lang.no,
                    },
                    {
                        text: this.lang.yes,
                        handler: () => {
                            this.dataProvider.showLoading();
                            let data = {
                                user_no: this.userDetails.details.user_no,
                                nid: notificationId,
                                session_id: this.userDetails.session_id
                            };
                            this.dataProvider.deleteNotification(data).then((response) => {
                                this.dataProvider.hideLoading();
                                if (response.session) {
                                    this.dataProvider.showToast(response.message);
                                    this.notifications.splice(index, 1);
                                }
                                else {
                                    this.authProvider.flushLocalStorage();
                                    this.dataProvider.errorALertMessage(response.message);
                                    this.router.navigate(['login'], { replaceUrl: true });
                                }
                            }).catch((error) => {
                                this.dataProvider.hideLoading();
                                this.dataProvider.errorALertMessage(error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openImageContainer(url) {
        this.imageUrl = url;
        this.imageModal = true;
    }
    hideUserImageModal(event) {
        if (event.target.className == "custom-modal-main") {
            this.imageModal = false;
        }
    }
    downloadImage(imageUrl) {
        this.dataProvider.showLoading();
        this.dataProvider.downloadImage(imageUrl).then((res) => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(this.lang.download_complete);
        }).catch((error) => {
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(error);
        });
    }
    ngOnInit() {
    }
};
PrivateMessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PrivateMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-private-message',
        template: _raw_loader_private_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_private_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], PrivateMessagePage);



/***/ }),

/***/ "Ggnp":
/*!***********************************************************!*\
  !*** ./src/app/private-message/private-message.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-private-message:host .no-data {\n  width: 100%;\n  text-align: center;\n  margin-top: 14px;\n}\napp-private-message:host p {\n  white-space: normal;\n  margin-top: 5px !important;\n  font-size: 11px;\n}\napp-private-message:host .custom-modal-content {\n  margin: 0 !important;\n}\napp-private-message:host .title-icon {\n  width: 100%;\n  position: relative;\n}\napp-private-message:host .title-icon ion-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0 !important;\n}\nion-card ion-card-content {\n  margin: unset;\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByaXZhdGUtbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFaO0FBRUk7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxvQkFBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FBQ1o7QUFLSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBRlIiLCJmaWxlIjoicHJpdmF0ZS1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1wcml2YXRlLW1lc3NhZ2U6aG9zdCB7XHJcbiAgICAubm8tZGF0YXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLW1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "YvM3":
/*!*******************************************************************!*\
  !*** ./src/app/private-message/private-message-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PrivateMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateMessagePageRoutingModule", function() { return PrivateMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _private_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private-message.page */ "Dy5+");




const routes = [
    {
        path: '',
        component: _private_message_page__WEBPACK_IMPORTED_MODULE_3__["PrivateMessagePage"]
    }
];
let PrivateMessagePageRoutingModule = class PrivateMessagePageRoutingModule {
};
PrivateMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivateMessagePageRoutingModule);



/***/ }),

/***/ "fO8F":
/*!***********************************************************!*\
  !*** ./src/app/private-message/private-message.module.ts ***!
  \***********************************************************/
/*! exports provided: PrivateMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateMessagePageModule", function() { return PrivateMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _private_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./private-message-routing.module */ "YvM3");
/* harmony import */ var _private_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private-message.page */ "Dy5+");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let PrivateMessagePageModule = class PrivateMessagePageModule {
};
PrivateMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _private_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivateMessagePageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_private_message_page__WEBPACK_IMPORTED_MODULE_6__["PrivateMessagePage"]]
    })
], PrivateMessagePageModule);



/***/ }),

/***/ "lE0w":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/private-message/private-message.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n   <ion-toolbar>\n   \t<ion-buttons slot=\"end\">\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'private_msg.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf = \"notifications?.length > 0\">\n    <ion-card class=\"student-class\" *ngFor=\"let notification of notifications; let i = index;\">\n      <ion-card-content>\n        <ion-item no-padding lines=\"none\">\n          <ion-avatar item-start slot=\"start\">\n            <img [src]=\"notification.pic\">\n          </ion-avatar>\n          <ion-label>\n            <div class=\"title-icon\">\n              <h2>{{notification.first_name}}</h2>\n              <ion-icon item-right name=\"trash\" color=\"danger\" (click)=\"deleteNotification(notification.ID, i)\">\n              </ion-icon>\n            </div>\n            <!-- <h2>{{notification.title}}</h2> -->\n            <div class=\"title-icon\">\n              <p>{{notification.notification}}</p>\n              <ion-icon name=\"attach\" item-right *ngIf=\"notification.notification_image != '' && notification.notification_image\" color=\"menu-color\"\n                (click)=\"openImageContainer(notification.notification_image)\"></ion-icon>\n            </div>\n            <span style=\"font-size: 10px; float: left;\">{{notification.date| dateFormat}}</span>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <div class=\"no-data\">\n    <ion-label text-center class=\"norecord-found\" *ngIf=\"notifications?.length == 0\">{{noRecordFound}}</ion-label>\n  </div>\n</ion-content>\n<div class=\"custom-modal-main\" *ngIf=\"imageModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-content\">\n      <img [src]=\"imageUrl\" imageViewer>\n      <div class=\"download-button\">\n        <ion-button  small icon-only clear (click) = \"downloadImage(imageUrl)\">\n          <ion-icon name=\"download\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=private-message-private-message-module-es2015.js.map
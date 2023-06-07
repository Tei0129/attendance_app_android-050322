(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "6AQs":
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.page.html */ "J2ao");
/* harmony import */ var _messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.page.scss */ "fOj/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/loader.component */ "vPOg");











let MessagesPage = class MessagesPage {
    constructor(navCtrl, 
    //public app: App,
    translate, dataProvider, authProvider, popoverController, alertCtrl, router) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.popoverController = popoverController;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.notifications = [];
        this.userDetails = {};
        this.lang = {};
        this.imageModal = false;
        this.imageUrl = "";
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
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
                this.reloadData();
            }
        });
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.presentPopover();
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.getNotifications(data).then(response => {
                this.dissmissPopOver();
                if (response.session) {
                    this.notifications = response.data;
                    if (this.notifications.length == 0) {
                        this.noRecordFound = this.lang.no_private_msg;
                    }
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.router.navigate(['login'], { replaceUrl: true });
                    this.dataProvider.errorALertMessage(response.message);
                    //  this.app.getRootNav().setRoot("LoginPage");
                }
            }).catch(error => {
                console.log(error);
                this.dissmissPopOver();
                // this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            this.dissmissPopOver();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
            // this.app.getRootNav().setRoot("LoginPage");
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
    reloadData() {
        //    this.presentPopover();
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.getNotifications(data).then(response => {
                //  this.dissmissPopOver();
                if (response.session) {
                    this.notifications = response.data;
                    if (this.notifications.length == 0) {
                        this.noRecordFound = this.lang.no_private_msg;
                    }
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.router.navigate(['login'], { replaceUrl: true });
                    this.dataProvider.errorALertMessage(response.message);
                    //  this.app.getRootNav().setRoot("LoginPage");
                }
            }).catch(error => {
                console.log(error);
                // this.dissmissPopOver();
                // this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            // this.dissmissPopOver();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
            // this.app.getRootNav().setRoot("LoginPage");
        }
    }
    /**
     * Open mail composer page
     */
    openComposer() {
        // this.navCtrl.push("SendmessagePage")
        this.router.navigate(['tabs/sendmessage']);
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
                            this.presentPopover();
                            let data = {
                                user_no: this.userDetails.details.user_no,
                                nid: notificationId,
                                session_id: this.userDetails.session_id
                            };
                            this.dataProvider.deleteNotification(data).then((response) => {
                                this.dissmissPopOver();
                                if (response.session) {
                                    this.dataProvider.showToast(response.message);
                                    this.notifications.splice(index, 1);
                                }
                                else {
                                    this.authProvider.flushLocalStorage();
                                    this.dataProvider.errorALertMessage(response.message);
                                    //this.app.getRootNav().setRoot("LoginPage");
                                }
                            }).catch((error) => {
                                this.dissmissPopOver();
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
        this.presentPopover();
        this.dataProvider.downloadImage(imageUrl).then((res) => {
            this.dissmissPopOver();
            this.dataProvider.showToast(this.lang.download_complete);
        }).catch((error) => {
            this.dissmissPopOver();
            this.dataProvider.errorALertMessage(error);
        });
    }
};
MessagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], MessagesPage);



/***/ }),

/***/ "J2ao":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'messages.pagetitle' | translate}}\n      <ion-icon *ngIf=\"userType=='1' || userType=='7' || userType=='8'\" name=\"add-outline\" class=\"add-circle\" item-end\n        color=\"icon-header\" (click)=\"openComposer()\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf = \"notifications?.length > 0\">\n    <ion-card class=\"student-class\" *ngFor=\"let notification of notifications; let i = index;\">\n      <ion-card-content>\n        <ion-item no-padding class=\"no-padding mssg-item\" lines=\"none\">\n          <ion-avatar  class=\"item-start\" slot=\"start\">\n            <img [src]=\"notification.pic\">\n          </ion-avatar>\n          <ion-label>\n          <div class=\"title-icon\">\n            <h2>{{notification.first_name}}</h2>\n            <ion-icon  class=\"item-right\" name=\"trash\" color=\"danger\" (click)=\"deleteNotification(notification.ID, i)\">\n            </ion-icon>\n          </div>\n          <!-- <h2 *ngIf=\"notification.title\">{{notification.title}}</h2> -->\n          <div class=\"title-icon\">\n            <p>{{notification.notification}}</p>\n            <ion-icon name=\"attach\" item-right *ngIf=\"notification.notification_image != '' && notification.notification_image\" color=\"menu-color\"\n              (click)=\"openImageContainer(notification.notification_image)\"></ion-icon>\n          </div>\n          <span style=\"font-size: 10px; float: left;\">{{notification.date| dateFormat}}</span>\n        </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <div class=\"no-record\">\n    <ion-label text-center class=\"text-center norecord-found\" *ngIf=\"notifications?.length == 0\">{{noRecordFound}}</ion-label>\n  </div>\n</ion-content>\n\n<div class=\"custom-modal-main\" *ngIf=\"imageModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-content\">\n      <img [src]=\"imageUrl\" imageViewer>\n      <div class=\"download-button\">\n        <button ion-button small icon-only clear (click)=\"downloadImage(imageUrl)\">\n          <ion-icon name=\"download\"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "JGbt":
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function() { return MessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.page */ "6AQs");




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ "TdLt":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-routing.module */ "JGbt");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "6AQs");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "fOj/":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-messages:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 27px;\n}\napp-messages:host p {\n  white-space: normal;\n  margin-top: 5px !important;\n  width: 92%;\n}\napp-messages:host .title-icon {\n  width: 100%;\n  position: relative;\n}\napp-messages:host .title-icon ion-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0 !important;\n}\napp-messages:host .custom-modal-content {\n  margin: 0 !important;\n}\napp-messages:host .no-record {\n  width: 100%;\n  text-align: center;\n  padding-top: 52px;\n  color: #988f8f;\n}\napp-messages:host ion-card-content {\n  padding: 2px 0px 9px 0px;\n}\napp-messages:host ion-card-content .mssg-item .title-icon p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 0.9rem;\n  line-height: normal;\n  text-overflow: inherit;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQURaO0FBSUk7RUFDSSxvQkFBQTtBQUZSO0FBSUk7RUFDUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGWjtBQUtJO0VBQ1Esd0JBQUE7QUFIWjtBQVFnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFOcEIiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW1lc3NhZ2VzOmhvc3Qge1xyXG4gICAgLmFkZC1jaXJjbGV7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIH1cclxuICAgXHJcbiAgICBwe1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXN0b20tbW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uby1yZWNvcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk4OGY4ZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMHB4IDlweCAwcHg7XHJcblxyXG4gICAgICAgIC5tc3NnLWl0ZW17XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtaWNvbntcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=messages-messages-module-es2015.js.map
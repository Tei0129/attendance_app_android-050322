(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parentconnect-parentconnect-module"],{

/***/ "1M7V":
/*!*******************************************************!*\
  !*** ./src/app/parentconnect/parentconnect.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-parentconnect:host .page-title {\n  font-size: 1.7rem;\n  font-weight: 600;\n}\napp-parentconnect:host ion-card-content {\n  position: relative;\n  padding: unset;\n}\napp-parentconnect:host ion-card-content ion-avatar {\n  position: relative;\n}\napp-parentconnect:host ion-card-content ion-avatar .ticket-status-circle {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  bottom: -2px;\n  right: -2px;\n  border-radius: 50%;\n}\napp-parentconnect:host ion-card-content .ticket-status {\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  font-size: 25px;\n}\napp-parentconnect:host ion-card-content .ticket-status ion-icon::before {\n  font-size: 24px;\n}\napp-parentconnect:host ion-card-content .attachment_image {\n  margin-top: 0;\n  margin-bottom: 0;\n}\napp-parentconnect:host .custom-modal-content {\n  margin: 0 !important;\n}\n.chatOpen {\n  color: #43a047;\n}\n.chatClosed {\n  color: red;\n}\n.no-data {\n  text-align: center;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhcmVudGNvbm5lY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7QUFDWjtBQUFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNJLGVBQUE7QUFDaEI7QUFBWTtFQUNJLGVBQUE7QUFFaEI7QUFDUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNaO0FBRUk7RUFDSSxvQkFBQTtBQUFSO0FBR0E7RUFFUSxjQUFBO0FBRFI7QUFHQTtFQUVJLFVBQUE7QUFESjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InBhcmVudGNvbm5lY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXBhcmVudGNvbm5lY3Q6aG9zdCB7XHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLnRpY2tldC1zdGF0dXMtY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpY2tldC1zdGF0dXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgaW9uLWljb246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dGFjaG1lbnRfaW1hZ2Uge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXN0b20tbW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uY2hhdE9wZW57XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDNhMDQ3O1xyXG59XHJcbi5jaGF0Q2xvc2Vke1xyXG4gICAgLy8gZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4ubm8tZGF0YXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "JaT6":
/*!*****************************************************!*\
  !*** ./src/app/parentconnect/parentconnect.page.ts ***!
  \*****************************************************/
/*! exports provided: ParentconnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentconnectPage", function() { return ParentconnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parentconnect_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parentconnect.page.html */ "ZTTZ");
/* harmony import */ var _parentconnect_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parentconnect.page.scss */ "1M7V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connect_new_message_connect_new_message_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connect-new-message/connect-new-message.page */ "1Ee9");











let ParentconnectPage = class ParentconnectPage {
    /**
     * Class list constructor
     * @param navCtrl Use for navigation between pages
     * @param dataProvider  Use for getting data from the API
     * @param authProvider  Use for authentication purpose
     * @param alertCtrl Ionic alert controller to show alert popup
     * @param translate used for translation service
     */
    constructor(navCtrl, alertCtrl, dataProvider, modalCtrl, translate, authProvider, route, router, zone, 
    //public app: App,
    network) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.authProvider = authProvider;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.network = network;
        /**
        * @member chats contains the support chats
        * @member userDetails Contains the user details who is logged in from local storage
        * @member noDataFound used for diplaying the message when no child found
        * @member lang Contains the language translation object
        */
        this.lang = {};
        this.chats = [];
        this.noDataFound = '';
        this.userDetails = {};
        this.imageUrl = '';
        this.imageModal = false;
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
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            this.getAllChats();
        }
        else {
            this.authProvider.flushLocalStorage();
            // this.app.getRootNav().setRoot("LoginPage");
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    reloadData() {
        if (localStorage.getItem("userloggedin")) {
            // this.dataProvider.showLoading();
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id,
                "user_type": this.userDetails.details.user_type
            };
            this.dataProvider.getConnectChatList(data).then(response => {
                //  this.dataProvider.hideLoading();
                console.log(response);
                if (response.session) {
                    if (response.chatList) {
                        if (response.chatList.length > 0) {
                            this.chats = response.chatList;
                            console.log(this.chats);
                        }
                        else {
                            this.noDataFound = this.lang.no_connect_msg;
                        }
                    }
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    this.router.navigate(['login'], { replaceUrl: true });
                }
            }).catch(error => {
                //  this.dataProvider.hideLoading();
                // this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            this.authProvider.flushLocalStorage();
            // this.app.getRootNav().setRoot("LoginPage");
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    /**
     * Get all chats
     */
    getAllChats(loader = true) {
        this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
        this.userType = this.userDetails.details.user_type;
        let data = {
            "user_no": this.userDetails.details.user_no,
            "school_id": this.userDetails.details.school_id,
            "session_id": this.userDetails.session_id,
            "user_type": this.userDetails.details.user_type
        };
        if (loader)
            this.dataProvider.showLoading();
        this.dataProvider.getConnectChatList(data).then(response => {
            this.dataProvider.hideLoading();
            console.log(response);
            if (response.session) {
                if (response.chatList) {
                    if (response.chatList.length > 0) {
                        this.chats = response.chatList;
                        console.log(this.chats);
                    }
                    else {
                        this.noDataFound = this.lang.no_connect_msg;
                    }
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
    /**
     * Open modal popup to create the chat ticket
     */
    createChatMessage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.network.type != this.network.Connection.UNKNOWN && this.network.type != this.network.Connection.NONE) {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.messageWarningHeader,
                    message: this.lang.messageWarningbody,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: this.lang.alert_btn_cancel_text,
                            role: "cancel"
                        },
                        {
                            text: this.lang.alert_btn_accept_text,
                            handler: () => {
                                this.createModal();
                                // let modal = this.modalCtrl.create("ConnectNewMessagePage");
                                // modal.present();
                                // modal.onDidDismiss((data)=>{
                                //   if(data){
                                //     this.getAllChats();
                                //   }
                                // })
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.dataProvider.showToast(this.lang.no_internet);
            }
        });
    }
    createModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _connect_new_message_connect_new_message_page__WEBPACK_IMPORTED_MODULE_10__["ConnectNewMessagePage"],
            });
            yield modal.present();
            modal.onDidDismiss().then((refresh) => {
                if (refresh) {
                    this.getAllChats(false);
                }
            });
        });
    }
    /**
     * Open chat screen for reply
     * @param chat chat object contains chat id, title, message .....
     */
    openChat(chat) {
        console.log(chat);
        if (this.network.type != this.network.Connection.UNKNOWN && this.network.type != this.network.Connection.NONE) {
            const navigation = {
                state: chat
            };
            this.zone.run(() => {
                this.router.navigate(['connect-chat'], navigation);
            });
            //  this.navCtrl.push("ConnectChatPage", {"chat": chat});
        }
        else {
            this.dataProvider.showToast(this.lang.no_internet);
        }
    }
    /**
     * Open chat screen for reply
     * @param chat chat object contains chat id, title, message .....
     */
    closeTicket(chat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.alert,
                message: this.lang.want_to_close,
                buttons: [
                    {
                        text: this.lang.no,
                        role: 'cancel'
                    },
                    {
                        text: this.lang.yes,
                        handler: () => {
                            let data = {
                                user_no: this.userDetails.details.user_no,
                                chat_list_id: chat.id,
                                session_id: this.userDetails.session_id
                            };
                            this.dataProvider.showLoading();
                            this.dataProvider.closeParentConnectChat(data).then(response => {
                                this.dataProvider.hideLoading();
                                if (response.session) {
                                    chat.ticket_status = '1';
                                    this.dataProvider.showToast(response.message);
                                }
                                else {
                                    this.authProvider.flushLocalStorage();
                                    this.dataProvider.errorALertMessage(response.message);
                                    this.router.navigate(['login'], { replaceUrl: true });
                                }
                            }).catch(error => {
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
    /**
     * Open modal for reopening the ticket
     * @param chat chat object contains chat id, title, message .....
     */
    reopenTicket(chat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.alert,
                message: this.lang.want_to_reopen,
                buttons: [
                    {
                        text: this.lang.no,
                        role: 'cancel'
                    },
                    {
                        text: this.lang.yes,
                        handler: () => {
                            let data = {
                                user_no: this.userDetails.details.user_no,
                                chat_list_id: chat.id,
                                session_id: this.userDetails.session_id
                            };
                            this.dataProvider.showLoading();
                            this.dataProvider.reopenParentConnectChat(data).then(response => {
                                this.dataProvider.hideLoading();
                                if (response.session) {
                                    chat.ticket_status = '0';
                                    this.dataProvider.showToast(response.message);
                                }
                                else {
                                    this.authProvider.flushLocalStorage();
                                    this.dataProvider.errorALertMessage(response.message);
                                    this.router.navigate(['login'], { replaceUrl: true });
                                }
                            }).catch(error => {
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
ParentconnectPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] }
];
ParentconnectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parentconnect',
        template: _raw_loader_parentconnect_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parentconnect_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]])
], ParentconnectPage);



/***/ }),

/***/ "ZTTZ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parentconnect/parentconnect.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n          <ion-button ion-button small clear icon-only (click)=\"createChatMessage()\" *ngIf=\"userType == '4' ||  userType == '8'\">\n            <ion-icon name=\"add-circle-outline\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n          </ion-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"userType == '8'\"> {{'parentconnect.pagetitlestudent' | translate}}</ion-title>\n    <ion-title *ngIf=\"userType != '8'\"> {{'parentconnect.pagetitle' | translate}}</ion-title>\n       \n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"md\">\n  <ion-list *ngIf = \"chats?.length > 0\">\n    <ion-card class=\"student-class\" *ngFor=\"let chatuser of chats\">\n      <ion-card-content no-padding>\n        <ion-row no-padding no-margin>\n          <ion-col size=\"10\" align-self-center no-padding>\n            <ion-item (click)=\"openChat(chatuser)\" lines=\"none\">\n              <ion-label>\n                <h2>{{chatuser.name}}</h2>\n                <p>{{chatuser.title}}</p>\n                <p style=\"font-size: 10px;\">{{chatuser.updated_time| dateFormat}}</p>\n              </ion-label>\n              <ion-avatar slot=\"start\">\n                <img [src]=\"chatuser.pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n                <div class=\"ticket-status-circle\"\n                  [ngStyle]=\"{'background': chatuser.ticket_status == '0' ? '#43a047' : '#ececec'  }\"></div>\n              </ion-avatar>\n            </ion-item>\n            <ion-button clear icon-only small margin-right\n              *ngIf=\"chatuser.message_image != '' && chatuser.message_image\" class=\"attachment_image\"\n              (click)=\"openImageContainer(chatuser.message_image)\">\n              <ion-icon name=\"attach\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"1\" align-self-center no-padding *ngIf=\"userType=='1'\">\n            <span *ngIf=\"chatuser.ticket_status == '0';else closed;\" class=\"ticket-status\">\n              <ion-icon name=\"lock-open-outline\" color=\"secondary\" (click)=\"closeTicket(chatuser)\"></ion-icon>\n            </span>\n            <ng-template #closed>\n              <span class=\"ticket-status\">\n                <ion-icon name=\"lock-closed-outline\" color=\"danger\"  (click)=\"reopenTicket(chatuser)\">\n                  \n                </ion-icon>\n              </span>\n            </ng-template>\n          </ion-col>\n          <ion-col size=\"2\" align-self-center no-padding *ngIf=\"userType=='4'\">\n            <span *ngIf=\"chatuser.ticket_status == '0';else closed;\" class=\"ticket-status\">\n            <!--   <span class=\"chatOpen\">Open</span> -->\n              <ion-icon name=\"lock-open-outline\" class=\"chatOpen\"></ion-icon>\n            </span>\n            <ng-template #closed>\n              <span class=\"ticket-status\">\n                <ion-icon name=\"lock-closed-outline\" class=\"chatClosed\"></ion-icon>\n              </span>\n            </ng-template>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <div class=\"no-data\">\n    <ion-label text-center *ngIf=\"chats?.length == 0\">{{noDataFound}}</ion-label>\n  </div>\n</ion-content>\n\n<div class=\"custom-modal-main\" *ngIf=\"imageModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-content\">\n      <img [src]=\"imageUrl\" imageViewer>\n      <div class=\"download-button\">\n        <ion-button  small icon-only clear (click)=\"downloadImage(imageUrl)\">\n          <ion-icon name=\"download\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "sbNx":
/*!***************************************************************!*\
  !*** ./src/app/parentconnect/parentconnect-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ParentconnectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentconnectPageRoutingModule", function() { return ParentconnectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _parentconnect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parentconnect.page */ "JaT6");




const routes = [
    {
        path: '',
        component: _parentconnect_page__WEBPACK_IMPORTED_MODULE_3__["ParentconnectPage"]
    }
];
let ParentconnectPageRoutingModule = class ParentconnectPageRoutingModule {
};
ParentconnectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ParentconnectPageRoutingModule);



/***/ }),

/***/ "wx9S":
/*!*******************************************************!*\
  !*** ./src/app/parentconnect/parentconnect.module.ts ***!
  \*******************************************************/
/*! exports provided: ParentconnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentconnectPageModule", function() { return ParentconnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _parentconnect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parentconnect-routing.module */ "sbNx");
/* harmony import */ var _parentconnect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parentconnect.page */ "JaT6");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let ParentconnectPageModule = class ParentconnectPageModule {
};
ParentconnectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _parentconnect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParentconnectPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_parentconnect_page__WEBPACK_IMPORTED_MODULE_6__["ParentconnectPage"]]
    })
], ParentconnectPageModule);



/***/ })

}]);
//# sourceMappingURL=parentconnect-parentconnect-module-es2015.js.map
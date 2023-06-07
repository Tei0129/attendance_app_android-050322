(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-chat-connect-chat-module"],{

/***/ "J7Fa":
/*!*****************************************************!*\
  !*** ./src/app/connect-chat/connect-chat.module.ts ***!
  \*****************************************************/
/*! exports provided: ConnectChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectChatPageModule", function() { return ConnectChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _connect_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect-chat-routing.module */ "OhmC");
/* harmony import */ var _connect_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect-chat.page */ "fUl0");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let ConnectChatPageModule = class ConnectChatPageModule {
};
ConnectChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connect_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectChatPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_connect_chat_page__WEBPACK_IMPORTED_MODULE_6__["ConnectChatPage"]]
    })
], ConnectChatPageModule);



/***/ }),

/***/ "OhmC":
/*!*************************************************************!*\
  !*** ./src/app/connect-chat/connect-chat-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConnectChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectChatPageRoutingModule", function() { return ConnectChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connect_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect-chat.page */ "fUl0");




const routes = [
    {
        path: '',
        component: _connect_chat_page__WEBPACK_IMPORTED_MODULE_3__["ConnectChatPage"]
    }
];
let ConnectChatPageRoutingModule = class ConnectChatPageRoutingModule {
};
ConnectChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnectChatPageRoutingModule);



/***/ }),

/***/ "XvEf":
/*!*****************************************************!*\
  !*** ./src/app/connect-chat/connect-chat.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-connect-chat:host .margintop {\n  margin-top: 8px !important;\n}\napp-connect-chat:host h6 {\n  margin: 2vw;\n}\napp-connect-chat:host .avatar-img {\n  width: 40px;\n  height: 40px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n  margin-left: 9px;\n}\napp-connect-chat:host .sender-message {\n  text-align: left;\n  background: #43a047;\n  color: #fff;\n  padding: 7px;\n  max-width: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: right;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  margin-right: 3px;\n}\napp-connect-chat:host .sender-message-first-child:after {\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 5px;\n  right: -1px;\n  position: absolute;\n  border-style: solid;\n  border-width: 13px 13px 0 0;\n  border-color: #43a047 transparent transparent transparent;\n}\napp-connect-chat:host .receiver-message {\n  background: #00b0ff;\n  padding: 7px;\n  max-width: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  display: flex;\n  color: #fff;\n  margin-left: 4px;\n}\napp-connect-chat:host .receiver-message-first-child:before {\n  width: 0;\n  height: 0;\n  content: \"\";\n  top: 5px;\n  left: 1px;\n  position: absolute;\n  border-style: solid;\n  border-width: 0 13px 13px 0;\n  border-color: transparent #00b0ff transparent transparent;\n}\napp-connect-chat:host .receiver-message ul {\n  margin: 0;\n  padding: 0;\n}\napp-connect-chat:host .receiver-message ul li {\n  list-style: none;\n  margin: 0;\n}\napp-connect-chat:host li.sender-name {\n  font-weight: bold;\n  font-size: 12px;\n}\napp-connect-chat:host ion-row {\n  margin-bottom: 2px;\n}\napp-connect-chat:host ion-footer .post-image-sec.item.item-block.item-md {\n  max-height: 200px;\n  overflow: hidden;\n}\napp-connect-chat:host ion-footer .post-image-sec.item.item-block.item-md .post-image {\n  width: 100%;\n  height: auto;\n}\napp-connect-chat:host ion-footer .send-icon {\n  margin: -6px -6px;\n}\napp-connect-chat:host ion-footer .send-icon button {\n  transform: rotate(-45deg);\n}\napp-connect-chat:host .connectImg {\n  margin-top: 7px;\n}\napp-connect-chat:host .download-button {\n  position: absolute;\n  bottom: 1rem;\n}\napp-connect-chat:host .download-button ion-icon::before {\n  font-size: 30px;\n}\napp-connect-chat:host .image-sec {\n  background: #fff !important;\n}\napp-connect-chat:host .send-btn {\n  --border-radius: 100%;\n  width: 45px;\n  height: 45px;\n  --box-shadow: 0px 0px 10px #00000026;\n}\napp-connect-chat:host .attech-btn {\n  --box-shadow:unset;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nvbm5lY3QtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwwQkFBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtBQUFSO0FBR0k7RUFDUSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQUdJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtBQURSO0FBR0k7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQURSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLFNBQUE7QUFEUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGWjtBQUdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFEaEI7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFHWTtFQUNJLHlCQUFBO0FBRGhCO0FBS0k7RUFDSSxlQUFBO0FBSFI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUhSO0FBSVE7RUFDSSxlQUFBO0FBRlo7QUFLSTtFQUNJLDJCQUFBO0FBSFI7QUFLSTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUhKO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFIUiIsImZpbGUiOiJjb25uZWN0LWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbm5lY3QtY2hhdDpob3N0IHtcclxuICAgIC5tYXJnaW50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBoNntcclxuICAgICAgICBtYXJnaW46IDJ2dztcclxuICAgIH1cclxuICAgIC5hdmF0YXItaW1nIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICB9XHJcbiAgICAuc2VuZGVyLW1lc3NhZ2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnNlbmRlci1tZXNzYWdlLWZpcnN0LWNoaWxkOmFmdGVye1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTNweCAxM3B4IDAgMDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0M2EwNDcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlY2VpdmVyLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiMGZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIH1cclxuICAgIC5yZWNlaXZlci1tZXNzYWdlLWZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAxM3B4IDEzcHggMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMGIwZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAucmVjZWl2ZXItbWVzc2FnZSB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmVjZWl2ZXItbWVzc2FnZSB1bCBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBsaS5zZW5kZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB9XHJcbiAgICBpb24tZm9vdGVye1xyXG4gICAgICAgIC5wb3N0LWltYWdlLXNlYy5pdGVtLml0ZW0tYmxvY2suaXRlbS1tZCB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAucG9zdC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VuZC1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW46IC02cHggLTZweDtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb25uZWN0SW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgICAuZG93bmxvYWQtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGlvbi1pY29uOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltYWdlLXNlYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlbmQtYnRue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMjY7XHJcbiAgICB9XHJcbiAgICAuYXR0ZWNoLWJ0bntcclxuICAgICAgICAtLWJveC1zaGFkb3c6dW5zZXQ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "fUl0":
/*!***************************************************!*\
  !*** ./src/app/connect-chat/connect-chat.page.ts ***!
  \***************************************************/
/*! exports provided: ConnectChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectChatPage", function() { return ConnectChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_connect_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./connect-chat.page.html */ "zl7n");
/* harmony import */ var _connect_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect-chat.page.scss */ "XvEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");








//import { TabsPage } from '../tabs/tabs';




let ConnectChatPage = class ConnectChatPage {
    /**
     * Class list constructor
     * @param navCtrl Use for navigation between pages
     * @param app   Root app
     * @param dataProvider  Use for getting data from the API
     * @param authProvider  Use for authentication purpose
     * @param viewCtrl View controller
     */
    constructor(navCtrl, 
    //  public viewCtrl: ViewController, 
    //  public app: App,
    translate, dataProvider, authProvider, 
    // public navParams: NavParams, 
    alertCtrl, _location, photoViewer, router, route, camera) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this._location = _location;
        this.photoViewer = photoViewer;
        this.router = router;
        this.route = route;
        this.camera = camera;
        /**
         * @member userDetails Contains the user details who is logged in from local storage
         * @member chat used to store the chat infromation coming from last page
         * @member message typing meessage
         * @member messages contains all the messages
         * @member lastMessageId contains the id of last message
         * @member chatInterval will store the interval
         * @member lang Contains the language translation object
         */
        this.userDetails = {};
        this.chat = {};
        this.message = "";
        this.messages = [];
        this.lastMessageId = 0;
        this.attachment = '';
        this.lang = {};
        this.image = '';
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.chat = this.router.getCurrentNavigation().extras.state;
                console.log(this.navData);
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                console.log(this.userDetails);
                this.messages.push({
                    datetime: this.chat.created,
                    message: this.chat.message,
                    receiver: this.userDetails.details.user_type == '1' ? 'true' : 'false',
                    msg_from: this.chat.parent_user_no,
                    msg_to: this.chat.school_id,
                    attachment_url: this.chat.message_image,
                    id: 0
                });
                this.getInitialChat();
                this.chatInterval = setInterval(() => {
                    this.getChats(this.lastMessageId);
                }, 5000);
            }
        });
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    ionViewWillEnter() {
    }
    showPhoto(url) {
        this.photoViewer.show(url);
    }
    /**
     * Get the initial chat when user comes to this page
     */
    getInitialChat() {
        this.dataProvider.showLoading();
        let data = {
            user_no: this.userDetails.details.user_no,
            school_id: this.userDetails.details.school_id,
            user_type: this.userDetails.details.user_type,
            session_id: this.userDetails.session_id,
            chat_id: this.chat.id,
            last_msg_id: 0
        };
        this.dataProvider.getParentConnectChatMessages(data).then((response) => {
            this.dataProvider.hideLoading();
            if (response.session) {
                let length = response.chat.length;
                if (length > 0) {
                    response.chat.forEach((message) => {
                        this.messages.push(message);
                    });
                    this.lastMessageId = response.chat[length - 1].id;
                    setTimeout(() => {
                        if (this.contentArea) {
                            this.contentArea.scrollToBottom(300);
                        }
                    });
                }
            }
            else {
                // this.authProvider.flushLocalStorage();
                this.dataProvider.errorALertMessage(response.message);
                this.router.navigate(['login'], { replaceUrl: true });
            }
        }).catch((error) => {
            this.dataProvider.hideLoading();
            // this.dataProvider.errorALertMessage(error);
        });
    }
    /**
     * Get the chat after the last message
     * @param lastMessageId Contains the last message id
     */
    getChats(lastMessageId) {
        let data = {
            user_no: this.userDetails.details.user_no,
            school_id: this.userDetails.details.school_id,
            user_type: this.userDetails.details.user_type,
            session_id: this.userDetails.session_id,
            chat_id: this.chat.id,
            last_msg_id: lastMessageId
        };
        this.dataProvider.getParentConnectChatMessages(data).then((response) => {
            if (response.session) {
                let length = response.chat.length;
                if (length > 0) {
                    let msgLength = this.messages.length;
                    response.chat.forEach((message) => {
                        if (message.id < this.messages[msgLength - 1].id) {
                            this.messages.push(message);
                        }
                        else {
                            let msg = this.messages.filter((oldMsg) => {
                                return oldMsg.id == message.id;
                            });
                            if (msg.length == 0) {
                                this.messages.push(message);
                            }
                        }
                    });
                    setTimeout(() => {
                        if (this.contentArea._scroll) {
                            this.contentArea.scrollToBottom(10);
                        }
                    });
                    this.lastMessageId = response.chat[length - 1].id;
                }
            }
            else {
                // this.authProvider.flushLocalStorage();
                this.dataProvider.errorALertMessage(response.message);
                this.router.navigate(['login'], { replaceUrl: true });
            }
        }).catch((error) => {
            // this.dataProvider.errorALertMessage(error);
            console.log(error);
        });
    }
    /**
     * Used to dismiss the modal opened for the chat
     */
    dismiss() {
        if (this.chatInterval) {
            clearInterval(this.chatInterval);
        }
        this._location.back();
        // this.viewCtrl.dismiss();
    }
    /**
     * Send the message to provider
     */
    sendMessage() {
        if ((this.message && this.message.trim() != '') || this.attachment != '') {
            if (this.message.length > 140) {
                this.dataProvider.showToast(this.lang.max_body);
            }
            else {
                this.image = '';
                this.dataProvider.showLoading();
                let data = {};
                if (this.userDetails.details.user_type == '4' || this.userDetails.details.user_type == '8') {
                    data = {
                        session_id: this.userDetails.session_id,
                        user_no: this.userDetails.details.user_no,
                        user_type: this.userDetails.details.user_type,
                        chat_msg: {
                            connect_id: this.chat.id,
                            msg_from: this.userDetails.details.user_no,
                            msg_to: this.userDetails.details.school_id,
                            message: this.message,
                            attachment_url: this.attachment
                        }
                    };
                }
                else if (this.userDetails.details.user_type == '1') {
                    data = {
                        session_id: this.userDetails.session_id,
                        user_no: this.userDetails.details.user_no,
                        user_type: this.userDetails.details.user_type,
                        chat_msg: {
                            connect_id: this.chat.id,
                            msg_from: this.userDetails.details.school_id,
                            msg_to: this.chat.parent_user_no,
                            admin_user_no: this.userDetails.details.user_no,
                            message: this.message,
                            attachment_url: this.attachment
                        }
                    };
                }
                this.dataProvider.sendParentConnectChatMsg(data).then((response) => {
                    this.dataProvider.hideLoading();
                    if (response.session) {
                        this.dataProvider.showToast(response.message);
                        if (this.lastMessageId < response.msg_id) {
                            if (response.attachment_url) {
                                this.messages.push({
                                    receiver: 'false',
                                    message: this.message,
                                    id: response.msg_id,
                                    attachment_url: response.attachment_url
                                });
                            }
                            else {
                                this.messages.push({
                                    receiver: 'false',
                                    message: this.message,
                                    id: response.msg_id
                                });
                            }
                            setTimeout(() => {
                                if (this.contentArea._scroll) {
                                    this.contentArea.scrollToBottom(10);
                                }
                            });
                        }
                        this.message = '';
                        this.attachment = '';
                    }
                    else {
                        // this.authProvider.flushLocalStorage();
                        this.dataProvider.errorALertMessage(response.message);
                        this.router.navigate(['login'], { replaceUrl: true });
                    }
                }).catch((error) => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(error);
                });
            }
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
                this.attachment = "data:image/png;base64," + imageData;
                this.image = 'data:image/jpeg;base64,' + imageData;
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
                this.attachment = "data:image/png;base64," + imageData;
                this.image = 'data:image/jpeg;base64,' + imageData;
            }
        });
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
ConnectChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] }
];
ConnectChatPage.propDecorators = {
    contentArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contentArea',] }]
};
ConnectChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-connect-chat',
        template: _raw_loader_connect_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_connect_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]])
], ConnectChatPage);



/***/ }),

/***/ "zl7n":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect-chat/connect-chat.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>\n\n    <ion-row no-padding no-margin *ngIf=\"chat\">\n      <ion-col size=\"2\" no-padding no-margin>\n        <img class=\"avatar-img\" [src]=\"chat.pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\" imageViewer  (click)=\"showPhoto(chat.pic)\"/>\n      </ion-col>\n      <ion-col size=\"10\" align-self-center no-padding no-margin text-right>\n        <h6>{{chat.name}}</h6>\n      </ion-col>\n    </ion-row> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding #contentArea class=\"right-direction\" mode=\"md\">\n  <div *ngFor=\"let message of messages; let i = index\">\n    <ion-row *ngIf=\"message.receiver == 'false'\"\n      [class.margintop]=\"i > 0 && messages[i-1].receiver != message.receiver\">\n      <ion-col size=\"4\" align-self-center no-padding></ion-col>\n      <ion-col size=\"8\" align-self-center text-right no-padding>\n        <div class=\"sender-message\"\n          [class.sender-message-first-child]=\"(i > 0 && messages[i-1].receiver != message.receiver) || i==0\">\n          <span>{{message.message}}</span>\n          <div class=\"image-sec\" *ngIf=\"message.attachment_url != '' && message.attachment_url != undefined\">\n            <img class=\"connectImg\" [src]=\"message.attachment_url\" imageViewer (click)=\"showPhoto(message.attachment_url)\" />\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"message.receiver == 'true'\" [class.margintop]=\"i > 0 && messages[i-1].receiver != message.receiver\">\n      <ion-col size=\"8\" align-self-center no-padding>\n        <div class=\"receiver-message\"\n          [class.receiver-message-first-child]=\"(i > 0 && messages[i-1].receiver != message.receiver) || i==0\">\n          <ul>\n            <li class=\"sender-name\">{{message.senderName}}</li>\n            <li>{{message.message}}</li>\n            <li class=\"image-sec\" *ngIf=\"message.attachment_url != '' && message.attachment_url != undefined\">\n              <img class=\"connectImg\" [src]=\"message.attachment_url\" imageViewer (click)=\"showPhoto(message.attachment_url)\" />\n              <div class=\"download-button\">\n                <ion-button ion-button small icon-only outline color=\"white\" (click)=\"downloadImage(message.attachment_url)\">\n                  <ion-icon name=\"download\" color=\"dark\" style=\"font-size: 25px;\"></ion-icon>\n                </ion-button>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\" align-self-center no-padding></ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"chat && chat.ticket_status == '0'\" style=\"background: #fff;color: #000;\">\n  <ion-item class=\"post-image-sec\" *ngIf=\"image != ''\">\n    <img [src]=\"image\" class=\"post-image\" />\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"8.5\">\n      <ion-input class=\"message\" [(ngModel)]=\"message\" text-right\n        placeholder=\"{{'parentconnect_chat.typehere'| translate}}\"></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\">\n      <ion-button class=\"attech-btn\"  clear small icon-only color=\"menu-color\" (click)=\"takePicture()\">\n        <ion-icon name=\"attach\" style=\"color:#000\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" class=\"send-icon\">\n      <ion-fab>\n        <ion-button ion-fab mini class=\"send-btn\"  (click)=\"sendMessage()\">\n          <ion-icon name=\"send\"></ion-icon>\n        </ion-button>\n      </ion-fab>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=connect-chat-connect-chat-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sendmessage-sendmessage-module"],{

/***/ "8Jp3":
/*!***************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.module.ts ***!
  \***************************************************/
/*! exports provided: SendmessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessagePageModule", function() { return SendmessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sendmessage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sendmessage-routing.module */ "RbdT");
/* harmony import */ var _sendmessage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sendmessage.page */ "UU7i");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let SendmessagePageModule = class SendmessagePageModule {
};
SendmessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sendmessage_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendmessagePageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_sendmessage_page__WEBPACK_IMPORTED_MODULE_6__["SendmessagePage"]]
    })
], SendmessagePageModule);



/***/ }),

/***/ "C5b9":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sendmessage/sendmessage.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n  <ion-toolbar>\n   \t<ion-buttons slot=\"end\" class=\"back-btn\">\n      <ion-icon name=\"arrow-back-outline\" (click)=\"moveBack()\"></ion-icon>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'sendmsg.title'| translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content padding class=\"right-direction\" mode=\"md\">\n  <form #privateMessage='ngForm' class=\"fform\">\n    <ion-row text-right>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.parent'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.parents\" name=\"parent\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.mod'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding text-right>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.mod\" name=\"moderator\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <ion-row text-right padding-top>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.users'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.others\" name=\"specificuser\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.admin'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.admin\" name=\"admin\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <ion-row text-right padding-top>\n      <ion-col size=\"5\" align-self-center>\n        {{'sendmsg.viewer'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding text-right>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.viewer\" name=\"viewer\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"5\" align-self-center>\n        {{'sendmsg.teachers'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding text-right>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.tech\" name=\"teacher\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <div class=\"subject\" *ngIf=\"mail.send_to.others\">\n      <!-- <ion-item>\n        <ion-input type=\"email\" class=\"message\" name=\"useremail\" placeholder=\"{{'sendmsg.emai_user_id'| translate}}\"\n          [(ngModel)]=\"mail.one_user_email\" text-right></ion-input>\n      </ion-item> -->\n      <ion-item (click)=\"selectUserpage()\" >\n          <ion-label>{{'sendmsg.select_user'| translate}}</ion-label>\n          <p *ngIf=\"this.mail.selected_users?.length==1\">{{selectedUsersShow[0]}}</p>\n          <p *ngIf=\"this.mail.selected_users?.length > 1\">{{selectedUsersShow[0]+',...'}}</p>\n          <!-- <ionic-selectable style=\"height: 4vh;\" \n            [(ngModel)]=\"selectedUsers\"\n            [ngModelOptions]=\"{standalone: true}\"\n            [isMultiple]=\"true\"\n            [items]=\"users\"\n            itemValueField=\"user_no\"\n            itemTextField=\"first_name\"\n            (onChange)=\"portChange($event)\"\n            [canSearch]=\"true\">\n          </ionic-selectable> -->\n        </ion-item>\n    </div>\n    <!-- <div class=\"subject\">\n      <ion-item>\n        <ion-input type=\"text\" class=\"message\" placeholder=\"{{'sendmsg.noti_title'| translate}}\"\n          [(ngModel)]=\"mail.title\" text-right name=\"title\" #title='ngModel' required maxlength=\"35\"></ion-input>\n      </ion-item>\n    </div> -->\n    <div class=\"subject\">\n      <ion-item>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"{{'sendmsg.notification'| translate}}\"\n          [(ngModel)]=\"mail.notification\" text-right name=\"msg_body\" #msg_body='ngModel' required maxlength=\"140\">\n        </ion-textarea>\n      </ion-item>\n      <ion-button class=\"attachment\" icon-only  (click) = \"takePicture()\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"ticketImage != ''\">\n      <img style=\"width: 41px\" src= \"assets/imgs/image.png\"/>\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n <ion-button  expand=\"full\" class=\"send-btn\" color=\"dark\"\n    (click)=\"sendMessage()\"><ion-spinner name=\"crescent\" *ngIf=\"show_spinner\"></ion-spinner><span *ngIf=\"!show_spinner\"> {{'sendmsg.send_msg'| translate}} </span></ion-button>\n</ion-footer>");

/***/ }),

/***/ "RbdT":
/*!***********************************************************!*\
  !*** ./src/app/sendmessage/sendmessage-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SendmessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessagePageRoutingModule", function() { return SendmessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sendmessage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendmessage.page */ "UU7i");




const routes = [
    {
        path: '',
        component: _sendmessage_page__WEBPACK_IMPORTED_MODULE_3__["SendmessagePage"]
    }
];
let SendmessagePageRoutingModule = class SendmessagePageRoutingModule {
};
SendmessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendmessagePageRoutingModule);



/***/ }),

/***/ "UU7i":
/*!*************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.page.ts ***!
  \*************************************************/
/*! exports provided: SendmessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessagePage", function() { return SendmessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sendmessage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sendmessage.page.html */ "C5b9");
/* harmony import */ var _sendmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendmessage.page.scss */ "yrED");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment */ "AytR");












// import { threadId } from 'worker_threads';
const env = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"];
// import{SelectMessageUserPage} from '../common-modal/select-message-user/select-message-user.page'
// import { ModalController } from '@ionic/angular';
let SendmessagePage = class SendmessagePage {
    /**
     *
     * @param navCtrl Navigation controller
     * @param translate used from translation messages
     * @param dataProvider data provider
     * @param camera used for taking images
     * @param alertCtrl use for alert popup
     */
    constructor(navCtrl, translate, dataProvider, camera, zone, router, route, transfer, file, 
    // public modalController: ModalController,
    alertCtrl) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.camera = camera;
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.transfer = transfer;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.mail = {
            send_to: {
                parents: false,
                mod: false,
                tech: false,
                others: false,
                admin: false,
                viewer: false
            },
            title: '',
            notification: '',
            useremailorid: '',
            selected_users: []
        };
        this.lang = {};
        this.userDetails = {};
        this.ticketImage = '';
        this.users = [];
        this.selectedUsersShow = [];
        this.formdata = new FormData();
        this.show_spinner = false;
        // this.route.queryParams.subscribe(params => {
        //     if (this.router.getCurrentNavigation().extras.state) {
        //          this.mail.selected_users = this.router.getCurrentNavigation().extras.state; 
        //     }
        //   });
        this.dataProvider.selectedUsers.subscribe(res => {
            this.mail.selected_users = res.selectedUsers;
            this.selectedUsersShow = res.selectedUsersShow;
            console.log(this.mail.selected_users);
            console.log(res);
            // this.getUsers();    
        });
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
    }
    /**
     * Ionic navigation event will run when page is loaded
     */
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
        this.ticketImage = '';
        this.getUsers();
    }
    selectUserpage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const navigation = {
                state: this.users,
                queryParams: { selectedUsers: this.mail.selected_users, selectedUsersShow: this.selectedUsersShow }
            };
            this.zone.run(() => {
                this.router.navigate(['select-message-user'], navigation);
            });
        });
    }
    /**
     * Used to send the message
     */
    moveBack() {
        this.router.navigate(['tabs/messages']);
    }
    getUsers() {
        let data = {
            'school_id': this.userDetails.details.school_id
        };
        this.dataProvider.showLoading();
        this.dataProvider.getAllSchoolUsers(data).then(res => {
            this.dataProvider.hideLoading();
            console.log('seminar class', res);
            if (res.data) {
                this.users = res.data;
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(error);
            console.log(error);
        });
    }
    sendMessage() {
        if (!this.mail.send_to.parents && !this.mail.send_to.mod && !this.mail.send_to.tech && !this.mail.send_to.others && !this.mail.send_to.admin && !this.mail.send_to.viewer) {
            this.dataProvider.showToast(this.lang.select_user);
        }
        // else if (this.mail.title && this.mail.title.trim() == '') {
        //   this.dataProvider.showToast(this.lang.enter_title);
        // } else if(this.mail.title.length > 35){
        //   this.dataProvider.showToast(this.lang.max_title);
        // }
        else if (this.mail.notification && this.mail.notification.trim() == '') {
            this.dataProvider.showToast(this.lang.enter_noti_desc);
        }
        else if (this.mail.notification.length > 140) {
            this.dataProvider.showToast(this.lang.max_body);
        }
        else {
            if (this.mail.send_to.others && (this.mail.selected_users.length < 1)) {
                this.dataProvider.showToast(this.lang.enter_email_userid);
            }
            else if (this.mail.send_to.others) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let isEmail = re.test(this.mail.one_user_email);
                if (this.mail.selected_users.length > 0) { // check for email of selected user
                    let isemailvar = 1;
                    let data = {
                        user_no: this.userDetails.details.user_no,
                        session_id: this.userDetails.session_id,
                        notification: this.mail,
                        isemail: isemailvar,
                        school_id: this.userDetails.details.school_id
                    };
                    this.show_spinner = true;
                    this.startUpload(this.ticketImage, data);
                }
                else { // if entered email is user id
                    // this.dataProvider.showLoading();
                    this.show_spinner = true;
                    this.dataProvider.postRequest({}, 'exist_usern/' + this.mail.one_user_email).then((response) => {
                        if (response.success) {
                            if (response.user.username) {
                                let isemailvar = 0;
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    session_id: this.userDetails.session_id,
                                    notification: this.mail,
                                    isemail: isemailvar,
                                    school_id: this.userDetails.details.school_id
                                };
                                this.startUpload(this.ticketImage, data);
                            }
                            else {
                                // this.dataProvider.hideLoading();
                                this.show_spinner = false;
                                this.dataProvider.showToast(this.lang.user_not_exist);
                            }
                        }
                    });
                }
            }
            else {
                let isemailvar = 2;
                this.show_spinner = true;
                let data = {
                    user_no: this.userDetails.details.user_no,
                    session_id: this.userDetails.session_id,
                    notification: this.mail,
                    isemail: isemailvar,
                    school_id: this.userDetails.details.school_id
                };
                this.startUpload(this.ticketImage, data);
                // this.uploadMessage(data,this.ticketImage);
            }
        }
    }
    uploadToServer(data, imgBlob, fileName) {
        console.log(data);
        this.formdata.append('user_no', data.user_no);
        this.formdata.append('session_id', this.userDetails.session_id);
        Object.keys(data.notification).map((key) => {
            if (key == 'send_to') {
                Object.keys(data.notification[key]).map((send_to_key) => {
                    this.formdata.append('notification[' + key + '][' + send_to_key + ']', data.notification[key][send_to_key]);
                });
            }
            else {
                this.formdata.append('notification[' + key + ']', data.notification[key]);
            }
        });
        this.formdata.append('isemail', data.isemail);
        this.formdata.append('school_id', this.userDetails.details.school_id);
        if (imgBlob) {
            this.formdata.append('file', imgBlob, fileName);
        }
        console.log(this.formdata);
        // this.dataProvider.showLoading();
        this.dataProvider.sendMessage(this.formdata, data.school_id).subscribe(res => {
            // this.dataProvider.hideLoading();
            this.show_spinner = false;
            console.log("Success", res);
            this.dataProvider.showToast(this.lang.msg_sent_success);
            this.mail = {
                send_to: {
                    parents: false,
                    mod: false,
                    tech: false,
                    others: false,
                    admin: false,
                    viewer: false
                },
                title: '',
                notification: '',
                useremailorid: ''
            };
            this.ticketImage = '';
            this.router.navigate(['tabs/messages']);
        }, e => {
            // this.dataProvider.hideLoading();
            this.show_spinner = false;
            this.mail = {
                send_to: {
                    parents: false,
                    mod: false,
                    tech: false,
                    others: false,
                    admin: false,
                    viewer: false
                },
                title: '',
                notification: '',
                useremailorid: ''
            };
            this.ticketImage = '';
            this.router.navigate(['tabs/messages']);
            this.dataProvider.showToast(this.lang.usnexpectedError);
        });
    }
    startUpload(imgEntry, data) {
        // this.dataProvider.showLoading();
        if (imgEntry) {
            this.file.resolveLocalFilesystemUrl(imgEntry).then(entry => {
                entry.file(file => this.readFile(file, data));
            })
                .catch(err => {
                // this.presentToast('Error while reading file.');
            });
        }
        else {
            this.uploadToServer(data);
        }
    }
    readFile(file, data) {
        console.log('file', file);
        const reader = new FileReader();
        reader.onload = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            console.log('imgBlob', imgBlob, file.name);
            this.uploadToServer(data, imgBlob, file.name);
            // formData.append('file', imgBlob, file.name);
            // this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    portChange(event) {
        let user = [];
        console.log(event);
        event.value.forEach(res => {
            console.log(res);
            user.push(res.user_no);
        });
        console.log(user);
        this.mail.selected_users = user;
        this.getUsers();
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
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                this.ticketImage = imageData;
                this.mediaType = 'image/jpg';
            }
        });
    }
    /**
     * Open gallery to take image
     */
    openGallery() {
        let options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                this.ticketImage = imageData;
                this.mediaType = 'image/jpg';
            }
        });
    }
};
SendmessagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SendmessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sendmessage',
        template: _raw_loader_sendmessage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sendmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], SendmessagePage);



/***/ }),

/***/ "yrED":
/*!***************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-sendmessage:host .back-btn ion-icon {\n  font-size: 25px;\n}\napp-sendmessage:host .fform {\n  margin: 8px;\n}\napp-sendmessage:host .subject {\n  border: 1px solid grey;\n  margin: 10px 0;\n  position: relative;\n}\napp-sendmessage:host ion-row {\n  text-align: right;\n}\napp-sendmessage:host .send-btn {\n  height: 60px;\n}\napp-sendmessage:host .checkbox-inner {\n  position: absolute !important;\n  left: 8px !important;\n  height: 14px !important;\n  top: 0 !important;\n}\napp-sendmessage:host .attachment {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-sendmessage:host .attach-image {\n  width: 100%;\n  height: 100px;\n  text-align: right;\n}\napp-sendmessage:host .attach-image img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbmRtZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7QUFEWjtBQUlJO0VBQ0ksV0FBQTtBQUZSO0FBSUk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZSO0FBSUk7RUFDUSxpQkFBQTtBQUZaO0FBSUk7RUFDSSxZQUFBO0FBRlI7QUFJSTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDSSxtQkFBQTtFQUNSLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSSxVQUFBO0FBRlI7QUFJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUdRO0VBQ0ksWUFBQTtBQURaIiwiZmlsZSI6InNlbmRtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1zZW5kbWVzc2FnZTpob3N0IHtcclxuICAgIC5iYWNrLWJ0bntcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mZm9ybXtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgIH1cclxuICAgIC5zdWJqZWN0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuc2VuZC1idG57XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94LWlubmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaG1lbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLS1ib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaC1pbWFnZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=sendmessage-sendmessage-module-es2015.js.map
import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
let SendmessagePage = /** @class */ (() => {
    let SendmessagePage = class SendmessagePage {
        /**
         *
         * @param navCtrl Navigation controller
         * @param translate used from translation messages
         * @param dataProvider data provider
         * @param camera used for taking images
         * @param alertCtrl use for alert popup
         */
        constructor(navCtrl, translate, dataProvider, camera, router, alertCtrl) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.camera = camera;
            this.router = router;
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
                ticketImage: '',
                selected_users: []
            };
            this.lang = {};
            this.userDetails = {};
            this.ticketImage = '';
            this.users = [];
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.getUsers();
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
            this.dataProvider.getSchoolUsers(data).then(res => {
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
                        this.dataProvider.sendMessage(data).then(() => {
                            this.dataProvider.hideLoading();
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
                                ticketImage: ''
                            };
                            this.ticketImage = '';
                            this.dataProvider.showToast(this.lang.msg_sent_success);
                        }).catch((error) => {
                            this.dataProvider.hideLoading();
                            this.dataProvider.errorALertMessage(error);
                        });
                    }
                    else { // if entered email is user id
                        this.dataProvider.showLoading();
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
                                    this.dataProvider.sendMessage(data).then(() => {
                                        this.dataProvider.hideLoading();
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
                                            ticketImage: ''
                                        };
                                        this.ticketImage = '';
                                        this.dataProvider.showToast(this.lang.msg_sent_success);
                                    }).catch((error) => {
                                        this.dataProvider.hideLoading();
                                        this.dataProvider.errorALertMessage(error);
                                    });
                                }
                                else {
                                    this.dataProvider.hideLoading();
                                    this.dataProvider.showToast(this.lang.user_not_exist);
                                }
                            }
                        });
                    }
                }
                else {
                    let isemailvar = 2;
                    let data = {
                        user_no: this.userDetails.details.user_no,
                        session_id: this.userDetails.session_id,
                        notification: this.mail,
                        isemail: isemailvar,
                        school_id: this.userDetails.details.school_id
                    };
                    this.dataProvider.showLoading();
                    this.dataProvider.sendMessage(data).then(() => {
                        this.dataProvider.hideLoading();
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
                            ticketImage: ''
                        };
                        this.ticketImage = '';
                        this.dataProvider.showToast(this.lang.msg_sent_success);
                    }).catch((error) => {
                        this.dataProvider.hideLoading();
                        this.dataProvider.errorALertMessage(error);
                    });
                }
            }
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
        }
        /**
         * alert to show image take choice
         */
        takePicture() {
            return __awaiter(this, void 0, void 0, function* () {
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
                    this.mail.ticketImage = 'data:image/png;base64,' + imageData;
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
                    this.mail.ticketImage = 'data:image/png;base64,' + imageData;
                    this.ticketImage = "data:image/png;base64," + imageData;
                }
            });
        }
        ngOnInit() {
        }
    };
    SendmessagePage = __decorate([
        Component({
            selector: 'app-sendmessage',
            templateUrl: './sendmessage.page.html',
            styleUrls: ['./sendmessage.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            Camera,
            Router,
            AlertController])
    ], SendmessagePage);
    return SendmessagePage;
})();
export { SendmessagePage };
//# sourceMappingURL=sendmessage.page.js.map
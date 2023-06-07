import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
let ConnectNewMessagePage = /** @class */ (() => {
    let ConnectNewMessagePage = class ConnectNewMessagePage {
        /**
         * Class list constructor
         * @param navCtrl Use for navigation between pages
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param viewCtrl View controller
         */
        constructor(navCtrl, viewCtrl, 
        // public app: App, 
        dataProvider, authProvider, translate, camera, alertCtrl, router) {
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
    ConnectNewMessagePage = __decorate([
        Component({
            selector: 'app-connect-new-message',
            templateUrl: './connect-new-message.page.html',
            styleUrls: ['./connect-new-message.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            ModalController,
            DataService,
            AuthService,
            TranslateService,
            Camera,
            AlertController,
            Router])
    ], ConnectNewMessagePage);
    return ConnectNewMessagePage;
})();
export { ConnectNewMessagePage };
//# sourceMappingURL=connect-new-message.page.js.map
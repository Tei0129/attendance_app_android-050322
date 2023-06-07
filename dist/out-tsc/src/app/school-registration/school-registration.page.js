import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { LocationService } from '../service/location/location.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
let SchoolRegistrationPage = /** @class */ (() => {
    let SchoolRegistrationPage = class SchoolRegistrationPage {
        constructor(navCtrl, camera, alertCtrl, translate, dataProvider, authProvider, locationSrevice, router) {
            this.navCtrl = navCtrl;
            this.camera = camera;
            this.alertCtrl = alertCtrl;
            this.translate = translate;
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
            this.locationSrevice.checkGPSPermission(resp => {
                this.location = resp;
                console.log('page', this.location);
                this.countryName = resp.countryName;
                this.countryCode = resp.countryCode;
            }, e => {
                console.log(e);
            });
        }
        /**
         * alert to show image take choice
         */
        takePicture(imageType) {
            return __awaiter(this, void 0, void 0, function* () {
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
            return __awaiter(this, void 0, void 0, function* () {
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
            return __awaiter(this, void 0, void 0, function* () {
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
    SchoolRegistrationPage = __decorate([
        Component({
            selector: 'app-school-registration',
            templateUrl: './school-registration.page.html',
            styleUrls: ['./school-registration.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            Camera,
            AlertController,
            TranslateService,
            DataService,
            AuthService,
            LocationService,
            Router])
    ], SchoolRegistrationPage);
    return SchoolRegistrationPage;
})();
export { SchoolRegistrationPage };
//# sourceMappingURL=school-registration.page.js.map
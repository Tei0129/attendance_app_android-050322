import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
let SettingsPage = /** @class */ (() => {
    let SettingsPage = class SettingsPage {
        /**
         * Class list constructor
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param translate used for translation service
         * @param events App events
         */
        constructor(dataProvider, authProvider, camera, 
        //  public app: App,
        translate, router, 
        //  public events: Events, 
        alertCtrl) {
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.camera = camera;
            this.translate = translate;
            this.router = router;
            this.alertCtrl = alertCtrl;
            this.user = {
                name: '',
                pic: '',
                username: '',
                email_id: '',
                phone_no: '',
                oldpass: '',
                newpass: '',
                parent_register_link: true,
                teacher_register_link: true,
                delay_rule: '',
                warning_report: '',
                warning_report_second: '',
                warning_report_third: '',
                school_details: '',
                country: ''
            };
            this.displayPic = '';
            this.lang = {};
            this.userDetails = {};
            this.passwordType = 'password';
            this.passwordIcon = 'eye-off';
            this.passwordTypecnf = 'password';
            this.passwordIconcnf = 'eye-off';
            this.schoolDetail = {};
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                console.log(this.userDetails);
                this.user.name = this.userDetails.details.first_name + ' ' + this.userDetails.details.last_name;
                this.user.username = this.userDetails.details.username;
                this.user.email_id = this.userDetails.details.email_id;
                this.user.phone_no = this.userDetails.details.phone_no;
                this.user.school_details = this.userDetails.details.school_details;
                this.user.country = this.userDetails.details.country_ar_name;
                if (this.userDetails.details.is_school_admin == 1) {
                    this.displayPic = this.userDetails.details.school_logo;
                }
                else {
                    this.displayPic = this.userDetails.details.pic;
                }
                this.userType = this.userDetails.details.user_type;
                this.is_school_admin = this.userDetails.details.is_school_admin;
                if (this.userType == 1) {
                    this.getAllRules();
                }
            }
            else {
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
                //this.app.getRootNav().setRoot("LoginPage");
            }
        }
        /**
         * Show hidden password on frontend
         */
        showpass() {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        }
        /**
         * Show hidden confirm password on frontend
         */
        showpasscnf() {
            this.passwordTypecnf = this.passwordTypecnf === 'text' ? 'password' : 'text';
            this.passwordIconcnf = this.passwordIconcnf === 'eye-off' ? 'eye' : 'eye-off';
        }
        getAllRules() {
            let data = {
                school_id: this.userDetails.details.school_id,
                user_no: this.userDetails.details.user_no
            };
            this.dataProvider.getAllRules(data).then(res => {
                if (res) {
                    this.schoolDetail = res.school_details;
                    if (res.user_details.teacher_register_link == '1') {
                        this.teacherLink = true;
                    }
                    else {
                        this.teacherLink = false;
                    }
                    if (res.user_details.parent_register_link == '1') {
                        this.parent_link = true;
                    }
                    else {
                        this.parent_link = false;
                    }
                    // this.teacherLink=res.user_details.teacher_register_link;
                    // this.parent_link=res.user_details.parent_register_link;
                    console.log(this.teacherLink, this.parent_link);
                    this.user.delay_rule = this.schoolDetail.delay_rule;
                    this.user.warning_report = this.schoolDetail.report_condition;
                    this.user.warning_report_second = this.schoolDetail.second_report_condition;
                    this.user.warning_report_third = this.schoolDetail.third_report_condition;
                }
                console.log('res', res);
            }).catch(error => {
                console.log(error);
            });
        }
        /**
         * Update the user details
         */
        update() {
            if (this.user.oldpass != '' && this.user.newpass == '') {
                this.dataProvider.showToast(this.lang.new_pass_required);
            }
            else if (this.user.oldpass == '' && this.user.newpass != '') {
                this.dataProvider.showToast(this.lang.old_pass_required);
            }
            else {
                let data = {
                    user_no: this.userDetails.details.user_no,
                    session_id: this.userDetails.session_id,
                    users: {
                        email_id: this.user.email_id,
                        phone_no: this.user.phone_no,
                        oldpass: this.user.oldpass,
                        newpass: this.user.newpass
                    },
                    parent_register_link: this.user.parent_register_link,
                    teacher_register_link: this.user.teacher_register_link,
                    delay_rule: this.user.delay_rule,
                    warning_report: this.user.warning_report,
                    warning_report_second: this.user.warning_report_second,
                    warning_report_third: this.user.warning_report_third,
                    pic: this.user.pic
                };
                console.log(data);
                this.dataProvider.showLoading();
                this.dataProvider.updateUserSettings(data).then((response) => {
                    this.dataProvider.hideLoading();
                    if (response.session) {
                        this.dataProvider.showToast(response.message);
                        this.userDetails.details.email_id = this.user.email_id;
                        this.userDetails.details.phone_no = this.user.phone_no;
                        this.userDetails.details.pic = response.pic != '' ? response.pic : this.user.pic;
                        localStorage.setItem("userloggedin", JSON.stringify(this.userDetails));
                        this.authProvider.publishEvent(true);
                    }
                    else {
                        this.authProvider.flushLocalStorage();
                        this.dataProvider.errorALertMessage(response.message);
                        this.router.navigate(['login'], { replaceUrl: true });
                        //this.app.getRootNav().setRoot("LoginPage");
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
                quality: 79,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.CAMERA
            };
            this.camera.getPicture(options).then((imageData) => {
                if (imageData) {
                    console.log(imageData);
                    this.displayPic = 'data:image/png;base64,' + imageData;
                    this.user.pic = 'data:image/png;base64,' + imageData;
                }
            });
        }
        /**
         * Open gallery to take image
         */
        openGallery() {
            let options = {
                quality: 79,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then((imageData) => {
                if (imageData) {
                    console.log(imageData);
                    this.displayPic = 'data:image/png;base64,' + imageData;
                    this.user.pic = 'data:image/png;base64,' + imageData;
                }
            });
        }
        ngOnInit() {
        }
    };
    SettingsPage = __decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.page.html',
            styleUrls: ['./settings.page.scss'],
        }),
        __metadata("design:paramtypes", [DataService,
            AuthService,
            Camera,
            TranslateService,
            Router,
            AlertController])
    ], SettingsPage);
    return SettingsPage;
})();
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map
import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
//import { TabsPage } from '../tabs/tabs';
import { Camera } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
let ForgotPasswordPage = /** @class */ (() => {
    let ForgotPasswordPage = class ForgotPasswordPage {
        constructor(navCtrl, 
        //	public navParams: NavParams,  
        dataProvider, authProvider, 
        //public app: App, 
        translate, alertCtrl, camera, network, route, router, zone, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.camera = camera;
            this.network = network;
            this.route = route;
            this.router = router;
            this.zone = zone;
            this.platform = platform;
            this.enterEmai = true;
            this.enterPassword = false;
            this.enterOtp = false;
            this.canEditEmail = true;
            this.canEditOTP = true;
            this.canEditPass = true;
            this.emailError = '';
            this.otpError = '';
            this.passwordError = '';
            this.confirm_passwordError = '';
            this.step = 0;
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.enterdEmail = this.router.getCurrentNavigation().extras.state.course;
                    //   console.log(this.navData);
                }
            });
            this.translate.get("alertmessages").subscribe((response) => {
                this.lang = response;
            });
        }
        submitEmail() {
            if (!this.email) {
                this.emailError = this.lang.eneter_email;
            }
            else {
                let data = {
                    'email': this.email
                };
                this.dataProvider.showLoading();
                this.dataProvider.submitEmail(data).then(res => {
                    this.dataProvider.hideLoading();
                    if (res.session) {
                        this.emailError = '';
                        this.canEditEmail = false;
                        this.enterOtp = true;
                        this.step++;
                    }
                    else {
                        this.emailError = res.message;
                    }
                    console.log('seminar class', res);
                }).catch(error => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.showToast(error);
                    console.log(error);
                });
            }
        }
        submitOtp() {
            if (!this.otp) {
                this.otpError = this.lang.eneter_otp;
            }
            else {
                this.dataProvider.showLoading();
                let data = {
                    'email': this.email,
                    'otp_no': this.otp
                };
                this.dataProvider.checkOtp(data).then(res => {
                    this.dataProvider.hideLoading();
                    if (res.session) {
                        this.otpError = '';
                        this.canEditOTP = false;
                        this.enterPassword = true;
                        this.step++;
                        setTimeout(res => {
                            let objDiv = document.getElementById("lastDiv");
                            objDiv.scrollTop = objDiv.scrollHeight;
                        }, 100);
                    }
                    else {
                        this.otpError = res.message;
                    }
                    console.log('seminar class', res);
                }).catch(error => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.showToast(error);
                    console.log(error);
                });
            }
        }
        submitPassword() {
            if (!this.password) {
                this.passwordError = this.lang.password_empty;
            }
            else if (!this.confirm_password) {
                this.passwordError = '';
                this.confirm_passwordError = this.lang.confirmP_empty;
            }
            else if (this.password !== this.confirm_password) {
                this.passwordError = '';
                this.confirm_passwordError = this.lang.pass_not_match;
            }
            else {
                let data = {
                    'email': this.email,
                    'password': this.password,
                    'c_password': this.confirm_password
                };
                this.dataProvider.showLoading();
                this.dataProvider.resetPassword(data).then(res => {
                    this.dataProvider.hideLoading();
                    if (res.session) {
                        this.step++;
                        this.passwordError = '';
                        this.confirm_passwordError = '';
                        this.router.navigate(['login']);
                    }
                    else {
                        this.passwordError = res.message;
                    }
                    console.log('seminar class', res);
                }).catch(error => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.showToast(error);
                    console.log(error);
                });
            }
        }
        ngOnInit() {
        }
    };
    ForgotPasswordPage = __decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.page.html',
            styleUrls: ['./forgot-password.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            TranslateService,
            AlertController,
            Camera,
            Network,
            ActivatedRoute,
            Router,
            NgZone,
            Platform])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
})();
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.page.js.map
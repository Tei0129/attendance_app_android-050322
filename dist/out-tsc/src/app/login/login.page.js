import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { DatabaseService } from '../service/database/database.service';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { DatabaseProvider } from '../../providers/database/database';
let LoginPage = /** @class */ (() => {
    let LoginPage = class LoginPage {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param device device native wrapper to get the information about device
         * @param authProvider Use for authentication purpose
         * @param dataProvider Use for getting data from the API
         * @param platform Platform object
         * @param fcm Firebase object to get the FCM token
         * @param events events object to handle the events in the app
         * @param translate for translation
         */
        constructor(navCtrl, device, authProvider, dataProvider, platform, fcm, translate, route, zone, router, dbProvider) {
            this.navCtrl = navCtrl;
            this.device = device;
            this.authProvider = authProvider;
            this.dataProvider = dataProvider;
            this.platform = platform;
            this.fcm = fcm;
            this.translate = translate;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.dbProvider = dbProvider;
            this.bottomAds = [];
            this.loggedinUser = [];
            this.user = {};
            this.rememberMe = false;
            this.slideOptions = {
                initialSlide: 0,
                autoplay: true,
                speed: 1000,
            };
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        openRegister() {
            this.router.navigate(['school-registration'], { replaceUrl: false });
        }
        ionViewWillEnter() {
            this.dbProvider.createTable();
            if (localStorage.getItem("usercredentials")) {
                let credentials = JSON.parse(localStorage.getItem("usercredentials"));
                this.user.email_id = credentials.email_id;
                this.user.password = credentials.password;
                this.rememberMe = credentials.rememberMe;
            }
            if (localStorage.getItem('earlyLogin')) {
                this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
                console.log(this.loggedinUser);
            }
            if (this.platform.is("cordova")) {
                this.user.device_id = this.device.uuid;
                if (this.device.platform == 'android' || this.device.platform == 'Android') {
                    this.user.os_type = 1;
                }
                else {
                    this.user.os_type = 2;
                }
                this.fcm.getToken().then((token) => {
                    this.user.registration_id = token;
                });
            }
            this.dataProvider.getAds().then((response) => {
                if (response && response.ads) {
                    let ads = response.ads;
                    if (ads.left.medias && ads.left.medias.length > 0) {
                        this.topLeftAd = ads.left.medias[0].url;
                        this.topRightAd = ads.right.medias[0].url;
                        this.bottomAds = ads.bottom.medias;
                    }
                }
            });
        }
        /**
         * Login function to check the authentication
      
         */
        loginOldUser(oldUser) {
            this.user.email_id = oldUser.email_id;
            this.user.password = oldUser.password;
            this.login();
        }
        login() {
            console.log('logindata', this.user);
            if (this.rememberMe) {
                localStorage.setItem("usercredentials", JSON.stringify({
                    email_id: this.user.email_id,
                    password: this.user.password,
                    rememberMe: this.rememberMe
                }));
            }
            this.authProvider.doLogin(this.user).then((response) => {
                console.log('res', response);
                if (this.loggedinUser.length > 0) {
                    let isexist = false;
                    let index;
                    for (let i = 0; i < this.loggedinUser.length; i++) {
                        if (this.loggedinUser[i].email_id == this.user.email_id) {
                            isexist = true;
                            index = i;
                        }
                    }
                    let img;
                    if (response.details.is_school_admin == 1) {
                        img = response.details.school_logo;
                    }
                    else {
                        img = response.details.pic;
                    }
                    let data = {
                        name: response.details.first_name,
                        email_id: this.user.email_id,
                        password: this.user.password,
                        user_no: response.details.user_no,
                        image: img
                    };
                    if (!isexist) {
                        this.loggedinUser.push(data);
                    }
                    else {
                        this.loggedinUser[index] = data;
                    }
                    console.log('early Log', this.loggedinUser);
                    localStorage.setItem("earlyLogin", JSON.stringify(this.loggedinUser));
                }
                else {
                    let img;
                    if (response.details.is_school_admin == 1) {
                        img = response.details.school_logo;
                    }
                    else {
                        img = response.details.pic;
                    }
                    let data = {
                        name: response.details.first_name,
                        email_id: this.user.email_id,
                        password: this.user.password,
                        user_no: response.details.user_no,
                        image: img
                    };
                    this.loggedinUser.push(data);
                    console.log('early Log', this.loggedinUser);
                    localStorage.setItem("earlyLogin", JSON.stringify(this.loggedinUser));
                }
                this.authProvider.publishEvent(true);
                if (response.details.user_type == '4') {
                    this.router.navigate(['tabs/children'], { replaceUrl: true });
                }
                else if (response.details.user_type == '8') {
                    this.router.navigate(['tabs/student-notes'], { replaceUrl: true });
                }
                else {
                    this.router.navigate(['tabs'], { replaceUrl: true });
                }
            }).catch((error) => {
                this.dataProvider.errorALertMessage(error);
            });
        }
        forgotPassword() {
            let email;
            if (this.user) {
                email = this.user.email_id;
            }
            const navigation = {
                state: { email: email }
            };
            this.zone.run(() => {
                this.router.navigate(['forgot-password'], navigation);
            });
        }
        ngOnInit() {
        }
    };
    LoginPage = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            Device,
            AuthService,
            DataService,
            Platform,
            FCM,
            TranslateService,
            ActivatedRoute,
            NgZone,
            Router,
            DatabaseService])
    ], LoginPage);
    return LoginPage;
})();
export { LoginPage };
//# sourceMappingURL=login.page.js.map
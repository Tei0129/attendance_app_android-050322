import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input, NgZone } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../../service/auth/auth.service';
import { DatabaseService } from '../../service/database/database.service';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Storage } from '@ionic/storage';
//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
//import { DatabaseProvider } from '../../providers/database/database';
let SwitchAccountComponent = /** @class */ (() => {
    let SwitchAccountComponent = class SwitchAccountComponent {
        constructor(popoverController, navCtrl, device, authProvider, platform, fcm, alertController, 
        // public events: Events, 
        translate, route, zone, router, dbProvider, storage) {
            this.popoverController = popoverController;
            this.navCtrl = navCtrl;
            this.device = device;
            this.authProvider = authProvider;
            this.platform = platform;
            this.fcm = fcm;
            this.alertController = alertController;
            this.translate = translate;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.dbProvider = dbProvider;
            this.storage = storage;
        }
        ngOnInit() {
            console.log(this.lang);
            if (localStorage.getItem("userloggedin")) {
                // console.log('logged in');
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.currentUser = this.userDetails.details.username;
                this.currentUserEmail = this.userDetails.details.email_id;
                console.log('th', this.currentUser);
            }
            if (localStorage.getItem('earlyLogin')) {
                this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
                console.log(this.loggedinUser);
            }
        }
        removeUser(i) {
            this.warnRemove(res => {
                this.loggedinUser.splice(i, 1);
                localStorage.setItem("earlyLogin", JSON.stringify(this.loggedinUser));
            }, e => {
            });
        }
        warnRemove(callBack, error) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Confirm!',
                    message: 'Are you sure you want to remove this user',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                                error(false);
                            }
                        }, {
                            text: 'Okay',
                            handler: () => {
                                console.log('Confirm Okay');
                                callBack(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        closeModal() {
            this.popoverController.dismiss();
        }
        loginOldUser(users) {
            console.log(users);
            this.flushLocalStorage();
            setTimeout(res => {
                this.login(users);
            }, 100);
        }
        registerSchol() {
            this.router.navigate(['school-registration']);
            this.closeModal();
        }
        addNewAccount() {
            let data = {
                "user_no": this.userDetails.details.userDetail,
                "session_id": this.userDetails.session_id
            };
            this.presentPopover('');
            // this.dataProvider.showLoading(data);
            this.authProvider.doLogout(data, 'here').then(res => {
                this.router.navigate(['login']);
            }).catch(e => {
            });
            this.closeModal();
        }
        flushLocalStorage() {
            localStorage.removeItem("userloggedin");
            this.dbProvider.deleteDataBase();
            localStorage.removeItem("attendance");
            this.storage.clear();
        }
        login(users) {
            this.closeModal();
            this.presentPopover('');
            console.log('logindata', this.user);
            //  this.dataProvider.showLoading(); 
            this.authProvider.doLogin(users).then((response) => {
                //  this.dataProvider.hideLoading();
                // this.events.publish("loggedin", true);
                console.log('res', response);
                this.authProvider.publishEvent(true);
                this.authProvider.changeUser(true);
                if (response.details.user_type == '4') {
                    this.router.navigate(['tabs/children'], { replaceUrl: true });
                    // this.navCtrl.setRoot("ChildrenPage");
                }
                else if (response.details.user_type == '8') {
                    this.router.navigate(['tabs/student-notes'], { replaceUrl: true });
                    //this.navCtrl.setRoot(TabsPage);
                }
                else {
                    this.router.navigate(['tabs'], { replaceUrl: true });
                }
            }).catch((error) => {
                //    this.dataProvider.hideLoading();
                // this.dataProvider.errorALertMessage(error);
            });
        }
        presentPopover(ev) {
            return __awaiter(this, void 0, void 0, function* () {
                this.popOver = yield this.popoverController.create({
                    component: LoaderComponent,
                    backdropDismiss: true,
                    //event: ev,
                    translucent: false,
                    // animated:true,
                    cssClass: 'loaderStyle',
                });
                yield this.popOver.present();
                setTimeout(res => {
                    this.popOver.dismiss();
                }, 2000);
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SwitchAccountComponent.prototype, "lang", void 0);
    SwitchAccountComponent = __decorate([
        Component({
            selector: 'app-switch-account',
            templateUrl: './switch-account.component.html',
            styleUrls: ['./switch-account.component.scss'],
        }),
        __metadata("design:paramtypes", [PopoverController,
            NavController,
            Device,
            AuthService,
            Platform,
            FCM,
            AlertController,
            TranslateService,
            ActivatedRoute,
            NgZone,
            Router,
            DatabaseService,
            Storage])
    ], SwitchAccountComponent);
    return SwitchAccountComponent;
})();
export { SwitchAccountComponent };
//# sourceMappingURL=switch-account.component.js.map
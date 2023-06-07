import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
let MessagesPage = /** @class */ (() => {
    let MessagesPage = class MessagesPage {
        constructor(navCtrl, 
        //public app: App, 
        translate, dataProvider, authProvider, alertCtrl, router) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.alertCtrl = alertCtrl;
            this.router = router;
            this.notifications = [];
            this.userDetails = {};
            this.lang = {};
            this.imageModal = false;
            this.imageUrl = "";
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ngOnInit() {
            this.dataProvider.showLoading();
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                let data = {
                    "user_no": this.userDetails.details.user_no,
                    "school_id": this.userDetails.details.school_id,
                    "session_id": this.userDetails.session_id
                };
                this.dataProvider.getNotifications(data).then(response => {
                    this.dataProvider.hideLoading();
                    if (response.session) {
                        this.notifications = response.data;
                        if (this.notifications.length == 0) {
                            this.noRecordFound = this.lang.no_private_msg;
                        }
                    }
                    else {
                        this.authProvider.flushLocalStorage();
                        this.dataProvider.errorALertMessage(response.message);
                        //  this.app.getRootNav().setRoot("LoginPage");
                    }
                }).catch(error => {
                    console.log(error);
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(error);
                });
            }
            else {
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                // this.app.getRootNav().setRoot("LoginPage");
            }
        }
        ionViewWillEnter() {
        }
        /**
         * Open mail composer page
         */
        openComposer() {
            // this.navCtrl.push("SendmessagePage")
            this.router.navigate(['tabs/sendmessage']);
        }
        /**
         * to delete the notification
         * @param notificationId notification id which user wants to delete
         * @param index index of the notification message
         */
        deleteNotification(notificationId, index) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: this.lang.want_to_delete,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: this.lang.no,
                        },
                        {
                            text: this.lang.yes,
                            handler: () => {
                                this.dataProvider.showLoading();
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    nid: notificationId,
                                    session_id: this.userDetails.session_id
                                };
                                this.dataProvider.deleteNotification(data).then((response) => {
                                    this.dataProvider.hideLoading();
                                    if (response.session) {
                                        this.dataProvider.showToast(response.message);
                                        this.notifications.splice(index, 1);
                                    }
                                    else {
                                        this.authProvider.flushLocalStorage();
                                        this.dataProvider.errorALertMessage(response.message);
                                        //this.app.getRootNav().setRoot("LoginPage");
                                    }
                                }).catch((error) => {
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
    };
    MessagesPage = __decorate([
        Component({
            selector: 'app-messages',
            templateUrl: './messages.page.html',
            styleUrls: ['./messages.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            AuthService,
            AlertController,
            Router])
    ], MessagesPage);
    return MessagesPage;
})();
export { MessagesPage };
//# sourceMappingURL=messages.page.js.map
import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
let PrivateMessagePage = /** @class */ (() => {
    let PrivateMessagePage = class PrivateMessagePage {
        /**
           * Messages constructor
           * @param navCtrl Use for navigation between pages
           * @param app   Root app
           * @param dataProvider  Use for getting data from the API
           * @param authProvider  Use for authentication purpose
         */
        constructor(navCtrl, authProvider, 
        //public app: App,
        dataProvider, translate, router, route, zone, alertCtrl) {
            this.navCtrl = navCtrl;
            this.authProvider = authProvider;
            this.dataProvider = dataProvider;
            this.translate = translate;
            this.router = router;
            this.route = route;
            this.zone = zone;
            this.alertCtrl = alertCtrl;
            /**
             * @member notifications contains the array of notification messages
             * @member userDetails Contains the user details who is logged in from local storage
             * @member noDataFound used for diplaying the message when no child found
             * @member lang Contains the language translation object
             */
            this.notifications = [];
            this.noRecordFound = '';
            this.lang = {};
            this.userDetails = {};
            this.imageModal = false;
            this.imageUrl = "";
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
            this.dataProvider.showLoading();
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
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
                        this.router.navigate(['login'], { replaceUrl: true });
                    }
                }).catch(error => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(error);
                });
            }
            else {
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
            }
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
                                        this.router.navigate(['login'], { replaceUrl: true });
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
        ngOnInit() {
        }
    };
    PrivateMessagePage = __decorate([
        Component({
            selector: 'app-private-message',
            templateUrl: './private-message.page.html',
            styleUrls: ['./private-message.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            AuthService,
            DataService,
            TranslateService,
            Router,
            ActivatedRoute,
            NgZone,
            AlertController])
    ], PrivateMessagePage);
    return PrivateMessagePage;
})();
export { PrivateMessagePage };
//# sourceMappingURL=private-message.page.js.map
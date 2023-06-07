import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectNewMessagePage } from '../connect-new-message/connect-new-message.page';
let ParentconnectPage = /** @class */ (() => {
    let ParentconnectPage = class ParentconnectPage {
        /**
         * Class list constructor
         * @param navCtrl Use for navigation between pages
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param alertCtrl Ionic alert controller to show alert popup
         * @param translate used for translation service
         */
        constructor(navCtrl, alertCtrl, dataProvider, modalCtrl, translate, authProvider, route, router, zone, 
        //public app: App, 
        network) {
            this.navCtrl = navCtrl;
            this.alertCtrl = alertCtrl;
            this.dataProvider = dataProvider;
            this.modalCtrl = modalCtrl;
            this.translate = translate;
            this.authProvider = authProvider;
            this.route = route;
            this.router = router;
            this.zone = zone;
            this.network = network;
            /**
            * @member chats contains the support chats
            * @member userDetails Contains the user details who is logged in from local storage
            * @member noDataFound used for diplaying the message when no child found
            * @member lang Contains the language translation object
            */
            this.lang = {};
            this.chats = [];
            this.noDataFound = '';
            this.userDetails = {};
            this.imageUrl = '';
            this.imageModal = false;
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
                this.getAllChats();
            }
            else {
                this.authProvider.flushLocalStorage();
                // this.app.getRootNav().setRoot("LoginPage");
                this.router.navigate(['login'], { replaceUrl: true });
            }
        }
        /**
         * Get all chats
         */
        getAllChats() {
            // this.dataProvider.showLoading();
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id,
                "user_type": this.userDetails.details.user_type
            };
            this.dataProvider.getConnectChatList(data).then(response => {
                //  this.dataProvider.hideLoading();
                if (response.session) {
                    if (response.chatList) {
                        if (response.chatList.length > 0) {
                            this.chats = response.chatList;
                            console.log(this.chats);
                        }
                        else {
                            this.noDataFound = this.lang.no_connect_msg;
                        }
                    }
                }
                else {
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    this.router.navigate(['login'], { replaceUrl: true });
                }
            }).catch(error => {
                //  this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
        /**
         * Open modal popup to create the chat ticket
         */
        createChatMessage() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.network.type != this.network.Connection.UNKNOWN && this.network.type != this.network.Connection.NONE) {
                    const alert = yield this.alertCtrl.create({
                        header: "القواعد الأساسية للمحادثة",
                        message: `<div class='parent-connect-rules'><ul>
                  <li>يسمح لك بإنشاء موضوع واحد فقط باليوم.</li>
                  <li>يجب التقيد بحدود الأدب والاحترام المتبادل أثناء المحادثة.</li>
                  <li>الرد على الموضوع قد يتطلب بعض الوقت وأثناء وقت الدوام الرسمي بحد أدبي 24 ساعة.</li>
                  <li>في حالة موافقتك على ماسبق يمكنك الاستمرار.</li></ul>
                </div>`,
                        backdropDismiss: false,
                        buttons: [
                            {
                                text: this.lang.alert_btn_cancel_text,
                                role: "cancel"
                            },
                            {
                                text: this.lang.alert_btn_accept_text,
                                handler: () => {
                                    this.createModal();
                                    // let modal = this.modalCtrl.create("ConnectNewMessagePage");
                                    // modal.present();
                                    // modal.onDidDismiss((data)=>{
                                    //   if(data){
                                    //     this.getAllChats();
                                    //   }
                                    // })
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    this.dataProvider.showToast(this.lang.no_internet);
                }
            });
        }
        createModal() {
            return __awaiter(this, void 0, void 0, function* () {
                const modal = yield this.modalCtrl.create({
                    component: ConnectNewMessagePage,
                });
                yield modal.present();
                modal.onDidDismiss().then((refresh) => {
                    if (refresh) {
                        this.getAllChats();
                    }
                });
            });
        }
        /**
         * Open chat screen for reply
         * @param chat chat object contains chat id, title, message .....
         */
        openChat(chat) {
            console.log(chat);
            if (this.network.type != this.network.Connection.UNKNOWN && this.network.type != this.network.Connection.NONE) {
                const navigation = {
                    state: chat
                };
                this.zone.run(() => {
                    this.router.navigate(['connect-chat'], navigation);
                });
                //  this.navCtrl.push("ConnectChatPage", {"chat": chat});
            }
            else {
                this.dataProvider.showToast(this.lang.no_internet);
            }
        }
        /**
         * Open chat screen for reply
         * @param chat chat object contains chat id, title, message .....
         */
        closeTicket(chat) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.alert,
                    message: this.lang.want_to_close,
                    buttons: [
                        {
                            text: this.lang.no,
                            role: 'cancel'
                        },
                        {
                            text: this.lang.yes,
                            handler: () => {
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    chat_list_id: chat.id,
                                    session_id: this.userDetails.session_id
                                };
                                this.dataProvider.showLoading();
                                this.dataProvider.closeParentConnectChat(data).then(response => {
                                    this.dataProvider.hideLoading();
                                    if (response.session) {
                                        chat.ticket_status = '1';
                                        this.dataProvider.showToast(response.message);
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
                        }
                    ]
                });
                yield alert.present();
            });
        }
        /**
         * Open modal for reopening the ticket
         * @param chat chat object contains chat id, title, message .....
         */
        reopenTicket(chat) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.alert,
                    message: this.lang.want_to_reopen,
                    buttons: [
                        {
                            text: this.lang.no,
                            role: 'cancel'
                        },
                        {
                            text: this.lang.yes,
                            handler: () => {
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    chat_list_id: chat.id,
                                    session_id: this.userDetails.session_id
                                };
                                this.dataProvider.showLoading();
                                this.dataProvider.reopenParentConnectChat(data).then(response => {
                                    this.dataProvider.hideLoading();
                                    if (response.session) {
                                        chat.ticket_status = '0';
                                        this.dataProvider.showToast(response.message);
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
    ParentconnectPage = __decorate([
        Component({
            selector: 'app-parentconnect',
            templateUrl: './parentconnect.page.html',
            styleUrls: ['./parentconnect.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            DataService,
            ModalController,
            TranslateService,
            AuthService,
            ActivatedRoute,
            Router,
            NgZone,
            Network])
    ], ParentconnectPage);
    return ParentconnectPage;
})();
export { ParentconnectPage };
//# sourceMappingURL=parentconnect.page.js.map
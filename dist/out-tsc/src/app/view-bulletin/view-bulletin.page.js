import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentService } from '../service/document/document.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
let ViewBulletinPage = /** @class */ (() => {
    let ViewBulletinPage = class ViewBulletinPage {
        constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, network, photoViewer, route, router, documentService, zone, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.network = network;
            this.photoViewer = photoViewer;
            this.route = route;
            this.router = router;
            this.documentService = documentService;
            this.zone = zone;
            this.platform = platform;
            this.bulletinDetails = {};
            this.translate.get("alertmessages").subscribe((response) => {
                this.lang = response;
            });
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state;
                    console.log(this.navData);
                    //	this.markasReads();
                }
            });
        }
        ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.user_no = this.userDetails.details.user_no;
                this.getBulletin();
            }
        }
        openPdf(pdf) {
            window.open(pdf + '.pdf', '_system');
            //this.documentService.openPdf(pdf,true);
        }
        openImage(image) {
            this.photoViewer.show(image);
        }
        getBulletin() {
            let data = {
                user_no: this.user_no,
                b_id: this.navData.bulletin_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getBulletinDetails(data).then(res => {
                this.bulletinDetails = res.data;
                this.dataProvider.hideLoading();
                console.log(this.bulletinDetails);
            }, e => {
                this.dataProvider.hideLoading();
                console.log(e);
            });
        }
        shareBulletin(bullet) {
            const navigation = {
                state: {
                    bulletin: bullet,
                    forward_user_no: this.userDetails.details.user_no,
                    school_id: this.userDetails.details.school_id
                }
            };
            this.zone.run(() => {
                this.router.navigate(['share-bulletins'], navigation);
            });
        }
        markasReads() {
            let data = {
                user_no: this.userDetails.details.user_no,
                bulletin_id: this.navData.id
            };
            this.dataProvider.markBulletinRead(data).then(res => {
                console.log(res);
            });
        }
        deleteBulletin() {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.delete_bulletin,
                    backdropDismiss: true,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.lang.delete,
                            handler: () => {
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    b_id: this.navData.bulletin_id
                                };
                                this.dataProvider.deleteBulletin(data).then(res => {
                                    console.log(res);
                                    this.router.navigate(['bulletins']);
                                });
                            }
                        },
                        {
                            text: this.lang.alert_btn_cancel_text,
                            handler: () => {
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        reOpen() {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.sure,
                    backdropDismiss: true,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.lang.reopen_bulletin,
                            handler: () => {
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    b_id: this.navData.bulletin_id
                                };
                                this.dataProvider.reOpenBulletin(data).then(res => {
                                    console.log(res);
                                    this.getBulletin();
                                });
                            }
                        },
                        {
                            text: this.lang.alert_btn_cancel_text,
                            handler: () => {
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        completeBulletin() {
            let data = {
                user_no: this.userDetails.details.user_no,
                b_id: this.navData.bulletin_id
            };
            this.dataProvider.closeBulletin(data).then(res => {
                console.log(res);
                this.getBulletin();
            });
        }
    };
    ViewBulletinPage = __decorate([
        Component({
            selector: 'app-view-bulletin',
            templateUrl: './view-bulletin.page.html',
            styleUrls: ['./view-bulletin.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            TranslateService,
            AlertController,
            Network,
            PhotoViewer,
            ActivatedRoute,
            Router,
            DocumentService,
            NgZone,
            Platform])
    ], ViewBulletinPage);
    return ViewBulletinPage;
})();
export { ViewBulletinPage };
//# sourceMappingURL=view-bulletin.page.js.map
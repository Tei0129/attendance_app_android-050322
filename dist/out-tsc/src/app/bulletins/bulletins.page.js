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
import { DocumentScanner } from '@ionic-native/document-scanner/ngx/';
import { DocumentService } from '../service/document/document.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
let BulletinsPage = /** @class */ (() => {
    let BulletinsPage = class BulletinsPage {
        constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, photoViewer, route, router, documentService, documentScanner, zone, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.camera = camera;
            this.network = network;
            this.photoViewer = photoViewer;
            this.route = route;
            this.router = router;
            this.documentService = documentService;
            this.documentScanner = documentScanner;
            this.zone = zone;
            this.platform = platform;
            this.bulletins = [];
            this.allBullentins = [];
            this.translate.get("alertmessages").subscribe((response) => {
                this.lang = response;
            });
        }
        ngOnInit() {
        }
        ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                this.user_no = this.userDetails.details.user_no;
                this.getBulletins();
            }
        }
        addBulletin() {
            this.router.navigate(['follow-bulletins']);
        }
        openImage(image) {
            this.photoViewer.show(image);
        }
        openBulletin(bullet) {
            console.log(bullet);
            const navigation = {
                state: bullet
            };
            this.zone.run(() => {
                this.router.navigate(['view-bulletin'], navigation);
            });
        }
        getBulletins() {
            let data = {
                user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id
            };
            this.dataProvider.getBulletins(data).then(res => {
                if (res) {
                    this.bulletins = res.data;
                    if (this.bulletins) {
                        if (this.bulletins.length > 1) {
                            this.allBullentins = this.bulletins.splice(0, 20);
                        }
                        else {
                            this.allBullentins = this.bulletins;
                        }
                        console.log(this.allBullentins);
                    }
                }
            }).catch(e => {
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
        doInfinite(infiniteScroll) {
            setTimeout(() => {
                this.allBullentins = this.allBullentins.concat(this.bulletins.splice(0, 20));
                infiniteScroll.target.complete();
            }, 500);
        }
        openPdf(pdf) {
            window.open(pdf + '.pdf', '_system');
            //this.documentService.openPdf(pdf,true);
        }
    };
    BulletinsPage = __decorate([
        Component({
            selector: 'app-bulletins',
            templateUrl: './bulletins.page.html',
            styleUrls: ['./bulletins.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            TranslateService,
            AlertController,
            Camera,
            Network,
            PhotoViewer,
            ActivatedRoute,
            Router,
            DocumentService,
            DocumentScanner,
            NgZone,
            Platform])
    ], BulletinsPage);
    return BulletinsPage;
})();
export { BulletinsPage };
//# sourceMappingURL=bulletins.page.js.map
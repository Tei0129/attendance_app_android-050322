import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentScanner } from '@ionic-native/document-scanner/ngx/';
let ShareBulletinsPage = /** @class */ (() => {
    let ShareBulletinsPage = class ShareBulletinsPage {
        constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, network, route, router, documentScanner, zone, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.network = network;
            this.route = route;
            this.router = router;
            this.documentScanner = documentScanner;
            this.zone = zone;
            this.platform = platform;
            this.bulletin = {};
            this.navData = {};
            this.translate.get("alertmessages").subscribe((response) => {
                this.lang = response;
            });
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state;
                    this.bulletin = this.router.getCurrentNavigation().extras.state.bulletin;
                    this.forward_user_no = this.router.getCurrentNavigation().extras.state.forward_user_no;
                    this.school_id = this.router.getCurrentNavigation().extras.state.school_id;
                    console.log(this.navData);
                }
            });
        }
        share() {
            let data = {
                bulletinId: this.bulletin.bulletin_id,
                forwardedby_user_no: this.forward_user_no,
                school_id: this.school_id,
                description: this.description
            };
            const navigation = {
                state: {
                    bulletinId: this.bulletin.bulletin_id,
                    data: data
                }
            };
            this.zone.run(() => {
                this.router.navigate(['select-bulletins-user'], navigation);
            });
        }
        ngOnInit() {
        }
    };
    ShareBulletinsPage = __decorate([
        Component({
            selector: 'app-share-bulletins',
            templateUrl: './share-bulletins.page.html',
            styleUrls: ['./share-bulletins.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            TranslateService,
            AlertController,
            Network,
            ActivatedRoute,
            Router,
            DocumentScanner,
            NgZone,
            Platform])
    ], ShareBulletinsPage);
    return ShareBulletinsPage;
})();
export { ShareBulletinsPage };
//# sourceMappingURL=share-bulletins.page.js.map
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { DataService } from '../service/data/data.service';
import { SubscriptionService } from '../service/subscription/subscription.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
let AvailablePlanPage = /** @class */ (() => {
    let AvailablePlanPage = class AvailablePlanPage {
        constructor(navCtrl, translate, dataProvider, camera, route, router, alertCtrl, subscriptionService, location) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.camera = camera;
            this.route = route;
            this.router = router;
            this.alertCtrl = alertCtrl;
            this.subscriptionService = subscriptionService;
            this.location = location;
            this.plans = [];
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.getPlan();
        }
        ngOnInit() {
        }
        getPlan() {
            let data = {
                userId: ''
            };
            this.dataProvider.getPlan(data).then(res => {
                this.plans = res;
                console.log(res);
            }).catch(e => {
                console.log(e);
                this.plans = e.plans;
            });
        }
        subscribe(p) {
            console.log(p);
            let deta = {
                ammount: p.amount,
                currency: p.currency
            };
            this.subscriptionService.doPaypalPayment(deta).then(res => {
                console.log('plan subscribed');
            }).catch(e => {
                console.log('e');
            });
        }
    };
    AvailablePlanPage = __decorate([
        Component({
            selector: 'app-available-plan',
            templateUrl: './available-plan.page.html',
            styleUrls: ['./available-plan.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            Camera,
            ActivatedRoute,
            Router,
            AlertController,
            SubscriptionService,
            Location])
    ], AvailablePlanPage);
    return AvailablePlanPage;
})();
export { AvailablePlanPage };
//# sourceMappingURL=available-plan.page.js.map
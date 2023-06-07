import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '../service/location/location.service';
import { GeoServiceProvider } from '../service/geo-service/geo-service';
let ElearningSchoolsPage = /** @class */ (() => {
    let ElearningSchoolsPage = class ElearningSchoolsPage {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param translate used for translation service
         * @param dataProvider Use for getting data from the API
         */
        constructor(navCtrl, translate, dataProvider, router, alertController, route, locationSrevice, geo, zone) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.router = router;
            this.alertController = alertController;
            this.route = route;
            this.locationSrevice = locationSrevice;
            this.geo = geo;
            this.zone = zone;
            /**
             * @member schools Array of schools who have the e learning materials
             * @member noDataFound used for diplaying the message when no child found
             * @member lang Contains the language translation object
             */
            this.schools = [];
            this.noDataFound = '';
            this.lang = {};
            this.selected_country = {
                code: "",
                name: "Worldwide"
            };
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.translate.get("location").subscribe((res) => {
                this.location_lang = res;
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
            this.locationSrevice.checkGPSPermission(resp => {
                this.country_code = resp.countryCode;
                // this.getSchool(this.country_code);
            }, e => {
                this.dataProvider.showToast(this.location_lang.location_error);
                console.log(e);
            });
            this.country = this.geo.getAllCountries();
            this.getSchool(null);
        }
        portChange(event) {
            console.log(event);
            let start = 0;
            let newsPerPage = 0;
            if (event.value.code) {
                this.getSchool(event.value.code);
                // this.getNews(start, newsPerPage,);
            }
            else {
                this.getSchool(null);
            }
        }
        getSchool(location) {
            this.dataProvider.getSchool(location).then((schoolList) => {
                this.schools = schoolList;
                if (this.schools && this.schools.length == 0) {
                    this.noDataFound = this.lang.no_schools_found;
                }
            }).catch((err) => {
                console.log(err);
            });
        }
        selectNewsCountry() {
            return __awaiter(this, void 0, void 0, function* () {
                let start = 0;
                let newsPerPage = 0;
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: this.location_lang.select_country,
                    message: this.location_lang.select_country_subheading,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.location_lang.local,
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                this.getSchool(this.country_code);
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: this.location_lang.international,
                            handler: () => {
                                this.getSchool(null);
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        /**
         * Open the school page where all material will be shown
         * @param school Selected School information object
         */
        openschool(school) {
            const navigation = {
                state: { schoolInfo: school, country_code: this.country_code }
            };
            //console.log(navigation);
            this.zone.run(() => {
                this.router.navigate(['elearning-school-video'], navigation);
            });
            // this.navCtrl.push("ElearningSchoolVideosPage", {schoolInfo: school});
        }
        ngOnInit() {
        }
    };
    ElearningSchoolsPage = __decorate([
        Component({
            selector: 'app-elearning-schools',
            templateUrl: './elearning-schools.page.html',
            styleUrls: ['./elearning-schools.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            Router,
            AlertController,
            ActivatedRoute,
            LocationService,
            GeoServiceProvider,
            NgZone])
    ], ElearningSchoolsPage);
    return ElearningSchoolsPage;
})();
export { ElearningSchoolsPage };
//# sourceMappingURL=elearning-schools.page.js.map
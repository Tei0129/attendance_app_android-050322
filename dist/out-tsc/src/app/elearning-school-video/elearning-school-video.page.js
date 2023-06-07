import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeoServiceProvider } from '../service/geo-service/geo-service';
let ElearningSchoolVideoPage = /** @class */ (() => {
    let ElearningSchoolVideoPage = class ElearningSchoolVideoPage {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param navParams Use for navigation parameters passed from previous page
         * @param dataProvider Use for getting data from the API
         */
        constructor(navCtrl, 
        //	public navParams: NavParams, 
        dataProvider, route, alertController, translate, geo, router, zone) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.route = route;
            this.alertController = alertController;
            this.translate = translate;
            this.geo = geo;
            this.router = router;
            this.zone = zone;
            /**
             * @member categories array of categories
             * @member school conatins the information about the school
             */
            this.categories = [];
            this.school = {};
            this.selected_country = {
                code: "",
                name: "Worldwide"
            };
            this.translate.get("location").subscribe((res) => {
                this.location_lang = res;
            });
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.dataProvider.showLoading();
                    //this.school = this.navParams.get("schoolInfo");
                    this.school = this.router.getCurrentNavigation().extras.state.schoolInfo;
                    this.country_code = this.router.getCurrentNavigation().extras.state.country_code;
                    this.getElerningMaterials(null);
                    this.country = this.geo.getAllCountries();
                    console.log(this.school);
                }
            });
        }
        getElerningMaterials(c_dode) {
            console.log(this.school.id);
            this.dataProvider.getElearningMaterials(this.school.id, c_dode).then((materialList) => {
                this.dataProvider.hideLoading();
                this.categories = materialList;
            }).catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(err);
            });
        }
        hideDisplay(i, b) {
            console.log(i);
            var x = document.getElementById(i);
            console.log(x.style.display);
            if (x.style.display === "") {
                x.style.display = "block";
            }
            else if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
        }
        playCategoryList() {
        }
        portChange(event) {
            console.log(event);
            let start = 0;
            let newsPerPage = 0;
            if (event.value.code) {
                this.getElerningMaterials(event.value.code);
                // this.getNews(start, newsPerPage,);
            }
            else {
                this.getElerningMaterials(null);
            }
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
                                this.getElerningMaterials(this.country_code);
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: this.location_lang.international,
                            handler: () => {
                                this.getElerningMaterials(null);
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        /**
         * Open the video play page and pass the material id
         * @param materialId id of the material selected
         */
        playvideo(materialId) {
            const navigation = {
                state: { materialId: materialId }
            };
            //console.log(navigation);
            this.zone.run(() => {
                this.router.navigate(['playvideo'], navigation);
            });
            //this.navCtrl.push("PlayvideoPage",{materialId: materialId})
        }
        ngOnInit() {
        }
    };
    ElearningSchoolVideoPage = __decorate([
        Component({
            selector: 'app-elearning-school-video',
            templateUrl: './elearning-school-video.page.html',
            styleUrls: ['./elearning-school-video.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            ActivatedRoute,
            AlertController,
            TranslateService,
            GeoServiceProvider,
            Router,
            NgZone])
    ], ElearningSchoolVideoPage);
    return ElearningSchoolVideoPage;
})();
export { ElearningSchoolVideoPage };
//# sourceMappingURL=elearning-school-video.page.js.map
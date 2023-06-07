import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
let CreateClassPage = /** @class */ (() => {
    let CreateClassPage = class CreateClassPage {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param translate used for translation service
         * @param viewCtrl For view dismiss
         * @param dataProvider Use for getting data from the API
         */
        constructor(navCtrl, translate, viewCtrl, dataProvider) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.viewCtrl = viewCtrl;
            this.dataProvider = dataProvider;
            this.class = {};
            this.lang = {};
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        ionViewWillEnter() {
            console.log('ionViewDidLoad CreateClassPage');
            if (localStorage.getItem("userloggedin")) {
                let user = JSON.parse(localStorage.getItem("userloggedin"));
                this.class['school_id'] = user.details.school_id;
                this.class['user_no'] = user.details.user_no;
            }
            else {
                this.viewCtrl.dismiss(false);
            }
        }
        getSeminars() {
            return Array(8);
        }
        registerClass() {
            this.dataProvider.showLoading();
            this.dataProvider.createNewCourse(this.class).then((response) => {
                this.dataProvider.hideLoading();
                if (response.session) {
                    this.dataProvider.showToast(response.message);
                    this.viewCtrl.dismiss(true);
                }
                else {
                    this.dataProvider.showToast(response.message);
                }
            }).catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(err);
            });
        }
        ngOnInit() {
        }
    };
    CreateClassPage = __decorate([
        Component({
            selector: 'app-create-class',
            templateUrl: './create-class.page.html',
            styleUrls: ['./create-class.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController, TranslateService,
            ModalController, DataService])
    ], CreateClassPage);
    return CreateClassPage;
})();
export { CreateClassPage };
//# sourceMappingURL=create-class.page.js.map
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../service/data/data.service';
let ContactUsPage = /** @class */ (() => {
    let ContactUsPage = class ContactUsPage {
        /**
         * Constructor
         * @param dataProvider Use for interacting with the API
         */
        constructor(dataProvider) {
            this.dataProvider = dataProvider;
            this.user = {};
        }
        /**
         * Send the query to backend
         * @param contactForm form from front end
         */
        submitContactusForm(contactForm) {
            this.dataProvider.showLoading();
            this.dataProvider.sendContact(this.user).then(() => {
                this.dataProvider.hideLoading();
                contactForm.reset();
            }).catch((error) => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
        ngOnInit() {
        }
    };
    ContactUsPage = __decorate([
        Component({
            selector: 'app-contact-us',
            templateUrl: './contact-us.page.html',
            styleUrls: ['./contact-us.page.scss'],
        }),
        __metadata("design:paramtypes", [DataService])
    ], ContactUsPage);
    return ContactUsPage;
})();
export { ContactUsPage };
//# sourceMappingURL=contact-us.page.js.map
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
let AboutUsPage = /** @class */ (() => {
    let AboutUsPage = class AboutUsPage {
        constructor(iap) {
            this.iap = iap;
        }
        /**
         * Used to open the weblink
         * @param url
         */
        openUrl(url) {
            const browser = this.iap.create(url, '_blank');
            browser.show();
        }
        openPDF(url) {
            window.open(url, '_system');
            //browser.show();
        }
        ngOnInit() {
        }
    };
    AboutUsPage = __decorate([
        Component({
            selector: 'app-about-us',
            templateUrl: './about-us.page.html',
            styleUrls: ['./about-us.page.scss'],
        }),
        __metadata("design:paramtypes", [InAppBrowser])
    ], AboutUsPage);
    return AboutUsPage;
})();
export { AboutUsPage };
//# sourceMappingURL=about-us.page.js.map
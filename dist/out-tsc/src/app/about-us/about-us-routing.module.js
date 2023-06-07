import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
const routes = [
    {
        path: '',
        component: AboutUsPage
    }
];
let AboutUsPageRoutingModule = /** @class */ (() => {
    let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
    };
    AboutUsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], AboutUsPageRoutingModule);
    return AboutUsPageRoutingModule;
})();
export { AboutUsPageRoutingModule };
//# sourceMappingURL=about-us-routing.module.js.map
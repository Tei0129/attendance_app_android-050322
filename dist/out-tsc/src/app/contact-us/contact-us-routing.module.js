import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
const routes = [
    {
        path: '',
        component: ContactUsPage
    }
];
let ContactUsPageRoutingModule = /** @class */ (() => {
    let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
    };
    ContactUsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ContactUsPageRoutingModule);
    return ContactUsPageRoutingModule;
})();
export { ContactUsPageRoutingModule };
//# sourceMappingURL=contact-us-routing.module.js.map
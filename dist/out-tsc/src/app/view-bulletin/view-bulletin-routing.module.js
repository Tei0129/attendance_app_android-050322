import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewBulletinPage } from './view-bulletin.page';
const routes = [
    {
        path: '',
        component: ViewBulletinPage
    }
];
let ViewBulletinPageRoutingModule = /** @class */ (() => {
    let ViewBulletinPageRoutingModule = class ViewBulletinPageRoutingModule {
    };
    ViewBulletinPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ViewBulletinPageRoutingModule);
    return ViewBulletinPageRoutingModule;
})();
export { ViewBulletinPageRoutingModule };
//# sourceMappingURL=view-bulletin-routing.module.js.map
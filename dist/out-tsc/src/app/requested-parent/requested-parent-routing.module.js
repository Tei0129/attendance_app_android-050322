import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestedParentPage } from './requested-parent.page';
const routes = [
    {
        path: '',
        component: RequestedParentPage
    }
];
let RequestedParentPageRoutingModule = /** @class */ (() => {
    let RequestedParentPageRoutingModule = class RequestedParentPageRoutingModule {
    };
    RequestedParentPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], RequestedParentPageRoutingModule);
    return RequestedParentPageRoutingModule;
})();
export { RequestedParentPageRoutingModule };
//# sourceMappingURL=requested-parent-routing.module.js.map
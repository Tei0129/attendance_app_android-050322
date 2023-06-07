import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvailablePlanPage } from './available-plan.page';
const routes = [
    {
        path: '',
        component: AvailablePlanPage
    }
];
let AvailablePlanPageRoutingModule = /** @class */ (() => {
    let AvailablePlanPageRoutingModule = class AvailablePlanPageRoutingModule {
    };
    AvailablePlanPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], AvailablePlanPageRoutingModule);
    return AvailablePlanPageRoutingModule;
})();
export { AvailablePlanPageRoutingModule };
//# sourceMappingURL=available-plan-routing.module.js.map
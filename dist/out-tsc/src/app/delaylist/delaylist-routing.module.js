import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelaylistPage } from './delaylist.page';
const routes = [
    {
        path: '',
        component: DelaylistPage
    }
];
let DelaylistPageRoutingModule = /** @class */ (() => {
    let DelaylistPageRoutingModule = class DelaylistPageRoutingModule {
    };
    DelaylistPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], DelaylistPageRoutingModule);
    return DelaylistPageRoutingModule;
})();
export { DelaylistPageRoutingModule };
//# sourceMappingURL=delaylist-routing.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentRegisterPage } from './parent-register.page';
const routes = [
    {
        path: '',
        component: ParentRegisterPage
    }
];
let ParentRegisterPageRoutingModule = /** @class */ (() => {
    let ParentRegisterPageRoutingModule = class ParentRegisterPageRoutingModule {
    };
    ParentRegisterPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ParentRegisterPageRoutingModule);
    return ParentRegisterPageRoutingModule;
})();
export { ParentRegisterPageRoutingModule };
//# sourceMappingURL=parent-register-routing.module.js.map
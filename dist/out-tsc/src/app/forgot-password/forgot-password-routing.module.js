import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password.page';
const routes = [
    {
        path: '',
        component: ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = /** @class */ (() => {
    let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
    };
    ForgotPasswordPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ForgotPasswordPageRoutingModule);
    return ForgotPasswordPageRoutingModule;
})();
export { ForgotPasswordPageRoutingModule };
//# sourceMappingURL=forgot-password-routing.module.js.map
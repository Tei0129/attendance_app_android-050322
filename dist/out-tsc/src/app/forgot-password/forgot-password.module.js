import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordPage } from './forgot-password.page';
import { PipesModule } from '../pipes/pipes.module';
let ForgotPasswordPageModule = /** @class */ (() => {
    let ForgotPasswordPageModule = class ForgotPasswordPageModule {
    };
    ForgotPasswordPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                ForgotPasswordPageRoutingModule
            ],
            declarations: [ForgotPasswordPage]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
})();
export { ForgotPasswordPageModule };
//# sourceMappingURL=forgot-password.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { PipesModule } from '../pipes/pipes.module';
let LoginPageModule = /** @class */ (() => {
    let LoginPageModule = class LoginPageModule {
    };
    LoginPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                LoginPageRoutingModule,
                PipesModule
            ],
            declarations: [LoginPage]
        })
    ], LoginPageModule);
    return LoginPageModule;
})();
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map
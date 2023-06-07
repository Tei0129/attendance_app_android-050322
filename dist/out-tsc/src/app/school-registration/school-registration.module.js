import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchoolRegistrationPageRoutingModule } from './school-registration-routing.module';
import { SchoolRegistrationPage } from './school-registration.page';
import { PipesModule } from '../pipes/pipes.module';
let SchoolRegistrationPageModule = /** @class */ (() => {
    let SchoolRegistrationPageModule = class SchoolRegistrationPageModule {
    };
    SchoolRegistrationPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SchoolRegistrationPageRoutingModule,
                PipesModule
            ],
            declarations: [SchoolRegistrationPage]
        })
    ], SchoolRegistrationPageModule);
    return SchoolRegistrationPageModule;
})();
export { SchoolRegistrationPageModule };
//# sourceMappingURL=school-registration.module.js.map
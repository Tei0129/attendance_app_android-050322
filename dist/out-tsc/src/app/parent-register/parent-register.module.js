import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParentRegisterPageRoutingModule } from './parent-register-routing.module';
import { ParentRegisterPage } from './parent-register.page';
import { PipesModule } from '../pipes/pipes.module';
let ParentRegisterPageModule = /** @class */ (() => {
    let ParentRegisterPageModule = class ParentRegisterPageModule {
    };
    ParentRegisterPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                PipesModule,
                IonicModule,
                ParentRegisterPageRoutingModule
            ],
            declarations: [ParentRegisterPage]
        })
    ], ParentRegisterPageModule);
    return ParentRegisterPageModule;
})();
export { ParentRegisterPageModule };
//# sourceMappingURL=parent-register.module.js.map
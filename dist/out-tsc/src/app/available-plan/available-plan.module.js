import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvailablePlanPageRoutingModule } from './available-plan-routing.module';
import { AvailablePlanPage } from './available-plan.page';
import { PipesModule } from '../pipes/pipes.module';
let AvailablePlanPageModule = /** @class */ (() => {
    let AvailablePlanPageModule = class AvailablePlanPageModule {
    };
    AvailablePlanPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                AvailablePlanPageRoutingModule,
                PipesModule
            ],
            declarations: [AvailablePlanPage]
        })
    ], AvailablePlanPageModule);
    return AvailablePlanPageModule;
})();
export { AvailablePlanPageModule };
//# sourceMappingURL=available-plan.module.js.map
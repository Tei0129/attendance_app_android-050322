import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DelaylistPageRoutingModule } from './delaylist-routing.module';
import { DelaylistPage } from './delaylist.page';
import { PipesModule } from '../pipes/pipes.module';
let DelaylistPageModule = /** @class */ (() => {
    let DelaylistPageModule = class DelaylistPageModule {
    };
    DelaylistPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                DelaylistPageRoutingModule,
                PipesModule
            ],
            declarations: [DelaylistPage]
        })
    ], DelaylistPageModule);
    return DelaylistPageModule;
})();
export { DelaylistPageModule };
//# sourceMappingURL=delaylist.module.js.map
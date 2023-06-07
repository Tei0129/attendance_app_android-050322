import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestedParentPageRoutingModule } from './requested-parent-routing.module';
import { RequestedParentPage } from './requested-parent.page';
import { PipesModule } from '../pipes/pipes.module';
let RequestedParentPageModule = /** @class */ (() => {
    let RequestedParentPageModule = class RequestedParentPageModule {
    };
    RequestedParentPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RequestedParentPageRoutingModule
            ],
            declarations: [RequestedParentPage]
        })
    ], RequestedParentPageModule);
    return RequestedParentPageModule;
})();
export { RequestedParentPageModule };
//# sourceMappingURL=requested-parent.module.js.map
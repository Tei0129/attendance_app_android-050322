import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { AboutUsPage } from './about-us.page';
import { PipesModule } from '../pipes/pipes.module';
let AboutUsPageModule = /** @class */ (() => {
    let AboutUsPageModule = class AboutUsPageModule {
    };
    AboutUsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                AboutUsPageRoutingModule,
                PipesModule
            ],
            declarations: [AboutUsPage]
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
})();
export { AboutUsPageModule };
//# sourceMappingURL=about-us.module.js.map
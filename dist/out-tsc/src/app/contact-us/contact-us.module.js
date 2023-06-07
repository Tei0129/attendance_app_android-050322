import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactUsPageRoutingModule } from './contact-us-routing.module';
import { ContactUsPage } from './contact-us.page';
import { PipesModule } from '../pipes/pipes.module';
let ContactUsPageModule = /** @class */ (() => {
    let ContactUsPageModule = class ContactUsPageModule {
    };
    ContactUsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ContactUsPageRoutingModule,
                PipesModule
            ],
            declarations: [ContactUsPage]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
})();
export { ContactUsPageModule };
//# sourceMappingURL=contact-us.module.js.map
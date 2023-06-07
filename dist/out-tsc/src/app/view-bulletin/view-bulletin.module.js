import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewBulletinPageRoutingModule } from './view-bulletin-routing.module';
import { ViewBulletinPage } from './view-bulletin.page';
import { PipesModule } from '../pipes/pipes.module';
let ViewBulletinPageModule = /** @class */ (() => {
    let ViewBulletinPageModule = class ViewBulletinPageModule {
    };
    ViewBulletinPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ViewBulletinPageRoutingModule,
                PipesModule
            ],
            declarations: [ViewBulletinPage]
        })
    ], ViewBulletinPageModule);
    return ViewBulletinPageModule;
})();
export { ViewBulletinPageModule };
//# sourceMappingURL=view-bulletin.module.js.map
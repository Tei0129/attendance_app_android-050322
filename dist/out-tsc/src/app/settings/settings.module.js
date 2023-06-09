import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { PipesModule } from '../pipes/pipes.module';
let SettingsPageModule = /** @class */ (() => {
    let SettingsPageModule = class SettingsPageModule {
    };
    SettingsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SettingsPageRoutingModule,
                PipesModule
            ],
            declarations: [SettingsPage]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
})();
export { SettingsPageModule };
//# sourceMappingURL=settings.module.js.map
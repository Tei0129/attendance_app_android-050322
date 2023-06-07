import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectBulletinsUserPageRoutingModule } from './select-bulletins-user-routing.module';
import { SelectBulletinsUserPage } from './select-bulletins-user.page';
import { PipesModule } from '../pipes/pipes.module';
let SelectBulletinsUserPageModule = /** @class */ (() => {
    let SelectBulletinsUserPageModule = class SelectBulletinsUserPageModule {
    };
    SelectBulletinsUserPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                SelectBulletinsUserPageRoutingModule
            ],
            declarations: [SelectBulletinsUserPage]
        })
    ], SelectBulletinsUserPageModule);
    return SelectBulletinsUserPageModule;
})();
export { SelectBulletinsUserPageModule };
//# sourceMappingURL=select-bulletins-user.module.js.map
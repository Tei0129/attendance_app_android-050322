import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BulletinsPageRoutingModule } from './bulletins-routing.module';
import { BulletinsPage } from './bulletins.page';
import { PipesModule } from '../pipes/pipes.module';
let BulletinsPageModule = /** @class */ (() => {
    let BulletinsPageModule = class BulletinsPageModule {
    };
    BulletinsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                BulletinsPageRoutingModule,
                PipesModule
            ],
            declarations: [BulletinsPage]
        })
    ], BulletinsPageModule);
    return BulletinsPageModule;
})();
export { BulletinsPageModule };
//# sourceMappingURL=bulletins.module.js.map
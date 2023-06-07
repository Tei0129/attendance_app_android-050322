import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareBulletinsPageRoutingModule } from './share-bulletins-routing.module';
import { ShareBulletinsPage } from './share-bulletins.page';
import { PipesModule } from '../pipes/pipes.module';
let ShareBulletinsPageModule = /** @class */ (() => {
    let ShareBulletinsPageModule = class ShareBulletinsPageModule {
    };
    ShareBulletinsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ShareBulletinsPageRoutingModule,
                PipesModule
            ],
            declarations: [ShareBulletinsPage]
        })
    ], ShareBulletinsPageModule);
    return ShareBulletinsPageModule;
})();
export { ShareBulletinsPageModule };
//# sourceMappingURL=share-bulletins.module.js.map
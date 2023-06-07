import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FollowBulletinsPageRoutingModule } from './follow-bulletins-routing.module';
import { FollowBulletinsPage } from './follow-bulletins.page';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let FollowBulletinsPageModule = /** @class */ (() => {
    let FollowBulletinsPageModule = class FollowBulletinsPageModule {
    };
    FollowBulletinsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                FollowBulletinsPageRoutingModule,
                PipesModule
            ],
            declarations: [FollowBulletinsPage]
        })
    ], FollowBulletinsPageModule);
    return FollowBulletinsPageModule;
})();
export { FollowBulletinsPageModule };
//# sourceMappingURL=follow-bulletins.module.js.map
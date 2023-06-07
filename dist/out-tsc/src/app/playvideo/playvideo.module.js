import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayvideoPageRoutingModule } from './playvideo-routing.module';
import { PlayvideoPage } from './playvideo.page';
import { PipesModule } from '../pipes/pipes.module';
let PlayvideoPageModule = /** @class */ (() => {
    let PlayvideoPageModule = class PlayvideoPageModule {
    };
    PlayvideoPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PlayvideoPageRoutingModule,
                PipesModule
            ],
            declarations: [PlayvideoPage]
        })
    ], PlayvideoPageModule);
    return PlayvideoPageModule;
})();
export { PlayvideoPageModule };
//# sourceMappingURL=playvideo.module.js.map
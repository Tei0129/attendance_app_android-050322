import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ElearningSchoolVideoPageRoutingModule } from './elearning-school-video-routing.module';
import { ElearningSchoolVideoPage } from './elearning-school-video.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';
let ElearningSchoolVideoPageModule = /** @class */ (() => {
    let ElearningSchoolVideoPageModule = class ElearningSchoolVideoPageModule {
    };
    ElearningSchoolVideoPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ElearningSchoolVideoPageRoutingModule,
                IonicSelectableModule,
                PipesModule
            ],
            declarations: [ElearningSchoolVideoPage]
        })
    ], ElearningSchoolVideoPageModule);
    return ElearningSchoolVideoPageModule;
})();
export { ElearningSchoolVideoPageModule };
//# sourceMappingURL=elearning-school-video.module.js.map
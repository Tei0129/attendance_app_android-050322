import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentDetailPageRoutingModule } from './student-detail-routing.module';
import { StudentDetailPage } from './student-detail.page';
import { PipesModule } from '../pipes/pipes.module';
let StudentDetailPageModule = /** @class */ (() => {
    let StudentDetailPageModule = class StudentDetailPageModule {
    };
    StudentDetailPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                StudentDetailPageRoutingModule,
                PipesModule
            ],
            declarations: [StudentDetailPage]
        })
    ], StudentDetailPageModule);
    return StudentDetailPageModule;
})();
export { StudentDetailPageModule };
//# sourceMappingURL=student-detail.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageTeacherPageRoutingModule } from './manage-teacher-routing.module';
import { ManageTeacherPage } from './manage-teacher.page';
import { PipesModule } from '../pipes/pipes.module';
let ManageTeacherPageModule = /** @class */ (() => {
    let ManageTeacherPageModule = class ManageTeacherPageModule {
    };
    ManageTeacherPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ManageTeacherPageRoutingModule,
                PipesModule
            ],
            declarations: [ManageTeacherPage]
        })
    ], ManageTeacherPageModule);
    return ManageTeacherPageModule;
})();
export { ManageTeacherPageModule };
//# sourceMappingURL=manage-teacher.module.js.map
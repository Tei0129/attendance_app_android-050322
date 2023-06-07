import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageStudentPageRoutingModule } from './manage-student-routing.module';
import { ManageStudentPage } from './manage-student.page';
import { PipesModule } from '../pipes/pipes.module';
let ManageStudentPageModule = /** @class */ (() => {
    let ManageStudentPageModule = class ManageStudentPageModule {
    };
    ManageStudentPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ManageStudentPageRoutingModule,
                PipesModule
            ],
            declarations: [ManageStudentPage]
        })
    ], ManageStudentPageModule);
    return ManageStudentPageModule;
})();
export { ManageStudentPageModule };
//# sourceMappingURL=manage-student.module.js.map
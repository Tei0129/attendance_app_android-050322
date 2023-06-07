import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditStudentProfilePageRoutingModule } from './edit-student-profile-routing.module';
import { EditStudentProfilePage } from './edit-student-profile.page';
import { PipesModule } from '../pipes/pipes.module';
let EditStudentProfilePageModule = /** @class */ (() => {
    let EditStudentProfilePageModule = class EditStudentProfilePageModule {
    };
    EditStudentProfilePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                EditStudentProfilePageRoutingModule,
                PipesModule
            ],
            declarations: [EditStudentProfilePage]
        })
    ], EditStudentProfilePageModule);
    return EditStudentProfilePageModule;
})();
export { EditStudentProfilePageModule };
//# sourceMappingURL=edit-student-profile.module.js.map
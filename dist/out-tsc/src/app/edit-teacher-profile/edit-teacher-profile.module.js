import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditTeacherProfilePageRoutingModule } from './edit-teacher-profile-routing.module';
import { EditTeacherProfilePage } from './edit-teacher-profile.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { PipesModule } from '../pipes/pipes.module';
let EditTeacherProfilePageModule = /** @class */ (() => {
    let EditTeacherProfilePageModule = class EditTeacherProfilePageModule {
    };
    EditTeacherProfilePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                EditTeacherProfilePageRoutingModule,
                IonicSelectableModule,
                PipesModule
            ],
            declarations: [EditTeacherProfilePage]
        })
    ], EditTeacherProfilePageModule);
    return EditTeacherProfilePageModule;
})();
export { EditTeacherProfilePageModule };
//# sourceMappingURL=edit-teacher-profile.module.js.map
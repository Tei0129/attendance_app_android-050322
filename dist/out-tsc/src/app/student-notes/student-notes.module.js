import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentNotesPageRoutingModule } from './student-notes-routing.module';
import { StudentNotesPage } from './student-notes.page';
import { PipesModule } from '../pipes/pipes.module';
let StudentNotesPageModule = /** @class */ (() => {
    let StudentNotesPageModule = class StudentNotesPageModule {
    };
    StudentNotesPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                StudentNotesPageRoutingModule,
                PipesModule
            ],
            declarations: [StudentNotesPage]
        })
    ], StudentNotesPageModule);
    return StudentNotesPageModule;
})();
export { StudentNotesPageModule };
//# sourceMappingURL=student-notes.module.js.map
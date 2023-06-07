import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentsPageRoutingModule } from './students-routing.module';
import { StudentsPage } from './students.page';
import { PipesModule } from '../pipes/pipes.module';
let StudentsPageModule = /** @class */ (() => {
    let StudentsPageModule = class StudentsPageModule {
    };
    StudentsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                StudentsPageRoutingModule,
                PipesModule
            ],
            declarations: [StudentsPage]
        })
    ], StudentsPageModule);
    return StudentsPageModule;
})();
export { StudentsPageModule };
//# sourceMappingURL=students.module.js.map
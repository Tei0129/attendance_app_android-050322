import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListStudentPageRoutingModule } from './list-student-routing.module';
import { ListStudentPage } from './list-student.page';
import { PipesModule } from '../pipes/pipes.module';
let ListStudentPageModule = /** @class */ (() => {
    let ListStudentPageModule = class ListStudentPageModule {
    };
    ListStudentPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ListStudentPageRoutingModule,
                PipesModule
            ],
            declarations: [ListStudentPage]
        })
    ], ListStudentPageModule);
    return ListStudentPageModule;
})();
export { ListStudentPageModule };
//# sourceMappingURL=list-student.module.js.map
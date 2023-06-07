import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchStudentPageRoutingModule } from './search-student-routing.module';
import { SearchStudentPage } from './search-student.page';
import { PipesModule } from '../pipes/pipes.module';
let SearchStudentPageModule = /** @class */ (() => {
    let SearchStudentPageModule = class SearchStudentPageModule {
    };
    SearchStudentPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SearchStudentPageRoutingModule,
                PipesModule
            ],
            declarations: [SearchStudentPage]
        })
    ], SearchStudentPageModule);
    return SearchStudentPageModule;
})();
export { SearchStudentPageModule };
//# sourceMappingURL=search-student.module.js.map
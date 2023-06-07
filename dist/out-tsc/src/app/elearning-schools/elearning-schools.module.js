import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ElearningSchoolsPageRoutingModule } from './elearning-schools-routing.module';
import { ElearningSchoolsPage } from './elearning-schools.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';
let ElearningSchoolsPageModule = /** @class */ (() => {
    let ElearningSchoolsPageModule = class ElearningSchoolsPageModule {
    };
    ElearningSchoolsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ElearningSchoolsPageRoutingModule,
                PipesModule,
                IonicSelectableModule
            ],
            declarations: [ElearningSchoolsPage]
        })
    ], ElearningSchoolsPageModule);
    return ElearningSchoolsPageModule;
})();
export { ElearningSchoolsPageModule };
//# sourceMappingURL=elearning-schools.module.js.map
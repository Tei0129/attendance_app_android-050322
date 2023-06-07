import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeminarListPageRoutingModule } from './seminar-list-routing.module';
import { SeminarListPage } from './seminar-list.page';
import { PipesModule } from '../pipes/pipes.module';
let SeminarListPageModule = /** @class */ (() => {
    let SeminarListPageModule = class SeminarListPageModule {
    };
    SeminarListPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SeminarListPageRoutingModule,
                PipesModule
            ],
            declarations: [SeminarListPage]
        })
    ], SeminarListPageModule);
    return SeminarListPageModule;
})();
export { SeminarListPageModule };
//# sourceMappingURL=seminar-list.module.js.map
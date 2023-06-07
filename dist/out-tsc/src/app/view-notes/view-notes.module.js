import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewNotesPageRoutingModule } from './view-notes-routing.module';
import { ViewNotesPage } from './view-notes.page';
import { PipesModule } from '../pipes/pipes.module';
let ViewNotesPageModule = /** @class */ (() => {
    let ViewNotesPageModule = class ViewNotesPageModule {
    };
    ViewNotesPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ViewNotesPageRoutingModule,
                PipesModule
            ],
            declarations: [ViewNotesPage]
        })
    ], ViewNotesPageModule);
    return ViewNotesPageModule;
})();
export { ViewNotesPageModule };
//# sourceMappingURL=view-notes.module.js.map
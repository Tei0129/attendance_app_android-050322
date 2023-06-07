import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewClassNotesPageRoutingModule } from './view-class-notes-routing.module';
import { ViewClassNotesPage } from './view-class-notes.page';
import { PipesModule } from '../../pipes/pipes.module';
let ViewClassNotesPageModule = /** @class */ (() => {
    let ViewClassNotesPageModule = class ViewClassNotesPageModule {
    };
    ViewClassNotesPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                PipesModule,
                IonicModule,
                ViewClassNotesPageRoutingModule
            ],
            declarations: [ViewClassNotesPage]
        })
    ], ViewClassNotesPageModule);
    return ViewClassNotesPageModule;
})();
export { ViewClassNotesPageModule };
//# sourceMappingURL=view-class-notes.module.js.map
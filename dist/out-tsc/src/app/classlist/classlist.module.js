import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClasslistPageRoutingModule } from './classlist-routing.module';
import { ClasslistPage } from './classlist.page';
import { PipesModule } from '../pipes/pipes.module';
let ClasslistPageModule = /** @class */ (() => {
    let ClasslistPageModule = class ClasslistPageModule {
    };
    ClasslistPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ClasslistPageRoutingModule,
                PipesModule
            ],
            declarations: [ClasslistPage]
        })
    ], ClasslistPageModule);
    return ClasslistPageModule;
})();
export { ClasslistPageModule };
//# sourceMappingURL=classlist.module.js.map
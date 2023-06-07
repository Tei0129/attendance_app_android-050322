import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterTeacherPageRoutingModule } from './register-teacher-routing.module';
import { RegisterTeacherPage } from './register-teacher.page';
import { PipesModule } from '../pipes/pipes.module';
let RegisterTeacherPageModule = /** @class */ (() => {
    let RegisterTeacherPageModule = class RegisterTeacherPageModule {
    };
    RegisterTeacherPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RegisterTeacherPageRoutingModule,
                PipesModule
            ],
            declarations: [RegisterTeacherPage]
        })
    ], RegisterTeacherPageModule);
    return RegisterTeacherPageModule;
})();
export { RegisterTeacherPageModule };
//# sourceMappingURL=register-teacher.module.js.map
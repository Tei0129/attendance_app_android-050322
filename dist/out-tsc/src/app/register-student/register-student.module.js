import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterStudentPageRoutingModule } from './register-student-routing.module';
import { RegisterStudentPage } from './register-student.page';
let RegisterStudentPageModule = /** @class */ (() => {
    let RegisterStudentPageModule = class RegisterStudentPageModule {
    };
    RegisterStudentPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RegisterStudentPageRoutingModule
            ],
            declarations: [RegisterStudentPage]
        })
    ], RegisterStudentPageModule);
    return RegisterStudentPageModule;
})();
export { RegisterStudentPageModule };
//# sourceMappingURL=register-student.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterStudentPage } from './register-student.page';
const routes = [
    {
        path: '',
        component: RegisterStudentPage
    }
];
let RegisterStudentPageRoutingModule = /** @class */ (() => {
    let RegisterStudentPageRoutingModule = class RegisterStudentPageRoutingModule {
    };
    RegisterStudentPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], RegisterStudentPageRoutingModule);
    return RegisterStudentPageRoutingModule;
})();
export { RegisterStudentPageRoutingModule };
//# sourceMappingURL=register-student-routing.module.js.map
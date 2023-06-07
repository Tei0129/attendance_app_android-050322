import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterTeacherPage } from './register-teacher.page';
const routes = [
    {
        path: '',
        component: RegisterTeacherPage
    }
];
let RegisterTeacherPageRoutingModule = /** @class */ (() => {
    let RegisterTeacherPageRoutingModule = class RegisterTeacherPageRoutingModule {
    };
    RegisterTeacherPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], RegisterTeacherPageRoutingModule);
    return RegisterTeacherPageRoutingModule;
})();
export { RegisterTeacherPageRoutingModule };
//# sourceMappingURL=register-teacher-routing.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageTeacherPage } from './manage-teacher.page';
const routes = [
    {
        path: '',
        component: ManageTeacherPage
    }
];
let ManageTeacherPageRoutingModule = /** @class */ (() => {
    let ManageTeacherPageRoutingModule = class ManageTeacherPageRoutingModule {
    };
    ManageTeacherPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ManageTeacherPageRoutingModule);
    return ManageTeacherPageRoutingModule;
})();
export { ManageTeacherPageRoutingModule };
//# sourceMappingURL=manage-teacher-routing.module.js.map
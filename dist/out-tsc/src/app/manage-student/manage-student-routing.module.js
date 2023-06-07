import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageStudentPage } from './manage-student.page';
const routes = [
    {
        path: '',
        component: ManageStudentPage
    }
];
let ManageStudentPageRoutingModule = /** @class */ (() => {
    let ManageStudentPageRoutingModule = class ManageStudentPageRoutingModule {
    };
    ManageStudentPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ManageStudentPageRoutingModule);
    return ManageStudentPageRoutingModule;
})();
export { ManageStudentPageRoutingModule };
//# sourceMappingURL=manage-student-routing.module.js.map
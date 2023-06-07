import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailPage } from './student-detail.page';
const routes = [
    {
        path: '',
        component: StudentDetailPage
    }
];
let StudentDetailPageRoutingModule = /** @class */ (() => {
    let StudentDetailPageRoutingModule = class StudentDetailPageRoutingModule {
    };
    StudentDetailPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], StudentDetailPageRoutingModule);
    return StudentDetailPageRoutingModule;
})();
export { StudentDetailPageRoutingModule };
//# sourceMappingURL=student-detail-routing.module.js.map
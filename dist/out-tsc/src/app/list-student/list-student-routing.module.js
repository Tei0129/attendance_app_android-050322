import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListStudentPage } from './list-student.page';
const routes = [
    {
        path: '',
        component: ListStudentPage
    }
];
let ListStudentPageRoutingModule = /** @class */ (() => {
    let ListStudentPageRoutingModule = class ListStudentPageRoutingModule {
    };
    ListStudentPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ListStudentPageRoutingModule);
    return ListStudentPageRoutingModule;
})();
export { ListStudentPageRoutingModule };
//# sourceMappingURL=list-student-routing.module.js.map
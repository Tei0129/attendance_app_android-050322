import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsPage } from './students.page';
const routes = [
    {
        path: '',
        component: StudentsPage
    }
];
let StudentsPageRoutingModule = /** @class */ (() => {
    let StudentsPageRoutingModule = class StudentsPageRoutingModule {
    };
    StudentsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], StudentsPageRoutingModule);
    return StudentsPageRoutingModule;
})();
export { StudentsPageRoutingModule };
//# sourceMappingURL=students-routing.module.js.map
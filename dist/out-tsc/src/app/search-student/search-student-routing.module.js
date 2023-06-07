import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchStudentPage } from './search-student.page';
const routes = [
    {
        path: '',
        component: SearchStudentPage
    }
];
let SearchStudentPageRoutingModule = /** @class */ (() => {
    let SearchStudentPageRoutingModule = class SearchStudentPageRoutingModule {
    };
    SearchStudentPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SearchStudentPageRoutingModule);
    return SearchStudentPageRoutingModule;
})();
export { SearchStudentPageRoutingModule };
//# sourceMappingURL=search-student-routing.module.js.map
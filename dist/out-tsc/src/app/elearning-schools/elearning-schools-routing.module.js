import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElearningSchoolsPage } from './elearning-schools.page';
const routes = [
    {
        path: '',
        component: ElearningSchoolsPage
    }
];
let ElearningSchoolsPageRoutingModule = /** @class */ (() => {
    let ElearningSchoolsPageRoutingModule = class ElearningSchoolsPageRoutingModule {
    };
    ElearningSchoolsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ElearningSchoolsPageRoutingModule);
    return ElearningSchoolsPageRoutingModule;
})();
export { ElearningSchoolsPageRoutingModule };
//# sourceMappingURL=elearning-schools-routing.module.js.map
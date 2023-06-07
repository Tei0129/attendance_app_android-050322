import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolRegistrationPage } from './school-registration.page';
const routes = [
    {
        path: '',
        component: SchoolRegistrationPage
    }
];
let SchoolRegistrationPageRoutingModule = /** @class */ (() => {
    let SchoolRegistrationPageRoutingModule = class SchoolRegistrationPageRoutingModule {
    };
    SchoolRegistrationPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SchoolRegistrationPageRoutingModule);
    return SchoolRegistrationPageRoutingModule;
})();
export { SchoolRegistrationPageRoutingModule };
//# sourceMappingURL=school-registration-routing.module.js.map
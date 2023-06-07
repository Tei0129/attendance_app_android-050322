import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditStudentProfilePage } from './edit-student-profile.page';
const routes = [
    {
        path: '',
        component: EditStudentProfilePage
    }
];
let EditStudentProfilePageRoutingModule = /** @class */ (() => {
    let EditStudentProfilePageRoutingModule = class EditStudentProfilePageRoutingModule {
    };
    EditStudentProfilePageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], EditStudentProfilePageRoutingModule);
    return EditStudentProfilePageRoutingModule;
})();
export { EditStudentProfilePageRoutingModule };
//# sourceMappingURL=edit-student-profile-routing.module.js.map
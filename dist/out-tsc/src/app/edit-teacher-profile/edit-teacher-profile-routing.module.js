import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditTeacherProfilePage } from './edit-teacher-profile.page';
const routes = [
    {
        path: '',
        component: EditTeacherProfilePage
    }
];
let EditTeacherProfilePageRoutingModule = /** @class */ (() => {
    let EditTeacherProfilePageRoutingModule = class EditTeacherProfilePageRoutingModule {
    };
    EditTeacherProfilePageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], EditTeacherProfilePageRoutingModule);
    return EditTeacherProfilePageRoutingModule;
})();
export { EditTeacherProfilePageRoutingModule };
//# sourceMappingURL=edit-teacher-profile-routing.module.js.map
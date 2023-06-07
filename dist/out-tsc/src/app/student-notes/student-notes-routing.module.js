import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentNotesPage } from './student-notes.page';
const routes = [
    {
        path: '',
        component: StudentNotesPage
    }
];
let StudentNotesPageRoutingModule = /** @class */ (() => {
    let StudentNotesPageRoutingModule = class StudentNotesPageRoutingModule {
    };
    StudentNotesPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], StudentNotesPageRoutingModule);
    return StudentNotesPageRoutingModule;
})();
export { StudentNotesPageRoutingModule };
//# sourceMappingURL=student-notes-routing.module.js.map
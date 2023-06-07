import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddNotesPage } from './add-notes.page';
const routes = [
    {
        path: '',
        component: AddNotesPage
    }
];
let AddNotesPageRoutingModule = /** @class */ (() => {
    let AddNotesPageRoutingModule = class AddNotesPageRoutingModule {
    };
    AddNotesPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], AddNotesPageRoutingModule);
    return AddNotesPageRoutingModule;
})();
export { AddNotesPageRoutingModule };
//# sourceMappingURL=add-notes-routing.module.js.map
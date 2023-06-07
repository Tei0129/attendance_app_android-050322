import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewNotesPage } from './view-notes.page';
const routes = [
    {
        path: '',
        component: ViewNotesPage
    }
];
let ViewNotesPageRoutingModule = /** @class */ (() => {
    let ViewNotesPageRoutingModule = class ViewNotesPageRoutingModule {
    };
    ViewNotesPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ViewNotesPageRoutingModule);
    return ViewNotesPageRoutingModule;
})();
export { ViewNotesPageRoutingModule };
//# sourceMappingURL=view-notes-routing.module.js.map
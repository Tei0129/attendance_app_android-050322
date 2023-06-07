import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewClassNotesPage } from './view-class-notes.page';
const routes = [
    {
        path: 'view-class-notes',
        component: ViewClassNotesPage
    }
];
let ViewClassNotesPageRoutingModule = /** @class */ (() => {
    let ViewClassNotesPageRoutingModule = class ViewClassNotesPageRoutingModule {
    };
    ViewClassNotesPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ViewClassNotesPageRoutingModule);
    return ViewClassNotesPageRoutingModule;
})();
export { ViewClassNotesPageRoutingModule };
//# sourceMappingURL=view-class-notes-routing.module.js.map
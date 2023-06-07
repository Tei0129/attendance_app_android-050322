import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeminarListPage } from './seminar-list.page';
const routes = [
    {
        path: '',
        component: SeminarListPage
    }
];
let SeminarListPageRoutingModule = /** @class */ (() => {
    let SeminarListPageRoutingModule = class SeminarListPageRoutingModule {
    };
    SeminarListPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SeminarListPageRoutingModule);
    return SeminarListPageRoutingModule;
})();
export { SeminarListPageRoutingModule };
//# sourceMappingURL=seminar-list-routing.module.js.map
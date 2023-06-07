import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildrenPage } from './children.page';
const routes = [
    {
        path: '',
        component: ChildrenPage
    }
];
let ChildrenPageRoutingModule = /** @class */ (() => {
    let ChildrenPageRoutingModule = class ChildrenPageRoutingModule {
    };
    ChildrenPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ChildrenPageRoutingModule);
    return ChildrenPageRoutingModule;
})();
export { ChildrenPageRoutingModule };
//# sourceMappingURL=children-routing.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectBulletinsUserPage } from './select-bulletins-user.page';
const routes = [
    {
        path: '',
        component: SelectBulletinsUserPage
    }
];
let SelectBulletinsUserPageRoutingModule = /** @class */ (() => {
    let SelectBulletinsUserPageRoutingModule = class SelectBulletinsUserPageRoutingModule {
    };
    SelectBulletinsUserPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SelectBulletinsUserPageRoutingModule);
    return SelectBulletinsUserPageRoutingModule;
})();
export { SelectBulletinsUserPageRoutingModule };
//# sourceMappingURL=select-bulletins-user-routing.module.js.map
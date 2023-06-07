import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FollowBulletinsPage } from './follow-bulletins.page';
const routes = [
    {
        path: '',
        component: FollowBulletinsPage
    }
];
let FollowBulletinsPageRoutingModule = /** @class */ (() => {
    let FollowBulletinsPageRoutingModule = class FollowBulletinsPageRoutingModule {
    };
    FollowBulletinsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], FollowBulletinsPageRoutingModule);
    return FollowBulletinsPageRoutingModule;
})();
export { FollowBulletinsPageRoutingModule };
//# sourceMappingURL=follow-bulletins-routing.module.js.map
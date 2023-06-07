import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BulletinsPage } from './bulletins.page';
const routes = [
    {
        path: '',
        component: BulletinsPage
    }
];
let BulletinsPageRoutingModule = /** @class */ (() => {
    let BulletinsPageRoutingModule = class BulletinsPageRoutingModule {
    };
    BulletinsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], BulletinsPageRoutingModule);
    return BulletinsPageRoutingModule;
})();
export { BulletinsPageRoutingModule };
//# sourceMappingURL=bulletins-routing.module.js.map
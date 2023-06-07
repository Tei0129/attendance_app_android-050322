import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareBulletinsPage } from './share-bulletins.page';
const routes = [
    {
        path: '',
        component: ShareBulletinsPage
    }
];
let ShareBulletinsPageRoutingModule = /** @class */ (() => {
    let ShareBulletinsPageRoutingModule = class ShareBulletinsPageRoutingModule {
    };
    ShareBulletinsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ShareBulletinsPageRoutingModule);
    return ShareBulletinsPageRoutingModule;
})();
export { ShareBulletinsPageRoutingModule };
//# sourceMappingURL=share-bulletins-routing.module.js.map
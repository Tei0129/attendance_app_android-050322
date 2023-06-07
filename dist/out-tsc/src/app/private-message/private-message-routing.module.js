import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivateMessagePage } from './private-message.page';
const routes = [
    {
        path: '',
        component: PrivateMessagePage
    }
];
let PrivateMessagePageRoutingModule = /** @class */ (() => {
    let PrivateMessagePageRoutingModule = class PrivateMessagePageRoutingModule {
    };
    PrivateMessagePageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], PrivateMessagePageRoutingModule);
    return PrivateMessagePageRoutingModule;
})();
export { PrivateMessagePageRoutingModule };
//# sourceMappingURL=private-message-routing.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectNewMessagePage } from './connect-new-message.page';
const routes = [
    {
        path: '',
        component: ConnectNewMessagePage
    }
];
let ConnectNewMessagePageRoutingModule = /** @class */ (() => {
    let ConnectNewMessagePageRoutingModule = class ConnectNewMessagePageRoutingModule {
    };
    ConnectNewMessagePageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ConnectNewMessagePageRoutingModule);
    return ConnectNewMessagePageRoutingModule;
})();
export { ConnectNewMessagePageRoutingModule };
//# sourceMappingURL=connect-new-message-routing.module.js.map
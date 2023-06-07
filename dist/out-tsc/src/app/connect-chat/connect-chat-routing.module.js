import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectChatPage } from './connect-chat.page';
const routes = [
    {
        path: '',
        component: ConnectChatPage
    }
];
let ConnectChatPageRoutingModule = /** @class */ (() => {
    let ConnectChatPageRoutingModule = class ConnectChatPageRoutingModule {
    };
    ConnectChatPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ConnectChatPageRoutingModule);
    return ConnectChatPageRoutingModule;
})();
export { ConnectChatPageRoutingModule };
//# sourceMappingURL=connect-chat-routing.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendmessagePage } from './sendmessage.page';
const routes = [
    {
        path: '',
        component: SendmessagePage
    }
];
let SendmessagePageRoutingModule = /** @class */ (() => {
    let SendmessagePageRoutingModule = class SendmessagePageRoutingModule {
    };
    SendmessagePageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], SendmessagePageRoutingModule);
    return SendmessagePageRoutingModule;
})();
export { SendmessagePageRoutingModule };
//# sourceMappingURL=sendmessage-routing.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentconnectPage } from './parentconnect.page';
const routes = [
    {
        path: '',
        component: ParentconnectPage
    }
];
let ParentconnectPageRoutingModule = /** @class */ (() => {
    let ParentconnectPageRoutingModule = class ParentconnectPageRoutingModule {
    };
    ParentconnectPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ParentconnectPageRoutingModule);
    return ParentconnectPageRoutingModule;
})();
export { ParentconnectPageRoutingModule };
//# sourceMappingURL=parentconnect-routing.module.js.map
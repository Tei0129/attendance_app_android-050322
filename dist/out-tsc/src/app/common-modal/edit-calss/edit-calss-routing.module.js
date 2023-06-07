import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditCalssPage } from './edit-calss.page';
const routes = [
    {
        path: '',
        component: EditCalssPage
    }
];
let EditCalssPageRoutingModule = /** @class */ (() => {
    let EditCalssPageRoutingModule = class EditCalssPageRoutingModule {
    };
    EditCalssPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], EditCalssPageRoutingModule);
    return EditCalssPageRoutingModule;
})();
export { EditCalssPageRoutingModule };
//# sourceMappingURL=edit-calss-routing.module.js.map
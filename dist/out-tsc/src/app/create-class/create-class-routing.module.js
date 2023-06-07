import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateClassPage } from './create-class.page';
const routes = [
    {
        path: '',
        component: CreateClassPage
    }
];
let CreateClassPageRoutingModule = /** @class */ (() => {
    let CreateClassPageRoutingModule = class CreateClassPageRoutingModule {
    };
    CreateClassPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], CreateClassPageRoutingModule);
    return CreateClassPageRoutingModule;
})();
export { CreateClassPageRoutingModule };
//# sourceMappingURL=create-class-routing.module.js.map
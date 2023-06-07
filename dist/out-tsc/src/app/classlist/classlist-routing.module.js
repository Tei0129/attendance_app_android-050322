import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClasslistPage } from './classlist.page';
const routes = [
    {
        path: '',
        component: ClasslistPage
    }
];
let ClasslistPageRoutingModule = /** @class */ (() => {
    let ClasslistPageRoutingModule = class ClasslistPageRoutingModule {
    };
    ClasslistPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ClasslistPageRoutingModule);
    return ClasslistPageRoutingModule;
})();
export { ClasslistPageRoutingModule };
//# sourceMappingURL=classlist-routing.module.js.map
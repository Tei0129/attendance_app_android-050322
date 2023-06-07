import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElearningSchoolVideoPage } from './elearning-school-video.page';
const routes = [
    {
        path: '',
        component: ElearningSchoolVideoPage
    }
];
let ElearningSchoolVideoPageRoutingModule = /** @class */ (() => {
    let ElearningSchoolVideoPageRoutingModule = class ElearningSchoolVideoPageRoutingModule {
    };
    ElearningSchoolVideoPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ElearningSchoolVideoPageRoutingModule);
    return ElearningSchoolVideoPageRoutingModule;
})();
export { ElearningSchoolVideoPageRoutingModule };
//# sourceMappingURL=elearning-school-video-routing.module.js.map
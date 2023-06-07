import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayvideoPage } from './playvideo.page';
const routes = [
    {
        path: '',
        component: PlayvideoPage
    }
];
let PlayvideoPageRoutingModule = /** @class */ (() => {
    let PlayvideoPageRoutingModule = class PlayvideoPageRoutingModule {
    };
    PlayvideoPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], PlayvideoPageRoutingModule);
    return PlayvideoPageRoutingModule;
})();
export { PlayvideoPageRoutingModule };
//# sourceMappingURL=playvideo-routing.module.js.map
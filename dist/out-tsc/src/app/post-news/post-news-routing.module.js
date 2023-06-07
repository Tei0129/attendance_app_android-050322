import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostNewsPage } from './post-news.page';
const routes = [
    {
        path: '',
        component: PostNewsPage
    }
];
let PostNewsPageRoutingModule = /** @class */ (() => {
    let PostNewsPageRoutingModule = class PostNewsPageRoutingModule {
    };
    PostNewsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], PostNewsPageRoutingModule);
    return PostNewsPageRoutingModule;
})();
export { PostNewsPageRoutingModule };
//# sourceMappingURL=post-news-routing.module.js.map
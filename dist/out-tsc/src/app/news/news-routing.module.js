import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsPage } from './news.page';
const routes = [
    {
        path: '',
        component: NewsPage
    }
];
let NewsPageRoutingModule = /** @class */ (() => {
    let NewsPageRoutingModule = class NewsPageRoutingModule {
    };
    NewsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], NewsPageRoutingModule);
    return NewsPageRoutingModule;
})();
export { NewsPageRoutingModule };
//# sourceMappingURL=news-routing.module.js.map
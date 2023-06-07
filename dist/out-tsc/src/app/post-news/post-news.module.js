import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostNewsPageRoutingModule } from './post-news-routing.module';
import { PostNewsPage } from './post-news.page';
import { PipesModule } from '../pipes/pipes.module';
let PostNewsPageModule = /** @class */ (() => {
    let PostNewsPageModule = class PostNewsPageModule {
    };
    PostNewsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                PostNewsPageRoutingModule
            ],
            declarations: [PostNewsPage]
        })
    ], PostNewsPageModule);
    return PostNewsPageModule;
})();
export { PostNewsPageModule };
//# sourceMappingURL=post-news.module.js.map
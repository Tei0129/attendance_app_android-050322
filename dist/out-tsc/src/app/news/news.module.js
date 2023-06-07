import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsPageRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';
let NewsPageModule = /** @class */ (() => {
    let NewsPageModule = class NewsPageModule {
    };
    NewsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                NewsPageRoutingModule,
                IonicSelectableModule
            ],
            declarations: [NewsPage]
        })
    ], NewsPageModule);
    return NewsPageModule;
})();
export { NewsPageModule };
//# sourceMappingURL=news.module.js.map
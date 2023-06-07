import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
let TabsPageModule = /** @class */ (() => {
    let TabsPageModule = class TabsPageModule {
    };
    TabsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TabsPageRoutingModule
            ],
            declarations: [TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
})();
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map
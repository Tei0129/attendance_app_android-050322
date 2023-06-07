import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
let FolderPageModule = /** @class */ (() => {
    let FolderPageModule = class FolderPageModule {
    };
    FolderPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                FolderPageRoutingModule
            ],
            declarations: [FolderPage]
        })
    ], FolderPageModule);
    return FolderPageModule;
})();
export { FolderPageModule };
//# sourceMappingURL=folder.module.js.map
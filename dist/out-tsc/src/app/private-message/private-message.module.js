import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrivateMessagePageRoutingModule } from './private-message-routing.module';
import { PrivateMessagePage } from './private-message.page';
import { PipesModule } from '../pipes/pipes.module';
let PrivateMessagePageModule = /** @class */ (() => {
    let PrivateMessagePageModule = class PrivateMessagePageModule {
    };
    PrivateMessagePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PrivateMessagePageRoutingModule,
                PipesModule
            ],
            declarations: [PrivateMessagePage]
        })
    ], PrivateMessagePageModule);
    return PrivateMessagePageModule;
})();
export { PrivateMessagePageModule };
//# sourceMappingURL=private-message.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnectNewMessagePageRoutingModule } from './connect-new-message-routing.module';
import { ConnectNewMessagePage } from './connect-new-message.page';
import { PipesModule } from '../pipes/pipes.module';
let ConnectNewMessagePageModule = /** @class */ (() => {
    let ConnectNewMessagePageModule = class ConnectNewMessagePageModule {
    };
    ConnectNewMessagePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ConnectNewMessagePageRoutingModule,
                PipesModule
            ],
            declarations: [ConnectNewMessagePage]
        })
    ], ConnectNewMessagePageModule);
    return ConnectNewMessagePageModule;
})();
export { ConnectNewMessagePageModule };
//# sourceMappingURL=connect-new-message.module.js.map
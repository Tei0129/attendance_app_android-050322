import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnectChatPageRoutingModule } from './connect-chat-routing.module';
import { ConnectChatPage } from './connect-chat.page';
import { PipesModule } from '../pipes/pipes.module';
let ConnectChatPageModule = /** @class */ (() => {
    let ConnectChatPageModule = class ConnectChatPageModule {
    };
    ConnectChatPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ConnectChatPageRoutingModule,
                PipesModule
            ],
            declarations: [ConnectChatPage]
        })
    ], ConnectChatPageModule);
    return ConnectChatPageModule;
})();
export { ConnectChatPageModule };
//# sourceMappingURL=connect-chat.module.js.map
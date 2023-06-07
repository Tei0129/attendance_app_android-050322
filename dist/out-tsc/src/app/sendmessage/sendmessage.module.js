import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SendmessagePageRoutingModule } from './sendmessage-routing.module';
import { SendmessagePage } from './sendmessage.page';
import { PipesModule } from '../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';
let SendmessagePageModule = /** @class */ (() => {
    let SendmessagePageModule = class SendmessagePageModule {
    };
    SendmessagePageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SendmessagePageRoutingModule,
                PipesModule,
                IonicSelectableModule
            ],
            declarations: [SendmessagePage]
        })
    ], SendmessagePageModule);
    return SendmessagePageModule;
})();
export { SendmessagePageModule };
//# sourceMappingURL=sendmessage.module.js.map
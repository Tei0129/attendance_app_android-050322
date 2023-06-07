import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditCalssPageRoutingModule } from './edit-calss-routing.module';
import { EditCalssPage } from './edit-calss.page';
import { PipesModule } from '../../pipes/pipes.module';
let EditCalssPageModule = /** @class */ (() => {
    let EditCalssPageModule = class EditCalssPageModule {
    };
    EditCalssPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                EditCalssPageRoutingModule
            ],
            declarations: [EditCalssPage]
        })
    ], EditCalssPageModule);
    return EditCalssPageModule;
})();
export { EditCalssPageModule };
//# sourceMappingURL=edit-calss.module.js.map
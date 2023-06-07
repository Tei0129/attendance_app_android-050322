import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { SafePipe } from './safe/safe.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'ion2-calendar';
let PipesModule = /** @class */ (() => {
    let PipesModule = class PipesModule {
    };
    PipesModule = __decorate([
        NgModule({
            declarations: [DateFormatPipe,
                SafePipe],
            imports: [],
            exports: [DateFormatPipe,
                SafePipe,
                CalendarModule,
                TranslateModule]
        })
    ], PipesModule);
    return PipesModule;
})();
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map
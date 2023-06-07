import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let DateFormatPipe = /** @class */ (() => {
    let DateFormatPipe = class DateFormatPipe {
        constructor() {
            this.DATE_FMT = "yy MM dd";
            this.monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            this.dayNames = ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
        }
        transform(value, ...args) {
            let date = new Date(value);
            let year = date.getFullYear().toString();
            let formatedDate = year.slice(2, 4) + ' ' + this.monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + this.dayNames[date.getDay()];
            return formatedDate;
        }
    };
    DateFormatPipe = __decorate([
        Pipe({
            name: 'dateFormat',
        })
    ], DateFormatPipe);
    return DateFormatPipe;
})();
export { DateFormatPipe };
//# sourceMappingURL=date-format.pipe.js.map
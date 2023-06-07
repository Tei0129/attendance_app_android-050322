import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
let SafePipe = /** @class */ (() => {
    let SafePipe = class SafePipe {
        /**
         * Takes a value and makes it lowercase.
         */
        constructor(sanitizer) {
            this.sanitizer = sanitizer;
        }
        transform(value, ...args) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
    };
    SafePipe = __decorate([
        Pipe({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], SafePipe);
    return SafePipe;
})();
export { SafePipe };
//# sourceMappingURL=safe.pipe.js.map
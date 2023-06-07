import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
let AuthGuard = /** @class */ (() => {
    let AuthGuard = class AuthGuard {
        constructor(zone, navCtrl) {
            this.zone = zone;
            this.navCtrl = navCtrl;
        }
        canActivate(next, state) {
            return __awaiter(this, void 0, void 0, function* () {
                // todo: apply login status
                const isLoggedIn = JSON.parse(localStorage.getItem("userloggedin"));
                let isUser;
                if (isLoggedIn) {
                    if (isLoggedIn.userType != 'guest') {
                        isUser = true;
                    }
                    else {
                        isUser = false;
                    }
                }
                else {
                    isUser = false;
                }
                console.log('isLoggedIn', isLoggedIn);
                if (!isLoggedIn) {
                    // this.zone.run(() => { this.navCtrl.navigateRoot('/landing'); });
                }
                else {
                    //	this.zone.run(() => { this.navCtrl.navigateRoot('/tabs'); });
                }
                //return await isLoggedIn.userType == 'guest'? false : true;
                return isUser;
            });
        }
    };
    AuthGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NgZone, NavController])
    ], AuthGuard);
    return AuthGuard;
})();
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map
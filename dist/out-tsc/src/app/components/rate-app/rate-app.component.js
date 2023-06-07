import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
let RateAppComponent = /** @class */ (() => {
    let RateAppComponent = class RateAppComponent {
        constructor(popoverController) {
            this.popoverController = popoverController;
        }
        ngOnInit() {
            console.log(this.lang, this.data);
            setTimeout(() => {
                const inputElement = document.getElementById("textArea");
                inputElement.value = this.data.note;
                if (this.data.rating == '1') {
                    let ch = document.getElementById('rating-1');
                    console.log(ch);
                    setTimeout(() => {
                        ch.checked = true;
                    }, 300);
                }
                if (this.data.rating == '2') {
                    let ch = document.getElementById('rating-2');
                    console.log(ch);
                    setTimeout(() => {
                        ch.checked = true;
                    }, 300);
                }
                if (this.data.rating == '3') {
                    let ch = document.getElementById('rating-3');
                    console.log(ch);
                    setTimeout(() => {
                        ch.checked = true;
                    }, 300);
                }
                if (this.data.rating == '4') {
                    let ch = document.getElementById('rating-4');
                    console.log(ch);
                    setTimeout(() => {
                        ch.checked = true;
                    }, 300);
                }
                if (this.data.rating == '5') {
                    let ch = document.getElementById('rating-5');
                    console.log(ch);
                    setTimeout(() => {
                        ch.checked = true;
                    }, 300);
                }
            }, 500);
        }
        closePopup(data) {
            this.popoverController.dismiss(data);
        }
        rate() {
            const inputElement = document.getElementById("textArea");
            let i = inputElement.value;
            let stars;
            if (this.providedStars) {
                stars = this.providedStars;
            }
            else {
                stars = this.data.rating;
            }
            let data = {
                stars: stars,
                description: i
            };
            // console.log(data);
            this.closePopup(data);
        }
        provideRating(stars, eve) {
            console.log(eve);
            this.providedStars = stars;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RateAppComponent.prototype, "lang", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RateAppComponent.prototype, "data", void 0);
    RateAppComponent = __decorate([
        Component({
            selector: 'app-rate-app',
            templateUrl: './rate-app.component.html',
            styleUrls: ['./rate-app.component.scss'],
        }),
        __metadata("design:paramtypes", [PopoverController])
    ], RateAppComponent);
    return RateAppComponent;
})();
export { RateAppComponent };
//# sourceMappingURL=rate-app.component.js.map
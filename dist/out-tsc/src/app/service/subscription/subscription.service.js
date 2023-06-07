import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { DataService } from '../data/data.service';
import { environment } from '../../../environments/environment';
import { InAppPurchase2 } from "@ionic-native/in-app-purchase-2/ngx";
import { AlertController, LoadingController, Platform, ToastController } from "@ionic/angular";
const env = environment;
let SubscriptionService = /** @class */ (() => {
    let SubscriptionService = class SubscriptionService {
        constructor(payPal, dataService, store, platform, loadingCtrl, toastCtrl, alertCtrl) {
            this.payPal = payPal;
            this.dataService = dataService;
            this.store = store;
            this.platform = platform;
            this.loadingCtrl = loadingCtrl;
            this.toastCtrl = toastCtrl;
            this.alertCtrl = alertCtrl;
            /**
             * Map of available products configs
             * @type {any}
             */
            this.products = {
                NO_ADS: {
                    id: 'NO_ADS',
                    appleProductId: 'com.games.challenge.no.ads',
                    googleProductId: 'com.sayoo.challenge.no.ads'
                },
                SMALL: {
                    id: 'SMALL',
                    appleProductId: 'com.games.challenge.pack.small',
                    googleProductId: 'com.sayoo.challenge.pack.small'
                },
                MEDIUM: {
                    id: 'MEDIUM',
                    appleProductId: 'com.games.challenge.pack.medium',
                    googleProductId: 'com.sayoo.challenge.pack.medium'
                },
                LARGE: {
                    id: 'LARGE',
                    appleProductId: 'com.games.challenge.pack.large',
                    googleProductId: 'com.sayoo.challenge.pack.large'
                },
                LUXE: {
                    id: 'LUXE',
                    appleProductId: 'com.games.challenge.pack.luxe',
                    googleProductId: 'com.sayoo.challenge.pack.luxe'
                }
            };
        }
        /* --- GOOGLE PAY WEB API CONFIG --*/
        /**
         * Configure your site's support for payment methods supported by the Google Pay API.
    
         */
        /**
         * Initialize purchase configs and prepare environment
         * @param {object} product Product config
         * @param {Function} onApprovedListener Callback function with purchase status
         */
        configurePurchasing(product, onApprovedListener) {
            if (this.configured || !this.platform.is('cordova')) {
                return;
            }
            console.log('Starting Configurations');
            let productId;
            try {
                this.configured = true;
                if (this.platform.is('ios')) {
                    productId = product.appleProductId;
                }
                else if (this.platform.is('android')) {
                    productId = product.googleProductId;
                }
                // Register Product
                console.log('Registering Product ' + JSON.stringify(productId));
                this.store.verbosity = this.store.INFO;
                this.store.register({
                    id: productId,
                    alias: productId,
                    type: this.store.CONSUMABLE
                });
                // Handlers
                this.store.when(productId).approved((product) => {
                    // Purchase was approved
                    product.finish();
                    this.loader.dismiss();
                    onApprovedListener();
                });
                this.store.when(productId).registered((product) => {
                    console.log('Registered: ' + JSON.stringify(product));
                });
                this.store.when(productId).updated((product) => {
                    console.log('Loaded' + JSON.stringify(product));
                });
                this.store.when(productId).cancelled((product) => {
                    if (this.loader.isOverlay) {
                        this.loader.dismiss();
                        // this.alertCtrl.create({message: 'تم إلغاء العملية', buttons: [{text: 'تأكيد'}]}).present();
                    }
                });
                this.store.error((err) => {
                    this.loader.dismiss();
                    // this.alertCtrl
                    //     .create({message: 'حدث خطأ أثناء العملية: ' + JSON.stringify(err), buttons: [{text: 'تأكيد'}]})
                    //     .present();
                });
                this.store.ready((status) => {
                    console.log(JSON.stringify(this.store.get(productId)));
                    console.log('Store is Ready: ' + JSON.stringify(status));
                    console.log('Products: ' + JSON.stringify(this.store.products));
                });
                // Errors
                this.store.when(productId).error((error) => {
                    this.loader.dismiss();
                    // this.alertCtrl
                    //     .create({message: 'حدث خطأ أثناء العملية: ' + JSON.stringify(error), buttons: [{text: 'تأكيد'}]})
                    //     .present();
                });
                // Refresh Always
                console.log('Refresh Store');
                this.store.refresh();
            }
            catch (err) {
                console.log('Error On Store Issues' + JSON.stringify(err));
            }
        }
        isInAppPurchaseAvailable() {
            if (this.platform.is('cordova')) {
                return true;
            }
            else if (window.FBInstant && typeof window.FBInstant.getSupportedAPIs === 'function') {
                let supportedAPIs = window.FBInstant.getSupportedAPIs();
                if (!supportedAPIs)
                    supportedAPIs = [];
                return (supportedAPIs.length > 0) && supportedAPIs.includes('payments.purchaseAsync');
            }
            else {
                return false;
            }
        }
        /**
         * Proceed for purchase
         * @param {object} product Product config
         * @param {Function} onApprovedListener Callback function with purchase status
         */
        purchase(product, onApprovedListener) {
            return __awaiter(this, void 0, void 0, function* () {
                this.loader = this.loadingCtrl.create({
                    message: 'Completing Transaction'
                });
                this.loader.present();
                // Check For Review Status
                if (!product.appleProductId || !product.googleProductId) {
                    const toast = yield this.toastCtrl.create({
                        message: 'This product has not yet been approved for purchase. Please submit it for review.',
                        duration: 2000
                    });
                    toast.present();
                    this.loader.dismiss();
                    return;
                }
                if (this.platform.is('cordova')) {
                    this.configurePurchasing(product, onApprovedListener);
                    let productId;
                    if (this.platform.is('ios')) {
                        productId = product.appleProductId;
                    }
                    else if (this.platform.is('android')) {
                        productId = product.googleProductId;
                    }
                    try {
                        let product = this.store.get(productId);
                        console.log('Product Info: ' + JSON.stringify(product));
                        this.store.order(productId).then(() => {
                            console.log('Purchase Succesfull');
                            if (this.loader)
                                this.loader.dismiss();
                        });
                    }
                    catch (err) {
                        console.log('Error Ordering ' + JSON.stringify(err));
                        if (this.loader)
                            this.loader.dismiss();
                    }
                }
            });
        } //EOF purchase
        blockAds() {
            this.purchase(this.products.NO_ADS, function () {
                this.AdmobService.disableAds();
                // this.MessageService.showMessage('حذف الإعلانات', 'لقد تمت العملية بنجاح.');
            });
        }
        doPaypalPayment(data) {
            return new Promise((resolve, reject) => {
                this.payPal.init({
                    PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
                    PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
                }).then(() => {
                    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                    // Only needed if you get an "Internal Service Error" after PayPal login!
                    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                    })).then(() => {
                        let payment = new PayPalPayment(data.ammount, data.currency, 'Subscription', 'sale');
                        this.payPal.renderSinglePaymentUI(payment).then((response) => {
                            // Successfully paid
                            resolve(response);
                            // Example sandbox response
                            //
                            // {
                            //   "client": {
                            //     "environment": "sandbox",
                            //     "product_name": "PayPal iOS SDK",
                            //     "paypal_sdk_version": "2.16.0",
                            //     "platform": "iOS"
                            //   },
                            //   "response_type": "payment",
                            //   "response": {
                            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                            //     "state": "approved",
                            //     "create_time": "2016-10-03T13:33:33Z",
                            //     "intent": "sale"
                            //   }
                            // }
                        }, (err) => {
                            this.dataService.showToast('Error in getting payment');
                            reject(err);
                            // Error or render dialog closed without being successful
                        });
                    }, (err) => {
                        reject(err);
                        this.dataService.showToast('Error in configure account');
                        // Error in configuration
                    });
                }, (err) => {
                    reject(err);
                    this.dataService.showToast('Unable to initialize payment process');
                    // Error in initialization, maybe PayPal isn't supported or something else
                });
            });
        }
    };
    SubscriptionService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [PayPal,
            DataService,
            InAppPurchase2,
            Platform,
            LoadingController,
            ToastController,
            AlertController])
    ], SubscriptionService);
    return SubscriptionService;
})();
export { SubscriptionService };
//# sourceMappingURL=subscription.service.js.map
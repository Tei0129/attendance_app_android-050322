(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
    /***/
    "2bN1":
    /*!*********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function bN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "l7ks");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "hxgU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //import { TabsPage } from '../tabs/tabs';


      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(navCtrl, //	public navParams: NavParams,  
        dataProvider, authProvider, //public app: App, 
        translate, alertCtrl, camera, network, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, ForgotPasswordPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.platform = platform;
          this.enterEmai = true;
          this.enterPassword = false;
          this.enterOtp = false;
          this.canEditEmail = true;
          this.canEditOTP = true;
          this.canEditPass = true;
          this.emailError = '';
          this.otpError = '';
          this.passwordError = '';
          this.confirm_passwordError = '';
          this.step = 0;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.enterdEmail = _this.router.getCurrentNavigation().extras.state.course; //   console.log(this.navData);
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(ForgotPasswordPage, [{
          key: "submitEmail",
          value: function submitEmail() {
            var _this2 = this;

            if (!this.email) {
              this.emailError = this.lang.eneter_email;
            } else {
              var data = {
                'email': this.email
              };
              this.dataProvider.showLoading();
              this.dataProvider.submitEmail(data).then(function (res) {
                _this2.dataProvider.hideLoading();

                if (res.session) {
                  _this2.emailError = '';
                  _this2.canEditEmail = false;
                  _this2.enterOtp = true;

                  if (_this2.step == 0) {
                    _this2.step++;
                  }
                } else {
                  _this2.emailError = res.message;
                }

                console.log('seminar class', res);
              })["catch"](function (error) {
                _this2.dataProvider.hideLoading();

                _this2.dataProvider.showToast(error);

                console.log(error);
              });
            }
          }
        }, {
          key: "submitOtp",
          value: function submitOtp() {
            var _this3 = this;

            if (!this.otp) {
              this.otpError = this.lang.eneter_otp;
            } else {
              this.dataProvider.showLoading();
              var data = {
                'email': this.email,
                'otp_no': this.otp
              };
              this.dataProvider.checkOtp(data).then(function (res) {
                _this3.dataProvider.hideLoading();

                if (res.session) {
                  _this3.otpError = '';
                  _this3.canEditOTP = false;
                  _this3.enterPassword = true;
                  _this3.step++;
                  setTimeout(function (res) {
                    var objDiv = document.getElementById("lastDiv");
                    objDiv.scrollTop = objDiv.scrollHeight;
                  }, 100);
                } else {
                  _this3.otpError = res.message;
                }

                console.log('seminar class', res);
              })["catch"](function (error) {
                _this3.dataProvider.hideLoading();

                _this3.dataProvider.showToast(error);

                console.log(error);
              });
            }
          }
        }, {
          key: "submitPassword",
          value: function submitPassword() {
            var _this4 = this;

            if (!this.password) {
              this.passwordError = this.lang.password_empty;
            } else if (!this.confirm_password) {
              this.passwordError = '';
              this.confirm_passwordError = this.lang.confirmP_empty;
            } else if (this.password !== this.confirm_password) {
              this.passwordError = '';
              this.confirm_passwordError = this.lang.pass_not_match;
            } else {
              var data = {
                'email': this.email,
                'password': this.password,
                'c_password': this.confirm_password
              };
              this.dataProvider.showLoading();
              this.dataProvider.resetPassword(data).then(function (res) {
                _this4.dataProvider.hideLoading();

                if (res.session) {
                  _this4.step++;
                  _this4.passwordError = '';
                  _this4.confirm_passwordError = '';

                  _this4.router.navigate(['login']);
                } else {
                  _this4.passwordError = res.message;
                }

                console.log('seminar class', res);
              })["catch"](function (error) {
                _this4.dataProvider.hideLoading();

                _this4.dataProvider.showToast(error);

                console.log(error);
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], ForgotPasswordPage);
      /***/
    },

    /***/
    "JgOp":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function JgOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "RtEn");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "RtEn":
    /*!*******************************************************************!*\
      !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function RtEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "hxgU":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function hxgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-forgot-password:host .common {\n  padding: 25px;\n  text-align: center;\n  background: #ebeef1;\n  min-height: 100%;\n}\napp-forgot-password:host .common .row .outer-div {\n  padding: 20px;\n  width: 100%;\n  background: #fff;\n  border-radius: 11px;\n  margin-bottom: 10px;\n}\napp-forgot-password:host .common .row .outer-div .inner-div {\n  line-height: 35px;\n  font-size: 17px;\n  padding-bottom: 29px;\n}\napp-forgot-password:host .common .row .outer-div .inner-div span {\n  font-weight: bold;\n}\napp-forgot-password:host .common .row .outer-div ion-item {\n  margin-bottom: 24px;\n}\napp-forgot-password:host .error {\n  float: left;\n  margin-top: -10px;\n  margin-bottom: 10px;\n  color: #cf3c4f;\n}\napp-forgot-password:host .checked {\n  position: absolute;\n  right: 51px;\n  font-size: 22px;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxhQUFBO0VBQ0csa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUw7QUFFTTtFQUNLLGFBQUE7RUFDSCxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ1Q7QUFBUztFQUNDLGlCQUFBO0FBRVY7QUFDUTtFQUNLLG1CQUFBO0FBQ2I7QUFJQztFQUNLLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUZOO0FBSUM7RUFDSyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZOIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZm9yZ290LXBhc3N3b3JkOmhvc3R7XHJcblx0LmNvbW1vbntcclxuXHRcdHBhZGRpbmc6IDI1cHg7XHJcblx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgICAgYmFja2dyb3VuZDogI2ViZWVmMTtcclxuXHQgICAgbWluLWhlaWdodDogMTAwJTtcclxuXHQgICAgLnJvd3tcclxuXHQgICAgXHQub3V0ZXItZGl2e1xyXG5cdCAgICBcdFx0ICAgIHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdCAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG5cdFx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0XHRcdCAgICAuaW5uZXItZGl2e1xyXG5cdFx0XHRcdCAgICBcdGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRcdCAgICBwYWRkaW5nLWJvdHRvbTogMjlweDtcclxuXHRcdFx0XHRcdCAgICBzcGFue1xyXG5cdFx0XHRcdFx0ICAgIFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIGlvbi1pdGVte1xyXG5cdFx0XHRcdCAgICBcdCAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cdFx0XHRcdCAgICB9XHJcblx0ICAgIFx0fVxyXG5cdCAgICB9XHJcblx0fVxyXG5cdC5lcnJvcntcclxuXHRcdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdCAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuXHRcdCAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0ICAgIGNvbG9yOiAjY2YzYzRmO1xyXG5cdH1cclxuXHQuY2hlY2tlZHtcclxuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgcmlnaHQ6IDUxcHg7XHJcblx0XHQgICAgZm9udC1zaXplOiAyMnB4O1xyXG5cdFx0ICAgIGNvbG9yOiBncmVlbjtcclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "l7ks":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l7ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>\n\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button>\n  \t\t</ion-menu-button>\n  \t</ion-buttons>\n    <ion-title>{{'forgot_pass.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n\t<div class=\"email common\" *ngIf=\"enterEmai\">\n\t\t<ion-row class=\"row\">\n\t\t\t<div class=\"outer-div\">\n\t\t\t<ion-icon class=\"checked\" *ngIf=\"step>0\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<div class=\"inner-div\">\n\t\t\t\t\t<span>{{'forgot_pass.email_heading' | translate}}</span> <br>\n\t\t\t\t\t{{'forgot_pass.email_mssg' | translate}}\n\t\t\t\t</div>\n\t\t\t\t<ion-item class=\"item\">\n\t\t\t\t\t<ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"{{'forgot_pass.email' | translate}}\" [readonly]=\"!canEditEmail\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<span class=\"error\" *ngIf=\"emailError !=''\">{{emailError}}</span>\n\t\t\t\t<ion-button [disabled]=\"!canEditEmail\" expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"submitEmail()\">{{'forgot_pass.submit' | translate}}</ion-button>\n\t\t\t\t<ion-button *ngIf=\"!canEditEmail\" expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\" (click)=\"submitEmail()\">{{'forgot_pass.resent' | translate}}</ion-button>\n\t\t\t</div>\n\t\t</ion-row>\n\t\t\n\t\t<ion-row class=\"row\" *ngIf=\"enterOtp\">\n\t\t\t<div class=\"outer-div\">\n\t\t\t\t<ion-icon class=\"checked\" *ngIf=\"step>1\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<div class=\"inner-div\">\n\t\t\t\t\t<span>{{'forgot_pass.otp' | translate}}</span><br>\n\t\t\t\t\t{{'forgot_pass.otp_request' | translate}}\n\t\t\t\t</div>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"otp\" placeholder=\"{{'forgot_pass.otp_heading' | translate}}\" [readonly]=\"!canEditOTP\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<span class=\"error\" *ngIf=\"otpError !=''\">{{otpError}}</span>\n\t\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"submitOtp()\" [disabled]=\"!canEditOTP\">{{'forgot_pass.submit' | translate}}</ion-button>\n\t\t\t</div>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"row\" *ngIf=\"enterPassword\">\n\t\t\t<div class=\"outer-div\" id=\"lastDiv\">\n\t\t\t\t<ion-icon class=\"checked\" *ngIf=\"step>2\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t\t<div class=\"inner-div\">\n\t\t\t\t\t<span>{{'forgot_pass.reset_password' | translate}}</span>\n\t\t\t\t</div>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"{{'forgot_pass.eneter_password' | translate}}\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t\t<span class=\"error\" *ngIf=\"passwordError !=''\">{{passwordError}}</span>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"confirm_password\" placeholder=\"{{'forgot_pass.confirn_password' | translate}}\" ></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t\t<span class=\"error\" *ngIf=\"confirm_passwordError !=''\">{{confirm_passwordError}}</span>\n\t\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"submitPassword()\">{{'forgot_pass.submit' | translate}}</ion-button>\n\t\t\t</div>\n\t\t</ion-row>\n\t</div>\n\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map
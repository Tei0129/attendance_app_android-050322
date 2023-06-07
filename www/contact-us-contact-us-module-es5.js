(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"], {
    /***/
    "W4nh":
    /*!*************************************************!*\
      !*** ./src/app/contact-us/contact-us.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function W4nh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-contact-us:host ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\napp-contact-us:host ion-content {\n  --background: #fff !important;\n}\napp-contact-us:host ion-content .background-input {\n  --background: #ddd !important;\n  margin-bottom: 5px !important;\n}\napp-contact-us:host ion-content .background-input ion-input input {\n  text-align: right;\n}\napp-contact-us:host ion-content .submit-btn {\n  margin: 28px auto !important;\n  width: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ1EscUJBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRUk7RUFDSSw2QkFBQTtBQUFSO0FBQ1E7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFDZ0I7RUFDRSxpQkFBQTtBQUNsQjtBQUdRO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtBQURaIiwiZmlsZSI6ImNvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbnRhY3QtdXM6aG9zdCB7XHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmJhY2tncm91bmQtaW5wdXQge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNkZGQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyOHB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "YIa3":
    /*!*********************************************************!*\
      !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ContactUsPageRoutingModule */

    /***/
    function YIa3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function () {
        return ContactUsPageRoutingModule;
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


      var _contact_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-us.page */
      "dir2");

      var routes = [{
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
      }];

      var ContactUsPageRoutingModule = function ContactUsPageRoutingModule() {
        _classCallCheck(this, ContactUsPageRoutingModule);
      };

      ContactUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactUsPageRoutingModule);
      /***/
    },

    /***/
    "dir2":
    /*!***********************************************!*\
      !*** ./src/app/contact-us/contact-us.page.ts ***!
      \***********************************************/

    /*! exports provided: ContactUsPage */

    /***/
    function dir2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsPage", function () {
        return ContactUsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact-us.page.html */
      "nJDO");
      /* harmony import */


      var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-us.page.scss */
      "W4nh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");

      var ContactUsPage = /*#__PURE__*/function () {
        /**
         * Constructor
         * @param dataProvider Use for interacting with the API
         */
        function ContactUsPage(dataProvider) {
          _classCallCheck(this, ContactUsPage);

          this.dataProvider = dataProvider;
          this.user = {};
        }
        /**
         * Send the query to backend
         * @param contactForm form from front end
         */


        _createClass(ContactUsPage, [{
          key: "submitContactusForm",
          value: function submitContactusForm(contactForm) {
            var _this = this;

            this.dataProvider.showLoading();
            this.dataProvider.sendContact(this.user).then(function () {
              _this.dataProvider.hideLoading();

              contactForm.reset();
            })["catch"](function (error) {
              _this.dataProvider.hideLoading();

              _this.dataProvider.errorALertMessage(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactUsPage;
      }();

      ContactUsPage.ctorParameters = function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }];
      };

      ContactUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])], ContactUsPage);
      /***/
    },

    /***/
    "lhKH":
    /*!*************************************************!*\
      !*** ./src/app/contact-us/contact-us.module.ts ***!
      \*************************************************/

    /*! exports provided: ContactUsPageModule */

    /***/
    function lhKH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function () {
        return ContactUsPageModule;
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


      var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact-us-routing.module */
      "YIa3");
      /* harmony import */


      var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact-us.page */
      "dir2");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ContactUsPageModule = function ContactUsPageModule() {
        _classCallCheck(this, ContactUsPageModule);
      };

      ContactUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
      })], ContactUsPageModule);
      /***/
    },

    /***/
    "nJDO":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function nJDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-right>{{'contact.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding mode=\"md\">\n  <ion-list>\n    <form #contactForm='ngForm' (ngSubmit)=\"submitContactusForm(contactForm)\">\n      <ion-item class=\"background-input\">\n        <ion-label floating>{{'contact.inputname' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"username\" maxlength = \"15\" #username='ngModel' [(ngModel)]=\"user.f1\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"username.invalid && (username.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"username.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n        <div *ngIf=\"username.errors.maxlength\">\n          {{'validations.namemaxlength' | translate}}\n        </div>\n      </div>\n      <ion-item class=\"background-input\">\n        <ion-label floating>{{'contact.inputemail' | translate}}</ion-label>\n        <ion-input type=\"email\" name=\"useremail\" [(ngModel)]=\"user.f2\" #useremail='ngModel' required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"useremail.invalid && (useremail.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"useremail.errors.required\">\n            {{'validations.required' | translate}}\n        </div>\n        <div *ngIf=\"useremail.errors.pattern\">\n            {{'validations.invalidemail' | translate}}\n        </div>\n      </div>\n      <ion-item class=\"background-input\">\n        <ion-label floating>{{'contact.inputtitle' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"title\" maxlength=\"30\" #title='ngModel' [(ngModel)]=\"user.f3\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"title.invalid && (title.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"title.errors.required\">\n            {{'validations.required' | translate}}\n        </div>\n        <div *ngIf=\"title.errors.maxlength\">\n          {{'validations.titlemaxlength' | translate}}\n      </div>\n      </div>\n      <ion-item class=\"background-input\">\n        <ion-label floating>{{'contact.inputmessage' | translate}}</ion-label>\n        <ion-textarea rows=\"5\" name=\"message\" [(ngModel)]=\"user.f4\" #message='ngModel' required></ion-textarea>\n      </ion-item>\n      <div *ngIf=\"message.invalid && (message.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"message.errors.required\">\n            {{'validations.required' | translate}}\n        </div>\n      </div>\n        <ion-button expand=\"block\" class=\"btn-primary\" shape=\"undefined\" color=\"primary\" class=\"submit-btn\" name=\"submit\" type=\"submit\" [disabled]=\"contactForm.invalid\">{{'contact.submit' | translate}}</ion-button>\n    </form>\n  </ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=contact-us-contact-us-module-es5.js.map
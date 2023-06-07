(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["available-plan-available-plan-module"], {
    /***/
    "5Ja6":
    /*!*****************************************************************!*\
      !*** ./src/app/available-plan/available-plan-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AvailablePlanPageRoutingModule */

    /***/
    function Ja6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailablePlanPageRoutingModule", function () {
        return AvailablePlanPageRoutingModule;
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


      var _available_plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./available-plan.page */
      "whMZ");

      var routes = [{
        path: '',
        component: _available_plan_page__WEBPACK_IMPORTED_MODULE_3__["AvailablePlanPage"]
      }];

      var AvailablePlanPageRoutingModule = function AvailablePlanPageRoutingModule() {
        _classCallCheck(this, AvailablePlanPageRoutingModule);
      };

      AvailablePlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AvailablePlanPageRoutingModule);
      /***/
    },

    /***/
    "T4NH":
    /*!*********************************************************!*\
      !*** ./src/app/available-plan/available-plan.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function T4NH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  font-weight: bold;\n}\n\n.plan-list {\n  padding: 19px 5px;\n  background: #e3e6e8;\n  height: 100%;\n}\n\n.plan-list .plans {\n  padding: 14px 7px;\n  margin: 5px 0px;\n  background: #43a047;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.plan-list ion-card {\n  margin: 5px 5px 10px 5px;\n  padding: 4px;\n  border-radius: 8px;\n}\n\n.plan-list ion-card .btn-row {\n  margin: 8px 0px;\n  width: 100%;\n  text-align: center;\n}\n\n.plan-list ion-card .btn-row ion-button {\n  --background: green !important;\n  text-transform: capitalize;\n}\n\n.whatPlanAre {\n  padding: 1px 5px;\n  background: #e3e6e8;\n}\n\n.whatPlanAre ion-card {\n  border-radius: 10px;\n}\n\n.whatPlanAre ion-card ion-card-header {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.whatPlanAre ion-card ion-card-content span {\n  font-family: italic;\n  font-size: 17px;\n  color: #4c8dff;\n}\n\n.availablePlan {\n  padding: 19px 5px;\n  background: #eaeaea;\n  color: #fff;\n}\n\n.availablePlan ion-card {\n  margin: 5px 5px 10px 5px;\n  padding: 4px;\n  /*border-radius: 8px;*/\n  color: #fff;\n}\n\n.availablePlan ion-card ion-card-header {\n  /*text-align: center;*/\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: bold;\n}\n\n.availablePlan .bgIcon {\n  position: absolute;\n  bottom: 1vh;\n  left: 1vw;\n}\n\n.availablePlan .bgIcon ion-icon {\n  font-size: 3rem;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F2YWlsYWJsZS1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxpQkFBQTtFQUNHLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUFJO0VBQ0ssaUJBQUE7RUFDTixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUg7O0FBQUk7RUFFQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUFLO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVOOztBQURNO0VBQ0ksOEJBQUE7RUFDSCwwQkFBQTtBQUdQOztBQUVBO0VBQ0MsZ0JBQUE7RUFlRyxtQkFBQTtBQWJKOztBQURDO0VBQ0ssbUJBQUE7QUFHTjs7QUFGTTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUlQOztBQURPO0VBQ0ssbUJBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtBQUdUOztBQUlBO0VBRUMsaUJBQUE7RUFDRyxtQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFHSTtFQU9DLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVBMOztBQUZLO0VBQ0Msc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUlOOztBQUdDO0VBQ00sa0JBQUE7RUFDRyxXQUFBO0VBQ0gsU0FBQTtBQURQOztBQUVPO0VBQ0ssZUFBQTtFQUNILFdBQUE7QUFBVCIsImZpbGUiOiJhdmFpbGFibGUtcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wbGFuLWxpc3R7XHJcblx0cGFkZGluZzogMTlweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNlNmU4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLnBsYW5ze1xyXG4gICAgXHQgICAgcGFkZGluZzogMTRweCA3cHg7XHJcblx0XHRcdG1hcmdpbjogNXB4IDBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzQzYTA0NztcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZHtcclxuXHJcblx0ICAgIG1hcmdpbjogNXB4IDVweCAxMHB4IDVweDtcclxuXHQgICAgcGFkZGluZzogNHB4O1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0ICAgIC5idG4tcm93e1xyXG5cdCAgICBcdG1hcmdpbjogOHB4IDBweDtcclxuXHRcdCAgICB3aWR0aDogMTAwJTtcclxuXHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQgICAgaW9uLWJ1dHRvbntcclxuXHQgICAgXHQgICAgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xyXG5cdFx0ICAgIFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuLndoYXRQbGFuQXJle1xyXG5cdHBhZGRpbmc6IDFweCA1cHg7XHJcblx0aW9uLWNhcmR7XHJcblx0XHQgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdCAgICBpb24tY2FyZC1oZWFkZXJ7XHJcblx0XHQgICAgXHRmb250LXNpemU6IDE1cHg7XHJcbiAgICBcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgaW9uLWNhcmQtY29udGVudHtcclxuXHRcdCAgICBcdHNwYW57XHJcblx0XHQgICAgXHRcdCAgICBmb250LWZhbWlseTogaXRhbGljO1xyXG5cdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRcdCAgICBjb2xvcjogIzRjOGRmZjtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICB9XHJcblx0fVxyXG4gICAgYmFja2dyb3VuZDogI2UzZTZlODtcclxufVxyXG5cclxuLmF2YWlsYWJsZVBsYW57XHJcblxyXG5cdHBhZGRpbmc6IDE5cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICBcdGlvbi1jYXJkLWhlYWRlcntcclxuXHRcdCAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG5cdFx0ICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0ICAgIGNvbG9yOiAjZmZmO1xyXG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHR9XHJcblx0ICAgIG1hcmdpbjogNXB4IDVweCAxMHB4IDVweDtcclxuXHQgICAgcGFkZGluZzogNHB4O1xyXG5cdCAgICAvKmJvcmRlci1yYWRpdXM6IDhweDsqL1xyXG4gICAgXHRjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHQuYmdJY29ue1xyXG5cdFx0ICAgIFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ICAgICAgICBib3R0b206IDF2aDtcclxuICAgIFx0XHRcdGxlZnQ6IDF2dztcclxuXHRcdCAgICBcdGlvbi1pY29ue1xyXG5cdFx0ICAgIFx0XHQgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "syir":
    /*!*********************************************************!*\
      !*** ./src/app/available-plan/available-plan.module.ts ***!
      \*********************************************************/

    /*! exports provided: AvailablePlanPageModule */

    /***/
    function syir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailablePlanPageModule", function () {
        return AvailablePlanPageModule;
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


      var _available_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./available-plan-routing.module */
      "5Ja6");
      /* harmony import */


      var _available_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./available-plan.page */
      "whMZ");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var AvailablePlanPageModule = function AvailablePlanPageModule() {
        _classCallCheck(this, AvailablePlanPageModule);
      };

      AvailablePlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _available_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvailablePlanPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_available_plan_page__WEBPACK_IMPORTED_MODULE_6__["AvailablePlanPage"]]
      })], AvailablePlanPageModule);
      /***/
    },

    /***/
    "tJWH":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/available-plan/available-plan.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function tJWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n   \t<ion-buttons slot=\"end\">\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-title>{{'plan.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"availablePlan\">\n\t\t<ion-card *ngIf=\"availablePlan.ammount\" [ngStyle]=\"{'background-color': availablePlan.cardColor}\">\n\t\t\t<ion-card-header>\n\t\t\t\t<div class=\"cardTitle\">\n\t\t\t\t\t{{'plan.currentPlan' | translate}}\n\t\t\t\t</div>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.name' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" *ngIf=\"availablePlan.ammount<2\">{{'plan.monthly_subscription' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" *ngIf=\"availablePlan.ammount>2\">{{'plan.yearly_subscription' | translate}}</ion-col>\n\t\t\t\t</ion-row> \n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.ammount' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">{{availablePlan.ammount}}</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.duration' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">{{availablePlan.duration}}</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.startFrom' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">{{availablePlan.Reg_date}}</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.endOn' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">{{availablePlan.exp_date}}</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.status' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" *ngIf=\"!availablePlan.isExpire\">{{ 'plan.available' | translate}}</ion-col>\n\t\t\t\t\t<ion-col size=\"6\" *ngIf=\"availablePlan.isExpire\">{{ 'plan.expired' | translate}}</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-card-content>\n\n\t\t\t<div class=\"bgIcon\" >\n\t\t\t\t<ion-icon *ngIf=\"availablePlan.isExpire\" name=\"warning-outline\"></ion-icon>\n\t\t\t\t<ion-icon *ngIf=\"!availablePlan.isExpire\" name=\"checkmark-circle-outline\"></ion-icon>\n\t\t\t</div>\n\t\t</ion-card>\n\n\t\t\n\n\t\t<ion-card *ngIf=\"!availablePlan.ammount\" [ngStyle]=\"{'background-color': 'rgb(249 169 5)'}\">\n\n\t\t\t<ion-card-header>\n\t\t\t\t{{'plan.noPlan' | translate}}\n\t\t\t</ion-card-header>\n\n\t\t\t<div class=\"bgIcon\" >\n\t\t\t\t<ion-icon style=\"font-size: 3rem;\"  name=\"warning-outline\"></ion-icon>\n\t\t\t</div>\n\t\t</ion-card>\n\n\n\t</div>\n\n\t<div class=\"whatPlanAre\">\n\t\t<ion-card>\n\t\t\t<ion-card-header>\n\t\t\t\t{{'plan.what_are_plan'| translate}}\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t\t{{'plan.what_are_plan_decription1'| translate}} <br>\n\t\t\t\t{{'plan.what_are_plan_decription2'| translate}} \n\t\t\t\t{{'plan.what_are_plan_decription3'| translate}} \n\t\t\t\t<span (click)=\"openPdf()\">{{'plan.what_are_plan_link'| translate}}</span> <br>\n\t\t\t\t{{'plan.what_are_plan_decription4'| translate}} <br>\n\t\t\t</ion-card-content>\n\t\t\t<!-- <ion-card-content>\n\t\t\t\t{{'plan.what_are_plan_decription'| translate}} \n\t\t\t\t<span (click)=\"openPdf()\">{{'plan.what_are_plan_link'| translate}}</span>\n\t\t\t</ion-card-content>\n -->\t\t</ion-card>\n\t</div>\n\n\t<div class=\"plan-list\" >\n\t\t<div class=\"plans\">\n\t\t\t{{'plan.availablePlan' | translate}}\n\t\t</div>\n\t\t<ion-card >\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.name' | translate}}</ion-col>\n\t\t\t\t<ion-col size=\"6\">{{'plan.monthly_subscription' | translate}}</ion-col>\n\t\t\t</ion-row> \n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.ammount' | translate}}</ion-col>\n\t\t\t\t<ion-col size=\"6\">${{monthly_plan_ammount}}</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.duration' | translate}}</ion-col>\n\t\t\t\t<ion-col size=\"6\"> {{'plan.monthly' | translate}}</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"btn-row\">\n\t\t\t\t<ion-button [disabled]=\"(!availablePlan.ammount || availablePlan.isExpire)? false:true\" shape=\"round\" expand=\"block\"  (click)=\"subscribe(0)\">{{'plan.subscribe' | translate}}</ion-button>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t\t<ion-card >\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.name' | translate}}</ion-col>\n\t\t\t\t<ion-col size=\"6\">{{'plan.yearly_subscription' | translate}}</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.ammount' | translate}}</ion-col>\n\t\t\t\t<ion-col size=\"6\">${{yearly_plan_ammount}}</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" class=\"title\">{{'plan.duration' | translate}}</ion-col>\n\t\t\t\t<ion-col size=\"6\"> {{'plan.yearly' | translate}}</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"btn-row\">\n\t\t\t\t<ion-button [disabled]=\"(!availablePlan.ammount || availablePlan.isExpire)? false:true\" shape=\"round\" expand=\"block\"  (click)=\"subscribe(1)\">{{'plan.subscribe' | translate}}</ion-button>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "whMZ":
    /*!*******************************************************!*\
      !*** ./src/app/available-plan/available-plan.page.ts ***!
      \*******************************************************/

    /*! exports provided: AvailablePlanPage */

    /***/
    function whMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailablePlanPage", function () {
        return AvailablePlanPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_available_plan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./available-plan.page.html */
      "tJWH");
      /* harmony import */


      var _available_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./available-plan.page.scss */
      "T4NH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/subscription/subscription.service */
      "iISc");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AvailablePlanPage = /*#__PURE__*/function () {
        function AvailablePlanPage(navCtrl, translate, dataProvider, camera, route, router, alertCtrl, subscriptionService, location) {
          var _this = this;

          _classCallCheck(this, AvailablePlanPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.camera = camera;
          this.route = route;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.subscriptionService = subscriptionService;
          this.location = location;
          this.plans = [];
          this.availablePlan = {// name: 'Someplan',
            // ammount:'36$',
            // duration:'30 days',
            // startFrom:'1-5-2023',
            // endOn:'7-8-9888',
            // isExpire:true,
            // cardColor:'rgb(249 169 5)' //rgb(249 169 5)  ,#43a047
          };
          this.monthly_plan_ammount = 1.99;
          this.yearly_plan_ammount = 19.99;
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.getPlan();
        }

        _createClass(AvailablePlanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              console.log(this.userDetails.details.user_type);

              if (this.userDetails.details.user_type === '1') {
                this.monthly_plan_ammount = 7.99;
                this.yearly_plan_ammount = 59.99;
              }

              this.getUserPlan();
            }
          }
        }, {
          key: "getPlan",
          value: function getPlan() {
            var _this2 = this;

            var data = {
              userId: ''
            };
            this.dataProvider.getPlan(data).then(function (res) {
              _this2.plans = res;
              console.log(res);
            })["catch"](function (e) {
              console.log(e);
              _this2.plans = e.plans;
            });
          }
        }, {
          key: "getUserPlan",
          value: function getUserPlan() {
            var _this3 = this;

            var data = {
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getUserPlan(data).then(function (res) {
              _this3.dataProvider.hideLoading();

              console.log('plan', res);

              if (res && res.response) {
                _this3.availablePlan = res.response;

                if (res.response.isExpire) {
                  _this3.availablePlan.cardColor = 'rgb(249 169 5)';
                } else {
                  _this3.availablePlan.cardColor = '#43a047';
                }
              } else {
                _this3.availablePlan = {};
              }
            })["catch"](function (e) {
              _this3.dataProvider.hideLoading();

              console.log(e);
              _this3.plans = e.plans;
            });
          }
        }, {
          key: "subscribe",
          value: function subscribe(p) {
            var _this4 = this;

            if (this.userDetails.details.user_type === '1') {
              p = p === 0 ? 2 : 3;
            }

            this.subscriptionService.paymentStatus(p, function (res) {
              _this4.subscriptionService.checkout(p);
            }); //   this.subscriptionService.paymentStatus();
            // this.subscriptionService.checkout(p);
          }
        }, {
          key: "openPdf",
          value: function openPdf() {
            window.open('https://webapp.ws/Att-App/cpanel/uploads/stu_pdf/for_example.pdf', '_system');
          }
        }]);

        return AvailablePlanPage;
      }();

      AvailablePlanPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      AvailablePlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-available-plan',
        template: _raw_loader_available_plan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_available_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], AvailablePlanPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=available-plan-available-plan-module-es5.js.map
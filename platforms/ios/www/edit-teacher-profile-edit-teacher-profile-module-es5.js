(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-teacher-profile-edit-teacher-profile-module"], {
    /***/
    "GKPG":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-teacher-profile/edit-teacher-profile.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GKPG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button>\n  \t\t</ion-menu-button>\n  \t</ion-buttons>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'teacher_profile.title'| translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<ion-list lines=\"none\" class=\"list\">\n\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'teacher_profile.email'| translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"teacher.email\" placeholder=\"{{'teacher_profile.email'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'teacher_profile.name'| translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"teacher.name\" placeholder=\"{{'teacher_profile.name'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'teacher_profile.user_id'| translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"teacher.user_id\" placeholder=\"{{'teacher_profile.user_id'| translate}}\" readonly=\"true\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'teacher_profile.password'| translate}}</ion-label>\n\t\t\t<ion-input type=\"password\" [(ngModel)]=\"teacher.password\" placeholder=\"{{'teacher_profile.password'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'teacher_profile.c_pass'| translate}}</ion-label>\n\t\t\t<ion-input type=\"password\" [(ngModel)]=\"teacher.c_pass\" placeholder=\"{{'teacher_profile.c_pass'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t</ion-list>\n\t<div class=\"radio-div\">\n\t\t<ion-radio-group [(ngModel)]=\"teacher.user_type\" [value]=\"teacher.user_type\">\n\t\t\t\t<h3 class=\"radio-head\">{{'teacher_profile.user_type'| translate}}</h3>\n\t\t\t<ion-row class=\"user_type\">\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"2\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Teacher'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"3\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Moderator'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"1\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Admin'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"4\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Parent'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"5\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Register'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"6\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Medical'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"7\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'teacher_profile.Viewer'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-radio-group>\n\t</div>\n\n\t<ion-row class=\"time-row\">\n\t\t<ion-item>\n\t\t\t<ion-toggle color=\"primary\" slot=\"end\" (ionChange)=\"check()\" [(ngModel)]=\"teacher.attendence_permit\"></ion-toggle>\n\t\t\t<h3>{{'teacher_profile.edit_permission'| translate}}</h3>\n\t\t</ion-item>\n\t\t<ion-item class=\"input-item\">\n\t\t\t<div>\n\t\t\t\t<ion-input [(ngModel)]=\"teacher.time\" type=\"number\" placeholder=\"{{'teacher_profile.time'|translate}}\" ></ion-input>\n\t\t\t\t<span>{{'teacher_profile.note'| translate}}: {{'teacher_profile.input_time_type'| translate}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</ion-item>\n\t      <ion-item>\n\t        <ion-label>{{'teacher_profile.class'| translate}}</ion-label>\n\t        <ionic-selectable style=\"height: 6vh; margin-top: -2px;overflow: hidden;\" \n\t          [(ngModel)]=\"teacher.class\"\n\t          [isMultiple]=\"true\"\n\t          [items]=\"classes\"\n\t          itemValueField=\"cid\"\n\t          itemTextField=\"name\"\n\t          (onChange)=\"portChange($event)\"\n\t          [canSearch]=\"true\">\n\t        </ionic-selectable>\n\t      </ion-item>\n\t\t<!-- <ion-item class=\"input-item\">\n\t\t\t\t<ion-label>{{'teacher_profile.class'| translate}}</ion-label>\n\t\t\t\t<ion-select multiple=\"true\"  [(ngModel)]=\"teacher.class\" id=\"select\">\n\t\t\t\t\t<ion-select-option *ngFor=\"let c of classes\" value={{c.cid}}>{{c.name}}</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t\t<ion-input [(ngModel)]=\"teacher.class\" type=\"number\" placeholder=\"{{'teacher_profile.class'|translate}}\" ></ion-input>\n\t\t\t\t<span>{{'teacher_profile.note'| translate}}: {{'teacher_profile.input_time_type'| translate}}\n\t\t\t\t</span>\n\t\t</ion-item> -->\n\t</ion-row>\n\n\t<ion-list class=\"option-list\">\n\t  <ion-radio-group [value]=\"teacher.teacher_type\" [(ngModel)]=\"teacher.teacher_type\">\n\t    <ion-list-header>\n\t      <h3>{{'teacher_profile.teacher_type'| translate}}</h3>\n\t    </ion-list-header>\n\t    <ion-row>\n\t    \t<ion-col size=\"6\">\n\t\t\t    <ion-item>\n\t\t\t      <ion-label>{{'teacher_profile.regular'| translate}}</ion-label>\n\t\t\t      <ion-radio slot=\"start\" value=\"regular\"></ion-radio>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    \t<ion-col size=\"6\">\n\t\t\t    <ion-item>\n\t\t\t      <ion-label>{{'teacher_profile.split'| translate}}</ion-label>\n\t\t\t      <ion-radio slot=\"start\" value=\"split\"></ion-radio>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    </ion-row>\t\n\t  </ion-radio-group>\n\t</ion-list>\n\t<ion-list >\n\t  <ion-radio-group [value]=\"teacher.action\" [(ngModel)]=\"teacher.action\">\n\t    <ion-list-header>\n\t      <h3>{{'teacher_profile.action'| translate}}</h3>\n\t    </ion-list-header>\n\t    <ion-row>\n\t    \t<ion-col size=\"6\">\n\t\t\t    <ion-item>\n\t\t\t      <ion-label>{{'teacher_profile.inactive'| translate}}</ion-label>\n\t\t\t      <ion-radio slot=\"start\" value=\"inactive\"></ion-radio>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    \t<ion-col size=\"6\">\n\t\t\t    <ion-item>\n\t\t\t      <ion-label>{{'teacher_profile.active'| translate}}</ion-label>\n\t\t\t      <ion-radio slot=\"start\" value=\"active\"></ion-radio>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    </ion-row>\n\t  </ion-radio-group>\n\t</ion-list>\n</ion-content>\n<ion-footer style=\"background: #fff;\">\n\t<ion-button style=\"width: 99%;\"  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"saveTeacherProfile()\">{{'teacher_profile.save' | translate}}</ion-button>\n\n\t<ion-button style=\"width: 99%;\"   expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"danger\" (click)=\"deleteTeacher()\">{{'teacher_profile.delete' | translate}}</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "XaMJ":
    /*!*****************************************************************************!*\
      !*** ./src/app/edit-teacher-profile/edit-teacher-profile-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: EditTeacherProfilePageRoutingModule */

    /***/
    function XaMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTeacherProfilePageRoutingModule", function () {
        return EditTeacherProfilePageRoutingModule;
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


      var _edit_teacher_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-teacher-profile.page */
      "db0h");

      var routes = [{
        path: '',
        component: _edit_teacher_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditTeacherProfilePage"]
      }];

      var EditTeacherProfilePageRoutingModule = function EditTeacherProfilePageRoutingModule() {
        _classCallCheck(this, EditTeacherProfilePageRoutingModule);
      };

      EditTeacherProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditTeacherProfilePageRoutingModule);
      /***/
    },

    /***/
    "YTos":
    /*!*********************************************************************!*\
      !*** ./src/app/edit-teacher-profile/edit-teacher-profile.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function YTos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  margin: 5px;\n}\n.list .item {\n  --background: #e0e0e0;\n  --min-height: 47px;\n  margin: 5px;\n}\n.radio-div {\n  border: 1px solid darkgrey;\n  margin: 10px;\n}\n.radio-div .radio-head {\n  margin: 10px;\n  padding: 2px;\n  border-bottom: 1px solid darkgrey;\n}\n.radio-div ion-col {\n  border-right: 1px solid darkgrey;\n}\n.radio-div ion-col div {\n  float: left;\n}\n.time-row {\n  margin: 14px;\n  border: 1px solid gray;\n}\n.time-row ion-item {\n  width: 100%;\n}\n.time-row .input-item {\n  --min-height: 75px;\n}\n.time-row .input-item ion-input {\n  border: 1px solid black;\n  --padding-start: 5px;\n  width: 167px;\n  height: 33px;\n  border-radius: 6px;\n}\n.time-row .input-item span {\n  font-size: 11px;\n  color: red;\n}\nion-button {\n  text-transform: capitalize;\n}\nh3 {\n  font-size: 18px;\n}\n.option-list ion-list-header p {\n  margin: 0px 8px 0px 0px;\n}\n.option-list ion-col {\n  margin: unset;\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtdGVhY2hlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7QUFDRDtBQUFDO0VBQ0MscUJBQUE7RUFDTyxrQkFBQTtFQUNKLFdBQUE7QUFFTDtBQUNBO0VBQ0MsMEJBQUE7RUFDRyxZQUFBO0FBRUo7QUFEQztFQUNLLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFHTjtBQURDO0VBQ0ssZ0NBQUE7QUFHTjtBQUFNO0VBQ1MsV0FBQTtBQUVmO0FBR0E7RUFDSyxZQUFBO0VBQ0Qsc0JBQUE7QUFBSjtBQUNJO0VBQ0MsV0FBQTtBQUNMO0FBQ0k7RUFDSyxrQkFBQTtBQUNUO0FBQVM7RUFDQyx1QkFBQTtFQUNILG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDSSxrQkFBQTtBQUVYO0FBQVM7RUFDQyxlQUFBO0VBQ0gsVUFBQTtBQUVQO0FBRUE7RUFDSywwQkFBQTtBQUNMO0FBRUE7RUFDQyxlQUFBO0FBQ0Q7QUFHRTtFQUNDLHVCQUFBO0FBQUg7QUFHQTtFQUNLLGFBQUE7RUFDRCxjQUFBO0FBREoiLCJmaWxlIjoiZWRpdC10ZWFjaGVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3R7XHJcblx0bWFyZ2luOjVweDtcclxuXHQuaXRlbXtcclxuXHRcdC0tYmFja2dyb3VuZDogI2UwZTBlMDtcclxuXHQgICAgICAgIC0tbWluLWhlaWdodDogNDdweDtcclxuXHQgICAgbWFyZ2luOiA1cHg7XHJcblx0fVxyXG59XHJcbi5yYWRpby1kaXZ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblx0LnJhZGlvLWhlYWR7XHJcblx0XHQgICAgbWFyZ2luOiAxMHB4O1xyXG5cdFx0ICAgIHBhZGRpbmc6IDJweDtcclxuXHRcdCAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyZXk7XHJcblx0fVxyXG5cdGlvbi1jb2x7XHJcblx0XHQgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2dyZXk7XHJcblx0XHQgICAgLy8gcGFkZGluZzogdW5zZXQ7XHJcblx0XHQgICAgLy8gbWFyZ2luOiB1bnNldDtcclxuXHRcdCAgICBkaXZ7XHJcblx0XHQgICAgXHQgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHRcdFx0XHRcdC8vcGFkZGluZzogNHB4IDBweCAxMHB4IDY1cHg7XHJcblx0XHQgICAgfVxyXG5cdH1cclxufVxyXG4udGltZS1yb3d7XHJcblx0ICAgIG1hcmdpbjogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBpb24taXRlbXtcclxuICAgIFx0d2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtaXRlbXtcclxuICAgIFx0ICAgIC0tbWluLWhlaWdodDogNzVweDtcclxuICAgIFx0ICAgIGlvbi1pbnB1dHtcclxuICAgIFx0ICAgIFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRcdCAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuXHRcdFx0ICAgIHdpZHRoOiAxNjdweDtcclxuXHRcdFx0ICAgIGhlaWdodDogMzNweDtcclxuXHRcdFx0ICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBcdCAgICB9XHJcbiAgICBcdCAgICBzcGFue1xyXG4gICAgXHQgICAgXHRmb250LXNpemU6IDExcHg7XHJcbiAgICBcdFx0XHRjb2xvcjogcmVkO1xyXG4gICAgXHQgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1idXR0b257XHJcblx0ICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxufVxyXG5oM3tcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm9wdGlvbi1saXN0e1xyXG5cdGlvbi1saXN0LWhlYWRlcntcclxuXHRcdHB7XHJcblx0XHRcdG1hcmdpbjogMHB4IDhweCAwcHggMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuaW9uLWNvbHtcclxuXHQgICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHBhZGRpbmc6IHVuc2V0O1xyXG59XHRcclxufSJdfQ== */";
      /***/
    },

    /***/
    "a/Pt":
    /*!*********************************************************************!*\
      !*** ./src/app/edit-teacher-profile/edit-teacher-profile.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EditTeacherProfilePageModule */

    /***/
    function aPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTeacherProfilePageModule", function () {
        return EditTeacherProfilePageModule;
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


      var _edit_teacher_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-teacher-profile-routing.module */
      "XaMJ");
      /* harmony import */


      var _edit_teacher_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-teacher-profile.page */
      "db0h");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var EditTeacherProfilePageModule = function EditTeacherProfilePageModule() {
        _classCallCheck(this, EditTeacherProfilePageModule);
      };

      EditTeacherProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_teacher_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditTeacherProfilePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_edit_teacher_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditTeacherProfilePage"]]
      })], EditTeacherProfilePageModule);
      /***/
    },

    /***/
    "db0h":
    /*!*******************************************************************!*\
      !*** ./src/app/edit-teacher-profile/edit-teacher-profile.page.ts ***!
      \*******************************************************************/

    /*! exports provided: EditTeacherProfilePage */

    /***/
    function db0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTeacherProfilePage", function () {
        return EditTeacherProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_teacher_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-teacher-profile.page.html */
      "GKPG");
      /* harmony import */


      var _edit_teacher_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-teacher-profile.page.scss */
      "YTos");
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


      var EditTeacherProfilePage = /*#__PURE__*/function () {
        function EditTeacherProfilePage(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, EditTeacherProfilePage);

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
          this.teacher = {};
          this.classes = [];
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state.teacher;
              console.log(_this.navData);
              _this.teacher.email = _this.navData.email_id;
              _this.teacher.name = _this.navData.first_name;
              _this.teacher.user_id = _this.navData.username;
              _this.teacher.user_type = _this.navData.user_type;
              _this.teacher["class"] = _this.navData.in_class;
              _this.teacher.teacher_type = _this.navData.assigned_as;

              if (_this.navData.TeacherAttenEditPower !== '0') {
                _this.teacher.attendence_permit = true;
              }

              _this.teacher.time = _this.navData.editTimeForTeacher;
              _this.teacher.action = 'active';
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(EditTeacherProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getClasses();
            }
          }
        }, {
          key: "check",
          value: function check() {
            console.log(this.teacher.attendence_permit);
          }
        }, {
          key: "saveTeacherProfile",
          value: function saveTeacherProfile() {
            var _this2 = this;

            if (this.teacher.password !== this.teacher.c_pass) {
              this.dataProvider.showToast(this.lang.pass_not_match);
            } else {
              this.teacher.user_no = this.navData.user_no;
              this.teacher.school_id = this.navData.school_id;
              this.teacher.updatedBy = this.userDetails.details.user_no;
              console.log('teacher', this.teacher);

              if (this.teacher.attendence_permit == true) {
                this.teacher.attendence_permit = 1;
              } else {
                this.teacher.attendence_permit = 0;
              }

              this.dataProvider.updateTeacherProfile(this.teacher, function (res) {
                var navigation = {
                  state: {
                    isUpdated: true
                  }
                };
                console.log(navigation);

                _this2.zone.run(function () {
                  _this2.router.navigate(['manage-teacher'], navigation);
                });
              });
            }
          }
        }, {
          key: "deleteTeacher",
          value: function deleteTeacher() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.delete_teacher,
                        backdropDismiss: true,
                        mode: 'ios',
                        buttons: [{
                          text: this.lang["delete"],
                          handler: function handler() {
                            var deleteData = {
                              teacher_user_no: _this3.navData.user_no,
                              user_no: _this3.userDetails.details.user_no,
                              school_id: _this3.userDetails.details.school_id,
                              session_id: _this3.userDetails.session_id
                            };

                            _this3.dataProvider.deleteTeacher(deleteData, function (res) {
                              // callback(res);
                              var navigation = {
                                state: {
                                  isUpdated: true
                                }
                              };

                              _this3.zone.run(function () {
                                _this3.router.navigate(['manage-teacher'], navigation);
                              });

                              console.log(res);
                            });
                          }
                        }, {
                          text: this.lang.alert_btn_cancel_text,
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this4 = this;

            var data = {
              "user_no": this.userDetails.details.user_no,
              "school_id": this.userDetails.details.school_id,
              "session_id": this.userDetails.session_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getCourses(data).then(function (response) {
              _this4.dataProvider.hideLoading();

              if (response.session) {
                _this4.classes = response.data;
              }
            })["catch"](function (error) {
              _this4.dataProvider.hideLoading();

              _this4.dataProvider.errorALertMessage(error);
            });
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            console.log(event);
            this.teacher["class"] = event.value;
          }
        }]);

        return EditTeacherProfilePage;
      }();

      EditTeacherProfilePage.ctorParameters = function () {
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

      EditTeacherProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-teacher-profile',
        template: _raw_loader_edit_teacher_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_teacher_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], EditTeacherProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-teacher-profile-edit-teacher-profile-module-es5.js.map
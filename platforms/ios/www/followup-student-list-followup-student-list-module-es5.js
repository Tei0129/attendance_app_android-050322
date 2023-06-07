(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followup-student-list-followup-student-list-module"], {
    /***/
    "CXad":
    /*!***********************************************************************!*\
      !*** ./src/app/followup-student-list/followup-student-list.module.ts ***!
      \***********************************************************************/

    /*! exports provided: FollowupStudentListPageModule */

    /***/
    function CXad(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowupStudentListPageModule", function () {
        return FollowupStudentListPageModule;
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


      var _followup_student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./followup-student-list-routing.module */
      "KXZA");
      /* harmony import */


      var _followup_student_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./followup-student-list.page */
      "uI6l");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var FollowupStudentListPageModule = function FollowupStudentListPageModule() {
        _classCallCheck(this, FollowupStudentListPageModule);
      };

      FollowupStudentListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _followup_student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowupStudentListPageRoutingModule"]],
        declarations: [_followup_student_list_page__WEBPACK_IMPORTED_MODULE_6__["FollowupStudentListPage"]]
      })], FollowupStudentListPageModule);
      /***/
    },

    /***/
    "KXZA":
    /*!*******************************************************************************!*\
      !*** ./src/app/followup-student-list/followup-student-list-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: FollowupStudentListPageRoutingModule */

    /***/
    function KXZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowupStudentListPageRoutingModule", function () {
        return FollowupStudentListPageRoutingModule;
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


      var _followup_student_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./followup-student-list.page */
      "uI6l");

      var routes = [{
        path: '',
        component: _followup_student_list_page__WEBPACK_IMPORTED_MODULE_3__["FollowupStudentListPage"]
      }];

      var FollowupStudentListPageRoutingModule = function FollowupStudentListPageRoutingModule() {
        _classCallCheck(this, FollowupStudentListPageRoutingModule);
      };

      FollowupStudentListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FollowupStudentListPageRoutingModule);
      /***/
    },

    /***/
    "sW5n":
    /*!***********************************************************************!*\
      !*** ./src/app/followup-student-list/followup-student-list.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function sW5n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-followup-student-list:host .item-img {\n  --padding-start: unset;\n  --padding-end: unset;\n  --inner-padding-end: unset;\n  --inner-padding-start: unset;\n}\napp-followup-student-list:host ion-header ion-list {\n  background: #fff;\n}\napp-followup-student-list:host .item-inner {\n  border-bottom: none !important;\n}\napp-followup-student-list:host .margin {\n  width: 92%;\n  margin: 13px;\n}\napp-followup-student-list:host .checkbox-container {\n  width: 100%;\n  display: flex;\n}\napp-followup-student-list:host .checkbox-container .checkbox-icon {\n  width: 14%;\n  height: auto;\n}\napp-followup-student-list:host .title {\n  font-weight: 600;\n  color: #000;\n  padding-top: 1vh;\n  font-size: 15px;\n}\napp-followup-student-list:host .sem-number-outer {\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\napp-followup-student-list:host .att-not-marked {\n  background: #ececec;\n  color: #000;\n}\napp-followup-student-list:host .att-marked {\n  background: #32db64;\n  color: #fff;\n}\napp-followup-student-list:host .top-col {\n  text-align: center;\n}\napp-followup-student-list:host .top-col p {\n  margin: unset;\n}\napp-followup-student-list:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 27px;\n}\napp-followup-student-list:host .student-behaviour {\n  margin: 0;\n  font-size: 10px;\n  color: #7d7d7d;\n  padding-top: 5px;\n}\napp-followup-student-list:host .student-card {\n  background: #fff;\n  box-shadow: 1px 1px 6px #ececec;\n  border-radius: 2px;\n  margin-bottom: 10px;\n}\napp-followup-student-list:host .student-card h4 {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  font-weight: 600;\n  padding-top: 7px;\n}\napp-followup-student-list:host .student-card h4 .serial-number {\n  font-weight: normal;\n}\napp-followup-student-list:host .checkbox-all {\n  margin: 0px 0;\n}\napp-followup-student-list:host .checkbox-area {\n  margin: 5px 0;\n}\napp-followup-student-list:host .checkbox-area .checkbox-remove {\n  border: 1px solid grey;\n  height: 24px;\n  width: 24px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*ion-icon{\n      font-size: 23px;\n      font-weight: 800;\n      padding-right: 7px;\n      padding-top: 0;\n  }*/\n}\napp-followup-student-list:host .checkbox-area .checkbox-remove .att-icon:before {\n  font-size: 22px;\n}\napp-followup-student-list:host .checkbox-area .present {\n  background: #32db64;\n}\napp-followup-student-list:host .checkbox-area .absent {\n  background: #f53d3d;\n}\napp-followup-student-list:host .checkbox-area .delay {\n  background: #ffa500;\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) and (orientation: portrait) {\n  app-followup-student-list:host .title, app-followup-student-list:host h4 {\n    font-size: 0.7rem;\n  }\n  app-followup-student-list:host ion-list {\n    padding: 5px !important;\n  }\n  app-followup-student-list:host .add-circle {\n    margin-right: 0px !important;\n    font-size: 24px !important;\n  }\n  app-followup-student-list:host ion-header ion-icon {\n    min-width: 18px !important;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 380px) and (orientation: portrait) {\n  app-followup-student-list:host .add-circle {\n    margin-right: 0px !important;\n    font-size: 24px !important;\n  }\n  app-followup-student-list:host ion-header ion-icon {\n    min-width: 18px !important;\n  }\n}\n.all-check {\n  border-radius: 20%;\n}\n.marks-row {\n  text-align: center;\n}\n.marks-row .marks-col p {\n  margin: 0px 0px 5px 0px;\n  font-size: 0.6rem;\n  font-weight: bold;\n  color: #3a3a3a;\n}\n.marks-row .marks-col ion-input {\n  border: 1px solid #00000061;\n  border-radius: 5px;\n}\n.add-note {\n  float: left;\n  fill: dimgrey;\n  font-size: 27px;\n}\n.rating-star {\n  font-size: 1.5rem;\n}\n.max_length {\n  text-align: left;\n  padding-left: 16px;\n  color: #ababab;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvbGxvd3VwLXN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDWSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUFoQjtBQUdRO0VBQ0ksZ0JBQUE7QUFEWjtBQUlJO0VBQ0ksOEJBQUE7QUFGUjtBQUlJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFGUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFGUjtBQUdRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFEWjtBQUlJO0VBRUksZ0JBQUE7RUFDQSxXQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBSFo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFIUjtBQUtJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBSFI7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS0k7RUFDSSxrQkFBQTtBQUhSO0FBSVE7RUFDSSxhQUFBO0FBRlo7QUFLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFIUjtBQUtJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUlRO0VBQ1EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRmhCO0FBR1k7RUFDSSxtQkFBQTtBQURoQjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBS0k7RUFDSSxhQUFBO0FBSFI7QUFJUTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQTs7Ozs7SUFBQTtBQUVaO0FBSVk7RUFDSSxlQUFBO0FBRmhCO0FBS1E7RUFDSSxtQkFBQTtBQUhaO0FBS1E7RUFDSSxtQkFBQTtBQUhaO0FBS1E7RUFDSSxtQkFBQTtBQUhaO0FBT0k7RUFDSTtJQUNJLGlCQUFBO0VBTFY7RUFPTTtJQUNJLHVCQUFBO0VBTFY7RUFPTTtJQUNJLDRCQUFBO0lBQ0EsMEJBQUE7RUFMVjtFQU9NO0lBQ0ksMEJBQUE7RUFMVjtBQUNGO0FBUUk7RUFFSTtJQUNJLDRCQUFBO0lBQ0EsMEJBQUE7RUFQVjtFQVNNO0lBQ0ksMEJBQUE7RUFQVjtBQUNGO0FBVUE7RUFDSSxrQkFBQTtBQVBKO0FBU0E7RUFDSSxrQkFBQTtBQU5KO0FBUVE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTlo7QUFTUTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBVEo7QUFZQTtFQUNJLGlCQUFBO0FBVEo7QUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSSiIsImZpbGUiOiJmb2xsb3d1cC1zdHVkZW50LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWZvbGxvd3VwLXN0dWRlbnQtbGlzdDpob3N0IHtcclxuICAgIC5pdGVtLWltZ3tcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiB1bnNldDtcclxuICAgIH1cclxuICAgIGlvbi1oZWFkZXJ7XHJcbiAgICAgICAgaW9uLWxpc3R7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXJnaW57XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICBtYXJnaW46IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5jaGVja2JveC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgLy8gICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5zZW0tbnVtYmVyLW91dGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDIzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5hdHQtbm90LW1hcmtlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNlY2VjZWM7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAuYXR0LW1hcmtlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzJkYjY0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnRvcC1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjp1bnNldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkLWNpcmNsZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtYmVoYXZpb3VyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4ICNlY2VjZWM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAuc2VyaWFsLW51bWJlcntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtYWxse1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtYXJlYXtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIC5jaGVja2JveC1yZW1vdmV7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6Y29sb3IoJGNvbG9ycywgcmVtb3ZlLWFwcCwgYmFzZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAvKmlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgLmF0dC1pY29uOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJlc2VudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMyZGI2NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFic2VudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1M2QzZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGF5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZhNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgLnRpdGxlLCBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHJcbiAgICAgICAgLmFkZC1jaXJjbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWxsLWNoZWNre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG59XHJcbi5tYXJrcy1yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubWFya3MtY29se1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM2EzYTNhO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGQtbm90ZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZmlsbDogZGltZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5yYXRpbmctc3RhcntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5tYXhfbGVuZ3RoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBjb2xvcjogI2FiYWJhYjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "uI6l":
    /*!*********************************************************************!*\
      !*** ./src/app/followup-student-list/followup-student-list.page.ts ***!
      \*********************************************************************/

    /*! exports provided: FollowupStudentListPage */

    /***/
    function uI6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowupStudentListPage", function () {
        return FollowupStudentListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_followup_student_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./followup-student-list.page.html */
      "xpdn");
      /* harmony import */


      var _followup_student_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./followup-student-list.page.scss */
      "sW5n");
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
      "tyNb");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");
      /* harmony import */


      var _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../service/student-data/student-data.service */
      "TgDs");
      /* harmony import */


      var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../add-review/add-review.component */
      "YXaF"); //import { TabsPage } from '../tabs/tabs';


      var FollowupStudentListPage = /*#__PURE__*/function () {
        function FollowupStudentListPage(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, route, router, printer, studentService, zone, modalController, actionSheetController, platform) {
          var _this = this;

          _classCallCheck(this, FollowupStudentListPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.route = route;
          this.router = router;
          this.printer = printer;
          this.studentService = studentService;
          this.zone = zone;
          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.platform = platform; //for student note

          this.canAddStudentNote = true;
          this.noteMessage = "";
          this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
          this.ratingStars = 1;
          this.showNoteModal = false;
          this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
          this.notes = [];
          this.halfStar = false;
          this.noNotesFound = '';
          this.studentBehaviour = {
            "icon": "",
            "text": ""
          }; //=========student note var end===========

          this.showCalenderModal = false;
          this.showProfileModal = false;
          this.noDataFound = "";
          this.student = {};
          this.attendanceResponse = {};
          this.userDetails = {};
          this.lang = {};
          this.students = [];
          this.currentEvents = [];
          this.holidayString = "";
          this.isHoliday = false; // studentBehaviour:any = '';

          this.courseInfo = {};
          this.options = {
            canBackwardsSelected: true,
            from: 1,
            to: 0,
            disableWeeks: [],
            daysConfig: []
          };
          this.markSheet = [];
          this.show_loading = false;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state.course;

              if (_this.router.getCurrentNavigation().extras.state.update) {
                _this.ngOnInit(false);
              }
            }
          });
          this.dateSelected = new Date();
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
          this.translate.get("plan").subscribe(function (val) {
            _this.planLang = val;
          });
        }

        _createClass(FollowupStudentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.userType = this.userDetails.details.user_type;
              var data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
              };
              this.dataProvider.getHolidays(data).then(function (response) {
                if (response) {
                  if (response.holidays.length > 0) {
                    _this2.holidayString = response.holiday_string;
                    response.holidays.forEach(function (holiday) {
                      var date = new Date(holiday.date);
                      var p = {
                        date: holiday.date,
                        disable: true
                      };

                      _this2.options.daysConfig.push(p);

                      _this2.currentEvents.push({
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        date: date.getDate()
                      });
                    });
                  }

                  var day = _this2.dateSelected.getDate();

                  day = day < 10 ? '0' + day : day;

                  var month = _this2.dateSelected.getMonth();

                  month = month + 1;
                  month = month < 10 ? '0' + month : month;
                  var strint_date = _this2.dateSelected.getFullYear() + '-' + month + '-' + day;

                  if (_this2.holidayString.indexOf(strint_date) > -1) {
                    _this2.isHoliday = true;
                  } else {
                    _this2.isHoliday = false;
                  }
                }
              })["catch"](function (error) {
                _this2.dataProvider.hideLoading();

                console.log(error);
              });
              this.show_loading = true;
              this.getStudents(loader);
            } else {
              this.dataProvider.hideLoading();
              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              });
            }
          }
        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this3 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.markSheet = []; // if(loader) this.dataProvider.showLoading();

            var course = this.navData;
            this.courseInfo = course;
            var studentData = {
              "date": this.dataProvider.getFormatedDate(this.dateSelected),
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "course_id": course.cid,
              "school_id": this.userDetails.details.school_id
            };
            this.dataProvider.getFollowUpStudentList(studentData).then(function (res) {
              // if(loader) this.dataProvider.hideLoading();
              _this3.show_loading = false;

              if (res.session) {
                res.data.students.forEach(function (student) {
                  //console.log('marksheet11',student);
                  student.sheet.forEach(function (sheet) {
                    //console.log('sheetdata',sheet);
                    _this3.markSheet.push({
                      sid: student.sid,
                      cid: student.cid,
                      marks: sheet.marks,
                      marks_id: sheet.marks_id,
                      field_id: sheet.field_id
                    });
                  });
                  student.studentBehaviour = _this3.getStudentBehaviour(student.agg_ranking);
                });
                _this3.attendanceResponse = res.data;
                _this3.students = JSON.parse(JSON.stringify(res.data.students));

                if (_this3.attendanceResponse.students && _this3.attendanceResponse.students.length == 0) {
                  _this3.noDataFound = _this3.lang.no_students_in_class;
                }
              } else {
                // if(loader) this.dataProvider.hideLoading();
                _this3.show_loading = false;

                _this3.authProvider.flushLocalStorage();

                _this3.dataProvider.errorALertMessage(res.message);

                _this3.router.navigate(['login'], {
                  replaceUrl: true
                });
              }
            });
          }
        }, {
          key: "getStudentBehaviour",
          value: function getStudentBehaviour(agg_ranking) {
            if (agg_ranking > 0 && agg_ranking < 2.6) {
              return this.lang.warning_behaviour;
            } else if (agg_ranking > 2.5 && agg_ranking < 3.6) {
              return this.lang.good_behaviour;
            } else if (agg_ranking > 3.5 && agg_ranking < 4.6) {
              return this.lang.very_good_behaviour;
            } else if (agg_ranking > 4.5 && agg_ranking < 5.1) {
              return this.lang.excellent_behaviour;
            } else {
              return this.lang.no_behaviour;
            }
          }
        }, {
          key: "changeMarks",
          value: function changeMarks(eve, student, field) {
            // console.log(field,eve);
            if (+eve.detail.value > +field.field_max_marks) {
              eve.detail.value = field.field_max_marks;
              eve.target.value = '';
              this.dataProvider.showToast(this.lang.could_not_be_greater + field.field_max_marks);
              return;
            }

            var isPresent = false;
            var obj = {};
            obj.sid = student.sid;
            obj.cid = student.cid;
            obj.marks_id = field.marks_id;
            obj.marks = eve.detail.value;
            obj.field_id = field.field_id;

            if (this.markSheet.length > 0) {
              for (var i = 0; i < this.markSheet.length; i++) {
                if (this.markSheet[i].sid == obj.sid && this.markSheet[i].cid == obj.cid && this.markSheet[i].field_id == field.field_id) {
                  this.markSheet[i]['marks'] = eve.detail.value;
                  isPresent = true;
                }
              }

              if (!isPresent) {
                this.markSheet.push(obj);
              }
            } else {
              this.markSheet.push(obj);
            } // console.log('obj',obj);

          }
        }, {
          key: "submitMarks",
          value: function submitMarks() {
            var _this4 = this;

            var course = this.navData;
            console.log(course);
            var data = {
              "date": this.dataProvider.getFormatedDate(this.dateSelected),
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "course_id": course.cid,
              "school_id": this.userDetails.details.school_id
            };
            console.log('this.markSheet', this.markSheet);

            if (this.markSheet.length) {
              this.dataProvider.showLoading();
              this.dataProvider.submitMarks(data, this.markSheet).then(function (response) {
                _this4.dataProvider.hideLoading();

                if (response.session) {
                  _this4.dataProvider.showToast(_this4.lang.marks_added);

                  _this4.getStudents(false);

                  _this4.router.navigate(['tabs/follow-up-student'], {
                    replaceUrl: true
                  });
                } else {
                  _this4.router.navigate(['tabs/follow-up-student'], {
                    replaceUrl: true
                  });

                  _this4.dataProvider.errorALertMessage(_this4.lang.marks_added_error);
                }
              })["catch"](function (error) {
                _this4.dataProvider.hideLoading();

                _this4.dataProvider.errorALertMessage(_this4.lang.marks_added_error);
              });
            } else {
              this.router.navigate(['tabs/follow-up-student'], {
                replaceUrl: true
              }); // this is new code dated 17dec21
              // this.dataProvider.showToast(this.lang.no_marks_added);
            }
          }
        }, {
          key: "checkCurrentDate",
          value: function checkCurrentDate(date) {
            var currentDate = new Date();

            if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "openUserImageModal",
          value: function openUserImageModal(student) {
            this.student = student;
            this.showProfileModal = true;
          }
        }, {
          key: "hideUserImageModal",
          value: function hideUserImageModal(event) {
            if (event.target.className == "custom-modal-main") {
              this.showProfileModal = false;
            }
          }
        }, {
          key: "onDaySelect",
          value: function onDaySelect(event) {
            if (event != undefined && event != null) {
              var date = new Date(event);
              console.log(event);
              var day = event.date;
              day = day < 10 ? '0' + day : day;
              var month = event.month;
              month = month + 1;
              month = month < 10 ? '0' + month : month;
              var strint_date = event.year + '-' + month + '-' + day;

              if (this.holidayString.indexOf(event) == -1) {
                this.dateSelected = date;
                var currentDate = new Date();

                if (this.dateSelected.getTime() <= currentDate.getTime()) {
                  this.isHoliday = false;
                  this.hideCalenderModal();
                  this.getStudents();
                } else {
                  this.dataProvider.showToast(this.lang.future_date);
                }
              } else {
                this.dataProvider.showToast(this.lang.holiday);
              }
            }
          }
        }, {
          key: "openCalenderModal",
          value: function openCalenderModal() {
            if (this.platform.is('cordova')) {
              if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                this.showCalenderModal = true;
                var query = document.getElementsByName('ios-arrow-forward');
                var query1 = document.getElementsByName('ios-arrow-back');
                var query2 = document.getElementsByName('md-arrow-dropdown');
                setTimeout(function () {
                  query[0]['name'] = "chevron-forward-outline";
                  query1[0]['name'] = "chevron-back-outline";
                  query2[0]['name'] = "chevron-down-outline";
                }, 500);
              } else {
                this.dataProvider.showToast(this.lang.no_internet);
              }
            } else {
              this.showCalenderModal = true;

              var _query = document.getElementsByName('ios-arrow-forward');

              var _query2 = document.getElementsByName('ios-arrow-back');

              var _query3 = document.getElementsByClassName('arrow-dropdown');

              setTimeout(function () {
                _query[0]['name'] = "chevron-forward-outline";
                _query2[0]['name'] = "chevron-back-outline";
                _query3[0]['name'] = "chevron-down-outline";
              }, 500);
            }
          }
        }, {
          key: "hideCalenderModal",
          value: function hideCalenderModal() {
            this.showCalenderModal = false;
          }
        }, {
          key: "checkDateSelected",
          value: function checkDateSelected(date) {
            if (date.getDate() == this.dateSelected.getDate() && date.getMonth() == this.dateSelected.getMonth() && date.getFullYear() == this.dateSelected.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN)) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 3;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this5.openCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this5.openGallery();
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      _context.next = 9;
                      break;

                    case 8:
                      this.dataProvider.showToast(this.lang.no_internet);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this6 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.CAMERA,
              targetHeight: 500,
              targetWidth: 500
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this6.dataProvider.showLoading();

                var data = {
                  user_no: _this6.userDetails.details.user_no,
                  session_id: _this6.userDetails.session_id,
                  imageData: "data:image/png;base64," + imageData,
                  sid: _this6.student.sid
                };

                _this6.dataProvider.updateUserImage(data).then(function (response) {
                  _this6.dataProvider.hideLoading();

                  if (response.session) {
                    _this6.student.pic = response.url;
                  } else {
                    _this6.authProvider.flushLocalStorage();

                    _this6.dataProvider.errorALertMessage(response.message);

                    _this6.router.navigate(['login'], {
                      replaceUrl: true
                    });
                  }
                })["catch"](function (error) {
                  _this6.dataProvider.hideLoading();

                  _this6.dataProvider.errorALertMessage(error);
                });
              }
            });
          }
          /**
           * Open gallery to take image
           */

        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this7 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              targetHeight: 500,
              targetWidth: 500
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this7.dataProvider.showLoading();

                var data = {
                  user_no: _this7.userDetails.details.user_no,
                  session_id: _this7.userDetails.session_id,
                  imageData: "data:image/png;base64," + imageData,
                  sid: _this7.student.sid
                };

                _this7.dataProvider.updateUserImage(data).then(function (response) {
                  _this7.dataProvider.hideLoading();

                  if (response.session) {
                    _this7.student.pic = response.url;
                  } else {
                    _this7.authProvider.flushLocalStorage();

                    _this7.dataProvider.errorALertMessage(response.message);

                    _this7.router.navigate(['login'], {
                      replaceUrl: true
                    });
                  }
                })["catch"](function (error) {
                  _this7.dataProvider.hideLoading();

                  _this7.dataProvider.errorALertMessage(error);
                });
              }
            });
          }
        }, {
          key: "presentPrintOption",
          value: function presentPrintOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN)) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 3;
                      return this.alertCtrl.create({
                        header: this.lang.report_option,
                        buttons: [{
                          text: this.lang.exel,
                          handler: function handler() {
                            _this8.printReport('exel');
                          }
                        }, {
                          text: this.lang.pdf,
                          handler: function handler() {
                            _this8.printReport('pdf');
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                      _context2.next = 9;
                      break;

                    case 8:
                      this.dataProvider.showToast(this.lang.no_internet);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "printReport",
          value: function printReport(type) {
            var _this9 = this;

            var planData = {
              user_no: this.userDetails.details.user_no,
              report_type: type
            };
            this.dataProvider.showLoading();
            this.dataProvider.openPdf(planData).then(function (res) {
              var course = _this9.navData;
              _this9.courseInfo = course;
              var studentData = {
                "date": _this9.dataProvider.getFormatedDate(_this9.dateSelected),
                "user_no": _this9.userDetails.details.user_no,
                "session_id": _this9.userDetails.session_id,
                "course_id": course.cid,
                "school_id": _this9.userDetails.details.school_id,
                "report_type": type
              };

              _this9.dataProvider.getMarksReport(studentData).then(function (res) {
                _this9.dataProvider.hideLoading();

                if (res.data) {
                  if (type == "pdf") {
                    var options = {
                      orientation: 'portrait'
                    };

                    _this9.printer.print(res.data, options).then(function (onSuccess) {}, function (e) {
                      console.log('printer.print', e);

                      _this9.dataProvider.showToast(_this9.lang.report_error);
                    });
                  } else {
                    window.open(res.data, '_system');
                  }
                } else {
                  _this9.dataProvider.showToast(_this9.lang.report_error);
                }
              }, function (error) {
                _this9.dataProvider.hideLoading();

                _this9.dataProvider.showToast(_this9.lang.report_error);
              });
            })["catch"](function (e) {
              _this9.dataProvider.hideLoading();

              console.log(e);

              _this9.presentAlertConfirm();
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: this.planLang.not_valid,
                        mode: 'ios',
                        buttons: [{
                          text: this.planLang.cancel,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: this.planLang.subscribe,
                          handler: function handler() {
                            console.log('Confirm Okay'); // this.subscription.blockAds();

                            _this10.router.navigate(['available-plan']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addFields",
          value: function addFields() {
            var _this11 = this;

            var course = this.navData;
            var navigation = {
              state: {
                "date": this.dataProvider.getFormatedDate(this.dateSelected),
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "course_id": course.cid,
                "school_id": this.userDetails.details.school_id,
                course: this.navData
              }
            };
            this.zone.run(function () {
              _this11.router.navigate(['followup-add-fields'], navigation);
            });
          } // update on 23-jult-2021 start =======

        }, {
          key: "deleteStudentMarks",
          value: function deleteStudentMarks() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this12 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.alert,
                        message: this.lang.want_to_delete,
                        buttons: [{
                          text: this.lang.yes,
                          handler: function handler() {
                            _this12.deleteFollowUpStudentMarks();
                          }
                        }, {
                          text: this.lang.no
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteFollowUpStudentMarks",
          value: function deleteFollowUpStudentMarks() {
            var _this13 = this;

            this.dataProvider.showLoading();
            var course = this.navData;
            var follwData = {
              "date": this.dataProvider.getFormatedDate(this.dateSelected),
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "course_id": course.cid,
              "school_id": this.userDetails.details.school_id
            };
            this.dataProvider.deleteFollowUpStudentList(follwData).then(function (res) {
              console.log('deleteFollowUpStudentList res', res);

              _this13.dataProvider.hideLoading();

              if (res.data.response) {
                _this13.router.navigate(['tabs/follow-up-student'], {
                  replaceUrl: true
                });
              }

              _this13.dataProvider.showToast(res.data.msg);
            });
          } // to add class notes student profile directly

        }, {
          key: "presentNoteActionSheet",
          value: function presentNoteActionSheet(student) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this14 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.actionSheetController.create({
                        // header: 'Albums',
                        mode: 'ios',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Student Review',
                          handler: function handler() {
                            _this14.openNoteModal(student, 'review');
                          }
                        }, {
                          text: 'Student Note',
                          handler: function handler() {
                            _this14.openNoteModal(student, 'note');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context5.sent;
                      _context5.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context5.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context5.sent;
                      role = _yield$actionSheet$on.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openNoteModal",
          value: function openNoteModal(student, mode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this15 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(mode === 'note')) {
                        _context6.next = 5;
                        break;
                      }

                      this.studentData = student; // console.log("student1==>",this.studentData);
                      // this.ratingStars = 1;
                      // this.selections= ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee']

                      this.showNoteModal = true;
                      _context6.next = 13;
                      break;

                    case 5:
                      this.studentData = student;
                      _context6.next = 8;
                      return this.modalController.create({
                        component: _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_13__["AddReviewComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 8:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);

                        if (data.data.data) {
                          _this15.ratingStars = data.data.data;
                          _this15.noteMessage = data.data.noteMessage;

                          _this15.addNotesNote();
                        }
                      });
                      _context6.next = 12;
                      return modal.present();

                    case 12:
                      return _context6.abrupt("return", _context6.sent);

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "hideNoteModal",
          value: function hideNoteModal() {
            this.showNoteModal = false;
          }
        }, {
          key: "getSelectedStars",
          value: function getSelectedStars() {
            return new Array(5);
          }
        }, {
          key: "selectStarsForRating",
          value: function selectStarsForRating(index) {
            this.ratingStars = index + 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];

            for (var i = 0; i <= index; i++) {
              this.selections[i] = '#04855f';
            }
          } // addNotesNote(){
          //   if(this.noteMessage && this.noteMessage.trim() != '') { 
          //     if(this.noteMessage.length <= 45) {
          //       if(this.canAddStudentNote) {
          //         // this.dataProvider.showLoading();
          //         console.log("stusid::",this.studentData.cid);
          //         let data = {
          //           sid: this.studentData.sid,
          //           note: this.noteMessage,
          //           user_id: this.userDetails.details.user_no,
          //           rating: this.ratingStars
          //         }
          //         this.dataProvider.addStudentNote(data).then((note_id)=>{
          //           // this.dataProvider.hideLoading();
          //           console.log("NOTE.ID--",note_id);
          //           console.log("course id",this.navData.cid);
          //           let state = {
          //             course: this.navData
          //           };
          //           this.noteMessage = '';
          //           this.showNoteModal = false;
          //           // this.router.navigate(['student-detail'],{state: sendWith});
          //           this.dataProvider.showToast("Note has been submitted");  
          //           this.router.navigate(['followup-student-list'],{state: state});
          //         }).catch(error=>{
          //           console.log("erreremsg",error);
          //           this.dataProvider.hideLoading();
          //           this.dataProvider.errorALertMessage(error);
          //         })
          //       }else{
          //         this.dataProvider.showToast(this.lang.already_submit_note);  
          //       }
          //     }else {
          //       this.dataProvider.showToast(this.lang.max_note_length);
          //     }
          //   }else{
          //     this.dataProvider.showToast(this.lang.empty_note);
          //   }
          // }

        }, {
          key: "addNotesNote",
          value: function addNotesNote() {
            var _this16 = this;

            if (this.noteMessage && this.noteMessage.trim() != '') {
              if (this.noteMessage.length <= 45) {
                if (this.canAddStudentNote) {
                  // this.dataProvider.showLoading();
                  console.log("stusid::", this.studentData.cid);
                  var data = {
                    sid: this.studentData.sid,
                    note: this.noteMessage,
                    user_id: this.userDetails.details.user_no,
                    rating: this.ratingStars,
                    new_rating: JSON.stringify(this.ratingStars) // new_rating: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

                  };
                  this.dataProvider.addStudentNote(data).then(function (note_id) {
                    // this.dataProvider.hideLoading();
                    console.log("NOTE.ID--", note_id);
                    console.log("course id", _this16.navData.cid);
                    var state = {
                      course: _this16.navData
                    };
                    _this16.noteMessage = '';
                    _this16.showNoteModal = false;

                    _this16.dataProvider.showToast("Note has been submitted");

                    _this16.router.navigate(['followup-student-list'], {
                      state: state
                    });
                  })["catch"](function (error) {
                    console.log("erreremsg", error);

                    _this16.dataProvider.hideLoading();

                    _this16.dataProvider.errorALertMessage(error);
                  });
                } else {
                  this.dataProvider.showToast(this.lang.already_submit_note);
                }
              } else {
                this.dataProvider.showToast(this.lang.max_note_length);
              }
            } else {
              this.dataProvider.showToast(this.lang.empty_note);
            }
          }
        }, {
          key: "addTextNotesNote",
          value: function addTextNotesNote() {
            var _this17 = this;

            if (this.noteMessage && this.noteMessage.trim() != '') {
              if (this.noteMessage.length <= 45) {
                if (this.canAddStudentNote) {
                  this.dataProvider.showLoading();
                  var data = {
                    sid: this.studentData.sid,
                    note: this.noteMessage,
                    user_id: this.userDetails.details.user_no,
                    rating: 0,
                    new_rating: JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                  };
                  this.dataProvider.addStudentNote(data).then(function (note_id) {
                    _this17.dataProvider.hideLoading();

                    console.log("NOTE.ID--", note_id);
                    console.log("course id", _this17.navData.cid);
                    var sendWith = {
                      student_id: _this17.studentData.sid,
                      course_id: _this17.navData.cid,
                      dateSelected: _this17.dateSelected
                    };
                    var state = {
                      course: _this17.navData
                    };
                    _this17.noteMessage = '';
                    _this17.showNoteModal = false;

                    _this17.dataProvider.showToast("Note has been submitted");

                    _this17.router.navigate(['followup-student-list'], {
                      state: state
                    });
                  })["catch"](function (error) {
                    console.log("erreremsg", error);

                    _this17.dataProvider.hideLoading();

                    _this17.dataProvider.errorALertMessage(error);
                  });
                } else {
                  this.dataProvider.showToast(this.lang.already_submit_note);
                }
              } else {
                this.dataProvider.showToast(this.lang.max_note_length);
              }
            } else {
              this.dataProvider.showToast(this.lang.empty_note);
            }
          }
        }]);

        return FollowupStudentListPage;
      }();

      FollowupStudentListPage.ctorParameters = function () {
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
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"]
        }, {
          type: _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__["StudentDataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      FollowupStudentListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-followup-student-list',
        template: _raw_loader_followup_student_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_followup_student_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"], _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__["StudentDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], FollowupStudentListPage);
      /***/
    },

    /***/
    "xpdn":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/followup-student-list/followup-student-list.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xpdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"6\" align-self-center no-padding text-right>\n        <div class=\"title\" (click)=\"openCalenderModal()\">{{dateSelected | date: 'mediumDate'}}</div>\n      </ion-col>\n      <ion-col size=\"6\" align-self-center no-padding style=\"direction: ltr;\">\n        <ion-buttons start clear>\n          <ion-button class=\"small_btn_header\" small clear icon-only (click)=\"deleteStudentMarks()\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n\n          <ion-button class=\"small_btn_header\" small clear icon-only (click)=\"presentPrintOption()\">\n            <ion-icon name=\"print-outline\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"small_btn_header\" small clear icon-only (click)=\"addFields()\">\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <ion-list padding no-margin>\n    <ion-row>\n      <ion-col size=\"4\" col-sm-2 align-self-center style=\"padding-right: 18px; color:#000;\" class=\"text-right\" text-right>\n        {{courseInfo.name}}\n      </ion-col>\n      <ion-col size=\"8\" col-sm-10 align-self-center>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <div style=\"padding:10px;background: white;color:#000;\">{{attendanceResponse.submittedMsg}}</div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"main-content\">\n    <ion-list padding *ngIf=\"attendanceResponse.students?.length > 0\" margin-top>\n      <ion-row class=\"right-direction student-card\"\n        *ngFor=\"let student of attendanceResponse.students; let sno = index;\">\n        <ion-col size=\"10\" col-sm-11>\n          <ion-row>\n            <ion-col size=\"3\" align-self-center class=\"text-center\" class=\"left-direction\">\n              <ion-button fill=\"clear\" *ngIf=\"userType != '4' && canAddStudentNote\" (click)=\"presentNoteActionSheet(student)\">\n                <ion-icon name=\"add-circle\" class=\"add-note\" item-end color=\"icon-header\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"9\" align-self-center class=\"text-right\" class=\"left-direction\">\n              <h4><span class=\"serial-number\">{{sno+1}}.</span> {{student.name}}</h4>\n              <p class=\"student-behaviour\">{{student.studentBehaviour}}</p>\n            </ion-col>\n\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"2\" col-sm-1 align-self-center>\n          <ion-item class=\"item-img\" lines=\"none\">\n            <ion-avatar (click)=\"openUserImageModal(student)\">\n              <img [src]=\"student.pic\">\n            </ion-avatar>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n          <ion-row style=\"direction: rtl;\" class=\"marks-row\" *ngIf=\"student.sheet.length\">\n            <ion-col size=\"4\" class=\"marks-col\" *ngFor=\"let sheet of student.sheet\">\n              <p>{{sheet.field_name}}</p>\n              <ion-input [value]=\"sheet.marks\" [max]=\"sheet.field_max_marks\" class=\"inp-marks\" debounce=\"500\"\n                type=\"number\" (ionChange)=\"changeMarks($event,student,sheet)\"></ion-input>\n            </ion-col>\n            <!-- <ion-col size=\"4\" class=\"marks-col\">\n        \t\t\t<p>{{'followUp_student.participation_mark' |translate}}</p>\n        \t\t\t<ion-input [value]=\"student\" class=\"inp-marks\" debounce=\"300\" type=\"number\" (ionChange)=\"changeMarks($event,student,'participation_mark')\"></ion-input>\n        \t\t</ion-col> -->\n            <!-- <ion-col size=\"4\" class=\"marks-col\">\n        \t\t\t<p>{{'followUp_student.assessments_mark' | translate}}</p>\n        \t\t\t<ion-input [value]=\"student\" class=\"inp-marks\" debounce=\"300\" type=\"number\" (ionChange)=\"changeMarks($event,student,'assessments_mark')\"></ion-input>\n        \t\t</ion-col> -->\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-button expand=\"block\" class=\"btn-primary margin\" color=\"primary\" (click)=\"submitMarks()\"\n        *ngIf=\"!isHoliday && userType != '7'\">{{'list-student.submitbtn' | translate}}</ion-button>\n    </ion-list>\n    <ion-label margin-top padding-top item-center class=\"norecord-found\"\n      *ngIf=\"attendanceResponse.students?.length == 0\">{{noDataFound}}\n    </ion-label>\n    <div margin-top padding-top item-center class=\"students\" id=\"students\" *ngIf=\"show_loading\"> \n      <ion-card  class=\"text-left body-font card heigt-min\" *ngFor=\"let dummy of ' '.repeat(20).split(''), let x = index\">\t\t\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <h4><ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text></h4>\n            <p><ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text></p>\n          </ion-label>\n        </ion-item>\n      </ion-card> \n      </div>\n  </div>\n</ion-content>\n\n<div class=\"custom-calender-modal-main\" *ngIf=\"showCalenderModal\">\n  <div class=\"calender-container\">\n    <div class=\"calender-body\" class=\"right-direction\">\n      <ion-calendar #calendar [options]=\"options\" canBackwardsSelected=\"true\" (change)=\"onDaySelect($event)\">\n      </ion-calendar>\n      <!-- [events]=\"currentEvents\" -->\n    </div>\n  </div>\n  <div class=\"clickd-div\" (click)=\"hideCalenderModal()\"></div>\n</div>\n\n<div class=\"custom-modal-main\" *ngIf=\"showProfileModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-header\">\n      <div class=\"image-sec\" [ngStyle]=\"{'background-image': 'url('+student.pic+')'}\">\n        <div class=\"add-image-icon\" (click)=\"takePicture()\"\n          *ngIf=\"userDetails.details.user_type != '2' && userDetails.details.user_type != '7'\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"custom-modal-content\">\n      <h2 style=\"color:black;\">{{student.name}}\n        <!-- <ion-icon *ngIf=\"editMode\" (click)=\"editStudentClass($event,student)\" name=\"create-outline\"></ion-icon> -->\n      </h2>\n      <h2>{{student.course_name}}</h2>\n      <p *ngIf=\"student.studentBehaviour != ''\">{{student.studentBehaviour}}</p>\n      <p>{{'list-student.total_absents' | translate}} : {{student.total_absent}}</p>\n    </div>\n    <div class=\"custom-modal-footer\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"lefthorizline text-left\">\n          <p class=\"absence-count text-center\" style=\"color:black;\">{{student.unacceptable_absent_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.unacceptable_absence' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"text-center\">\n          <p class=\"absence-count text-center\" style=\"color:black;\">{{student.suspend_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.suspension_days' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"text-right\">\n          <p class=\"absence-count text-center\" style=\"color:black;\">{{student.medical_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.medical_days' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n<div class=\"custom-modal-main\" *ngIf=\"showNoteModal\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-note-header\">\n      <h4>{{'student-details.add_note' | translate}}</h4>\n    </div>\n\n    <div class=\"custom-note-content\">\n      <!-- <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n        <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[i]}\" (click)=\"selectStarsForRating(i)\"></ion-icon>\n      </span> -->\n      <div class=\"note-desc\">\n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"noteMessage\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-input>\n        </ion-item>\n        <p class=\"max_length\">{{noteMessage?.length}}/45</p>\n      </div>\n    </div>\n    <div class=\"custom-modal-footer right-direction\">\n      <ion-row>\n        <ion-col size=\"6\" text-right>\n         <ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\"  (click)=\"hideNoteModal()\">{{'alertmessages.alert_btn_cancel_text' |\n            translate}}</ion-button> \n        </ion-col>\n        <ion-col size=\"6\" text-center>\n          <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" color=\"primary\" (click)=\"addTextNotesNote()\">{{'alertmessages.alert_btn_submit_text' | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=followup-student-list-followup-student-list-module-es5.js.map
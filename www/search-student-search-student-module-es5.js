(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-student-search-student-module"], {
    /***/
    "e1b6":
    /*!*******************************************************!*\
      !*** ./src/app/search-student/search-student.page.ts ***!
      \*******************************************************/

    /*! exports provided: SearchStudentPage */

    /***/
    function e1b6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchStudentPage", function () {
        return SearchStudentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-student.page.html */
      "xTE/");
      /* harmony import */


      var _search_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-student.page.scss */
      "gfIH");
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


      var SearchStudentPage = /*#__PURE__*/function () {
        function SearchStudentPage(navCtrl, //	public navParams: NavParams, 
        dataProvider, authProvider, //public app: App, 
        translate, alertCtrl, camera, network, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, SearchStudentPage);

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
          this.students = [];
          this.allStudents = [];
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.userdata = _this.router.getCurrentNavigation().extras.state.userDetails;
              console.log(_this.userdata); // this.getStudents();
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(SearchStudentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this2 = this;

            var data = {
              'school_id': this.userdata.school_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getSchoolStudents(data).then(function (res) {
              _this2.dataProvider.hideLoading();

              console.log('seminar class', res);

              if (res.data) {
                _this2.students = res.data;

                if (_this2.students.length > 1) {
                  _this2.allStudents = _this2.students.splice(0, 20);
                } else {
                  _this2.allStudents = _this2.students;
                }
              }
            })["catch"](function (error) {
              _this2.dataProvider.hideLoading();

              _this2.dataProvider.showToast(error);

              console.log(error);
            });
          }
        }, {
          key: "filterList",
          value: function filterList(event) {
            var _this3 = this;

            //this.selectTopic=[];
            var input = document.getElementById('search').value;
            var data = {
              'school_id': this.userdata.school_id,
              'search_str': input
            };
            this.dataProvider.serachStudent(data).then(function (res) {
              //  this.dataProvider.hideLoading();
              if (res && res.data) {
                if (res.data.response) {
                  _this3.students = res.data.response;
                  console.log(_this3.students);

                  if (_this3.students.length > 1) {
                    _this3.allStudents = _this3.students.splice(0, 20);
                  } else {
                    _this3.allStudents = _this3.students;
                  }
                }
              }
            })["catch"](function (error) {
              // this.dataProvider.hideLoading();
              _this3.dataProvider.showToast(error);

              console.log(error);
            }); // console.log(input);
            // const items = Array.from(document.getElementById('students').children);
            // items.forEach(item => {
            //       const shouldShow = item.textContent.toLowerCase().indexOf(input) > -1;
            //       (<HTMLElement>item).style.display = shouldShow ? 'block' : 'none';
            // });
          }
        }, {
          key: "openStudentDetails",
          value: function openStudentDetails(student) {
            var _this4 = this;

            var navigation = {
              state: {
                student_id: student.sid,
                course_id: student.cid,
                dateSelected: this.dataProvider.getFormatedDate(new Date())
              }
            }; //console.log(navigation);

            this.zone.run(function () {
              _this4.router.navigate(['student-detail'], navigation);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this5 = this;

            setTimeout(function () {
              _this5.allStudents = _this5.allStudents.concat(_this5.students.splice(0, 20));
              infiniteScroll.target.complete();
            }, 500);
          }
        }]);

        return SearchStudentPage;
      }();

      SearchStudentPage.ctorParameters = function () {
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

      SearchStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-student',
        template: _raw_loader_search_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], SearchStudentPage);
      /***/
    },

    /***/
    "ez54":
    /*!*****************************************************************!*\
      !*** ./src/app/search-student/search-student-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchStudentPageRoutingModule */

    /***/
    function ez54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchStudentPageRoutingModule", function () {
        return SearchStudentPageRoutingModule;
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


      var _search_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-student.page */
      "e1b6");

      var routes = [{
        path: '',
        component: _search_student_page__WEBPACK_IMPORTED_MODULE_3__["SearchStudentPage"]
      }];

      var SearchStudentPageRoutingModule = function SearchStudentPageRoutingModule() {
        _classCallCheck(this, SearchStudentPageRoutingModule);
      };

      SearchStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchStudentPageRoutingModule);
      /***/
    },

    /***/
    "gfIH":
    /*!*********************************************************!*\
      !*** ./src/app/search-student/search-student.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function gfIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  height: 76px;\n}\nion-toolbar ion-searchbar {\n  --box-shadow: unset;\n  font-size: 31px !important;\n  min-height: 80px !important;\n}\n.students {\n  background: #f7f5f5;\n  min-height: 100%;\n  padding: 10px;\n}\n.students ion-item {\n  margin: 0px 5px 5px 5px;\n}\nion-item p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlYXJjaC1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNLLFlBQUE7QUFBTDtBQUNLO0VBQ0ssbUJBQUE7RUFDSCwwQkFBQTtFQUNBLDJCQUFBO0FBQ1A7QUFFQTtFQUNDLG1CQUFBO0VBQ0csZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNDLHVCQUFBO0FBRUw7QUFFQztFQUNDLGVBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2gtc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXJ7XHJcblx0ICAgIGhlaWdodDogNzZweDtcclxuXHQgICAgaW9uLXNlYXJjaGJhcntcclxuXHQgICAgXHQgICAgLS1ib3gtc2hhZG93OiB1bnNldDtcclxuXHRcdFx0ICAgIGZvbnQtc2l6ZTogMzFweCAhaW1wb3J0YW50O1xyXG5cdFx0XHQgICAgbWluLWhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG5cdCAgICB9XHJcbn1cclxuLnN0dWRlbnRze1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y1ZjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgXHRtYXJnaW46IDBweCA1cHggNXB4IDVweDtcclxuICAgIH1cclxufVxyXG5pb24taXRlbXtcclxuXHRwe1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "xTE/":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-student/search-student.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xTE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n     <ion-toolbar>\n        <ion-searchbar [(ngModel)]=\"searchtxt\" placeholder=\"{{'search.search' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n      </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"students\" id=\"students\" *ngIf=\"allStudents\"> \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let student of allStudents\">\t\t\n\t\t\t<ion-item  (click)=\"openStudentDetails(student)\">\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"student.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{student.name}}</h4>\n\t\t\t    \t<p>{{student.student_id}}</p>\n\t\t\t    \t<p>{{student.class_name}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\n\t\t\n\t</div>\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "zmfO":
    /*!*********************************************************!*\
      !*** ./src/app/search-student/search-student.module.ts ***!
      \*********************************************************/

    /*! exports provided: SearchStudentPageModule */

    /***/
    function zmfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchStudentPageModule", function () {
        return SearchStudentPageModule;
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


      var _search_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-student-routing.module */
      "ez54");
      /* harmony import */


      var _search_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-student.page */
      "e1b6");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var SearchStudentPageModule = function SearchStudentPageModule() {
        _classCallCheck(this, SearchStudentPageModule);
      };

      SearchStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchStudentPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_search_student_page__WEBPACK_IMPORTED_MODULE_6__["SearchStudentPage"]]
      })], SearchStudentPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-student-search-student-module-es5.js.map
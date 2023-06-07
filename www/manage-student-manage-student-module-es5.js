(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-student-manage-student-module"], {
    /***/
    "+/8a":
    /*!*********************************************************!*\
      !*** ./src/app/manage-student/manage-student.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21hbmFnZS1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGVBQUE7QUFBRiIsImZpbGUiOiJtYW5hZ2Utc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuXHRwe1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "2FZe":
    /*!*****************************************************************!*\
      !*** ./src/app/manage-student/manage-student-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ManageStudentPageRoutingModule */

    /***/
    function FZe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageStudentPageRoutingModule", function () {
        return ManageStudentPageRoutingModule;
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


      var _manage_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-student.page */
      "TxCM");

      var routes = [{
        path: '',
        component: _manage_student_page__WEBPACK_IMPORTED_MODULE_3__["ManageStudentPage"]
      }];

      var ManageStudentPageRoutingModule = function ManageStudentPageRoutingModule() {
        _classCallCheck(this, ManageStudentPageRoutingModule);
      };

      ManageStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ManageStudentPageRoutingModule);
      /***/
    },

    /***/
    "L3QX":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-student/manage-student.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function L3QX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n     <ion-toolbar>\n     \t<ion-title>{{'sidemenu.manage_student' | translate}} </ion-title>\n      </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"students\" id=\"students\" *ngIf=\"allStudents\"> \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t\t<ion-item style=\"width: 100%;\">\n        \t\t<ion-searchbar mode=\"ios\" [(ngModel)]=\"searchtxt\" placeholder=\"{{'search.search' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n\t\t\t</ion-item>\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let student of allStudents\">\t\t\n\t\t\t<ion-item  (click)=\"openStudentDetails(student)\">\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"student.pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{student.name}}</h4>\n\t\t\t    \t<p>{{student.student_id}}</p>\n\t\t\t    \t<p>{{student.class_name}}</p>\n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t\t\n\t</div>\n\t<div class=\"students\" id=\"students\" *ngIf=\"show_loading\"> \n\t\t<ion-card  class=\"text-left body-font card heigt-min\" *ngFor=\"let dummy of ' '.repeat(20).split(''), let x = index\">\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n\t\t\t\t</ion-avatar>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h4><ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text></h4>\n\t\t\t\t\t<p><ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text></p>\n\t\t\t\t\t<p><ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text></p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t  </div>\n\t\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n ";
      /***/
    },

    /***/
    "LEmS":
    /*!*********************************************************!*\
      !*** ./src/app/manage-student/manage-student.module.ts ***!
      \*********************************************************/

    /*! exports provided: ManageStudentPageModule */

    /***/
    function LEmS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageStudentPageModule", function () {
        return ManageStudentPageModule;
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


      var _manage_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./manage-student-routing.module */
      "2FZe");
      /* harmony import */


      var _manage_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./manage-student.page */
      "TxCM");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ManageStudentPageModule = function ManageStudentPageModule() {
        _classCallCheck(this, ManageStudentPageModule);
      };

      ManageStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manage_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageStudentPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_manage_student_page__WEBPACK_IMPORTED_MODULE_6__["ManageStudentPage"]]
      })], ManageStudentPageModule);
      /***/
    },

    /***/
    "TxCM":
    /*!*******************************************************!*\
      !*** ./src/app/manage-student/manage-student.page.ts ***!
      \*******************************************************/

    /*! exports provided: ManageStudentPage */

    /***/
    function TxCM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageStudentPage", function () {
        return ManageStudentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-student.page.html */
      "L3QX");
      /* harmony import */


      var _manage_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-student.page.scss */
      "+/8a");
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


      var ManageStudentPage = /*#__PURE__*/function () {
        function ManageStudentPage(navCtrl, //	public navParams: NavParams, 
        dataProvider, authProvider, //public app: App, 
        translate, alertCtrl, camera, network, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, ManageStudentPage);

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
          this.show_loading = true;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              var isUpdated = _this.router.getCurrentNavigation().extras.state.isUpdated;

              if (isUpdated) {
                _this.userdata = JSON.parse(localStorage.getItem("userloggedin"));

                _this.getStudents();
              }
            }
          });
          this.userdata = JSON.parse(localStorage.getItem("userloggedin")); //this.getStudents();

          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(ManageStudentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userdata = JSON.parse(localStorage.getItem("userloggedin"));
            this.getStudents();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this2 = this;

            var data = {
              'school_id': this.userdata.details.school_id
            }; // this.dataProvider.showLoading();

            this.show_loading = true;
            this.dataProvider.getSchoolStudents(data).then(function (res) {
              console.log('seminar class', res);
              _this2.show_loading = false;

              if (res.data) {
                _this2.students = res.data;

                if (_this2.students.length > 1) {
                  _this2.allStudents = _this2.students.splice(0, 20);
                } else {
                  _this2.allStudents = _this2.students;
                }
              }
            })["catch"](function (error) {
              // this.dataProvider.hideLoading();
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
              'school_id': this.userdata.details.school_id,
              'search_str': input
            };
            this.show_loading = true;
            this.dataProvider.serachStudent(data).then(function (res) {
              //  this.dataProvider.hideLoading();
              _this3.show_loading = false;

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
              _this3.show_loading = false;

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

            console.log(student);
            var navigation = {
              state: {
                student: student,
                course_id: '',
                dateSelected: this.dataProvider.getFormatedDate(new Date())
              }
            }; //console.log(navigation);

            this.zone.run(function () {
              _this4.router.navigate(['edit-student-profile'], navigation);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this5 = this;

            this.show_loading = true;
            setTimeout(function () {
              _this5.allStudents = _this5.allStudents.concat(_this5.students.splice(0, 20));
              infiniteScroll.target.complete();
              _this5.show_loading = false;
            }, 500);
          }
        }]);

        return ManageStudentPage;
      }();

      ManageStudentPage.ctorParameters = function () {
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

      ManageStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-manage-student',
        template: _raw_loader_manage_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], ManageStudentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=manage-student-manage-student-module-es5.js.map
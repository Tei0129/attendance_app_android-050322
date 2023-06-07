(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-bulletins-user-select-bulletins-user-module"], {
    /***/
    "2awE":
    /*!***********************************************************************!*\
      !*** ./src/app/select-bulletins-user/select-bulletins-user.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function awE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbGVjdC1idWxsZXRpbnMtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFBO0FBQUYiLCJmaWxlIjoic2VsZWN0LWJ1bGxldGlucy11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG5cdHB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG59Il19 */";
      /***/
    },

    /***/
    "FSmK":
    /*!*********************************************************************!*\
      !*** ./src/app/select-bulletins-user/select-bulletins-user.page.ts ***!
      \*********************************************************************/

    /*! exports provided: SelectBulletinsUserPage */

    /***/
    function FSmK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectBulletinsUserPage", function () {
        return SelectBulletinsUserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_bulletins_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-bulletins-user.page.html */
      "HLMi");
      /* harmony import */


      var _select_bulletins_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-bulletins-user.page.scss */
      "2awE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //import { TabsPage } from '../tabs/tabs';


      var SelectBulletinsUserPage = /*#__PURE__*/function () {
        function SelectBulletinsUserPage(navCtrl, dataProvider, translate, alertCtrl, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, SelectBulletinsUserPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.platform = platform;
          this.allUsers = [];
          this.users = [];
          this.formData = {};
          this.userDetails = {};
          this.selectedUsers = [];
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.formData = _this.router.getCurrentNavigation().extras.state.formdata;
              _this.type = _this.router.getCurrentNavigation().extras.state.type;
              _this.data = _this.router.getCurrentNavigation().extras.state.data;
              _this.bulletinId = _this.router.getCurrentNavigation().extras.state.bulletinId;
              console.log(_this.formData);
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(SelectBulletinsUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getUsers();
              console.log();
            }
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this2 = this;

            var data = {
              'school_id': this.userDetails.details.school_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getSchoolUsers(data).then(function (res) {
              _this2.dataProvider.hideLoading();

              console.log('seminar class', res);

              if (res.data) {
                _this2.users = res.data;

                if (_this2.users.length > 1) {
                  _this2.allUsers = _this2.users.splice(0, 20);
                } else {
                  _this2.allUsers = _this2.users;
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
            console.log(input);
            var data = {
              input: input,
              school_id: this.userDetails.details.school_id
            };
            this.dataProvider.searchUser(data).then(function (resp) {
              if (resp.data) {
                _this3.users = resp.data;

                if (_this3.users.length > 1) {
                  _this3.allUsers = _this3.users.splice(0, 20);
                } else {
                  _this3.allUsers = _this3.users;
                }
              }
            })["catch"](function (arr) {
              console.log(arr);
            });
          }
        }, {
          key: "selectUser",
          value: function selectUser(users, eve, id) {
            console.log("custon event:::", eve);
            var isPresent = false;
            var ind;

            for (var i = 0; i < this.selectedUsers.length; i++) {
              if (this.selectedUsers[i] == users.user_no) {
                isPresent = true;
                ind = i;
              }
            }

            if (eve.detail.checked == true) {
              if (!isPresent) {
                if (users.user_no != this.userDetails.details.user_no) {
                  this.selectedUsers.push(users.user_no);
                } else {
                  this.dataProvider.showToast(this.lang.same_user);
                  var elem = document.getElementById('ch' + id);
                  elem.checked = false;
                }
              }
            } else {
              if (isPresent) {
                this.selectedUsers.splice(ind, 1);
              }
            }

            console.log(this.selectedUsers);
          }
        }, {
          key: "uplaodBullentin",
          value: function uplaodBullentin(user) {
            var _this4 = this;

            console.log(user);

            if (this.bulletinId) {
              this.data.users = this.selectedUsers; // this.data.shareto_user_no=user.user_no;

              console.log(this.data);
              this.dataProvider.showLoading();
              this.dataProvider.shareBulletins(this.data).then(function (res) {
                _this4.dataProvider.hideLoading();

                console.log(res);

                _this4.dataProvider.showToast(res.message);

                _this4.router.navigate(['bulletins']);
              })["catch"](function (err) {
                _this4.dataProvider.showToast(err.message);

                _this4.dataProvider.hideLoading();

                console.log(err);
              });
            } else {
              if (user.user_no != this.userDetails.details.user_no) {
                this.formData.users = user;
                console.log('this.formdata', this.formData);
                this.dataProvider.showLoading();
                this.dataProvider.createBulletins(this.formData).subscribe(function (res) {
                  _this4.dataProvider.hideLoading();

                  console.log(res);

                  _this4.dataProvider.showToast(res.message);

                  _this4.router.navigate(['bulletins']);
                }, function (err) {
                  _this4.dataProvider.showToast(err.message);

                  _this4.dataProvider.hideLoading();

                  console.log(err);
                });
              } else {
                this.dataProvider.showToast(this.lang.same_user);
              }
            }
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this5 = this;

            setTimeout(function () {
              _this5.allUsers = _this5.allUsers.concat(_this5.users.splice(0, 20));
              infiniteScroll.target.complete();
            }, 500);
          }
        }]);

        return SelectBulletinsUserPage;
      }();

      SelectBulletinsUserPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      SelectBulletinsUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-bulletins-user',
        template: _raw_loader_select_bulletins_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_bulletins_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], SelectBulletinsUserPage);
      /***/
    },

    /***/
    "HLMi":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-bulletins-user/select-bulletins-user.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HLMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n     <ion-toolbar>\n        <ion-searchbar style=\"padding-top: 15px;\" mode=\"ios\" placeholder=\"{{'search.search_user' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n      </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"students\" id=\"students\" *ngIf=\"allUsers && bulletinId && type!='create'\" > \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let users of allUsers; let i=index\">\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"end\" id=\"ch{{i}}\" (ionChange)=\"selectUser(users,$event,i)\"></ion-checkbox>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{users.first_name}}</h4>\n\t\t\t    \t<p>{{users.username}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t</div>\n\t<div class=\"students\" id=\"students\" *ngIf=\"allUsers && type=='create'\"> \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let users of allUsers\">\t\t\n\t\t\t<ion-item  (click)=\"uplaodBullentin(users)\">\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{users.first_name}}</h4>\n\t\t\t    \t<p>{{users.username}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t</div>\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n<ion-footer>\n\t<ion-button *ngIf=\"type!='create'\" expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"uplaodBullentin('users')\">\n\t\t{{'bulletin.share' | translate}}\n\t</ion-button>\n\t</ion-footer>\n";
      /***/
    },

    /***/
    "SbW6":
    /*!*******************************************************************************!*\
      !*** ./src/app/select-bulletins-user/select-bulletins-user-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SelectBulletinsUserPageRoutingModule */

    /***/
    function SbW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectBulletinsUserPageRoutingModule", function () {
        return SelectBulletinsUserPageRoutingModule;
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


      var _select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-bulletins-user.page */
      "FSmK");

      var routes = [{
        path: '',
        component: _select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_3__["SelectBulletinsUserPage"]
      }];

      var SelectBulletinsUserPageRoutingModule = function SelectBulletinsUserPageRoutingModule() {
        _classCallCheck(this, SelectBulletinsUserPageRoutingModule);
      };

      SelectBulletinsUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectBulletinsUserPageRoutingModule);
      /***/
    },

    /***/
    "gpDj":
    /*!***********************************************************************!*\
      !*** ./src/app/select-bulletins-user/select-bulletins-user.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SelectBulletinsUserPageModule */

    /***/
    function gpDj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectBulletinsUserPageModule", function () {
        return SelectBulletinsUserPageModule;
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


      var _select_bulletins_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-bulletins-user-routing.module */
      "SbW6");
      /* harmony import */


      var _select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-bulletins-user.page */
      "FSmK");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var SelectBulletinsUserPageModule = function SelectBulletinsUserPageModule() {
        _classCallCheck(this, SelectBulletinsUserPageModule);
      };

      SelectBulletinsUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _select_bulletins_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectBulletinsUserPageRoutingModule"]],
        declarations: [_select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_6__["SelectBulletinsUserPage"]]
      })], SelectBulletinsUserPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=select-bulletins-user-select-bulletins-user-module-es5.js.map
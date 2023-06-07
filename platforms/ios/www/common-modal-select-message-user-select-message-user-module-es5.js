(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-modal-select-message-user-select-message-user-module"], {
    /***/
    "5VXg":
    /*!******************************************************************************!*\
      !*** ./src/app/common-modal/select-message-user/select-message-user.page.ts ***!
      \******************************************************************************/

    /*! exports provided: SelectMessageUserPage */

    /***/
    function VXg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMessageUserPage", function () {
        return SelectMessageUserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_message_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-message-user.page.html */
      "xnRO");
      /* harmony import */


      var _select_message_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-message-user.page.scss */
      "pUkq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SelectMessageUserPage = /*#__PURE__*/function () {
        function SelectMessageUserPage(navCtrl, dataProvider, translate, alertCtrl, route, router, zone, location, platform) {
          var _this = this;

          _classCallCheck(this, SelectMessageUserPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.location = location;
          this.platform = platform;
          this.selectedUsers = [];
          this.selectedUsersShow = [];
          this.users = [];
          this.allUsers = [];
          this.route.queryParams.subscribe(function (params) {
            _this.selectedUsers = params.selectedUsers ? params.selectedUsers : [];
            _this.selectedUsersShow = params.selectedUsersShow;

            if (_this.router.getCurrentNavigation().extras.state) {//  		 this.users = this.router.getCurrentNavigation().extras.state;
              // this.allUsers = this.allUsers.concat(this.users.splice(0, 20));
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
        }

        _createClass(SelectMessageUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getUsers();
            }

            console.log(this.users);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this2 = this;

            var data = {
              'school_id': this.userDetails.details.school_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getAllSchoolUsers(data).then(function (res) {
              _this2.dataProvider.hideLoading();

              console.log('seminar class', res);

              if (res.data) {
                _this2.users = res.data;
                _this2.allUsers = _this2.allUsers.concat(_this2.users.splice(0, 20));
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
            this.dataProvider.searchAllUser(data).then(function (resp) {
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
            console.log(users);
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

            for (var _i = 0; _i < this.selectedUsersShow.length; _i++) {
              if (this.selectedUsersShow[_i] == users.username) {
                isPresent = true;
                ind = _i;
              }
            }

            if (eve.detail.checked == true) {
              if (!isPresent) {
                if (users.username != this.userDetails.details.username) {
                  this.selectedUsersShow.push(users.username);
                } else {
                  this.dataProvider.showToast(this.lang.same_user);

                  var _elem = document.getElementById('ch' + id);

                  _elem.checked = false;
                }
              }
            } else {
              if (isPresent) {
                this.selectedUsersShow.splice(ind, 1);
              }
            }

            console.log(this.selectedUsers, 'selectedUsersShow', this.selectedUsersShow);
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this4 = this;

            setTimeout(function () {
              _this4.allUsers = _this4.allUsers.concat(_this4.users.splice(0, 20));
              infiniteScroll.target.complete();
            }, 500);
          }
        }, {
          key: "sendUser",
          value: function sendUser() {
            // const navigation: NavigationExtras = {
            //          state : this.selectedUsers
            //        };
            //  this.zone.run(() => {
            //    this.router.navigate(['sendmessage'], navigation);
            //  });
            var data = {
              'selectedUsers': this.selectedUsers,
              'selectedUsersShow': this.selectedUsersShow
            };
            this.dataProvider.selectedUsers.emit(data);
            this.location.back();
          }
        }]);

        return SelectMessageUserPage;
      }();

      SelectMessageUserPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      SelectMessageUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-message-user',
        template: _raw_loader_select_message_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_message_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], SelectMessageUserPage);
      /***/
    },

    /***/
    "HxVs":
    /*!****************************************************************************************!*\
      !*** ./src/app/common-modal/select-message-user/select-message-user-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: SelectMessageUserPageRoutingModule */

    /***/
    function HxVs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMessageUserPageRoutingModule", function () {
        return SelectMessageUserPageRoutingModule;
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


      var _select_message_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-message-user.page */
      "5VXg");

      var routes = [{
        path: '',
        component: _select_message_user_page__WEBPACK_IMPORTED_MODULE_3__["SelectMessageUserPage"]
      }];

      var SelectMessageUserPageRoutingModule = function SelectMessageUserPageRoutingModule() {
        _classCallCheck(this, SelectMessageUserPageRoutingModule);
      };

      SelectMessageUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectMessageUserPageRoutingModule);
      /***/
    },

    /***/
    "QllI":
    /*!********************************************************************************!*\
      !*** ./src/app/common-modal/select-message-user/select-message-user.module.ts ***!
      \********************************************************************************/

    /*! exports provided: SelectMessageUserPageModule */

    /***/
    function QllI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMessageUserPageModule", function () {
        return SelectMessageUserPageModule;
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


      var _select_message_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-message-user-routing.module */
      "HxVs");
      /* harmony import */


      var _select_message_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-message-user.page */
      "5VXg");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var SelectMessageUserPageModule = function SelectMessageUserPageModule() {
        _classCallCheck(this, SelectMessageUserPageModule);
      };

      SelectMessageUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_message_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectMessageUserPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_select_message_user_page__WEBPACK_IMPORTED_MODULE_6__["SelectMessageUserPage"]]
      })], SelectMessageUserPageModule);
      /***/
    },

    /***/
    "pUkq":
    /*!********************************************************************************!*\
      !*** ./src/app/common-modal/select-message-user/select-message-user.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function pUkq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGVjdC1tZXNzYWdlLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsZUFBQTtBQUFGIiwiZmlsZSI6InNlbGVjdC1tZXNzYWdlLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "xnRO":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-modal/select-message-user/select-message-user.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xnRO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n     <ion-toolbar>\n        <ion-searchbar style=\"padding-top: 15px;\" mode=\"ios\" placeholder=\"{{'search.search_user' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n      </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"students\" id=\"students\" *ngIf=\"users\" > \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let users of allUsers; let i=index\">\t\t\n\t\t\t<ion-item  >\n\t\t\t\t<ion-checkbox slot=\"end\" id=\"ch{{i}}\" (ionChange)=\"selectUser(users,$event,i)\" [checked]=\"selectedUsers.includes(users.user_no)\"></ion-checkbox>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{users.first_name}}</h4>\n\t\t\t    \t<p>{{users.username}}</p> \n\t\t\t    \t<!-- <p>{{users.user_no}}</p>  -->\n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t\t\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n\t\t\t    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\t\t\t  </ion-infinite-scroll>\n\n\t</div>\n\n</ion-content>\n<ion-footer>\n\t<ion-button  expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"sendUser()\">\n\t\t{{'sendmsg.select_user' | translate}}\n\t</ion-button>\n\t</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-modal-select-message-user-select-message-user-module-es5.js.map
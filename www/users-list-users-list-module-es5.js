(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-list-users-list-module"], {
    /***/
    "38c6":
    /*!*************************************************!*\
      !*** ./src/app/users-list/users-list.module.ts ***!
      \*************************************************/

    /*! exports provided: UsersListPageModule */

    /***/
    function c6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageModule", function () {
        return UsersListPageModule;
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


      var _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-list-routing.module */
      "zYJW");
      /* harmony import */


      var _users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-list.page */
      "sKqx");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _pipes_user_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/user-search.pipe */
      "wHzU");

      var UsersListPageModule = function UsersListPageModule() {
        _classCallCheck(this, UsersListPageModule);
      };

      UsersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersListPageRoutingModule"]],
        declarations: [_users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"], _pipes_user_search_pipe__WEBPACK_IMPORTED_MODULE_8__["UserSearchPipe"]]
      })], UsersListPageModule);
      /***/
    },

    /***/
    "igKj":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users-list/users-list.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function igKj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-icon style=\"font-size: 22px;\" name=\"person-add-outline\" (click)=\"addNewUser()\"></ion-icon>\n  \t</ion-buttons>\n\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n\n    <ion-title>{{'edit_user.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list  line=\"none\" class=\"list\" *ngIf=\"true\">\n  <ion-list-header class=\"list-header\">\n    <ion-item style=\"width: 100%;\">\n      <ion-searchbar mode=\"ios\" placeholder=\"{{'search.search_user' | translate}}\" id=\"search\" [(ngModel)]=\"userSearchValue\"></ion-searchbar>\n    </ion-item>\n  </ion-list-header>\n\n<div id=\"allUsers\" class=\"allUsers\">\n  <ion-card  *ngFor=\"let list of trimmedUsers  | userSearch : userSearchValue\" (click)=\"openEditPage(list)\">\n    <ion-card-header>\n      <ion-item class=\"item\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"list.pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\"> \n        </ion-avatar>\n        <ion-label>\n          <h2>{{list.first_name}}</h2>\n            <p>{{list.username}}</p>\n          <!-- <p *ngIf=\"list.classes.length\">{{'edit_user.user_assign' | translate}}:\n            <ion-badge color=\"primary\" mode=\"ios\" style=\"vertical-align: middle;\"></ion-badge></p> -->\n        </ion-label>\n      </ion-item>\n    </ion-card-header>\n    \n  </ion-card>\n  <div  *ngIf=\"!trimmedUsers.length || show_loading\">\n    <ion-card  class=\"text-left body-font card heigt-min\" *ngFor=\"let dummy of ' '.repeat(20).split(''), let x = index\">\t\t\n      <ion-item >\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h4><ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text></h4>\n          <p><ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text></p>\n        </ion-label>\n      </ion-item>\n    </ion-card> \n\n  </div>\n</div>\n</ion-list>\n<ion-list *ngIf=\"trimmedUsers.length<1 && noTeacher\">\n  <ion-list-header>\n    {{'edit_user.no_data' | translate}}\n  </ion-list-header>\n</ion-list>\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "nJLG":
    /*!*************************************************!*\
      !*** ./src/app/users-list/users-list.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function nJLG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list .list-header {\n  font-size: 16px;\n  font-weight: 700;\n  padding: unset;\n}\n\n.card .card-header {\n  padding: unset;\n  border: 0.2px solid #00000017;\n}\n\n.card .card-header .item p {\n  font-size: 10px;\n}\n\n.card .card-header .item p ion-badge {\n  font-size: 10px;\n}\n\n.card .card-content {\n  padding: unset;\n  margin: unset;\n}\n\n.card .card-content .item-lover .item-text {\n  min-width: 147px;\n  text-align: center;\n}\n\n.card .card-content .item-lover .row {\n  width: 100%;\n  text-align: center;\n}\n\n.card .card-content .item-lover .row .col ion-checkbox {\n  margin: 0px auto;\n  padding-top: 2px;\n}\n\n.allUsers {\n  --padding: 10px;\n}\n\nion-item p {\n  font-size: 12px;\n}\n\nion-item .item-inner {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0ssZUFBQTtFQUNBLGdCQUFBO0VBQ0YsY0FBQTtBQUFKOztBQUlJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBRFI7O0FBR1k7RUFDSSxlQUFBO0FBRGhCOztBQUVnQjtFQUNJLGVBQUE7QUFBcEI7O0FBS0k7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUhSOztBQUtZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUhoQjs7QUFLWTtFQUNRLFdBQUE7RUFDQSxrQkFBQTtBQUhwQjs7QUFLb0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBSHhCOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQVlBO0VBQ0ksZUFBQTtBQVRKOztBQVdBO0VBQ0MsWUFBQTtBQVREIiwiZmlsZSI6InVzZXJzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3R7XHJcblx0Lmxpc3QtaGVhZGVye1xyXG5cdFx0ICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdHBhZGRpbmc6IHVuc2V0O1xyXG5cdH1cclxufVxyXG4uY2FyZHtcclxuICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMDAwMDAxNztcclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgLml0ZW0tbG92ZXJ7XHJcbiAgICAgICAgICAgIC5pdGVtLXRleHR7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE0N3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmNvbHtcclxuICAgICAgICAgICAgICAgICAgICBpb24tY2hlY2tib3h7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWxsVXNlcnN7XHJcbiAgICAtLXBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gYm9yZGVyOiBub25lO1xyXG59XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "sKqx":
    /*!***********************************************!*\
      !*** ./src/app/users-list/users-list.page.ts ***!
      \***********************************************/

    /*! exports provided: UsersListPage */

    /***/
    function sKqx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPage", function () {
        return UsersListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_users_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./users-list.page.html */
      "igKj");
      /* harmony import */


      var _users_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users-list.page.scss */
      "nJLG");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UsersListPage = /*#__PURE__*/function () {
        function UsersListPage(navCtrl, translate, dataProvider, authProvider, zone, alertCtrl, route, router, modalController) {
          var _this = this;

          _classCallCheck(this, UsersListPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.zone = zone;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.router = router;
          this.modalController = modalController;
          this.allUsers = [];
          this.selectedUsers = [];
          this.trimmedUsers = [];
          this.noUser = false;
          this.show_loading = true;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              var isUpdated = _this.router.getCurrentNavigation().extras.state.isUpdated;

              if (isUpdated) {
                _this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));

                _this.getUsers(false);
              }
            }
          });
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
        }

        _createClass(UsersListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              // console.log('logged in');
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getUsers();
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this2 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var data = {
              'school_id': this.userDetails.details.school_id,
              'user_no': this.userDetails.details.user_no
            }; // if (loader) this.dataProvider.showLoading();

            this.dataProvider.getAllUsers(data).then(function (res) {
              // if (loader) this.dataProvider.hideLoading();
              _this2.show_loading = false;
              console.log('allUsersdata', res.data);

              if (res.session) {
                _this2.selectedUsers = res.data;

                if (_this2.selectedUsers.length > 1) {
                  _this2.trimmedUsers = _this2.selectedUsers.splice(0, 20); // if (loader) this.dataProvider.hideLoading();
                } else {
                  _this2.trimmedUsers = _this2.selectedUsers; // if (loader) this.dataProvider.hideLoading();
                }
              } else {
                _this2.noUser = true;
                console.log('err', res);
              }
            }, function (error) {
              _this2.noUser = true; // if (loader) this.dataProvider.hideLoading();

              _this2.show_loading = false;
              console.log(error);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this3 = this;

            this.show_loading = true;
            infiniteScroll.target.complete();
            setTimeout(function () {
              _this3.show_loading = false;
              console.log('this.trimmedUsers--', _this3.trimmedUsers);
              _this3.trimmedUsers = _this3.trimmedUsers.concat(_this3.selectedUsers.splice(0, 20));
              infiniteScroll.target.complete();
            }, 500);
          }
        }, {
          key: "addNewUser",
          value: function addNewUser() {
            this.router.navigate(['add-user']);
          }
        }, {
          key: "openEditPage",
          value: function openEditPage(user) {
            console.log("nav user1111", user);
            var navigation = {
              state: {
                user: user
              }
            };
            this.router.navigate(['edit-user-profile'], navigation);
          }
        }]);

        return UsersListPage;
      }();

      UsersListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      UsersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users-list',
        template: _raw_loader_users_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], UsersListPage);
      /***/
    },

    /***/
    "zYJW":
    /*!*********************************************************!*\
      !*** ./src/app/users-list/users-list-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: UsersListPageRoutingModule */

    /***/
    function zYJW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageRoutingModule", function () {
        return UsersListPageRoutingModule;
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


      var _users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users-list.page */
      "sKqx");

      var routes = [{
        path: '',
        component: _users_list_page__WEBPACK_IMPORTED_MODULE_3__["UsersListPage"]
      }];

      var UsersListPageRoutingModule = function UsersListPageRoutingModule() {
        _classCallCheck(this, UsersListPageRoutingModule);
      };

      UsersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersListPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=users-list-users-list-module-es5.js.map
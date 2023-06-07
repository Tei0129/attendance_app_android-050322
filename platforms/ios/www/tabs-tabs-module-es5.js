(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button selected=\"!isParent && !isStudent\" tab=\"classlist\"  *ngIf=\"!isParent && !isStudent\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button selected=\"isStudent\" tab=\"student-notes\" *ngIf=\"isStudent\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"warning-report\" *ngIf=\"isStudent\">\n      <ion-icon name=\"warning\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"delaylist\" *ngIf=\"!isParent && !isStudent && !isteacher\">\n      <ion-icon name=\"time-outline\"></ion-icon>\n    </ion-tab-button> \n\n    <ion-tab-button tab=\"follow-up-student\" *ngIf=\"!isParent && !isStudent \"> \n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-tab-button> <!-- isTM -->\n\n    <!-- <ion-tab-button tab=\"elearning-schools\" *ngIf=\"isStudent\">\n      <ion-icon name=\"time-outline\"></ion-icon>\n    </ion-tab-button> -->\n    <ion-tab-button tab=\"parentconnect\" *ngIf=\"isStudent\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button  tab=\"news\" *ngIf=\"!isParent\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"messages\" *ngIf=\"!isParent && !isStudent\">\n      <ion-icon name=\"mail-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button selected=\"isParent\" tab=\"children\" *ngIf=\"isParent\">\n      <ion-icon name=\"list-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"news\" *ngIf=\"isParent\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"parentconnect\" *ngIf=\"isParent\">\n      <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"private-message\" *ngIf=\"isParent || isStudent\">\n      <ion-icon name=\"mail-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/database/database.service */
      "HbOQ");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(dbProvider, authProvider) {
          var _this = this;

          _classCallCheck(this, TabsPage);

          this.dbProvider = dbProvider;
          this.authProvider = authProvider;
          this.loggedin = false;
          this.isParent = false;
          this.isStudent = false;
          this.isteacher = false;
          this.isTM = false;
          this.user = {
            name: "Guest",
            description: "Guest",
            image: "./assets/imgs/logo.png",
            userType: "guest"
          };
          this.authProvider.event.subscribe(function (res) {
            if (res) {
              _this.dbProvider.openDataBase().then(function () {
                if (localStorage.getItem("userloggedin")) {
                  _this.loggedin = true;

                  _this.setUserdetails(); // console.log(this.user);


                  if (_this.user.userType == 'parent') {
                    _this.isParent = true;
                    _this.isStudent = false;
                    _this.isTM = false;
                    _this.isteacher = false;
                  } else if (_this.user.userType == 'student') {
                    _this.isStudent = true;
                    _this.isParent = false;
                    _this.isTM = false;
                    _this.isteacher = false;
                  } else if (_this.user.userType == 'moderator') {
                    _this.isStudent = false;
                    _this.isParent = false;
                    _this.isTM = true;
                    _this.isteacher = false;
                  } else if (_this.user.userType == 'teacher') {
                    _this.isStudent = false;
                    _this.isParent = false;
                    _this.isTM = true;
                    _this.isteacher = true;
                  } else {
                    _this.isStudent = false;
                    _this.isParent = false;
                    _this.isTM = false;
                    _this.isteacher = false;
                  }
                }
              });
            }
          });
          this.dbProvider.openDataBase().then(function () {
            if (localStorage.getItem("userloggedin")) {
              _this.loggedin = true;

              _this.setUserdetails(); // console.log(this.user);


              if (_this.user.userType == 'parent') {
                _this.isParent = true;
                _this.isStudent = false;
                _this.isTM = false;
              } else if (_this.user.userType == 'student') {
                _this.isStudent = true;
                _this.isParent = false;
                _this.isTM = false;
              } else if (_this.user.userType == 'moderator' || _this.user.userType == 'teacher') {
                _this.isStudent = false;
                _this.isParent = false;
                _this.isTM = true;
              } else {
                _this.isStudent = false;
                _this.isParent = false;
                _this.isTM = false;
              }
            }
          });
        }

        _createClass(TabsPage, [{
          key: "setUserdetails",
          value: function setUserdetails() {
            if (localStorage.getItem("userloggedin")) {
              var userDetail = JSON.parse(localStorage.getItem("userloggedin"));
              this.user.name = userDetail.details.first_name + " " + userDetail.details.last_name;
              this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
              this.user.description = userDetail.details.school_name;

              if (userDetail.details.user_type == '1') {
                if (userDetail.details.school_details != '') {
                  this.user.description = userDetail.details.school_details;
                }

                this.user.userType = 'admin';
              } else if (userDetail.details.user_type == '2') {
                this.user.userType = 'teacher';
              } else if (userDetail.details.user_type == '3') {
                this.user.userType = 'moderator';
              } else if (userDetail.details.user_type == '4') {
                this.user.userType = 'parent';
              } else if (userDetail.details.user_type == '7') {
                this.user.userType = 'viewer';
              } else if (userDetail.details.user_type == '8') {
                this.user.userType = 'student';
              }
            } else {// this.user.name = "Guest";
              // this.user.image = "./assets/imgs/logo.png";
              // this.user.userType = 'guest';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-bar {\n  --background: #f8f8f8;\n}\n\nion-tab-button {\n  --background-focused: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNLLDJCQUFBO0FBRUwiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG5pb24tdGFiLWJ1dHRvbntcclxuXHQgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGJsYWNrO1xyXG5cdFxyXG59Il19 */";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
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


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "kB8F":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'classlist',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | classlist-classlist-module */
              "classlist-classlist-module").then(__webpack_require__.bind(null,
              /*! ../classlist/classlist.module */
              "GgPW")).then(function (m) {
                return m.ClasslistPageModule;
              });
            }
          }]
        }, {
          path: 'delaylist',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | delaylist-delaylist-module */
              "delaylist-delaylist-module").then(__webpack_require__.bind(null,
              /*! ../delaylist/delaylist.module */
              "dVcN")).then(function (m) {
                return m.DelaylistPageModule;
              });
            }
          }]
        }, {
          path: 'news',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | news-news-module */
              "news-news-module").then(__webpack_require__.bind(null,
              /*! ../news/news.module */
              "YXEz")).then(function (m) {
                return m.NewsPageModule;
              });
            }
          }]
        }, {
          path: 'messages',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | messages-messages-module */
              "messages-messages-module").then(__webpack_require__.bind(null,
              /*! ../messages/messages.module */
              "TdLt")).then(function (m) {
                return m.MessagesPageModule;
              });
            }
          }]
        }, {
          path: 'sendmessage',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | sendmessage-sendmessage-module */
              "sendmessage-sendmessage-module").then(__webpack_require__.bind(null,
              /*! ../sendmessage/sendmessage.module */
              "8Jp3")).then(function (m) {
                return m.SendmessagePageModule;
              });
            }
          }]
        }, {
          path: 'parentconnect',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | parentconnect-parentconnect-module */
              "parentconnect-parentconnect-module").then(__webpack_require__.bind(null,
              /*! ../parentconnect/parentconnect.module */
              "wx9S")).then(function (m) {
                return m.ParentconnectPageModule;
              });
            }
          }]
        }, {
          path: 'children',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | children-children-module */
              "children-children-module").then(__webpack_require__.bind(null,
              /*! ../children/children.module */
              "APEF")).then(function (m) {
                return m.ChildrenPageModule;
              });
            }
          }]
        }, {
          path: 'private-message',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | private-message-private-message-module */
              "private-message-private-message-module").then(__webpack_require__.bind(null,
              /*! ../private-message/private-message.module */
              "fO8F")).then(function (m) {
                return m.PrivateMessagePageModule;
              });
            }
          }]
        }, {
          path: 'student-notes',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | student-notes-student-notes-module */
              "student-notes-student-notes-module").then(__webpack_require__.bind(null,
              /*! ../student-notes/student-notes.module */
              "E6Hu")).then(function (m) {
                return m.StudentNotesPageModule;
              });
            }
          }]
        }, {
          path: 'elearning-schools',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | elearning-schools-elearning-schools-module */
              "elearning-schools-elearning-schools-module").then(__webpack_require__.bind(null,
              /*! ../elearning-schools/elearning-schools.module */
              "48fY")).then(function (m) {
                return m.ElearningSchoolsPageModule;
              });
            }
          }]
        }, {
          path: 'warning-report',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | warning-report-warning-report-module */
              "warning-report-warning-report-module").then(__webpack_require__.bind(null,
              /*! ../warning-report/warning-report.module */
              "jsql")).then(function (m) {
                return m.WarningReportPageModule;
              });
            }
          }]
        }, {
          path: 'follow-up-student',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | follow-up-student-follow-up-student-module */
              "follow-up-student-follow-up-student-module").then(__webpack_require__.bind(null,
              /*! ../follow-up-student/follow-up-student.module */
              "7Cvm")).then(function (m) {
                return m.FollowUpStudentPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/tabs/classlist',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/classlist',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map
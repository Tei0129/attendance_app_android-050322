(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-profile-edit-user-profile-module"], {
    /***/
    "/oO/":
    /*!*************************************************************!*\
      !*** ./src/app/edit-user-profile/edit-user-profile.page.ts ***!
      \*************************************************************/

    /*! exports provided: EditUserProfilePage */

    /***/
    function oO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserProfilePage", function () {
        return EditUserProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-user-profile.page.html */
      "kbXm");
      /* harmony import */


      var _edit_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-user-profile.page.scss */
      "VkXH");
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


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EditUserProfilePage = /*#__PURE__*/function () {
        function EditUserProfilePage(navCtrl, dataProvider, authProvider, translate, alertCtrl, network, route, router, zone, platform) {
          var _this = this;

          _classCallCheck(this, EditUserProfilePage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.network = network;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.platform = platform;
          this.user = {};
          this.classes = [];
          this.show_save_user_spinner = false;
          this.show_delete_user_spinner = false;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state.user;
              console.log("navData===>", _this.navData);
              _this.user.email_id = _this.navData.email_id;
              _this.user.first_name = _this.navData.first_name;
              _this.user.username = _this.navData.username;
              _this.user.user_type = _this.navData.user_type;
              _this.user.status = _this.navData.status;
              _this.user["class"] = _this.navData.classes;
            }
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });

          if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            console.log("userDetais::", this.userDetails);
          }

          this.getClasses();
        }

        _createClass(EditUserProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "saveUserProfile",
          value: function saveUserProfile() {
            var _this2 = this;

            if (this.user.password != this.user.c_pass) {
              this.dataProvider.showToast(this.lang.pass_not_match);
            } else {
              this.show_save_user_spinner = true;
              this.user.school_id = this.navData.school_id;
              this.user.userId = this.navData.user_no;
              this.user.user_no = this.userDetails.details.user_no;
              console.log('userData==>', this.user); // if(this.user.attendence_permit == true){
              //   this.user.attendence_permit = 1;
              // }else{
              //   this.user.attendence_permit = 0;
              // }

              var interval = setInterval(function () {
                //call other function whatever you want to execute
                clearInterval(interval);
                _this2.show_save_user_spinner = false;

                _this2.dataProvider.updateUserProfile(_this2.user, function (res) {
                  var navigation = {
                    state: {
                      isUpdated: true
                    }
                  };
                  console.log("navigation==>", navigation);

                  _this2.zone.run(function () {
                    _this2.router.navigate(['users-list'], navigation);
                  });
                });
              }, 2000);
            }
          }
        }, {
          key: "deleteUser",
          value: function deleteUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.delete_user,
                        backdropDismiss: true,
                        mode: 'ios',
                        buttons: [{
                          text: this.lang["delete"],
                          handler: function handler() {
                            _this3.show_delete_user_spinner = true;
                            var deleteData = {
                              users_user_no: _this3.navData.user_no,
                              user_no: _this3.userDetails.details.user_no,
                              school_id: _this3.userDetails.details.school_id,
                              session_id: _this3.userDetails.session_id
                            };
                            var interval = setInterval(function () {
                              //call other function whatever you want to execute
                              clearInterval(interval);
                              _this3.show_delete_user_spinner = false;

                              _this3.dataProvider.deleteUser(deleteData, function (res) {
                                var navigation = {
                                  state: {
                                    isUpdated: true
                                  }
                                };

                                _this3.zone.run(function () {
                                  _this3.router.navigate(['users-list'], navigation);
                                });
                              });
                            }, 2000);
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
                console.log("classes::", _this4.classes);
              }
            })["catch"](function (error) {
              _this4.dataProvider.hideLoading();

              _this4.dataProvider.errorALertMessage(error);
            });
          }
        }, {
          key: "check",
          value: function check() {
            console.log(this.user.attendence_permit);
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            console.log("ev", event);
            this.user["class"] = JSON.stringify(event.value);
            console.log("USER CLASS:: ", this.user["class"]);
          }
        }]);

        return EditUserProfilePage;
      }();

      EditUserProfilePage.ctorParameters = function () {
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
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      EditUserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-user-profile',
        template: _raw_loader_edit_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], EditUserProfilePage);
      /***/
    },

    /***/
    "1vwd":
    /*!***********************************************************************!*\
      !*** ./src/app/edit-user-profile/edit-user-profile-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: EditUserProfilePageRoutingModule */

    /***/
    function vwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserProfilePageRoutingModule", function () {
        return EditUserProfilePageRoutingModule;
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


      var _edit_user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-user-profile.page */
      "/oO/");

      var routes = [{
        path: '',
        component: _edit_user_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditUserProfilePage"]
      }];

      var EditUserProfilePageRoutingModule = function EditUserProfilePageRoutingModule() {
        _classCallCheck(this, EditUserProfilePageRoutingModule);
      };

      EditUserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditUserProfilePageRoutingModule);
      /***/
    },

    /***/
    "VkXH":
    /*!***************************************************************!*\
      !*** ./src/app/edit-user-profile/edit-user-profile.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function VkXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  margin: 5px;\n}\n.list .item {\n  --background: #e0e0e0;\n  --min-height: 47px;\n  margin: 5px;\n}\n.radio-div {\n  border: 1px solid darkgrey;\n  margin: 10px;\n}\n.radio-div .radio-head {\n  margin: 10px;\n  padding: 2px;\n  border-bottom: 1px solid darkgrey;\n}\n.radio-div ion-col {\n  border-right: 1px solid darkgrey;\n}\n.radio-div ion-col div {\n  float: left;\n}\n.time-row {\n  margin: 14px;\n  border: 1px solid gray;\n}\n.time-row ion-item {\n  width: 100%;\n}\n.time-row .input-item {\n  --min-height: 75px;\n}\n.time-row .input-item ion-input {\n  border: 1px solid black;\n  --padding-start: 5px;\n  width: 167px;\n  height: 33px;\n  border-radius: 6px;\n}\n.time-row .input-item span {\n  font-size: 11px;\n  color: red;\n}\nion-button {\n  text-transform: capitalize;\n}\nh3 {\n  font-size: 18px;\n}\n.option-list ion-list-header p {\n  margin: 0px 8px 0px 0px;\n}\n.option-list ion-col {\n  margin: unset;\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7QUFDRDtBQUFDO0VBQ0MscUJBQUE7RUFDTyxrQkFBQTtFQUNKLFdBQUE7QUFFTDtBQUNBO0VBQ0MsMEJBQUE7RUFDRyxZQUFBO0FBRUo7QUFEQztFQUNLLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFHTjtBQURDO0VBQ0ssZ0NBQUE7QUFHTjtBQUFNO0VBQ1MsV0FBQTtBQUVmO0FBR0E7RUFDSyxZQUFBO0VBQ0Qsc0JBQUE7QUFBSjtBQUNJO0VBQ0MsV0FBQTtBQUNMO0FBQ0k7RUFDSyxrQkFBQTtBQUNUO0FBQVM7RUFDQyx1QkFBQTtFQUNILG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDSSxrQkFBQTtBQUVYO0FBQVM7RUFDQyxlQUFBO0VBQ0gsVUFBQTtBQUVQO0FBRUE7RUFDSywwQkFBQTtBQUNMO0FBRUE7RUFDQyxlQUFBO0FBQ0Q7QUFHRTtFQUNDLHVCQUFBO0FBQUg7QUFHQTtFQUNLLGFBQUE7RUFDRCxjQUFBO0FBREoiLCJmaWxlIjoiZWRpdC11c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3R7XHJcblx0bWFyZ2luOjVweDtcclxuXHQuaXRlbXtcclxuXHRcdC0tYmFja2dyb3VuZDogI2UwZTBlMDtcclxuXHQgICAgICAgIC0tbWluLWhlaWdodDogNDdweDtcclxuXHQgICAgbWFyZ2luOiA1cHg7XHJcblx0fVxyXG59XHJcbi5yYWRpby1kaXZ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblx0LnJhZGlvLWhlYWR7XHJcblx0XHQgICAgbWFyZ2luOiAxMHB4O1xyXG5cdFx0ICAgIHBhZGRpbmc6IDJweDtcclxuXHRcdCAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyZXk7XHJcblx0fVxyXG5cdGlvbi1jb2x7XHJcblx0XHQgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2dyZXk7XHJcblx0XHQgICAgLy8gcGFkZGluZzogdW5zZXQ7XHJcblx0XHQgICAgLy8gbWFyZ2luOiB1bnNldDtcclxuXHRcdCAgICBkaXZ7XHJcblx0XHQgICAgXHQgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHRcdFx0XHRcdC8vcGFkZGluZzogNHB4IDBweCAxMHB4IDY1cHg7XHJcblx0XHQgICAgfVxyXG5cdH1cclxufVxyXG4udGltZS1yb3d7XHJcblx0ICAgIG1hcmdpbjogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBpb24taXRlbXtcclxuICAgIFx0d2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtaXRlbXtcclxuICAgIFx0ICAgIC0tbWluLWhlaWdodDogNzVweDtcclxuICAgIFx0ICAgIGlvbi1pbnB1dHtcclxuICAgIFx0ICAgIFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblx0XHRcdCAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuXHRcdFx0ICAgIHdpZHRoOiAxNjdweDtcclxuXHRcdFx0ICAgIGhlaWdodDogMzNweDtcclxuXHRcdFx0ICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBcdCAgICB9XHJcbiAgICBcdCAgICBzcGFue1xyXG4gICAgXHQgICAgXHRmb250LXNpemU6IDExcHg7XHJcbiAgICBcdFx0XHRjb2xvcjogcmVkO1xyXG4gICAgXHQgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1idXR0b257XHJcblx0ICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxufVxyXG5oM3tcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm9wdGlvbi1saXN0e1xyXG5cdGlvbi1saXN0LWhlYWRlcntcclxuXHRcdHB7XHJcblx0XHRcdG1hcmdpbjogMHB4IDhweCAwcHggMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuaW9uLWNvbHtcclxuXHQgICAgbWFyZ2luOiB1bnNldDtcclxuICAgIHBhZGRpbmc6IHVuc2V0O1xyXG59XHRcclxufSJdfQ== */";
      /***/
    },

    /***/
    "YvNW":
    /*!***************************************************************!*\
      !*** ./src/app/edit-user-profile/edit-user-profile.module.ts ***!
      \***************************************************************/

    /*! exports provided: EditUserProfilePageModule */

    /***/
    function YvNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserProfilePageModule", function () {
        return EditUserProfilePageModule;
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


      var _edit_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-user-profile-routing.module */
      "1vwd");
      /* harmony import */


      var _edit_user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-user-profile.page */
      "/oO/");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var EditUserProfilePageModule = function EditUserProfilePageModule() {
        _classCallCheck(this, EditUserProfilePageModule);
      };

      EditUserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditUserProfilePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
        declarations: [_edit_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditUserProfilePage"]]
      })], EditUserProfilePageModule);
      /***/
    },

    /***/
    "kbXm":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-profile/edit-user-profile.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kbXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button>\n  \t\t</ion-menu-button>\n  \t</ion-buttons>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'user_profile.title'| translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<ion-list lines=\"none\" class=\"list\">\n\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'user_profile.email'| translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"user.email_id\"   placeholder=\"{{'user_profile.email'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'user_profile.name'| translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"user.first_name\"   placeholder=\"{{'user_profile.name'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'user_profile.user_id'| translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"user.username\"   placeholder=\"{{'user_profile.user_id'| translate}}\" readonly=\"true\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'user_profile.password'| translate}}</ion-label>\n\t\t\t<ion-input type=\"password\" [(ngModel)]=\"user.password\"  placeholder=\"{{'user_profile.password'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\" class=\"item\">\n\t\t\t<ion-label position=\"floating\">{{'user_profile.c_pass'| translate}}</ion-label>\n\t\t\t<ion-input type=\"password\" [(ngModel)]=\"user.c_pass\"  placeholder=\"{{'user_profile.c_pass'| translate}}\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>{{'user_profile.user_type' | translate}}</ion-label>\n\t\t\t<ion-select interface=\"action-sheet\" mode=\"ios\" [(ngModel)]=\"user.user_type\"   [value]=\"user.user_type\">\n\t\t\t  <ion-select-option value=\"3\">{{'user_profile.Moderator'| translate}}</ion-select-option>\n\t\t\t  <ion-select-option value=\"1\">{{'user_profile.Admin'| translate}}</ion-select-option>\n\t\t\t  <ion-select-option value=\"5\">{{'user_profile.Register'| translate}}</ion-select-option>\n\t\t\t  <ion-select-option value=\"6\">{{'user_profile.Medical'| translate}}</ion-select-option>\n\t\t\t  <ion-select-option value=\"7\">{{'user_profile.Viewer'| translate}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t  </ion-item>\n\t</ion-list>\n\t<!-- <div class=\"radio-div\">\n\t\t<ion-radio-group [(ngModel)]=\"user.user_type\"   [value]=\"user.user_type\">\n\t\t\t\t<h3 class=\"radio-head\">{{'user_profile.user_type'| translate}}</h3>\n\t\t\t<ion-row class=\"user_type\">\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"3\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'user_profile.Moderator'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"1\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'user_profile.Admin'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"5\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'user_profile.Register'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"6\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'user_profile.Medical'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\" >\n\t\t\t\t\t      <ion-radio value=\"7\"></ion-radio>\n\t\t\t\t\t      <div>\t\n\t\t\t\t\t      \t<ion-label>{{'user_profile.Viewer'| translate}}</ion-label>\n\t\t\t\t\t      </div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-radio-group>\n\t</div> -->\n\t<ion-row class=\"time-row\">\n\t\t<ion-item>\n\t\t\t<ion-toggle color=\"primary\" slot=\"end\" (ionChange)=\"check()\" [(ngModel)]=\"user.attendence_permit\" ></ion-toggle>\n\t\t\t<h3>{{'user_profile.edit_permission'| translate}}</h3>\n\t\t</ion-item>\n\t\t<ion-item class=\"input-item\">\n\t\t\t<div>\n\t\t\t\t<ion-input [(ngModel)]=\"user.time\"  type=\"number\" placeholder=\"{{'user_profile.time'|translate}}\" ></ion-input>\n\t\t\t\t<span>{{'user_profile.note'| translate}}: {{'user_profile.input_time_type'| translate}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>{{'user_profile.class'| translate}}</ion-label>\n\t\t\t <ionic-selectable style=\"height: 6vh; margin-top: -2px;overflow: hidden;\" \n\t\t\t  [ngModelOptions]=\"{standalone: true}\"\n\t\t\t  [(ngModel)]=\"user.class\"\n\t\t\t  [isMultiple]=\"true\"\n\t\t\t  [items]=\"classes\"\n\t\t\t  itemValueField=\"cid\"\n\t\t\t  itemTextField=\"name\"\n\t\t\t  (onChange)=\"portChange($event)\"\n\t\t\t  [canSearch]=\"true\">\n\t\t\t</ionic-selectable>\n\t\t  </ion-item>\n\t</ion-row>\n\t<ion-list >\n\t  <ion-radio-group [value]=\"user.status\" [(ngModel)]=\"user.status\">\n\t    <ion-list-header>\n\t      <h3>{{'user_profile.action'| translate}}</h3>\n\t    </ion-list-header>\n\t    <ion-row>\n\t    \t<ion-col size=\"6\">\n\t\t\t    <ion-item>\n\t\t\t      <ion-label>{{'user_profile.inactive'| translate}}</ion-label>\n\t\t\t      <ion-radio slot=\"start\" value=\"0\"></ion-radio>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    \t<ion-col size=\"6\">\n\t\t\t    <ion-item>\n\t\t\t      <ion-label>{{'user_profile.active'| translate}}</ion-label>\n\t\t\t      <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n\t\t\t    </ion-item>\n\t    \t</ion-col>\n\t    </ion-row>\n\t  </ion-radio-group>\n\t</ion-list>\n</ion-content>\n<ion-footer style=\"background: #fff;\">\n\t<ion-button style=\"width: 99%;\"  expand=\"\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"saveUserProfile()\"><ion-spinner name=\"crescent\" *ngIf=\"show_save_user_spinner\"></ion-spinner><span *ngIf=\"!show_save_user_spinner\"> {{'user_profile.save' | translate}} </span></ion-button>\n\n\t<ion-button style=\"width: 99%;\"   expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"danger\" (click)=\"deleteUser()\"> <ion-spinner name=\"crescent\" *ngIf=\"show_delete_user_spinner\"></ion-spinner><span *ngIf=\"!show_delete_user_spinner\">{{'user_profile.delete' | translate}}</span> </ion-button>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-user-profile-edit-user-profile-module-es5.js.map
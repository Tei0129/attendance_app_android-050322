(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
    /***/
    "6AQs":
    /*!*******************************************!*\
      !*** ./src/app/messages/messages.page.ts ***!
      \*******************************************/

    /*! exports provided: MessagesPage */

    /***/
    function AQs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messages.page.html */
      "J2ao");
      /* harmony import */


      var _messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages.page.scss */
      "fOj/");
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
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/loader/loader.component */
      "vPOg");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(navCtrl, //public app: App,
        translate, dataProvider, authProvider, popoverController, alertCtrl, router) {
          var _this = this;

          _classCallCheck(this, MessagesPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.popoverController = popoverController;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.notifications = [];
          this.userDetails = {};
          this.lang = {};
          this.imageModal = false;
          this.imageUrl = "";
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.dataProvider.language.subscribe(function (resq) {
            _this.translate.get("alertmessages").subscribe(function (res) {
              // console.log(this.lang);
              _this.lang = res;
            });
          });
          this.authProvider.event.subscribe(function (res) {
            //  console.log('change',res)
            if (res.changeUser) {
              _this.reloadData();
            }
          });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */


        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.presentPopover();

            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.userType = this.userDetails.details.user_type;
              var data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
              };
              this.dataProvider.getNotifications(data).then(function (response) {
                _this2.dissmissPopOver();

                if (response.session) {
                  _this2.notifications = response.data;

                  if (_this2.notifications.length == 0) {
                    _this2.noRecordFound = _this2.lang.no_private_msg;
                  }
                } else {
                  _this2.authProvider.flushLocalStorage();

                  _this2.router.navigate(['login'], {
                    replaceUrl: true
                  });

                  _this2.dataProvider.errorALertMessage(response.message); //  this.app.getRootNav().setRoot("LoginPage");

                }
              })["catch"](function (error) {
                console.log(error);

                _this2.dissmissPopOver(); // this.dataProvider.errorALertMessage(error);

              });
            } else {
              this.dissmissPopOver();
              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              }); // this.app.getRootNav().setRoot("LoginPage");
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.reloadData();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "presentPopover",
          value: function presentPopover() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                        backdropDismiss: true,
                        //event: ev,
                        translucent: false,
                        // animated:true,
                        cssClass: 'loaderStyle'
                      });

                    case 2:
                      this.popOver = _context.sent;
                      return _context.abrupt("return", this.popOver.present());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dissmissPopOver",
          value: function dissmissPopOver() {
            this.popOver.dismiss();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this3 = this;

            //    this.presentPopover();
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.userType = this.userDetails.details.user_type;
              var data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
              };
              this.dataProvider.getNotifications(data).then(function (response) {
                //  this.dissmissPopOver();
                if (response.session) {
                  _this3.notifications = response.data;

                  if (_this3.notifications.length == 0) {
                    _this3.noRecordFound = _this3.lang.no_private_msg;
                  }
                } else {
                  _this3.authProvider.flushLocalStorage();

                  _this3.router.navigate(['login'], {
                    replaceUrl: true
                  });

                  _this3.dataProvider.errorALertMessage(response.message); //  this.app.getRootNav().setRoot("LoginPage");

                }
              })["catch"](function (error) {
                console.log(error); // this.dissmissPopOver();
                // this.dataProvider.errorALertMessage(error);
              });
            } else {
              // this.dissmissPopOver();
              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              }); // this.app.getRootNav().setRoot("LoginPage");
            }
          }
          /**
           * Open mail composer page
           */

        }, {
          key: "openComposer",
          value: function openComposer() {
            // this.navCtrl.push("SendmessagePage")
            this.router.navigate(['tabs/sendmessage']);
          }
          /**
           * to delete the notification
           * @param notificationId notification id which user wants to delete
           * @param index index of the notification message
           */

        }, {
          key: "deleteNotification",
          value: function deleteNotification(notificationId, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        message: this.lang.want_to_delete,
                        backdropDismiss: false,
                        buttons: [{
                          text: this.lang.no
                        }, {
                          text: this.lang.yes,
                          handler: function handler() {
                            _this4.presentPopover();

                            var data = {
                              user_no: _this4.userDetails.details.user_no,
                              nid: notificationId,
                              session_id: _this4.userDetails.session_id
                            };

                            _this4.dataProvider.deleteNotification(data).then(function (response) {
                              _this4.dissmissPopOver();

                              if (response.session) {
                                _this4.dataProvider.showToast(response.message);

                                _this4.notifications.splice(index, 1);
                              } else {
                                _this4.authProvider.flushLocalStorage();

                                _this4.dataProvider.errorALertMessage(response.message); //this.app.getRootNav().setRoot("LoginPage");

                              }
                            })["catch"](function (error) {
                              _this4.dissmissPopOver();

                              _this4.dataProvider.errorALertMessage(error);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openImageContainer",
          value: function openImageContainer(url) {
            this.imageUrl = url;
            this.imageModal = true;
          }
        }, {
          key: "hideUserImageModal",
          value: function hideUserImageModal(event) {
            if (event.target.className == "custom-modal-main") {
              this.imageModal = false;
            }
          }
        }, {
          key: "downloadImage",
          value: function downloadImage(imageUrl) {
            var _this5 = this;

            this.presentPopover();
            this.dataProvider.downloadImage(imageUrl).then(function (res) {
              _this5.dissmissPopOver();

              _this5.dataProvider.showToast(_this5.lang.download_complete);
            })["catch"](function (error) {
              _this5.dissmissPopOver();

              _this5.dataProvider.errorALertMessage(error);
            });
          }
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], MessagesPage);
      /***/
    },

    /***/
    "J2ao":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function J2ao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'messages.pagetitle' | translate}}\n      <ion-icon *ngIf=\"userType=='1' || userType=='7' || userType=='8'\" name=\"add-outline\" class=\"add-circle\" item-end\n        color=\"icon-header\" (click)=\"openComposer()\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf = \"notifications?.length > 0\">\n    <ion-card class=\"student-class\" *ngFor=\"let notification of notifications; let i = index;\">\n      <ion-card-content>\n        <ion-item no-padding class=\"no-padding mssg-item\" lines=\"none\">\n          <ion-avatar  class=\"item-start\" slot=\"start\">\n            <img [src]=\"notification.pic\">\n          </ion-avatar>\n          <ion-label>\n          <div class=\"title-icon\">\n            <h2>{{notification.first_name}}</h2>\n            <ion-icon  class=\"item-right\" name=\"trash\" color=\"danger\" (click)=\"deleteNotification(notification.ID, i)\">\n            </ion-icon>\n          </div>\n          <!-- <h2 *ngIf=\"notification.title\">{{notification.title}}</h2> -->\n          <div class=\"title-icon\">\n            <p>{{notification.notification}}</p>\n            <ion-icon name=\"attach\" item-right *ngIf=\"notification.notification_image != '' && notification.notification_image\" color=\"menu-color\"\n              (click)=\"openImageContainer(notification.notification_image)\"></ion-icon>\n          </div>\n          <span style=\"font-size: 10px; float: left;\">{{notification.date| dateFormat}}</span>\n        </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <div class=\"no-record\">\n    <ion-label text-center class=\"text-center norecord-found\" *ngIf=\"notifications?.length == 0\">{{noRecordFound}}</ion-label>\n  </div>\n</ion-content>\n\n<div class=\"custom-modal-main\" *ngIf=\"imageModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-content\">\n      <img [src]=\"imageUrl\" imageViewer>\n      <div class=\"download-button\">\n        <button ion-button small icon-only clear (click)=\"downloadImage(imageUrl)\">\n          <ion-icon name=\"download\"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "JGbt":
    /*!*****************************************************!*\
      !*** ./src/app/messages/messages-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MessagesPageRoutingModule */

    /***/
    function JGbt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
        return MessagesPageRoutingModule;
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.page */
      "6AQs");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
      }];

      var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
        _classCallCheck(this, MessagesPageRoutingModule);
      };

      MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagesPageRoutingModule);
      /***/
    },

    /***/
    "TdLt":
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.module.ts ***!
      \*********************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function TdLt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messages-routing.module */
      "JGbt");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "6AQs");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "fOj/":
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function fOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-messages:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 27px;\n}\napp-messages:host p {\n  white-space: normal;\n  margin-top: 5px !important;\n  width: 92%;\n}\napp-messages:host .title-icon {\n  width: 100%;\n  position: relative;\n}\napp-messages:host .title-icon ion-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0 !important;\n}\napp-messages:host .custom-modal-content {\n  margin: 0 !important;\n}\napp-messages:host .no-record {\n  width: 100%;\n  text-align: center;\n  padding-top: 52px;\n  color: #988f8f;\n}\napp-messages:host ion-card-content {\n  padding: 2px 0px 9px 0px;\n}\napp-messages:host ion-card-content .mssg-item .title-icon p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 0.9rem;\n  line-height: normal;\n  text-overflow: inherit;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQURaO0FBSUk7RUFDSSxvQkFBQTtBQUZSO0FBSUk7RUFDUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGWjtBQUtJO0VBQ1Esd0JBQUE7QUFIWjtBQVFnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFOcEIiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW1lc3NhZ2VzOmhvc3Qge1xyXG4gICAgLmFkZC1jaXJjbGV7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIH1cclxuICAgXHJcbiAgICBwe1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXN0b20tbW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uby1yZWNvcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk4OGY4ZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMHB4IDlweCAwcHg7XHJcblxyXG4gICAgICAgIC5tc3NnLWl0ZW17XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtaWNvbntcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=messages-messages-module-es5.js.map
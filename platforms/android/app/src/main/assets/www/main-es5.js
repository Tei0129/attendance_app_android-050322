(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/AaM":
    /*!**********************************************!*\
      !*** ./src/app/service/auth/auth.service.ts ***!
      \**********************************************/

    /*! exports provided: AuthService */

    /***/
    function AaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../database/database.service */
      "HbOQ");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/loader/loader.component */
      "vPOg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //import { LoginModel } from '../../model/login.model';
      //import { Events } from 'ionic-angular';


      var AuthService = /*#__PURE__*/function () {
        /**
          * Represents a Auth provider from API.
          * @constructor
          * @param {Http} http - for making http request.
          * @param {Events} events - events for the app
        */
        function AuthService(http, network, platform, dbProvider, popoverController, router, storage) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.network = network;
          this.platform = platform;
          this.dbProvider = dbProvider;
          this.popoverController = popoverController;
          this.router = router;
          this.storage = storage;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.eventChangeUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * Login function from the API
         * @param user: Object of LoginModel
         */


        _createClass(AuthService, [{
          key: "changeUser",
          value: function changeUser(peram) {
            var em = {
              "changeUser": peram
            };
            this.event.emit(em);
          }
        }, {
          key: "publishEvent",
          value: function publishEvent(peram) {
            var em = {
              "loggedin": peram
            };
            this.event.emit(em);
          }
        }, {
          key: "piblisEvenetActiveLink",
          value: function piblisEvenetActiveLink(param) {
            var em = {
              "activeLink": param
            };
            this.event.emit(em);
          }
        }, {
          key: "deleteNote",
          value: function deleteNote(param) {
            var em = {
              "deleteNote": param
            };
            this.event.emit(em);
          }
        }, {
          key: "doLogin",
          value: function doLogin(user) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                  user['lang_code'] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].lang_code;

                  var body = _this.makeObjectToUrlParams(user);

                  header.append('Content-Type', 'application/json');

                  _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + 'login', body, {
                    headers: header
                  }).subscribe(function (response) {
                    var resObj = response;

                    if (resObj.success) {
                      localStorage.setItem("userloggedin", JSON.stringify(resObj));
                      resolve(resObj);
                    } else {
                      reject(resObj.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                  });
                } else {
                  reject("الرجاء التأكد من اتصالك بالانترنت");
                }
              });
            });
          }
          /**
           * Register School
           * @param school: school object to register
           */

        }, {
          key: "registerSchool",
          value: function registerSchool(school) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](); //school['lang_code'] = environment.lang_code;

                  var body = _this2.makeObjectToUrlParams(school);

                  headers.append('Content-Type', 'application/json');

                  _this2.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + 'schoolRegister', body, {
                    headers: headers
                  }).subscribe(function (response) {
                    var resObj = response;

                    if (resObj.success == true) {
                      resolve(resObj.msg);
                    } else {
                      reject(resObj.msg);
                    }
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                  });
                } else {
                  reject("الرجاء التأكد من اتصالك بالانترنت");
                }
              });
            });
          }
          /**
           * Logout function
           * @param data - user_no, session_id
           */

        }, {
          key: "doLogout",
          value: function doLogout(data, option) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();

                  var body = _this3.makeObjectToUrlParams(data);

                  header.append('Content-Type', 'application/json');

                  _this3.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + 'logout', body, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response.success) {
                      _this3.flushLocalStorage();

                      var em = {
                        "loggedin": false
                      };

                      _this3.event.emit(em);

                      _this3.publishEvent(false);

                      if (!option) {
                        var oldUser = JSON.parse(localStorage.getItem("earlyLogin"));

                        if (oldUser) {
                          if (oldUser.length > 1) {
                            reject(false);

                            _this3.logInOtherAccount(data);
                          } else {
                            localStorage.removeItem("earlyLogin");
                            resolve(true);
                          }
                        } else {
                          localStorage.removeItem("earlyLogin");
                          resolve(true);
                        }
                      } else {
                        resolve(true);
                      }
                    } else {
                      reject(response.json().msg);
                    }
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                  });
                } else {
                  reject("الرجاء التأكد من اتصالك بالانترنت");
                }
              });
            });
          }
        }, {
          key: "logInOtherAccount",
          value: function logInOtherAccount(data) {
            var _this4 = this;

            var ind;
            var loggedinUser;

            if (localStorage.getItem('earlyLogin')) {
              loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
              setTimeout(function (res) {
                console.log('here1', loggedinUser);

                for (var i = 0; i < loggedinUser.length; i++) {
                  if (loggedinUser[i].user_no == data.user_no) {
                    ind = i;
                    console.log('here', i);
                  }
                }

                loggedinUser.splice(ind, 1);
                localStorage.setItem("earlyLogin", JSON.stringify(loggedinUser));
                console.log('here2', loggedinUser);

                if (loggedinUser) {
                  if (loggedinUser.length > 0) {
                    _this4.logInOldUser(loggedinUser[0]);
                  } else {
                    _this4.router.navigate(['login']);
                  }
                } else {
                  _this4.router.navigate(['login']);
                }
              }, 400);
            }
          }
        }, {
          key: "logInOldUser",
          value: function logInOldUser(users) {
            var _this5 = this;

            console.log('next', users);
            this.presentPopover('');
            this.doLogin(users).then(function (response) {
              console.log('res', response);

              _this5.publishEvent(true);

              _this5.changeUser(true);

              if (response.details.user_type == '4') {
                _this5.router.navigate(['tabs/children'], {
                  replaceUrl: true
                });
              } else if (response.details.user_type == '8') {
                _this5.router.navigate(['tabs/student-notes'], {
                  replaceUrl: true
                });
              } else {
                _this5.router.navigate(['tabs'], {
                  replaceUrl: true
                });
              }
            })["catch"](function (error) {});
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popOver;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
                        backdropDismiss: true,
                        //event: ev,
                        translucent: false,
                        // animated:true,
                        cssClass: 'loaderStyle'
                      });

                    case 2:
                      popOver = _context.sent;
                      _context.next = 5;
                      return popOver.present();

                    case 5:
                      setTimeout(function (res) {
                        popOver.dismiss();
                      }, 2000);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /** Function to convert object into param string
            * @param {Object} data - contains the properties to post to API
            * @returns Param string
          */

        }, {
          key: "makeObjectToUrlParams",
          value: function makeObjectToUrlParams(data) {
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            Object.keys(data).forEach(function (key) {
              body = body.append(key, data[key]);
            }); //let body: HttpParams = new HttpParams();
            // Object.keys(data).map((key) => {
            // 	console.log(key);
            //   body.set(key, data[key]);
            // })

            console.log(body);
            return body;
          }
          /**
           * Clear the localstorage
           */

        }, {
          key: "flushLocalStorage",
          value: function flushLocalStorage() {
            localStorage.removeItem("userloggedin");
            this.dbProvider.deleteDataBase();
            localStorage.removeItem("attendance");
            this.storage.clear();
          }
          /**
           * Check whether network is available or not
           */

        }, {
          key: "getNetworkInformation",
          value: function getNetworkInformation() {
            var _this6 = this;

            return new Promise(function (resolve) {
              if (_this6.platform.is('cordova')) {
                if (_this6.network.type == _this6.network.Connection.UNKNOWN || _this6.network.type == _this6.network.Connection.NONE) {
                  resolve(false);
                } else {
                  resolve(true);
                }
              } else {
                resolve(true);
              }
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], AuthService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/kamranfaiz/Downloads/attendance-app/attendance_app_android-050322/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0165":
    /*!******************************************************!*\
      !*** ./src/app/service/document/document.service.ts ***!
      \******************************************************/

    /*! exports provided: DocumentService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
        return DocumentService;
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");

      var DocumentService = /*#__PURE__*/function () {
        function DocumentService(iab) {
          _classCallCheck(this, DocumentService);

          this.iab = iab;
        }

        _createClass(DocumentService, [{
          key: "openPdf__OLD",
          value: function openPdf__OLD(path) {
            //use some really slow page for testing
            //if you have a spinner.html, you can load that instead of path here in inappbrowser, but make sure it works in all devices.
            var ref = this.iab.create(path, '_blank'); //spinner html

            var spinner = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,height=device-height,initial-scale=1'><style>.loader {position: absolute;    margin-left: -2em;    left: 50%;    top: 50%;    margin-top: -2em;    border: 5px solid #f3f3f3;    border-radius: 50%;    border-top: 5px solid #3498db;    width: 50px;    height: 50px;    -webkit-animation: spin 1.5s linear infinite;    animation: spin 1.5s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform:rotate(360deg); }}</style></head><body><div class='loader'></div></body></html>"; //intended webpage is loaded here (facebook)

            ref.executeScript({
              code: "(function() {document.write(\"" + spinner + "\");window.location.href='" + path + "';})()"
            });
          }
        }, {
          key: "openPdf",
          value: function openPdf(url, isFile) {
            console.log('calling openPdf :::', url); //	url="https://ionicframework.com/docs/native/in-app-browser";

            if (isFile) {
              url = url + '.pdf';
            }

            window.open(url, '_system'); //  	this.winRef = (<any>window).open(url,'_blank','location=yes,hidden=no,enableViewportScale=yes,toolbar=no,hardwareback=yes');
            //  	// this.winRef.insertCSS({ code: ".loader {position: absolute;    margin-left: -2em;    left: 50%;    top: 50%;    margin-top: -2em;    border: 5px solid #f3f3f3;    border-radius: 50%;    border-top: 5px solid #3498db;    width: 50px;    height: 50px;    -webkit-animation: spin 1.5s linear infinite;    animation: spin 1.5s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform:rotate(360deg); }}" });
            //  	// this.winRef.executeScript({ code: "(function() {document.body.classList.add('loader');})()"});
            //  	let spinner ="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,height=device-height,initial-scale=1'><style>.loader {position: absolute;    margin-left: -2em;    left: 50%;    top: 50%;    margin-top: -2em;    border: 5px solid #f3f3f3;    border-radius: 50%;    border-top: 5px solid #3498db;    width: 50px;    height: 50px;    -webkit-animation: spin 1.5s linear infinite;    animation: spin 1.5s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform:rotate(360deg); }}</style></head><body><div class='loader'></div></body></html>";
            // //intended webpage is loaded here (facebook)
            // this.winRef.executeScript({code: "(function() {document.write(\""+spinner+"\");})()"});
            //  	this.winRef.addEventListener('loadstart', ()=>{
            //  	//	alert('calling load start');
            //  	}); 
            //    this.winRef.addEventListener('loadstop', ()=>{
            //    //	alert('calling load stop');
            // this.winRef.executeScript({code: "(function() {document.remove(\""+spinner+"\");window.location.href='"+url+"';})()"});
            //    	this.winRef.executeScript({ code: "(function() {document.body.classList.remove('loader');})()"});
            //    }); 
            //    this.winRef.addEventListener('loaderror', (e:any)=>{
            //    	alert('calling loaderror');
            //    }); 
          }
        }]);

        return DocumentService;
      }();

      DocumentService.ctorParameters = function () {
        return [{
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
        }];
      };

      DocumentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])], DocumentService);
      /***/
    },

    /***/
    "04TA":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-student-profile/edit-student-profile.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"body\">\n\t<ion-icon class=\"edit-icon\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n\t<ion-row class=\"input-row\">\n\t\t<ion-item class=\"item\">\n\t\t\t<ion-label>{{'edit_student.name' | translate}}</ion-label>\n\t\t\t<ion-input type=\"text\" placeholder=\"{{studentName}}\" value=\"{{studentName}}\" id=\"input\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item class=\"item\">\n\t\t\t<ion-label>{{'edit_student.class' | translate}}</ion-label>\n\t\t\t<ion-select placeholder=\"{{student.course_name}}\" value=\"{{studentSemester}}\" id=\"select\" interface=\"popover\">\n\t\t\t\t<ion-select-option *ngFor=\"let c of classes\" value={{c.cid}}>{{c.name}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t</ion-row>\n\n\t<ion-row class=\"btn-row\">\n\t\t<ion-col>\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"saveChanges()\">{{'edit_student.save' | translate}}</ion-button>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\" (click)=\"deleteClass()\">{{'edit_student.delete_class' | translate}}</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n\t\n</div>\n";
      /***/
    },

    /***/
    "1Ee9":
    /*!*****************************************************************!*\
      !*** ./src/app/connect-new-message/connect-new-message.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ConnectNewMessagePage */

    /***/
    function Ee9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectNewMessagePage", function () {
        return ConnectNewMessagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_connect_new_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./connect-new-message.page.html */
      "zdC0");
      /* harmony import */


      var _connect_new_message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./connect-new-message.page.scss */
      "sdmF");
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConnectNewMessagePage = /*#__PURE__*/function () {
        /**
         * Class list constructor
         * @param navCtrl Use for navigation between pages
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param viewCtrl View controller
         */
        function ConnectNewMessagePage(navCtrl, viewCtrl, dataProvider, authProvider, translate, camera, alertCtrl, router) {
          var _this7 = this;

          _classCallCheck(this, ConnectNewMessagePage);

          this.navCtrl = navCtrl;
          this.viewCtrl = viewCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.camera = camera;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.userDetails = {};
          this.message = {
            title: '',
            message: '',
            ticketImage: ''
          };
          this.ticketImage = '';
          this.lang = {};
          this.translate.get("alertmessages").subscribe(function (res) {
            _this7.lang = res;
          });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */


        _createClass(ConnectNewMessagePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
          }
          /**
           * For dismissing the modal
           */

        }, {
          key: "dismiss",
          value: function dismiss() {
            this.viewCtrl.dismiss();
          }
          /**
           * Send message to provider
           */

        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this8 = this;

            if (this.message.title.length > 35) {
              this.dataProvider.showToast(this.lang.max_title);
            } else if (this.message.message.length > 140) {
              this.dataProvider.showToast(this.lang.max_body);
            } else {
              this.dataProvider.showLoading();
              var data = {
                user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id,
                session_id: this.userDetails.session_id,
                message: this.message
              };
              this.dataProvider.createParentConnectChat(data).then(function (response) {
                _this8.dataProvider.hideLoading();

                if (response.session) {
                  _this8.dataProvider.showToast(response.message);

                  _this8.viewCtrl.dismiss(true);
                } else {
                  _this8.authProvider.flushLocalStorage();

                  _this8.dataProvider.errorALertMessage(response.message); // this.app.getRootNav().setRoot("LoginPage");


                  _this8.viewCtrl.dismiss(true);

                  _this8.router.navigate(['login'], {
                    replaceUrl: true
                  });
                }
              })["catch"](function (error) {
                _this8.dataProvider.hideLoading();

                _this8.dataProvider.errorALertMessage(error);
              });
            }
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this9.openCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this9.openGallery();
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
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this10 = this;

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
                _this10.message.ticketImage = "data:image/png;base64," + imageData;
                _this10.ticketImage = "data:image/png;base64," + imageData;
              }
            });
          }
          /**
           * Open gallery to take image
           */

        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this11 = this;

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
                _this11.message.ticketImage = "data:image/png;base64," + imageData;
                _this11.ticketImage = "data:image/png;base64," + imageData;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConnectNewMessagePage;
      }();

      ConnectNewMessagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      ConnectNewMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-connect-new-message',
        template: _raw_loader_connect_new_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_connect_new_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], ConnectNewMessagePage);
      /***/
    },

    /***/
    "4tkT":
    /*!***************************************************************************!*\
      !*** ./src/app/connect-new-message/connect-new-message-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ConnectNewMessagePageRoutingModule */

    /***/
    function tkT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectNewMessagePageRoutingModule", function () {
        return ConnectNewMessagePageRoutingModule;
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


      var _connect_new_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./connect-new-message.page */
      "1Ee9");

      var routes = [{
        path: '',
        component: _connect_new_message_page__WEBPACK_IMPORTED_MODULE_3__["ConnectNewMessagePage"]
      }];

      var ConnectNewMessagePageRoutingModule = function ConnectNewMessagePageRoutingModule() {
        _classCallCheck(this, ConnectNewMessagePageRoutingModule);
      };

      ConnectNewMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConnectNewMessagePageRoutingModule);
      /***/
    },

    /***/
    "9XNo":
    /*!******************************************************!*\
      !*** ./src/app/service/location/location.service.ts ***!
      \******************************************************/

    /*! exports provided: LocationService */

    /***/
    function XNo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
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


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "92l+"); //import { Geolocation } from '@ionic-native/geolocation/ngx';
      // import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';


      var LocationService = /*#__PURE__*/function () {
        //Geocoder configuration
        // geoencoderOptions: NativeGeocoderOptions = {
        //   useLocale: true,
        //   maxResults: 5
        // };
        function LocationService( //  private geolocation: Geolocation,
        // private nativeGeocoder: NativeGeocoder,
        androidPermissions, locationAccuracy) {
          _classCallCheck(this, LocationService);

          this.androidPermissions = androidPermissions;
          this.locationAccuracy = locationAccuracy;
        }

        _createClass(LocationService, [{
          key: "checkGPSPermission",
          value: function checkGPSPermission(callback, e) {// this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
            //   result => {
            //     if (result.hasPermission) {
            //
            //       //If having permission show 'Turn On GPS' dialogue
            //       this.askToTurnOnGPS(res=>{
            //             callback(res);
            //           },err=>{
            //             e(err);
            //           });
            //     } else {
            //
            //       //If not having permission ask for permission
            //       this.requestGPSPermission(res=>{
            //             callback(res);
            //           },err=>{
            //             e(err);
            //           });
            //     }
            //   },
            //   err => {
            //     e(err);
            //     alert(err);
            //   }
            // );
          }
        }, {
          key: "requestGPSPermission",
          value: function requestGPSPermission(callback, e) {// this.locationAccuracy.canRequest().then((canRequest: boolean) => {
            //   if (canRequest) {
            //     console.log("4");
            //     this.getGeolocation(res=>{
            //       callback(res);
            //     },err=>{
            //       e(err);
            //     })
            //   } else {
            //     //Show 'GPS Permission Request' dialogue
            //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
            //       .then(
            //         () => {
            //           // call method to turn on GPS
            //           this.askToTurnOnGPS(res=>{
            //             callback(res);
            //           },err=>{
            //             e(err);
            //           });
            //         },
            //         error => {
            //           //Show alert if user click on 'No Thanks'
            //           e(error);
            //           alert('requestPermission Error requesting location permissions ' + error)
            //         }
            //       );
            //   }
            // });
          }
        }, {
          key: "askToTurnOnGPS",
          value: function askToTurnOnGPS(callback, e) {// this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
            //   () => {
            //     // When GPS Turned ON call method to get Accurate location coordinates
            //     this.getGeolocation(res=>{
            //       callback(res);
            //     },err=>{
            //       e(err);
            //     })
            //   },
            //   error =>{
            //     e(error);
            //     alert('Error requesting location permissions ' + JSON.stringify(error))
            //   }
            // );
          } //Get current coordinates of device

        }, {
          key: "getGeolocation",
          value: function getGeolocation(callback, e) {// this.geolocation.getCurrentPosition().then((resp) => {
            //   console.log(resp);
            //   this.latitude = resp.coords.latitude;
            //   this.longitude = resp.coords.longitude;
            //   this.accuracy = resp.coords.accuracy;
            //
            //   this.getGeoencoder(resp.coords.latitude, resp.coords.longitude,resp=>{
            //   	console.log(resp);
            //   	callback(resp);
            //   },error=>{
            //   	e(error);
            //   });
            //
            // }).catch((error) => {
            // 	e(error);
            //  // alert('Error getting location' + JSON.stringify(error));
            // });
          } //geocoder method to fetch address from coordinates passed as arguments

        }, {
          key: "getGeoencoder",
          value: function getGeoencoder(latitude, longitude, callback, e) {// this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            //   .then((result: NativeGeocoderResult[]) => {
            //     console.log(result);
            //     this.address = this.generateAddress(result[0]);
            //     callback(result[0]);
            //   })
            //   .catch((error: any) => {
            //   	e(error);
            //   //  alert('Error getting location' + JSON.stringify(error));
            //   });
          } //Return Comma saperated address

        }, {
          key: "generateAddress",
          value: function generateAddress(addressObj) {
            var obj = [];
            var address = "";

            for (var key in addressObj) {
              obj.push(addressObj[key]);
            }

            obj.reverse();

            for (var val in obj) {
              if (obj[val].length) address += obj[val] + ', ';
            }

            return address.slice(0, -2);
          }
        }]);

        return LocationService;
      }();

      LocationService.ctorParameters = function () {
        return [{
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"]
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__["LocationAccuracy"]
        }];
      };

      LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__["LocationAccuracy"]])], LocationService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.  
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // serverURL: "http://192.168.1.20/att-admin/app_service_new/", 
        // serverURL: "https://webapp.ws/Att-App/cpanel/app_service_new/",
        serverURL: "https://basmapp.com/Att-App/app_service_new/",
        lang_code: 'en'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CGfp":
    /*!*******************************************************!*\
      !*** ./src/app/pipes/date-format/date-format.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: DateFormatPipe */

    /***/
    function CGfp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function () {
        return DateFormatPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateFormatPipe = /*#__PURE__*/function () {
        function DateFormatPipe() {
          _classCallCheck(this, DateFormatPipe);

          this.DATE_FMT = "yy MM dd";
          this.monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          this.dayNames = ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
        }

        _createClass(DateFormatPipe, [{
          key: "transform",
          value: function transform(value) {
            var date = new Date(value);
            var year = date.getFullYear().toString();
            var formatedDate = year.slice(2, 4) + ' ' + this.monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + this.dayNames[date.getDay()];
            return formatedDate;
          }
        }]);

        return DateFormatPipe;
      }();

      DateFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateFormat'
      })], DateFormatPipe);
      /***/
    },

    /***/
    "G+rw":
    /*!****************************************************!*\
      !*** ./src/app/service/geo-service/geo-service.ts ***!
      \****************************************************/

    /*! exports provided: GeoServiceProvider */

    /***/
    function GRw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeoServiceProvider", function () {
        return GeoServiceProvider;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /**
       * GeoService manages users location and country
       */


      var GeoServiceProvider = /*#__PURE__*/function () {
        /**
         * @ignore
         */
        function GeoServiceProvider(http, translate) {
          _classCallCheck(this, GeoServiceProvider);

          this.http = http;
          this.translate = translate;
          this.countries = {
            "": "Worldwide",
            "AD": "أندورا",
            "AF": "أفغانستان",
            "AG": "أنتيغوا وباربودا",
            "AI": "أنجويلا",
            "AL": "ألبانيا",
            "AM": "أرمينيا",
            "AO": "أنجولا",
            "AQ": "المنطقة القطبية الجنوبية",
            "AR": "الأرجنتين",
            "AS": "ساموا-الأمريكي",
            "AT": "النمسا",
            "AU": "أستراليا",
            "AW": "أروبا",
            "AX": "جزر أولاند",
            "AZ": "أذربيجان",
            "BA": "البوسنة والهرسك",
            "BB": "باربادوس",
            "BD": "بنغلاديش",
            "BE": "بلجيكا",
            "BF": "بوركينا فاسو",
            "BG": "بلغاريا",
            "BH": "البحرين",
            "BI": "بوروندي",
            "BJ": "بنين",
            "BL": "سان بارتيلمي",
            "BM": "برمودا",
            "BN": "بروناي",
            "BO": "بوليفيا",
            "BQ": "الجزر الكاريبية الهولندية",
            "BR": "البرازيل",
            "BS": "باهاماس",
            "BT": "بوتان",
            "BV": "جزيرة بوفيه",
            "BW": "بوتسوانا",
            "BY": "بيلاروس",
            "BZ": "بيليز",
            "CA": "كندا",
            "CC": "جزر كوكس",
            "CD": "جمهورية الكونغو الديمقراطية",
            "CF": "جمهورية أفريقيا الوسطى",
            "CG": "جمهورية الكونغو",
            "CH": "سويسرا",
            "CI": "ساحل العاج",
            "CK": "جزر كوك",
            "CL": "تشيلي",
            "CM": "الكاميرون",
            "CN": "الصين",
            "CO": "كولومبيا",
            "CR": "كوستاريكا",
            "CU": "كوبا",
            "CV": "الرأس الأخضر",
            "CW": "كوراساو",
            "CX": "جزيرة عيد الميلاد",
            "CY": "قبرص",
            "CZ": "التشيك",
            "DE": "ألمانيا",
            "DJ": "جيبوتي",
            "DK": "الدنمارك",
            "DM": "دومينيكا",
            "DO": "جمهورية الدومينيكان",
            "DZ": "الجزائر",
            "EC": "الإكوادور",
            "EE": "إستونيا",
            "EG": "مصر",
            "ER": "إريتريا",
            "ES": "إسبانيا",
            "ET": "إثيوبيا",
            "FI": "فنلندا",
            "FJ": "فيجي",
            "FK": "جزر فوكلاند",
            "FM": "ولايات ميكرونيسيا المتحدة",
            "FO": "جزر فارو",
            "FR": "فرنسا",
            "GA": "الغابون",
            "GB": "المملكة المتحدة",
            "GD": "غرينادا",
            "GE": "جورجيا",
            "GF": "غينيا الفرنسية",
            "GG": "غيرنزي",
            "GH": "غانا",
            "GI": "جبل طارق",
            "GL": "جرينلاند",
            "GM": "غامبيا",
            "GN": "غينيا",
            "GP": "غوادلوب",
            "GQ": "غينيا الاستوائية",
            "GR": "اليونان",
            "GS": "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
            "GT": "غواتيمالا",
            "GU": "غوام",
            "GW": "غينيا بيساو",
            "GY": "غيانا",
            "HK": "هونغ كونغ",
            "HM": "جزيرة هيرد وجزر ماكدونالد",
            "HN": "هندوراس",
            "HR": "كرواتيا",
            "HT": "هايتي",
            "HU": "المجر",
            "ID": "إندونيسيا",
            "IE": "جمهورية أيرلندا",
            "IM": "جزيرة مان",
            "IN": "الهند",
            "IO": "إقليم المحيط الهندي البريطاني",
            "IR": "إيران",
            "IS": "أيسلندا",
            "IT": "إيطاليا",
            "IQ": "العراق",
            "JE": "جيرزي",
            "JM": "جامايكا",
            "JO": "الأردن",
            "JP": "اليابان",
            "KE": "كينيا",
            "KG": "قيرغيزستان",
            "KH": "كمبوديا",
            "KI": "كيريباتي",
            "KM": "جزر القمر",
            "KN": "سانت كيتس ونيفيس",
            "KP": "كوريا الشمالية",
            "KR": "كوريا الجنوبية",
            "KW": "الكويت",
            "KY": "جزر كايمان",
            "KZ": "كازاخستان",
            "LA": "لاوس",
            "LB": "لبنان",
            "LC": "سانت لوسيا",
            "LI": "ليختنشتاين",
            "LK": "سريلانكا",
            "LR": "ليبيريا",
            "LS": "ليسوتو",
            "LT": "ليتوانيا",
            "LU": "لوكسمبورغ",
            "LV": "لاتفيا",
            "LY": "ليبيا",
            "MA": "المغرب",
            "MC": "موناكو",
            "MD": "مولدافيا",
            "ME": "الجبل الأسود",
            "MF": "سانت مارتن الفرنسية",
            "MG": "مدغشقر",
            "MH": "جزر مارشال",
            "MK": "جمهورية مقدونيا",
            "ML": "مالي",
            "MM": "بورما",
            "MN": "منغوليا",
            "MO": "ماكاو",
            "MP": "جزر ماريانا الشمالية",
            "MQ": "مارتينيك",
            "MR": "موريتانيا",
            "MS": "مونتسرات",
            "MT": "مالطا",
            "MU": "موريشيوس",
            "MV": "جزر المالديف",
            "MW": "مالاوي",
            "MX": "المكسيك",
            "MY": "ماليزيا",
            "MZ": "موزمبيق",
            "NA": "ناميبيا",
            "NC": "كاليدونيا الجديدة",
            "NE": "النيجر",
            "NF": "جزيرة نورفولك",
            "NG": "نيجيريا",
            "NI": "نيكاراغوا",
            "NL": "هولندا",
            "NO": "النرويج",
            "NP": "نيبال",
            "NR": "ناورو",
            "NU": "نييوي",
            "NZ": "نيوزيلندا",
            "OM": "عمان",
            "PA": "بنما",
            "PE": "بيرو",
            "PF": "بولينيزيا الفرنسية",
            "PG": "بابوا غينيا الجديدة",
            "PH": "الفلبين",
            "PK": "باكستان",
            "PL": "بولندا",
            "PM": "سان بيير وميكلون",
            "PN": "جزر بيتكيرن",
            "PR": "بورتوريكو",
            "PS": "فلسطين",
            "PT": "البرتغال",
            "PW": "بالاو",
            "PY": "باراغواي",
            "QA": "قطر",
            "RE": "ريونيون",
            "RO": "رومانيا",
            "RS": "صربيا",
            "RU": "روسيا",
            "RW": "رواندا",
            "SA": "السعودية",
            "SB": "جزر سليمان",
            "SC": "سيشل",
            "SD": "السودان",
            "SE": "السويد",
            "SG": "سنغافورة",
            "SH": "سانت هيلينا وأسينشين وتريستان دا كونا",
            "SI": "سلوفينيا",
            "SJ": "سفالبارد ويان ماين",
            "SK": "سلوفاكيا",
            "SL": "سيراليون",
            "SM": "سان مارينو",
            "SN": "السنغال",
            "SO": "الصومال",
            "SR": "سورينام",
            "SS": "جنوب السودان",
            "ST": "ساو تومي وبرينسيب",
            "SV": "السلفادور",
            "SX": "سينت مارتن",
            "SY": "سوريا",
            "SZ": "سوازيلاند",
            "TC": "جزر توركس وكايكوس",
            "TD": "تشاد",
            "TF": "أراض فرنسية جنوبية وأنتارتيكية",
            "TG": "توغو",
            "TH": "تايلاند",
            "TJ": "طاجيكستان",
            "TK": "توكلو",
            "TL": "تيمور الشرقية",
            "TM": "تركمانستان",
            "TN": "تونس",
            "TO": "تونغا",
            "TR": "تركيا",
            "TT": "ترينيداد وتوباغو",
            "TV": "توفالو",
            "TW": "تايوان",
            "TZ": "تنزانيا",
            "UA": "أوكرانيا",
            "UG": "أوغندا",
            "UM": "جزر الولايات المتحدة الصغيرة النائية",
            "US": "الولايات المتحدة",
            "UY": "الأوروغواي",
            "UZ": "أوزبكستان",
            "VA": "الفاتيكان",
            "VC": "سانت فنسنت والجرينادين",
            "VE": "فنزويلا",
            "VG": "الجزر العذراء البريطانية",
            "VI": "جزر العذراء الأمريكية",
            "VN": "فيتنام",
            "VU": "فانواتو",
            "WF": "والس وفوتونا",
            "WS": "ساموا",
            "YE": "اليمن",
            "YT": "مايوت",
            "ZA": "جنوب أفريقيا",
            "ZM": "زامبيا",
            "ZW": "زيمبابوي"
          };
          this.phones = {
            'AF': '+93',
            'AL': '+355',
            'DZ': '+213',
            'AS': '+1684',
            'AD': '+376',
            'AO': '+244',
            'AI': '+1264',
            'AQ': '+672',
            'AG': '+1268',
            'AR': '+54',
            'AM': '+374',
            'AW': '+297',
            'AU': '+61',
            'AT': '+43',
            'AZ': '+994',
            'BS': '+1242',
            'BH': '+973',
            'BD': '+880',
            'BB': '+1246',
            'BY': '+375',
            'BE': '+32',
            'BZ': '+501',
            'BJ': '+229',
            'BM': '+1441',
            'BT': '+975',
            'BO': '+591',
            'BA': '+387',
            'BW': '+267',
            'BR': '+55',
            'BN': '+673',
            'BG': '+359',
            'BF': '+226',
            'BI': '+257',
            'KH': '+855',
            'CM': '+237',
            'CA': '+1',
            'CV': '+238',
            'KY': '+1345',
            'CF': '+236',
            'TD': '+235',
            'CL': '+56',
            'CN': '+86',
            'CX': '+53',
            'CC': '+61',
            'CO': '+57',
            'KM': '+269',
            'CD': '+243',
            'CG': '+242',
            'CK': '+682',
            'CR': '+506',
            'CI': '+225',
            'HR': '+385',
            'CU': '+53',
            'CY': '+357',
            'CZ': '+420',
            'DK': '+45',
            'DJ': '+253',
            'DM': '+1767',
            'DO': '+1809',
            'TP': '+670',
            'EC': '+593',
            'EG': '+20',
            'SV': '+503',
            'GQ': '+240',
            'ER': '+291',
            'EE': '+372',
            'ET': '+251',
            'FK': '+500',
            'FO': '+298',
            'FJ': '+679',
            'FI': '+358',
            'FR': '+33',
            'GF': '+594',
            'PF': '+689',
            'GA': '+241',
            'GM': '+220',
            'GE': '+995',
            'DE': '+49',
            'GH': '+233',
            'GI': '+350',
            'GR': '+30',
            'GL': '+299',
            'GD': '+1473',
            'GP': '+590',
            'GU': '+1671',
            'GT': '+502',
            'GN': '+224',
            'GW': '+245',
            'GY': '+592',
            'HT': '+509',
            'HN': '+504',
            'HK': '+852',
            'HU': '+36',
            'IS': '+354',
            'IN': '+91',
            'ID': '+62',
            'IR': '+98',
            'IQ': '+964',
            'IE': '+353',
            'IT': '+39',
            'JM': '+1876',
            'JP': '+81',
            'JO': '+962',
            'KZ': '+7',
            'KE': '+254',
            'KI': '+686',
            'KP': '+850',
            'KR': '+82',
            'KW': '+965',
            'KG': '+996',
            'LA': '+856',
            'LV': '+371',
            'LB': '+961',
            'LS': '+266',
            'LR': '+231',
            'LY': '+218',
            'LI': '+423',
            'LT': '+370',
            'LU': '+352',
            'MO': '+853',
            'MK': '+389',
            'MG': '+261',
            'MW': '+265',
            'MY': '+60',
            'MV': '+960',
            'ML': '+223',
            'MT': '+356',
            'MH': '+692',
            'MQ': '+596',
            'MR': '+222',
            'MU': '+230',
            'YT': '+269',
            'MX': '+52',
            'FM': '+691',
            'MD': '+373',
            'MC': '+377',
            'MN': '+976',
            'MS': '+1664',
            'MA': '+212',
            'MZ': '+258',
            'MM': '+95',
            'NA': '+264',
            'NR': '+674',
            'NP': '+977',
            'NL': '+31',
            'AN': '+599',
            'NC': '+687',
            'NZ': '+64',
            'NI': '+505',
            'NE': '+227',
            'NG': '+234',
            'NU': '+683',
            'NF': '+672',
            'MP': '+1670',
            'NO': '+47',
            'OM': '+968',
            'PK': '+92',
            'PW': '+680',
            'PS': '+970',
            'PA': '+507',
            'PG': '+675',
            'PY': '+595',
            'PE': '+51',
            'PH': '+63',
            'PL': '+48',
            'PT': '+351',
            'PR': '+1787',
            'QA': '+974',
            'RE': '+262',
            'RO': '+40',
            'RU': '+7',
            'RW': '+250',
            'SH': '+290',
            'KN': '+1869',
            'LC': '+1758',
            'PM': '+508',
            'VC': '+1784',
            'WS': '+685',
            'SM': '+378',
            'ST': '+239',
            'SA': '+966',
            'SN': '+221',
            'SC': '+248',
            'SL': '+232',
            'SG': '+65',
            'SK': '+421',
            'SI': '+386',
            'SB': '+677',
            'SO': '+252',
            'ZA': '+27',
            'ES': '+34',
            'LK': '+94',
            'SD': '+249',
            'SR': '+597',
            'SZ': '+268',
            'SE': '+46',
            'CH': '+41',
            'SY': '+963',
            'TW': '+886',
            'TJ': '+992',
            'TZ': '+255',
            'TH': '+66',
            'TK': '+690',
            'TO': '+676',
            'TT': '+1868',
            'TN': '+216',
            'TR': '+90',
            'TM': '+993',
            'TC': '+1649',
            'TV': '+688',
            'UG': '+256',
            'UA': '+380',
            'AE': '+971',
            'GB': '+44',
            'US': '+1',
            'UY': '+598',
            'UZ': '+998',
            'VU': '+678',
            'VA': '+418',
            'VE': '+58',
            'VN': '+84',
            'VI': '+1284',
            'VQ': '+1340',
            'WF': '+681',
            'YE': '+967',
            'ZM': '+260',
            'ZW': '+263'
          };
          this.country_english = {
            "AD": "Andorra",
            "AE": "United Arab Emirates",
            "AF": "Afghanistan",
            "AG": "Antigua and Barbuda",
            "AI": "Anguilla",
            "AL": "Albania",
            "AM": "Armenia",
            "AO": "Angola",
            "AQ": "Antarctica",
            "AS": "American Samoa",
            "AR": "Argentina",
            "AT": "Austria",
            "AU": "Australia",
            "AW": "Aruba",
            "AX": "Aland Islands",
            "AZ": "Azerbaijan",
            "BA": "Bosnia and Herzegovina",
            "BB": "Barbados",
            "BD": "Bangladesh",
            "BE": "Belgium",
            "BF": "Burkina Faso",
            "BG": "Bulgaria",
            "BH": "Bahrain",
            "BI": "Burundi",
            "BJ": "Benin",
            "BL": "Saint Barthelemy",
            "BM": "Bermuda",
            "BN": "Brunei",
            "BO": "Bolivia",
            "BQ": "Bonaire",
            "BR": "Brazil",
            "BS": "Bahamas",
            "BT": "Bhutan",
            "BV": "Bouvet Island",
            "BW": "Botswana",
            "BY": "Belarus",
            "BZ": "Belize",
            "CA": "Canada",
            "CC": "Cocos Islands",
            "CD": "Democratic Republic of the Congo",
            "CF": "Central African Republic",
            "CG": "Republic of the Congo",
            "CH": "Switzerland",
            "CI": "Ivory Coast",
            "CK": "Cook Islands",
            "CL": "Chile",
            "CM": "Cameroon",
            "CN": "China",
            "CO": "Colombia",
            "CR": "Costa Rica",
            "CU": "Cuba",
            "CV": "Cape Verde",
            "CW": "Curacao",
            "CX": "Christmas Island",
            "CY": "Cyprus",
            "CZ": "Czech Republic",
            "DE": "Germany",
            "DJ": "Djibouti",
            "DK": "Denmark",
            "DM": "Dominica",
            "DO": "Dominican Republic",
            "DZ": "Algeria",
            "EC": "Ecuador",
            "EE": "Estonia",
            "EG": "Egypt",
            "EH": "Western Sahara",
            "ER": "Eritrea",
            "ES": "Spain",
            "ET": "Ethiopia",
            "FI": "Finland",
            "FJ": "Fiji",
            "FK": "Falkland Islands",
            "FM": "Micronesia",
            "FO": "Faroe Islands",
            "FR": "France",
            "GA": "Gabon",
            "GB": "United Kingdom",
            "GD": "Grenada",
            "GE": "Georgia",
            "GF": "French Guiana",
            "GG": "Guernsey",
            "GH": "Ghana",
            "GI": "Gibraltar",
            "GL": "Greenland",
            "GM": "Gambia",
            "GN": "Guinea",
            "GP": "Guadeloupe",
            "GQ": "Equatorial Guinea",
            "GR": "Greece",
            "GS": "South Georgia and the South Sandwich Islands",
            "GT": "Guatemala",
            "GU": "Guam",
            "GW": "Guinea-Bissau",
            "GY": "Guyana",
            "HK": "Hong Kong",
            "HM": "Heard Island and McDonald Islands",
            "HN": "Honduras",
            "HR": "Croatia",
            "HT": "Haiti",
            "HU": "Hungary",
            "ID": "Indonesia",
            "IE": "Ireland",
            "IL": "Israel",
            "IM": "Isle of Man",
            "IN": "India",
            "IO": "British Indian Ocean Territory",
            "IQ": "Iraq",
            "IR": "Iran",
            "IS": "Iceland",
            "IT": "Italy",
            "JE": "Jersey",
            "JM": "Jamaica",
            "JO": "Jordan",
            "JP": "Japan",
            "KE": "Kenya",
            "KG": "Kyrgyzstan",
            "KH": "Cambodia",
            "KI": "Kiribati",
            "KM": "Comoros",
            "KN": "Saint Kitts and Nevis",
            "KP": "North Korea",
            "KR": "South Korea",
            "KW": "Kuwait",
            "KY": "Cayman Islands",
            "KZ": "Kazakhstan",
            "LA": "Laos",
            "LB": "Lebanon",
            "LC": "Saint Lucia",
            "LI": "Liechtenstein",
            "LK": "Sri Lanka",
            "LR": "Liberia",
            "LS": "Lesotho",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "LV": "Latvia",
            "LY": "Libya",
            "MA": "Morocco",
            "MC": "Monaco",
            "MD": "Moldova",
            "ME": "Montenegro",
            "MF": "Saint Martin",
            "MG": "Madagascar",
            "MH": "Marshall Islands",
            "MK": "Macedonia",
            "ML": "Mali",
            "MM": "Myanmar",
            "MN": "Mongolia",
            "MO": "Macao",
            "MP": "Northern Mariana Islands",
            "MQ": "Martinique",
            "MR": "Mauritania",
            "MS": "Montserrat",
            "MT": "Malta",
            "MU": "Mauritius",
            "MV": "Maldives",
            "MW": "Malawi",
            "MX": "Mexico",
            "MY": "Malaysia",
            "MZ": "Mozambique",
            "NA": "Namibia",
            "NC": "New Caledonia",
            "NE": "Niger",
            "NF": "Norfolk Island",
            "NG": "Nigeria",
            "NI": "Nicaragua",
            "NL": "Netherlands",
            "NO": "Norway",
            "NP": "Nepal",
            "NR": "Nauru",
            "NU": "Niue",
            "NZ": "New Zealand",
            "OM": "Oman",
            "PA": "Panama",
            "PE": "Peru",
            "PF": "French Polynesia",
            "PG": "Papua New Guinea",
            "PH": "Philippines",
            "PK": "Pakistan",
            "PL": "Poland",
            "PM": "Saint Pierre and Miquelon",
            "PN": "Pitcairn",
            "PR": "Puerto Rico",
            "PS": "Palestinian Territory",
            "PT": "Portugal",
            "PW": "Palau",
            "PY": "Paraguay",
            "QA": "Qatar",
            "RE": "Reunion",
            "RO": "Romania",
            "RS": "Serbia",
            "RU": "Russia",
            "RW": "Rwanda",
            "SA": "Saudi Arabia",
            "SB": "Solomon Islands",
            "SC": "Seychelles",
            "SD": "Sudan",
            "SE": "Sweden",
            "SG": "Singapore",
            "SH": "Saint Helena",
            "SI": "Slovenia",
            "SJ": "Svalbard and Jan Mayen",
            "SK": "Slovakia",
            "SL": "Sierra Leone",
            "SM": "San Marino",
            "SN": "Senegal",
            "SO": "Somalia",
            "SR": "Suriname",
            "SS": "South Sudan",
            "ST": "Sao Tome and Principe",
            "SV": "El Salvador",
            "SX": "Sint Maarten",
            "SY": "Syria",
            "SZ": "Swaziland",
            "TC": "Turks and Caicos Islands",
            "TD": "Chad",
            "TF": "French Southern Territories",
            "TG": "Togo",
            "TH": "Thailand",
            "TJ": "Tajikistan",
            "TK": "Tokelau",
            "TL": "East Timor",
            "TM": "Turkmenistan",
            "TN": "Tunisia",
            "TO": "Tonga",
            "TR": "Turkey",
            "TT": "Trinidad and Tobago",
            "TV": "Tuvalu",
            "TW": "Taiwan",
            "TZ": "Tanzania",
            "UA": "Ukraine",
            "UG": "Uganda",
            "UM": "United States Minor Outlying Islands",
            "US": "United States",
            "UY": "Uruguay",
            "UZ": "Uzbekistan",
            "VA": "Vatican",
            "VC": "Saint Vincent and the Grenadines",
            "VE": "Venezuela",
            "VG": "British Virgin Islands",
            "VI": "U.S. Virgin Islands",
            "VN": "Vietnam",
            "VU": "Vanuatu",
            "WF": "Wallis and Futuna",
            "WS": "Samoa",
            "XK": "Kosovo",
            "YE": "Yemen",
            "YT": "Mayotte",
            "ZA": "South Africa",
            "ZM": "Zambia",
            "ZW": "Zimbabwe"
          };
        }
        /**
         * get name of country of given ios code
         * @param {string} code ISO-2 code in uppercase
         * @returns {any}
         */


        _createClass(GeoServiceProvider, [{
          key: "getCountryName",
          value: function getCountryName(code) {
            return this.countries[('' + code).toUpperCase()];
          }
          /**
           * Request for location info
           * @returns {Observable<Object>}
           */

        }, {
          key: "getMyLocation",
          value: function getMyLocation() {
            return this.http.get("https://iplist.cc/api/").toPromise().then(function (data) {
              console.log('GeoService', data);

              if (data && data.hasOwnProperty('countrycode')) {
                return data;
              } else {
                return '';
              }
            })["catch"](function () {
              return '';
            });
          }
        }, {
          key: "getCountryPhone",
          value: function getCountryPhone(code) {
            return this.phones[code];
          }
        }, {
          key: "getCountriesData",
          value: function getCountriesData(trans) {
            var data = {};

            for (var key in this.countries) {
              if (this.countries.hasOwnProperty(key)) {
                if (this.countries[key] && this.phones[key]) {
                  data[key] = {
                    code: key.toLowerCase(),
                    name: trans.instant('COUNTRIES.' + key),
                    phone: this.phones[key]
                  };
                }
              }
            }

            return data;
          }
        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            var _this12 = this;

            var data = [];
            var i = 0;
            Object.keys(this.countries).map(function (key) {
              //   console.log('key',key);
              var a = {
                code: key,
                name: _this12.countries[key]
              };
              data.push(a);
              i++;
            });
            data.sort(function (a, b) {
              return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
            });
            return data;
          }
        }, {
          key: "getArCountries",
          value: function getArCountries() {
            var _this13 = this;

            var data = [];
            var i = 0;
            Object.keys(this.countries).map(function (key) {
              //   console.log('key',key);
              if (key != '') {
                var a = {
                  code: key,
                  name: _this13.countries[key]
                };
                data.push(a);
                i++;
              }
            });
            data.sort(function (a, b) {
              return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
            });
            return data;
          }
        }, {
          key: "getEnCountries",
          value: function getEnCountries() {
            var _this14 = this;

            var data = [];
            var i = 0;
            Object.keys(this.country_english).map(function (key) {
              //   console.log('key',key);
              var a = {
                code: key,
                name: _this14.country_english[key]
              };
              data.push(a);
              i++;
            });
            data.sort(function (a, b) {
              return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
            });
            return data;
          }
        }, {
          key: "getCountryDetails",
          value: function getCountryDetails(code) {
            var _this15 = this;

            var data = {
              country_en_name: '',
              country_code: '',
              country_ar_name: ''
            };
            Object.keys(this.country_english).map(function (key) {
              if (code == key) {
                data.country_en_name = _this15.country_english[key];
                data.country_code = key;
              }
            });
            Object.keys(this.countries).map(function (key) {
              if (code == key) {
                data.country_ar_name = _this15.countries[key];
              }
            });
            return data;
          }
        }]);

        return GeoServiceProvider;
      }();

      GeoServiceProvider.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      GeoServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], GeoServiceProvider);
      /***/
    },

    /***/
    "GhJt":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/edit-student-profile/edit-student-profile.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: EditStudentProfileComponent */

    /***/
    function GhJt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditStudentProfileComponent", function () {
        return EditStudentProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_student_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-student-profile.component.html */
      "04TA");
      /* harmony import */


      var _edit_student_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-student-profile.component.scss */
      "HRLN");
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
      /*! ../../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/database/database.service */
      "HbOQ");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      "XqOP");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //import { DataProvider } from '../../providers/data/data';
      //import { TabsPage } from '../tabs/tabs';
      //import { DatabaseProvider } from '../../providers/database/database';


      var EditStudentProfileComponent = /*#__PURE__*/function () {
        function EditStudentProfileComponent(popoverController, navCtrl, device, authProvider, platform, fcm, // public events: Events, 
        translate, route, zone, router, dbProvider) {
          _classCallCheck(this, EditStudentProfileComponent);

          this.popoverController = popoverController;
          this.navCtrl = navCtrl;
          this.device = device;
          this.authProvider = authProvider;
          this.platform = platform;
          this.fcm = fcm;
          this.translate = translate;
          this.route = route;
          this.zone = zone;
          this.router = router;
          this.dbProvider = dbProvider;
        }

        _createClass(EditStudentProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.studentName = this.student.name;
            this.classes.forEach(function (res) {
              if (res.name == _this16.student.course_name) {
                _this16.studentSemester = res.cid;
              }
            }); //	console.log(this.student,this.classes,this.studentSemester,this.studentName);

            if (localStorage.getItem("userloggedin")) {
              // console.log('logged in');
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.currentUser = this.userDetails.details.username;
              this.currentUserEmail = this.userDetails.details.email_id; // console.log('th',this.currentUser);
            }

            if (localStorage.getItem('earlyLogin')) {
              this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin")); // console.log(this.loggedinUser);
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.popoverController.dismiss();
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var inputElement = document.getElementById("input");
            var i = inputElement.value;
            var select = document.getElementById("select");
            var s = select.value;
            var data = {
              student: this.student,
              studentName: i,
              studentSemester: s
            }; //	console.log(data);

            this.popoverController.dismiss(data);
          }
        }, {
          key: "deleteClass",
          value: function deleteClass() {
            var data = {
              student: this.student,
              deleteClass: true
            };
            this.popoverController.dismiss(data);
          }
        }]);

        return EditStudentProfileComponent;
      }();

      EditStudentProfileComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
        }];
      };

      EditStudentProfileComponent.propDecorators = {
        student: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EditStudentProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-student-profile',
        template: _raw_loader_edit_student_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_student_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]])], EditStudentProfileComponent);
      /***/
    },

    /***/
    "HRLN":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/edit-student-profile/edit-student-profile.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function HRLN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n  margin: 4vh;\n}\n.body .edit-icon {\n  font-size: 3vh;\n  position: absolute;\n  right: 1vh;\n  top: 1vh;\n  z-index: 2;\n}\n.body .input-row {\n  padding-bottom: 4vh;\n}\n.body .input-row .item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQVE7RUFDSyxjQUFBO0VBQ04sa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFUDtBQUFRO0VBQ0MsbUJBQUE7QUFFVDtBQURTO0VBQ0MsV0FBQTtBQUdWIiwiZmlsZSI6ImVkaXQtc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBtYXJnaW46IDR2aDtcclxuICAgICAgICAuZWRpdC1pY29ue1xyXG4gICAgICAgIFx0ICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG5cdFx0XHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHQgICAgcmlnaHQ6IDF2aDtcclxuXHRcdFx0ICAgIHRvcDogMXZoO1xyXG5cdFx0XHQgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LXJvd3tcclxuICAgICAgICBcdHBhZGRpbmctYm90dG9tOiA0dmg7XHJcbiAgICAgICAgXHQuaXRlbXtcclxuICAgICAgICBcdFx0d2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    "HbOQ":
    /*!******************************************************!*\
      !*** ./src/app/service/database/database.service.ts ***!
      \******************************************************/

    /*! exports provided: DatabaseService */

    /***/
    function HbOQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
        return DatabaseService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      "9lwF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DatabaseService = /*#__PURE__*/function () {
        function DatabaseService(http, sqlite, platform) {
          _classCallCheck(this, DatabaseService);

          this.http = http;
          this.sqlite = sqlite;
          this.platform = platform;
        }
        /**
         * Open the local database
         */


        _createClass(DatabaseService, [{
          key: "openDataBase",
          value: function openDataBase() {
            var _this17 = this;

            return new Promise(function (resolve) {
              _this17.platform.ready().then(function () {
                if (_this17.platform.is('cordova')) {
                  _this17.sqlite.create({
                    name: 'attendance.db',
                    location: 'default'
                  }).then(function (db) {
                    _this17.db = db;
                    resolve(true);
                  });
                } else {
                  resolve(true);
                }
              });
            });
          }
          /**
           * Create classes, students, private_message, parent_connect table
           */

        }, {
          key: "createTable",
          value: function createTable() {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              _this18.platform.ready().then(function () {
                if (_this18.platform.is('cordova')) {
                  _this18.sqlite.create({
                    name: 'attendance.db',
                    location: 'default'
                  }).then(function (db) {
                    _this18.db = db;
                    db.executeSql("CREATE TABLE IF NOT EXISTS classes( \n                              cid INT PRIMARY KEY,\n                              name VARCHAR(50),\n                              desc VARCHAR(50),\n                              code VARCHAR(10))", []).then(function () {
                      console.log('classes Table created');
                      db.executeSql("CREATE TABLE IF NOT EXISTS students(\n                      sid INT,\n                      name VARCHAR(50), \n                      pic TEXT,\n                      cid INT,\n                      add_ranking FLOAT,\n                      medical_days INTEGER, \n                      suspend_days INTEGER, \n                      total_absent INTEGER, \n                      unacceptable_absent_days INTEGER,\n                      total_delay INTEGER,\n                      zero INTEGER,\n                      one INTEGER,\n                      delay_rule INTEGER)", []).then(function () {
                        console.log('students Table created');
                        db.executeSql("CREATE TABLE IF NOT EXISTS private_message(\n                                    ID BIGINT PRIMARY KEY,\n                                    date datetime, \n                                    first_name varchar(50),\n                                    notification TEXT,\n                                    pic TEXT,\n                                    status INT,\n                                    title VARCHAR(50),\n                                    user_no INT,\n                                    user_right VARCHAR(5),\n                                    user_type INT)", []).then(function () {
                          console.log('private_message Table created');
                          db.executeSql("CREATE TABLE IF NOT EXISTS parent_connect(\n                            id BIGINT PRIMARY KEY,\n                            created datetime, \n                            first_name varchar(50),\n                            last_name varchar(50),\n                            message VARCHAR(150),\n                            name VARCHAR(150),\n                            parent_user_no INT,\n                            pic TEXT,\n                            school_id INT,\n                            ticket_status INT,\n                            ticket_status_updated_by BIGINT,\n                            title VARCHAR(50),\n                            updated_time TIMESTAMP)", []).then(function () {
                            console.log('parent_connect Table created');
                            db.executeSql("CREATE TABLE IF NOT EXISTS news(\n                                id INT PRIMARY KEY,\n                                ago VARCHAR(20), \n                                already_like varchar(10),\n                                content TEXT,\n                                detail TEXT,\n                                school_id INT,\n                                news_image TEXT,\n                                school_logo TEXT,\n                                school_name TEXT,\n                                status INT,\n                                title VARCHAR(150),\n                                total_likes INT\n                                )", []).then(function () {
                              console.log('parent_connect Table created');
                              resolve(true);
                            })["catch"](function (e) {
                              console.log(e);
                              reject(false);
                            });
                          })["catch"](function (e) {
                            console.log(e);
                            reject(false);
                          });
                        })["catch"](function (e) {
                          console.log(e);
                          reject(false);
                        });
                      })["catch"](function (e) {
                        console.log(e);
                        reject(false);
                      });
                    })["catch"](function (e) {
                      console.log(e);
                      reject(false);
                    });
                  })["catch"](function (e) {
                    console.log(e);
                    reject(false);
                  });
                } else {
                  resolve(true);
                }
              });
            });
          }
          /**
           * insert or update the private messages locally
           * @param classes Array of class object
           */

        }, {
          key: "insertNews",
          value: function insertNews(recentNews) {
            var _this19 = this;

            if (this.platform.is('cordova')) {
              this.db.executeSql('DELETE From news', []).then(function () {
                recentNews.forEach(function (news) {
                  _this19.db.executeSql("INSERT INTO news (id, ago, already_like, content, detail, school_id, news_image, school_logo, school_name, status, title, total_likes) \n          VALUES(".concat(news.id, ", \"").concat(news.ago, "\", \"").concat(news.already_like, "\", \"").concat(news.content, "\", \"").concat(news.detail, "\", \"").concat(news.news_image, "\", ").concat(news.school_id, ", \"").concat(news.school_logo, "\", \"").concat(news.school_name, "\", \"").concat(news.status, "\", \"").concat(news.title, "\", ").concat(news.total_likes, ")"), []).then(function () {
                    console.log(news.id, " inserted");
                  })["catch"](function (err) {
                    console.log("INSERT INTO news (id, ago, already_like, content, detail, school_id, news_image, school_logo, school_name, status, title, total_likes) \n            VALUES(".concat(news.id, ", \"").concat(news.ago, "\", \"").concat(news.already_like, "\", \"").concat(news.content, "\", \"").concat(news.detail, "\", \"").concat(news.news_image, "\", ").concat(news.school_id, ", \"").concat(news.school_logo, "\", \"").concat(news.school_name, "\", \"").concat(news.status, "\", \"").concat(news.title, "\", ").concat(news.total_likes, ")"));
                    console.log(err);
                  });
                });
              });
            }
          }
          /**
           * Get latest local news
           */

        }, {
          key: "getNews",
          value: function getNews() {
            var _this20 = this;

            return new Promise(function (resolve, reject) {
              _this20.db.executeSql('SELECT * from news', []).then(function (response) {
                var news = [];

                for (var i = 0; i < response.rows.length; i++) {
                  var data = response.rows.item(i);

                  if (data.news_image) {
                    data.news_image = './assets/imgs/no-preview.png';
                  }

                  data.school_logo = '';
                  news.push(data);
                }

                console.log(news);
                resolve(news);
              })["catch"](function (error) {
                console.log(error);
                reject("Some problem exist try again later");
              });
            });
          }
          /**
           * insert or update the classes locally
           * @param classes Array of class object
           */

        }, {
          key: "insertClasses",
          value: function insertClasses(classes) {
            var _this21 = this;

            if (this.platform.is('cordova')) {
              classes.forEach(function (data) {
                _this21.db.executeSql("INSERT OR REPLACE INTO classes (cid, name, desc, code) \n        VALUES(".concat(data.cid, ", \"").concat(data.name, "\", \"").concat(data.desc, "\", \"").concat(data.code, "\")"), []).then(function () {
                  console.log(data.name, " inserted");
                })["catch"](function (err) {
                  console.log(err);
                });
              });
            }
          }
          /**
           * Return the classes stored locally
           */

        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this22 = this;

            return new Promise(function (resolve, reject) {
              _this22.db.executeSql('SELECT * from classes', []).then(function (response) {
                var classes = [];

                for (var i = 0; i < response.rows.length; i++) {
                  classes.push(response.rows.item(i));
                }

                resolve(classes);
              })["catch"](function (error) {
                console.log(error);
                reject("Some problem exist try again later");
              });
            });
          }
          /**
           * Insert students locally
           * @param students Arrya contains the student object
           */

        }, {
          key: "insertStudentList",
          value: function insertStudentList(students, delay_rule) {
            var _this23 = this;

            if (this.platform.is('cordova')) {
              students.forEach(function (student) {
                if (student.add_ranking == undefined) {
                  student.add_ranking = 0;
                }

                if (student.total_delay == undefined) {
                  student.total_delay = 0;
                }

                if (student.useedforabsent == undefined) {
                  student.useedforabsent = {
                    zero: 0,
                    one: 0
                  };
                }

                _this23.db.executeSql("Select sid from students where sid = \"".concat(student.sid, "\" and cid = \"").concat(student.cid, "\""), []).then(function (response) {
                  if (response.rows.length > 0) {
                    _this23.db.executeSql('UPDATE students SET name = ?, pic = ?, add_ranking =?, medical_days = ?, suspend_days =?, total_absent=?, unacceptable_absent_days = ?, total_delay = ?, zero = ?, one = ?, delay_rule = ? WHERE sid = "' + student.sid + '" and cid = "' + student.cid + '"', [student.name, student.pic, student.add_ranking, student.medical_days, student.suspend_days, student.total_absent, student.unacceptable_absent_days, student.total_delay, student.useedforabsent.zero, student.useedforabsent.one, delay_rule])["catch"](function (err) {
                      console.log(err);
                    }).then(function () {
                      console.log("Student updated successfully");
                    });
                  } else {
                    _this23.db.executeSql("INSERT  INTO students (sid, name, pic, cid, add_ranking, medical_days, suspend_days, total_absent, unacceptable_absent_days, total_delay, zero, one, delay_rule)\n                                  VALUES(".concat(student.sid, ",\"").concat(student.name, "\",\"").concat(student.pic, "\",").concat(student.cid, ",").concat(student.add_ranking, ",").concat(student.medical_days, ",").concat(student.suspend_days, ",\n                                  ").concat(student.total_absent, ",").concat(student.unacceptable_absent_days, ", ").concat(student.total_delay, ", ").concat(student.useedforabsent.zero, ", ").concat(student.useedforabsent.one, ", ").concat(delay_rule, ")"), []).then(function () {
                      console.log("Student inserted successfully");
                    })["catch"](function (err) {
                      console.log("insert error");
                      console.log(err);
                    });
                  }
                });
              });
            }
          }
          /**
           * Get the student list registered for particular course/class
           * @param cid Contains the course id
           */

        }, {
          key: "getStudentList",
          value: function getStudentList(cid) {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              _this24.db.executeSql('SELECT * from students WHERE cid = ' + cid, []).then(function (response) {
                var students = [];

                for (var i = 0; i < response.rows.length; i++) {
                  var student = response.rows.item(i);
                  student.sheet = [];
                  student.useedforabsent = {
                    zero: student.zero,
                    one: student.one
                  };
                  students.push(student);
                }

                resolve(students);
              })["catch"](function (error) {
                console.log(error);
                reject("Some problem exist try again later");
              });
            });
          }
        }, {
          key: "getStudent",
          value: function getStudent(sid) {
            var _this25 = this;

            return new Promise(function (resolve, reject) {
              _this25.db.executeSql('SELECT * from students WHERE sid = ' + sid, []).then(function (response) {
                var students = [];

                for (var i = 0; i < response.rows.length; i++) {
                  var student = response.rows.item(i);
                  student.sheet = [];
                  student.useedforabsent = {
                    zero: student.zero,
                    one: student.one
                  };
                  students.push(student);
                }

                resolve(response);
              })["catch"](function (error) {
                console.log(error);
                reject("Some problem exist try again later");
              });
            });
          }
          /**
           * insert or update the private messages locally
           * @param classes Array of class object
           */

        }, {
          key: "insertPrivateMessages",
          value: function insertPrivateMessages(messages) {
            var _this26 = this;

            if (this.platform.is('cordova')) {
              messages.forEach(function (message) {
                _this26.db.executeSql("INSERT OR REPLACE INTO private_message (ID, date, first_name, notification, pic, status, title, user_no, user_right, user_type) \n        VALUES(".concat(message.ID, ", \"").concat(message.date, "\", \"").concat(message.first_name, "\", \"").concat(message.notification, "\", \"").concat(message.pic, "\", ").concat(message.status, ", \"").concat(message.title, "\", ").concat(message.user_no, ", \"").concat(message.user_right, "\", ").concat(message.user_type, ")"), []).then(function () {
                  console.log(message.ID, " inserted");
                })["catch"](function (err) {
                  console.log(err);
                });
              });
            }
          }
          /**
           * Get the Private messages
           */

        }, {
          key: "getPrivateMessages",
          value: function getPrivateMessages() {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              _this27.db.executeSql('SELECT * from private_message', []).then(function (response) {
                var messages = [];

                for (var i = 0; i < response.rows.length; i++) {
                  messages.push(response.rows.item(i));
                }

                resolve(messages);
              })["catch"](function (error) {
                console.log(error);
                reject("Some problem exist try again later");
              });
            });
          }
          /**
           * insert or update the Parent connect support ticket
           * @param classes Array of class object
           */

        }, {
          key: "insertParentConnectMessages",
          value: function insertParentConnectMessages(messages) {
            var _this28 = this;

            if (this.platform.is('cordova')) {
              messages.forEach(function (message) {
                _this28.db.executeSql("INSERT OR REPLACE INTO parent_connect (id, created, first_name, last_name, message, name, parent_user_no, pic, school_id, ticket_status, ticket_status_updated_by, title, updated_time) \n        VALUES(".concat(message.id, ", \"").concat(message.created, "\", \"").concat(message.first_name, "\", \"").concat(message.last_name, "\", \"").concat(message.message, "\", \"").concat(message.name, "\", ").concat(message.parent_user_no, ", \"").concat(message.pic, "\", ").concat(message.school_id, ", ").concat(message.ticket_status, ", ").concat(message.ticket_status_updated_by, ", \"").concat(message.title, "\", \"").concat(message.updated_time, "\")"), []).then(function () {
                  console.log(message.id, " inserted");
                })["catch"](function (err) {
                  console.log(err);
                });
              });
            }
          }
          /**
           * Get the student list registered for particular course/class
           */

        }, {
          key: "getParentConnectMessages",
          value: function getParentConnectMessages() {
            var _this29 = this;

            return new Promise(function (resolve, reject) {
              _this29.db.executeSql('SELECT * from parent_connect', []).then(function (response) {
                var messages = [];

                for (var i = 0; i < response.rows.length; i++) {
                  messages.push(response.rows.item(i));
                }

                resolve(messages);
              })["catch"](function (error) {
                console.log(error);
                reject("Some problem exist try again later");
              });
            });
          }
          /**
           * truncate the table when user logged out
           */

        }, {
          key: "deleteDataBase",
          value: function deleteDataBase() {
            if (this.platform.is('cordova')) {
              this.db.executeSql('DELETE FROM classes', []).then(function () {
                console.log("Table deleted");
              });
              this.db.executeSql('DELETE FROM students', []).then(function () {
                console.log("Table deleted");
              });
              this.db.executeSql('DELETE FROM private_message', []).then(function () {
                console.log("Table deleted");
              });
              this.db.executeSql('DELETE FROM parent_connect', []).then(function () {
                console.log("Table deleted");
              });
            }
          }
        }]);

        return DatabaseService;
      }();

      DatabaseService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], DatabaseService);
      /***/
    },

    /***/
    "JzvJ":
    /*!*********************************************************!*\
      !*** ./src/app/components/loader/loader.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function JzvJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n  background: transparent;\n  text-align: center;\n  font-family: \"Comfortaa\", cursive;\n}\n\nsvg {\n  width: 100px;\n  height: 100px;\n  margin: 20px;\n  display: inline-block;\n}\n\nh1 {\n  text-align: center;\n  color: #fff;\n  margin: 0 0 100px;\n  font-size: 34px;\n  font-weight: 100;\n  text-transform: uppercase;\n  background-color: #e43725;\n  padding: 20px 0;\n}\n\nh1 b {\n  font-weight: 700;\n}\n\n.made-with-love {\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 10px;\n  font-family: arial;\n  color: #fff;\n}\n\n.made-with-love i {\n  font-style: normal;\n  color: #f50057;\n  font-size: 14px;\n  position: relative;\n  top: 2px;\n}\n\n.made-with-love a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.made-with-love a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUhGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFFRTtFQUNFLGdCQUFBO0FBQUo7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFFSTtFQUNFLDBCQUFBO0FBQU4iLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXJpYWJsZXNcclxuJGJhc2VDb2xvcjogI2U3NGMzYztcclxuJGZvbnRDb2xvcjogI2ZmZjtcclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XHJcbn1cclxuc3ZnIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwIDAgMTAwcHg7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2U3NGMzYywgNSk7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vZm9sbG93IG1lIHRlbXBsYXRlXHJcbi5tYWRlLXdpdGgtbG92ZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2Y1MDA1NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvKTtcclxuLy8gYSB7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIGJvdHRvbTogMiU7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGNvbG9yOiAjMGZhO1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gYm9keSwgaHRtbCB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi8vIC5ib2R5IHtcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMDBiMzc3KSwgdG8oIzAwZDY4ZikpO1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYjM3NywgIzAwZDY4Zik7XHJcbi8vICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA5MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuLy8gICAvLyBtYXJnaW46IDBweDtcclxuLy8gICAvLyBwYWRkaW5nOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kZW1vIHtcclxuLy8gICB3aWR0aDogMTAwcHg7XHJcbi8vICAgaGVpZ2h0OiAxMDJweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDQ1JTtcclxuLy8gICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4vLyB9XHJcblxyXG4vLyAuY2lyY2xlIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbi8vIC5jaXJjbGUgLmlubmVyIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuLy8gICBib3JkZXI6IDVweCBzb2xpZCAjM2Q1YWZlO1xyXG4vLyAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuLy8gICBib3JkZXItdG9wOiBub25lO1xyXG4vLyAgIGJhY2tncm91ZG4tY2xpcDogcGFkZGluZztcclxuLy8gICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggcmdiYSgwLCAyNTUsIDE3MCwgMC4xNSk7XHJcbi8vIH1cclxuXHJcbi8vIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuLy8gICBmcm9tIHtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyAgIH1cclxuLy8gICB0byB7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4vLyAgIGZyb20ge1xyXG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgfVxyXG4vLyAgIHRvIHtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmNpcmNsZTpudGgtb2YtdHlwZSgwKSB7XHJcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuLy8gICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4vLyB9XHJcbi8vIC5jaXJjbGU6bnRoLW9mLXR5cGUoMCkgLmlubmVyIHtcclxuLy8gICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbi8vICAgICAgICAgICBhbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyB9XHJcblxyXG4vLyAuY2lyY2xlOm50aC1vZi10eXBlKDEpIHtcclxuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcclxuLy8gICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcclxuLy8gfVxyXG4vLyAuY2lyY2xlOm50aC1vZi10eXBlKDEpIC5pbm5lciB7XHJcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuLy8gfVxyXG5cclxuLy8gLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XHJcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDBkZWcpO1xyXG4vLyAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTQwZGVnKTtcclxuLy8gfVxyXG4vLyAuY2lyY2xlOm50aC1vZi10eXBlKDIpIC5pbm5lciB7XHJcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4vLyAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuLy8gfVxyXG5cclxuLy8gLmRlbW8ge1xyXG4vLyAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDVzIGluZmluaXRlIGxpbmVhcjtcclxuLy8gICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiA1cyBpbmZpbml0ZSBsaW5lYXI7XHJcbi8vIH0iXX0= */";
      /***/
    },

    /***/
    "MsQK":
    /*!************************************************************!*\
      !*** ./src/app/service/file-upload/file-upload.service.ts ***!
      \************************************************************/

    /*! exports provided: FileUploadService */

    /***/
    function MsQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
        return FileUploadService;
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


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../data/data.service */
      "v2nD");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];

      var FileUploadService = /*#__PURE__*/function () {
        function FileUploadService(httpClient, http, file, dataProvider, transfer) {
          _classCallCheck(this, FileUploadService);

          this.httpClient = httpClient;
          this.http = http;
          this.file = file;
          this.dataProvider = dataProvider;
          this.transfer = transfer;
          this.uploadProgress = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
          this.dataProvider.language.subscribe(function (res) {
            console.log('res>>>>', res);
            _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lang_code = res;
          });
        }

        _createClass(FileUploadService, [{
          key: "uploadfile",
          value: function uploadfile(imagePath, data, endPoint, callBack) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this30 = this;

              var formData, imageFile, header;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.dataProvider.showLoading();
                      formData = new FormData();

                      if (!imagePath) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 5;
                      return this.getSingleFile(imagePath);

                    case 5:
                      imageFile = _context3.sent;
                      formData.append('file', imageFile, imageFile.name);

                    case 7:
                      Object.keys(data).map(function (key) {
                        formData.append(key, data[key]);
                      });
                      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                      formData.append('lang_code', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lang_code);
                      header.append('Content-Type', 'application/json');
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint, formData).subscribe(function (response) {
                        _this30.dataProvider.hideLoading();

                        if (response) {
                          if (response['_body'] != '') {
                            var resObj = response;
                            callBack(response);
                          } else {
                            callBack(false);
                          }
                        }
                      }, function (error) {
                        _this30.dataProvider.hideLoading();

                        callBack(false);
                      });

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getSingleFile",
          value: function getSingleFile(filePath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var fileEntry, cordovaFile;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.file.resolveLocalFilesystemUrl(filePath);

                    case 2:
                      fileEntry = _context4.sent;
                      _context4.next = 5;
                      return this.convertFileEntryToCordovaFile(fileEntry);

                    case 5:
                      cordovaFile = _context4.sent;
                      console.log('cordovaFile', cordovaFile); // Use FileReader on the File object to populate it with the true file contents.

                      return _context4.abrupt("return", this.convertCordovaFileToJavascriptFile(cordovaFile));

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "convertFileEntryToCordovaFile",
          value: function convertFileEntryToCordovaFile(fileEntry) {
            return new Promise(function (resolve, reject) {
              fileEntry.file(resolve, reject);
            });
          }
        }, {
          key: "convertCordovaFileToJavascriptFile",
          value: function convertCordovaFileToJavascriptFile(cordovaFile) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();

              reader.onloadend = function () {
                if (reader.error) {
                  reject(reader.error);
                } else {
                  var blob = new Blob([reader.result], {
                    type: cordovaFile.type
                  });
                  blob.lastModifiedDate = new Date();
                  blob.name = cordovaFile.name;
                  console.log('blob', blob);
                  resolve(blob);
                }
              };

              reader.readAsArrayBuffer(cordovaFile);
            });
          }
        }, {
          key: "uploadByTransfer",
          value: function uploadByTransfer(media, formData, endPoint, callBack) {
            var _this31 = this;

            this.dataProvider.showLoading();
            var today = new Date();

            if (media) {
              var readyToUpload = function readyToUpload(file) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  var _this32 = this;

                  var localURL, fileName, tmpFile, splitted, options, transfer;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          localURL = file && file.localURL ? file.localURL : '';
                          fileName = "";
                          tmpFile = localURL.substr(localURL.lastIndexOf('/') + 1);

                          if (tmpFile) {
                            splitted = tmpFile.split('?');
                            fileName = splitted[0] || "";
                          }

                          if (fileName == "") fileName = file && file.lastModified ? file.lastModified : 'CDW-' + today.getTime();
                          options = {
                            fileKey: 'file',
                            fileName: fileName,
                            mimeType: "multipart/form-data",
                            params: formData,
                            chunkedMode: false,
                            headers: {
                              Connection: "close"
                            }
                          };
                          console.log('upload', options);
                          transfer = this.transfer.create();
                          transfer.upload(media, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint, options).then(function (transferResponse) {
                            console.log('transferResponse', transferResponse);

                            _this32.dataProvider.hideLoading();

                            callBack(transferResponse);
                          }, function (e) {
                            console.log('transferResponse ERROR', e);

                            _this32.dataProvider.hideLoading();

                            callBack(false);
                          });

                        case 9:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }));
              };

              this.file.resolveLocalFilesystemUrl(media).then(function (entry) {
                entry.file(function (file) {
                  return readyToUpload(file);
                });
              })["catch"](function (err) {
                _this31.dataProvider.hideLoading(); // this.presentToast('Error while reading file.');


                console.log('resolveLocalFilesystemUrl CATCH ERROR:::', err);
                callBack(false);
              });
            } else {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
              formData.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lang_code;
              header.append('Content-Type', 'application/json');
              this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint, formData, {
                headers: header
              }).subscribe(function (response) {
                _this31.dataProvider.hideLoading();

                if (response) {
                  if (response['_body'] != '') {
                    var resObj = response;
                    callBack(response);
                  } else {
                    callBack(false);
                  }
                }
              }, function (error) {
                _this31.dataProvider.hideLoading();

                callBack(false);
              });
            }
          }
        }, {
          key: "upload____OLD",
          value: function upload____OLD(media, formData, endPoint, callBack) {
            var _this33 = this;

            this.dataProvider.showLoading();

            var readyToUpload = function readyToUpload(file) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this34 = this;

                var today, localURL, fileName, tmpFile, splitted, options, transfer;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        today = new Date();
                        localURL = file && file.localURL ? file.localURL : '';
                        fileName = "";
                        tmpFile = localURL.substr(localURL.lastIndexOf('/') + 1);

                        if (tmpFile) {
                          splitted = tmpFile.split('?');
                          fileName = splitted[0] || "";
                        }

                        if (fileName == "") fileName = file && file.lastModified ? file.lastModified : 'CDW-' + today.getTime();
                        options = {
                          fileKey: 'file',
                          fileName: fileName,
                          mimeType: formData.type,
                          params: formData,
                          chunkedMode: false
                        };
                        console.log('upload', options);
                        transfer = this.transfer.create();
                        transfer.upload(media, encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL + endPoint), options).then(function (transferResponse) {
                          console.log('transferResponse', transferResponse);

                          _this34.dataProvider.hideLoading();

                          callBack(transferResponse);
                        }, function (e) {
                          console.log('transferResponse ERROR', e);

                          _this34.dataProvider.hideLoading();

                          callBack(false);
                        });

                      case 10:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            };

            this.file.resolveLocalFilesystemUrl(media).then(function (entry) {
              entry.file(function (file) {
                return readyToUpload(file);
              });
            })["catch"](function (err) {
              _this33.dataProvider.hideLoading(); // this.presentToast('Error while reading file.');


              console.log('resolveLocalFilesystemUrl CATCH ERROR:::', err);
              callBack(false);
            });
          }
        }, {
          key: "uploadByBlob",
          value: function uploadByBlob(data) {
            console.log(data);
          }
        }]);

        return FileUploadService;
      }();

      FileUploadService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
        }, {
          type: _data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]
        }];
      };

      FileUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]])], FileUploadService);
      /***/
    },

    /***/
    "Oo+P":
    /*!*************************************************************!*\
      !*** ./src/app/components/rate-app/rate-app.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function OoP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  height: 373px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n  background: #dadce4;\n}\n\n.rating {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  overflow: hidden;\n  flex-direction: row-reverse;\n  height: 150px;\n  position: relative;\n}\n\n.rating-0 {\n  filter: grayscale(100%);\n}\n\n.rating > input {\n  display: none;\n}\n\n.rating > label {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  margin-top: auto;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 76%;\n  transition: 0.3s;\n}\n\n.rating > input:checked ~ label,\n.rating > input:checked ~ label ~ label {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n\n.rating > input:not(:checked) ~ label:hover,\n.rating > input:not(:checked) ~ label:hover ~ label {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e\");\n}\n\n.emoji-wrapper {\n  width: 100%;\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.emoji-wrapper:before,\n.emoji-wrapper:after {\n  content: \"\";\n  height: 15px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n\n.emoji-wrapper:before {\n  top: 0;\n  background: linear-gradient(to bottom, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n\n.emoji-wrapper:after {\n  bottom: 0;\n  background: linear-gradient(to top, white 0%, white 35%, rgba(255, 255, 255, 0) 100%);\n}\n\n.emoji {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s;\n}\n\n.emoji > svg {\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n\n#rating-1:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-100px);\n}\n\n#rating-2:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-200px);\n}\n\n#rating-3:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-300px);\n}\n\n#rating-4:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-400px);\n}\n\n#rating-5:checked ~ .emoji-wrapper > .emoji {\n  transform: translateY(-500px);\n}\n\n.feedback {\n  max-width: 360px;\n  background-color: #fff;\n  width: 100%;\n  padding: 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);\n}\n\n.desc-data {\n  width: 79vw;\n  font-size: 12px;\n}\n\n.rating-star {\n  font-size: 1.5rem;\n}\n\n.max_length {\n  text-align: left;\n  padding-left: 16px;\n  color: #ababab;\n  margin-top: 10px;\n}\n\nion-button {\n  height: 36px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGUtYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUdFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUVRLG1CQUFBO0VBRUEsdUJBQUE7RUFDUixlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBRVEsdUJBQUE7RUFDUixnQkFBQTtFQUdRLDJCQUFBO0VBQ1IsYUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFFVSx1QkFBQTtBQUFWOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUdBOztFQUVFLHFpQkFBQTtBQUFGOztBQUdBOztFQUVFLHFpQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUdBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLE1BQUE7RUFFQSx3RkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUVBLHFGQUFBO0FBQUY7O0FBR0E7RUFFRSxhQUFBO0VBR1Esc0JBQUE7RUFFQSxtQkFBQTtFQUVSLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFFVSw2QkFBQTtBQUFWOztBQUdBO0VBRVUsNkJBQUE7QUFBVjs7QUFHQTtFQUVVLDZCQUFBO0FBQVY7O0FBR0E7RUFFVSw2QkFBQTtBQUFWOztBQUdBO0VBRVUsNkJBQUE7QUFBVjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUdRLHNCQUFBO0VBQ1IsZUFBQTtFQUVRLG1CQUFBO0VBQ1IsMENBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDRSxlQUFBO0FBQUo7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJyYXRlLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3N1YnRsZXBhdHRlcm5zL3BhdHRlcm5zL2NvbmNyZXRlLXRleHR1cmUucG5nXCIpO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogMzczcHg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkYWRjZTQ7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmF0aW5nLTAge1xyXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmF0aW5nID4gbGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNlM2UzZTMnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDc2JTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB+IGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNmY2Q5M2EnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0Om5vdCg6Y2hlY2tlZCkgfiBsYWJlbDpob3ZlcixcclxuLnJhdGluZyA+IGlucHV0Om5vdCg6Y2hlY2tlZCkgfiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTI2LjcyOScgaGVpZ2h0PScxMjYuNzMnJTNlJTNjcGF0aCBmaWxsPSclMjNkOGIxMWUnIGQ9J00xMjEuMjE1IDQ0LjIxMmwtMzQuODk5LTMuM2MtMi4yLS4yLTQuMTAxLTEuNi01LTMuN2wtMTIuNS0zMC4zYy0yLTUtOS4xMDEtNS0xMS4xMDEgMGwtMTIuNCAzMC4zYy0uOCAyLjEtMi44IDMuNS01IDMuN2wtMzQuOSAzLjNjLTUuMi41LTcuMyA3LTMuNCAxMC41bDI2LjMgMjMuMWMxLjcgMS41IDIuNCAzLjcgMS45IDUuOWwtNy45IDMyLjM5OWMtMS4yIDUuMTAxIDQuMyA5LjMgOC45IDYuNjAxbDI5LjEtMTcuMTAxYzEuOS0xLjEgNC4yLTEuMSA2LjEgMGwyOS4xMDEgMTcuMTAxYzQuNiAyLjY5OSAxMC4xLTEuNCA4Ljg5OS02LjYwMWwtNy44LTMyLjM5OWMtLjUtMi4yLjItNC40IDEuOS01LjlsMjYuMy0yMy4xYzMuOC0zLjUgMS42LTEwLTMuNi0xMC41eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmVtb2ppLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZW1vamktd3JhcHBlcjpiZWZvcmUsXHJcbi5lbW9qaS13cmFwcGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZW1vamktd3JhcHBlcjpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHdoaXRlKSwgY29sb3Itc3RvcCgzNSUsIHdoaXRlKSwgdG8ocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDAlLCB3aGl0ZSAzNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5lbW9qaS13cmFwcGVyOmFmdGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSh3aGl0ZSksIGNvbG9yLXN0b3AoMzUlLCB3aGl0ZSksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB3aGl0ZSAwJSwgd2hpdGUgMzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG59XHJcblxyXG4uZW1vamkge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5lbW9qaSA+IHN2ZyB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4jcmF0aW5nLTE6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbn1cclxuXHJcbiNyYXRpbmctMjpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHB4KTtcclxufVxyXG5cclxuI3JhdGluZy0zOmNoZWNrZWQgfiAuZW1vamktd3JhcHBlciA+IC5lbW9qaSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzAwcHgpO1xyXG59XHJcblxyXG4jcmF0aW5nLTQ6Y2hlY2tlZCB+IC5lbW9qaS13cmFwcGVyID4gLmVtb2ppIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MDBweCk7XHJcbn1cclxuXHJcbiNyYXRpbmctNTpjaGVja2VkIH4gLmVtb2ppLXdyYXBwZXIgPiAuZW1vamkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcclxufVxyXG5cclxuLmZlZWRiYWNrIHtcclxuICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uZGVzYy1kYXRhe1xyXG4gIHdpZHRoOiA3OXZ3O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yYXRpbmctc3RhcntcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ubWF4X2xlbmd0aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgY29sb3I6ICNhYmFiYWI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICBoZWlnaHQ6MzZweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SSFD":
    /*!*******************************************************************!*\
      !*** ./src/app/connect-new-message/connect-new-message.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ConnectNewMessagePageModule */

    /***/
    function SSFD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectNewMessagePageModule", function () {
        return ConnectNewMessagePageModule;
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


      var _connect_new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./connect-new-message-routing.module */
      "4tkT");
      /* harmony import */


      var _connect_new_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./connect-new-message.page */
      "1Ee9");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ConnectNewMessagePageModule = function ConnectNewMessagePageModule() {
        _classCallCheck(this, ConnectNewMessagePageModule);
      };

      ConnectNewMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _connect_new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectNewMessagePageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_connect_new_message_page__WEBPACK_IMPORTED_MODULE_6__["ConnectNewMessagePage"]]
      })], ConnectNewMessagePageModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./service/data/data.service */
      "v2nD");
      /* harmony import */


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./service/database/database.service */
      "HbOQ");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/deeplinks/ngx */
      "lQWD");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      "XqOP"); //import { tabs } from '../pages/tabs/tabs';


      var AppComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         * @param platform platform object
         * @param statusBar statusbar object to of StatusBar plugin
         * @param splashScreen used for splash screen hide
         * @param translate translation service
         * @param events used for app custom events
         * @param auth Authentication provider object
         * @param screen Object of ScreenOrientation for screen orientation
         * @param dataProvider Dataprovider provider object
         * @param dbProvider Local database  provider object
         * @param network Network object of plugin NetworkInformation
         */
        function AppComponent(platform, statusBar, splashScreen, translate, auth, screen, dataProvider, dbProvider, network, zone, route, storage, deeplinks, navController, socialSharing, iap, fcm, menuCtrl, toastController, router) {
          var _this35 = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.splashScreen = splashScreen;
          this.translate = translate;
          this.auth = auth;
          this.screen = screen;
          this.dataProvider = dataProvider;
          this.dbProvider = dbProvider;
          this.network = network;
          this.zone = zone;
          this.route = route;
          this.storage = storage;
          this.deeplinks = deeplinks;
          this.navController = navController;
          this.socialSharing = socialSharing;
          this.iap = iap;
          this.fcm = fcm;
          this.menuCtrl = menuCtrl;
          this.toastController = toastController;
          this.router = router;
          this.loggedin = false;
          this.user = {};
          this.lang = {};
          this.activeLink = {};
          this.changedLanguage = 'English';
          this.checked = false;
          this.runNetwork = false;
          this.routeDone = false;
          this.storage.get('language').then(function (res) {
            // console.log('res',res);
            if (res) {
              if (res == 'en') {
                _this35.checked = false;
              } else {
                _this35.checked = true;
              }

              _this35.translate.setDefaultLang(res);

              _this35.dataProvider.language.emit(res);
            } else {
              _this35.checked = true;

              _this35.translate.setDefaultLang('ar');

              _this35.dataProvider.language.emit('ar');
            }

            _this35.initializeApp();
          });
          this.auth.event.subscribe(function (status) {
            if (status.loggedin) {
              _this35.loggedin = status.loggedin;

              _this35.setUserdetails();

              if (status.loggedin) {
                _this35.pages = [];

                if (_this35.user.userType == 'parent') {} else if (_this35.user.userType != 'student') {
                  _this35.pages.push({
                    title: _this35.lang.sidemenu.class_list,
                    component: "tabs",
                    icon: "list"
                  });
                } else if (_this35.user.userType == 'moderator') {
                  _this35.pages.push({
                    title: _this35.lang.sidemenu.student_report,
                    component: "student-report-classes",
                    icon: "bar-chart"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.billetins,
                    component: "bulletins",
                    icon: "list"
                  });
                }

                if (_this35.user.userType == 'moderator') {
                  _this35.pages.push({
                    title: _this35.lang.sidemenu.student_report,
                    component: "student-report-classes",
                    icon: "bar-chart"
                  });
                }

                if (_this35.user.userType == 'admin') {
                  _this35.pages.push({
                    title: _this35.lang.sidemenu.student_report,
                    component: "student-report-classes",
                    icon: "bar-chart"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.users_list,
                    component: "users-list",
                    icon: "list"
                  }); //added new list 12/11/21


                  _this35.pages.push({
                    title: _this35.lang.sidemenu.manage_teacher,
                    component: "manage-teacher",
                    icon: "list"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.manage_student,
                    component: "manage-student",
                    icon: "list"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.new_parent,
                    component: "requested-parent",
                    icon: "list"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.tasks_calendar,
                    component: "tasks-calendar",
                    icon: "calendar-outline"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.billetins,
                    component: "bulletins",
                    icon: "list"
                  });

                  _this35.pages.push({
                    title: _this35.lang.sidemenu.parent_connect,
                    component: "parentconnect",
                    icon: "list"
                  });
                }

                if (_this35.user.userType == 'student') {}

                if (_this35.user.userType == 'teacher' || _this35.user.userType == 'moderator') {
                  _this35.pages.push({
                    title: _this35.lang.sidemenu.billetins,
                    component: "bulletins",
                    icon: "list"
                  });
                }

                _this35.pages.push({
                  title: _this35.lang.sidemenu.e_learning,
                  component: "elearning-schools",
                  icon: "list"
                });
              } else {
                _this35.pages = [{
                  title: _this35.lang.sidemenu.login,
                  component: "login",
                  icon: "log-in"
                }, {
                  title: _this35.lang.sidemenu.news,
                  component: "news",
                  icon: "time"
                }, {
                  title: _this35.lang.sidemenu.e_learning,
                  component: "elearning-schools",
                  icon: "list"
                }];
              }
            }

            if (status.loggedin == false) {
              _this35.user = {};
              _this35.loggedin = status.loggedin;
              _this35.pages = [{
                title: _this35.lang.sidemenu.login,
                component: "login",
                icon: "log-in"
              }, {
                title: _this35.lang.sidemenu.news,
                component: "news",
                icon: "time"
              }, {
                title: _this35.lang.sidemenu.e_learning,
                component: "elearning-schools",
                icon: "list"
              }];
            }
          });
        }
        /**
         * Initializer function will run when app is ready
         */


        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this36 = this;

            this.platform.ready().then(function () {
              _this36.statusBar.backgroundColorByHexString("#FFFFFF");

              _this36.statusBar.overlaysWebView(false);

              _this36.statusBar.styleDefault();

              _this36.splashScreen.hide();

              if (_this36.platform.is('cordova')) {
                window.open = cordova.InAppBrowser.open;
              }

              _this36.translate.get(["sidemenu", "alertmessages", "app_rate", "switch_account"]).subscribe(function (response) {
                _this36.lang = response;

                _this36.dbProvider.openDataBase().then(function () {
                  if (localStorage.getItem("userloggedin")) {
                    _this36.loggedin = true;

                    _this36.setUserdetails();

                    _this36.pages = [];

                    if (_this36.user.userType == 'parent') {} else if (_this36.user.userType != 'student') {
                      _this36.pages.push({
                        title: _this36.lang.sidemenu.class_list,
                        component: "tabs",
                        icon: "list"
                      });
                    } else if (_this36.user.userType == 'moderator') {
                      _this36.pages.push({
                        title: _this36.lang.sidemenu.student_report,
                        component: "student-report-classes",
                        icon: "bar-chart"
                      });

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.billetins,
                        component: "bulletins",
                        icon: "list"
                      });
                    }

                    if (_this36.user.userType == 'moderator') {
                      _this36.pages.push({
                        title: _this36.lang.sidemenu.student_report,
                        component: "student-report-classes",
                        icon: "bar-chart"
                      });
                    }

                    if (_this36.user.userType == 'admin') {
                      console.log("checking user type:::", _this36.user.userType);

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.student_report,
                        component: "student-report-classes",
                        icon: "bar-chart"
                      });

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.users_list,
                        component: "users-list",
                        icon: "list"
                      }); //added new list 12/11/21


                      _this36.pages.push({
                        title: _this36.lang.sidemenu.manage_teacher,
                        component: "manage-teacher",
                        icon: "list"
                      });

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.manage_student,
                        component: "manage-student",
                        icon: "list"
                      });

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.new_parent,
                        component: "requested-parent",
                        icon: "list"
                      });

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.tasks_calendar,
                        component: "tasks-calendar",
                        icon: "calendar-outline"
                      }); //added 12/11/21


                      _this36.pages.push({
                        title: _this36.lang.sidemenu.billetins,
                        component: "bulletins",
                        icon: "list"
                      });

                      _this36.pages.push({
                        title: _this36.lang.sidemenu.parent_connect,
                        component: "parentconnect",
                        icon: "list"
                      });
                    }

                    if (_this36.user.userType == 'student') {}

                    if (_this36.user.userType == 'teacher' || _this36.user.userType == 'moderator') {
                      _this36.pages.push({
                        title: _this36.lang.sidemenu.billetins,
                        component: "bulletins",
                        icon: "list"
                      });
                    }

                    _this36.pages.push({
                      title: _this36.lang.sidemenu.e_learning,
                      component: "elearning-schools",
                      icon: "list"
                    });

                    if (_this36.user.userType == 'parent') {
                      _this36.rootPage = "ChildrenPage";
                    } else {
                      _this36.rootPage = 'tabs';
                    }
                  } else {
                    _this36.checkRoute();

                    _this36.pages = [{
                      title: _this36.lang.sidemenu.login,
                      component: "login",
                      icon: "log-in"
                    }, {
                      title: _this36.lang.sidemenu.news,
                      component: "news",
                      icon: "list"
                    }, {
                      title: _this36.lang.sidemenu.e_learning,
                      component: "elearning-schools",
                      icon: "list"
                    }];
                    _this36.rootPage = "login";
                  }

                  _this36.deeplinks.routeWithNavController(_this36.navController, {
                    '/registerteacher': 'register-teacher',
                    '/parent_register': 'parent-register'
                  }).subscribe(function (match) {
                    console.log('Successfully matched route', match);
                    var link = match.$link.path;
                    var query = match.$link.queryString;
                    var que = query.split("&");
                    var id = que[0].split("=");
                    var un = que[1].split("=");
                    var res = link.split("/");
                    var es = res[3].split(".");
                    var s = es[0];
                    console.log('app', s, id, un);
                    var navigation = {
                      state: {
                        id: id[1],
                        un: un[1]
                      }
                    };

                    if (s == 'parent_register') {
                      _this36.zone.run(function () {
                        _this36.router.navigate(['parent-register'], navigation);
                      });
                    } else {
                      _this36.zone.run(function () {
                        _this36.router.navigate(['register-teacher'], navigation);
                      });
                    }

                    _this36.routeDone = true;
                  }, function (nomatch) {// console.error('Got a deeplink that didn\'t match', nomatch);
                  });
                });

                if (_this36.platform.is('cordova')) {
                  _this36.screen.lock(_this36.screen.ORIENTATIONS.PORTRAIT).then(function () {})["catch"](function (err) {
                    console.log(err);
                  });

                  setTimeout(function () {
                    if (_this36.network.type == _this36.network.Connection.UNKNOWN || _this36.network.type == _this36.network.Connection.NONE) {// this.dataProvider.showToast(this.lang.alertmessages.offline);
                      // console.log('notOnline:::::::::::::::::::',this.network.type);
                    }
                  }, 1000);

                  _this36.network.onDisconnect().subscribe(function () {
                    // console.log('notOnline:::::::::::::::::::',this.network.type);
                    _this36.dataProvider.showToast(_this36.lang.alertmessages.not_online);
                  });

                  _this36.network.onConnect().subscribe(function () {
                    // console.log('online:::::::::::::::::::',this.network.type);
                    if (!_this36.runNetwork) {
                      _this36.runNetwork = true; //  this.dataProvider.showToast(this.lang.alertmessages.online);
                    }
                  });
                }
              });

              _this36.auth.event.subscribe(function (data) {
                if (data) {
                  if (data.activeLink) {
                    // console.log('activeLink',data.activeLink);
                    _this36.activeLink = data.activeLink;
                  }
                }
              });

              if (_this36.platform.is('ios')) {
                var w = window;
                w.FCMPlugin.requestPushPermissionIOS(function () {
                  console.log('push permissions recieved');
                }, function (e) {
                  console.log('push permissions failed', e);
                });
              }

              _this36.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                  console.log("Received in background", data);
                } else {
                  console.log("Received in foreground", data);

                  if (_this36.platform.is('ios')) {
                    _this36.presentToast(data.aps.alert.body);
                  } else {
                    _this36.presentToast(data.body);
                  }
                }

                ;
              });
            });
          }
          /** present toast for notification
              @param: message -- message of notification
           **/

        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3000,
                        position: "top",
                        mode: 'ios',
                        color: 'danger'
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
          /**
           * Function to open the page
           * @param page Page object of pages array
           */

        }, {
          key: "openPage",
          value: function openPage(page) {
            if (page.component) {
              if (page.component == "login") {
                this.router.navigate([page.component]);
              } else {
                this.router.navigate([page.component]);
              }
            } else {
              this.router.navigate([page]);
            }

            this.activePage = page;
            this.menuCtrl.close();
          }
          /**
           * Used to get the active page
           * @param page Page object of pages array
           */

        }, {
          key: "getActivePage",
          value: function getActivePage(page) {
            return this.activePage == page;
          }
        }, {
          key: "checkRoute",
          value: function checkRoute() {
            if (!this.routeDone) {
              if (this.user.userType == 'parent') {
                this.router.navigate(['tabs/children'], {
                  replaceUrl: true
                });
              } else if (!this.user.userType) {
                this.router.navigate(['login'], {
                  replaceUrl: true
                });
              } else if (this.user.userType == 'student') {
                this.router.navigate(['tabs/student-notes'], {
                  replaceUrl: true
                });
              } else {
                this.router.navigate(['tabs'], {
                  replaceUrl: true
                });
              }
            }
          }
          /**
           * Logout function
           */

        }, {
          key: "logout",
          value: function logout() {
            var _this37 = this;

            var userDetail = JSON.parse(localStorage.getItem("userloggedin"));
            var data = {
              "user_no": userDetail.details.user_no,
              "session_id": userDetail.session_id
            };
            this.dataProvider.showLoading();
            this.auth.doLogout(data).then(function (resp) {
              _this37.dataProvider.hideLoading();

              _this37.router.navigate(['login'], {
                replaceUrl: true
              });
            })["catch"](function (error) {
              _this37.dataProvider.hideLoading();
            });
            this.menuCtrl.close();
          }
          /**
           * Function to use set user details
           */

        }, {
          key: "setUserdetails",
          value: function setUserdetails() {
            //  console.log('details',localStorage.getItem("userloggedin"));
            if (localStorage.getItem("userloggedin")) {
              var userDetail = JSON.parse(localStorage.getItem("userloggedin"));
              this.isSchoolAdmin = userDetail.details.is_school_admin; // console.log('isSchoolAdmin',this.isSchoolAdmin);
              // console.log(userDetail.details);

              if (userDetail.details.is_school_admin == 1) {
                this.user.name = userDetail.details.school_name;
                this.user.image = userDetail.details.school_logo ? userDetail.details.school_logo : "./assets/imgs/logo.png";
              } else {
                this.user.name = userDetail.details.first_name + " " + userDetail.details.last_name;
                this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
              } // this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";


              this.user.description = userDetail.details.school_name;
              this.user.school_image = userDetail.details.school_logo;
              this.user.is_school_admin = userDetail.details.is_school_admin;

              if (userDetail.details.user_type == '1') {
                if (userDetail.details.school_details != '') {
                  if (userDetail.details.is_school_admin != 1) {
                    this.user.description = '';
                  } else {
                    this.user.description = userDetail.details.school_details;
                  }
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

            this.checkRoute();
          }
          /**
           * Share teacher registration link
           */

        }, {
          key: "shareRegistrationLink",
          value: function shareRegistrationLink() {
            this.socialSharing.share("Teacher Registration", "This is registration link for the new teacher.", null, this.activeLink.link).then(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "shareParentRegistrationLink",
          value: function shareParentRegistrationLink() {
            this.socialSharing.share("Parent Registration", "This is registration link for the new parents.", null, this.activeLink.parent_link_active).then(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "registerParent",
          value: function registerParent(page) {
            if (page == 'parent_register') {
              this.router.navigate(['parent-register']);
            } else {
              this.router.navigate(['requested-parent']);
            }

            this.menuCtrl.close();
          }
        }, {
          key: "shareApp",
          value: function shareApp() {
            var _this38 = this;

            this.dataProvider.showLoading();
            this.dataProvider.getShareLink('elem').then(function (response) {
              _this38.dataProvider.hideLoading();

              console.log(response.short_url);

              _this38.socialSharing.share(null, null, null, response.short_url).then(function (res) {
                console.log(res);
              }, function (err) {
                console.log(err);
              });

              _this38.menuCtrl.close();
            })["catch"](function (e) {
              _this38.dataProvider.hideLoading();

              console.log(e);
            });
          }
        }, {
          key: "rateApp",
          value: function rateApp() {
            var lang = this.translate.getDefaultLang(); //console.log(lang);
            // this.dataProvider.presentRatingPopover(this.lang.app_rate);

            this.dataProvider.showRatePrompt(lang);
            this.menuCtrl.close();
          }
          /**
           * Open backend url
           */

        }, {
          key: "openBackendUrl",
          value: function openBackendUrl() {
            if (this.platform.is('cordova')) {
              var browser = this.iap.create("https://basmapp.com/Att-App/", '_blank');
              browser.show();
            }

            this.menuCtrl.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname.split('folder/')[1];

            if (path !== undefined) {// this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
            }
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(event) {
            var _this39 = this;

            var elem = document.getElementById('laguage_check');
            var lang; // console.log(elem.checked);

            if (elem.checked == true) {
              this.storage.set('language', 'ar');
              this.translate.use('ar');
              this.changedLanguage = 'Arabic';
              lang = 'ar';
            } else {
              this.storage.set('language', 'en');
              this.translate.use('en');
              this.changedLanguage = 'English';
              lang = 'en';
            } //this.menuCtrl.close();
            //this.translate.setDefaultLang(this.changedLanguage);


            this.checkRoute();
            this.translate.get(["sidemenu", "alertmessages", "app_rate"]).subscribe(function (response) {
              _this39.lang = response;

              _this39.initializeApp();

              _this39.dataProvider.language.emit(lang);
            });
          }
        }, {
          key: "changeAccount",
          value: function changeAccount(event) {
            console.log("changeAcc::", event);
            this.dataProvider.switchAccount(event, this.lang.switch_account);
            this.menuCtrl.close();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
        }, {
          type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"]
        }, {
          type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"]
        }, {
          type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__["FCM"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _service_database_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__["FCM"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]])], AppComponent);
      /***/
    },

    /***/
    "TgDs":
    /*!**************************************************************!*\
      !*** ./src/app/service/student-data/student-data.service.ts ***!
      \**************************************************************/

    /*! exports provided: StudentDataService */

    /***/
    function TgDs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentDataService", function () {
        return StudentDataService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      "9lwF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var StudentDataService = /*#__PURE__*/function () {
        function StudentDataService(http, sqlite, platform, storage) {
          _classCallCheck(this, StudentDataService);

          this.http = http;
          this.sqlite = sqlite;
          this.platform = platform;
          this.storage = storage;
          this.studentList = [];
          this.studentNote = [];
          this.staticalData = [];
        }

        _createClass(StudentDataService, [{
          key: "checkStudent",
          value: function checkStudent(student) {
            var _this40 = this;

            this.storage.get('offlineStudent').then(function (data) {
              if (data) {
                _this40.studentList = data;
                _this40.studentList[student.sid] = student;
              } else {
                _this40.studentList[student.sid] = student;
              }

              _this40.storage.set('offlineStudent', _this40.studentList);
            });
          }
        }, {
          key: "checkStudentNotes",
          value: function checkStudentNotes(note, student_id) {
            var _this41 = this;

            this.storage.get('offlineStudentNote').then(function (data) {
              if (data) {
                _this41.studentNote = data;
                _this41.studentNote[student_id] = note;
              } else {
                _this41.studentNote[student_id] = note;
              }

              _this41.storage.set('offlineStudentNote', _this41.studentNote); //	console.log('offlineStudentNote',this.studentNote)

            });
          }
        }, {
          key: "getStudent",
          value: function getStudent(student_id, callback, error) {
            var _this42 = this;

            this.storage.get('offlineStudent').then(function (res) {
              if (res) {
                _this42.studentList = res; //console.log(this.studentList,student_id);

                var data = _this42.studentList[student_id];

                if (data) {
                  callback(data);
                } else {
                  error(data);
                }
              } else {
                error('data');
              }
            });
          }
        }, {
          key: "getStudentNote",
          value: function getStudentNote(student_id, callback, error) {
            var _this43 = this;

            this.storage.get('offlineStudentNote').then(function (res) {
              if (res) {
                _this43.studentNote = res;
                var data = _this43.studentNote[student_id];

                if (data) {
                  callback(data);
                } else {
                  error(data);
                }
              } else {
                error('data');
              }
            });
          }
        }, {
          key: "setStaticalData",
          value: function setStaticalData(user_ID, data) {
            var _this44 = this;

            this.storage.get('offlinestatical').then(function (res) {
              if (res) {
                _this44.staticalData = res;
                _this44.staticalData[user_ID] = data;
              } else {
                _this44.staticalData[user_ID] = data;
              }

              console.log('offlinestaticalSet', _this44.staticalData);

              _this44.storage.set('offlinestatical', _this44.staticalData);
            });
          }
        }, {
          key: "getOfflineStatical",
          value: function getOfflineStatical(user_ID, callback) {
            this.storage.get('offlinestatical').then(function (res) {
              if (res) {
                console.log('offlinestaticalGet', res);
                callback(res[user_ID]);
              } else {
                callback([]);
              }
            });
          }
        }]);

        return StudentDataService;
      }();

      StudentDataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      StudentDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], StudentDataService);
      /***/
    },

    /***/
    "VPdO":
    /*!***********************************************************************!*\
      !*** ./src/app/components/switch-account/switch-account.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SwitchAccountComponent */

    /***/
    function VPdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchAccountComponent", function () {
        return SwitchAccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_switch_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./switch-account.component.html */
      "fHPS");
      /* harmony import */


      var _switch_account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./switch-account.component.scss */
      "r+W6");
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
      /*! ../../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/database/database.service */
      "HbOQ");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      "XqOP");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../components/loader/loader.component */
      "vPOg"); //import { DataProvider } from '../../providers/data/data';
      //import { TabsPage } from '../tabs/tabs';
      //import { DatabaseProvider } from '../../providers/database/database';


      var SwitchAccountComponent = /*#__PURE__*/function () {
        function SwitchAccountComponent(popoverController, navCtrl, device, authProvider, platform, fcm, alertController, // public events: Events, 
        translate, route, zone, router, dbProvider, storage) {
          _classCallCheck(this, SwitchAccountComponent);

          this.popoverController = popoverController;
          this.navCtrl = navCtrl;
          this.device = device;
          this.authProvider = authProvider;
          this.platform = platform;
          this.fcm = fcm;
          this.alertController = alertController;
          this.translate = translate;
          this.route = route;
          this.zone = zone;
          this.router = router;
          this.dbProvider = dbProvider;
          this.storage = storage;
        }

        _createClass(SwitchAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this45 = this;

            console.log(this.lang);
            this.fcm.getToken().then(function (token) {
              _this45.fcm_Token = token;
            });

            if (this.platform.is("cordova")) {
              this.device_id = this.device.uuid;

              if (this.device.platform == 'android' || this.device.platform == 'Android') {
                this.os_type = 1;
              } else {
                this.os_type = 2;
              }
            }

            if (localStorage.getItem("userloggedin")) {
              // console.log('logged in');
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.currentUser = this.userDetails.details.username;
              this.currentUserEmail = this.userDetails.details.email_id;
              console.log('th', this.currentUser);
            }

            if (localStorage.getItem('earlyLogin')) {
              this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
              console.log(this.loggedinUser);
            }
          }
        }, {
          key: "removeUser",
          value: function removeUser(i) {
            var _this46 = this;

            this.warnRemove(function (res) {
              _this46.loggedinUser.splice(i, 1);

              localStorage.setItem("earlyLogin", JSON.stringify(_this46.loggedinUser));
            }, function (e) {});
          }
        }, {
          key: "warnRemove",
          value: function warnRemove(callBack, error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.lang.confirm,
                        message: this.lang.alert_mssg,
                        buttons: [{
                          text: this.lang.cancel,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                            error(false);
                          }
                        }, {
                          text: this.lang.okay,
                          handler: function handler() {
                            console.log('Confirm Okay');
                            callBack(true);
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.popoverController.dismiss();
          }
        }, {
          key: "loginOldUser",
          value: function loginOldUser(users) {
            var _this47 = this;

            console.log(users);
            this.flushLocalStorage();
            setTimeout(function (res) {
              _this47.login(users);
            }, 100);
          }
        }, {
          key: "registerSchol",
          value: function registerSchol() {
            this.router.navigate(['school-registration']);
            this.closeModal();
          }
        }, {
          key: "addNewAccount",
          value: function addNewAccount() {
            var data = {
              "user_no": this.userDetails.details.userDetail,
              "session_id": this.userDetails.session_id
            };
            this.presentPopover(''); // this.dataProvider.showLoading(data);

            this.dismissPopover();
            this.router.navigate(['login']); // this.authProvider.doLogout(data,'here').then(res=>{
            //   this.dismissPopover();
            //   this.router.navigate(['login']);
            // }).catch(e=>{
            // this.dismissPopover();
            // })

            this.closeModal();
          }
        }, {
          key: "flushLocalStorage",
          value: function flushLocalStorage() {
            localStorage.removeItem("userloggedin");
            this.dbProvider.deleteDataBase();
            localStorage.removeItem("attendance");
            this.storage.clear();
          }
        }, {
          key: "login",
          value: function login(users) {
            var _this48 = this;

            this.closeModal();
            this.presentPopover('');
            console.log('logindata', this.user); //  this.dataProvider.showLoading(); 

            users.device_id = this.device_id;
            users.os_type = this.os_type;
            users.registration_id = this.fcm_Token;
            this.authProvider.doLogin(users).then(function (response) {
              _this48.dismissPopover(); //  this.dataProvider.hideLoading();
              // this.events.publish("loggedin", true);


              console.log('res', response);

              _this48.authProvider.publishEvent(true);

              _this48.authProvider.changeUser(true);

              if (response.details.user_type == '4') {
                _this48.router.navigate(['tabs/children'], {
                  replaceUrl: true
                }); // this.navCtrl.setRoot("ChildrenPage");

              } else if (response.details.user_type == '8') {
                _this48.router.navigate(['tabs/student-notes'], {
                  replaceUrl: true
                }); //this.navCtrl.setRoot(TabsPage);

              } else {
                _this48.router.navigate(['tabs'], {
                  replaceUrl: true
                });
              }
            })["catch"](function (error) {
              _this48.dismissPopover(); //    this.dataProvider.hideLoading();
              // this.dataProvider.errorALertMessage(error);


              _this48.router.navigate(['login'], {
                replaceUrl: true
              });
            });
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.popoverController.create({
                        component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                        backdropDismiss: true,
                        //event: ev,
                        translucent: false,
                        // animated:true,
                        cssClass: 'loaderStyle'
                      });

                    case 2:
                      this.popOver = _context9.sent;
                      return _context9.abrupt("return", this.popOver.present());

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "dismissPopover",
          value: function dismissPopover() {
            if (this.popOver) this.popOver.dismiss();
          }
        }]);

        return SwitchAccountComponent;
      }();

      SwitchAccountComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }];
      };

      SwitchAccountComponent.propDecorators = {
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SwitchAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-switch-account',
        template: _raw_loader_switch_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_switch_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])], SwitchAccountComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" side=\"end\" persistent=\"true\">\n      <ion-content class=\"sidemenu-color\">\n            <div *ngIf=\"user.name\" class=\"sidemenu-header\">\n              <ion-row>\n                <ion-col size=\"6\" >\n                    <img [src]=\"user.image\" class=\"profile-picture\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n                </ion-col>\n                <ion-col size=\"6\" >\n                 <!--  <div (click)=\"changeAccount($event)\" class=\"switch-account\"> {{'sidemenu.switch' | translate}}</div> -->\n                  <ion-button mode=\"ios\" size=\"small\" (click)=\"changeAccount($event)\" class=\"switch-account\" style=\"--background: #f4f5f8;color: #000;\">{{'sidemenu.switch' | translate}}</ion-button>\n                </ion-col> \n              </ion-row>\n                    <p class=\"username\">{{user.name}}</p>\n                    <p class=\"username-detail\">{{user.description}}</p>\n            </div>\n        <ion-list padding>\n          <ion-row  class=\"sidemenu-names lang-row\" >\n            <ion-col size=\"6\" text-right >\n              {{'sidemenu.lang' | translate}}  \n            </ion-col>\n            <ion-col size=\"6\" text-center class=\"select-language\">\n              <label class=\"switch\">\n                <input class=\"switch-input\" [checked]=\"checked\" [value]=\"'on'\" type=\"checkbox\" id=\"laguage_check\" (change)=\"setLanguage($event)\" />\n                <span class=\"switch-label\" data-on=\"Arabic\" data-off=\"English\"></span> <span class=\"switch-handle\"></span> \n              </label>\n              <!-- <ion-icon [name]=\"page.icon\" color=\"menuicon\"></ion-icon> -->\n             <!--  <ion-select name=\"language\" placeholder=\"{{changedLanguage}}\" (ionChange)=\"setLanguage($event)\" interface=\"popover\">\n                  <ion-select-option value=\"ar\">Arabic</ion-select-option>\n                  <ion-select-option value=\"en\">English</ion-select-option>\n              </ion-select> -->\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let page of pages\" class=\"sidemenu-names\" [class.activeMenuPage]=\"getActivePage(page)\" menuClose\n            (click)=\"openPage(page)\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon [name]=\"page.icon\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{page.title}}\n            </ion-col>\n          </ion-row>\n           <ion-row class=\"sidemenu-names\" *ngIf=\"activeLink.teacher_link == '1' && user.userType == 'admin'\"\n              (click)=\"shareRegistrationLink()\">\n              <ion-col size=\"3\" text-center>\n                <ion-icon name=\"share\" color=\"menuicon\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"9\" text-right>\n                {{'sidemenu.register_link' | translate}}\n              </ion-col>\n            </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"activeLink.parent_link == '1' && user.userType == 'admin' && isSchoolAdmin\"\n            (click)=\"shareParentRegistrationLink()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"share\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.register_parent' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.name\"\n            (click)=\"openPage('settings')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"settings\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.settings' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.name && (user.userType != 'parent' && user.userType !='student')\"\n            (click)=\"openPage('available-plan')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon color=\"menuicon\" name=\"card\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.Plans' | translate}}\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'student'\"\n            (click)=\"openPage('warning-report')\">\n            <ion-col size=\"3\" text-center>\n             <ion-icon name=\"warning\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.warning_report' | translate}}\n            </ion-col>\n          </ion-row> -->\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'admin' || user.userType == 'moderator' || user.userType == 'viewer'\" \n            (click)=\"openBackendUrl()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"globe\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.backend' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" (click)=\"rateApp()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"star-half\"  color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.rate' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" (click)=\"shareApp()\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon  color=\"menuicon\" name=\"share-social\" ></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.share' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" (click)=\"openPage('contact-us')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon  color=\"menuicon\" name=\"people-outline\" ></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.contact_us' | translate}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'admin' || user.userType == 'moderator' || user.userType == 'viewer'\" \n            (click)=\"openPage('about-us')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"home\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.about_us' | translate}}\n            </ion-col>\n          </ion-row>\n\n         <!--  <ion-row class=\"sidemenu-names\" *ngIf=\"user.userType == 'admin'\"\n            (click)=\"registerParent('new_parent')\">\n            <ion-col size=\"3\" text-center>\n              <ion-icon name=\"list\" color=\"menuicon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" text-right>\n              {{'sidemenu.new_parent' | translate}} \n            </ion-col>\n          </ion-row> -->\n          \n          \n          \n          \n        </ion-list>\n        <div class=\"logouts\">\n          <ion-button  center expand=\"block\" color=\"danger\" class=\"logout\" menuClose (click)=\"logout()\"\n            *ngIf=\"loggedin\">{{'sidemenu.logout' | translate}}</ion-button>\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "YXaF":
    /*!****************************************************!*\
      !*** ./src/app/add-review/add-review.component.ts ***!
      \****************************************************/

    /*! exports provided: AddReviewComponent */

    /***/
    function YXaF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddReviewComponent", function () {
        return AddReviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_review_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-review.component.html */
      "ies4");
      /* harmony import */


      var _add_review_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-review.component.scss */
      "aIeY");
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


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");

      var AddReviewComponent = /*#__PURE__*/function () {
        function AddReviewComponent(modalController, dataProvider, translate) {
          _classCallCheck(this, AddReviewComponent);

          this.modalController = modalController;
          this.dataProvider = dataProvider;
          this.translate = translate;
          this.selections = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          this.postData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          this.stars_array = [{
            title: 'متميز'
          }, {
            title: 'جيد جداً'
          }, {
            title: 'جيد'
          }, {
            title: 'مقبول'
          }, {
            title: 'ضعيف'
          }];
          this.noteMessage = '';
        }

        _createClass(AddReviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this49 = this;

            // this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.translate.get("alertmessages").subscribe(function (val) {
              _this49.lang = val;
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            // using the injected ModalController this page
            // can "dismiss" itself and optionally pass back data
            this.modalController.dismiss({
              role: false,
              'dismissed': true
            });
          }
        }, {
          key: "getSelectedStars",
          value: function getSelectedStars() {
            var stars_array = [{
              title: 'متميز'
            }, {
              title: 'جيد جداً'
            }, {
              title: 'جيد'
            }, {
              title: 'مقبول'
            }, {
              title: 'ضعيف'
            }];
            console.log(stars_array);
            return stars_array;
            return new Array(5);
          }
        }, {
          key: "getSemArray",
          value: function getSemArray() {
            var stars_array = [{
              title: 'متميز'
            }, {
              title: 'جيد جداً'
            }, {
              title: 'جيد'
            }, {
              title: 'مقبول'
            }, {
              title: 'ضعيف'
            }];
            console.log(stars_array);
            return stars_array;
          }
        }, {
          key: "selectStarsForRating",
          value: function selectStarsForRating(post_data_index, index) {
            this.postData[post_data_index] = index + 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];

            for (var i = 0; i <= index; i++) {
              this.selections[post_data_index] = '#04855f';
            }

            console.log(this.postData);
          }
        }, {
          key: "onClickSend",
          value: function onClickSend() {
            if (this.noteMessage && this.noteMessage.trim() != '') {
              if (this.noteMessage.length <= 45) {
                this.modalController.dismiss({
                  'dismissed': true,
                  data: this.postData,
                  noteMessage: this.noteMessage
                });
              } else {
                this.dataProvider.showToast(this.lang.max_note_length);
              }
            } else {
              this.dataProvider.showToast(this.lang.empty_note);
            }
          }
        }]);

        return AddReviewComponent;
      }();

      AddReviewComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      AddReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-review',
        template: _raw_loader_add_review_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_review_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], AddReviewComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      "9lwF");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./service/data/data.service */
      "v2nD");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./service/database/database.service */
      "HbOQ");
      /* harmony import */


      var _service_location_location_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./service/location/location.service */
      "9XNo");
      /* harmony import */


      var _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./service/student-data/student-data.service */
      "TgDs");
      /* harmony import */


      var _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./service/subscription/subscription.service */
      "iISc");
      /* harmony import */


      var _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./service/file-upload/file-upload.service */
      "MsQK");
      /* harmony import */


      var _service_document_document_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./service/document/document.service */
      "0165");
      /* harmony import */


      var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./service/geo-service/geo-service */
      "G+rw");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _create_class_create_class_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./create-class/create-class.module */
      "ZMI9");
      /* harmony import */


      var _connect_new_message_connect_new_message_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./connect-new-message/connect-new-message.module */
      "SSFD");
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      "XqOP");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "92l+");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/loader/loader.component */
      "vPOg");
      /* harmony import */


      var _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/rate-app/rate-app.component */
      "hyCl");
      /* harmony import */


      var _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/switch-account/switch-account.component */
      "VPdO");
      /* harmony import */


      var _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./components/edit-student-profile/edit-student-profile.component */
      "GhJt");
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      "k0k6");
      /* harmony import */


      var _ionic_native_document_scanner_ngx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @ionic-native/document-scanner/ngx */
      "Vj9j");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      "0PQT");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @ionic-native/deeplinks/ngx */
      "lQWD");
      /* harmony import */


      var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase-2/ngx */
      "7DPu");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ionic2-calendar */
      "L+Ny");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./add-review/add-review.component */
      "YXaF"); // import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
      //import { Deeplinks } from '@ionic-native/deeplinks';
      //import { Geolocation } from '@ionic-native/geolocation/ngx';
      //import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
      //import {EditCalssPageModule} from './common-modal/edit-calss/edit-calss.module';
      // import {ViewClassNotesPageModule} from './common-modal/view-class-notes/view-class-notes.module';
      // import {SelectMessageUserPageModule} from './common-modal/select-message-user/select-message-user.module';
      // import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
      // import { FileChooser } from '@ionic-native/file-chooser/ngx';


      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__["LoaderComponent"], _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_37__["RateAppComponent"], _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_38__["SwitchAccountComponent"], _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_39__["EditStudentProfileComponent"], _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_55__["AddReviewComponent"]],
        entryComponents: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_36__["LoaderComponent"], _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_37__["RateAppComponent"], _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_38__["SwitchAccountComponent"], _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_39__["EditStudentProfileComponent"], _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_55__["AddReviewComponent"]],
        imports: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_53__["NgCalendarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
          mode: 'md'
        }), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _create_class_create_class_module__WEBPACK_IMPORTED_MODULE_30__["CreateClassPageModule"], _connect_new_message_connect_new_message_module__WEBPACK_IMPORTED_MODULE_31__["ConnectNewMessagePageModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_45__["IonicSelectableModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_54__["PipesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], // EditCalssPageModule,
        // ViewClassNotesPageModule,
        // SelectMessageUserPageModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]] // <--- add this

          } // <--- add this

        }) // <--- add this
        ],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _service_document_document_service__WEBPACK_IMPORTED_MODULE_19__["DocumentService"], _service_location_location_service__WEBPACK_IMPORTED_MODULE_15__["LocationService"], _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_16__["StudentDataService"], _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_17__["SubscriptionService"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_11__["SQLite"], _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_49__["InAppPurchase2"], // PhotoLibrary,
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_14__["DatabaseService"], _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_18__["FileUploadService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_48__["Deeplinks"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_25__["ScreenOrientation"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_26__["SocialSharing"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_27__["InAppBrowser"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_28__["Device"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_32__["FCM"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_29__["Camera"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_43__["FileTransfer"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_52__["Diagnostic"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_51__["FileOpener"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_44__["File"], _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_20__["GeoServiceProvider"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_47__["FilePath"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_42__["MediaCapture"], _ionic_native_document_scanner_ngx__WEBPACK_IMPORTED_MODULE_41__["DocumentScanner"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_33__["PhotoViewer"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_46__["Base64"], // PayPal,
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_34__["AndroidPermissions"], // FileChooser,
        //  Geolocation,
        _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_50__["Printer"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_35__["LocationAccuracy"], //NativeGeocoder,
        _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_40__["AppRate"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZMI9":
    /*!*****************************************************!*\
      !*** ./src/app/create-class/create-class.module.ts ***!
      \*****************************************************/

    /*! exports provided: CreateClassPageModule */

    /***/
    function ZMI9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateClassPageModule", function () {
        return CreateClassPageModule;
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


      var _create_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-class-routing.module */
      "hXrW");
      /* harmony import */


      var _create_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-class.page */
      "kLqr");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var CreateClassPageModule = function CreateClassPageModule() {
        _classCallCheck(this, CreateClassPageModule);
      };

      CreateClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateClassPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_create_class_page__WEBPACK_IMPORTED_MODULE_6__["CreateClassPage"]]
      })], CreateClassPageModule);
      /***/
    },

    /***/
    "aIeY":
    /*!******************************************************!*\
      !*** ./src/app/add-review/add-review.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function aIeY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checkbox-area {\n  margin: 5px 0;\n}\n.checkbox-area .checkbox-remove {\n  border: 1px solid grey;\n  height: 24px;\n  width: 24px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*ion-icon{\n      font-size: 23px;\n      font-weight: 800;\n      padding-right: 7px;\n      padding-top: 0;\n  }*/\n}\n.checkbox-area .checkbox-remove .att-icon:before {\n  font-size: 22px;\n}\n.checkbox-area .present {\n  background: #32db64;\n}\n.checkbox-area .absent {\n  background: #f53d3d;\n}\n.checkbox-area .delay {\n  background: #ffa500;\n}\n.checkbox-container {\n  width: 100%;\n  display: flex;\n}\n.checkbox-container .checkbox-icon {\n  width: 14%;\n  height: auto;\n}\nh3 {\n  line-height: inherit;\n  font-size: 16px;\n}\nh5 {\n  text-align: center;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFBSTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQTs7Ozs7SUFBQTtBQU1SO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRVI7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJhZGQtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LWFyZWF7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICAuY2hlY2tib3gtcmVtb3Zle1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOmNvbG9yKCRjb2xvcnMsIHJlbW92ZS1hcHAsIGJhc2UpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLyppb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfSovXG4gICAgICAgIC5hdHQtaWNvbjpiZWZvcmV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByZXNlbnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMmRiNjQ7XG4gICAgfVxuICAgIC5hYnNlbnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNTNkM2Q7XG4gICAgfVxuICAgIC5kZWxheXtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYTUwMDtcbiAgICB9XG59XG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jaGVja2JveC1pY29uIHtcbiAgICAgICAgd2lkdGg6IDE0JTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuaDN7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5oNXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "aKU5":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rate-app/rate-app.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aKU5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"container\" *ngIf=\"lang\">\n  <div class=\"feedback\">\n    <div class=\"rating\">\n      <input type=\"radio\" name=\"rating\" id=\"rating-5\">\n      <label for=\"rating-5\" (click)=\"provideRating(5,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-4\" >\n      <label for=\"rating-4\" (click)=\"provideRating(4 ,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-3\">\n      <label for=\"rating-3\" (click)=\"provideRating(3 ,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-2\">\n      <label for=\"rating-2\" (click)=\"provideRating(2 ,$event)\"></label>\n      <input type=\"radio\" name=\"rating\" id=\"rating-1\">\n      <label for=\"rating-1\" (click)=\"provideRating(1,$event)\"></label>\n      <div class=\"emoji-wrapper\">\n        <div class=\"emoji\">\n          <svg class=\"rating-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z\" fill=\"#f4c534\" />\n            <ellipse transform=\"scale(-1) rotate(31.21 715.433 -595.455)\" cx=\"166.318\" cy=\"199.829\" rx=\"56.146\" ry=\"56.13\" fill=\"#fff\" />\n            <ellipse transform=\"rotate(-148.804 180.87 175.82)\" cx=\"180.871\" cy=\"175.822\" rx=\"28.048\" ry=\"28.08\" fill=\"#3e4347\" />\n            <ellipse transform=\"rotate(-113.778 194.434 165.995)\" cx=\"194.433\" cy=\"165.993\" rx=\"8.016\" ry=\"5.296\" fill=\"#5a5f63\" />\n            <ellipse transform=\"scale(-1) rotate(31.21 715.397 -1237.664)\" cx=\"345.695\" cy=\"199.819\" rx=\"56.146\" ry=\"56.13\" fill=\"#fff\" />\n            <ellipse transform=\"rotate(-148.804 360.25 175.837)\" cx=\"360.252\" cy=\"175.84\" rx=\"28.048\" ry=\"28.08\" fill=\"#3e4347\" />\n            <ellipse transform=\"scale(-1) rotate(66.227 254.508 -573.138)\" cx=\"373.794\" cy=\"165.987\" rx=\"8.016\" ry=\"5.296\" fill=\"#5a5f63\" />\n            <path d=\"M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z\" fill=\"#3e4347\" />\n          </svg>\n          <svg class=\"rating-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <path d=\"M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z\" fill=\"#3e4347\" />\n            <path d=\"M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z\" fill=\"#f4c534\" />\n            <path d=\"M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z\" fill=\"#fff\" />\n            <path d=\"M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z\" fill=\"#3e4347\" />\n            <path d=\"M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z\" fill=\"#fff\" />\n            <path d=\"M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z\" fill=\"#f4c534\" />\n            <path d=\"M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z\" fill=\"#fff\" />\n            <path d=\"M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z\" fill=\"#3e4347\" />\n            <path d=\"M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z\" fill=\"#fff\" />\n          </svg>\n          <svg class=\"rating-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <path d=\"M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z\" fill=\"#3e4347\" />\n            <path d=\"M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z\" fill=\"#fff\" />\n            <circle cx=\"340\" cy=\"260.4\" r=\"36.2\" fill=\"#3e4347\" />\n            <g fill=\"#fff\">\n              <ellipse transform=\"rotate(-135 326.4 246.6)\" cx=\"326.4\" cy=\"246.6\" rx=\"6.5\" ry=\"10\" />\n              <path d=\"M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z\" />\n            </g>\n            <circle cx=\"168.5\" cy=\"260.4\" r=\"36.2\" fill=\"#3e4347\" />\n            <ellipse transform=\"rotate(-135 182.1 246.7)\" cx=\"182.1\" cy=\"246.7\" rx=\"10\" ry=\"6.5\" fill=\"#fff\" />\n          </svg>\n          <svg class=\"rating-3\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z\" fill=\"#3e4347\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <g fill=\"#fff\">\n              <path d=\"M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z\" />\n              <ellipse cx=\"356.4\" cy=\"205.3\" rx=\"81.1\" ry=\"81\" />\n            </g>\n            <ellipse cx=\"356.4\" cy=\"205.3\" rx=\"44.2\" ry=\"44.2\" fill=\"#3e4347\" />\n            <g fill=\"#fff\">\n              <ellipse transform=\"scale(-1) rotate(45 454 -906)\" cx=\"375.3\" cy=\"188.1\" rx=\"12\" ry=\"8.1\" />\n              <ellipse cx=\"155.6\" cy=\"205.3\" rx=\"81.1\" ry=\"81\" />\n            </g>\n            <ellipse cx=\"155.6\" cy=\"205.3\" rx=\"44.2\" ry=\"44.2\" fill=\"#3e4347\" />\n            <ellipse transform=\"scale(-1) rotate(45 454 -421.3)\" cx=\"174.5\" cy=\"188\" rx=\"12\" ry=\"8.1\" fill=\"#fff\" />\n          </svg>\n          <svg class=\"rating-4\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <circle cx=\"256\" cy=\"256\" r=\"256\" fill=\"#ffd93b\" />\n            <path d=\"M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z\" fill=\"#f4c534\" />\n            <path d=\"M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z\" fill=\"#e24b4b\" />\n            <path d=\"M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z\" fill=\"#d03f3f\" />\n            <path d=\"M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z\" fill=\"#fff\" />\n            <path d=\"M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z\" fill=\"#e24b4b\" />\n            <path d=\"M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z\" fill=\"#d03f3f\" />\n            <path d=\"M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z\" fill=\"#fff\" />\n            <path d=\"M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z\" fill=\"#3e4347\" />\n            <path d=\"M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z\" fill=\"#e24b4b\" />\n          </svg>\n          <svg class=\"rating-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <g fill=\"#ffd93b\">\n              <circle cx=\"256\" cy=\"256\" r=\"256\" />\n              <path d=\"M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z\" />\n            </g>\n            <path d=\"M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z\" fill=\"#e9eff4\" />\n            <path d=\"M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z\" fill=\"#45cbea\" />\n            <path d=\"M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z\" fill=\"#e84d88\" />\n            <g fill=\"#38c0dc\">\n              <path d=\"M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z\" />\n            </g>\n            <g fill=\"#d23f77\">\n              <path d=\"M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z\" />\n            </g>\n            <path d=\"M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z\" fill=\"#3e4347\" />\n            <path d=\"M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z\" fill=\"#e24b4b\" />\n            <path d=\"M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z\" fill=\"#fff\" opacity=\".2\" />\n          </svg>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-row>\n    <ion-item class=\"desc-data\">\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea id=\"textArea\" ></ion-textarea>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n  \t<ion-col size=\"6\">\n  \t\t<ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"rate()\">{{lang.rate}}</ion-button>\n  \t</ion-col>\n  \t<ion-col size=\"6\">\n  \t\t<ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\"  color=\"secondary\" (click)=\"closePopup(undefined)\">{{lang.cancel}}</ion-button>\n  \t</ion-col>\n  </ion-row>\n</div> -->\n<div class=\"custom-modal-main\" *ngIf=\"lang\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-note-header\">\n      <h4>{{'student-details.add_note' | translate}}</h4>\n    </div>\n\n    <div class=\"custom-note-content\">\n      <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n        <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[i]}\" (click)=\"selectStarsForRating(i)\"></ion-icon>\n      </span>\n      <div class=\"note-desc\">\n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"noteMessage\" id=\"textArea\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-input>\n        </ion-item>\n        <p class=\"max_length\">{{noteMessage.length}}/45</p>\n      </div>\n    </div>\n    <div class=\"custom-modal-footer right-direction\">\n      <ion-row>\n        <ion-col size=\"6\" text-right>\n         <ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\" (click)=\"closePopup(undefined)\">{{lang.cancel}}</ion-button> \n        </ion-col>\n        <ion-col size=\"6\" text-center>\n          <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" color=\"primary\" (click)=\"rate()\">{{lang.rate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "cT6d":
    /*!*************************************!*\
      !*** ./src/app/guard/auth.guard.ts ***!
      \*************************************/

    /*! exports provided: AuthGuard */

    /***/
    function cT6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(zone, navCtrl) {
          _classCallCheck(this, AuthGuard);

          this.zone = zone;
          this.navCtrl = navCtrl;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var isLoggedIn, isUser;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      // todo: apply login status
                      isLoggedIn = JSON.parse(localStorage.getItem("userloggedin"));

                      if (isLoggedIn) {
                        if (isLoggedIn.userType != 'guest') {
                          isUser = true;
                        } else {
                          isUser = false;
                        }
                      } else {
                        isUser = false;
                      }

                      console.log('isLoggedIn', isLoggedIn);

                      if (!isLoggedIn) {// this.zone.run(() => { this.navCtrl.navigateRoot('/landing'); });
                      } else {//	this.zone.run(() => { this.navCtrl.navigateRoot('/tabs'); });
                        } //return await isLoggedIn.userType == 'guest'? false : true;


                      return _context10.abrupt("return", isUser);

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AuthGuard);
      /***/
    },

    /***/
    "fHPS":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/switch-account/switch-account.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fHPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <div class=\"body\">\n\t\t  <div class=\"earlyLogin\" *ngIf=\"loggedinUser.length>0\">\n\t\t    <ion-item *ngFor=\"let oldUser of loggedinUser; let i=index\" >\n\t\t    \t<ion-avatar slot=\"start\" (click)=\"loginOldUser(oldUser)\">\n\t\t    \t\t<!-- <img src=\"{{oldUser.image}}\" onerror=\"this.src='https://www.epicentrofestival.com/wp-content/uploads/2019/12/Person-Clipart-Person-Clip-Art-Image-Clip-Art-Library-Hypertext-Transfer-Protocol-720x962.jpg';\"> -->\n\t\t    \t\t<img src=\"{{oldUser.image}}\" onerror=\"this.src='http://webapp.ws/Att-App/cpanel/uploads/app_icon.png';\">\n\t\t    \t</ion-avatar >\n\t\t      <ion-label (click)=\"loginOldUser(oldUser)\">\n\t\t        <p> {{oldUser.name}}</p>\n\t\t        <p> {{oldUser.email_id}}</p>\n\t\t      </ion-label>\n\t\t        <ion-icon name=\"checkmark-circle-outline\" class=\"used-user\" slot=\"end\" *ngIf=\"oldUser && currentUser && oldUser.email_id==currentUser || oldUser.email_id ==currentUserEmail \"></ion-icon>\n\t\t        <ion-icon name=\"close-outline\" class=\"unused-user\" slot=\"end\" *ngIf=\"oldUser && currentUser && oldUser.email_id!=currentUser && oldUser.email_id !=currentUserEmail\" (click)=\"removeUser(i)\"></ion-icon>\n\t\t    </ion-item>\n\n\t\t    <ion-button style=\"font-size: 10px;\" expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"addNewAccount()\">\n\t\t    \t{{lang.different_login}}\n\t\t        <!-- <ion-icon name=\"person-add-outline\" class=\"addUser\"></ion-icon> -->\n\t\t    </ion-button>\n\n\t\t    <!-- <ion-item  (click)=\"addNewAccount()\">\n\t\t      <ion-label>\n\t\t        {{'switch_account.different_login | translate'}}\n\t\t        <ion-icon name=\"person-add-outline\" class=\"addUser\"></ion-icon>\n\t\t      </ion-label>\n\t\t    </ion-item> -->\n\t\t    <!-- <ion-row class=\"login-type\">\n\t\t    \t<ion-col size=\"6\" class=\"type-col \">\n\t\t    \t\t<div class=\"type-div\" (click)=\"closeModal()\">\n\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t    \t</ion-col>\n\t\t    \t<ion-col size=\"6\" class=\"type-col col1\" (click)=\"registerSchol()\">\n\t\t    \t\t<div class=\"type-div\">\n\t\t    \t\t\tRegister new school\n\t\t    \t\t</div>\n\t\t    \t</ion-col>\n\t\t    </ion-row> -->\n\t\t  </div>\n  </div>\n\n ";
      /***/
    },

    /***/
    "hXrW":
    /*!*************************************************************!*\
      !*** ./src/app/create-class/create-class-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CreateClassPageRoutingModule */

    /***/
    function hXrW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateClassPageRoutingModule", function () {
        return CreateClassPageRoutingModule;
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


      var _create_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-class.page */
      "kLqr");

      var routes = [{
        path: '',
        component: _create_class_page__WEBPACK_IMPORTED_MODULE_3__["CreateClassPage"]
      }];

      var CreateClassPageRoutingModule = function CreateClassPageRoutingModule() {
        _classCallCheck(this, CreateClassPageRoutingModule);
      };

      CreateClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateClassPageRoutingModule);
      /***/
    },

    /***/
    "hyCl":
    /*!***********************************************************!*\
      !*** ./src/app/components/rate-app/rate-app.component.ts ***!
      \***********************************************************/

    /*! exports provided: RateAppComponent */

    /***/
    function hyCl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RateAppComponent", function () {
        return RateAppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rate_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rate-app.component.html */
      "aKU5");
      /* harmony import */


      var _rate_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rate-app.component.scss */
      "Oo+P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var RateAppComponent = /*#__PURE__*/function () {
        function RateAppComponent(popoverController) {
          _classCallCheck(this, RateAppComponent);

          this.popoverController = popoverController;
          this.noteMessage = "";
          this.providedStars = 1;
          this.showNoteModal = false;
          this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
          this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
          this.ratingStars = 1;
        }

        _createClass(RateAppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.lang, this.data);
            console.log("reate app data::::", this.data);
            this.noteMessage = this.data.note;
            this.providedStars = this.data.rating;
            console.log("this.noteMessage:::", this.noteMessage);
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];

            for (var i = 0; i < this.data.rating; i++) {
              this.selections[i] = '#04855f';
            }
            /*  setTimeout(()=>{
                 const inputElement = document.getElementById("textArea") as HTMLInputElement;
                 inputElement.value=this.data.note;
                 if(this.data.rating=='1'){
                  let ch:any=document.getElementById('rating-1');
                  console.log(ch);
                  setTimeout(()=>{
                    ch.checked=true;
                  },300)
                 }
                 if(this.data.rating=='2'){
                  let ch:any=document.getElementById('rating-2');
                  console.log(ch);
                  setTimeout(()=>{
                    ch.checked=true;
                  },300)
                 }
                 if(this.data.rating=='3'){
                  let ch:any=document.getElementById('rating-3');
                  console.log(ch);
                  setTimeout(()=>{
                    ch.checked=true;
                  },300)
                 }
                 if(this.data.rating=='4'){
                  let ch:any=document.getElementById('rating-4');
                  console.log(ch);
                  setTimeout(()=>{
                    ch.checked=true;
                  },300)
                 }
                 if(this.data.rating=='5'){
                  let ch:any=document.getElementById('rating-5');
                  console.log(ch);
                  setTimeout(()=>{
                    ch.checked=true;
                  },300)
                 }
             },500)
            */

          }
        }, {
          key: "closePopup",
          value: function closePopup(data) {
            this.popoverController.dismiss(data);
          }
          /* for rating */

        }, {
          key: "rate",
          value: function rate() {
            var inputElement = document.getElementById("textArea");
            var i = inputElement.value;
            var stars;

            if (this.providedStars) {
              stars = this.providedStars;
            } else {
              stars = this.data.rating;
            }

            var data = {
              stars: stars,
              description: i
            }; // console.log(data);

            this.closePopup(data);
          }
        }, {
          key: "provideRating",
          value: function provideRating(stars, eve) {
            console.log(eve);
            this.providedStars = stars;
          }
        }, {
          key: "getSelectedStars",
          value: function getSelectedStars() {
            return new Array(5);
          }
        }, {
          key: "selectStarsForRating",
          value: function selectStarsForRating(index) {
            this.providedStars = index + 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];

            for (var i = 0; i <= index; i++) {
              this.selections[i] = '#04855f';
            }

            console.log("stars for rating", this.providedStars);
          }
          /* modal open for rating having 5 stars*/

        }, {
          key: "openNoteModal",
          value: function openNoteModal() {
            this.ratingStars = 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
            this.showNoteModal = true;
          }
        }, {
          key: "hideNoteModal",
          value: function hideNoteModal() {
            this.showNoteModal = false;
          }
        }]);

        return RateAppComponent;
      }();

      RateAppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      RateAppComponent.propDecorators = {
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RateAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rate-app',
        template: _raw_loader_rate_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rate_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], RateAppComponent);
      /***/
    },

    /***/
    "iISc":
    /*!**************************************************************!*\
      !*** ./src/app/service/subscription/subscription.service.ts ***!
      \**************************************************************/

    /*! exports provided: SubscriptionService */

    /***/
    function iISc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionService", function () {
        return SubscriptionService;
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


      var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/data.service */
      "v2nD");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase-2/ngx */
      "7DPu");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1"); // import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';


      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];

      var SubscriptionService = /*#__PURE__*/function () {
        function SubscriptionService( // private payPal: PayPal,
        dataService, iap2, platform, loadingCtrl, toastCtrl, alertCtrl, route, storage, router, zone) {
          var _this50 = this;

          _classCallCheck(this, SubscriptionService);

          this.dataService = dataService;
          this.iap2 = iap2;
          this.platform = platform;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.storage = storage;
          this.router = router;
          this.zone = zone;
          this.isPurchased = [];
          this.paymentDone = false;
          this.products = [{
            id: 'com.monthlysubscribe.com',
            price: '1.99',
            billingPeriod: 1,
            billingPeriodUnit: 'month',
            appleProductId: '',
            googleProductId: 'com.monthlysubscribe.com',
            type: this.iap2.CONSUMABLE
          }, {
            id: 'com.yearlysubscription.com',
            price: '19.95',
            billingPeriod: 1,
            billingPeriodUnit: 'year',
            appleProductId: '',
            googleProductId: 'com.yearlysubscription.com',
            type: this.iap2.CONSUMABLE
          }];
          this.products_ios = [{
            id: 'apple.monthlySubscription',
            price: '1.99',
            billingPeriod: 1,
            billingPeriodUnit: 'month',
            appleProductId: 'apple.monthlySubscription',
            googleProductId: 'com.monthlysubscribe.com',
            type: this.iap2.CONSUMABLE
          }, {
            id: 'apple.yearlySubscription.com',
            price: '19.99',
            billingPeriod: 1,
            billingPeriodUnit: 'year',
            appleProductId: 'apple.yearlySubscription.com',
            googleProductId: 'com.yearlysubscription.com',
            type: this.iap2.CONSUMABLE
          }];
          this.platform.ready().then(function () {
            _this50.setup();
          });

          if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
          }
        }

        _createClass(SubscriptionService, [{
          key: "setup",
          value: function setup() {
            console.log('callSetup');
            this.iap2.verbosity = this.iap2.DEBUG;

            if (this.platform.is('ios')) {
              this.iap2.register(this.products_ios);
            } else if (this.platform.is('android')) {
              this.iap2.register(this.products);
            }

            this.iap2.refresh();
          }
        }, {
          key: "checkout",
          value: function checkout(p) {
            var _this51 = this;

            this.dataService.showLoading();
            var productId;
            var pData = {};

            if (this.platform.is('ios')) {
              productId = this.products_ios[p].appleProductId;
              pData = {
                id: this.products_ios[p].id,
                price: this.products_ios[p].price,
                billingPeriod: this.products_ios[p].billingPeriod,
                billingPeriodUnit: this.products_ios[p].billingPeriodUnit
              };
            } else if (this.platform.is('android')) {
              productId = this.products[p].googleProductId;
              pData = {
                id: this.products[p].id,
                price: this.products[p].price,
                billingPeriod: this.products[p].billingPeriod,
                billingPeriodUnit: this.products[p].billingPeriodUnit
              };
            }

            console.log('productId', productId);
            this.registerHandlersForPurchase(productId, pData);

            try {
              var product = this.iap2.get(productId);
              console.log('Product Info: ', product);
              this.iap2.order(productId).then(function (p) {
                _this51.dataService.hideLoading();

                console.log('Purchase Succesful' + JSON.stringify(p));
              })["catch"](function (e) {
                // this.dataService.showToast('Error Ordering From Store')
                _this51.dataService.hideLoading();

                console.log('Error Ordering From Store' + e);
              });
            } catch (err) {
              // this.dataService.showToast('Error Ordering From Store')
              this.dataService.hideLoading();
              console.log('Error Ordering ' + JSON.stringify(err));
            }
          }
        }, {
          key: "registerHandlersForPurchase",
          value: function registerHandlersForPurchase(productId, pData) {
            var _this52 = this;

            var self = this.iap2;
            console.log('self::::', self);
            this.iap2.when(productId).updated(function (product) {
              if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
                console.log('updated', product);
                product.finish();
              }
            });
            this.iap2.when(productId).owned(function (product) {
              product.finish();
            });
            this.iap2.when(productId).approved(function (product) {
              product.finish();
              console.log('approved', product);

              if (_this52.platform.is('android')) {
                _this52.subcribeToServer(product, pData);
              } else {
                _this52.purchaseToServer(product, pData);
              }
            });
            this.iap2.when(productId).refunded(function (product) {});
            this.iap2.when(productId).expired(function (product) {});
          }
        }, {
          key: "subcribeToServer",
          value: function subcribeToServer(subs, pData) {
            var _this53 = this;

            var receipt = JSON.parse(subs.transaction.receipt);
            var data = {
              plan_id: pData.id,
              iap_id: receipt.orderId,
              paymentType: subs.transaction.type,
              billingPeriod: pData.billingPeriod,
              billingPeriodUnit: pData.billingPeriodUnit,
              ammount: pData.price,
              user_id: this.userDetails.details.user_no,
              school: this.userDetails.details.school_id
            };
            this.dataService.subscribePlan(data).then(function (res) {
              _this53.paymentDone = true;

              _this53.storage.get('currentStudent').then(function (data) {
                _this53.iap2.refresh();

                _this53.dataService.showToast('Plan subscribed Successfully');

                var navigation = {
                  state: data
                };

                _this53.zone.run(function () {
                  _this53.router.navigate(['student-detail'], navigation);
                });
              });
            }, function (e) {
              _this53.dataService.showToast('Error in processing payment');
            });
          }
        }, {
          key: "purchaseToServer",
          value: function purchaseToServer(subs, pData) {
            var _this54 = this;

            var receipt = JSON.parse(subs.transaction.receipt);
            var data = {
              plan_id: pData.id,
              iap_id: receipt.orderId,
              paymentType: subs.transaction.type,
              billingPeriod: pData.billingPeriod,
              billingPeriodUnit: pData.billingPeriodUnit,
              ammount: pData.price,
              user_id: this.userDetails.details.user_no,
              school: this.userDetails.details.school_id
            };
            this.dataService.purchase(data).then(function (res) {
              _this54.paymentDone = true;

              _this54.storage.get('currentStudent').then(function (data) {
                _this54.iap2.refresh();

                var navigation = {
                  state: data
                };

                _this54.zone.run(function () {
                  _this54.router.navigate(['student-detail'], navigation);
                });
              });
            }, function (e) {
              _this54.dataService.showToast('Error in processing payment');
            });
          }
        }, {
          key: "paymentStatus",
          value: function paymentStatus(pid, callback) {
            var productId;

            if (this.platform.is('ios')) {
              productId = this.products_ios[pid].appleProductId;
              this.iap2.when(productId).approved(function (p) {
                return p.verify();
              }).verified(function (p) {
                return p.finish();
              });
            } else if (this.platform.is('android')) {
              productId = this.products[pid].googleProductId;
            }

            this.iap2.refresh();
            callback(true);
          }
        }, {
          key: "doPaypalPayment",
          value: function doPaypalPayment(data) {
            return new Promise(function (resolve, reject) {
              resolve('true');
            });
          }
        }]);

        return SubscriptionService;
      }();

      SubscriptionService.ctorParameters = function () {
        return [{
          type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], SubscriptionService);
      /***/
    },

    /***/
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-format/date-format.pipe */
      "CGfp");
      /* harmony import */


      var _safe_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./safe/safe.pipe */
      "zl9O");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ion2-calendar */
      "zTSL");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _user_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-search.pipe */
      "wHzU");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"], _safe_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"], _user_search_pipe__WEBPACK_IMPORTED_MODULE_6__["UserSearchPipe"]],
        imports: [],
        exports: [_date_format_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"], _safe_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"], ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
      })], PipesModule);
      /***/
    },

    /***/
    "ies4":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ies4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-modal>\n  <ng-template> -->\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{'student-details.add_note' | translate}}</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"dismiss()\"><ion-icon name=\"close\" class=\"att-icon\" color=\"dark\">\n          </ion-icon></ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <!-- <ion-card> -->\n        <!-- <ion-list> -->\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>حضور المتعلم ومواظبته والتزامه بالمواعيد أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(0, i)\">\n                        <h5 style=\"text-align: center; font-size: 14px;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[0] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[0] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>حضور المتعلم ومواظبته والتزامه بالمواعيد أثناء الحصة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[0]}\" (click)=\"selectStarsForRating(0, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>التعاون مع الزملاء المتعلمين أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(1, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[1] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[1] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>التعاون مع الزملاء المتعلمين أثناء الحصة الدراسية:</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[1]}\" (click)=\"selectStarsForRating(1, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>يعتمد سلوك المتعلم على احترام زملائه</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(2, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[2] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[2] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>يعتمد سلوك المتعلم على احترام زملائه:</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[2]}\" (click)=\"selectStarsForRating(2, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>ترتبط العلاقة بين المتعلم والمعلم على أساس الاحترام المتبادل</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(3, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[3] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[3] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>ترتبط العلاقة بين المتعلم والمعلم على أساس الاحترام المتبادل</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[3]}\" (click)=\"selectStarsForRating(3, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>الالتزام بضوابط المحافظة على الممتلكات العامة</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(4, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[4] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[4] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>الالتزام بضوابط المحافظة على الممتلكات العامة</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[4]}\" (click)=\"selectStarsForRating(4, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>مدى إدراك المتعلم بحقوقه والتزامه بواجباته</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(5, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[5] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[5] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مدى إدراك المتعلم بحقوقه والتزامه بواجباته</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[5]}\" (click)=\"selectStarsForRating(5, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>مدى فهم واستيعاب المتعلم للنظم واللوائح داخل المؤسسة التعليمية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(6, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[6] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[6] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مدى فهم واستيعاب المتعلم للنظم واللوائح داخل المؤسسة التعليمية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[6]}\" (click)=\"selectStarsForRating(6, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>الاهتمام والتركيز في المشاركة أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(7, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[7] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[7] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>الاهتمام والتركيز في المشاركة أثناء الحصة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[6]}\" (click)=\"selectStarsForRating(7, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          \n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>قدرة المتعلم على الاستيعاب الذهني أثناء الحصة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(8, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[8] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[8] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على الاستيعاب الذهني أثناء الحصة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[7]}\" (click)=\"selectStarsForRating(8, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>قدرة المتعلم على القراءة بطلاقة مع الفهم الدقيق للمعاني</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(9, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[9] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[9] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على القراءة بطلاقة مع الفهم الدقيق للمعاني</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[8]}\" (click)=\"selectStarsForRating(9, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>قدرة المتعلم على تنظيم الأفكار والتعبير عنها كتابياً</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(10, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[10] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[10] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على تنظيم الأفكار والتعبير عنها كتابياً</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[9]}\" (click)=\"selectStarsForRating(10, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>يُظهر المتعلم موقفاً مسؤولاً ولدية قدرة على اتخاذ القرار بالاعتماد على نفسة</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(11, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[11] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[11] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>يُظهر المتعلم موقفاً مسؤولاً ولدية قدرة على اتخاذ القرار بالاعتماد على نفسة</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[10]}\" (click)=\"selectStarsForRating(11, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>مدى الاستفادة من حصيلة المعارف والمهارات السابقة في الاختبار العملي</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(12, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[12] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[12] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مدى الاستفادة من حصيلة المعارف والمهارات السابقة في الاختبار العملي</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[11]}\" (click)=\"selectStarsForRating(12, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>مستوى تحصيل المتعلم دراسياً قياساً بأهداف المادة الدراسية</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(13, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[13] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[13] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>مستوى تحصيل المتعلم دراسياً قياساً بأهداف المادة الدراسية</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[12]}\" (click)=\"selectStarsForRating(13, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>قدرة المتعلم على اجراء العمليات الحسابية بهدف حل المشكلات والتفكير الناقد</h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(14, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[14] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[14] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <h3>قدرة المتعلم على اجراء العمليات الحسابية بهدف حل المشكلات والتفكير الناقد</h3><br>\n              <span *ngFor=\"let star of stars_array;let i = index;\">\n                <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[13]}\" (click)=\"selectStarsForRating(14, i)\"></ion-icon>\n              </span> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <h3>مهارات الابتكار والتخطيط في أداء المشاريع</h3>\n                  </ion-col>\n                </ion-row>\n               \n                <!-- <span *ngFor=\"let star of stars_array;let i = index;\">\n                  <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[14]}\" (click)=\"selectStarsForRating(15, i)\"></ion-icon>\n                  [ngClass]=\"{'present': student.sheet['cem-'+ (i+1)] == '1', 'absent': student.sheet['cem-'+ (i+1)] == '0', 'delay': student.sheet['cem-'+ (i+1)] == '3', '': student.sheet['cem-'+ (i+1)] == 'undefined'}\"\n                </span> -->\n                <ion-row> \n                  <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n                    <div class=\"left-direction checkbox-container\">\n                      <div class=\"checkbox-icon\" *ngFor=\"let sem of stars_array; let i = index;\"\n                        (click)=\"selectStarsForRating(15, i)\">\n                        <h5 style=\"text-align: center;\">{{sem.title}}</h5>\n                        <div class=\"checkbox-remove\">\n                          <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"postData[15] === (i + 1)\" color=\"light\" [ngClass]=\"{'present': postData[15] === (i + 1)}\">\n                          </ion-icon>\n                          <!-- <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"postData[0] === (i+1)\" color=\"success\">\n                          </ion-icon> -->\n                          <!-- <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"postData[0] !== (i + 1)\" color=\"danger\">\n                          </ion-icon> -->\n                        </div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <ion-col size=\"12\" align-self-center>\n                <div class=\"left-direction checkbox-container\">\n                  <div class=\"checkbox-icon\" *ngFor=\"let sem of getSemArray(); let i = index;\"\n                    (click)=\"showTeacherName(attendanceResponse.semteacher['sem-' + (i + 1)])\">\n                    <div class=\"sem-number-outer\"\n                      >\n                      {{i+1}}</div>\n                  </div>\n                </div>\n              </ion-col> -->\n            </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-textarea rows=\"6\" [(ngModel)]=\"noteMessage\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-textarea>\n            </ion-item>\n          </ion-card>\n        <!-- </ion-list> [ngClass]=\"{'att-not-marked': attendanceResponse.semteacher['sem-' + (i + 1)] == undefined ,'att-marked': attendanceResponse.semteacher['sem-' + (i + 1)] != undefined }\" -->\n      <!-- </ion-card> -->\n      <ion-button expand=\"block\" (click)=\"onClickSend()\">{{'contact.submit' | translate}}</ion-button>\n    </ion-content>\n  <!-- </ng-template>\n</ion-modal> -->";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kLqr":
    /*!***************************************************!*\
      !*** ./src/app/create-class/create-class.page.ts ***!
      \***************************************************/

    /*! exports provided: CreateClassPage */

    /***/
    function kLqr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateClassPage", function () {
        return CreateClassPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-class.page.html */
      "vUv2");
      /* harmony import */


      var _create_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-class.page.scss */
      "vrpw");
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

      var CreateClassPage = /*#__PURE__*/function () {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param translate used for translation service
         * @param viewCtrl For view dismiss
         * @param dataProvider Use for getting data from the API
         */
        function CreateClassPage(navCtrl, translate, viewCtrl, dataProvider) {
          var _this55 = this;

          _classCallCheck(this, CreateClassPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.viewCtrl = viewCtrl;
          this.dataProvider = dataProvider;
          this["class"] = {};
          this.lang = {};
          this.translate.get("alertmessages").subscribe(function (res) {
            _this55.lang = res;
          });
        }

        _createClass(CreateClassPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewDidLoad CreateClassPage');

            if (localStorage.getItem("userloggedin")) {
              var user = JSON.parse(localStorage.getItem("userloggedin"));
              this["class"]['school_id'] = user.details.school_id;
              this["class"]['user_no'] = user.details.user_no;
            } else {
              this.viewCtrl.dismiss(false);
            }
          }
        }, {
          key: "getSeminars",
          value: function getSeminars() {
            return Array(8);
          }
        }, {
          key: "registerClass",
          value: function registerClass() {
            var _this56 = this;

            this.dataProvider.showLoading();
            this.dataProvider.createNewCourse(this["class"]).then(function (response) {
              _this56.dataProvider.hideLoading();

              if (response.session) {
                _this56.dataProvider.showToast(response.message);

                _this56.viewCtrl.dismiss(true);
              } else {
                _this56.dataProvider.showToast(response.message);
              }
            })["catch"](function (err) {
              _this56.dataProvider.hideLoading();

              _this56.dataProvider.errorALertMessage(err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreateClassPage;
      }();

      CreateClassPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }];
      };

      CreateClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-class',
        template: _raw_loader_create_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])], CreateClassPage);
      /***/
    },

    /***/
    "r+W6":
    /*!*************************************************************************!*\
      !*** ./src/app/components/switch-account/switch-account.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function rW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".earlyLogin {\n  text-align: center;\n  margin: 0px auto;\n  width: 100%;\n}\n.earlyLogin ion-item {\n  font-size: 15px;\n  margin-bottom: 9px;\n}\n.earlyLogin ion-item .used-user {\n  font-size: 35px;\n  color: green;\n}\n.earlyLogin ion-item .unused-user {\n  font-size: 25px;\n  color: red;\n}\n.earlyLogin ion-item .addUser {\n  font-size: 25px;\n}\n.login-type .type-col .type-div {\n  font-size: 15px;\n}\n.login-type .col1 {\n  border-right: 1px solid #60b060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N3aXRjaC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDUjtBQUFRO0VBQ1ksZUFBQTtFQUNBLGtCQUFBO0FBRXBCO0FBRG9CO0VBQ1EsZUFBQTtFQUNBLFlBQUE7QUFHNUI7QUFEb0I7RUFDUSxlQUFBO0VBQ0EsVUFBQTtBQUc1QjtBQURvQjtFQUNJLGVBQUE7QUFHeEI7QUFJWTtFQUNRLGVBQUE7QUFEcEI7QUFJUTtFQUNRLCtCQUFBO0FBRmhCIiwiZmlsZSI6InN3aXRjaC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5lYXJseUxvZ2lue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZWQtdXNlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVudXNlZC11c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFVzZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi10eXBle1xyXG4gICAgICAgIC50eXBlLWNvbHtcclxuICAgICAgICAgICAgLnR5cGUtZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sMXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MGIwNjA7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    "sdmF":
    /*!*******************************************************************!*\
      !*** ./src/app/connect-new-message/connect-new-message.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function sdmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-connect-new-message:host .subject {\n  border: 1px solid grey;\n  margin: 10px 0;\n  position: relative;\n}\napp-connect-new-message:host .send-btn {\n  height: 60px;\n}\napp-connect-new-message:host .close {\n  float: left;\n}\napp-connect-new-message:host .attachment {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-connect-new-message:host .attach-image {\n  width: 100%;\n  height: 100px;\n  text-align: right;\n}\napp-connect-new-message:host .attach-image img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nvbm5lY3QtbmV3LW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBRUk7RUFFSSxXQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDSSxtQkFBQTtFQUNSLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSSxVQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUVRO0VBQ0ksWUFBQTtBQUFaIiwiZmlsZSI6ImNvbm5lY3QtbmV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbm5lY3QtbmV3LW1lc3NhZ2U6aG9zdCB7XHJcbiAgICAuc3ViamVjdHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zZW5kLWJ0bntcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuY2xvc2VcclxuICAgIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC0tYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC5hdHRhY2gtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "v2nD":
    /*!**********************************************!*\
      !*** ./src/app/service/data/data.service.ts ***!
      \**********************************************/

    /*! exports provided: DataService */

    /***/
    function v2nD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../database/database.service */
      "HbOQ");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/loader/loader.component */
      "vPOg");
      /* harmony import */


      var _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/rate-app/rate-app.component */
      "hyCl");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/switch-account/switch-account.component */
      "VPdO");
      /* harmony import */


      var _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/edit-student-profile/edit-student-profile.component */
      "GhJt");
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      "k0k6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var _student_data_student_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../student-data/student-data.service */
      "TgDs"); //import { HttpParams, Http, Headers } from '@angular/common/http';
      // import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
      //import { EditCalssPage } from '../../common-modal/edit-calss/edit-calss.page';
      // import { ViewClassNotesPage } from '../../common-modal/view-class-notes/view-class-notes.page';


      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];

      var DataService = /*#__PURE__*/function () {
        /**
          * Represents a Data provider from API.
          * @constructor
          * @param {Http} http - for making http request.
          * @param {AlertController} alertCtrl - Alert popup.
          * @param {LoadingController} loadingCtrl - Loading popup.
          * @param {ToastController} toastCtrl - show toast
        */
        function DataService(httpClient, http, alertCtrl, platform, loadingCtrl, toastCtrl, translate, modalController, network, popoverController, dbProvider, file, studentService, transfer, filePath, appRate, diagnostic) {
          var _this57 = this;

          _classCallCheck(this, DataService);

          this.httpClient = httpClient;
          this.http = http;
          this.alertCtrl = alertCtrl;
          this.platform = platform;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.translate = translate;
          this.modalController = modalController;
          this.network = network;
          this.popoverController = popoverController;
          this.dbProvider = dbProvider;
          this.file = file;
          this.studentService = studentService;
          this.transfer = transfer;
          this.filePath = filePath;
          this.appRate = appRate;
          this.diagnostic = diagnostic;
          this.lang = {};
          this.mediaDirectory = '';
          this.uploadProgress = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](0);
          this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.language = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.selectedUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.platform.ready().then(function () {
            setTimeout(function (res) {
              _this57.translate.get("alertmessages").subscribe(function (res) {
                _this57.lang = res; // console.log(this.translate.instant('alertmessages'))
              });
            }, 2000);
          });
          this.language.subscribe(function (res) {
            console.log('res>>>>', res);
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code = res;
          });
        }
        /**
         * This is a user rating popup
         * @return rating in int
         * @param ev - event
         */


        _createClass(DataService, [{
          key: "presentRatingPopover",
          value: function presentRatingPopover(lang, note, callback) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var popover;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.popoverController.create({
                        component: _components_rate_app_rate_app_component__WEBPACK_IMPORTED_MODULE_8__["RateAppComponent"],
                        // event: ev,
                        translucent: false,
                        mode: "ios",
                        cssClass: 'ratePopup',
                        backdropDismiss: false,
                        componentProps: {
                          lang: lang,
                          data: note
                        }
                      });

                    case 2:
                      popover = _context11.sent;
                      _context11.next = 5;
                      return popover.present();

                    case 5:
                      popover.onDidDismiss().then(function (response) {
                        // console.log('call',response);
                        if (response.data) {
                          callback(response.data);
                        } else {
                          callback(false);
                        }
                      });

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "editClassModal",
          value: function editClassModal(course, callback) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      console.log(course); //   const modal = await this.modalController.create({
                      //   component: EditCalssPage,
                      //   cssClass: 'my-custom-class',
                      //   componentProps: {couerse:course}
                      // });
                      // await modal.present();
                      // modal.onDidDismiss().then(res=>{
                      //   callback(res);
                      // })

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "viewNotes",
          value: function viewNotes(data, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
          /**
          * submit rating to playstore
          * @param rating - int rating value
          */

        }, {
          key: "submitRating",
          value: function submitRating(rating) {
            console.log(rating);
          }
        }, {
          key: "showRatePrompt",
          value: function showRatePrompt(lang) {
            this.appRate.preferences = Object.assign(Object.assign({}, this.appRate.preferences), {
              storeAppURL: {
                ios: '< my_app_id >',
                android: 'market://details?id=com.webapp.attendance'
              },
              simpleMode: true,
              useLanguage: lang,
              callbacks: {
                onRateDialogShow: function onRateDialogShow(callback) {
                  console.log('User Prompt for Rating');
                },
                onButtonClicked: function onButtonClicked(buttonIndex) {
                  console.log('Selected Button Index', buttonIndex);
                }
              }
            }); // this.appRate.preferences.openUrl = function(url) {
            // window.open(url, '_system', 'location=yes');
            // };

            this.appRate.promptForRating(true);
          }
        }, {
          key: "switchAccount",
          value: function switchAccount(ev, lang) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var popover;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.popoverController.create({
                        component: _components_switch_account_switch_account_component__WEBPACK_IMPORTED_MODULE_10__["SwitchAccountComponent"],
                        // event: ev,
                        translucent: false,
                        // mode:"ios",
                        cssClass: 'switch-account',
                        backdropDismiss: true,
                        componentProps: {
                          lang: lang
                        }
                      });

                    case 2:
                      popover = _context14.sent;
                      _context14.next = 5;
                      return popover.present();

                    case 5:
                      popover.onDidDismiss().then(function (response) {// console.log('call',response);
                        // if(response.data){
                        //   this.submitRating(response.data)
                        // }else{
                        //   this.showToast(lang.no_rating);
                        // }
                      });

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "editStudentClass",
          value: function editStudentClass(ev, student, classes, user, callback) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this58 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.popoverController.create({
                        component: _components_edit_student_profile_edit_student_profile_component__WEBPACK_IMPORTED_MODULE_11__["EditStudentProfileComponent"],
                        event: ev,
                        translucent: false,
                        mode: "ios",
                        cssClass: 'edit-student',
                        backdropDismiss: true,
                        componentProps: {
                          student: student,
                          classes: classes
                        }
                      });

                    case 2:
                      popover = _context15.sent;
                      _context15.next = 5;
                      return popover.present();

                    case 5:
                      popover.onDidDismiss().then(function (response) {
                        // console.log('call',response);
                        if (response.data) {
                          if (response.data.deleteClass) {
                            var deleteData = {
                              sid: response.data.student.sid,
                              cid: response.data.student.cid,
                              user_no: user.user_no,
                              school_id: user.school_id,
                              session_id: user.session_id
                            };

                            _this58.deleteStudentClass(deleteData, function (res) {
                              callback(res);
                            });
                          } else {
                            var updateData = {
                              sid: response.data.student.sid,
                              cid: response.data.student.cid,
                              student_name: response.data.studentName,
                              class_id: response.data.studentSemester,
                              user_no: user.user_no,
                              school_id: user.school_id,
                              session_id: user.session_id
                            };

                            _this58.updateStudentProfile(updateData, function (res) {
                              callback(res);
                            });
                          }
                        }
                      });

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "deleteStudentClass",
          value: function deleteStudentClass(data, callback) {
            var _this59 = this;

            console.log('delete', data);
            this.postRequest(data, 'deleteStudentClass').then(function (response) {
              if (response) {
                _this59.showToast(response.msg);

                callback(response);
              }
            })["catch"](function (error) {
              console.log(error); //this.showToast(response.message);
            });
          }
        }, {
          key: "deleteStudent",
          value: function deleteStudent(data, callback) {
            var _this60 = this;

            console.log('delete', data);
            this.postRequest(data, 'deleteStudent').then(function (response) {
              if (response) {
                _this60.showToast(response.msg);

                callback(response);
              }
            })["catch"](function (error) {
              console.log(error); //this.showToast(response.message);
            });
          }
        }, {
          key: "deleteTeacher",
          value: function deleteTeacher(data, callback) {
            var _this61 = this;

            console.log('delete', data);
            this.postRequest(data, 'deleteTeacher').then(function (response) {
              if (response) {
                _this61.showToast(response.msg);

                callback(response);
              }
            })["catch"](function (error) {
              console.log(error); //this.showToast(response.message);
            });
          }
        }, {
          key: "deleteParent",
          value: function deleteParent(data, callback) {
            var _this62 = this;

            console.log('delete', data);
            this.postRequest(data, 'deleteParent').then(function (response) {
              if (response) {
                _this62.showToast(response.msg);

                callback(response);
              }
            })["catch"](function (error) {
              console.log(error); //this.showToast(response.message);
            });
          }
          /*-----------delete user except parent,student and teacher----------*/

        }, {
          key: "deleteUser",
          value: function deleteUser(data, callback) {
            var _this63 = this;

            this.postRequest(data, 'deleteUser').then(function (response) {
              if (response) {
                _this63.showToast(response.msg);

                callback(response);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteNote",
          value: function deleteNote(data, callback) {
            var _this64 = this;

            console.log('delete', data);
            this.postRequest(data, 'deleteNotes').then(function (response) {
              if (response) {
                _this64.showToast(response.msg);

                callback(response);
              }
            })["catch"](function (error) {
              console.log(error); //this.showToast(response.message);
            });
          }
        }, {
          key: "updateStudentProfile",
          value: function updateStudentProfile(data, callback) {
            var _this65 = this;

            console.log('update', data);
            this.postRequest(data, 'updateStudentProfile').then(function (response) {
              if (response) {
                callback(response);

                _this65.showToast(response.msg);
              }
            })["catch"](function (error) {
              console.log(error); //this.showToast(response.message);
            });
          }
        }, {
          key: "updateTeacherProfile",
          value: function updateTeacherProfile(data, callback) {
            var _this66 = this;

            console.log('update', data);
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            Object.keys(data).forEach(function (key) {
              body = body.append(key, data[key]);
            });
            body['class'] = [];
            Object.keys(data["class"]).map(function (key) {
              Object.keys(data["class"][key]).map(function (sid) {
                body = body.append('classes' + '[' + key + ']' + '[' + sid + ']', data["class"][key][sid]);
              });
            });
            this.httpClient.post(env.serverURL + 'updateTeacherProfile', body, {
              headers: header
            }).subscribe(function (response) {
              if (response) {
                console.log('tescherList', response);

                if (response.response == false) {
                  callback({
                    session: false,
                    message: response.msg
                  });
                } else if (response.response == true) {
                  // this.dbProvider.insertClasses(response.courses);
                  callback({
                    session: true,
                    data: response.msg
                  });
                } else {
                  callback(response.msg);
                }
              } else {}
            }, function (error) {
              console.log(error);

              if (error.message != undefined && error.message != '' && error.message != null) {
                callback(error.message);
              } else {
                callback(_this66.lang.usnexpectedError);
              }
            });
          }
          /* --------------update users profile-------newcode 15/11/21 */

        }, {
          key: "updateUserProfile",
          value: function updateUserProfile(data, callback) {
            var _this67 = this;

            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('content-type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            Object.keys(data).forEach(function (key) {
              body = body.append(key, data[key]);
            }); // body['class']=[];
            // Object.keys(data.class).map((key)=>{
            //   Object.keys(data.class.key).map((sid)=>{
            //     body = body.append('classes'+'['+ key+']'+'['+sid+']' , data.class[key][sid]);
            //   })
            // })

            this.httpClient.post(env.serverURL + 'updateNewUser', body, {
              headers: header
            }).subscribe(function (response) {
              if (response) {
                console.log('usersList', response);

                if (response.response == false) {
                  callback({
                    session: false,
                    message: response.msg
                  });
                } else if (response.response == true) {
                  // this.dbProvider.insertClasses(response.courses);
                  callback({
                    session: true,
                    data: response.msg
                  });
                } else {
                  callback(response.msg);
                }
              } else {}
            }, function (error) {
              console.log(error);

              if (error.message != undefined && error.message != '' && error.message != null) {
                callback(error.message);
              } else {
                callback(_this67.lang.usnexpectedError);
              }
            });
          }
          /**
           * This is a user defined loader
           * @param ev - event
           */

        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.popoverController.create({
                        component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                        backdropDismiss: true,
                        //event: ev,
                        translucent: false,
                        // animated:true,
                        cssClass: 'loaderStyle' // mode:"ios"

                      });

                    case 2:
                      this.popOver = _context16.sent;
                      _context16.next = 5;
                      return this.popOver.present();

                    case 5:
                      return _context16.abrupt("return", _context16.sent);

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            if (this.popOver) this.popOver.dismiss();
          }
          /**
           * This is a toast message function
           * @param message - string of message to be shown
           */

        }, {
          key: "showToast",
          value: function showToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var alert;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        position: 'bottom',
                        cssClass: 'toastClass',
                        duration: 3000
                      });

                    case 2:
                      alert = _context17.sent;
                      _context17.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
          /** ALert message popup.
           * @param {String} error - Error message to display
          */

        }, {
          key: "errorALertMessage",
          value: function errorALertMessage(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var alert;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.alertCtrl.create({
                        header: 'تحذير',
                        message: error,
                        backdropDismiss: false,
                        buttons: ['Ok']
                      });

                    case 2:
                      alert = _context18.sent;
                      _context18.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
          /** ALert message popup.
           * @param {String} error - Error message to display
          */

        }, {
          key: "msgALertMessage",
          value: function msgALertMessage(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var alert;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.alertCtrl.create({
                        header: 'معلومات',
                        message: msg,
                        backdropDismiss: false,
                        buttons: ['Ok']
                      });

                    case 2:
                      alert = _context19.sent;
                      _context19.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
          /** Show Loading popup. */

        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.presentPopover('');

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
          /** Hide loading popup. */

        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this68 = this;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      setTimeout(function (res) {
                        _this68.closePopup(); // this.loader.dismiss();


                        _this68.popOver.dismiss();
                      }, 1000);

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }));
          }
          /** Search all user from API.
           * @returns Array of users list or error
          */

        }, {
          key: "searchUser",
          value: function searchUser(data) {
            var _this69 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this69.postRequest(data, 'search_user').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "searchAllUser",
          value: function searchAllUser(data) {
            var _this70 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this70.postRequest(data, 'search_user_all').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
          /* searchUser except teacher,parent and student date 12/11/2021 */

        }, {
          key: "newUserSearch",
          value: function newUserSearch(data) {
            var _this71 = this;

            return new Promise(function (resolve, reject) {
              _this71.postRequest(data, 'new_user_search').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "markBulletinRead",
          value: function markBulletinRead(data) {
            var _this72 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this72.postRequest(data, 'markBulletinRead').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "deleteBulletin",
          value: function deleteBulletin(data) {
            var _this73 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this73.postRequest(data, 'delete_bulletins').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "closeBulletin",
          value: function closeBulletin(data) {
            var _this74 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this74.postRequest(data, 'closed_bulletins').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "reOpenBulletin",
          value: function reOpenBulletin(data) {
            var _this75 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this75.postRequest(data, 'reOpenBulletin').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "getBulletinDetails",
          value: function getBulletinDetails(data) {
            var _this76 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this76.postRequest(data, 'bulletins_details').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "getStudentReports",
          value: function getStudentReports(data) {
            var _this77 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this77.postRequest(data, 'getStudentReports').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "submitStudentReports",
          value: function submitStudentReports(data) {
            var _this78 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this78.postRequest(data, 'submitStudentReports').then(function (response) {
                if (response.success) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "removeStudentReportByType",
          value: function removeStudentReportByType(data) {
            var _this79 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this79.postRequest(data, 'removeStudentReportByType').then(function (response) {
                if (response.success) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "printAllReports",
          value: function printAllReports(data) {
            var _this80 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this80.postRequest(data, 'printAllReports').then(function (response) {
                if (response.success) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          } //==========added on 28/12/21 for print class notes as pdf=========

        }, {
          key: "printAllClassNotes",
          value: function printAllClassNotes(data) {
            var _this81 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this81.postRequest(data, 'printAllClassNotes').then(function (response) {
                if (response.success) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "getBulletins",
          value: function getBulletins(data) {
            var _this82 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this82.postRequest(data, 'getBulletins').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "editAbsentNotes",
          value: function editAbsentNotes(data) {
            var _this83 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this83.postRequest(data, 'editAbsentNotes').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response,
                    message: response.mg
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "shareBulletins",
          value: function shareBulletins(data) {
            var _this84 = this;

            return new Promise(function (resolve, reject) {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;

              var body = _this84.makeObjectToUrlParams(data);

              Object.keys(data.users).map(function (key) {
                console.log('key', key);
                body = body.append('shareto_user_no' + '[' + key + ']', data.users[key]);
              }); // console.log(body);

              _this84.httpClient.post(env.serverURL + 'shareBulletins', body, {
                headers: header
              }).subscribe(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response,
                    message: response.msg
                  });
                } else {
                  reject(response.msg);
                }
              }, function (error) {
                console.log(error);
              }); // console.log(data);
              // this.postRequest(data, 'shareBulletins').then((response: any) => {
              //   if (response) {
              //       resolve({ session: true, data: response.response,message:response.msg});
              //   } else {
              //       reject(response.msg)
              //   }
              // }).catch((error) => {
              //   console.log(error);
              // })

            });
          }
        }, {
          key: "commentBulletins",
          value: function commentBulletins(data) {
            var _this85 = this;

            return new Promise(function (resolve, reject) {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;

              var body = _this85.makeObjectToUrlParams(data);

              _this85.httpClient.post(env.serverURL + 'commentBulletins', body, {
                headers: header
              }).subscribe(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response,
                    message: response.msg
                  });
                } else {
                  reject(response.msg);
                }
              }, function (error) {
                console.log(error);
              });
            });
          }
          /** Search all student of School from API.
          * @returns Array of users list or error
          */

        }, {
          key: "serachStudent",
          value: function serachStudent(data) {
            var _this86 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this86.postRequest(data, 'search_student').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "searTeacher",
          value: function searTeacher(data) {
            var _this87 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this87.postRequest(data, 'getTeacherWithPagging').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
          /** Search all parent of School from API.
          * @returns Array of users list or error
          */

        }, {
          key: "serachParent",
          value: function serachParent(data) {
            var _this88 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this88.postRequest(data, 'serachParent').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            });
          }
          /** Get school list from API.
           * @returns Array of school list or error
          */

        }, {
          key: "getSchool",
          value: function getSchool(country_code) {
            var _this89 = this;

            return new Promise(function (resolve, reject) {
              _this89.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');
                  var url = env.serverURL + 'getSchoolsHavingMaterials/' + (country_code && typeof country_code !== 'undefined' ? '?country_code=' + country_code : '');

                  _this89.httpClient.post(url, country_code, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response.success) {
                      resolve(response.schools);
                    } else {
                      reject("Server is not responding");
                    }
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this89.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this89.lang.networkNotWorking);
                }
              });
            });
          }
          /** Get teacher list of a perticular school  from API.
          * @returns Array of teacher list or error
          */

        }, {
          key: "getTeachers",
          value: function getTeachers(data) {
            var _this90 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this90.postRequest(data, 'getAllTeachers').then(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.response == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response == true) {
                    // this.dbProvider.insertClasses(response.courses);
                    resolve({
                      session: true,
                      data: response.profile
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {// this.dbProvider.getClasses().then((classes) => {
                  //   resolve({ session: true, data: classes });
                  // }).catch((error) => {
                  //   reject(error);
                  // })
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this90.lang.usnexpectedError);
                }
              });
            });
          }
          /* get all the users except teacher studet and parent */

        }, {
          key: "getAllUsers",
          value: function getAllUsers(users) {
            var _this91 = this;

            return new Promise(function (resolve, reject) {
              _this91.postRequest(users, 'getSchoolUsersList').then(function (response) {
                if (response) {
                  console.log('alluserslist', response);

                  if (response.session == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.session == true) {
                    resolve({
                      session: true,
                      data: response.response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {}
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this91.lang.usnexpectedError);
                }
              });
            });
          }
          /** update teacher list of a perticular class of a school .
           * @returns updation status
          */

        }, {
          key: "updateTeacher",
          value: function updateTeacher(data) {
            var _this92 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');
              var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              body = body.append("class_id", data.class_id);
              body = body.append("school_id", data.school_id);
              body = body.append("user_no", data.user_no);
              body = body.append("lang_code", data.lang_code);
              body['teachersList'] = [];
              var obj = [];

              for (var i = 0; i < data.teachersList.length; i++) {// code...
              }

              Object.keys(data.teachersList).map(function (key) {
                console.log('key', key);
                Object.keys(data.teachersList[key]).map(function (sid) {
                  console.log('ap', sid);
                  body = body.append('teachersList' + '[' + key + ']' + '[' + sid + ']', data.teachersList[key][sid]);
                });
              }); // console.log(body);

              _this92.httpClient.post(env.serverURL + 'updateTeachers', body, {
                headers: header
              }).subscribe(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.response == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response == true) {
                    // this.dbProvider.insertClasses(response.courses);
                    resolve({
                      session: true,
                      data: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {// this.dbProvider.getClasses().then((classes) => {
                  //   resolve({ session: true, data: classes });
                  // }).catch((error) => {
                  //   reject(error);
                  // })
                }
              }, function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this92.lang.usnexpectedError);
                }
              });
            });
          }
          /** update teacher list of a perticular class of a school .
           * @returns updation status
          */

        }, {
          key: "createBulletins",
          value: function createBulletins(data) {
            var _this93 = this;

            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'createBulletins', data, {
              responseType: 'arraybuffer',
              reportProgress: true
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (event) {
              return _this93.getStatusMessage(event);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function (message) {
              return message;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
          }
        }, {
          key: "createclassNotes",
          value: function createclassNotes(data) {
            var _this94 = this;

            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'createNotes', data, {
              responseType: 'arraybuffer',
              reportProgress: true
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (event) {
              return _this94.getStatusMessage(event);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function (message) {
              return message;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
          }
        }, {
          key: "getStatusMessage",
          value: function getStatusMessage(event) {
            var status;

            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                status = Math.round(100 * event.loaded / event.total);
                this.uploadProgress.next(status);
                this.events.emit(status);
                return status;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return "Done";
            }
          } // createBulletins(data): Promise<any> {
          //   return new Promise((resolve, reject) => {
          //       // console.log(data['FormData']);
          //      let header = new HttpHeaders();
          //         header.append('Content-Type', 'application/json');
          //        //   let body = new HttpParams();
          //        // body= body.append("title", data.title);
          //        // body= body.append("school_id", data.school_id);
          //        // body= body.append("user_no", data.user_no);
          //        // body['files']=<any>[];
          //        //   Object.keys(data.files).map((key) => {
          //        //     console.log('key',key);
          //        //       Object.keys(data.files[key]).map((k) => {
          //        //         console.log('key',key);
          //        //          body=body.append('files'+'['+ key+']'+'['+k+']', data.files[key][k]);
          //        //      })
          //        //  })
          //        //       console.log(body);
          //     this.httpClient.post( env.serverURL + 'createBulletins',data, { headers: header }).subscribe((response: any) => {
          //       if (response) {
          //        console.log('tescherList',response);
          //          if (response.success==true) {
          //           resolve({ session: true, data: response.msg});
          //         } else {
          //           reject(response.msg)
          //         }
          //       } else {
          //       }
          //     },(error) => {
          //       console.log(error);
          //       if (error.message != undefined && error.message != '' && error.message != null) {
          //         reject(error.message)
          //       } else {
          //         reject(this.lang.usnexpectedError)
          //       }
          //     });
          //   })
          // }

          /** delete a class from a school.
           * @returns status of deletion
          */

        }, {
          key: "deleteClass",
          value: function deleteClass(data) {
            var _this95 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this95.postRequest(data, 'deleteClass').then(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.response == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response == true) {
                    // this.dbProvider.insertClasses(response.courses);
                    resolve({
                      session: true,
                      data: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {// this.dbProvider.getClasses().then((classes) => {
                  //   resolve({ session: true, data: classes });
                  // }).catch((error) => {
                  //   reject(error);
                  // })
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this95.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "openPdf",
          value: function openPdf(data) {
            var _this96 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this96.postRequest(data, 'check_user_plan').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this96.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "openStudentReport",
          value: function openStudentReport(url) {
            var _this97 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');

              _this97.http.get(url, {
                headers: header
              }).subscribe(function (res) {
                resolve(res);
              }, function (e) {
                resolve(e);
              });
            });
          }
        }, {
          key: "getPlan",
          value: function getPlan(data) {
            var _this98 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this98.postRequest(data, 'getPlan').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this98.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getUserPlan",
          value: function getUserPlan(data) {
            var _this99 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this99.postRequest(data, 'getUserPlan').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this99.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "registerTeacher",
          value: function registerTeacher(data) {
            var _this100 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this100.postRequest(data, 'createNewTeacher').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this100.lang.usnexpectedError);
                }
              });
            });
          }
          /*=================create new user except teacher,parent and student======================*/

        }, {
          key: "registerNewUser",
          value: function registerNewUser(data) {
            var _this101 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this101.postRequest(data, 'addNewUser').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this101.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "subscribePlan",
          value: function subscribePlan(data) {
            var _this102 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this102.postRequest(data, 'subscribe_plans').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this102.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "purchase",
          value: function purchase(data) {
            var _this103 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this103.postRequest(data, 'purchase').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response);
                  } else {
                    reject(response);
                  }
                } else {
                  reject(response);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this103.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get parent list of a perticular school who recently registered on app  from API.
           * @returns Array of parent list or error
          */

        }, {
          key: "getRequestedParents",
          value: function getRequestedParents(data) {
            var _this104 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this104.postRequest(data, 'getNewParents').then(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.response == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response == true) {
                    // this.dbProvider.insertClasses(response.courses);
                    resolve({
                      session: true,
                      data: response.parents
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {// this.dbProvider.getClasses().then((classes) => {
                  //   resolve({ session: true, data: classes });
                  // }).catch((error) => {
                  //   reject(error);
                  // })
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this104.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getAllParents",
          value: function getAllParents(data) {
            var _this105 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this105.postRequest(data, 'getAllParents').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this105.lang.usnexpectedError);
                }
              });
            });
          }
          /** take action on requested registered parents.
           * @returns status of action
           * @param parent id
           * @param school id
             */

        }, {
          key: "acceptRequestedParents",
          value: function acceptRequestedParents(data) {
            var _this106 = this;

            return new Promise(function (resolve, reject) {
              //console.log('requtedprrr=>>>',data);
              _this106.postRequest(data, 'acceptParentRequest').then(function (response) {
                if (response) {
                  if (response.response == false) {
                    resolve({
                      session: false
                    });
                  } else {
                    resolve({
                      session: true
                    });
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this106.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "changeParentStatus",
          value: function changeParentStatus(data) {
            var _this107 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this107.postRequest(data, 'changeParentStatus').then(function (response) {
                if (response) {
                  if (response.response == false) {
                    resolve({
                      session: false,
                      msg: response.msg
                    });
                  } else {
                    resolve({
                      session: true,
                      msg: response.msg
                    });
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this107.lang.usnexpectedError);
                }
              });
            });
          }
          /** delete requested registered parents.
          * @returns status of action
          * @param parent id
          * @param school id
          */

        }, {
          key: "deleteRequestedParents",
          value: function deleteRequestedParents(data) {
            var _this108 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this108.postRequest(data, 'deleteParentRequest').then(function (response) {
                if (response) {
                  if (response.response == false) {
                    resolve({
                      session: false
                    });
                  } else {
                    resolve({
                      session: true
                    });
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this108.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get E-Learning categories list from API.
          * @returns Array of category list or error
          */

        }, {
          key: "getElearningMaterials",
          value: function getElearningMaterials(schoolId, country_code) {
            var _this109 = this;

            return new Promise(function (resolve, reject) {
              _this109.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');
                  var url = env.serverURL + 'getElearningMaterials/' + schoolId + (country_code && typeof country_code !== 'undefined' ? '?country_code=' + country_code : '');

                  _this109.httpClient.get(url, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response.success) {
                      resolve(response.materials);
                    } else {
                      reject("Server is not responding");
                    }
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this109.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this109.lang.networkNotWorking);
                }
              });
            });
          }
        }, {
          key: "getShareLink",
          value: function getShareLink(data) {
            var _this110 = this;

            return new Promise(function (resolve, reject) {
              _this110.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');
                  var url = env.serverURL + 'getAppShareLink?' + 'lang=en';

                  _this110.httpClient.get(url, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response) {
                      resolve(response);
                    } else {
                      reject("Server is not responding");
                    }
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this110.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this110.lang.networkNotWorking);
                }
              });
            });
          }
          /** Get E-Learning material data from API.
            * @returns Array of material data or error
           */

        }, {
          key: "getMaterialDetails",
          value: function getMaterialDetails(materialId) {
            var _this111 = this;

            return new Promise(function (resolve, reject) {
              _this111.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');

                  _this111.httpClient.get(env.serverURL + 'getMaterialDetails/' + materialId, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response.success) {
                      resolve(response.material);
                    } else {
                      reject("Server is not responding");
                    }
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this111.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this111.lang.networkNotWorking);
                }
              });
            });
          }
          /** Get ads on login page.
           * @returns Array of ads or error
          */

        }, {
          key: "getAds",
          value: function getAds() {
            var _this112 = this;

            return new Promise(function (resolve, reject) {
              _this112.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');

                  _this112.httpClient.get(env.serverURL + 'getAds', {
                    headers: header
                  }).subscribe(function (response) {
                    resolve(response);
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this112.lang.usnexpectedError);
                    }
                  });
                } else {
                  resolve(false);
                }
              });
            });
          }
          /** Get news from API for news page.
           * @returns Array of news or error
          */

        }, {
          key: "getNews",
          value: function getNews() {
            var _this113 = this;

            return new Promise(function (resolve, reject) {
              _this113.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');

                  _this113.httpClient.get(env.serverURL + 'getNews', {
                    headers: header
                  }).subscribe(function (response) {
                    if (response.success) {
                      resolve(response.news);
                    }

                    resolve(response);
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this113.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this113.lang.networkNotWorking);
                }
              });
            });
          }
          /** Get news from API with paging.
           * @param {number} start - starting point of news list
           * @param {number} newsPerPage - how many news in one page
           * @param {object} userDeatils logged in user details
           * @param {char} countrycode - to get news of current locaion
           * @returns Array of News as per location or error
          */

        }, {
          key: "getNewsJoin",
          value: function getNewsJoin(start, newsPerPage, userDeatils, countryCode) {
            var _this114 = this;

            return new Promise(function (resolve, reject) {
              _this114.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/json');
                  var url = '';

                  if (userDeatils) {
                    url = env.serverURL + 'getNewsjoin/' + start + '/' + newsPerPage + '/desc/' + userDeatils.user_no;
                  } else {
                    url = env.serverURL + 'getNewsjoin/' + start + '/' + newsPerPage + '/desc';
                  }

                  if (countryCode && typeof countryCode !== 'undefined') {
                    url = url + '?code=' + countryCode;
                  }

                  _this114.httpClient.get(url, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response.success) {
                      if (response.news.length > 20) {
                        _this114.dbProvider.insertNews(response.news.slice(0, 20));
                      } else {
                        _this114.dbProvider.insertNews(response.news);
                      }

                      resolve(response.news);
                    }

                    resolve(response);
                  }, function (error) {
                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this114.lang.usnexpectedError);
                    }
                  });
                } else {
                  _this114.dbProvider.getNews().then(function (news) {
                    resolve(news);
                  })["catch"](function (err) {
                    reject(err);
                  });
                }
              });
            });
          }
          /**
           * Like the news post
           * @param data user_no, news_id, session_id
           */

        }, {
          key: "likeNewsPost",
          value: function likeNewsPost(data) {
            var _this115 = this;

            return new Promise(function (resolve, reject) {
              _this115.postRequest(data, 'likeNewsPost').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this115.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this115.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Dislike the news post
           * @param data user_no, news_id, session_id
           */

        }, {
          key: "dislikeNewsPost",
          value: function dislikeNewsPost(data) {
            var _this116 = this;

            return new Promise(function (resolve, reject) {
              _this116.postRequest(data, 'dislikeNewsPost').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      data: response.courses
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this116.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this116.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get courses from API to show on classlist page.
           * @param {Object} data - contains user_no, school_id, session_id
           * @returns list of courses or error
          */

        }, {
          key: "getCourses",
          value: function getCourses(data) {
            var _this117 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this117.postRequest(data, 'getCourses/' + data.school_id).then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    _this117.dbProvider.insertClasses(response.courses);

                    resolve({
                      session: true,
                      data: response.courses,
                      linkData: response.activeLink
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  _this117.dbProvider.getClasses().then(function (classes) {
                    resolve({
                      session: true,
                      data: classes
                    });
                  })["catch"](function (error) {
                    reject(error);
                  });
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this117.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get courses from API to show on classlist page.
          * @param {Object} data - contains user_no, school_id, session_id
          * @returns list of courses or error
          */

        }, {
          key: "getTeachersClass",
          value: function getTeachersClass(data) {
            var _this118 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this118.postRequest(data, 'getTeachersClass/' + data.school_id).then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve({
                      session: true,
                      data: response.courses
                    });
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this118.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get follow up fields.
          * @param {Object} data - contains user_no, school_id, session_id
          * @returns list of courses or error
          */

        }, {
          key: "getFollowupFields",
          value: function getFollowupFields(data) {
            var _this119 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this119.postRequest(data, 'getFollowupFields').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve({
                      session: true,
                      data: response.result
                    });
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this119.lang.usnexpectedError);
                }
              });
            });
          }
          /** delete fields.
          * @param {Object} data - contains user_no, school_id, session_id
          * @returns list of courses or error
          */

        }, {
          key: "deleteFollowupFields",
          value: function deleteFollowupFields(data) {
            var _this120 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this120.postRequest(data, 'deleteFollowupFields').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve({
                      session: true,
                      data: response.result
                    });
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this120.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getSelectedCourses",
          value: function getSelectedCourses(data) {
            var _this121 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this121.postRequest(data, 'getSelectedCourses/' + data.school_id).then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve({
                      session: true,
                      data: response.selectedCourses
                    });
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this121.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get courses from API to show on classlist page.
           * @param {Object} data - contains user_no, school_id, session_id
           * @returns list of courses or error
          */

        }, {
          key: "setTeachersClass",
          value: function setTeachersClass(data) {
            var _this122 = this;

            return new Promise(function (resolve, reject) {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');
              var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
              Object.keys(data).forEach(function (key) {
                body = body.append(key, data[key]);
              }); // body['updates']=[];

              Object.keys(data.updates).map(function (key) {
                Object.keys(data.updates[key]).map(function (sid) {
                  body = body.append('courcesData' + '[' + key + ']' + '[' + sid + ']', data.updates[key][sid]);
                });
              });

              _this122.httpClient.post(env.serverURL + 'setTeachersClass/' + data.school_id, body, {
                headers: header
              }).subscribe(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.response == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response == true) {
                    resolve({
                      session: true,
                      data: response.msg
                    });
                  } else {
                    resolve(response.msg);
                  }
                } else {}
              }, function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this122.lang.usnexpectedError);
                }
              });
            });
          }
          /** set inpu5t field for follow up student.
          * @param {Object} data - contains user_no, school_id, session_id
          * @returns list of courses or error
          */

        }, {
          key: "saveFollowupFields",
          value: function saveFollowupFields(data) {
            var _this123 = this;

            return new Promise(function (resolve, reject) {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');
              var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
              Object.keys(data).forEach(function (key) {
                if (key != 'field') body = body.append(key, data[key]);
              }); // body['updates']=[];

              Object.keys(data.field).map(function (key) {
                Object.keys(data.field[key]).map(function (sid) {
                  body = body.append('field' + '[' + key + ']' + '[' + sid + ']', data.field[key][sid]);
                });
              });

              _this123.httpClient.post(env.serverURL + 'saveFollowupFields', body, {
                headers: header
              }).subscribe(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.success == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success == true) {
                    resolve({
                      session: true,
                      data: response.result
                    });
                  } else {
                    resolve(response.msg);
                  }
                } else {}
              }, function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this123.lang.usnexpectedError);
                }
              });
            });
          }
          /** get all seminars and their total present absent total student
          
          */

        }, {
          key: "getSeminarClassList",
          value: function getSeminarClassList(data) {
            var _this124 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this124.postRequest(data, 'getSeminarClassList/' + data.school_id).then(function (response) {
                if (response) {
                  if (!response.response) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response) {
                    resolve({
                      session: true,
                      data: response.response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this124.lang.usnexpectedError);
                }
              });
            });
          }
          /** reorder all classes
           */

        }, {
          key: "reorderClasses",
          value: function reorderClasses(data) {
            var _this125 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/x-www-form-urlencoded');
              var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              body = body.append("school_id", data.school_id);
              body = body.append("user_no", data.user_no);
              body = body.append("lang_code", data.lang_code);
              Object.keys(data.list).map(function (key) {
                Object.keys(data.list[key]).map(function (sid) {
                  body = body.append('list[' + key + '][' + sid + ']', data.list[key][sid]);
                });
              });

              _this125.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'reorderClasses', body, {
                headers: header
              }).subscribe(function (res) {
                var response = res;

                if (response.success == true) {
                  resolve(true);
                } else {
                  // this.errorALertMessage(response.msg);
                  resolve(false);
                }
              }, function (error) {
                console.log(error);
                resolve(false);
              });
            });
          }
          /** submit email for forgot password
          */

        }, {
          key: "submitEmail",
          value: function submitEmail(data) {
            var _this126 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this126.postRequest(data, 'forgot_password').then(function (response) {
                if (response) {
                  if (!response.response) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response) {
                    resolve({
                      session: true,
                      data: response.response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this126.lang.usnexpectedError);
                }
              });
            });
          }
          /** Check OTP for sorgot password
          */

        }, {
          key: "checkOtp",
          value: function checkOtp(data) {
            var _this127 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this127.postRequest(data, 'checkOtp').then(function (response) {
                if (response) {
                  if (!response.response) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response) {
                    resolve({
                      session: true,
                      data: response.response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this127.lang.usnexpectedError);
                }
              });
            });
          }
          /** reset pass. for sorgot password
          */

        }, {
          key: "resetPassword",
          value: function resetPassword(data) {
            var _this128 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this128.postRequest(data, 'reset_password').then(function (response) {
                if (response) {
                  if (!response.response) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response) {
                    resolve({
                      session: true,
                      data: response.response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this128.lang.usnexpectedError);
                }
              });
            });
          }
          /** get all student of a school
          */

        }, {
          key: "getSchoolStudents",
          value: function getSchoolStudents(data) {
            var _this129 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this129.postRequest(data, 'get_school_stu').then(function (response) {
                if (response) {
                  if (!response.response) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response) {
                    resolve({
                      session: true,
                      data: response.response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this129.lang.usnexpectedError);
                }
              });
            });
          }
          /** get all student of a school
          */

        }, {
          key: "getSchoolUsers",
          value: function getSchoolUsers(data) {
            var _this130 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this130.postRequest(data, 'get_school_users').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
                reject(error.message);
              });
            });
          }
        }, {
          key: "getAllSchoolUsers",
          value: function getAllSchoolUsers(data) {
            var _this131 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this131.postRequest(data, 'get_school_users_all').then(function (response) {
                if (response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);
                reject(error.message);
              });
            });
          }
        }, {
          key: "todayDashboard",
          value: function todayDashboard(data) {
            var _this132 = this;

            return new Promise(function (resolve, reject) {
              // console.log(data);
              _this132.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  _this132.postRequest(data, 'todayDashboard/' + data.school_id).then(function (response) {
                    if (response) {
                      if (!response.response) {
                        resolve({
                          session: false,
                          message: response.msg
                        });
                      } else if (response.response) {
                        resolve({
                          session: true,
                          data: response.response
                        });

                        _this132.studentService.setStaticalData(data.user_no, response.response);
                      } else {
                        reject(response.msg);
                      }
                    } else {
                      reject(response.msg);
                    }
                  })["catch"](function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this132.lang.usnexpectedError);
                    }
                  });
                } else {
                  _this132.studentService.getOfflineStatical(data.user_no, function (res) {
                    resolve({
                      session: true,
                      data: res
                    });
                  });
                }
              });
            });
          }
          /** Register new course.
          * @param {Object} data - contains user_no, school_id, code, name, desc, semno
          * @returns Success or error msg
          */

        }, {
          key: "createNewCourse",
          value: function createNewCourse(data) {
            var _this133 = this;

            return new Promise(function (resolve, reject) {
              _this133.postRequest(data, 'createCourse').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this133.lang.usnexpectedError);
                }
              });
            });
          }
          /** Register new teacher.
             * @param {Object} data - contains user_no, school_id, Teacher Id, teacher name, teacher password
             * @returns Success or error msg
            */

        }, {
          key: "registerNewTeacher",
          value: function registerNewTeacher(data) {
            var _this134 = this;

            return new Promise(function (resolve, reject) {
              _this134.postRequest(data, 'registerNewTeacher').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(response.msg);
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this134.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "registerNewParent",
          value: function registerNewParent(data) {
            var _this135 = this;

            return new Promise(function (resolve, reject) {
              _this135.postRequest(data, 'registerNewParent').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(response.msg);
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this135.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "createNewParent",
          value: function createNewParent(data) {
            var _this136 = this;

            return new Promise(function (resolve, reject) {
              _this136.postRequest(data, 'createNewParent').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(response.msg);
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this136.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getAllRules",
          value: function getAllRules(data) {
            var _this137 = this;

            return new Promise(function (resolve, reject) {
              _this137.postRequest(data, 'getAllRules').then(function (response) {
                if (response) {
                  if (response.details) {
                    resolve(response.details);
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {//  reject(this.lang.usnexpectedError)
                }
              });
            });
          }
          /** Register new Student.
             * @param {Object} data - contains user_no, school_id, name, student_id
             * @returns Success or Error msg
            */

        }, {
          key: "registerStudent",
          value: function registerStudent(data) {
            var _this138 = this;

            return new Promise(function (resolve, reject) {
              _this138.postRequest(data, 'registerStudent').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  _this138.dbProvider.getClasses().then(function (classes) {
                    resolve({
                      session: true,
                      data: classes
                    });
                  })["catch"](function (error) {
                    reject(error);
                  });
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this138.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Update course description
           * @param data user_no, session_id, cid, course object
           */

        }, {
          key: "updateCourseDesc",
          value: function updateCourseDesc(data) {
            var _this139 = this;

            return new Promise(function (resolve, reject) {
              _this139.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  headers.set('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("cid", data.cid);
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("lang_code", data.lang_code);
                  body = body.append('course[name]', data.course.name);
                  body = body.append('course[desc]', data.course.desc);

                  _this139.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + '/manageCourse', body, {
                    headers: headers
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response['session']) {
                      resolve({
                        session: false,
                        message: response['msg']
                      });
                    } else if (response['success']) {
                      resolve({
                        session: true,
                        data: response['courses']
                      });
                    } else {
                      reject(response['msg']);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this139.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this139.lang.networkNotWorking);
                }
              });
            });
          }
          /**
           * Get holiday list from backend
           * @param data user_no, school_id, session_id
           */

        }, {
          key: "getHolidays",
          value: function getHolidays(data) {
            var _this140 = this;

            return new Promise(function (resolve, reject) {
              _this140.postRequest(data, 'getHolidays/' + data.school_id).then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  resolve(false);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this140.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get student list according to course.
           * @param {Object} data - date, user_no, session_id, course_id, school_id
           * @returns list of students or error
          */

        }, {
          key: "getClassStudentList",
          value: function getClassStudentList(data) {
            var _this141 = this;

            return new Promise(function (resolve, reject) {
              _this141.postRequest(data, 'getStudents/' + data.course_id).then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    _this141.dbProvider.insertStudentList(response.students, 5);

                    resolve({
                      session: true,
                      data: response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  if (localStorage.getItem("classlocalatt")) {
                    var attendance = JSON.parse(localStorage.getItem("classlocalatt"));

                    if (attendance[data.course_id]) {
                      resolve({
                        session: true,
                        data: attendance[data.course_id]
                      });
                    } else {
                      _this141.dbProvider.getStudentList(data.course_id).then(function (students) {
                        resolve({
                          session: true,
                          data: {
                            students: students,
                            last_cem: 0,
                            semteacher: []
                          }
                        });
                      })["catch"](function (error) {
                        reject(error);
                      });
                    }
                  } else {
                    _this141.dbProvider.getStudentList(data.course_id).then(function (students) {
                      resolve({
                        session: true,
                        data: {
                          students: students,
                          last_cem: 0,
                          semteacher: []
                        }
                      });
                    })["catch"](function (error) {
                      reject(error);
                    });
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this141.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get student list according to course.
           * @param {Object} data - date, user_no, session_id, course_id, school_id
           * @returns list of students or error
          */

        }, {
          key: "getFollowUpStudentList",
          value: function getFollowUpStudentList(data) {
            var _this142 = this;

            return new Promise(function (resolve, reject) {
              _this142.postRequest(data, 'getFollowUpStudentList/' + data.course_id).then(function (response) {
                if (!response.session) {
                  resolve({
                    session: false,
                    message: response.msg
                  });
                } else if (response.success) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this142.lang.usnexpectedError);
                }
              });
            });
          }
          /** Delete student marks according to course and user id with selected date.
           * @param {Object} data - date, user_no, session_id, course_id, school_id
           * @returns list of students or error
          */

        }, {
          key: "deleteFollowUpStudentList",
          value: function deleteFollowUpStudentList(data) {
            var _this143 = this;

            return new Promise(function (resolve, reject) {
              _this143.postRequest(data, 'deleteFollowUpStudentList/' + data.course_id).then(function (response) {
                if (!response.session) {
                  resolve({
                    session: false,
                    message: response.msg
                  });
                } else if (response.success) {
                  resolve({
                    session: true,
                    data: response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this143.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get student PDF.
          * @param {Object} data - date, user_no, session_id, course_id, school_id
          * @returns list of students or error
          */

        }, {
          key: "getMarksReport",
          value: function getMarksReport(data) {
            var _this144 = this;

            return new Promise(function (resolve, reject) {
              _this144.postRequest(data, 'getMarksReport/' + data.course_id).then(function (response) {
                if (response.response) {
                  resolve({
                    session: true,
                    data: response.response
                  });
                } else {
                  reject(response.msg);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this144.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get delay student list according to course.
           * @param {Object} data - date, user_no, session_id, course_id, school_id
           * @returns list of students or error
          */

        }, {
          key: "getDelayClassStudentList",
          value: function getDelayClassStudentList(data) {
            var _this145 = this;

            return new Promise(function (resolve, reject) {
              _this145.postRequest(data, 'getStudents_delay/' + data.course_id).then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    _this145.dbProvider.insertStudentList(response.students, response.delay_rule);

                    resolve({
                      session: true,
                      data: response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  if (localStorage.getItem("delayclasslocalatt")) {
                    var attendance = JSON.parse(localStorage.getItem("delayclasslocalatt"));

                    if (attendance[data.course_id]) {
                      resolve({
                        session: true,
                        data: attendance[data.course_id]
                      });
                    } else {
                      _this145.dbProvider.getStudentList(data.course_id).then(function (students) {
                        if (students.length > 0) {
                          resolve({
                            session: true,
                            data: {
                              students: students,
                              last_cem: 0,
                              semteacher: [],
                              delay_rule: students[0].delay_rule
                            }
                          });
                        } else {
                          resolve({
                            session: true,
                            data: {
                              students: students,
                              last_cem: 0,
                              semteacher: [],
                              delay_rule: 5
                            }
                          });
                        }
                      })["catch"](function (error) {
                        reject(error);
                      });
                    }
                  } else {
                    _this145.dbProvider.getStudentList(data.course_id).then(function (students) {
                      if (students.length > 0) {
                        resolve({
                          session: true,
                          data: {
                            students: students,
                            last_cem: 0,
                            semteacher: [],
                            delay_rule: students[0].delay_rule
                          }
                        });
                      } else {
                        resolve({
                          session: true,
                          data: {
                            students: students,
                            last_cem: 0,
                            semteacher: [],
                            delay_rule: 5
                          }
                        });
                      }
                    })["catch"](function (error) {
                      reject(error);
                    });
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this145.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get student details.
           * @param {Object} data - user_no, session_id, cid, date, sid
           * @returns Student details or error
          */

        }, {
          key: "getStudentDetails",
          value: function getStudentDetails(data) {
            var _this146 = this;

            return new Promise(function (resolve, reject) {
              _this146.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  _this146.postRequest(data, 'viewStudent/' + data.sid).then(function (response) {
                    if (response) {
                      if (!response.session) {
                        reject(response.msg);
                      } else if (response.success) {
                        resolve({
                          session: true,
                          data: response.details
                        });
                        var a = response.details;
                        var _data = [];

                        _data.push(a);
                      } else {
                        reject(response.msg);
                      }
                    } else {
                      reject(_this146.lang.networkNotWorking);
                    }
                  })["catch"](function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this146.lang.usnexpectedError);
                    }
                  });
                }
              });
            });
          }
          /** Get notes of the student.
           * @param {Object} data - user_no, session_id, cid, date, sid
           * @returns List of notes or error
          */

        }, {
          key: "getStudentNotes",
          value: function getStudentNotes(data) {
            var _this147 = this;

            return new Promise(function (resolve, reject) {
              _this147.postRequest(data, 'getStudentNote/' + data.sid).then(function (response) {
                if (response) {
                  if (response.status) {
                    resolve(response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this147.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this147.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "createNotes",
          value: function createNotes(data) {
            var _this148 = this;

            return new Promise(function (resolve, reject) {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
              header.append('Content-Type', 'application/json');
              var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
              Object.keys(data).forEach(function (key) {
                body = body.append(key, data[key]);
              });
              body['studentIds'] = [];
              Object.keys(data.studentIds).map(function (key) {
                Object.keys(data.studentIds[key]).map(function (sid) {
                  body = body.append('studentId' + '[' + key + ']' + '[' + sid + ']', data.studentIds[key][sid]);
                });
              });

              _this148.httpClient.post(env.serverURL + 'createNotes', body, {
                headers: header
              }).subscribe(function (response) {
                if (response) {
                  console.log('tescherList', response);

                  if (response.response == false) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.response == true) {
                    resolve({
                      session: true,
                      data: response.msg
                    });
                  } else {
                    resolve(response.msg);
                  }
                } else {}
              }, function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this148.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getClassNotes",
          value: function getClassNotes(data) {
            var _this149 = this;

            return new Promise(function (resolve, reject) {
              _this149.postRequest(data, 'studentClassNotes').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response.response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this149.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this149.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getAllClassNotes",
          value: function getAllClassNotes(data) {
            var _this150 = this;

            return new Promise(function (resolve, reject) {
              _this150.postRequest(data, 'all_classNotes').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response.response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this150.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this150.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "getAllWarning",
          value: function getAllWarning(data) {
            var _this151 = this;

            return new Promise(function (resolve, reject) {
              _this151.postRequest(data, 'getWarningReport').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response.response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this151.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this151.lang.usnexpectedError);
                }
              });
            });
          }
        }, {
          key: "printWarning",
          value: function printWarning(data) {
            var _this152 = this;

            return new Promise(function (resolve, reject) {
              _this152.postRequest(data, 'getWarningReportPdf').then(function (response) {
                if (response) {
                  if (response.response) {
                    resolve(response.response);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this152.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this152.lang.usnexpectedError);
                }
              });
            });
          }
          /** Get notification of the school.
           * @param {Object} data- user_no, school_id, session_id
           * @returns list of notifications or error
           */

        }, {
          key: "getNotifications",
          value: function getNotifications(data) {
            var _this153 = this;

            return new Promise(function (resolve, reject) {
              _this153.postRequest(data, 'getNotifications/' + data.school_id).then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    _this153.dbProvider.insertPrivateMessages(response.list);

                    resolve({
                      session: true,
                      data: response.list
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  _this153.dbProvider.getPrivateMessages().then(function (messages) {
                    resolve({
                      session: true,
                      data: messages
                    });
                  });
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this153.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * delete user notification
           * @param data user_no, nid, session_id
           */

        }, {
          key: "deleteNotification",
          value: function deleteNotification(data) {
            var _this154 = this;

            return new Promise(function (resolve, reject) {
              _this154.postRequest(data, 'deleteNotifications').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this154.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this154.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Attendance mark post function
           * @param data user_no, session_id, cid, date, school_id, sheet
           */

        }, {
          key: "markAttendance",
          value: function markAttendance(data) {
            var _this155 = this;

            // console.log(data);
            return new Promise(function (resolve, reject) {
              _this155.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("cid", data.cid);
                  body = body.append("date", data.date);
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("lang_code", data.lang_code);
                  var index = 0;
                  Object.keys(data.removal_sheet).map(function (key) {
                    body = body.append('removal_sheet[' + index + '][sid]', data.removal_sheet[key].sid);
                    body = body.append('removal_sheet[' + index + '][sem]', data.removal_sheet[key].sem);
                    index++;
                  });
                  Object.keys(data.sheet).map(function (key) {
                    Object.keys(data.sheet[key]).map(function (sid) {
                      body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                    });
                  });

                  _this155.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveAttendance/' + data.school_id, body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        message: response.msg
                      });
                    } else if (response.success) {
                      resolve({
                        session: true,
                        message: response.msg
                      });
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this155.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this155.lang.networkNotWorking);
                }
              });
            });
          }
          /**
          * Attendance mark post function
          * @param data user_no, session_id, cid, date, school_id, sheet
          */

        }, {
          key: "submitMarks",
          value: function submitMarks(data, marksheet) {
            var _this156 = this;

            // console.log(data);
            return new Promise(function (resolve, reject) {
              _this156.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("cid", data.course_id);
                  body = body.append("date", data.date);
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("lang_code", data.lang_code);
                  Object.keys(marksheet).map(function (key) {
                    Object.keys(marksheet[key]).map(function (sid) {
                      body = body.append('marksheet[' + key + '][' + sid + ']', marksheet[key][sid]);
                    });
                  });

                  _this156.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveStudentMarks/' + data.school_id, body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        message: response.msg
                      });
                    } else if (response.success) {
                      resolve({
                        session: true,
                        message: response.msg
                      });
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this156.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this156.lang.networkNotWorking);
                }
              });
            });
          }
          /**
          * Delay attendance mark post function
          * @param data user_no, session_id, cid, date, school_id, sheet
          * @param submittedByUser submitted by which user 1 - admin, 2- moderator
          */

        }, {
          key: "markDelayAttendance",
          value: function markDelayAttendance(data, submittedByUser) {
            var _this157 = this;

            return new Promise(function (resolve, reject) {
              _this157.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("cid", data.cid);
                  body = body.append("date", data.date);
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("lang_code", data.lang_code);
                  Object.keys(data.sheet).map(function (key) {
                    Object.keys(data.sheet[key]).map(function (sid) {
                      body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                    });
                  });

                  _this157.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'ManroxTesting2/' + data.school_id + '/' + submittedByUser, body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (response.success == true) {
                      resolve(true);
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this157.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this157.lang.networkNotWorking);
                }
              });
            });
          }
          /**
           * Absence save note
           * @param data sid, cid, date, note, user_no, session_id
           */

        }, {
          key: "saveAbsenceNote",
          value: function saveAbsenceNote(data) {
            var _this158 = this;

            return new Promise(function (resolve, reject) {
              _this158.postRequest(data, 'saveNote').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg,
                      res: response
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this158.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this158.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Absence delete note
           * @param data user_no, session_id
           * @param note_id Note id which will be deleted
           */

        }, {
          key: "deleteAbsenceNote",
          value: function deleteAbsenceNote(data, note_id) {
            var _this159 = this;

            return new Promise(function (resolve, reject) {
              _this159.postRequest(data, 'deleteNote/' + note_id).then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this159.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this159.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Submit Student note
           * @param data sid, note, user_id
           */

        }, {
          key: "addStudentNote",
          value: function addStudentNote(data) {
            var _this160 = this;

            return new Promise(function (resolve, reject) {
              _this160.postRequest(data, 'addStudentNote').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(response.note_id);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this160.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this160.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Update user image
           * @param data Base64 image data
           */

        }, {
          key: "updateUserImage",
          value: function updateUserImage(data) {
            var _this161 = this;

            return new Promise(function (resolve, reject) {
              _this161.postRequest(data, 'updateStudentImage/' + data.sid).then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      url: response.imageUrl
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this161.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this161.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * send Private message
           * @param data user_no, session_id, notification, isemail, school_id
           */

        }, {
          key: "addNews",
          value: function addNews(data, school_id) {
            var _this162 = this;

            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'postNews', data, {
              responseType: 'arraybuffer',
              reportProgress: true
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (event) {
              return _this162.getStatusMessage(event);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function (message) {
              return message;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(data, school_id) {
            var _this163 = this;

            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header.append('Content-Type', 'application/json');
            data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', env.serverURL + 'sendMessage/' + school_id, data, {
              responseType: 'arraybuffer',
              reportProgress: true
            });
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (event) {
              return _this163.getStatusMessage(event);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function (message) {
              return message;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["last"])());
          } // sendMessage(data: any): Promise<any> {
          //   return new Promise((resolve, reject) => {
          //     console.log(data);
          //     this.getNetworkInformation().then((isNetworkAvailable) => {
          //       if (isNetworkAvailable) {
          //         data.lang_code = environment.lang_code;
          //         let header = new HttpHeaders();
          //         header.append('Content-Type', 'application/x-www-form-urlencoded');
          //         let body: HttpParams = new HttpParams();
          //         body= body.append("user_no", data.user_no);
          //         body= body.append("session_id", data.session_id);
          //         body= body.append("isemail", data.isemail);
          //         body= body.append("lang_code", data.lang_code);
          //         Object.keys(data.notification).map((key) => {
          //           if (key == 'send_to') {
          //             Object.keys(data.notification[key]).map((send_to_key) => {
          //               body= body.append('notification[' + key + '][' + send_to_key + ']', data.notification[key][send_to_key]);
          //             })
          //           } else {
          //             body= body.append('notification[' + key + ']', data.notification[key]);
          //           }
          //         })
          //         this.http.post(environment.serverURL + 'sendMessage/' + data.school_id, body, { headers: header }).subscribe(() => {
          //           resolve(true);
          //         }, (error) => {
          //           console.log(error);
          //           if (error.message != undefined && error.message != '' && error.message != null) {
          //             reject(error.message)
          //           } else {
          //             reject(this.lang.usnexpectedError)
          //           }
          //         })
          //       } else {
          //         reject(this.lang.networkNotWorking);
          //       }
          //     })
          //   })
          // }

        }, {
          key: "postNews___OLD",
          value: function postNews___OLD(data) {
            var _this164 = this;

            return new Promise(function (resolve, reject) {
              _this164.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("title", data.title);
                  body = body.append("news_description", data.news_description);
                  body = body.append("video", data.video);
                  body = body.append("image", data.image);
                  body = body.append("user_no", data.user_no);
                  body = body.append("user_type", data.user_type);
                  body = body.append("school_id", data.school_id);
                  body = body.append("countryCode", data.countryCode);
                  body = body.append("lang_code", data.lang_code);

                  _this164.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'postNews', body, {
                    headers: header
                  }).subscribe(function () {
                    resolve(true);
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this164.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this164.lang.networkNotWorking);
                }
              });
            });
          } // postNews(data: any): Promise<any> {
          //   return new Promise((resolve, reject) => {
          //     this.getNetworkInformation().then((isNetworkAvailable) => {
          //       if (isNetworkAvailable) {
          //         data.lang_code = environment.lang_code;
          //         let header = new HttpHeaders();
          //         header.append('Content-Type', 'application/x-www-form-urlencoded');
          //         let body: any = new FormData();
          //         body.append("title", data.title);
          //         body.append("news_description", data.news_description);
          //         body.append("video", data.video);
          //         //body.append("image", data.image);
          //         body.append("user_no", data.user_no);
          //         body.append("user_type", data.user_type);
          //         body.append("school_id", data.school_id);
          //         body.append("countryCode", data.countryCode);
          //         body.append("lang_code", data.lang_code);
          //         this.http.post(environment.serverURL + 'postNews', body/*, { headers: header }*/).subscribe(() => {
          //           resolve(true);
          //         }, (error) => {
          //           console.log(error);
          //           if (error.message != undefined && error.message != '' && error.message != null) {
          //             reject(error.message)
          //           } else {
          //             reject(this.lang.usnexpectedError)
          //           }
          //         })
          //       } else {
          //         reject(this.lang.networkNotWorking);
          //       }
          //     })
          //   })
          // }

          /**
           * Update user settings
           * @param data user_no, session_id, user object
           */

        }, {
          key: "updateUserSettings",
          value: function updateUserSettings(data) {
            var _this165 = this;

            return new Promise(function (resolve, reject) {
              _this165.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');

                  var body = _this165.makeObjectToUrlParams(data);

                  Object.keys(data.users).map(function (key) {
                    if (data.users[key] != '') {
                      body = body.append('user[' + key + ']', data.users[key]);
                    }
                  });

                  _this165.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveUser', body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        message: response.msg
                      });
                    } else if (response.success) {
                      resolve({
                        session: true,
                        message: response.msg,
                        pic: response.picUrl
                      });
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this165.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this165.lang.networkNotWorking);
                }
              });
            });
          }
        }, {
          key: "deleteSchoolSettings",
          value: function deleteSchoolSettings(data) {
            var _this166 = this;

            return new Promise(function (resolve, reject) {
              _this166.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');

                  var body = _this166.makeObjectToUrlParams(data);

                  Object.keys(data).map(function (key) {
                    if (data[key] != '') {
                      body = body.append(key, data[key]);
                    }
                  });

                  _this166.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'deleteSchool', body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        message: response.msg,
                        deactive_date: response.response.deactivate_date
                      });
                    } else if (response.success) {
                      resolve({
                        session: true,
                        message: response.msg,
                        deactivate_date: response.response.deactivate_date
                      });
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this166.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this166.lang.networkNotWorking);
                }
              });
            });
          }
        }, {
          key: "revertDeletedSchoolSettings",
          value: function revertDeletedSchoolSettings(data) {
            var _this167 = this;

            return new Promise(function (resolve, reject) {
              _this167.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');

                  var body = _this167.makeObjectToUrlParams(data);

                  Object.keys(data).map(function (key) {
                    if (data[key] != '') {
                      body = body.append(key, data[key]);
                    }
                  });

                  _this167.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'revertDeleteSchool', body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        message: response.msg,
                        deactive_date: response.response.deactivate_date
                      });
                    } else if (response.success) {
                      resolve({
                        session: true,
                        message: response.msg,
                        deactive_date: response.response.deactivate_date
                      });
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this167.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this167.lang.networkNotWorking);
                }
              });
            });
          }
          /**
           * Get parent connect listing
           * @param data
           */

        }, {
          key: "getConnectChatList",
          value: function getConnectChatList(data) {
            var _this168 = this;

            return new Promise(function (resolve, reject) {
              _this168.postRequest(data, 'getParentConnectChatList').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    _this168.dbProvider.insertParentConnectMessages(response.chat_list);

                    resolve({
                      session: true,
                      chatList: response.chat_list
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  _this168.dbProvider.getParentConnectMessages().then(function (messages) {
                    resolve({
                      session: true,
                      chatList: messages
                    });
                  })["catch"](function (error) {
                    reject(error);
                  });
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this168.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * create parent connect chat
           * @param data user_no, school_id, session_id, message object
           */

        }, {
          key: "createParentConnectChat",
          value: function createParentConnectChat(data) {
            var _this169 = this;

            console.log(data);
            return new Promise(function (resolve, reject) {
              _this169.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("user_no", data.user_no);
                  body = body.append("session_id", data.session_id);
                  body = body.append("school_id", data.school_id);
                  body = body.append("lang_code", data.lang_code);

                  if (data.chat_msg) {
                    Object.keys(data.chat_msg).forEach(function (key) {
                      body = body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                    });
                  }

                  Object.keys(data.message).map(function (key) {
                    if (data.message[key] != '') {
                      body = body.append('message[' + key + ']', data.message[key]);
                    }
                  });

                  _this169.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'createParentConnectChat', body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        data: response,
                        message: response.msg
                      });
                    } else if (response.success) {
                      resolve({
                        session: true,
                        url: response.msg
                      });
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this169.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this169.lang.networkNotWorking);
                }
              });
            });
          }
          /**
           * Close parent connect chat
           * @param data user_no, chat_list_id, session_id
           */

        }, {
          key: "closeParentConnectChat",
          value: function closeParentConnectChat(data) {
            var _this170 = this;

            return new Promise(function (resolve, reject) {
              _this170.postRequest(data, 'closeParentConnectChat').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this170.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this170.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Reopen parent connect chat
           * @param data user_no, chat_list_id, session_id
           */

        }, {
          key: "reopenParentConnectChat",
          value: function reopenParentConnectChat(data) {
            var _this171 = this;

            return new Promise(function (resolve, reject) {
              _this171.postRequest(data, 'reopenParentConnectChat').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      message: response.msg
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this171.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this171.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Get parent connect chat messages
           * @param data user_no, school_id, user_type, session_id, chat_id
           */

        }, {
          key: "getParentConnectChatMessages",
          value: function getParentConnectChatMessages(data) {
            var _this172 = this;

            return new Promise(function (resolve, reject) {
              _this172.postRequest(data, 'getParentConnectChatMessages').then(function (response) {
                if (response) {
                  if (!response.session) {
                    resolve({
                      session: false,
                      message: response.msg
                    });
                  } else if (response.success) {
                    resolve({
                      session: true,
                      chat: response.chat
                    });
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this172.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this172.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Send parent connect chat message
           * @param data session_id, user_type, chat_msg object
           */

        }, {
          key: "sendParentConnectChatMsg",
          value: function sendParentConnectChatMsg(data) {
            var _this173 = this;

            // console.log(data);
            return new Promise(function (resolve, reject) {
              _this173.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("user_type", data.user_type);
                  body = body.append("lang_code", data.lang_code);
                  Object.keys(data.chat_msg).forEach(function (key) {
                    body = body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                  }); // Object.keys(data.chat_msg).map((key) => {
                  //   if (data.chat_msg[key] != '') {
                  //     body= body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                  //   }
                  // })
                  // console.log('body',body);

                  _this173.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'sendParentConnectChatMessage', body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (!response.session) {
                      resolve({
                        session: false,
                        message: response.msg
                      });
                    } else if (response.success) {
                      if (response.attachment_url) {
                        resolve({
                          session: true,
                          message: response.msg,
                          msg_id: response.msg_id,
                          attachment_url: response.attachment_url
                        });
                      } else {
                        resolve({
                          session: true,
                          message: response.msg,
                          msg_id: response.msg_id
                        });
                      }
                    } else {
                      reject(response.msg);
                    }
                  }, function (error) {
                    console.log(error);

                    if (error.message != undefined && error.message != '' && error.message != null) {
                      reject(error.message);
                    } else {
                      reject(_this173.lang.usnexpectedError);
                    }
                  });
                } else {
                  reject(_this173.lang.networkNotWorking);
                }
              });
            });
          }
          /**
           * Send the contact form
           * @param data
           */

        }, {
          key: "sendContact",
          value: function sendContact(data) {
            var _this174 = this;

            return new Promise(function (resolve, reject) {
              _this174.postRequest(data, 'sendcontact').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(true);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this174.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this174.lang.usnexpectedError);
                }
              });
            });
          }
          /**
          * Absence delete note
          * @param data user_no, session_id
          * @param note_id Note id which will be deleted
          */

        }, {
          key: "deleteStudentNote",
          value: function deleteStudentNote(data, note_id) {
            var _this175 = this;

            return new Promise(function (resolve, reject) {
              _this175.postRequest(data, 'deleteStudentNote/' + note_id).then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve(true);
                  } else {
                    reject(response.msg);
                  }
                } else {
                  reject(_this175.lang.networkNotWorking);
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this175.lang.usnexpectedError);
                }
              });
            });
          }
          /**
           * Function to sync offline attendance
           */

        }, {
          key: "syncOffileData",
          value: function syncOffileData() {
            var _this176 = this;

            if (!this.syncInterval) {
              this.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  if (localStorage.getItem("attendance")) {
                    var attendances = JSON.parse(localStorage.getItem("attendance"));
                    var promises = [];
                    attendances.forEach(function (attendance) {
                      promises.push(_this176.markOfflineAttendance(attendance));
                    });
                    Promise.all(promises).then(function (res) {
                      _this176.showToast('Attendance Synced successfully');

                      localStorage.removeItem("attendance");
                    });
                  }

                  if (localStorage.getItem("delayattendance")) {
                    var delayAttendances = JSON.parse(localStorage.getItem("delayattendance"));
                    var delayPromises = [];
                    delayAttendances.forEach(function (delayAttendance) {
                      delayPromises.push(_this176.markOfflineDelayAttendance(delayAttendance.attendance, delayAttendance.submittedByUser));
                    });
                    Promise.all(delayPromises).then(function (res) {
                      _this176.showToast('Delay Attendance Synced successfully');

                      localStorage.removeItem("delayattendance");
                    });
                  }
                }
              });
              this.syncInterval = setInterval(function () {
                _this176.getNetworkInformation().then(function (isNetworkAvailable) {
                  if (isNetworkAvailable) {
                    if (localStorage.getItem("attendance")) {
                      var attendances = JSON.parse(localStorage.getItem("attendance"));
                      var promises = [];
                      attendances.forEach(function (attendance) {
                        promises.push(_this176.markOfflineAttendance(attendance));
                      });
                      Promise.all(promises).then(function (res) {
                        // console.log(res);
                        _this176.showToast('Attendance Synced successfully');

                        localStorage.removeItem("attendance");
                      });
                    }
                  }

                  if (localStorage.getItem("delayattendance")) {
                    var delayAttendances = JSON.parse(localStorage.getItem("delayattendance"));
                    var delayPromises = [];
                    delayAttendances.forEach(function (delayAttendance) {
                      delayPromises.push(_this176.markOfflineDelayAttendance(delayAttendance.attendance, delayAttendance.submittedByUser));
                    });
                    Promise.all(delayPromises).then(function (res) {
                      _this176.showToast('Delay Attendance Synced successfully');

                      localStorage.removeItem("delayattendance");
                    });
                  }
                });
              }, 20000);
            }
          }
          /**
           * Offline Attendance mark post function
           * @param data user_no, session_id, cid, date, school_id, sheet
           */

        }, {
          key: "markOfflineAttendance",
          value: function markOfflineAttendance(data) {
            var _this177 = this;

            return new Promise(function (resolve, reject) {
              _this177.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("cid", data.cid);
                  body = body.append("date", data.date);
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("lang_code", data.lang_code);
                  var index = 0;
                  Object.keys(data.removal_sheet).map(function (key) {
                    body = body.append('removal_sheet[' + index + '][sid]', data.removal_sheet[key].sid);
                    body = body.append('removal_sheet[' + index + '][sem]', data.removal_sheet[key].sem);
                    index++;
                  });
                  Object.keys(data.sheet).map(function (key) {
                    Object.keys(data.sheet[key]).map(function (sid) {
                      body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                    });
                  });

                  _this177.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveOfflineAttendance/' + data.school_id, body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (response.success) {
                      resolve(true);
                    } else {
                      // this.errorALertMessage(response.msg);
                      resolve(false);
                    }
                  }, function (error) {
                    console.log(error);
                  });
                } else {
                  reject(_this177.lang.networkNotWorking);
                }
              });
            });
          }
          /**
           * Offline Delay attendance mark post function
           * @param data user_no, session_id, cid, date, school_id, sheet
           * @param submittedByUser submitted by which user 1 - admin, 2- moderator
           */

        }, {
          key: "markOfflineDelayAttendance",
          value: function markOfflineDelayAttendance(data, submittedByUser) {
            var _this178 = this;

            return new Promise(function (resolve, reject) {
              _this178.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  header.append('Content-Type', 'application/x-www-form-urlencoded');
                  var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                  body = body.append("cid", data.cid);
                  body = body.append("date", data.date);
                  body = body.append("session_id", data.session_id);
                  body = body.append("user_no", data.user_no);
                  body = body.append("lang_code", data.lang_code);
                  Object.keys(data.sheet).map(function (key) {
                    Object.keys(data.sheet[key]).map(function (sid) {
                      body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                    });
                  });

                  _this178.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + 'saveOfflineDelayAttendance/' + data.school_id + '/' + submittedByUser, body, {
                    headers: header
                  }).subscribe(function (res) {
                    var response = res;

                    if (response.success == true) {
                      resolve(true);
                    } else {
                      // this.errorALertMessage(response.msg);
                      resolve(false);
                    }
                  }, function (error) {
                    console.log(error);
                    resolve(false);
                  });
                } else {
                  reject(_this178.lang.networkNotWorking);
                }
              });
            });
          }
        }, {
          key: "getChildrens",
          value: function getChildrens(data) {
            var _this179 = this;

            return new Promise(function (resolve, reject) {
              _this179.postRequest(data, 'getChildrens').then(function (response) {
                if (response) {
                  if (response.success) {
                    resolve({
                      data: response.child,
                      permit: response.can_view_absent
                    });
                  } else {
                    reject(response.msg);
                  }
                }
              })["catch"](function (error) {
                console.log(error);

                if (error.message != undefined && error.message != '' && error.message != null) {
                  reject(error.message);
                } else {
                  reject(_this179.lang.usnexpectedError);
                }
              });
            });
          }
          /** Post request function.
           * @param {Object} data - contains the properties to post to API
           * @param {String} slug - contains the API method to call
           * @returns Success or error
           */

        }, {
          key: "postRequest",
          value: function postRequest(data, slug) {
            var _this180 = this;

            return new Promise(function (resolve, reject) {
              _this180.getNetworkInformation().then(function (isNetworkAvailable) {
                if (isNetworkAvailable) {
                  var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                  data.lang_code = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lang_code;

                  var body = _this180.makeObjectToUrlParams(data);

                  header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

                  _this180.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + slug, body, {
                    headers: header
                  }).subscribe(function (response) {
                    if (response) {
                      if (response['_body'] != '') {
                        var resObj = response;
                        resolve(resObj);
                      } else {
                        reject("Unable to find any record");
                      }
                    }
                  }, function (error) {
                    reject(error);
                  });
                } else {
                  resolve(false);
                }
              });
            });
          }
          /** Function to convert object into param string
           * @param {Object} data - contains the properties to post to API
           * @returns Param string
          */

        }, {
          key: "makeObjectToUrlParams",
          value: function makeObjectToUrlParams(data) {
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            Object.keys(data).forEach(function (key) {
              body = body.append(key, data[key]);
            });
            return body;
          }
          /**
           * get date in yyyy-mm-dd
           * @param date date object
           */

        }, {
          key: "getFormatedDate",
          value: function getFormatedDate(date) {
            var m = date.getMonth() + 1;
            return date.getFullYear() + '-' + m + '-' + date.getDate();
          }
          /**
           * Check whether network is available or not
           */

        }, {
          key: "getNetworkInformation",
          value: function getNetworkInformation() {
            var _this181 = this;

            return new Promise(function (resolve) {
              if (_this181.platform.is('cordova')) {
                if (_this181.network.type == _this181.network.Connection.UNKNOWN || _this181.network.type == _this181.network.Connection.NONE) {
                  resolve(false);
                } else {
                  resolve(true);
                }
              } else {
                resolve(true);
              }
            });
          }
          /**
           * Download image
           * @param url image url
           */

        }, {
          key: "downloadImage",
          value: function downloadImage(url) {
            var _this182 = this;

            return new Promise(function (resolve, reject) {
              var n = new Date().valueOf();

              var fileTransfer = _this182.transfer.create();

              if (_this182.platform.is('ios')) {
                var targetPath = _this182.file.dataDirectory + "Download/" + n + ".png"; //this.cordova.file.dataDirectory

                fileTransfer.download(encodeURI(url), targetPath, true).then(function (entry) {
                  resolve(true);
                  console.log('download complete: ' + entry.toURL()); // env.isDownloadPopupVisible = true;
                }, function (error) {
                  // env.canDownloadFile = false;
                  reject(_this182.lang.usnexpectedError);
                  console.log("download error source " + error.source);
                  console.log("download error target " + error.target);
                  console.log("upload error code" + error.code);
                });
              } else {
                var _targetPath = _this182.file.externalRootDirectory + "Download/" + n + ".png"; //this.cordova.file.dataDirectory


                fileTransfer.download(url, _targetPath, true).then(function (entry) {
                  resolve(true);
                  console.log('download complete: ' + entry.toURL()); // env.isDownloadPopupVisible = true;
                }, function (error) {
                  // env.canDownloadFile = false;
                  reject(_this182.lang.usnexpectedError);
                  console.log("download error source " + error.source);
                  console.log("download error target " + error.target);
                  console.log("upload error code" + error.code);
                });
              }
            });
          }
        }, {
          key: "checkStoragePermission",
          value: function checkStoragePermission() {
            var _this183 = this;

            return new Promise(function (resolve) {
              // this.photoLibrary.requestAuthorization({read:true,write:true}).then(()=>{
              //   resolve(true);
              // }).catch(()=>{
              //   resolve(false);
              // })
              _this183.diagnostic.requestExternalStorageAuthorization().then(function () {
                //User gave permission 
                resolve(true);
              })["catch"](function (error) {
                resolve(false); //Handle error
              });
            });
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"]
        }, {
          type: _student_data_student_data_service__WEBPACK_IMPORTED_MODULE_19__["StudentDataService"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"]
        }, {
          type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__["Diagnostic"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"], _student_data_student_data_service__WEBPACK_IMPORTED_MODULE_19__["StudentDataService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__["Diagnostic"]])], DataService);
      /***/
    },

    /***/
    "vPOg":
    /*!*******************************************************!*\
      !*** ./src/app/components/loader/loader.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function vPOg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loader.component.html */
      "xTTx");
      /* harmony import */


      var _loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loader.component.scss */
      "JzvJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ctorParameters = function () {
        return [];
      };

      LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loader',
        template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoaderComponent);
      /***/
    },

    /***/
    "vUv2":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-class/create-class.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function vUv2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-title text-right>{{'createClass.pagetitle' | translate}}\n      <ion-icon item-end name=\"close\" (click)=\"viewCtrl.dismiss(false)\" class=\"close\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding mode=\"md\">\n  <form #registerForm='ngForm'>\n    <ion-list style=\"margin: 10px;\">\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'createClass.class_code' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"classCode\" #classCode='ngModel' [(ngModel)]=\"class.code\"\n          pattern=\"[A-Za-z0-9]*$\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"classCode.invalid && (classCode.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"classCode.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n        <div *ngIf=\"classCode.errors.pattern\">\n          {{'validations.invalidclasscode' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'createClass.class_name' | translate}}</ion-label>\n        <ion-input type=\"text\" name=\"className\" #className='ngModel' [(ngModel)]=\"class.name\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"className.invalid && (className.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"className.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\" floating>{{'createClass.class_desc' | translate}}</ion-label>\n        <ion-textarea name=\"classDesc\" #classDesc='ngModel' [(ngModel)]=\"class.desc\" text-right required>\n        </ion-textarea>\n      </ion-item>\n      <div *ngIf=\"classDesc.invalid && (classDesc.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"classDesc.errors.required\">\n          {{'validations.required' | translate}}\n        </div>\n      </div>\n\n      <ion-item class=\"background-input\" align-items-center>\n        <ion-label color=\"dark\">{{'createClass.seminar' | translate}}</ion-label>\n        <ion-select name=\"seminar\" #seminar='ngModel' [(ngModel)]=\"class.semno\" interface=\"popover\">\n          <ion-select-option *ngFor=\"let seminar of getSeminars();let i = index;\" [value]=\"(i+1)\">{{i+1}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-row padding>\n        <ion-button  expand=\"full\" class=\"btn-primary\" shape=\"round\" color=\"primary\" [disabled]=\"registerForm.invalid\"\n          (click)=\"registerClass()\">{{'createClass.reg_btn' | translate}}</ion-button>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guard/auth.guard */
      "cT6d");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "yIOV")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-student-register-student-module */
          "register-student-register-student-module").then(__webpack_require__.bind(null,
          /*! ./register-student/register-student.module */
          "CmRx")).then(function (m) {
            return m.RegisterStudentPageModule;
          });
        }
      }, {
        path: 'register-teacher',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-teacher-register-teacher-module */
          "register-teacher-register-teacher-module").then(__webpack_require__.bind(null,
          /*! ./register-teacher/register-teacher.module */
          "Rl8z")).then(function (m) {
            return m.RegisterTeacherPageModule;
          });
        }
      }, {
        path: 'school-registration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | school-registration-school-registration-module */
          "school-registration-school-registration-module").then(__webpack_require__.bind(null,
          /*! ./school-registration/school-registration.module */
          "v2GW")).then(function (m) {
            return m.SchoolRegistrationPageModule;
          });
        }
      }, {
        path: 'about-us',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-us-about-us-module */
          "about-us-about-us-module").then(__webpack_require__.bind(null,
          /*! ./about-us/about-us.module */
          "00wH")).then(function (m) {
            return m.AboutUsPageModule;
          });
        }
      }, {
        path: 'contact-us',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | contact-us-contact-us-module */
          "contact-us-contact-us-module").then(__webpack_require__.bind(null,
          /*! ./contact-us/contact-us.module */
          "lhKH")).then(function (m) {
            return m.ContactUsPageModule;
          });
        }
      }, {
        path: 'news',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | news-news-module */
          "news-news-module").then(__webpack_require__.bind(null,
          /*! ./news/news.module */
          "YXEz")).then(function (m) {
            return m.NewsPageModule;
          });
        }
      }, {
        path: 'tabs/news',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | news-news-module */
          "news-news-module").then(__webpack_require__.bind(null,
          /*! ./news/news.module */
          "YXEz")).then(function (m) {
            return m.NewsPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'classlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | classlist-classlist-module */
          "classlist-classlist-module").then(__webpack_require__.bind(null,
          /*! ./classlist/classlist.module */
          "GgPW")).then(function (m) {
            return m.ClasslistPageModule;
          });
        }
      }, {
        path: 'tabs/classlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | classlist-classlist-module */
          "classlist-classlist-module").then(__webpack_require__.bind(null,
          /*! ./classlist/classlist.module */
          "GgPW")).then(function (m) {
            return m.ClasslistPageModule;
          });
        }
      }, {
        path: 'delaylist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | delaylist-delaylist-module */
          "delaylist-delaylist-module").then(__webpack_require__.bind(null,
          /*! ./delaylist/delaylist.module */
          "dVcN")).then(function (m) {
            return m.DelaylistPageModule;
          });
        }
      }, {
        path: 'tabs/delaylist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | delaylist-delaylist-module */
          "delaylist-delaylist-module").then(__webpack_require__.bind(null,
          /*! ./delaylist/delaylist.module */
          "dVcN")).then(function (m) {
            return m.DelaylistPageModule;
          });
        }
      }, {
        path: 'messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | messages-messages-module */
          "messages-messages-module").then(__webpack_require__.bind(null,
          /*! ./messages/messages.module */
          "TdLt")).then(function (m) {
            return m.MessagesPageModule;
          });
        }
      }, {
        path: 'tabs/messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | messages-messages-module */
          "messages-messages-module").then(__webpack_require__.bind(null,
          /*! ./messages/messages.module */
          "TdLt")).then(function (m) {
            return m.MessagesPageModule;
          });
        }
      }, {
        path: 'list-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-student-list-student-module */
          "list-student-list-student-module").then(__webpack_require__.bind(null,
          /*! ./list-student/list-student.module */
          "JkIs")).then(function (m) {
            return m.ListStudentPageModule;
          });
        }
      }, {
        path: 'student-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-detail-student-detail-module */
          "student-detail-student-detail-module").then(__webpack_require__.bind(null,
          /*! ./student-detail/student-detail.module */
          "Kulp")).then(function (m) {
            return m.StudentDetailPageModule;
          });
        }
      }, {
        path: 'create-class',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./create-class/create-class.module */
          "ZMI9")).then(function (m) {
            return m.CreateClassPageModule;
          });
        }
      }, {
        path: 'sendmessage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sendmessage-sendmessage-module */
          "sendmessage-sendmessage-module").then(__webpack_require__.bind(null,
          /*! ./sendmessage/sendmessage.module */
          "8Jp3")).then(function (m) {
            return m.SendmessagePageModule;
          });
        }
      }, {
        path: 'tabs/sendmessage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sendmessage-sendmessage-module */
          "sendmessage-sendmessage-module").then(__webpack_require__.bind(null,
          /*! ./sendmessage/sendmessage.module */
          "8Jp3")).then(function (m) {
            return m.SendmessagePageModule;
          });
        }
      }, {
        path: 'parentconnect',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parentconnect-parentconnect-module */
          "parentconnect-parentconnect-module").then(__webpack_require__.bind(null,
          /*! ./parentconnect/parentconnect.module */
          "wx9S")).then(function (m) {
            return m.ParentconnectPageModule;
          });
        }
      }, {
        path: 'tabs/parentconnect',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parentconnect-parentconnect-module */
          "parentconnect-parentconnect-module").then(__webpack_require__.bind(null,
          /*! ./parentconnect/parentconnect.module */
          "wx9S")).then(function (m) {
            return m.ParentconnectPageModule;
          });
        }
      }, {
        path: 'connect-new-message',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./connect-new-message/connect-new-message.module */
          "SSFD")).then(function (m) {
            return m.ConnectNewMessagePageModule;
          });
        }
      }, {
        path: 'connect-chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | connect-chat-connect-chat-module */
          "connect-chat-connect-chat-module").then(__webpack_require__.bind(null,
          /*! ./connect-chat/connect-chat.module */
          "J7Fa")).then(function (m) {
            return m.ConnectChatPageModule;
          });
        }
      }, {
        path: 'elearning-schools',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | elearning-schools-elearning-schools-module */
          "elearning-schools-elearning-schools-module").then(__webpack_require__.bind(null,
          /*! ./elearning-schools/elearning-schools.module */
          "48fY")).then(function (m) {
            return m.ElearningSchoolsPageModule;
          });
        }
      }, {
        path: 'tabs/elearning-schools',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | elearning-schools-elearning-schools-module */
          "elearning-schools-elearning-schools-module").then(__webpack_require__.bind(null,
          /*! ./elearning-schools/elearning-schools.module */
          "48fY")).then(function (m) {
            return m.ElearningSchoolsPageModule;
          });
        }
      }, {
        path: 'elearning-school-video',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | elearning-school-video-elearning-school-video-module */
          "elearning-school-video-elearning-school-video-module").then(__webpack_require__.bind(null,
          /*! ./elearning-school-video/elearning-school-video.module */
          "dKNw")).then(function (m) {
            return m.ElearningSchoolVideoPageModule;
          });
        }
      }, {
        path: 'playvideo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | playvideo-playvideo-module */
          "playvideo-playvideo-module").then(__webpack_require__.bind(null,
          /*! ./playvideo/playvideo.module */
          "dowu")).then(function (m) {
            return m.PlayvideoPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "7wo0")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'children',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | children-children-module */
          "children-children-module").then(__webpack_require__.bind(null,
          /*! ./children/children.module */
          "APEF")).then(function (m) {
            return m.ChildrenPageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'tabs/children',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | children-children-module */
          "children-children-module").then(__webpack_require__.bind(null,
          /*! ./children/children.module */
          "APEF")).then(function (m) {
            return m.ChildrenPageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'private-message',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | private-message-private-message-module */
          "private-message-private-message-module").then(__webpack_require__.bind(null,
          /*! ./private-message/private-message.module */
          "fO8F")).then(function (m) {
            return m.PrivateMessagePageModule;
          });
        }
      }, {
        path: 'tabs/private-message',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | private-message-private-message-module */
          "private-message-private-message-module").then(__webpack_require__.bind(null,
          /*! ./private-message/private-message.module */
          "fO8F")).then(function (m) {
            return m.PrivateMessagePageModule;
          });
        }
      }, {
        path: 'students',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | students-students-module */
          "students-students-module").then(__webpack_require__.bind(null,
          /*! ./students/students.module */
          "qqi4")).then(function (m) {
            return m.StudentsPageModule;
          });
        }
      }, {
        path: 'post-news',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | post-news-post-news-module */
          "post-news-post-news-module").then(__webpack_require__.bind(null,
          /*! ./post-news/post-news.module */
          "+eoj")).then(function (m) {
            return m.PostNewsPageModule;
          });
        }
      }, {
        path: 'parent-register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parent-register-parent-register-module */
          "parent-register-parent-register-module").then(__webpack_require__.bind(null,
          /*! ./parent-register/parent-register.module */
          "E60M")).then(function (m) {
            return m.ParentRegisterPageModule;
          });
        }
      }, {
        path: 'edit-calss',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-modal-edit-calss-edit-calss-module */
          "common-modal-edit-calss-edit-calss-module").then(__webpack_require__.bind(null,
          /*! ./common-modal/edit-calss/edit-calss.module */
          "Hf6G")).then(function (m) {
            return m.EditCalssPageModule;
          });
        }
      }, {
        path: 'requested-parent',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | requested-parent-requested-parent-module */
          "requested-parent-requested-parent-module").then(__webpack_require__.bind(null,
          /*! ./requested-parent/requested-parent.module */
          "XBf2")).then(function (m) {
            return m.RequestedParentPageModule;
          });
        }
      }, {
        path: 'seminar-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | seminar-list-seminar-list-module */
          "seminar-list-seminar-list-module").then(__webpack_require__.bind(null,
          /*! ./seminar-list/seminar-list.module */
          "zk2D")).then(function (m) {
            return m.SeminarListPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-forgot-password-module */
          "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./forgot-password/forgot-password.module */
          "JgOp")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'search-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-student-search-student-module */
          "search-student-search-student-module").then(__webpack_require__.bind(null,
          /*! ./search-student/search-student.module */
          "zmfO")).then(function (m) {
            return m.SearchStudentPageModule;
          });
        }
      }, {
        path: 'student-notes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-notes-student-notes-module */
          "student-notes-student-notes-module").then(__webpack_require__.bind(null,
          /*! ./student-notes/student-notes.module */
          "E6Hu")).then(function (m) {
            return m.StudentNotesPageModule;
          });
        }
      }, {
        path: 'tabs/student-notes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-notes-student-notes-module */
          "student-notes-student-notes-module").then(__webpack_require__.bind(null,
          /*! ./student-notes/student-notes.module */
          "E6Hu")).then(function (m) {
            return m.StudentNotesPageModule;
          });
        }
      }, {
        path: 'add-notes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-notes-add-notes-module */
          "add-notes-add-notes-module").then(__webpack_require__.bind(null,
          /*! ./add-notes/add-notes.module */
          "tNxg")).then(function (m) {
            return m.AddNotesPageModule;
          });
        }
      }, {
        path: 'view-class-notes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-modal-view-class-notes-view-class-notes-module */
          "common-modal-view-class-notes-view-class-notes-module").then(__webpack_require__.bind(null,
          /*! ./common-modal/view-class-notes/view-class-notes.module */
          "Hied")).then(function (m) {
            return m.ViewClassNotesPageModule;
          });
        }
      }, {
        path: 'manage-teacher',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | manage-teacher-manage-teacher-module */
          "manage-teacher-manage-teacher-module").then(__webpack_require__.bind(null,
          /*! ./manage-teacher/manage-teacher.module */
          "qa+G")).then(function (m) {
            return m.ManageTeacherPageModule;
          });
        }
      }, {
        path: 'edit-teacher-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-teacher-profile-edit-teacher-profile-module */
          "edit-teacher-profile-edit-teacher-profile-module").then(__webpack_require__.bind(null,
          /*! ./edit-teacher-profile/edit-teacher-profile.module */
          "a/Pt")).then(function (m) {
            return m.EditTeacherProfilePageModule;
          });
        }
      }, {
        path: 'follow-bulletins',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | follow-bulletins-follow-bulletins-module */
          "follow-bulletins-follow-bulletins-module").then(__webpack_require__.bind(null,
          /*! ./follow-bulletins/follow-bulletins.module */
          "Wgra")).then(function (m) {
            return m.FollowBulletinsPageModule;
          });
        }
      }, {
        path: 'bulletins',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bulletins-bulletins-module */
          "bulletins-bulletins-module").then(__webpack_require__.bind(null,
          /*! ./bulletins/bulletins.module */
          "O/+U")).then(function (m) {
            return m.BulletinsPageModule;
          });
        }
      }, {
        path: 'manage-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | manage-student-manage-student-module */
          "manage-student-manage-student-module").then(__webpack_require__.bind(null,
          /*! ./manage-student/manage-student.module */
          "LEmS")).then(function (m) {
            return m.ManageStudentPageModule;
          });
        }
      }, {
        path: 'edit-student-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-student-profile-edit-student-profile-module */
          "edit-student-profile-edit-student-profile-module").then(__webpack_require__.bind(null,
          /*! ./edit-student-profile/edit-student-profile.module */
          "qevg")).then(function (m) {
            return m.EditStudentProfilePageModule;
          });
        }
      }, {
        path: 'available-plan',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | available-plan-available-plan-module */
          "available-plan-available-plan-module").then(__webpack_require__.bind(null,
          /*! ./available-plan/available-plan.module */
          "syir")).then(function (m) {
            return m.AvailablePlanPageModule;
          });
        }
      }, {
        path: 'select-bulletins-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-bulletins-user-select-bulletins-user-module */
          "select-bulletins-user-select-bulletins-user-module").then(__webpack_require__.bind(null,
          /*! ./select-bulletins-user/select-bulletins-user.module */
          "gpDj")).then(function (m) {
            return m.SelectBulletinsUserPageModule;
          });
        }
      }, {
        path: 'share-bulletins',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | share-bulletins-share-bulletins-module */
          "share-bulletins-share-bulletins-module").then(__webpack_require__.bind(null,
          /*! ./share-bulletins/share-bulletins.module */
          "PP/t")).then(function (m) {
            return m.ShareBulletinsPageModule;
          });
        }
      }, {
        path: 'view-notes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | view-notes-view-notes-module */
          [__webpack_require__.e("default~note-calendar-note-calendar-module~view-notes-view-notes-module"), __webpack_require__.e("view-notes-view-notes-module")]).then(__webpack_require__.bind(null,
          /*! ./view-notes/view-notes.module */
          "Lu3m")).then(function (m) {
            return m.ViewNotesPageModule;
          });
        }
      }, {
        path: 'view-bulletin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | view-bulletin-view-bulletin-module */
          "view-bulletin-view-bulletin-module").then(__webpack_require__.bind(null,
          /*! ./view-bulletin/view-bulletin.module */
          "jV4k")).then(function (m) {
            return m.ViewBulletinPageModule;
          });
        }
      }, {
        path: 'select-message-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | common-modal-select-message-user-select-message-user-module */
          "common-modal-select-message-user-select-message-user-module").then(__webpack_require__.bind(null,
          /*! ./common-modal/select-message-user/select-message-user.module */
          "QllI")).then(function (m) {
            return m.SelectMessageUserPageModule;
          });
        }
      }, {
        path: 'warning-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | warning-report-warning-report-module */
          "warning-report-warning-report-module").then(__webpack_require__.bind(null,
          /*! ./warning-report/warning-report.module */
          "jsql")).then(function (m) {
            return m.WarningReportPageModule;
          });
        }
      }, {
        path: 'follow-up-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | follow-up-student-follow-up-student-module */
          "follow-up-student-follow-up-student-module").then(__webpack_require__.bind(null,
          /*! ./follow-up-student/follow-up-student.module */
          "7Cvm")).then(function (m) {
            return m.FollowUpStudentPageModule;
          });
        }
      }, {
        path: 'add-class',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-class-add-class-module */
          "add-class-add-class-module").then(__webpack_require__.bind(null,
          /*! ./add-class/add-class.module */
          "gwAL")).then(function (m) {
            return m.AddClassPageModule;
          });
        }
      }, {
        path: 'followup-student-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | followup-student-list-followup-student-list-module */
          "followup-student-list-followup-student-list-module").then(__webpack_require__.bind(null,
          /*! ./followup-student-list/followup-student-list.module */
          "CXad")).then(function (m) {
            return m.FollowupStudentListPageModule;
          });
        }
      }, {
        path: 'student-report-classes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-report-classes-student-report-classes-module */
          "student-report-classes-student-report-classes-module").then(__webpack_require__.bind(null,
          /*! ./student-report-classes/student-report-classes.module */
          "GZxE")).then(function (m) {
            return m.StudentReportClassesPageModule;
          });
        }
      }, {
        path: 'student-report-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-report-list-student-report-list-module */
          "student-report-list-student-report-list-module").then(__webpack_require__.bind(null,
          /*! ./student-report-list/student-report-list.module */
          "031B")).then(function (m) {
            return m.StudentReportListPageModule;
          });
        }
      }, {
        path: 'student-report-manage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-report-manage-student-report-manage-module */
          "student-report-manage-student-report-manage-module").then(__webpack_require__.bind(null,
          /*! ./student-report-manage/student-report-manage.module */
          "pTSB")).then(function (m) {
            return m.StudentReportManagePageModule;
          });
        }
      }, {
        path: 'followup-add-fields',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | followup-add-fields-followup-add-fields-module */
          "followup-add-fields-followup-add-fields-module").then(__webpack_require__.bind(null,
          /*! ./followup-add-fields/followup-add-fields.module */
          "bpOT")).then(function (m) {
            return m.FollowupAddFieldsPageModule;
          });
        }
      }, {
        path: 'add-teacher',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-teacher-add-teacher-module */
          "add-teacher-add-teacher-module").then(__webpack_require__.bind(null,
          /*! ./add-teacher/add-teacher.module */
          "veIr")).then(function (m) {
            return m.AddTeacherPageModule;
          });
        }
      }, {
        path: 'add-parent',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-parent-add-parent-module */
          "add-parent-add-parent-module").then(__webpack_require__.bind(null,
          /*! ./add-parent/add-parent.module */
          "5zoF")).then(function (m) {
            return m.AddParentPageModule;
          });
        }
      }, {
        path: 'note-calendar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | note-calendar-note-calendar-module */
          "default~note-calendar-note-calendar-module~view-notes-view-notes-module").then(__webpack_require__.bind(null,
          /*! ./note-calendar/note-calendar.module */
          "tXSK")).then(function (m) {
            return m.NoteCalendarPageModule;
          });
        }
      }, {
        path: 'users-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-list-users-list-module */
          "users-list-users-list-module").then(__webpack_require__.bind(null,
          /*! ./users-list/users-list.module */
          "38c6")).then(function (m) {
            return m.UsersListPageModule;
          });
        }
      }, {
        path: 'add-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-user-add-user-module */
          "add-user-add-user-module").then(__webpack_require__.bind(null,
          /*! ./add-user/add-user.module */
          "wxhZ")).then(function (m) {
            return m.AddUserPageModule;
          });
        }
      }, {
        path: 'edit-user-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-user-profile-edit-user-profile-module */
          "edit-user-profile-edit-user-profile-module").then(__webpack_require__.bind(null,
          /*! ./edit-user-profile/edit-user-profile.module */
          "YvNW")).then(function (m) {
            return m.EditUserProfilePageModule;
          });
        }
      }, {
        path: 'tasks-calendar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tasks-calendar-tasks-calendar-module */
          "tasks-calendar-tasks-calendar-module").then(__webpack_require__.bind(null,
          /*! ./tasks-calendar/tasks-calendar.module */
          "blCk")).then(function (m) {
            return m.TasksCalendarPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vrpw":
    /*!*****************************************************!*\
      !*** ./src/app/create-class/create-class.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function vrpw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-create-class:host .close {\n  float: left;\n}\napp-create-class:host .background-input {\n  --background: #ececec;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyZWF0ZS1jbGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0FBQVI7QUFFSTtFQUNHLHFCQUFBO0VBQ0MsZ0JBQUE7QUFBUiIsImZpbGUiOiJjcmVhdGUtY2xhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNyZWF0ZS1jbGFzczpob3N0IHtcclxuICAgIC5jbG9zZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5kLWlucHV0e1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICB9IFxyXG59Il19 */";
      /***/
    },

    /***/
    "wHzU":
    /*!*******************************************!*\
      !*** ./src/app/pipes/user-search.pipe.ts ***!
      \*******************************************/

    /*! exports provided: UserSearchPipe */

    /***/
    function wHzU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function () {
        return UserSearchPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserSearchPipe = /*#__PURE__*/function () {
        function UserSearchPipe() {
          _classCallCheck(this, UserSearchPipe);
        }

        _createClass(UserSearchPipe, [{
          key: "transform",
          value: function transform(trimmedUsers, userSearchValue) {
            if (!trimmedUsers || !userSearchValue) {
              return trimmedUsers;
            }

            return trimmedUsers.filter(function (pro) {
              return pro.first_name.toLocaleLowerCase().includes(userSearchValue.toLocaleLowerCase());
            });
          }
        }]);

        return UserSearchPipe;
      }();

      UserSearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userSearch'
      })], UserSearchPipe);
      /***/
    },

    /***/
    "xTTx":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xTTx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"body\">\n\t<!-- <div class='demo'>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t  <div class='circle'>\n\t    <div class='inner'></div>\n\t  </div>\n\t</div> -->\n\t\n\t<svg version=\"1.1\" id=\"L7\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t  <path fill=\"#fff\" d=\"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n\t  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z\">\n\t    <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"2s\" from=\"0 50 50\" to=\"360 50 50\" repeatCount=\"indefinite\" />\n\t  </path>\n\t  <path fill=\"#fff\" d=\"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n\t  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z\">\n\t    <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"1s\" from=\"0 50 50\" to=\"-360 50 50\" repeatCount=\"indefinite\" />\n\t  </path>\n\t  <path fill=\"#fff\" d=\"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n\t  L82,35.7z\">\n\t    <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"2s\" from=\"0 50 50\" to=\"360 50 50\" repeatCount=\"indefinite\" />\n\t  </path>\n\t</svg>\n</div>\n<!-- <a href='http://mattroelle.com'>mattroelle.com</a> -->\n\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list {\n  margin-right: 4vh;\n}\n\n.lang-row {\n  margin: 8px 0;\n}\n\n.select-language {\n  padding: unset !important;\n  margin: unset;\n}\n\n.select-language ion-select {\n  padding: 4px 0px 7px 29px !important;\n  --placeholder-color: #fff !important;\n  --placeholder-opacity: 1 !important;\n}\n\n.switch-account {\n  width: 104px;\n  /* padding: 2px; */\n  /* font-size: 12px; */\n  /* color: #5d5959; */\n  /* background: #f7f3f3; */\n  /* text-align: center; */\n  /* border: 1px solid green; */\n  /* border-radius: 8px; */\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.switch {\n  position: relative;\n  display: block;\n  vertical-align: top;\n  width: 100px;\n  height: 30px;\n  padding: 3px;\n  /* margin: 0 10px 10px 0; */\n  /* background: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px); */\n  /* background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px); */\n  border-radius: 18px;\n  /* box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05); */\n  cursor: pointer;\n}\n\n.switch-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n\n.switch-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  font-size: 10px;\n  text-transform: capitalize;\n  background: #eceeef;\n  border-radius: inherit;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n}\n\n.switch-label:before, .switch-label:after {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.5em;\n  line-height: 1;\n  transition: inherit;\n}\n\n.switch-label:before {\n  content: attr(data-off);\n  right: 11px;\n  color: #000000;\n  text-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n\n.switch-label:after {\n  content: attr(data-on);\n  left: 11px;\n  color: #FFFFFF;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n}\n\n.switch-input:checked ~ .switch-label {\n  background: #5adc60;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.switch-input:checked ~ .switch-label:before {\n  opacity: 0;\n}\n\n.switch-input:checked ~ .switch-label:after {\n  opacity: 1;\n}\n\n.switch-handle {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 28px;\n  height: 28px;\n  background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n  background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n  border-radius: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n.switch-handle:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -6px 0 0 -6px;\n  width: 12px;\n  height: 12px;\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n  border-radius: 6px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n\n.switch-input:checked ~ .switch-handle {\n  left: 74px;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n\n/* Transition\n    ========================== */\n\n.switch-label, .switch-handle {\n  transition: All 0.3s ease;\n  -webkit-transition: All 0.3s ease;\n  -moz-transition: All 0.3s ease;\n  -o-transition: All 0.3s ease;\n}\n\n.logouts {\n  margin-bottom: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFBO0FBQUQ7O0FBRUE7RUFDSyxhQUFBO0FBQ0w7O0FBRUE7RUFDSyx5QkFBQTtFQUNBLGFBQUE7QUFDTDs7QUFBSTtFQUNDLG9DQUFBO0VBQ0Qsb0NBQUE7RUFDQSxtQ0FBQTtBQUVKOztBQUNFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVJO0VBQ0Usa0JBQUE7RUFDRCxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1FQUFBO0VBQ0EsMkVBQUE7RUFDQSxtQkFBQTtFQUNBLHlFQUFBO0VBQ0EsZUFBQTtBQUNMOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFFTjs7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0ZBQUE7QUFHTjs7QUFESTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLG1CQUFBO0FBSU47O0FBRkk7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUFLTjs7QUFISTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFNTjs7QUFKSTtFQUNFLG1CQUFBO0VBQ0EsaUZBQUE7QUFPTjs7QUFMSTtFQUNFLFVBQUE7QUFRTjs7QUFOSTtFQUNFLFVBQUE7QUFTTjs7QUFQSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0Esb0VBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBVU47O0FBUkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQVdOOztBQVRJO0VBQ0UsVUFBQTtFQUNBLDJDQUFBO0FBWU47O0FBVkk7Z0NBQUE7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQWFOOztBQVhJO0VBQ0UsbUJBQUE7QUFjTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1saXN0e1xuXHRtYXJnaW4tcmlnaHQ6IDR2aDtcbn1cbi5sYW5nLXJvd3tcblx0ICAgIG1hcmdpbjogOHB4IDA7XG59XG5cbi5zZWxlY3QtbGFuZ3VhZ2V7XG5cdCAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIFx0bWFyZ2luOiB1bnNldDtcbiAgICBpb24tc2VsZWN0e1xuICAgIFx0cGFkZGluZzogNHB4IDBweCA3cHggMjlweCAhaW1wb3J0YW50O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG59XG4gIC5zd2l0Y2gtYWNjb3VudHtcbiAgICAgICAgICAgIFxuICAgIHdpZHRoOiAxMDRweDtcbiAgICAvKiBwYWRkaW5nOiAycHg7ICovXG4gICAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xuICAgIC8qIGNvbG9yOiAjNWQ1OTU5OyAqL1xuICAgIC8qIGJhY2tncm91bmQ6ICNmN2YzZjM7ICovXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDhweDsgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcblxuICB9XG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblx0ICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdCAgICB3aWR0aDogMTAwcHg7XG5cdCAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICBwYWRkaW5nOiAzcHg7XG5cdCAgICAvKiBtYXJnaW46IDAgMTBweCAxMHB4IDA7ICovXG5cdCAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlZWVlLCAjRkZGRkZGIDI1cHgpOyAqL1xuXHQgICAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlLCAjRkZGRkZGIDI1cHgpOyAqL1xuXHQgICAgYm9yZGVyLXJhZGl1czogMThweDtcblx0ICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB3aGl0ZSwgaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5zd2l0Y2gtaW5wdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGFiZWwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNlY2VlZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB9XG4gICAgLnN3aXRjaC1sYWJlbDpiZWZvcmUsIC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtLjVlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBpbmhlcml0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBpbmhlcml0O1xuICAgICAgLW8tdHJhbnNpdGlvbjogaW5oZXJpdDtcbiAgICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpO1xuICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgfVxuICAgIC5zd2l0Y2gtbGFiZWw6YWZ0ZXIge1xuICAgICAgY29udGVudDogYXR0cihkYXRhLW9uKTtcbiAgICAgIGxlZnQ6IDExcHg7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsIHtcbiAgIFx0ICBiYWNrZ3JvdW5kOiAjNWFkYzYwO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsOmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLWxhYmVsOmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5zd2l0Y2gtaGFuZGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNHB4O1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRkZGIDQwJSwgI2YwZjBmMCk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYgNDAlLCAjZjBmMGYwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIC5zd2l0Y2gtaGFuZGxlOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW46IC02cHggMCAwIC02cHg7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWVlZWUsICNGRkZGRkYpO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlLCAjRkZGRkZGKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgfVxuICAgIC5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtaGFuZGxlIHtcbiAgICAgIGxlZnQ6IDc0cHg7XG4gICAgICBib3gtc2hhZG93OiAtMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICAvKiBUcmFuc2l0aW9uXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLnN3aXRjaC1sYWJlbCwgLnN3aXRjaC1oYW5kbGUge1xuICAgICAgdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogQWxsIDAuM3MgZWFzZTtcbiAgICAgIC1vLXRyYW5zaXRpb246IEFsbCAwLjNzIGVhc2U7XG4gICAgfVxuICAgIC5sb2dvdXRze1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9Il19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zdC0":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect-new-message/connect-new-message.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zdC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-title>{{'parentconnect__newmsg.pagetitle' | translate}}\n      <ion-icon item-end name=\"close\" (click)=\"dismiss()\" class=\"close\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding mode=\"md\"> \n  <form #ticketForm='ngForm'>\n    <div class=\"subject\">\n      <ion-item>\n        <ion-input class=\"message\" placeholder=\"{{'parentconnect__newmsg.title' | translate}}\"\n          [(ngModel)]=\"message.title\" text-right name=\"title\" #title='ngModel' required maxlength=\"35\"></ion-input>\n      </ion-item>\n    </div>\n    <div class=\"subject\">\n      <ion-item>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"{{'parentconnect__newmsg.msg_body' | translate}}\"\n          [(ngModel)]=\"message.message\" text-right name=\"msg_body\" #msg_body='ngModel' required maxlength=\"140\">\n        </ion-textarea>\n      </ion-item>\n      <ion-button class=\"attachment\" icon-only  (click) = \"takePicture()\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"ticketImage != ''\">\n      <img [src]=\"ticketImage\" />\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-button  expand=\"full\" class=\"send-btn\" (click)=\"sendMessage()\">{{'parentconnect__newmsg.send' |\n    translate}}</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "zl9O":
    /*!*****************************************!*\
      !*** ./src/app/pipes/safe/safe.pipe.ts ***!
      \*****************************************/

    /*! exports provided: SafePipe */

    /***/
    function zl9O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * Generated class for the SafePipe pipe.
       *
       * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
       */


      var SafePipe = /*#__PURE__*/function () {
        /**
         * Takes a value and makes it lowercase.
         */
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], SafePipe);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
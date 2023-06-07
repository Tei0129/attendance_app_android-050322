(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-student-profile-edit-student-profile-module"], {
    /***/
    "dg8o":
    /*!*********************************************************************!*\
      !*** ./src/app/edit-student-profile/edit-student-profile.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function dg8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body_div {\n  margin: 2px 5px 10px 5px;\n}\n.body_div ion-item {\n  width: 100%;\n  padding: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtc3R1ZGVudC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHdCQUFBO0FBQ0w7QUFBSztFQUNDLFdBQUE7RUFDQSxhQUFBO0FBRU4iLCJmaWxlIjoiZWRpdC1zdHVkZW50LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlfZGl2e1xyXG5cdCAgICBtYXJnaW46IDJweCA1cHggMTBweCA1cHg7XHJcblx0ICAgIGlvbi1pdGVte1xyXG5cdCAgICBcdHdpZHRoOiAxMDAlO1xyXG4gICAgXHRcdHBhZGRpbmc6IDE4cHg7XHJcblx0ICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "j/wL":
    /*!*******************************************************************!*\
      !*** ./src/app/edit-student-profile/edit-student-profile.page.ts ***!
      \*******************************************************************/

    /*! exports provided: EditStudentProfilePage */

    /***/
    function jWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditStudentProfilePage", function () {
        return EditStudentProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_student_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-student-profile.page.html */
      "uj9r");
      /* harmony import */


      var _edit_student_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-student-profile.page.scss */
      "dg8o");
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


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/database/database.service */
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
      "tyNb");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../service/data/data.service */
      "v2nD"); //import { DataProvider } from '../../providers/data/data';
      //import { TabsPage } from '../tabs/tabs';
      //import { DatabaseProvider } from '../../providers/database/database';


      var EditStudentProfilePage = /*#__PURE__*/function () {
        function EditStudentProfilePage(popoverController, navCtrl, device, authProvider, platform, fcm, alertCtrl, translate, dataProvider, route, zone, router, dbProvider) {
          var _this = this;

          _classCallCheck(this, EditStudentProfilePage);

          this.popoverController = popoverController;
          this.navCtrl = navCtrl;
          this.device = device;
          this.authProvider = authProvider;
          this.platform = platform;
          this.fcm = fcm;
          this.alertCtrl = alertCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.route = route;
          this.zone = zone;
          this.router = router;
          this.dbProvider = dbProvider;
          this.student = {};
          this.classes = [];
          this.route.queryParams.subscribe(function (params) {
            _this.translate.get("alertmessages").subscribe(function (val) {
              _this.lang = val;
            });

            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state;
              _this.studentName = _this.navData.student.name;
              _this.student_id = _this.navData.student.student_id;
              console.log(_this.navData);

              if (localStorage.getItem("userloggedin")) {
                _this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                _this.currentUser = _this.userDetails.details.username;
                _this.currentUserEmail = _this.userDetails.details.email_id;
              }

              if (localStorage.getItem('earlyLogin')) {
                _this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
              }

              _this.getStudentProfile();
            }
          });
        }

        _createClass(EditStudentProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//	console.log(this.student,this.classes,this.studentSemester,this.studentName);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.popoverController.dismiss();
          }
        }, {
          key: "getStudentProfile",
          value: function getStudentProfile() {
            var _this2 = this;

            var data = {
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "cid": this.navData.course_id,
              "date": this.navData.dateSelected,
              "sid": this.navData.student.sid
            };
            this.dataProvider.getStudentDetails(data).then(function (response) {
              _this2.dataProvider.hideLoading();

              if (response.session) {
                console.log(response);
                _this2.student = response.data;

                _this2.getClasses();
              } else {
                _this2.dataProvider.errorALertMessage(response.message);
              }
            })["catch"](function (error) {
              console.log(error);

              _this2.dataProvider.hideLoading();

              _this2.dataProvider.errorALertMessage(error);
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this3 = this;

            var data = {
              "user_no": this.userDetails.details.user_no,
              "school_id": this.userDetails.details.school_id,
              "session_id": this.userDetails.session_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getCourses(data).then(function (response) {
              _this3.dataProvider.hideLoading();

              if (response.session) {
                _this3.classes = response.data;

                _this3.classes.forEach(function (res) {
                  if (res.name == _this3.student.course.name) {
                    _this3.studentSemester = res.cid;
                  }
                });
              }
            })["catch"](function (error) {
              _this3.dataProvider.hideLoading();

              _this3.dataProvider.errorALertMessage(error);
            });
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var _this4 = this;

            var inputElement = document.getElementById("input");
            var inputElementid = document.getElementById("inputid");
            var i = inputElement.value;
            var id = inputElementid.value;
            var select = document.getElementById("select");
            var s = select.value;
            var data = {
              student: this.student,
              studentName: i,
              studentSemester: s
            };
            var updateData = {
              sid: this.student.sid,
              cid: this.student.cid,
              student_name: i,
              student_id: id,
              class_id: s,
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              session_id: this.userDetails.session_id
            };
            console.log(updateData);
            this.dataProvider.updateStudentProfile(updateData, function (res) {
              // callback(res);
              var navigation = {
                state: {
                  isUpdated: true
                }
              };

              _this4.zone.run(function () {
                _this4.router.navigate(['manage-student'], navigation);
              }); // this.router.navigate(['manage-student']);


              console.log(res);
            }); //	console.log(data);
            //	this.popoverController.dismiss(data);
          }
        }, {
          key: "deleteStudent",
          value: function deleteStudent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.delete_student,
                        backdropDismiss: true,
                        mode: 'ios',
                        buttons: [{
                          text: this.lang["delete"],
                          handler: function handler() {
                            // this.deleteUserNote(note_id, index);
                            var deleteData = {
                              sid: _this5.student.sid,
                              cid: _this5.student.cid,
                              user_no: _this5.userDetails.details.user_no,
                              school_id: _this5.userDetails.details.school_id,
                              session_id: _this5.userDetails.session_id
                            };

                            _this5.dataProvider.deleteStudent(deleteData, function (res) {
                              // callback(res);
                              var navigation = {
                                state: {
                                  isUpdated: true
                                }
                              };

                              _this5.zone.run(function () {
                                _this5.router.navigate(['manage-student'], navigation);
                              });

                              console.log(res);
                            });
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
          key: "deleteClass",
          value: function deleteClass() {
            var _this6 = this;

            var data = {
              student: this.student,
              deleteClass: true
            };
            var deleteData = {
              sid: this.student.sid,
              cid: this.student.cid,
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              session_id: this.userDetails.session_id
            };
            this.dataProvider.deleteStudentClass(deleteData, function (res) {
              // callback(res);
              _this6.router.navigate(['manage-student']);

              console.log(res);
            });
          }
        }]);

        return EditStudentProfilePage;
      }();

      EditStudentProfilePage.ctorParameters = function () {
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
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]
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

      EditStudentProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-student-profile',
        template: _raw_loader_edit_student_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_student_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _service_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]])], EditStudentProfilePage);
      /***/
    },

    /***/
    "qevg":
    /*!*********************************************************************!*\
      !*** ./src/app/edit-student-profile/edit-student-profile.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EditStudentProfilePageModule */

    /***/
    function qevg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditStudentProfilePageModule", function () {
        return EditStudentProfilePageModule;
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


      var _edit_student_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-student-profile-routing.module */
      "tRjN");
      /* harmony import */


      var _edit_student_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-student-profile.page */
      "j/wL");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var EditStudentProfilePageModule = function EditStudentProfilePageModule() {
        _classCallCheck(this, EditStudentProfilePageModule);
      };

      EditStudentProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_student_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditStudentProfilePageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_edit_student_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditStudentProfilePage"]]
      })], EditStudentProfilePageModule);
      /***/
    },

    /***/
    "tRjN":
    /*!*****************************************************************************!*\
      !*** ./src/app/edit-student-profile/edit-student-profile-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: EditStudentProfilePageRoutingModule */

    /***/
    function tRjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditStudentProfilePageRoutingModule", function () {
        return EditStudentProfilePageRoutingModule;
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


      var _edit_student_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-student-profile.page */
      "j/wL");

      var routes = [{
        path: '',
        component: _edit_student_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditStudentProfilePage"]
      }];

      var EditStudentProfilePageRoutingModule = function EditStudentProfilePageRoutingModule() {
        _classCallCheck(this, EditStudentProfilePageRoutingModule);
      };

      EditStudentProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditStudentProfilePageRoutingModule);
      /***/
    },

    /***/
    "uj9r":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-student-profile/edit-student-profile.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uj9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'edit_student.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n\t<div class=\"body_div\">\n\t\t<ion-row class=\"input-row\">\n\t\t\t<ion-item class=\"item\">\n\t\t\t\t<ion-label>{{'edit_student.name' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{studentName}}\" value=\"{{studentName}}\" id=\"input\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"item\">\n\t\t\t\t<ion-label>{{'edit_student.id' | translate}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{student_id}}\" value=\"{{student_id}}\" id=\"inputid\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"item\">\n\t\t\t\t<ion-label>{{'edit_student.class' | translate}}</ion-label>\n\t\t\t\t<ion-select placeholder=\"{{student.course_name}}\" value=\"{{studentSemester}}\" id=\"select\" interface=\"popover\">\n\t\t\t\t\t<ion-select-option *ngFor=\"let c of classes\" value={{c.cid}}>{{c.name}}</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"btn-row\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"primary\" (click)=\"saveChanges()\">{{'edit_student.save' | translate}}</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-button  expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"danger\" (click)=\"deleteStudent()\">{{'edit_student.delete' | translate}}</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-student-profile-edit-student-profile-module-es5.js.map
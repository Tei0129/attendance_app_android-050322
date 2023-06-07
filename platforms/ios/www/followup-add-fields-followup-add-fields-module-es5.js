(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followup-add-fields-followup-add-fields-module"], {
    /***/
    "2Wtu":
    /*!***************************************************************************!*\
      !*** ./src/app/followup-add-fields/followup-add-fields-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: FollowupAddFieldsPageRoutingModule */

    /***/
    function Wtu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowupAddFieldsPageRoutingModule", function () {
        return FollowupAddFieldsPageRoutingModule;
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


      var _followup_add_fields_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./followup-add-fields.page */
      "CdzU");

      var routes = [{
        path: '',
        component: _followup_add_fields_page__WEBPACK_IMPORTED_MODULE_3__["FollowupAddFieldsPage"]
      }];

      var FollowupAddFieldsPageRoutingModule = function FollowupAddFieldsPageRoutingModule() {
        _classCallCheck(this, FollowupAddFieldsPageRoutingModule);
      };

      FollowupAddFieldsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FollowupAddFieldsPageRoutingModule);
      /***/
    },

    /***/
    "44Ds":
    /*!*******************************************************************!*\
      !*** ./src/app/followup-add-fields/followup-add-fields.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Ds(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fields {\n  min-height: 100%;\n  background: #e8e8e8;\n}\n.fields .fields-list {\n  background: transparent;\n}\n.fields .fields-list .fields-card {\n  margin: 5px;\n}\n.fields .fields-list .fields-card .c-head {\n  font-size: 18px;\n  font-weight: bold;\n}\n.fields .fields-list .fields-card .c-head ion-icon {\n  float: left;\n  font-size: 25px;\n  color: #2979ff;\n}\n.fields .fields-list .fields-card .c-content .c-row .c-col {\n  font-weight: bold;\n}\n.fields .fields-list .fields-card .c-content .c-row .c-col-input ion-input {\n  border: 1px solid #d0d0d0;\n  border-radius: 7px;\n}\n.fields .btn-addField {\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 22px 0px;\n}\n.fields .btn-submit {\n  width: 87%;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvbGxvd3VwLWFkZC1maWVsZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDQyx1QkFBQTtBQUVMO0FBREs7RUFDQyxXQUFBO0FBR047QUFGTTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUlQO0FBSE87RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLUjtBQUFRO0VBQ0ksaUJBQUE7QUFFWjtBQUVTO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtBQUFWO0FBT0k7RUFDQyxjQUFBO0VBQ0gsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQU9JO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBTEwiLCJmaWxlIjoiZm9sbG93dXAtYWRkLWZpZWxkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGRze1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICAuZmllbGRzLWxpc3R7XHJcbiAgICBcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHQuZmllbGRzLWNhcmR7XHJcbiAgICBcdFx0bWFyZ2luOiA1cHg7XHJcbiAgICBcdFx0LmMtaGVhZHtcclxuICAgIFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuICAgIFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdCAgICBmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiAjMjk3OWZmO1xyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuICAgIFx0XHQuYy1jb250ZW50e1xyXG4gICAgXHRcdFx0LmMtcm93e1xyXG4gICAgXHRcdFx0XHQuYy1jb2x7XHJcbiAgICBcdFx0XHQgICAgXHRmb250LXdlaWdodDogYm9sZDtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHQuYy1jb2wtaW5wdXR7XHJcbiAgICBcdFx0XHRcdFx0XHJcbiAgICBcdFx0XHRcdFx0aW9uLWlucHV0e1xyXG5cdFx0XHRcdFx0XHQgICAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgIFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIFx0XHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdH1cclxuICAgIFx0XHRcdH1cclxuICAgIFx0XHR9XHJcbiAgICBcdH1cclxuICAgIH1cclxuICAgIC5idG4tYWRkRmllbGR7XHJcblx0ICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0cGFkZGluZzogMjJweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXN1Ym1pdHtcclxuXHQgICAgd2lkdGg6IDg3JTtcclxuXHQgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "9mD+":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/followup-add-fields/followup-add-fields.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'followUp_student.add_fields' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<div class=\"fields\">\n\t\t<ion-list class=\"fields-list\" *ngIf=\"fields.length\">\n\t\t\t<ion-card class=\"fields-card\" *ngFor=\"let f of fields; let i=index\">\n\t\t\t\t<ion-card-header class=\"c-head\" >\n\t\t\t\t\t{{'followUp_student.field_name_enter' | translate}}\n\t\t\t\t\t<ion-icon (click)=\"removeField(i,f)\" name=\"remove-circle-outline\"></ion-icon>\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content  class=\"c-content\" >\n\t\t\t\t\t<ion-row  class=\"c-row\" >\n\t\t\t\t\t\t<ion-col size=\"6\"  class=\"c-col\" >\n\t\t\t\t\t\t\t{{'followUp_student.field_name' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col-input\">\n\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"f.field_name\" type=\"text\"></ion-input>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row class=\"c-row\">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col\">\n\t\t\t\t\t\t\t{{'followUp_student.field_max_mark' | translate }}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col-input\">\n\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"f.field_max_marks\" type=\"number\"></ion-input>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row class=\"c-row\">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col\">\n\t\t\t\t\t\t\t{{'followUp_student.mark_on_present' | translate }}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col-input\">\n\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"f.marks_on_present\" type=\"number\"></ion-input>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<ion-row class=\"c-row\">\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col\">\n\t\t\t\t\t\t\t{{'followUp_student.absent_fill' | translate }}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"c-col-input input-check\">\n\t\t\t\t\t\t\t<ion-checkbox [(ngModel)]=\"f.absent_marks\" color=\"primary\"></ion-checkbox>\t\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</ion-list>\n\n\t\t<div class=\"btn-addField\">\n\t\t\t<ion-button (click)=\"addExtraFields()\" >{{'followUp_student.add_field' | translate }}</ion-button>\n\t\t</div>\n\n\t\t<div *ngIf=\"fields.length\" class=\"btn-submit\">\n\t\t\t<ion-button expand=\"block\" (click)=\"submitFields()\" >{{'followUp_student.submit' | translate}}</ion-button>\n\t\t</div>\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "CdzU":
    /*!*****************************************************************!*\
      !*** ./src/app/followup-add-fields/followup-add-fields.page.ts ***!
      \*****************************************************************/

    /*! exports provided: FollowupAddFieldsPage */

    /***/
    function CdzU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowupAddFieldsPage", function () {
        return FollowupAddFieldsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_followup_add_fields_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./followup-add-fields.page.html */
      "9mD+");
      /* harmony import */


      var _followup_add_fields_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./followup-add-fields.page.scss */
      "44Ds");
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
      "tyNb");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt"); //import { TabsPage } from '../tabs/tabs';


      var FollowupAddFieldsPage = /*#__PURE__*/function () {
        function FollowupAddFieldsPage(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, route, router, printer, zone, platform) {
          var _this = this;

          _classCallCheck(this, FollowupAddFieldsPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.route = route;
          this.router = router;
          this.printer = printer;
          this.zone = zone;
          this.platform = platform;
          this.userDetails = {};
          this.lang = {};
          this.fields = [];
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
            console.log('lang res===>', _this.lang);
          });
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state;
            }
          });
        }

        _createClass(FollowupAddFieldsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getFields();
            }
          }
        }, {
          key: "addExtraFields",
          value: function addExtraFields() {
            var _this2 = this;

            this.zone.run(function () {
              _this2.fields.push({
                field_name: '',
                field_max_marks: '',
                marks_on_present: '',
                absent_marks: true
              });

              console.log(_this2.fields);
            });
          }
        }, {
          key: "removeField",
          value: function removeField(index, field) {
            var _this3 = this;

            if (field.id) {
              var data = {
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "id": field.id
              };
              this.dataProvider.deleteFollowupFields(data).then(function (res) {
                if (res.data) {
                  console.log('here', res.data);

                  _this3.fields.splice(index, 1);

                  if (_this3.fields.length < 1) {
                    var navigation = {
                      state: {
                        update: true,
                        course: _this3.navData.course
                      }
                    };

                    _this3.zone.run(function () {
                      _this3.router.navigate(['followup-student-list'], navigation);
                    });
                  }
                }
              }, function (error) {// this.dataProvider.showToast(this.lang.field_remove_error);
              });
            } else {
              this.fields.splice(index, 1);
            }
          }
        }, {
          key: "getFields",
          value: function getFields() {
            var _this4 = this;

            var course = this.navData;
            var data = {
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "course_id": course.course_id,
              "school_id": this.userDetails.details.school_id
            };
            this.dataProvider.getFollowupFields(data).then(function (res) {
              if (res.data) {
                var fields = [];

                if (res.data.length) {
                  res.data.forEach(function (d) {
                    d.absent_marks = +d.absent_marks;
                  });
                }

                _this4.fields = res.data || [];
                console.log('here', _this4.fields, res.data);
              }
            }, function (error) {
              _this4.dataProvider.hideLoading();

              _this4.dataProvider.showToast(_this4.lang.field_error);
            });
          }
        }, {
          key: "submitFields",
          value: function submitFields() {
            var _this5 = this;

            if (this.checkField()) {
              console.log(this.fields);
              var course = this.navData;
              var data = {
                "field": this.fields,
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "course_id": course.course_id,
                "school_id": this.userDetails.details.school_id
              };
              this.dataProvider.showLoading();
              this.dataProvider.saveFollowupFields(data).then(function (res) {
                _this5.dataProvider.hideLoading();

                if (res.data) {
                  console.log('resp', res);
                  var navigation = {
                    state: {
                      update: true,
                      course: _this5.navData.course
                    }
                  };

                  _this5.zone.run(function () {
                    _this5.router.navigate(['followup-student-list'], navigation);
                  });
                } else {
                  _this5.dataProvider.showToast(_this5.lang.field_error);
                }
              }, function (error) {
                _this5.dataProvider.hideLoading();

                _this5.dataProvider.showToast(_this5.lang.field_error);
              });
            }
          }
        }, {
          key: "checkField",
          value: function checkField() {
            var _this6 = this;

            var responce = true;

            if (this.fields.length) {
              this.fields.forEach(function (field) {
                field.absent_marks = field.absent_marks == true ? 1 : 0;

                if (!field.field_name || field.field_name == '' || field.field_name.length < 1) {
                  responce = false;

                  _this6.dataProvider.showToast(_this6.lang.field_name_required);

                  return false;
                } else if (!field.field_max_marks || field.field_max_marks == '' || field.field_name.length < 1) {
                  responce = false;

                  _this6.dataProvider.showToast(_this6.lang.field_max_marks_required);

                  return false;
                }
              });
              return responce;
            } else {
              return false;
            }
          }
        }]);

        return FollowupAddFieldsPage;
      }();

      FollowupAddFieldsPage.ctorParameters = function () {
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
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      FollowupAddFieldsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-followup-add-fields',
        template: _raw_loader_followup_add_fields_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_followup_add_fields_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], FollowupAddFieldsPage);
      /***/
    },

    /***/
    "bpOT":
    /*!*******************************************************************!*\
      !*** ./src/app/followup-add-fields/followup-add-fields.module.ts ***!
      \*******************************************************************/

    /*! exports provided: FollowupAddFieldsPageModule */

    /***/
    function bpOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowupAddFieldsPageModule", function () {
        return FollowupAddFieldsPageModule;
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


      var _followup_add_fields_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./followup-add-fields-routing.module */
      "2Wtu");
      /* harmony import */


      var _followup_add_fields_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./followup-add-fields.page */
      "CdzU");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var FollowupAddFieldsPageModule = function FollowupAddFieldsPageModule() {
        _classCallCheck(this, FollowupAddFieldsPageModule);
      };

      FollowupAddFieldsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _followup_add_fields_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowupAddFieldsPageRoutingModule"]],
        declarations: [_followup_add_fields_page__WEBPACK_IMPORTED_MODULE_6__["FollowupAddFieldsPage"]]
      })], FollowupAddFieldsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=followup-add-fields-followup-add-fields-module-es5.js.map
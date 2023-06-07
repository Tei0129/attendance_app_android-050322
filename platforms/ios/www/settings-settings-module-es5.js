(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "7Dlj":
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function Dlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "7wo0":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function wo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "7Dlj");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "ADm/":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function ADm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-settings:host .center-row {\n  text-align: center;\n}\napp-settings:host .center-row h3 {\n  width: 100%;\n}\napp-settings:host .image-column {\n  text-align: center;\n}\napp-settings:host .image-column .profilepicture {\n  margin: 15px 0;\n  border-radius: 50%;\n  height: 100px;\n}\napp-settings:host .background-input {\n  background-color: #ececec;\n  margin: 10px 0;\n}\napp-settings:host .eye-pass {\n  font-size: 19px !important;\n  position: absolute;\n  left: 9px;\n  top: 0px;\n  --color: unset;\n  --background: unset;\n  --box-shadow: unset;\n  color: #aaa9a9;\n  z-index: 21;\n  width: 51px;\n  height: 44px;\n}\napp-settings:host ion-navbar {\n  direction: ltr;\n}\napp-settings:host ion-label {\n  color: #9a9999;\n}\napp-settings:host .add-image-icon {\n  position: absolute;\n  top: 83px;\n  left: 56%;\n  background: #fff;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\napp-settings:host .add-image-icon ion-icon {\n  color: green;\n  font-size: 26px;\n}\napp-settings:host .add-image-icon ion-icon::before {\n  font-size: 25px;\n}\n.deactive-account p {\n  margin-bottom: 0;\n  margin-top: 0;\n  padding: 5px;\n  color: #444;\n  background-color: #f8bf1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7QUFDTjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBRUU7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFBTjtBQUVFO0VBQ00sMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2V0dGluZ3M6aG9zdCB7XHJcbiAgLmNlbnRlci1yb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoM3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbWFnZS1jb2x1bW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAucHJvZmlsZXBpY3R1cmV7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgIH1cclxuICB9IFxyXG4gIC5iYWNrZ3JvdW5kLWlucHV0e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICB9IFxyXG4gIC5leWUtcGFzc3tcclxuICAgICAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogOXB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIC0tY29sb3I6IHVuc2V0O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICBjb2xvcjogI2FhYTlhOTtcclxuICAgICAgICB6LWluZGV4OiAyMTtcclxuICAgICAgICB3aWR0aDogNTFweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIGlvbi1uYXZiYXJ7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICB9XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICM5YTk5OTk7XHJcbiAgfVxyXG4gIC5hZGQtaW1hZ2UtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgzcHg7XHJcbiAgICBsZWZ0OiA1NiU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uOjpiZWZvcmV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcbn1cclxuLmRlYWN0aXZlLWFjY291bnR7XHJcbiAgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiZjFmO1xyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "Uncc":
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /*! exports provided: SettingsPage */

    /***/
    function Uncc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "mzE/");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "ADm/");
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
      /* harmony import */


      var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../service/geo-service/geo-service */
      "G+rw");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

      var SettingsPage = /*#__PURE__*/function () {
        /**
         * Class list constructor
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param translate used for translation service
         * @param events App events
         */
        function SettingsPage(dataProvider, authProvider, camera, //  public app: App,
        translate, router, storage, //  public events: Events,
        geoService, alertCtrl) {
          var _this = this;

          _classCallCheck(this, SettingsPage);

          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.camera = camera;
          this.translate = translate;
          this.router = router;
          this.storage = storage;
          this.geoService = geoService;
          this.alertCtrl = alertCtrl;
          this.user = {
            name: '',
            pic: '',
            username: '',
            email_id: '',
            phone_no: '',
            oldpass: '',
            newpass: '',
            parent_register_link: true,
            teacher_register_link: true,
            delay_rule: '',
            warning_report: '',
            warning_report_second: '',
            warning_report_third: '',
            school_details: '',
            country: ''
          };
          this.displayPic = '';
          this.lang = {};
          this.userDetails = {};
          this.passwordType = 'password';
          this.passwordIcon = 'eye-off';
          this.passwordTypecnf = 'password';
          this.passwordIconcnf = 'eye-off';
          this.schoolDetail = {};
          this.countries = [];
          this.countryDetails = {};
          this.delete_translation_text = {};
          this.showDeleteAlert = false;
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.translate.get("setting").subscribe(function (res) {
            _this.delete_translation_text = res;
          });
          this.getCountry();
        }

        _createClass(SettingsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              console.log(this.userDetails);
              this.user.name = this.userDetails.details.first_name + ' ' + this.userDetails.details.last_name;
              this.user.username = this.userDetails.details.username;
              this.user.email_id = this.userDetails.details.email_id;
              this.user.phone_no = this.userDetails.details.phone_no;
              this.user.school_details = this.userDetails.details.school_details;
              this.user.country = this.userDetails.details.country_ar_name;
              this.selectedCountyCode = this.userDetails.details.country_code;

              if (this.userDetails.details.is_school_admin == 1) {
                console.log('vv', this.userDetails.details.is_school_admin);
                this.displayPic = this.userDetails.details.school_logo;
              } else {
                this.displayPic = this.userDetails.details.pic;
              }

              this.userType = this.userDetails.details.user_type;
              this.is_school_admin = this.userDetails.details.is_school_admin;

              if (this.userType == 1) {
                this.getAllRules();
              }
            } else {
              this.dataProvider.hideLoading();
              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              }); //this.app.getRootNav().setRoot("LoginPage");
            }
          }
        }, {
          key: "getCountry",
          value: function getCountry() {
            var _this2 = this;

            this.storage.get('language').then(function (res) {
              if (res == 'en') {
                console.log(res);
                _this2.countries = _this2.geoService.getEnCountries();
              } else {
                _this2.countries = _this2.geoService.getArCountries();
              }
            });
          }
        }, {
          key: "assignCountry",
          value: function assignCountry() {
            console.log(this.selectedCountyCode);
            this.countryDetails = this.geoService.getCountryDetails(this.selectedCountyCode);
            console.log(this.countryDetails);
          }
          /**
           * Show hidden password on frontend
           */

        }, {
          key: "showpass",
          value: function showpass() {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
          }
          /**
           * Show hidden confirm password on frontend
           */

        }, {
          key: "showpasscnf",
          value: function showpasscnf() {
            this.passwordTypecnf = this.passwordTypecnf === 'text' ? 'password' : 'text';
            this.passwordIconcnf = this.passwordIconcnf === 'eye-off' ? 'eye' : 'eye-off';
          }
        }, {
          key: "getAllRules",
          value: function getAllRules() {
            var _this3 = this;

            var data = {
              school_id: this.userDetails.details.school_id,
              user_no: this.userDetails.details.user_no
            };
            this.dataProvider.getAllRules(data).then(function (res) {
              if (res) {
                _this3.schoolDetail = res.school_details;

                if (res.user_details.teacher_register_link == '1') {
                  _this3.teacherLink = true;
                } else {
                  _this3.teacherLink = false;
                }

                if (res.user_details.parent_register_link == '1') {
                  _this3.parent_link = true;
                } else {
                  _this3.parent_link = false;
                } // this.teacherLink=res.user_details.teacher_register_link;
                // this.parent_link=res.user_details.parent_register_link;


                console.log(_this3.teacherLink, _this3.parent_link);
                _this3.user.delay_rule = _this3.schoolDetail.delay_rule;
                _this3.user.warning_report = _this3.schoolDetail.report_condition;
                _this3.user.warning_report_second = _this3.schoolDetail.second_report_condition;
                _this3.user.warning_report_third = _this3.schoolDetail.third_report_condition;

                if (_this3.schoolDetail.deactivate_date) {
                  _this3.deactivate_date = _this3.schoolDetail.deactivate_date;
                }
              }

              console.log('res', res);
            })["catch"](function (error) {
              console.log(error);
            });
          }
          /**
           * Update the user details
           */

        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            if (this.user.oldpass != '' && this.user.newpass == '') {
              this.dataProvider.showToast(this.lang.new_pass_required);
            } else if (this.user.oldpass == '' && this.user.newpass != '') {
              this.dataProvider.showToast(this.lang.old_pass_required);
            } else {
              var data = {
                user_no: this.userDetails.details.user_no,
                session_id: this.userDetails.session_id,
                users: {
                  email_id: this.user.email_id,
                  phone_no: this.user.phone_no,
                  oldpass: this.user.oldpass,
                  newpass: this.user.newpass
                },
                parent_register_link: this.user.parent_register_link,
                teacher_register_link: this.user.teacher_register_link,
                delay_rule: this.user.delay_rule,
                warning_report: this.user.warning_report,
                warning_report_second: this.user.warning_report_second,
                warning_report_third: this.user.warning_report_third,
                pic: this.user.pic
              };

              if (this.selectedCountyCode) {
                data.country_en_name = this.countryDetails.country_en_name;
                data.country_code = this.countryDetails.country_code;
                data.country_ar_name = this.countryDetails.country_ar_name;
              }

              console.log(data);
              this.dataProvider.showLoading();
              this.dataProvider.updateUserSettings(data).then(function (response) {
                _this4.dataProvider.hideLoading();

                if (response.session) {
                  console.log(response);

                  _this4.dataProvider.showToast(response.message);

                  if (_this4.selectedCountyCode) {
                    _this4.userDetails.details.country_en_name = _this4.countryDetails.country_en_name;
                    _this4.userDetails.details.country_code = _this4.countryDetails.country_code;
                    _this4.userDetails.details.country_ar_name = _this4.countryDetails.country_ar_name;
                  }

                  _this4.userDetails.details.email_id = _this4.user.email_id;
                  _this4.userDetails.details.phone_no = _this4.user.phone_no;

                  if (_this4.userDetails.details.is_school_admin == 1) {
                    _this4.dataProvider.language.emit('ar');

                    console.log('here');
                    _this4.userDetails.details.school_logo = response.pic != '' ? response.pic : _this4.displayPic;
                  } else {
                    _this4.userDetails.details.pic = response.pic != '' ? response.pic : _this4.displayPic;
                  }

                  localStorage.setItem("userloggedin", JSON.stringify(_this4.userDetails));

                  if (localStorage.getItem('earlyLogin')) {
                    var loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
                    console.log(loggedinUser);

                    for (var i = 0; i < loggedinUser.length; i++) {
                      if (loggedinUser[i].name == _this4.userDetails.details.first_name) {
                        console.log(loggedinUser[i].name, _this4.user.name, _this4.user.newpass);

                        if (_this4.user.newpass != '') {
                          loggedinUser[i].password = _this4.user.newpass;
                        }

                        if (_this4.userDetails.details.is_school_admin == 1) {
                          console.log('loggedinUser[i]', _this4.userDetails.details.school_logo);
                          loggedinUser[i].image = _this4.userDetails.details.school_logo;
                        } else {
                          loggedinUser[i].image = _this4.userDetails.details.pic;
                        }
                      }
                    }

                    localStorage.setItem("earlyLogin", JSON.stringify(loggedinUser));
                  }

                  _this4.authProvider.publishEvent(true);
                } else {
                  _this4.authProvider.flushLocalStorage();

                  _this4.dataProvider.errorALertMessage(response.message);

                  _this4.router.navigate(['login'], {
                    replaceUrl: true
                  }); //this.app.getRootNav().setRoot("LoginPage");

                }
              })["catch"](function (error) {
                _this4.dataProvider.hideLoading();

                _this4.dataProvider.errorALertMessage(error);
              });
            }
          }
        }, {
          key: "onClickDeleteSchool",
          value: function onClickDeleteSchool() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.delete_translation_text.delete_school_alert,
                        buttons: [{
                          text: this.delete_translation_text.delete_school_alert_btn_yes,
                          handler: function handler() {
                            _this5.deleteSchool();
                          }
                        }, {
                          text: this.delete_translation_text.delete_school_alert_btn_no,
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
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
          key: "presentPrintOption",
          value: function presentPrintOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "onCancelDeleteSchool",
          value: function onCancelDeleteSchool() {
            this.showDeleteAlert = false;
          }
        }, {
          key: "deleteSchool",
          value: function deleteSchool() {
            var _this6 = this;

            this.showDeleteAlert = false;
            this.dataProvider.showLoading();
            var data = {
              school_id: this.userDetails.details.school_id,
              user_no: this.userDetails.details.user_no
            };
            this.dataProvider.deleteSchoolSettings(data).then(function (response) {
              _this6.dataProvider.hideLoading(); // if(response.session){


              console.log(response);

              _this6.dataProvider.errorALertMessage(response.msg);

              _this6.deactivate_date = response.deactive_date; // this.router.navigate(['login'], { replaceUrl: true });
              // }
            })["catch"](function (error) {
              _this6.dataProvider.hideLoading();

              _this6.dataProvider.errorALertMessage(error.msg);
            });
          }
        }, {
          key: "revertSchoolDeletion",
          value: function revertSchoolDeletion() {
            var _this7 = this;

            this.dataProvider.showLoading();
            var data = {
              school_id: this.userDetails.details.school_id,
              user_no: this.userDetails.details.user_no
            };
            this.dataProvider.revertDeletedSchoolSettings(data).then(function (response) {
              _this7.dataProvider.hideLoading();

              console.log(response); // if(response.session){

              _this7.dataProvider.errorALertMessage(response.msg);

              _this7.deactivate_date = ''; // this.deactivate_date = response.response.deactivate_date;
              // this.router.navigate(['login'], { replaceUrl: true });
              // }
            })["catch"](function (error) {
              _this7.dataProvider.hideLoading();

              _this7.dataProvider.errorALertMessage(error.msg);
            });
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this8.openCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this8.openGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this9 = this;

            var options = {
              quality: 79,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.CAMERA
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                console.log(imageData);
                _this9.displayPic = 'data:image/png;base64,' + imageData;
                _this9.user.pic = 'data:image/png;base64,' + imageData;
              }
            });
          }
          /**
           * Open gallery to take image
           */

        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this10 = this;

            var options = {
              quality: 79,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                console.log(imageData);
                _this10.displayPic = 'data:image/png;base64,' + imageData;
                _this10.user.pic = 'data:image/png;base64,' + imageData;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getDeactivateTime",
          value: function getDeactivateTime() {
            var myMoment = moment__WEBPACK_IMPORTED_MODULE_12__(this.deactivate_date, "YYYY-MM-DD HH:mm:ss");
            var ok = moment__WEBPACK_IMPORTED_MODULE_12__();
            var duration = moment__WEBPACK_IMPORTED_MODULE_12__["duration"](ok.diff(myMoment));
            var total = duration.asMilliseconds();
            var t = total;
            var seconds = Math.floor(t / 1000 % 60);
            var minutes = Math.floor(t / 1000 / 60 % 60);
            var hours = Math.floor(t / (1000 * 60 * 60) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
            };
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]
        }, {
          type: _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_10__["GeoServiceProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"], _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_10__["GeoServiceProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], SettingsPage);
      /***/
    },

    /***/
    "mzE/":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function mzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"end\">\n   \t\t<ion-back-button></ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>   \n    <ion-title text-right>{{'setting.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding mode=\"md\">\n  <div *ngIf=\"deactivate_date\" class=\"deactive-account\">\n    <p>{{'setting.deactive_account_text' | translate}} {{getDeactivateTime().hours + 'H ' + getDeactivateTime().minutes + 'M '}}</p>\n  </div>\n    <div class=\"image-column\">\n        <img [src]=\"displayPic\" class=\"profilepicture\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n      <div class=\"add-image-icon\" (click) = \"takePicture()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </div>\n    </div>\n  <ion-row class=\"center-row\" justify-content-center>\n    <h3 style=\"margin-top: unset;\">{{user.name}}</h3>\n  </ion-row>\n  <ion-list>\n    <ion-item class=\"background-input\" align-items-center>\n      <ion-label color=\"dark\" position=\"floating\">{{'setting.name' | translate}}</ion-label>\n      <ion-input type=\"text\" name=\"name\"  [value]=\"user.name\" disabled text-right>\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"background-input\">\n      <ion-label color=\"dark\" position=\"floating\">{{'setting.peronalid' | translate}}</ion-label>\n      <ion-input type=\"text\" name=\"personalid\" [value]=\"user.username\" disabled text-right>\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"background-input\">\n      <ion-label color=\"dark\" position=\"floating\">{{'setting.email' | translate}}</ion-label>\n      <ion-input type=\"email\" name=\"email\" #email='ngModel' pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n        [(ngModel)]=\"user.email_id\" text-right>\n      </ion-input>\n    </ion-item>\n    <div *ngIf=\"email.invalid && (email.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"email.errors.pattern\">\n        {{'validations.invalidemail' | translate}}\n      </div>\n    </div>\n    <ion-item class=\"background-input\">\n      <ion-label color=\"dark\" position=\"floating\">{{'setting.phone' | translate}}</ion-label>\n      <ion-input type=\"number\" name=\"phone\" #phonenumber='ngModel' [(ngModel)]=\"user.phone_no\" text-right>\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"background-input\">\n      <ion-label color=\"dark\" position=\"floating\">{{'setting.oldpass' | translate}}</ion-label>\n      <ion-input [type]=\"passwordType\" name=\"oldpassword\" #oldpassword='ngModel' [(ngModel)]=\"user.oldpass\"\n        text-right>\n      </ion-input>\n      <ion-button  clear icon-only type=\"button\" item-right class=\"eye-pass\" (click)=\"showpass()\">\n        <ion-icon [name]=\"passwordIcon\" > </ion-icon>\n      </ion-button>\n    </ion-item>\n    \n    <ion-item class=\"background-input\">\n      <ion-label color=\"dark\" position=\"floating\">{{'setting.newpass' | translate}}</ion-label>\n      <ion-input [type]=\"passwordTypecnf\" name=\"newpassword\" #newpassword='ngModel' [(ngModel)]=\"user.newpass\"\n        text-right>\n      </ion-input>\n      <ion-button ion-button clear icon-only type=\"button\" item-right class=\"eye-pass\" (click)=\"showpasscnf()\">\n        <ion-icon [name]=\"passwordIconcnf\" > </ion-icon>\n      </ion-button>\n    </ion-item>\n    <div *ngIf=\"is_school_admin\">\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <p color=\"dark\" position=\"floating\">{{'setting.parent_share_link' | translate}}</p>\n        <ion-toggle [checked]=\"parent_link\" color=\"primary\" [(ngModel)]=\"user.parent_register_link\"  slot=\"end\"></ion-toggle>\n      </ion-item>\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <p color=\"dark\" position=\"floating\">{{'setting.teacher_register_link' | translate}}</p>\n        <ion-toggle [checked]=\"teacherLink\" color=\"primary\" [(ngModel)]=\"user.teacher_register_link\"  slot=\"end\"></ion-toggle>\n      </ion-item>\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <ion-label color=\"dark\" position=\"floating\">{{'setting.delay_rule' | translate}}</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"user.delay_rule\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <ion-label color=\"dark\" position=\"floating\">{{'setting.warning_report' | translate}}</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"user.warning_report\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <ion-label color=\"dark\" position=\"floating\">{{'setting.warning_report_second' | translate}}</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"user.warning_report_second\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <ion-label color=\"dark\" position=\"floating\">{{'setting.warning_report_third' | translate}}</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"user.warning_report_third\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"background-input\" *ngIf=\"userType=='1'\">\n        <ion-label color=\"dark\" style=\"    max-width: 78px;\" >{{'setting.country' | translate}}</ion-label>\n        <ion-select class=\"set\" [(ngModel)]=\"selectedCountyCode\" (ionChange)=\"assignCountry()\" interface=\"popover\" [placeholder]=\"user.country\">\n          <ion-select-option *ngFor=\"let c of countries\" [value]=\"c.code\">{{c.name}}</ion-select-option>\n        </ion-select> \n        <!-- <ion-input type=\"number\" [(ngModel)]=\"user.country\" placeholder=\"{{user.country}}\"  readonly=\"true\"></ion-input> -->\n      </ion-item>\n    </div>\n    <ion-button  shape=\"round\"  expand=\"full\" color=\"primary\" (click)=\"update()\">{{'contact.submit' | translate}}</ion-button>\n    <ion-button *ngIf=\"!deactivate_date\" shape=\"round\"  expand=\"full\" color=\"danger\" (click)=\"onClickDeleteSchool()\">{{'setting.delete_School_button_text' | translate}}</ion-button>\n    <ion-button *ngIf=\"deactivate_date\" shape=\"round\"  expand=\"full\" color=\"danger\" (click)=\"revertSchoolDeletion()\">{{'setting.revert_deletion' | translate}}</ion-button>\n  </ion-list>\n\n\n</ion-content>\n\n<div class=\"custom-modal-main\" *ngIf=\"showDeleteAlert\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-note-header\">\n      <h4 style=\"color:black;\">{{'setting.delete_school_alert' | translate}}</h4>\n    </div>\n\n    <div class=\"custom-note-content\">\n      <!-- <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n        <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[i]}\" (click)=\"selectStarsForRating(i)\"></ion-icon>\n      </span> -->\n      <div class=\"note-desc\">\n        <!-- <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"noteMessage\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-input>\n        </ion-item> -->\n        <!-- <p class=\"max_length\">{{'setting.delete_school_alert' | translate}}</p> -->\n      </div>\n    </div>\n    <div class=\"custom-modal-footer right-direction\">\n      <ion-row>\n        <ion-col size=\"6\" text-right>\n         <ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\"  (click)=\"onCancelDeleteSchool()\">{{'setting.delete_school_alert_btn_no' |\n            translate}}</ion-button> \n        </ion-col>\n        <ion-col size=\"6\" text-center>\n          <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" color=\"primary\" (click)=\"deleteSchool()\">{{'setting.delete_school_alert_btn_yes' | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map
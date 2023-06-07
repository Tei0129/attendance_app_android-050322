(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elearning-schools-elearning-schools-module"], {
    /***/
    "48fY":
    /*!***************************************************************!*\
      !*** ./src/app/elearning-schools/elearning-schools.module.ts ***!
      \***************************************************************/

    /*! exports provided: ElearningSchoolsPageModule */

    /***/
    function fY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElearningSchoolsPageModule", function () {
        return ElearningSchoolsPageModule;
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


      var _elearning_schools_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./elearning-schools-routing.module */
      "asPI");
      /* harmony import */


      var _elearning_schools_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./elearning-schools.page */
      "MStg");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var ElearningSchoolsPageModule = function ElearningSchoolsPageModule() {
        _classCallCheck(this, ElearningSchoolsPageModule);
      };

      ElearningSchoolsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _elearning_schools_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElearningSchoolsPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
        declarations: [_elearning_schools_page__WEBPACK_IMPORTED_MODULE_6__["ElearningSchoolsPage"]]
      })], ElearningSchoolsPageModule);
      /***/
    },

    /***/
    "Ebct":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elearning-schools/elearning-schools.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ebct(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\n  <ion-toolbar transparent>\n   \t<ion-buttons slot=\"end\">\n      <!-- <ion-button icon-only (click)=\"selectNewsCountry()\">\n        <ion-icon name=\"help-circle-outline\" ></ion-icon>\n      </ion-button> -->\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'eLearning.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding mode=\"md\">\n    <ion-row class=\"county\">\n\n        <ion-item >\n          <ion-label>{{'location.select_country'| translate}}</ion-label>\n          <ionic-selectable\n            [(ngModel)]=\"selected_country\"\n            [items]=\"country\"\n            itemValueField=\"code\"\n            itemTextField=\"name\"\n            (onChange)=\"portChange($event)\"\n            [canSearch]=\"true\">\n          </ionic-selectable>\n        </ion-item>\n  </ion-row>\n  <div class=\"body\">\n    \n    <ion-card  *ngFor=\"let school of schools\" (click)=\"openschool(school)\">\n      <ion-card-content>\n        <ion-item lines=\"none\">\n          <ion-avatar item-start>\n            <img [src]=\"school.pic\">\n          </ion-avatar>\n          <label>\n  \t        <h2>{{school.school_name}}</h2>\n  \t        <h3>{{school.detail}}</h3>\n          </label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-label item-center class=\"norecord-found\" *ngIf = \"schools?.length == 0\">{{noDataFound}}</ion-label>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "MStg":
    /*!*************************************************************!*\
      !*** ./src/app/elearning-schools/elearning-schools.page.ts ***!
      \*************************************************************/

    /*! exports provided: ElearningSchoolsPage */

    /***/
    function MStg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElearningSchoolsPage", function () {
        return ElearningSchoolsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_elearning_schools_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./elearning-schools.page.html */
      "Ebct");
      /* harmony import */


      var _elearning_schools_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./elearning-schools.page.scss */
      "lHAD");
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
      "tyNb");
      /* harmony import */


      var _service_location_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/location/location.service */
      "9XNo");
      /* harmony import */


      var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../service/geo-service/geo-service */
      "G+rw");

      var ElearningSchoolsPage = /*#__PURE__*/function () {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param translate used for translation service
         * @param dataProvider Use for getting data from the API
         */
        function ElearningSchoolsPage(navCtrl, translate, dataProvider, router, alertController, route, locationSrevice, geo, zone) {
          var _this = this;

          _classCallCheck(this, ElearningSchoolsPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.router = router;
          this.alertController = alertController;
          this.route = route;
          this.locationSrevice = locationSrevice;
          this.geo = geo;
          this.zone = zone;
          /**
           * @member schools Array of schools who have the e learning materials
           * @member noDataFound used for diplaying the message when no child found
           * @member lang Contains the language translation object
           */

          this.schools = [];
          this.noDataFound = '';
          this.lang = {};
          this.selected_country = {
            code: "",
            name: "Worldwide"
          };
          this.langFile = '';
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.translate.get("location").subscribe(function (res) {
            _this.location_lang = res;
          });
          this.language = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.language.subscribe(function (res) {
            console.log('langFile>>>>', res);
            _this.langFile = res;
          });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */


        _createClass(ElearningSchoolsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.geo.getMyLocation().then(function (resp) {
              console.log(resp.countrycode);

              if (resp != '') {
                _this2.country_code = resp.countryCode;
              } else {
                _this2.dataProvider.showToast(_this2.location_lang.location_error);
              }
            }); // this.locationSrevice.checkGPSPermission(resp=>{
            //   this.country_code=resp.countryCode;
            //   // this.getSchool(this.country_code);
            // },e=>{
            // this.dataProvider.showToast(this.location_lang.location_error);
            //   console.log(e);
            // });

            if (this.langFile == 'ar') {
              this.country = this.geo.getAllCountries();
            } else {
              this.country = this.geo.getEnCountries();
            } // this.country.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));


            this.getSchool(null);
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            console.log(event);
            var start = 0;
            var newsPerPage = 0;

            if (event.value.code) {
              this.getSchool(event.value.code); // this.getNews(start, newsPerPage,);
            } else {
              this.getSchool(null);
            }
          }
        }, {
          key: "getSchool",
          value: function getSchool(location) {
            var _this3 = this;

            this.dataProvider.getSchool(location).then(function (schoolList) {
              _this3.schools = schoolList;

              if (_this3.schools && _this3.schools.length == 0) {
                _this3.noDataFound = _this3.lang.no_schools_found;
              }
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          key: "selectNewsCountry",
          value: function selectNewsCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var start, newsPerPage, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      start = 0;
                      newsPerPage = 0;
                      _context.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.location_lang.select_country,
                        message: this.location_lang.select_country_subheading,
                        mode: 'ios',
                        buttons: [{
                          text: this.location_lang.local,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            _this4.getSchool(_this4.country_code);

                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: this.location_lang.international,
                          handler: function handler() {
                            _this4.getSchool(null);

                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 4:
                      alert = _context.sent;
                      _context.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Open the school page where all material will be shown
           * @param school Selected School information object
           */

        }, {
          key: "openschool",
          value: function openschool(school) {
            var _this5 = this;

            var navigation = {
              state: {
                schoolInfo: school,
                country_code: this.country_code
              }
            }; //console.log(navigation);

            this.zone.run(function () {
              _this5.router.navigate(['elearning-school-video'], navigation);
            }); // this.navCtrl.push("ElearningSchoolVideosPage", {schoolInfo: school});
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ElearningSchoolsPage;
      }();

      ElearningSchoolsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _service_location_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"]
        }, {
          type: _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_9__["GeoServiceProvider"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      ElearningSchoolsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-elearning-schools',
        template: _raw_loader_elearning_schools_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_elearning_schools_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _service_location_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_9__["GeoServiceProvider"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], ElearningSchoolsPage);
      /***/
    },

    /***/
    "asPI":
    /*!***********************************************************************!*\
      !*** ./src/app/elearning-schools/elearning-schools-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ElearningSchoolsPageRoutingModule */

    /***/
    function asPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElearningSchoolsPageRoutingModule", function () {
        return ElearningSchoolsPageRoutingModule;
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


      var _elearning_schools_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./elearning-schools.page */
      "MStg");

      var routes = [{
        path: '',
        component: _elearning_schools_page__WEBPACK_IMPORTED_MODULE_3__["ElearningSchoolsPage"]
      }];

      var ElearningSchoolsPageRoutingModule = function ElearningSchoolsPageRoutingModule() {
        _classCallCheck(this, ElearningSchoolsPageRoutingModule);
      };

      ElearningSchoolsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ElearningSchoolsPageRoutingModule);
      /***/
    },

    /***/
    "lHAD":
    /*!***************************************************************!*\
      !*** ./src/app/elearning-schools/elearning-schools.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function lHAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-elearning-schools:host h2 {\n  font-weight: 600 !important;\n}\n\n.county {\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n}\n\n.county ion-item {\n  width: 100%;\n  --background: #f8f8f8;\n  font-size: 17px;\n}\n\n.body {\n  margin-top: 60px;\n}\n\nion-avatar {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VsZWFybmluZy1zY2hvb2xzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDJCQUFBO0FBQVI7O0FBR0c7RUFDSyxlQUFBO0VBQ0osV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7RUFDSixxQkFBQTtFQUNJLGVBQUE7QUFDUjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6ImVsZWFybmluZy1zY2hvb2xzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1lbGVhcm5pbmctc2Nob29sczpob3N0IHtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4gICAuY291bnR5e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbn1cclxuLmJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbmlvbi1hdmF0YXJ7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=elearning-schools-elearning-schools-module-es5.js.map
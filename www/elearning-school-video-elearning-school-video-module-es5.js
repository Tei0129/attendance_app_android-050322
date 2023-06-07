(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elearning-school-video-elearning-school-video-module"], {
    /***/
    "46qL":
    /*!*************************************************************************!*\
      !*** ./src/app/elearning-school-video/elearning-school-video.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function qL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: 100% !important;\n  margin: 5px 0 !important;\n}\nion-card h2 {\n  font-weight: 600 !important;\n  color: #000;\n  font-size: 20px;\n  padding-right: 10px;\n}\nion-card .category-heading {\n  border-bottom: 1px solid #eee;\n  border-top: 1px solid #eee;\n  padding: 5px 4px;\n}\nion-card .material-list-container {\n  width: 28px;\n  height: 28px;\n  background: #1a73b9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n}\nion-card .material-list-container .icon:before {\n  font-size: 25px;\n  transform: rotate(180deg);\n}\n.hideDisplay {\n  display: none;\n}\n.county {\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n}\n.county ion-item {\n  width: 100%;\n  --background: #f8f8f8;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VsZWFybmluZy1zY2hvb2wtdmlkZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtBQUFSO0FBQ1E7RUFDSSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNXO0VBQ0MsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFFVztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFmO0FBRVc7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFBZjtBQUdJO0VBQ0UsYUFBQTtBQUFOO0FBR0k7RUFDSSxlQUFBO0VBQ0osV0FBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0ksV0FBQTtFQUNKLHFCQUFBO0VBQ0ksZUFBQTtBQUNSIiwiZmlsZSI6ImVsZWFybmluZy1zY2hvb2wtdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAuY2F0ZWdvcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgICAubWF0ZXJpYWwtbGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE3M2I5O1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLm1hdGVyaWFsLWxpc3QtY29udGFpbmVyIC5pY29uOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGlkZURpc3BsYXl7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50eXtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG59XHJcbi5ib2R5e1xyXG4gICAvLyBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "QN2t":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elearning-school-video/elearning-school-video.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QN2t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\n  <ion-toolbar transparent>\n   \t<ion-buttons slot=\"end\">\n      <!-- <ion-button icon-only (click)=\"selectNewsCountry()\">\n        <ion-icon name=\"help-circle-outline\" ></ion-icon>\n      </ion-button> -->\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'eLearning.title' | translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content mode=\"md\"> \n    <!-- <ion-row class=\"county\">\n\n        <ion-item >\n          <ion-label>{{'location.select_country'| translate}}</ion-label>\n          <ionic-selectable\n            [(ngModel)]=\"selected_country\"\n            [items]=\"country\"\n            itemValueField=\"code\"\n            itemTextField=\"name\"\n            (onChange)=\"portChange($event)\"\n            [canSearch]=\"true\">\n          </ionic-selectable>\n        </ion-item>\n  </ion-row> -->\n  <ion-item color=\"content-back\" lines=\"none\" class=\"body\">\n    <ion-avatar item-start>\n      <img [src]=\"school.pic\">\n    </ion-avatar>\n    <ion-label>\n\t    <h2>{{school.school_name}}</h2>\n\t    <h3>{{school.detail}}</h3>\n    </ion-label>\n  </ion-item>\n\n  <div *ngIf = \"categories.length > 0\">\n    <ion-card *ngFor=\"let category of categories; let i=index\">\n        <ion-row class=\"category-heading\" [id]=\"'row'+i\" (click)=\"hideDisplay('2row'+i,'icon'+i)\">\n          <ion-col size=\"1\" align-self-center text-center>\n            <div class=\"material-list-container\">\n              <ion-icon name=\"list\" [id]=\"'icon'+i\"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col size=\"10\" (click)=\"playCategoryList()\" align-self-center>\n            <h2><b>{{category.cat_title}}</b></h2>\n          </ion-col>\n          <ion-col size=\"1\" tet-center *ngIf=\"category.materials?.length > 0\">\n            <ion-icon name=\"caret-down\" class=\"arrow-left\"></ion-icon>\n          </ion-col>\n        </ion-row>\n          <ion-row  [id]=\"'2row'+i\" class=\"hideDisplay\">\n            <div *ngIf=\"category.materials.length > 0\">\n              <ion-col size=\"2\"></ion-col>\n              <ion-col size=\"10\">\n                <div *ngFor=\"let material of category.materials\">\n                  <ion-item lines=\"none\" (click)=\"playvideo(material.id)\">{{material.material_title}}</ion-item>\n                </div>\n              </ion-col>\n            </div>\n          </ion-row>\n    </ion-card>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "dHLM":
    /*!***********************************************************************!*\
      !*** ./src/app/elearning-school-video/elearning-school-video.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ElearningSchoolVideoPage */

    /***/
    function dHLM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElearningSchoolVideoPage", function () {
        return ElearningSchoolVideoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_elearning_school_video_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./elearning-school-video.page.html */
      "QN2t");
      /* harmony import */


      var _elearning_school_video_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./elearning-school-video.page.scss */
      "46qL");
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


      var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/geo-service/geo-service */
      "G+rw");

      var ElearningSchoolVideoPage = /*#__PURE__*/function () {
        /**
         *
         * @param navCtrl Use for navigation between pages
         * @param navParams Use for navigation parameters passed from previous page
         * @param dataProvider Use for getting data from the API
         */
        function ElearningSchoolVideoPage(navCtrl, //	public navParams: NavParams, 
        dataProvider, route, alertController, translate, geo, router, zone) {
          var _this = this;

          _classCallCheck(this, ElearningSchoolVideoPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.route = route;
          this.alertController = alertController;
          this.translate = translate;
          this.geo = geo;
          this.router = router;
          this.zone = zone;
          /**
           * @member categories array of categories
           * @member school conatins the information about the school
           */

          this.categories = [];
          this.school = {};
          this.selected_country = {
            code: "",
            name: "Worldwide"
          };
          this.translate.get("location").subscribe(function (res) {
            _this.location_lang = res;
          });
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.dataProvider.showLoading(); //this.school = this.navParams.get("schoolInfo");


              _this.school = _this.router.getCurrentNavigation().extras.state.schoolInfo;
              _this.country_code = _this.router.getCurrentNavigation().extras.state.country_code;

              _this.getElerningMaterials(null);

              _this.country = _this.geo.getAllCountries();
              console.log(_this.school);
            }
          });
        }

        _createClass(ElearningSchoolVideoPage, [{
          key: "getElerningMaterials",
          value: function getElerningMaterials(c_dode) {
            var _this2 = this;

            console.log(this.school.id);
            this.dataProvider.getElearningMaterials(this.school.id, c_dode).then(function (materialList) {
              _this2.dataProvider.hideLoading();

              _this2.categories = materialList;
              console.log('fhgh===>', _this2.categories);
            })["catch"](function (err) {
              _this2.dataProvider.hideLoading();

              _this2.dataProvider.errorALertMessage(err);
            });
          }
        }, {
          key: "hideDisplay",
          value: function hideDisplay(i, b) {
            console.log(i);
            var x = document.getElementById(i);
            console.log(x.style.display);

            if (x.style.display === "") {
              x.style.display = "block";
            } else if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
          /**
           * Ionic navigation event will run when page is loaded
           */

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "playCategoryList",
          value: function playCategoryList() {}
        }, {
          key: "portChange",
          value: function portChange(event) {
            console.log(event);
            var start = 0;
            var newsPerPage = 0;

            if (event.value.code) {
              this.getElerningMaterials(event.value.code); // this.getNews(start, newsPerPage,);
            } else {
              this.getElerningMaterials(null);
            }
          }
        }, {
          key: "selectNewsCountry",
          value: function selectNewsCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

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
                            _this3.getElerningMaterials(_this3.country_code);

                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: this.location_lang.international,
                          handler: function handler() {
                            _this3.getElerningMaterials(null);

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
           * Open the video play page and pass the material id
           * @param materialId id of the material selected
           */

        }, {
          key: "playvideo",
          value: function playvideo(materialId) {
            var _this4 = this;

            var navigation = {
              state: {
                materialId: materialId
              }
            }; //console.log(navigation);

            this.zone.run(function () {
              _this4.router.navigate(['playvideo'], navigation);
            }); //this.navCtrl.push("PlayvideoPage",{materialId: materialId})
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ElearningSchoolVideoPage;
      }();

      ElearningSchoolVideoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoServiceProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      ElearningSchoolVideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-elearning-school-video',
        template: _raw_loader_elearning_school_video_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_elearning_school_video_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoServiceProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], ElearningSchoolVideoPage);
      /***/
    },

    /***/
    "dKNw":
    /*!*************************************************************************!*\
      !*** ./src/app/elearning-school-video/elearning-school-video.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ElearningSchoolVideoPageModule */

    /***/
    function dKNw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElearningSchoolVideoPageModule", function () {
        return ElearningSchoolVideoPageModule;
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


      var _elearning_school_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./elearning-school-video-routing.module */
      "qwRq");
      /* harmony import */


      var _elearning_school_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./elearning-school-video.page */
      "dHLM");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var ElearningSchoolVideoPageModule = function ElearningSchoolVideoPageModule() {
        _classCallCheck(this, ElearningSchoolVideoPageModule);
      };

      ElearningSchoolVideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _elearning_school_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElearningSchoolVideoPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_elearning_school_video_page__WEBPACK_IMPORTED_MODULE_6__["ElearningSchoolVideoPage"]]
      })], ElearningSchoolVideoPageModule);
      /***/
    },

    /***/
    "qwRq":
    /*!*********************************************************************************!*\
      !*** ./src/app/elearning-school-video/elearning-school-video-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ElearningSchoolVideoPageRoutingModule */

    /***/
    function qwRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElearningSchoolVideoPageRoutingModule", function () {
        return ElearningSchoolVideoPageRoutingModule;
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


      var _elearning_school_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./elearning-school-video.page */
      "dHLM");

      var routes = [{
        path: '',
        component: _elearning_school_video_page__WEBPACK_IMPORTED_MODULE_3__["ElearningSchoolVideoPage"]
      }];

      var ElearningSchoolVideoPageRoutingModule = function ElearningSchoolVideoPageRoutingModule() {
        _classCallCheck(this, ElearningSchoolVideoPageRoutingModule);
      };

      ElearningSchoolVideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ElearningSchoolVideoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=elearning-school-video-elearning-school-video-module-es5.js.map
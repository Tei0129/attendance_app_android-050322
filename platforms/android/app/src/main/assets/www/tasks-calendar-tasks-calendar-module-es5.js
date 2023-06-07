(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-calendar-tasks-calendar-module"], {
    /***/
    "GcDc":
    /*!*********************************************************!*\
      !*** ./src/app/tasks-calendar/tasks-calendar.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function GcDc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background-image-div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  background-image: url('class-background-image.svg');\n  left: -60px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\nion-card-content {\n  color: #fff;\n  width: 70%;\n  font-size: 11px;\n}\n\n.cards-description {\n  border-radius: 6px;\n  min-height: 100px;\n  position: relative;\n}\n\n.cards-description ion-card-title {\n  width: 70%;\n  font-size: 15px;\n}\n\n.cards-description .card-title {\n  width: 73% !important;\n  z-index: 1;\n}\n\n.cards-description ion-card-content {\n  color: #fff;\n  width: 70%;\n  font-size: 11px;\n}\n\n.cards-description .card-constent {\n  font-size: 0.7rem;\n  width: 100% !important;\n  box-sizing: 187;\n  z-index: 2 !important;\n}\n\n.cards-description .background-image-div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  background-image: url('class-background-image.svg');\n  left: -60px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rhc2tzLWNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDSixVQUFBO0VBQ0EsZUFBQTtBQUVBOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUdJO0VBQ1EscUJBQUE7RUFDQSxVQUFBO0FBRFo7O0FBR0k7RUFDUSxXQUFBO0VBQ0osVUFBQTtFQUNBLGVBQUE7QUFEUjs7QUFLSTtFQUVZLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFKaEI7O0FBTUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxtREFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBSlIiLCJmaWxlIjoidGFza3MtY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1hZ2UtZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9jbGFzcy1iYWNrZ3JvdW5kLWltYWdlLnN2Zyk7XHJcbiAgICBsZWZ0OiAtNjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG53aWR0aDogNzAlO1xyXG5mb250LXNpemU6IDExcHg7XHJcblxyXG4vLyAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uY2FyZHMtZGVzY3JpcHRpb257XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBtYXJnaW46IDdweDtcclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgICAgIC8vICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAgIC8vICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtY29uc3RlbnR7XHJcbiAgICAgICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IDE4NztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAuYmFja2dyb3VuZC1pbWFnZS1kaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2NsYXNzLWJhY2tncm91bmQtaW1hZ2Uuc3ZnKTtcclxuICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "Ljmx":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks-calendar/tasks-calendar.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ljmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n     <ion-toolbar>\n     \t<ion-title>{{'sidemenu.tasks_calendar' | translate}} </ion-title>\n      </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"students\" *ngIf=\"true\" > \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let course of classes; let i=index\">\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"end\" id=\"ch{{i}}\" (ionChange)=\"selectUser(course,$event,i)\"></ion-checkbox>\n\t\t\t\t<!-- <ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar> -->\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{course.name}}</h4>\n\t\t\t    \t<p>{{course.desc}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>  \n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t</div>\n</ion-content>\n<ion-footer style=\"background: white;\">\n\t<ion-button *ngIf=\"type!='create'\" expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"openCalendar()\">\n\t\t{{'alertmessages.alert_btn_submit_text' | translate}}\n\t</ion-button>\n\t</ion-footer>";
      /***/
    },

    /***/
    "S0xo":
    /*!*******************************************************!*\
      !*** ./src/app/tasks-calendar/tasks-calendar.page.ts ***!
      \*******************************************************/

    /*! exports provided: TasksCalendarPage */

    /***/
    function S0xo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksCalendarPage", function () {
        return TasksCalendarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tasks_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tasks-calendar.page.html */
      "Ljmx");
      /* harmony import */


      var _tasks_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tasks-calendar.page.scss */
      "GcDc");
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

      var TasksCalendarPage = /*#__PURE__*/function () {
        function TasksCalendarPage(navCtrl, // public app: App,
        translate, dataProvider, authProvider, //public events: Events,
        alertCtrl, route, popoverController, zone, router, modalCtrl, actionSheet) {
          var _this = this;

          _classCallCheck(this, TasksCalendarPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.popoverController = popoverController;
          this.zone = zone;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.actionSheet = actionSheet;
          this.classes = [];
          this.selectedClass = [];
          this.noDataFound = "";
          this.lang = {};
          this.lang1 = {};
          this.data = [];
          this.dataAll = [];
          this.userDetails = {};
          this.classBackgroundColor = ["#ff7043", "#2962ff", "#43a047", "#6d4c41", "#ffab00", "#00b0ff", "#651fff", "#2962ff", "#d81b60", "#6a1b9a"];
          this.translate.get("sidemenu").subscribe(function (res) {
            _this.lang = res; //console.log(this.lang);
          });
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang1 = response;
          });
        }

        _createClass(TasksCalendarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              console.log('userDetails==>', this.userDetails);
              console.log("classes ==>", this.classes);
              this.userType = this.userDetails.details.user_type;
              this.getCourse(loader);
            } else {
              this.dataProvider.hideLoading(); //  console.log('not logged in');

              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              });
            }
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
            var _this2 = this;

            setTimeout(function () {
              _this2.popOver.dismiss();
            }, 500);
          }
        }, {
          key: "getCourse",
          value: function getCourse() {
            var _this3 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (loader) this.presentPopover();
            var data = {
              "user_no": this.userDetails.details.user_no,
              "school_id": this.userDetails.details.school_id,
              "session_id": this.userDetails.session_id
            };
            this.dataProvider.getCourses(data).then(function (response) {
              console.log('classes response', response);
              if (loader) _this3.dissmissPopOver();

              if (response.session) {
                _this3.dataProvider.syncOffileData();

                var courses = response.data;

                if (response.linkData != undefined) {
                  _this3.authProvider.piblisEvenetActiveLink(response.linkData); //this.events.publish("activeLink", response.linkData)

                }

                if (courses && courses.length > 0) {
                  var i = 0;
                  _this3.classes = courses;

                  _this3.classes.forEach(function (course) {
                    course.backgroundColor = _this3.classBackgroundColor[i];
                    i++;
                    if (i == 9) i = 0;
                  });
                } else {
                  _this3.noDataFound = _this3.lang.no_class_found;
                  _this3.classes = [];
                }
              } else {
                //  console.log('here');
                _this3.authProvider.flushLocalStorage(); // this.dataProvider.errorALertMessage(response.message);


                _this3.router.navigate(['login'], {
                  replaceUrl: true
                }); // this.app.getRootNav().setRoot("LoginPage");

              }
            })["catch"](function (error) {
              if (loader) _this3.dissmissPopOver(); // this.dataProvider.errorALertMessage(error);
            });
          }
        }, {
          key: "openCalendar",
          value: function openCalendar() {
            var _this4 = this;

            if (this.selectedClass.length < 1) {
              this.dataProvider.showToast(this.lang1.select_class);
            } else {
              var studentData = {
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "course_id": JSON.stringify(this.selectedClass),
                "school_id": this.userDetails.details.school_id
              };
              console.log("multiple classes==>", studentData);
              this.dataProvider.showLoading();
              this.dataProvider.getAllClassNotes(studentData).then(function (res) {
                _this4.dataProvider.hideLoading();

                console.log("res from tasl-calendarr", res);

                if (res) {
                  _this4.router.navigate(['note-calendar'], {
                    state: {
                      note: res,
                      state: _this4.selectedClass
                    }
                  });
                }
              })["catch"](function (error) {
                _this4.dataProvider.hideLoading();

                console.log(error);
              });
            }
          }
        }, {
          key: "selectUser",
          value: function selectUser(course, eve, id) {
            var _this5 = this;

            console.log('course=$$===>', course);

            if (eve.detail.checked == true) {
              this.selectedClass.push(course);
            } else {
              this.selectedClass.find(function (inc, ix) {
                if (inc.cid == course.cid) {
                  _this5.selectedClass.splice(ix, 1);
                }
              });
            }

            console.log(this.selectedClass);
          }
        }]);

        return TasksCalendarPage;
      }();

      TasksCalendarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }];
      };

      TasksCalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tasks-calendar',
        template: _raw_loader_tasks_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tasks_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])], TasksCalendarPage);
      /***/
    },

    /***/
    "VjtL":
    /*!*****************************************************************!*\
      !*** ./src/app/tasks-calendar/tasks-calendar-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TasksCalendarPageRoutingModule */

    /***/
    function VjtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksCalendarPageRoutingModule", function () {
        return TasksCalendarPageRoutingModule;
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


      var _tasks_calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tasks-calendar.page */
      "S0xo");

      var routes = [{
        path: '',
        component: _tasks_calendar_page__WEBPACK_IMPORTED_MODULE_3__["TasksCalendarPage"]
      }];

      var TasksCalendarPageRoutingModule = function TasksCalendarPageRoutingModule() {
        _classCallCheck(this, TasksCalendarPageRoutingModule);
      };

      TasksCalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TasksCalendarPageRoutingModule);
      /***/
    },

    /***/
    "blCk":
    /*!*********************************************************!*\
      !*** ./src/app/tasks-calendar/tasks-calendar.module.ts ***!
      \*********************************************************/

    /*! exports provided: TasksCalendarPageModule */

    /***/
    function blCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksCalendarPageModule", function () {
        return TasksCalendarPageModule;
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


      var _tasks_calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tasks-calendar-routing.module */
      "VjtL");
      /* harmony import */


      var _tasks_calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tasks-calendar.page */
      "S0xo");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var TasksCalendarPageModule = function TasksCalendarPageModule() {
        _classCallCheck(this, TasksCalendarPageModule);
      };

      TasksCalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _tasks_calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["TasksCalendarPageRoutingModule"]],
        declarations: [_tasks_calendar_page__WEBPACK_IMPORTED_MODULE_6__["TasksCalendarPage"]]
      })], TasksCalendarPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tasks-calendar-tasks-calendar-module-es5.js.map
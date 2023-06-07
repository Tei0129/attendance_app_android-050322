(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~note-calendar-note-calendar-module~view-notes-view-notes-module"], {
    /***/
    "4iJS":
    /*!*******************************************************!*\
      !*** ./src/app/note-calendar/note-calendar.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function iJS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button ion-icon {\n  margin-top: 20px;\n}\n\n.pdf-icon ion-icon {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGUtY2FsZW5kYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjs7QUFLSTtFQUNJLGVBQUE7QUFGUiIsImZpbGUiOiJub3RlLWNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGRmLWljb257XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7O1xyXG4gICAgfVxyXG59XHJcbiBcclxuIl19 */";
      /***/
    },

    /***/
    "W5TM":
    /*!***************************************************************!*\
      !*** ./src/app/note-calendar/note-calendar-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NoteCalendarPageRoutingModule */

    /***/
    function W5TM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteCalendarPageRoutingModule", function () {
        return NoteCalendarPageRoutingModule;
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


      var _note_calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./note-calendar.page */
      "vYxD");

      var routes = [{
        path: '',
        component: _note_calendar_page__WEBPACK_IMPORTED_MODULE_3__["NoteCalendarPage"]
      }];

      var NoteCalendarPageRoutingModule = function NoteCalendarPageRoutingModule() {
        _classCallCheck(this, NoteCalendarPageRoutingModule);
      };

      NoteCalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NoteCalendarPageRoutingModule);
      /***/
    },

    /***/
    "tXSK":
    /*!*******************************************************!*\
      !*** ./src/app/note-calendar/note-calendar.module.ts ***!
      \*******************************************************/

    /*! exports provided: NoteCalendarPageModule */

    /***/
    function tXSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteCalendarPageModule", function () {
        return NoteCalendarPageModule;
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


      var _note_calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./note-calendar-routing.module */
      "W5TM");
      /* harmony import */


      var _note_calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./note-calendar.page */
      "vYxD");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic2-calendar */
      "L+Ny");

      var NoteCalendarPageModule = function NoteCalendarPageModule() {
        _classCallCheck(this, NoteCalendarPageModule);
      };

      NoteCalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _note_calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoteCalendarPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]],
        declarations: [_note_calendar_page__WEBPACK_IMPORTED_MODULE_6__["NoteCalendarPage"]],
        entryComponents: [_note_calendar_page__WEBPACK_IMPORTED_MODULE_6__["NoteCalendarPage"]]
      })], NoteCalendarPageModule);
      /***/
    },

    /***/
    "vYxD":
    /*!*****************************************************!*\
      !*** ./src/app/note-calendar/note-calendar.page.ts ***!
      \*****************************************************/

    /*! exports provided: NoteCalendarPage */

    /***/
    function vYxD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteCalendarPage", function () {
        return NoteCalendarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_note_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./note-calendar.page.html */
      "zb2c");
      /* harmony import */


      var _note_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./note-calendar.page.scss */
      "4iJS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ion2-calendar */
      "zTSL");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");

      var NoteCalendarPage = /*#__PURE__*/function () {
        function NoteCalendarPage(modalctrl, router, route, dataProvider, printer, translate) {
          var _this = this;

          _classCallCheck(this, NoteCalendarPage);

          this.modalctrl = modalctrl;
          this.router = router;
          this.route = route;
          this.dataProvider = dataProvider;
          this.printer = printer;
          this.translate = translate;
          this.userDetails = {};
          this.note = [];
          this.eventSource = [];
          this.selectedDate = [];
          this.dates = [];
          this.calendarDateCount = 0;
          this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
              formatWeekViewHourColumn: function formatWeekViewHourColumn(date) {
                return null;
              }
            }
          };
          this.stateCids = [];

          if (this.router.getCurrentNavigation().extras.state) {
            this.note = this.router.getCurrentNavigation().extras.state.note;
            this.state = this.router.getCurrentNavigation().extras.state.state;
            this.fromPage = this.router.getCurrentNavigation().extras.state.page;
            console.log('NAV S TA T--', this.note);
          }

          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          /*Calendar days rendered with exam note days */

          this.note.forEach(function (element) {
            if (element.send_to == 'exam') {
              _this.eventSource.push({
                title: element.description,
                startTime: new Date(element.examNoteDate),
                endTime: new Date(element.examNoteDate)
              });
            }
          });
        }

        _createClass(NoteCalendarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            }
          }
        }, {
          key: "next",
          value: function next() {
            var mySwiper = document.querySelector('.swiper-container')['swiper'];
            mySwiper.slideNext();
          }
        }, {
          key: "back",
          value: function back() {
            var mySwiper = document.querySelector('.swiper-container')['swiper'];
            mySwiper.slidePrev();
          }
        }, {
          key: "onViewTitleChanged",
          value: function onViewTitleChanged(title) {
            var _this2 = this;

            var _a;

            this.viewTitle = title;
            var monthDays = document.querySelectorAll('.swiper-slide-active td:not(.text-muted)');

            if (monthDays.length) {
              var _loop = function _loop(d) {
                fullDate = new Date(((_a = monthDays[d]) === null || _a === void 0 ? void 0 : _a.innerText) + ' ' + _this2.viewTitle);

                _this2.dates.find(function (x) {
                  if (x == fullDate.toDateString()) {
                    if (_this2.dates.length == 1 && _this2.dates[0] == fullDate.toDateString()) {
                      _this2.dates.splice(0, 1);
                    } else {
                      monthDays[d].classList.add('calendar-bg-black');
                    }
                  }
                });
              };

              for (var d = 0; d < monthDays.length; d++) {
                var fullDate;

                _loop(d);
              }

              console.log('::fullDate this.dates::::::', this.dates);
            }
          }
        }, {
          key: "getEventClass",
          value: function getEventClass() {
            var evnCls = document.querySelectorAll('.monthview-primary-with-event');

            for (var i = 0; i < evnCls.length; i++) {
              evnCls[i].setAttribute('style', 'background:' + this.state.backgroundColor);
            }

            var withCurrent = document.querySelectorAll('.monthview-primary-with-event');
          }
        }, {
          key: "onCurrentDateChanged",
          value: function onCurrentDateChanged(en) {
            console.log('onCurrentDateChanged::::', en.toDateString());
            this.calendarDateCount++;
            var currentDate = new Date().toDateString();
            var dt = en.toDateString();
            var iof = this.dates.indexOf(dt);

            if (iof >= 0) {
              this.dates.splice(iof, 1);
            } else {
              this.dates.push(dt);
            }

            if (currentDate === dt && this.calendarDateCount <= 1) {
              this.dates.splice(0, 1);
            }

            console.log("dates array:::", this.dates);
          }
        }, {
          key: "tryOne",
          value: function tryOne(ev) {
            console.log('tryOne ev:::', ev);

            if (ev.target.tagName == 'TD') {
              if (ev.target.classList.value.indexOf('-black') > 0) {
                ev.target.classList.remove('calendar-bg-black');
                ev.target.classList.remove('monthview-selected');
              } else {
                ev.target.classList.add('calendar-bg-black');
              }
            }
          } // =================added on 28/12/2021 for print class note as pdf ================

        }, {
          key: "printReport",
          value: function printReport() {
            var _this3 = this;

            console.log("from page:::", this.fromPage);

            if (!this.dates.length) {
              this.dataProvider.showToast(this.lang.select_date);
            }

            this.stateCids = [];

            if (this.fromPage == 'student-note') {
              console.log("from page:::", this.fromPage);

              if (this.note.length > 0 && this.note[0].cid) {
                this.stateCids.push(this.note[0].cid);
              }
            } else {
              if (this.state.cid) {
                this.stateCids.push(this.state.cid);
              } else {
                this.state.forEach(function (st) {
                  _this3.stateCids.push(st.cid);
                });
              }
            }

            var data = {
              course_id: JSON.stringify(this.stateCids),
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              title: this.viewTitle,
              dates: JSON.stringify(this.dates)
            };
            console.log("dates formt::", this.dates);
            this.dataProvider.printAllClassNotes(data).then(function (data) {
              console.log("pdfres:::", data);

              _this3.dataProvider.hideLoading();

              if (data) {
                var options = {
                  orientation: 'portrait'
                };

                _this3.printer.print(data.data, options).then(function (onSuccess) {}, function (e) {
                  console.log('printer.print', e);
                });
              }
            })["catch"](function (er) {
              _this3.dataProvider.hideLoading();

              _this3.dataProvider.showToast(er);
            });
          }
        }]);

        return NoteCalendarPage;
      }();

      NoteCalendarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_5__["Printer"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      NoteCalendarPage.propDecorators = {
        myCal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [ion2_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"], null]
        }]
      };
      NoteCalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-note-calendar',
        template: _raw_loader_note_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_note_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_5__["Printer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])], NoteCalendarPage);
      /***/
    },

    /***/
    "zb2c":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note-calendar/note-calendar.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zb2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n   <ion-back-button></ion-back-button>  \n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-button class=\"text-center\" class=\"pdf-icon\" (click)=\"printReport()\">\n        <ion-icon slot=\"icon-only\" name=\"print-outline\"></ion-icon>  \n      </ion-button>  \n    </ion-buttons>\n    <ion-title>Note Calendar</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n     \n    </ion-col>\n    <ion-col size=\"8\" class=\"ion-text-center\">\n     <h2> {{viewTitle}}</h2> \n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n     \n    </ion-col>\n  </ion-row>\n  \n  <ng-template #template let-displayEvent=\"displayEvent\">\n    <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n  </ng-template>\n\n <calendar  \n  [eventSource]=\"eventSource\"\n  [calendarMode]=\"calendar.mode\"\n  [currentDate]=\"calendar.currentDate\"\n  (onTitleChanged)=\"onViewTitleChanged($event)\"  \n  [ngClass]=\"getEventClass()\"\n  [dateFormatter]=\"calendar.dateFormatter\"                         \n  (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\n  (click)=\"tryOne($event)\"\n ></calendar>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~note-calendar-note-calendar-module~view-notes-view-notes-module-es5.js.map
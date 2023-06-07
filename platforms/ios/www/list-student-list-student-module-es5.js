(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-student-list-student-module"], {
    /***/
    "0Q/y":
    /*!***************************************************!*\
      !*** ./src/app/list-student/list-student.page.ts ***!
      \***************************************************/

    /*! exports provided: ListStudentPage */

    /***/
    function QY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListStudentPage", function () {
        return ListStudentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-student.page.html */
      "4mDO");
      /* harmony import */


      var _list_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-student.page.scss */
      "Lz22");
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


      var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../add-review/add-review.component */
      "YXaF");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt"); //import { TabsPage } from '../tabs/tabs';


      var ListStudentPage = /*#__PURE__*/function () {
        /**
         *
         * @param router Use for navigation between pages
         * @param ActivatedRoute Use to get the value passed from previous page
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param translate For transaltion messages
         * @param alertCtrl Alert controller object of AlertController class
         * @param camera Used for taking picture from camera plugin
         * @param network Network object of plugin NetworkInformation
         * @param platform platform object
         */
        function ListStudentPage(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, route, router, zone, printer, modalController, actionSheetController, platform) {
          var _this = this;

          _classCallCheck(this, ListStudentPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.route = route;
          this.router = router;
          this.zone = zone;
          this.printer = printer;
          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.platform = platform;
          this.showCalenderModal = false;
          this.showProfileModal = false;
          this.noDataFound = "";
          this.totalSem = 7;
          this.student = {};
          this.canEdit = false;
          this.attendanceResponse = {};
          this.userDetails = {};
          this.attMarkBegin = false;
          this.selectedSem = -1;
          this.lang = {};
          this.students = [];
          this.attendanceSheet = {};
          this.removeSheet = {};
          this.attMarked = false;
          this.editMode = false;
          this.currentEvents = [];
          this.holidayString = "";
          this.isHoliday = false;
          this.studentBehaviour = '';
          this.courseInfo = {};
          this.showAll = true;
          this.classAll = ['', '', '', '', '', '', '', ''];
          this.options = {
            canBackwardsSelected: true,
            from: 1,
            to: 0,
            disableWeeks: [],
            daysConfig: []
          };
          this.canAddStudent = false;
          this.noteMessage = "";
          this.canAddStudentNote = true;
          this.ratingStars = 1;
          this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
          this.showNoteModal = false;
          this.show_loading = false;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state.course;
              console.log('navdatacourse', _this.navData);
            }
          });
          this.dateSelected = new Date();
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
          this.translate.get("plan").subscribe(function (val) {
            _this.planLang = val;
          });
        }

        _createClass(ListStudentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.show_loading = true;

            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.userType = this.userDetails.details.user_type;

              if (this.userType == '1') {}

              var data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
              };
              this.dataProvider.getHolidays(data).then(function (response) {
                if (response) {
                  if (response.holidays.length > 0) {
                    _this2.holidayString = response.holiday_string;
                    response.holidays.forEach(function (holiday) {
                      var date = new Date(holiday.date);
                      var p = {
                        date: holiday.date,
                        disable: true
                      };

                      _this2.options.daysConfig.push(p);

                      _this2.currentEvents.push({
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        date: date.getDate()
                      });
                    });
                  }

                  var day = _this2.dateSelected.getDate();

                  day = day < 10 ? '0' + day : day;

                  var month = _this2.dateSelected.getMonth();

                  month = month + 1;
                  month = month < 10 ? '0' + month : month;
                  var strint_date = _this2.dateSelected.getFullYear() + '-' + month + '-' + day;

                  if (_this2.holidayString.indexOf(strint_date) > -1) {
                    _this2.isHoliday = true;
                  } else {
                    _this2.isHoliday = false;
                  }
                }
              })["catch"](function (error) {
                _this2.dataProvider.hideLoading();

                _this2.dataProvider.errorALertMessage(error);
              });
              this.getStudents();
            } else {
              this.dataProvider.hideLoading();
              this.authProvider.flushLocalStorage();
              this.router.navigate(['login'], {
                replaceUrl: true
              });
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {} //Add Notes directly to student profile new code

          /*  addNotes(data){
             console.log('student data navData',this.navData);
            const navigation : NavigationExtras = {
              state:{
                state:this.navData,
                notesTo:'LIST',
                mynav:data
               
              }
            };
            this.zone.run(()=>{
              this.router.navigate(['add-notes'],navigation);
            })
           } */

          /**
           * get the list of students from provider
           */

        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this3 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.show_loading = true; //  if(loader) this.dataProvider.showLoading();

            var course = this.navData;
            this.courseInfo = course;
            var studentData = {
              "date": this.dataProvider.getFormatedDate(this.dateSelected),
              "user_no": this.userDetails.details.user_no,
              "session_id": this.userDetails.session_id,
              "course_id": course.cid,
              "school_id": this.userDetails.details.school_id
            };

            if (localStorage.getItem("classlocalatt")) {
              var attendance = JSON.parse(localStorage.getItem("classlocalatt"));
              Object.keys(attendance).map(function (courseId) {
                if (!_this3.checkCurrentDate(new Date(attendance[courseId].date)) && localStorage.getItem("classlocalatt")) {
                  localStorage.removeItem("classlocalatt");
                }
              });
            }

            this.dataProvider.getClassStudentList(studentData).then(function (res) {
              //  if(loader) this.dataProvider.hideLoading();
              _this3.show_loading = false;

              if (res.session) {
                _this3.canAddStudent = false;

                if (res.data) {
                  if (_this3.userType == '3' && res.data.canAddStudent) {
                    _this3.canAddStudent = true;
                  }
                }

                _this3.attMarkBegin = false;
                _this3.canEdit = false;
                _this3.selectedSem = -1;
                res.data.students.forEach(function (student) {
                  student.studentBehaviour = _this3.getStudentBehaviour(student.agg_ranking);
                });
                _this3.attendanceResponse = res.data;
                _this3.attendanceSheet = {};
                _this3.removeSheet = {};
                _this3.attMarked = false;
                _this3.editMode = false;
                _this3.lastSemAtt = parseInt(res.data.last_cem);
                localStorage.setItem('class_total_sem', res.data.totalsems);
                _this3.students = JSON.parse(JSON.stringify(res.data.students));
                if (_this3.attendanceResponse.totalsems) _this3.totalSem = parseInt(_this3.attendanceResponse.totalsems);

                _this3.checkEditModeOfUser();

                if (_this3.attendanceResponse.students && _this3.attendanceResponse.students.length == 0) {
                  _this3.noDataFound = _this3.lang.no_students_in_class;
                }

                if (_this3.checkDateSelected(new Date())) {
                  if (localStorage.getItem("classlocalatt")) {
                    var localAtt = {};
                    localAtt = JSON.parse(localStorage.getItem("classlocalatt"));
                    _this3.attendanceResponse.date = _this3.dataProvider.getFormatedDate(_this3.dateSelected);
                    localAtt[course.cid] = _this3.attendanceResponse;
                    localStorage.setItem("classlocalatt", JSON.stringify(localAtt));
                  } else {
                    var _localAtt = {};
                    _this3.attendanceResponse.date = _this3.dataProvider.getFormatedDate(_this3.dateSelected);
                    _localAtt[course.cid] = _this3.attendanceResponse;

                    _this3.dataProvider.getFormatedDate(_this3.dateSelected);

                    localStorage.setItem("classlocalatt", JSON.stringify(_localAtt));
                  }
                }

                console.log('attendanceResponse', _this3.attendanceResponse);
              } else {
                //  if(loader) this.dataProvider.hideLoading();
                _this3.show_loading = false;

                _this3.authProvider.flushLocalStorage();

                _this3.dataProvider.errorALertMessage(res.message);

                _this3.router.navigate(['login'], {
                  replaceUrl: true
                }); // this.app.getRootNav().setRoot("LoginPage");

              }
            });
          }
        }, {
          key: "viewNote",
          value: function viewNote() {
            var _this4 = this;

            var navigation = {
              state: {
                course: this.navData,
                course_id: this.navData.cid,
                dateSelected: this.dataProvider.getFormatedDate(this.dateSelected),
                students: this.students
              }
            }; //console.log(navigation);

            this.zone.run(function () {
              _this4.router.navigate(['view-notes'], navigation);
            });
          }
          /**
          * Check the attendance edit mode of user
          */

        }, {
          key: "checkEditModeOfUser",
          value: function checkEditModeOfUser() {
            // admin check
            console.log(this.userType);

            if (this.userType == "1") {
              this.canEdit = true;
            } else if (this.userType == "2") {
              // teacher check
              this.checkTeacherEditPowers();
            } else if (this.userType == "3") {
              // moderator check
              this.checkModeratorEditPowers();
            } else if (this.userType == "4") {// parent check
            }
          }
          /**
           * check the power of teacher for edit mode
           */

        }, {
          key: "checkTeacherEditPowers",
          value: function checkTeacherEditPowers() {
            var _this5 = this;

            this.dataProvider.postRequest({}, "ManroxTeacherAllowedForEditChk/" + this.userDetails.details.user_no).then(function (response) {
              // if (response && response.isSubmitted && response.editPermission && response.allotedtime != null && response.time_diffrence != null && (parseInt(response.allotedtime) - parseInt(response.time_diffrence)) > 0) {
              //   console.log('response',response);
              //   this.canEdit = true;
              //   this.timeLeft = response.allotedtime - response.time_diffrence;
              //   this.teacher_type=response.teacher_type;
              //   let interval = setInterval(() => {
              //     this.timeLeft--;
              //     if (this.timeLeft <= 0) {
              //       this.canEdit = false;
              //       clearInterval(interval);
              //     }
              //   }, 1000);
              // }else{
              //   if(res.isSubmitted)
              // }
              _this5.teacher_type = response.teacher_type;
              console.log(response.teacher_type);

              if (response && response.editPermission) {
                console.log('response && response.editPermission', response, response.editPermission);

                if (response.isSubmitted && response.allotedtime != null) {
                  _this5.canEdit = true;
                  _this5.showAll = false;
                  _this5.timeLeft = response.allotedtime - response.time_diffrence;
                  var interval = setInterval(function () {
                    _this5.timeLeft--;
                    console.log("TIME_LEFT", _this5.timeLeft);

                    if (_this5.timeLeft <= 0) {
                      console.log(_this5.timeLeft);
                      _this5.showAll = true;
                      _this5.canEdit = false;
                      clearInterval(interval);
                    }
                  }, 1000);
                } else {
                  _this5.canEdit = false;
                }
              }
            })["catch"](function (error) {
              console.log("error1");

              _this5.dataProvider.errorALertMessage(error);
            });
          }
          /**
          * check the power of moderator for edit mode
          */

        }, {
          key: "checkModeratorEditPowers",
          value: function checkModeratorEditPowers() {
            var _this6 = this;

            this.dataProvider.postRequest({}, "ManroxModeratorAllowedForEditChk/" + this.userDetails.details.user_no).then(function (response) {
              if (response) {
                var currentDate = new Date();

                if (response && currentDate.getTime() - _this6.dateSelected.getTime() < 172800000) {
                  _this6.canEdit = true;
                }
              }
            })["catch"](function (error) {
              _this6.dataProvider.errorALertMessage(error);
            });
          }
          /**
           * Open student detail page
           * @param student_id Id of the student you want to see the details
           */

        }, {
          key: "openStudentDetail",
          value: function openStudentDetail(student_id) {
            var _this7 = this;

            if (!this.attMarkBegin) {
              var navigation = {
                state: {
                  student_id: student_id,
                  course_id: this.navData.cid,
                  dateSelected: this.dataProvider.getFormatedDate(this.dateSelected)
                }
              };
              this.zone.run(function () {
                _this7.router.navigate(['student-detail'], navigation);
              });
            } else {
              this.dataProvider.showToast(this.lang.complete_att_submission);
            }
          }
          /**
           * Open image modal popup
           * @param student Object of student details to show in image popup
           */

        }, {
          key: "openUserImageModal",
          value: function openUserImageModal(student) {
            if (!this.attMarkBegin) {
              this.student = student;
              console.log(this.student);
              this.showProfileModal = true;
            } else {
              this.dataProvider.showToast(this.lang.complete_att_submission);
            }
          }
          /**
           * Return the behaviour of the student
           * @param agg_ranking ranking
           */

        }, {
          key: "getStudentBehaviour",
          value: function getStudentBehaviour(agg_ranking) {
            if (agg_ranking > 0 && agg_ranking < 2.6) {
              return this.lang.warning_behaviour;
            } else if (agg_ranking > 2.5 && agg_ranking < 3.6) {
              return this.lang.good_behaviour;
            } else if (agg_ranking > 3.5 && agg_ranking < 4.6) {
              return this.lang.very_good_behaviour;
            } else if (agg_ranking > 4.5 && agg_ranking < 5.1) {
              return this.lang.excellent_behaviour;
            } else {
              return this.lang.no_behaviour;
            }
          }
          /**
           * Hide image modal popup
           */

        }, {
          key: "hideUserImageModal",
          value: function hideUserImageModal(event) {
            if (event.target.className == "custom-modal-main") {
              this.showProfileModal = false;
            }
          }
          /**
           * Use to open the calender
           */

        }, {
          key: "openCalenderModal",
          value: function openCalenderModal() {
            if (this.platform.is('cordova')) {
              if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                this.showCalenderModal = true;
                var query = document.getElementsByName('ios-arrow-forward');
                var query1 = document.getElementsByName('ios-arrow-back');
                var query2 = document.getElementsByName('md-arrow-dropdown');
                console.log(query2);
                setTimeout(function () {
                  query[0]['name'] = "chevron-forward-outline";
                  query1[0]['name'] = "chevron-back-outline";
                  query2[0]['name'] = "chevron-down-outline";
                }, 500);
              } else {
                this.dataProvider.showToast(this.lang.no_internet);
              }
            } else {
              this.showCalenderModal = true;

              var _query = document.getElementsByName('ios-arrow-forward');

              var _query2 = document.getElementsByName('ios-arrow-back');

              var _query3 = document.getElementsByClassName('arrow-dropdown');

              console.log(_query3);
              setTimeout(function () {
                _query[0]['name'] = "chevron-forward-outline";
                _query2[0]['name'] = "chevron-back-outline";
                _query3[0]['name'] = "chevron-down-outline";
              }, 500);
            }
          }
          /**
           * Use to hide the calender
           */

        }, {
          key: "hideCalenderModal",
          value: function hideCalenderModal() {
            this.showCalenderModal = false;
          }
          /** calender event
           * Triggered when user select the date from the calender
           * @param event calender event to get the selected date
           */

        }, {
          key: "onDaySelect",
          value: function onDaySelect(event) {
            if (event != undefined && event != null) {
              var date = new Date(event);
              console.log(event);
              var day = event.date;
              day = day < 10 ? '0' + day : day;
              var month = event.month;
              month = month + 1;
              month = month < 10 ? '0' + month : month;
              var strint_date = event.year + '-' + month + '-' + day;

              if (this.holidayString.indexOf(event) == -1) {
                this.dateSelected = date;
                var currentDate = new Date();

                if (this.dateSelected.getTime() <= currentDate.getTime()) {
                  this.isHoliday = false;
                  this.hideCalenderModal();
                  this.getStudents();
                } else {
                  this.dataProvider.showToast(this.lang.future_date);
                }
              } else {
                this.dataProvider.showToast(this.lang.holiday);
              }
            }
          }
          /**
           * @returns array of number of semesters
           */

        }, {
          key: "getSemArray",
          value: function getSemArray() {
            return new Array(this.totalSem);
          }
          /**
           * For enabling editing mode
           */

        }, {
          key: "enableEditingMode",
          value: function enableEditingMode() {
            this.editMode = true;
            this.dataProvider.showToast(this.lang.edit_mode_enabled);
          }
          /**
           * Change the status of the attendance
           * @param student student object whose attendance is selected to change
           * @param sem semeseter
           */

        }, {
          key: "changeAttendanceStatus___old",
          value: function changeAttendanceStatus___old(student, sem) {
            // console.log(this.canEdit);
            if (!this.isHoliday) {
              var date = new Date();

              if (!this.canEdit && !this.checkDateSelected(date)) {
                this.dataProvider.showToast(this.lang.not_allowed_att_date);
              } else {
                if (this.selectedSem != sem && this.selectedSem != -1 && this.userType != '1') {
                  this.dataProvider.showToast(this.lang.att_not_complete_err);
                } else if (student.sheet['cem-' + (sem + 1)] == '3') {
                  this.dataProvider.showToast(this.lang.delay_att_mod_error);
                } else if (this.lastSemAtt >= sem + 1 && !this.canEdit && this.attendanceResponse.semteacher['sem-' + (sem + 1)] != undefined) {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (this.canEdit && !this.editMode) {
                  this.dataProvider.showToast(this.lang.enable_edit);
                } else if (this.canEdit && student.sheet['cem-' + (sem + 1)] != undefined && student.sheet['entered_by-' + (sem + 1)] != this.userDetails.details.user_no && this.userType == "2") {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (student.suspend_leave && student.medical_leave || student.sheet['api_side-' + (sem + 1)] == '1') {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else {
                  if (this.userType == '2' || this.userType == '3') {
                    if (this.selectedSem == -1) {
                      this.selectedSem = sem;
                      this.attMarkBegin = true;
                      this.attendanceSheet['cem-' + (sem + 1)] = {};
                    }

                    if (student.sheet['cem-' + (sem + 1)] == '1') {
                      // present
                      this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '0';
                      student.sheet['cem-' + (sem + 1)] = '0'; // mark absent
                    } else {
                      student.sheet['cem-' + (sem + 1)] = '1'; // mark present

                      this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '1';
                    }

                    var totalAttendanceMarked = 0;
                    this.attendanceResponse.students.forEach(function (item) {
                      if (item.sheet['cem-' + (sem + 1)] != undefined && item.sheet['cem-' + (sem + 1)] != 'undefined') {
                        totalAttendanceMarked++;
                      }
                    });
                    this.attMarked = this.students.length == totalAttendanceMarked ? true : false;
                  } else if (this.userType == '1') {
                    if (this.attendanceSheet['cem-' + (sem + 1)] == undefined) {
                      this.attendanceSheet['cem-' + (sem + 1)] = {};
                      this.attMarkBegin = true;
                    }

                    if (student.sheet['cem-' + (sem + 1)] == '1') {
                      // present
                      student.sheet['cem-' + (sem + 1)] = '0'; // mark absent

                      this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '0';

                      if (this.removeSheet[sem + 1 + '-' + student.sid] != undefined) {
                        delete this.removeSheet[sem + 1 + '-' + student.sid];
                      }
                    } else if (student.sheet['cem-' + (sem + 1)] == '0' && this.userType == '1') {
                      student.sheet['cem-' + (sem + 1)] = 'undefined'; // remove attendance

                      delete this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid];
                      this.removeSheet[sem + 1 + '-' + student.sid] = {
                        sid: student.sid,
                        sem: sem + 1
                      };
                    } else {
                      student.sheet['cem-' + (sem + 1)] = '1'; // mark present

                      this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '1';

                      if (this.removeSheet[sem + 1 + '-' + student.sid] != undefined) {
                        delete this.removeSheet[sem + 1 + '-' + student.sid];
                      }
                    }
                  }
                }
              }
            } else {
              this.dataProvider.showToast(this.lang.holiday);
            }
          }
        }, {
          key: "changeAttendanceStatus",
          value: function changeAttendanceStatus(student, sem, ind) {
            console.log('changeSTUDENT-', student);
            console.log('changeSNO-', sem);
            console.log('changeIND-', ind);

            if (!this.isHoliday) {
              var date = new Date();

              if (!this.canEdit && !this.checkDateSelected(date)) {
                this.dataProvider.showToast(this.lang.not_allowed_att_date);
              } else {
                if (this.selectedSem != sem && this.selectedSem != -1 && this.userType != '1') {
                  console.log('1');
                  this.dataProvider.showToast(this.lang.att_not_complete_err);
                } else if (student.sheet['cem-' + (sem + 1)] == '3') {
                  console.log('2');
                  this.dataProvider.showToast(this.lang.delay_att_mod_error);
                } else if (this.lastSemAtt >= sem + 1 && !this.canEdit && this.attendanceResponse.semteacher['sem-' + (sem + 1)] != undefined && this.teacher_type != 'split') {
                  console.log('3-sem-', sem);
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (student.sheet['cem-' + (sem + 1)] && student.sheet['entered_by-' + (sem + 1)] && !this.editMode && this.teacher_type == 'split') {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } //new condition for split
                else if (this.canEdit && !this.editMode) {
                    console.log('4');
                    this.dataProvider.showToast(this.lang.enable_edit);
                  } else if (this.canEdit && student.sheet['cem-' + (sem + 1)] != undefined && student.sheet['entered_by-' + (sem + 1)] != this.userDetails.details.user_no && this.userType == "2") {
                    console.log('5');
                    this.dataProvider.showToast(this.lang.att_modification_error);
                  } else if (student.suspend_leave && student.medical_leave || student.sheet['api_side-' + (sem + 1)] == '1') {
                    console.log('6');
                    this.dataProvider.showToast(this.lang.att_modification_error);
                  } else {
                    if (this.userType == '2' || this.userType == '3') {
                      console.log('7');

                      if (this.selectedSem == -1) {
                        this.selectedSem = sem;
                        this.attMarkBegin = true;
                        this.attendanceSheet['cem-' + (sem + 1)] = {};
                      }

                      if (student.sheet['cem-' + (sem + 1)] == '1') {
                        // present
                        this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '0';
                        student.sheet['cem-' + (sem + 1)] = '0'; // mark absent
                      } else {
                        student.sheet['cem-' + (sem + 1)] = '1'; // mark present

                        this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '1';
                      }

                      var totalAttendanceMarked = 0;
                      this.attendanceResponse.students.forEach(function (item) {
                        if (item.sheet['cem-' + (sem + 1)] != undefined && item.sheet['cem-' + (sem + 1)] != 'undefined') {
                          totalAttendanceMarked++;
                        }
                      });
                      this.attMarked = this.students.length == totalAttendanceMarked ? true : false;
                    } else if (this.userType == '1') {
                      if (this.attendanceSheet['cem-' + (sem + 1)] == undefined) {
                        this.attendanceSheet['cem-' + (sem + 1)] = {};
                        this.attMarkBegin = true;
                      }

                      if (student.sheet['cem-' + (sem + 1)] == '1') {
                        // present
                        student.sheet['cem-' + (sem + 1)] = '0'; // mark absent

                        this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '0';

                        if (this.removeSheet[sem + 1 + '-' + student.sid] != undefined) {
                          delete this.removeSheet[sem + 1 + '-' + student.sid];
                        }
                      } else if (student.sheet['cem-' + (sem + 1)] == '0' && this.userType == '1') {
                        student.sheet['cem-' + (sem + 1)] = 'undefined'; // remove attendance

                        delete this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid];
                        this.removeSheet[sem + 1 + '-' + student.sid] = {
                          sid: student.sid,
                          sem: sem + 1
                        };
                      } else {
                        student.sheet['cem-' + (sem + 1)] = '1'; // mark present

                        this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = '1';

                        if (this.removeSheet[sem + 1 + '-' + student.sid] != undefined) {
                          delete this.removeSheet[sem + 1 + '-' + student.sid];
                        }
                      }
                    }
                  }
              }
            } else {
              this.dataProvider.showToast(this.lang.holiday);
            }
          }
          /** mark all studence attendence
             **/

        }, {
          key: "changeStatusAllStudents",
          value: function changeStatusAllStudents(student, sem, status) {
            // console.log(this.canEdit);
            if (!this.isHoliday) {
              var date = new Date();

              if (!this.canEdit && !this.checkDateSelected(date)) {
                console.log(this.canEdit); // this.dataProvider.showToast(this.lang.not_allowed_att_date);
              } else {
                if (this.selectedSem != sem && this.selectedSem != -1 && this.userType != '1') {
                  console.log(this.canEdit); //  this.dataProvider.showToast(this.lang.att_not_complete_err);
                } else if (student.sheet['cem-' + (sem + 1)] == '3') {
                  console.log(this.canEdit); //  this.dataProvider.showToast(this.lang.delay_att_mod_error);
                } else if (this.lastSemAtt >= sem + 1 && !this.canEdit && this.attendanceResponse.semteacher['sem-' + (sem + 1)] != undefined && this.teacher_type != 'split') {
                  console.log(this.canEdit); //  this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (student.sheet['cem-' + (sem + 1)] && student.sheet['entered_by-' + (sem + 1)] && !this.editMode && this.teacher_type == 'split') {// this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (this.canEdit && !this.editMode) {//  this.dataProvider.showToast(this.lang.enable_edit);
                } // else if (this.canEdit && student.sheet['cem-' + (sem + 1)] != undefined && student.sheet['entered_by-' + (sem + 1)] != this.userDetails.details.user_no && this.userType == "2") {
                //  console.log(this.canEdit);
                //   this.dataProvider.showToast(this.lang.att_modification_error);
                // }
                else if (student.suspend_leave && student.medical_leave || student.sheet['api_side-' + (sem + 1)] == '1') {
                    console.log(this.canEdit); //  this.dataProvider.showToast(this.lang.att_modification_error);
                  } else {
                    if (this.attendanceSheet['cem-' + (sem + 1)] == undefined) {
                      this.attendanceSheet['cem-' + (sem + 1)] = {};
                      this.attMarkBegin = true;
                    }

                    this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid] = status;

                    if (this.userType == '2' || this.userType == '3') {
                      if (this.selectedSem == -1) {
                        this.selectedSem = sem;
                        this.attMarkBegin = true;
                      }

                      if (student.sheet['cem-' + (sem + 1)] == '1') {
                        // present
                        student.sheet['cem-' + (sem + 1)] = status; // mark absent
                      } else {
                        student.sheet['cem-' + (sem + 1)] = status; // mark present
                      }

                      var totalAttendanceMarked = 0;
                      this.attendanceResponse.students.forEach(function (item) {
                        if (item.sheet['cem-' + (sem + 1)] != undefined && item.sheet['cem-' + (sem + 1)] != 'undefined') {
                          totalAttendanceMarked++;
                        }
                      });
                      this.attMarked = this.students.length == totalAttendanceMarked ? true : false;
                    }

                    if (this.userType == '1') {
                      if (student.sheet['cem-' + (sem + 1)] == '1') {
                        // present
                        student.sheet['cem-' + (sem + 1)] = status; // mark absent

                        if (this.removeSheet[sem + 1 + '-' + student.sid] != undefined) {
                          delete this.removeSheet[sem + 1 + '-' + student.sid];
                        }
                      } else if (student.sheet['cem-' + (sem + 1)] == '0' && this.userType == '1') {
                        student.sheet['cem-' + (sem + 1)] = status; // remove attendance

                        delete this.attendanceSheet['cem-' + (sem + 1)]['sid-' + student.sid];
                        this.removeSheet[sem + 1 + '-' + student.sid] = {
                          sid: student.sid,
                          sem: sem + 1
                        };
                      } else {
                        student.sheet['cem-' + (sem + 1)] = status; // mark present

                        if (this.removeSheet[sem + 1 + '-' + student.sid] != undefined) {
                          delete this.removeSheet[sem + 1 + '-' + student.sid];
                        }
                      }
                    } // console.log(this.attendanceSheet);

                  }
              }
            } else {
              this.dataProvider.showToast(this.lang.holiday);
            }
          }
        }, {
          key: "changeAttendanceStatusAll",
          value: function changeAttendanceStatusAll(sem) {
            var _this8 = this;

            var date = new Date();

            if (!this.isHoliday) {
              if (!this.canEdit && !this.checkDateSelected(date)) {
                this.dataProvider.showToast(this.lang.not_allowed_att_date);
              } else {
                if (this.selectedSem != sem && this.selectedSem != -1 && this.userType != '1') {
                  this.dataProvider.showToast(this.lang.att_not_complete_err);
                } else if (this.lastSemAtt >= sem + 1 && !this.canEdit && this.attendanceResponse.semteacher['sem-' + (sem + 1)] != undefined && this.teacher_type != 'split') {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (this.canEdit && !this.editMode) {
                  this.dataProvider.showToast(this.lang.enable_edit);
                } else {
                  var status = 'undefined';

                  if (this.userType == '1') {
                    if (this.classAll[sem] == '') {
                      this.classAll[sem] = 'present';
                      status = '1';
                    } else if (this.classAll[sem] == 'present') {
                      this.classAll[sem] = 'absent';
                      status = '0';
                    } else if (this.classAll[sem] == 'absent') {
                      this.classAll[sem] = '';
                      status = 'undefined';
                    }
                  } else {
                    if (this.classAll[sem] == '') {
                      this.classAll[sem] = 'present';
                      status = '1';
                    } else if (this.classAll[sem] == 'present') {
                      this.classAll[sem] = 'absent';
                      status = '0';
                    } else if (this.classAll[sem] == 'absent') {
                      this.classAll[sem] = 'present';
                      status = '1';
                    }
                  }

                  this.attendanceResponse.students.forEach(function (student) {
                    _this8.changeStatusAllStudents(student, sem, status);
                  });
                }
              }
            }
          }
        }, {
          key: "changeAttendanceStatusAll____OLD",
          value: function changeAttendanceStatusAll____OLD(sem) {
            var _this9 = this;

            console.log('sem', sem);
            var date = new Date();

            if (!this.isHoliday) {
              if (!this.canEdit && !this.checkDateSelected(date)) {
                this.dataProvider.showToast(this.lang.not_allowed_att_date);
              } else {
                if (this.selectedSem != sem && this.selectedSem != -1 && this.userType != '1') {
                  this.dataProvider.showToast(this.lang.att_not_complete_err);
                } else if (this.lastSemAtt >= sem + 1 && !this.canEdit && this.attendanceResponse.semteacher['sem-' + (sem + 1)] != undefined) {
                  this.dataProvider.showToast(this.lang.att_modification_error);
                } else if (this.canEdit && !this.editMode) {
                  this.dataProvider.showToast(this.lang.enable_edit);
                } else {
                  this.attendanceResponse.students.forEach(function (student) {
                    console.log(student);

                    _this9.changeAttendanceStatus(student, sem, '');
                  });

                  if (this.classAll[sem] == '') {
                    this.classAll[sem] = 'present';
                  } else if (this.classAll[sem] == 'present') {
                    this.classAll[sem] = 'absent';
                  } else if (this.classAll[sem] == 'absent') {
                    this.classAll[sem] = '';
                  }
                }
              }
            } else {
              this.dataProvider.showToast(this.lang.holiday);
            }
          }
          /**
           * function to match the dates
           * @param date date with which compare the selected date
           */

        }, {
          key: "checkDateSelected",
          value: function checkDateSelected(date) {
            if (date.getDate() == this.dateSelected.getDate() && date.getMonth() == this.dateSelected.getMonth() && date.getFullYear() == this.dateSelected.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
          /**
           * function to caheck the current date
           * @param date date with which compare the current date
           */

        }, {
          key: "checkCurrentDate",
          value: function checkCurrentDate(date) {
            var currentDate = new Date();

            if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()) {
              return true;
            } else {
              return false;
            }
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN)) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 3;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this10.openCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this10.openGallery();
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      _context.next = 9;
                      break;

                    case 8:
                      this.dataProvider.showToast(this.lang.no_internet);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this11 = this;

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
                _this11.dataProvider.showLoading();

                var data = {
                  user_no: _this11.userDetails.details.user_no,
                  session_id: _this11.userDetails.session_id,
                  imageData: "data:image/png;base64," + imageData,
                  sid: _this11.student.sid
                };

                _this11.dataProvider.updateUserImage(data).then(function (response) {
                  _this11.dataProvider.hideLoading();

                  if (response.session) {
                    _this11.student.pic = response.url;
                  } else {
                    _this11.authProvider.flushLocalStorage();

                    _this11.dataProvider.errorALertMessage(response.message);

                    _this11.router.navigate(['login'], {
                      replaceUrl: true
                    }); // this.app.getRootNav().setRoot("LoginPage");

                  }
                })["catch"](function (error) {
                  _this11.dataProvider.hideLoading();

                  _this11.dataProvider.errorALertMessage(error);
                });
              }
            });
          }
          /**
           * Open gallery to take image
           */

        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this12 = this;

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
                _this12.dataProvider.showLoading();

                var data = {
                  user_no: _this12.userDetails.details.user_no,
                  session_id: _this12.userDetails.session_id,
                  imageData: "data:image/png;base64," + imageData,
                  sid: _this12.student.sid
                };

                _this12.dataProvider.updateUserImage(data).then(function (response) {
                  _this12.dataProvider.hideLoading();

                  if (response.session) {
                    _this12.student.pic = response.url;
                  } else {
                    _this12.authProvider.flushLocalStorage();

                    _this12.dataProvider.errorALertMessage(response.message);

                    _this12.router.navigate(['login'], {
                      replaceUrl: true
                    }); // this.app.getRootNav().setRoot("LoginPage");

                  }
                })["catch"](function (error) {
                  _this12.dataProvider.hideLoading();

                  _this12.dataProvider.errorALertMessage(error);
                });
              }
            });
          }
          /**
           * Function to show the teacher name who marked the attendance
           * @param semTeacher contains the teacher name
           */

        }, {
          key: "showTeacherName",
          value: function showTeacherName(semTeacher) {
            if (semTeacher != undefined && semTeacher != 'undefined') {
              this.dataProvider.showToast(this.lang.updatedby + " : " + semTeacher.teacher);
            }
          }
          /**
           * Attendance submit function
           */

        }, {
          key: "submitAttendance",
          value: function submitAttendance() {
            var _this13 = this;

            console.log('this.teacher_type', this.teacher_type);

            if (this.teacher_type == 'regular') {
              console.log('[here1]');

              if (this.checkAttendence()) {
                if (this.attMarked || Object.keys(this.attendanceSheet).length > 0 || Object.keys(this.removeSheet).length > 0) {
                  this.dataProvider.showLoading();
                  var data = {};
                  data.sheet = this.attendanceSheet;
                  data.user_no = this.userDetails.details.user_no;
                  data.session_id = this.userDetails.session_id;
                  data.cid = this.navData.cid;
                  data.date = this.dataProvider.getFormatedDate(this.dateSelected);
                  data.removal_sheet = this.removeSheet;
                  data.school_id = this.userDetails.details.school_id;
                  console.log('atendence', data);

                  if (this.platform.is('cordova')) {
                    if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                      this.dataProvider.markAttendance(data).then(function (response) {
                        _this13.dataProvider.hideLoading();

                        if (response.session) {
                          _this13.dataProvider.showToast(response.message);

                          _this13.getStudents(false); // this.navCtrl.setRoot(TabsPage);


                          _this13.router.navigate(['tabs'], {
                            replaceUrl: true
                          });
                        } else {
                          _this13.authProvider.flushLocalStorage();

                          _this13.dataProvider.errorALertMessage(response.message);

                          _this13.router.navigate(['login'], {
                            replaceUrl: true
                          }); // this.app.getRootNav().setRoot("LoginPage");

                        }
                      })["catch"](function (error) {
                        _this13.dataProvider.hideLoading();

                        _this13.dataProvider.errorALertMessage(error);
                      });
                    } else {
                      this.dataProvider.hideLoading();

                      if (localStorage.getItem("attendance")) {
                        var attendance = JSON.parse(localStorage.getItem("attendance"));
                        attendance.push(data);
                        localStorage.setItem("attendance", JSON.stringify(attendance));
                      } else {
                        var _attendance = [];

                        _attendance.push(data);

                        localStorage.setItem("attendance", JSON.stringify(_attendance));
                      }

                      this.dataProvider.showToast(this.lang.offline_att_stored);
                    }
                  } else {
                    this.dataProvider.markAttendance(data).then(function (response) {
                      _this13.dataProvider.hideLoading();

                      if (response.session) {
                        _this13.dataProvider.showToast(response.message);

                        _this13.getStudents(false);

                        _this13.router.navigate(['tabs'], {
                          replaceUrl: true
                        }); // this.navCtrl.setRoot(TabsPage);

                      } else {
                        _this13.authProvider.flushLocalStorage();

                        _this13.dataProvider.errorALertMessage(response.message);

                        _this13.router.navigate(['login'], {
                          replaceUrl: true
                        }); // this.app.getRootNav().setRoot("LoginPage");

                      }
                    })["catch"](function (error) {
                      _this13.dataProvider.hideLoading();

                      _this13.dataProvider.errorALertMessage(error);
                    });
                  }
                } else {
                  this.dataProvider.showToast(this.lang.att_not_complete_err);
                }
              } else {
                this.dataProvider.showToast(this.lang.att_not_all_complete_err);
              }
            } else {
              console.log('[here2]');

              if (this.attMarked || Object.keys(this.attendanceSheet).length > 0 || Object.keys(this.removeSheet).length > 0) {
                this.dataProvider.showLoading();
                console.log('[here3]');
                var _data = {};
                _data.sheet = this.attendanceSheet;
                _data.user_no = this.userDetails.details.user_no;
                _data.session_id = this.userDetails.session_id;
                _data.cid = this.navData.cid;
                _data.date = this.dataProvider.getFormatedDate(this.dateSelected);
                _data.removal_sheet = this.removeSheet;
                _data.school_id = this.userDetails.details.school_id;
                console.log('atendence', _data); // this.checkAttendence();

                if (this.platform.is('cordova')) {
                  if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                    this.dataProvider.markAttendance(_data).then(function (response) {
                      _this13.dataProvider.hideLoading();

                      if (response.session) {
                        _this13.dataProvider.showToast(response.message);

                        _this13.getStudents(false); // this.navCtrl.setRoot(TabsPage);


                        _this13.router.navigate(['tabs'], {
                          replaceUrl: true
                        });
                      } else {
                        _this13.authProvider.flushLocalStorage();

                        _this13.dataProvider.errorALertMessage(response.message);

                        _this13.router.navigate(['login'], {
                          replaceUrl: true
                        }); // this.app.getRootNav().setRoot("LoginPage");

                      }
                    })["catch"](function (error) {
                      _this13.dataProvider.hideLoading();

                      _this13.dataProvider.errorALertMessage(error);
                    });
                  } else {
                    this.dataProvider.hideLoading();

                    if (localStorage.getItem("attendance")) {
                      var _attendance2 = JSON.parse(localStorage.getItem("attendance"));

                      _attendance2.push(_data);

                      localStorage.setItem("attendance", JSON.stringify(_attendance2));
                    } else {
                      var _attendance3 = [];

                      _attendance3.push(_data);

                      localStorage.setItem("attendance", JSON.stringify(_attendance3));
                    }

                    this.dataProvider.showToast(this.lang.offline_att_stored);
                  }
                } else {
                  this.dataProvider.markAttendance(_data).then(function (response) {
                    _this13.dataProvider.hideLoading();

                    if (response.session) {
                      _this13.dataProvider.showToast(response.message);

                      _this13.getStudents(false);

                      _this13.router.navigate(['tabs'], {
                        replaceUrl: true
                      }); // this.navCtrl.setRoot(TabsPage);

                    } else {
                      _this13.authProvider.flushLocalStorage();

                      _this13.dataProvider.errorALertMessage(response.message);

                      _this13.router.navigate(['login'], {
                        replaceUrl: true
                      }); // this.app.getRootNav().setRoot("LoginPage");

                    }
                  })["catch"](function (error) {
                    _this13.dataProvider.hideLoading();

                    _this13.dataProvider.errorALertMessage(error);
                  });
                }
              } else {
                this.dataProvider.showToast(this.lang.att_not_complete_err);
              }
            }

            console.log(this.attendanceSheet);
          }
          /* check attendence for regular teacher */

        }, {
          key: "checkAttendence",
          value: function checkAttendence() {
            var _this14 = this;

            if (this.canEdit) {
              return true;
            } else {
              if (this.teacher_type && this.teacher_type == 'regular') {
                var _loop = function _loop(i) {
                  console.log('here');

                  if (_this14.attendanceSheet['cem-' + i]) {
                    var obj = [];
                    var me = _this14;
                    Object.keys(_this14.attendanceSheet['cem-' + i]).forEach(function (key) {
                      obj.push(me.attendanceSheet['cem-' + i][key]);
                    });
                    return {
                      v: true
                    }; // console.log('here1',this.attendanceSheet['cem-'+i],'cem-'+i,obj);

                    /*if(obj.length!=this.students.length){
                      // console.log('here2',obj.length,this.students.length);
                      return false;
                    }else{
                      return true;
                      // console.log(obj.length,this.students.length);
                    }*/
                  }
                };

                for (var i = 1; i <= this.attendanceResponse.totalsems; i++) {
                  var _ret = _loop(i);

                  if (typeof _ret === "object") return _ret.v;
                }
              }
            }
          }
          /**
           * Register new student
           */

        }, {
          key: "registerNewStudent",
          value: function registerNewStudent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.translate.get("reg_student").subscribe(function (response) {
                        _this15.presentAler(response);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAler",
          value: function presentAler(response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this16 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: response.title,
                        inputs: [{
                          name: 'student_name',
                          type: 'text',
                          placeholder: response.student_name
                        }, {
                          name: 'student_id',
                          type: 'number',
                          placeholder: response.student_id
                        }],
                        buttons: [{
                          text: response.cancel,
                          role: 'cancel'
                        }, {
                          text: response.register,
                          handler: function handler(data) {
                            console.log(data);

                            if (data.student_name == '' || data.student_name.trim() == '') {
                              _this16.dataProvider.showToast(response.invalid_stu_name);

                              return false;
                            } else if (data.student_id == '' || data.student_id == 0) {
                              _this16.dataProvider.showToast(response.invalid_stu_id);

                              return false;
                            } else {
                              data.student_id = parseInt(data.student_id);

                              if (Number.isInteger(data.student_id)) {
                                _this16.dataProvider.showLoading();

                                _this16.dataProvider.registerStudent({
                                  "name": data.student_name,
                                  "student_id": data.student_id,
                                  "user_no": _this16.userDetails.details.user_no,
                                  "school_id": _this16.userDetails.details.school_id,
                                  "course_id": _this16.courseInfo.cid
                                }).then(function (res) {
                                  _this16.dataProvider.hideLoading();

                                  if (res.session) {
                                    _this16.getStudents(false);

                                    _this16.dataProvider.showToast(_this16.lang.create_student_success_msg);
                                  } else {
                                    _this16.dataProvider.showToast(res.message);

                                    return false;
                                  }
                                })["catch"](function (err) {
                                  _this16.dataProvider.hideLoading();

                                  _this16.dataProvider.errorALertMessage(err);
                                });
                              } else {
                                _this16.dataProvider.showToast(response.invalid_stu_id);

                                return false;
                              }
                            }
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
        }, {
          key: "editStudentClass",
          value: function editStudentClass(ev, student) {
            var _this17 = this;

            var data = {
              "user_no": this.userDetails.details.user_no,
              "school_id": this.userDetails.details.school_id,
              "session_id": this.userDetails.session_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getCourses(data).then(function (response) {
              _this17.dataProvider.hideLoading();

              if (response.session) {
                _this17.dataProvider.editStudentClass(ev, student, response.data, data, function (res) {
                  // console.log('changed');
                  _this17.showProfileModal = false;

                  _this17.ngOnInit(); //this.hideUserImageModal('')

                });
              }
            })["catch"](function (error) {
              _this17.dataProvider.hideLoading();

              _this17.dataProvider.errorALertMessage(error);
            });
          } //=====new upadate on date 24/12/2021 for adding class note==========

        }, {
          key: "presentNoteActionSheet",
          value: function presentNoteActionSheet(student) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this18 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        // header: 'Albums',
                        mode: 'ios',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Student Review',
                          handler: function handler() {
                            _this18.openNoteModal(student, 'review');
                          }
                        }, {
                          text: 'Student Note',
                          handler: function handler() {
                            _this18.openNoteModal(student, 'note');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context4.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context4.sent;
                      role = _yield$actionSheet$on.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "openNoteModal",
          value: function openNoteModal(student, mode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this19 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(mode === 'note')) {
                        _context5.next = 5;
                        break;
                      }

                      this.studentData = student; // console.log("student1==>",this.studentData);
                      // this.ratingStars = 1;
                      // this.selections= ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee']

                      this.showNoteModal = true;
                      _context5.next = 13;
                      break;

                    case 5:
                      this.studentData = student;
                      _context5.next = 8;
                      return this.modalController.create({
                        component: _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_11__["AddReviewComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 8:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);

                        if (data.data.data) {
                          _this19.ratingStars = data.data.data;
                          _this19.noteMessage = data.data.noteMessage;

                          _this19.addNotesNote();
                        }
                      });
                      _context5.next = 12;
                      return modal.present();

                    case 12:
                      return _context5.abrupt("return", _context5.sent);

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "hideNoteModal",
          value: function hideNoteModal() {
            this.showNoteModal = false;
          }
        }, {
          key: "getSelectedStars",
          value: function getSelectedStars() {
            return new Array(5);
          }
        }, {
          key: "selectStarsForRating",
          value: function selectStarsForRating(index) {
            this.ratingStars = index + 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];

            for (var i = 0; i <= index; i++) {
              this.selections[i] = '#04855f';
            }
          }
        }, {
          key: "addNotesNote",
          value: function addNotesNote() {
            var _this20 = this;

            if (this.noteMessage && this.noteMessage.trim() != '') {
              if (this.noteMessage.length <= 45) {
                if (this.canAddStudentNote) {
                  // this.dataProvider.showLoading();
                  console.log("stusid::", this.studentData.cid);
                  var data = {
                    sid: this.studentData.sid,
                    note: this.noteMessage,
                    user_id: this.userDetails.details.user_no,
                    rating: this.ratingStars,
                    new_rating: JSON.stringify(this.ratingStars) // new_rating: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

                  };
                  this.dataProvider.addStudentNote(data).then(function (note_id) {
                    // this.dataProvider.hideLoading();
                    console.log("NOTE.ID--", note_id);
                    console.log("course id", _this20.navData.cid);
                    var sendWith = {
                      student_id: _this20.studentData.sid,
                      course_id: _this20.navData.cid,
                      dateSelected: _this20.dateSelected
                    };
                    _this20.noteMessage = '';
                    _this20.showNoteModal = false;

                    _this20.dataProvider.showToast('note has been submitted');

                    _this20.router.navigate(['list-student']);
                  })["catch"](function (error) {
                    console.log("erreremsg", error);

                    _this20.dataProvider.hideLoading();

                    _this20.dataProvider.errorALertMessage(error);
                  });
                } else {
                  this.dataProvider.showToast(this.lang.already_submit_note);
                }
              } else {
                this.dataProvider.showToast(this.lang.max_note_length);
              }
            } else {
              this.dataProvider.showToast(this.lang.empty_note);
            }
          }
        }, {
          key: "addTextNotesNote",
          value: function addTextNotesNote() {
            var _this21 = this;

            if (this.noteMessage && this.noteMessage.trim() != '') {
              if (this.noteMessage.length <= 45) {
                if (this.canAddStudentNote) {
                  this.dataProvider.showLoading();
                  var data = {
                    sid: this.studentData.sid,
                    note: this.noteMessage,
                    user_id: this.userDetails.details.user_no,
                    rating: 0,
                    new_rating: JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                  };
                  this.dataProvider.addStudentNote(data).then(function (note_id) {
                    _this21.dataProvider.hideLoading();

                    console.log("NOTE.ID--", note_id);
                    console.log("course id", _this21.navData.cid);
                    var sendWith = {
                      student_id: _this21.studentData.sid,
                      course_id: _this21.navData.cid,
                      dateSelected: _this21.dateSelected
                    };
                    _this21.noteMessage = '';
                    _this21.showNoteModal = false;

                    _this21.dataProvider.showToast('note has been submitted');

                    _this21.router.navigate(['list-student']);
                  })["catch"](function (error) {
                    console.log("erreremsg", error);

                    _this21.dataProvider.hideLoading();

                    _this21.dataProvider.errorALertMessage(error);
                  });
                } else {
                  this.dataProvider.showToast(this.lang.already_submit_note);
                }
              } else {
                this.dataProvider.showToast(this.lang.max_note_length);
              }
            } else {
              this.dataProvider.showToast(this.lang.empty_note);
            }
          }
        }, {
          key: "presentPrintOption",
          value: function presentPrintOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this22 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN)) {
                        _context6.next = 8;
                        break;
                      }

                      _context6.next = 3;
                      return this.alertCtrl.create({
                        header: this.lang.report_option,
                        buttons: [{
                          text: this.lang.exel,
                          handler: function handler() {
                            _this22.printReport('exel');
                          }
                        }, {
                          text: this.lang.pdf,
                          handler: function handler() {
                            _this22.printReport('pdf');
                          }
                        }]
                      });

                    case 3:
                      alert = _context6.sent;
                      _context6.next = 6;
                      return alert.present();

                    case 6:
                      _context6.next = 9;
                      break;

                    case 8:
                      this.dataProvider.showToast(this.lang.no_internet);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "printReport",
          value: function printReport(type) {
            var _this23 = this;

            var planData = {
              user_no: this.userDetails.details.user_no,
              report_type: type
            };
            this.dataProvider.showLoading();
            this.dataProvider.openPdf(planData).then(function (res) {
              var course = _this23.navData;
              _this23.courseInfo = course;
              var studentData = {
                "date": _this23.dataProvider.getFormatedDate(_this23.dateSelected),
                "user_no": _this23.userDetails.details.user_no,
                "session_id": _this23.userDetails.session_id,
                "course_id": course.cid,
                "school_id": _this23.userDetails.details.school_id,
                "report_type": type
              };

              _this23.dataProvider.getMarksReport(studentData).then(function (res) {
                _this23.dataProvider.hideLoading();

                if (res.data) {
                  if (type == "pdf") {
                    var options = {
                      orientation: 'portrait'
                    };

                    _this23.printer.print(res.data, options).then(function (onSuccess) {}, function (e) {
                      console.log('printer.print', e);

                      _this23.dataProvider.showToast(_this23.lang.report_error);
                    });
                  } else {
                    window.open(res.data, '_system');
                  }
                } else {
                  _this23.dataProvider.showToast(_this23.lang.report_error);
                }
              }, function (error) {
                _this23.dataProvider.hideLoading();

                _this23.dataProvider.showToast(_this23.lang.report_error);
              });
            })["catch"](function (e) {
              _this23.dataProvider.hideLoading();

              console.log(e);

              _this23.presentAlertConfirm();
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this24 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertCtrl.create({
                        header: this.planLang.not_valid,
                        mode: 'ios',
                        buttons: [{
                          text: this.planLang.cancel,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: this.planLang.subscribe,
                          handler: function handler() {
                            console.log('Confirm Okay'); // this.subscription.blockAds();

                            _this24.router.navigate(['available-plan']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return ListStudentPage;
      }();

      ListStudentPage.ctorParameters = function () {
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
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__["Printer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      ListStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-student',
        template: _raw_loader_list_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__["Printer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], ListStudentPage);
      /***/
    },

    /***/
    "2821":
    /*!*************************************************************!*\
      !*** ./src/app/list-student/list-student-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ListStudentPageRoutingModule */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListStudentPageRoutingModule", function () {
        return ListStudentPageRoutingModule;
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


      var _list_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-student.page */
      "0Q/y");

      var routes = [{
        path: '',
        component: _list_student_page__WEBPACK_IMPORTED_MODULE_3__["ListStudentPage"]
      }];

      var ListStudentPageRoutingModule = function ListStudentPageRoutingModule() {
        _classCallCheck(this, ListStudentPageRoutingModule);
      };

      ListStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListStudentPageRoutingModule);
      /***/
    },

    /***/
    "4mDO":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-student/list-student.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"6\" align-self-center no-padding text-right>\n        <div class=\"title\" (click)=\"openCalenderModal()\">{{dateSelected | date: 'mediumDate'}}</div>\n      </ion-col>\n      <ion-col size=\"6\" align-self-center no-padding style=\"direction: ltr;\">\n        <ion-buttons start clear>\n          <ion-button class=\"small_btn_header\" small clear icon-only (click)=\"enableEditingMode()\"\n            *ngIf=\"(userType == '1' || canEdit) && !editMode && !isHoliday\">\n            <ion-icon name=\"pencil\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"small_btn_header\" small clear icon-only (click)=\"registerNewStudent()\"\n            *ngIf=\"userType == '1' || canAddStudent\">\n            <ion-icon name=\"add\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"small_btn_header\" small clear icon-only (click)=\"viewNote()\">\n            <ion-icon name=\"document-text-outline\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <ion-list padding no-margin>\n    <ion-row>\n      <ion-col size=\"4\" col-sm-2 align-self-center style=\"padding-right: 18px;color:black;\" class=\"text-right\" text-right>\n        {{courseInfo.name}}\n      </ion-col>\n      <ion-col size=\"8\" col-sm-10 align-self-center>\n      </ion-col>\n      <ion-col size=\"12\" align-self-center>\n        <div class=\"left-direction checkbox-container\" *ngIf=\"attendanceResponse.semteacher\">\n          <div class=\"checkbox-icon\" *ngFor=\"let sem of getSemArray(); let i = index;\"\n            (click)=\"showTeacherName(attendanceResponse.semteacher['sem-' + (i + 1)])\">\n            <div class=\"sem-number-outer\"\n              [ngClass]=\"{'att-not-marked': attendanceResponse.semteacher['sem-' + (i + 1)] == undefined ,'att-marked': attendanceResponse.semteacher['sem-' + (i + 1)] != undefined }\">\n              {{i+1}}</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <div class=\"main-content\">\n    <ion-list padding *ngIf=\"attendanceResponse.students?.length > 0\" margin-top>\n      <ion-row class=\"right-direction student-card top-col\" *ngIf=\"showAll\">\n        <ion-col size=\"12\" align-self-center class=\"left-direction\">\n          <p>{{'list-student.mark_all' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area checkbox-all\">\n          <div class=\"left-direction checkbox-container\">\n            <div class=\"checkbox-icon\" *ngFor=\"let sem of getSemArray(); let i = index;\"\n              (click)=\"changeAttendanceStatusAll(i)\">\n              <div class=\"checkbox-remove all-check\" [ngClass]=\"classAll[i]\">\n                <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"classAll[i]=='present'\" color=\"light\"></ion-icon>\n                <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"classAll[i]=='absent'\" color=\"light\"></ion-icon>\n                <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"classAll[i]=='delay'\" color=\"light\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"right-direction student-card\"\n        *ngFor=\"let student of attendanceResponse.students; let sno = index;\">\n        <ion-col size=\"10\" col-sm-11>\n          <ion-row>\n             <ion-col size=\"3\" align-self-center class=\"text-center\" class=\"left-direction\">\n              <ion-button fill=\"clear\" (click)=\"presentNoteActionSheet(student)\">\n                <ion-icon name=\"add-circle\" class=\"add-note\" item-end color=\"icon-header\"></ion-icon>\n            </ion-button>\n            </ion-col> \n            <ion-col size=\"9\" align-self-center class=\"text-right\" class=\"left-direction\"\n              (click)=\"openStudentDetail(student.sid)\">\n              <h4><span class=\"serial-number\">{{sno+1}}.</span> {{student.name}}</h4>\n              <p class=\"student-behaviour\">{{student.studentBehaviour}}</p>\n            </ion-col>\n\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"2\" col-sm-1 align-self-center>\n          <ion-item class=\"item-img\" lines=\"none\">\n            <ion-avatar (click)=\"openUserImageModal(student)\">\n              <img [src]=\"student.pic\">\n            </ion-avatar>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" align-self-center text-right no-padding class=\"checkbox-area\">\n          <div class=\"left-direction checkbox-container\">\n            <div class=\"checkbox-icon\" *ngFor=\"let sem of getSemArray(); let i = index;\"\n              (click)=\"changeAttendanceStatus(student, i,sno)\">\n              <div class=\"checkbox-remove\"\n                [ngClass]=\"{'present': student.sheet['cem-'+ (i+1)] == '1', 'absent': student.sheet['cem-'+ (i+1)] == '0', 'delay': student.sheet['cem-'+ (i+1)] == '3', '': student.sheet['cem-'+ (i+1)] == 'undefined'}\">\n                <ion-icon name=\"checkmark\" class=\"att-icon\" *ngIf=\"student.sheet['cem-'+ (i+1)] == '1'\" color=\"light\">\n                </ion-icon>\n                <ion-icon name=\"close\" class=\"att-icon\" *ngIf=\"student.sheet['cem-'+ (i+1)] == '0'\" color=\"light\">\n                </ion-icon>\n                <ion-icon name=\"remove\" class=\"att-icon\" *ngIf=\"student.sheet['cem-'+ (i+1)] == '3'\" color=\"light\">\n                </ion-icon>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-button expand=\"block\" class=\"btn-primary margin\" color=\"primary\" (click)=\"submitAttendance()\"\n        *ngIf=\"!isHoliday && userType != '7'\">{{'list-student.submitbtn' | translate}}</ion-button>\n    </ion-list>\n    <ion-label margin-top padding-top item-center class=\"norecord-found\"\n      *ngIf=\"attendanceResponse.students?.length == 0\">{{noDataFound}}\n    </ion-label>\n    <div margin-top padding-top item-center class=\"students\" id=\"students\" *ngIf=\"show_loading\"> \n      <ion-card  class=\"text-left body-font card heigt-min\" *ngFor=\"let dummy of ' '.repeat(20).split(''), let x = index\">\t\t\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <h4><ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text></h4>\n            <p><ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text></p>\n          </ion-label>\n        </ion-item>\n      </ion-card> \n      </div>\n  </div>\n</ion-content>\n\n<div class=\"custom-calender-modal-main\" *ngIf=\"showCalenderModal\">\n  <div class=\"calender-container\">\n    <div class=\"calender-body\" class=\"right-direction\">\n      <ion-calendar #calendar [options]=\"options\" canBackwardsSelected=\"true\" (change)=\"onDaySelect($event)\">\n      </ion-calendar>\n      <!-- [events]=\"currentEvents\" -->\n    </div>\n  </div>\n  <div class=\"clickd-div\" (click)=\"hideCalenderModal()\"></div>\n</div>\n\n<div class=\"custom-modal-main\" *ngIf=\"showProfileModal\" (click)=\"hideUserImageModal($event)\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-modal-header\">\n      <div class=\"image-sec\" [ngStyle]=\"{'background-image': 'url('+student.pic+')'}\">\n        <div class=\"add-image-icon\" (click)=\"takePicture()\"\n          *ngIf=\"userDetails.details.user_type != '2' && userDetails.details.user_type != '7'\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"custom-modal-content\">\n      <h2 style=\"color:black;\">{{student.name}}\n        <!-- <ion-icon *ngIf=\"editMode\" (click)=\"editStudentClass($event,student)\" name=\"create-outline\"></ion-icon> -->\n      </h2>\n      <h2 *ngIf=\"editMode\" style=\"color:black;\">{{student.course_name}}</h2>\n      <p *ngIf=\"student.studentBehaviour != ''\">{{student.studentBehaviour}}</p>\n      <p style=\"color:black;\">{{'list-student.total_absents' | translate}} : {{student.total_absent}}</p>\n    </div>\n    <div class=\"custom-modal-footer\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"lefthorizline text-left\">\n          <p class=\"absence-count text-center\" style=\"color:black;\">{{student.unacceptable_absent_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.unacceptable_absence' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"text-center\">\n          <p class=\"absence-count text-center\" style=\"color:black;\">{{student.suspend_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.suspension_days' | translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"text-right\">\n          <p class=\"absence-count text-center\" style=\"color:black;\">{{student.medical_days}}</p>\n          <p class=\"absence text-center\">{{'list-student.medical_days' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n<div class=\"custom-modal-main\" *ngIf=\"showNoteModal\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-note-header\">\n      <h4 style=\"color:#000;\">{{'student-details.add_note' | translate}}</h4>\n    </div>\n\n    <div class=\"custom-note-content\">\n      <!-- <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n        <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[i]}\" (click)=\"selectStarsForRating(i)\"></ion-icon>\n      </span> -->\n      <div class=\"note-desc\">\n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"noteMessage\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-input>\n        </ion-item>\n        <p class=\"max_length\">{{noteMessage?.length}}/45</p>\n      </div>\n    </div>\n    <div class=\"custom-modal-footer right-direction\">\n      <ion-row>\n        <ion-col size=\"6\" text-right>\n         <ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\"  (click)=\"hideNoteModal()\">{{'alertmessages.alert_btn_cancel_text' |\n            translate}}</ion-button> \n        </ion-col>\n        <ion-col size=\"6\" text-center>\n          <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" color=\"primary\" (click)=\"addTextNotesNote()\">{{'alertmessages.alert_btn_submit_text' | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "JkIs":
    /*!*****************************************************!*\
      !*** ./src/app/list-student/list-student.module.ts ***!
      \*****************************************************/

    /*! exports provided: ListStudentPageModule */

    /***/
    function JkIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListStudentPageModule", function () {
        return ListStudentPageModule;
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


      var _list_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-student-routing.module */
      "2821");
      /* harmony import */


      var _list_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-student.page */
      "0Q/y");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ListStudentPageModule = function ListStudentPageModule() {
        _classCallCheck(this, ListStudentPageModule);
      };

      ListStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListStudentPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_list_student_page__WEBPACK_IMPORTED_MODULE_6__["ListStudentPage"]]
      })], ListStudentPageModule);
      /***/
    },

    /***/
    "Lz22":
    /*!*****************************************************!*\
      !*** ./src/app/list-student/list-student.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Lz22(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-list-student:host .item-img {\n  --padding-start: unset;\n  --padding-end: unset;\n  --inner-padding-end: unset;\n  --inner-padding-start: unset;\n}\napp-list-student:host ion-header ion-list {\n  background: #fff;\n}\napp-list-student:host .add-note {\n  float: left;\n  fill: dimgrey;\n  font-size: 27px;\n}\napp-list-student:host .item-inner {\n  border-bottom: none !important;\n}\napp-list-student:host .margin {\n  width: 92%;\n  margin: 13px;\n}\napp-list-student:host .checkbox-container {\n  width: 100%;\n  display: flex;\n}\napp-list-student:host .checkbox-container .checkbox-icon {\n  width: 14%;\n  height: auto;\n}\napp-list-student:host .title {\n  font-weight: 600;\n  color: #000;\n  padding-top: 1vh;\n  font-size: 15px;\n}\napp-list-student:host .sem-number-outer {\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\napp-list-student:host .att-not-marked {\n  background: #ececec;\n  color: #000;\n}\napp-list-student:host .att-marked {\n  background: #32db64;\n  color: #fff;\n}\napp-list-student:host .top-col {\n  text-align: center;\n}\napp-list-student:host .top-col p {\n  margin: unset;\n}\napp-list-student:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 27px;\n}\napp-list-student:host .student-behaviour {\n  margin: 0;\n  font-size: 10px;\n  color: #7d7d7d;\n  padding-top: 5px;\n}\napp-list-student:host .student-card {\n  background: #fff;\n  box-shadow: 1px 1px 6px #ececec;\n  border-radius: 2px;\n  margin-bottom: 10px;\n}\napp-list-student:host .student-card h4 {\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  font-weight: 600;\n  padding-top: 7px;\n}\napp-list-student:host .student-card h4 .serial-number {\n  font-weight: normal;\n}\napp-list-student:host .checkbox-all {\n  margin: 0px 0;\n}\napp-list-student:host .checkbox-area {\n  margin: 5px 0;\n}\napp-list-student:host .checkbox-area .checkbox-remove {\n  border: 1px solid grey;\n  height: 24px;\n  width: 24px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*ion-icon{\n      font-size: 23px;\n      font-weight: 800;\n      padding-right: 7px;\n      padding-top: 0;\n  }*/\n}\napp-list-student:host .checkbox-area .checkbox-remove .att-icon:before {\n  font-size: 22px;\n}\napp-list-student:host .checkbox-area .present {\n  background: #32db64;\n}\napp-list-student:host .checkbox-area .absent {\n  background: #f53d3d;\n}\napp-list-student:host .checkbox-area .delay {\n  background: #ffa500;\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) and (orientation: portrait) {\n  app-list-student:host .title, app-list-student:host h4 {\n    font-size: 0.7rem;\n  }\n  app-list-student:host ion-list {\n    padding: 5px !important;\n  }\n  app-list-student:host .add-circle {\n    margin-right: 0px !important;\n    font-size: 24px !important;\n  }\n  app-list-student:host ion-header ion-icon {\n    min-width: 18px !important;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 380px) and (orientation: portrait) {\n  app-list-student:host .add-circle {\n    margin-right: 0px !important;\n    font-size: 24px !important;\n  }\n  app-list-student:host ion-header ion-icon {\n    min-width: 18px !important;\n  }\n}\n.all-check {\n  border-radius: 20%;\n}\n.max_length {\n  text-align: left;\n  padding-left: 16px;\n  color: #ababab;\n  margin-top: 10px;\n}\n.rating-star {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpc3Qtc3R1ZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDWSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUFoQjtBQUdRO0VBQ0ksZ0JBQUE7QUFEWjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBSFI7QUFNSTtFQUNJLDhCQUFBO0FBSlI7QUFNSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBSlI7QUFNSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBSlI7QUFLUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBSFo7QUFNSTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUxaO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFPSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUxSO0FBT0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFMUjtBQU9JO0VBQ0ksa0JBQUE7QUFMUjtBQU1RO0VBQ0ksYUFBQTtBQUpaO0FBT0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFI7QUFPSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFNUTtFQUNRLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQUtZO0VBQ0ksbUJBQUE7QUFIaEI7QUFPSTtFQUNJLGFBQUE7QUFMUjtBQU9JO0VBQ0ksYUFBQTtBQUxSO0FBTVE7RUFFSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0E7Ozs7O0lBQUE7QUFBWjtBQU1ZO0VBQ0ksZUFBQTtBQUpoQjtBQU9RO0VBQ0ksbUJBQUE7QUFMWjtBQU9RO0VBQ0ksbUJBQUE7QUFMWjtBQU9RO0VBQ0ksbUJBQUE7QUFMWjtBQVNJO0VBQ0k7SUFDSSxpQkFBQTtFQVBWO0VBU007SUFDSSx1QkFBQTtFQVBWO0VBU007SUFDSSw0QkFBQTtJQUNBLDBCQUFBO0VBUFY7RUFTTTtJQUNJLDBCQUFBO0VBUFY7QUFDRjtBQVVJO0VBRUk7SUFDSSw0QkFBQTtJQUNBLDBCQUFBO0VBVFY7RUFXTTtJQUNJLDBCQUFBO0VBVFY7QUFDRjtBQVlBO0VBQ0ksa0JBQUE7QUFUSjtBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVRKO0FBV0E7RUFDSSxpQkFBQTtBQVJKIiwiZmlsZSI6Imxpc3Qtc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbGlzdC1zdHVkZW50Omhvc3Qge1xyXG4gICAgLml0ZW0taW1ne1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgaW9uLWhlYWRlcntcclxuICAgICAgICBpb24tbGlzdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC1ub3Rle1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZpbGw6IGRpbWdyZXk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXJnaW57XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICBtYXJnaW46IDEzcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5jaGVja2JveC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgLy8gICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5zZW0tbnVtYmVyLW91dGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDIzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5hdHQtbm90LW1hcmtlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNlY2VjZWM7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAuYXR0LW1hcmtlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzJkYjY0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnRvcC1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjp1bnNldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkLWNpcmNsZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtYmVoYXZpb3VyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4ICNlY2VjZWM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAuc2VyaWFsLW51bWJlcntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtYWxse1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtYXJlYXtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIC5jaGVja2JveC1yZW1vdmV7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6Y29sb3IoJGNvbG9ycywgcmVtb3ZlLWFwcCwgYmFzZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAvKmlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgLmF0dC1pY29uOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJlc2VudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMyZGI2NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFic2VudHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1M2QzZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGF5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZhNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgLnRpdGxlLCBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHJcbiAgICAgICAgLmFkZC1jaXJjbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWhlYWRlciBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWxsLWNoZWNre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG59XHJcblxyXG4ubWF4X2xlbmd0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgY29sb3I6ICNhYmFiYWI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5yYXRpbmctc3RhcntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=list-student-list-student-module-es5.js.map
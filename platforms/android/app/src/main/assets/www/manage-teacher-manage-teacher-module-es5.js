(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-teacher-manage-teacher-module"], {
    /***/
    "4j18":
    /*!*****************************************************************!*\
      !*** ./src/app/manage-teacher/manage-teacher-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ManageTeacherPageRoutingModule */

    /***/
    function j18(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageTeacherPageRoutingModule", function () {
        return ManageTeacherPageRoutingModule;
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


      var _manage_teacher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-teacher.page */
      "LSg3");

      var routes = [{
        path: '',
        component: _manage_teacher_page__WEBPACK_IMPORTED_MODULE_3__["ManageTeacherPage"]
      }];

      var ManageTeacherPageRoutingModule = function ManageTeacherPageRoutingModule() {
        _classCallCheck(this, ManageTeacherPageRoutingModule);
      };

      ManageTeacherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ManageTeacherPageRoutingModule);
      /***/
    },

    /***/
    "LSg3":
    /*!*******************************************************!*\
      !*** ./src/app/manage-teacher/manage-teacher.page.ts ***!
      \*******************************************************/

    /*! exports provided: ManageTeacherPage */

    /***/
    function LSg3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageTeacherPage", function () {
        return ManageTeacherPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_teacher_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-teacher.page.html */
      "OLxu");
      /* harmony import */


      var _manage_teacher_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-teacher.page.scss */
      "NXAp");
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

      var ManageTeacherPage = /*#__PURE__*/function () {
        function ManageTeacherPage(navCtrl, // public app: App, 
        translate, dataProvider, authProvider, //public events: Events,
        alertCtrl, route, zone, router, modalController) {
          var _this = this;

          _classCallCheck(this, ManageTeacherPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.zone = zone;
          this.router = router;
          this.modalController = modalController;
          this.teacherList = [];
          this.noTeacher = false;
          this.selectedTeacher = [];
          this.trimmedTeacher = [];
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              var isUpdated = _this.router.getCurrentNavigation().extras.state.isUpdated;

              console.log("isupdated::", isUpdated);

              if (isUpdated) {
                _this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));

                _this.getTeacher(false);
              }
            }
          });
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
        }

        _createClass(ManageTeacherPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              // console.log('logged in');
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getTeacher();
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "getTeacher",
          value: function getTeacher() {
            var _this2 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var data = {
              'class_id': '',
              'school_id': this.userDetails.details.school_id,
              'user_no': this.userDetails.details.user_no
            };
            if (loader) this.dataProvider.showLoading();
            this.dataProvider.getTeachers(data).then(function (res) {
              if (loader) _this2.dataProvider.hideLoading();
              console.log('teschers', res);

              if (res.session) {
                // this.teacherList=res.data;
                _this2.selectedTeacher = res.data;

                if (_this2.selectedTeacher.length > 1) {
                  _this2.trimmedTeacher = _this2.selectedTeacher.splice(0, 20);
                } else {
                  _this2.trimmedTeacher = _this2.selectedTeacher;
                }

                if (res.data.length < 1) {
                  _this2.noTeacher = true;
                }
              } else {
                _this2.noTeacher = true;
                console.log('err', res);
              }
            }, function (error) {
              _this2.noTeacher = true;
              if (loader) _this2.dataProvider.hideLoading();
              console.log(error);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this3 = this;

            setTimeout(function () {
              _this3.trimmedTeacher = _this3.trimmedTeacher.concat(_this3.selectedTeacher.splice(0, 20));
              infiniteScroll.target.complete();
            }, 500);
          }
        }, {
          key: "openEditPage",
          value: function openEditPage(teacher) {
            var _this4 = this;

            var navigation = {
              state: {
                teacher: teacher
              }
            };
            this.zone.run(function () {
              _this4.router.navigate(['edit-teacher-profile'], navigation);
            });
          }
        }, {
          key: "markTeacher",
          value: function markTeacher(teacher, type, eve, id) {
            var is_checked = eve.srcElement.ariaChecked;
            console.log(teacher, type, id, is_checked);

            if (type == 'reg') {
              if (is_checked != "true") {
                this.selectedTeacher[id].is_assign = 1;
                this.selectedTeacher[id].assign_as = "regular";
                var elem = document.getElementById('spl' + id);
                elem.checked = false;
              } else {
                this.selectedTeacher[id].is_assign = 2;
                this.selectedTeacher[id].assign_as = 0; // this.popMarkedTeacher(data);
              }
            } else {
              if (is_checked != "true") {
                this.selectedTeacher[id].is_assign = 1;
                this.selectedTeacher[id].assign_as = "split";

                var _elem = document.getElementById('reg' + id);

                _elem.checked = false;
              } else {
                this.selectedTeacher[id].is_assign = 2;
                this.selectedTeacher[id].assign_as = 1;
              }
            }

            console.log(this.selectedTeacher);
          }
        }, {
          key: "submitTeacher",
          value: function submitTeacher() {
            var _this5 = this;

            this.dataProvider.showLoading();
            var data = {
              'teachersList': this.selectedTeacher,
              'class_id': this.course.cid,
              'school_id': this.userDetails.school_id,
              'user_no': this.userDetails.user_no
            };
            this.dataProvider.updateTeacher(data).then(function (res) {
              _this5.dataProvider.hideLoading();

              console.log('teschers', res);

              if (res.session) {
                _this5.dataProvider.showToast(res.data);

                _this5.router.navigate(['tabs/classlist']);
              } else {
                _this5.dataProvider.showToast(res.message);
              }
            }, function (error) {
              _this5.dataProvider.showToast(error);

              _this5.dataProvider.hideLoading();

              console.log(error);
            });
          }
        }, {
          key: "deletClass",
          value: function deletClass() {
            var _this6 = this;

            this.dataProvider.showLoading();
            var data = {
              'class_id': this.course.cid,
              'school_id': this.userDetails.school_id,
              'user_no': this.userDetails.user_no
            };
            this.dataProvider.deleteClass(data).then(function (res) {
              _this6.dataProvider.hideLoading();

              console.log('teschers', res);

              if (res.session) {
                _this6.dataProvider.showToast(res.data);

                _this6.router.navigate(['tabs/classlist']);
              } else {
                _this6.dataProvider.showToast(res.message);
              }
            }, function (error) {
              _this6.dataProvider.showToast(error);

              _this6.dataProvider.hideLoading();

              console.log(error);
            });
          }
        }, {
          key: "filterList",
          value: function filterList(event) {
            var _this7 = this;

            //this.selectTopic=[];
            var input = document.getElementById('search').value;
            var data = {
              'keyword': input,
              'school_id': this.userDetails.details.school_id,
              'pageno': 0
            };
            this.dataProvider.searTeacher(data).then(function (res) {
              console.log(res);

              if (res.data) {
                var teacher = res.data.profile;
                console.log(teacher, _this7.selectedTeacher, _this7.teacherList);

                if (teacher.length > 0) {
                  _this7.trimmedTeacher = teacher.splice(0, 20);
                } else {
                  _this7.trimmedTeacher = _this7.selectedTeacher.splice(0, 20);
                }
              }
            }); // console.log(input);
            // const items = Array.from(document.getElementById('teacher').children);
            // items.forEach(item => {
            //       const shouldShow = item.textContent.toLowerCase().indexOf(input) > -1;
            //       (<HTMLElement>item).style.display = shouldShow ? 'block' : 'none';
            // });
          }
        }, {
          key: "addTeacher",
          value: function addTeacher() {
            this.router.navigate(['add-teacher']);
          }
        }]);

        return ManageTeacherPage;
      }();

      ManageTeacherPage.ctorParameters = function () {
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
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ManageTeacherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-manage-teacher',
        template: _raw_loader_manage_teacher_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_teacher_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], ManageTeacherPage);
      /***/
    },

    /***/
    "NXAp":
    /*!*********************************************************!*\
      !*** ./src/app/manage-teacher/manage-teacher.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function NXAp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list .list-header {\n  font-size: 16px;\n  font-weight: 700;\n  padding: unset;\n}\n.list .card .card-header {\n  padding: unset;\n  border: 0.2px solid #00000017;\n}\n.list .card .card-header .item p {\n  font-size: 10px;\n}\n.list .card .card-header .item p ion-badge {\n  font-size: 10px;\n}\n.list .card .card-content {\n  padding: unset;\n  margin: unset;\n}\n.list .card .card-content .item-lover .item-text {\n  min-width: 147px;\n  text-align: center;\n}\n.list .card .card-content .item-lover .row {\n  width: 100%;\n  text-align: center;\n}\n.list .card .card-content .item-lover .row .col ion-checkbox {\n  margin: 0px auto;\n  padding-top: 2px;\n}\nion-item p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21hbmFnZS10ZWFjaGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNLLGVBQUE7RUFDQSxnQkFBQTtFQUNGLGNBQUE7QUFBSjtBQUdFO0VBQ0MsY0FBQTtFQUNHLDZCQUFBO0FBRE47QUFHSTtFQUNDLGVBQUE7QUFETDtBQUVLO0VBQ0MsZUFBQTtBQUFOO0FBS0U7RUFDQyxjQUFBO0VBQ0csYUFBQTtBQUhOO0FBS0k7RUFDQyxnQkFBQTtFQUNHLGtCQUFBO0FBSFI7QUFLSTtFQUNLLFdBQUE7RUFDQSxrQkFBQTtBQUhUO0FBS007RUFDQyxnQkFBQTtFQUNHLGdCQUFBO0FBSFY7QUFZQztFQUNDLGVBQUE7QUFURiIsImZpbGUiOiJtYW5hZ2UtdGVhY2hlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcclxuXHQubGlzdC1oZWFkZXJ7XHJcblx0XHQgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0cGFkZGluZzogdW5zZXQ7XHJcblx0fVxyXG5cdC5jYXJke1xyXG5cdFx0LmNhcmQtaGVhZGVye1xyXG5cdFx0XHRwYWRkaW5nOiB1bnNldDtcclxuICAgIFx0XHRib3JkZXI6IDAuMnB4IHNvbGlkICMwMDAwMDAxNztcclxuXHRcdFx0Lml0ZW17XHJcblx0XHRcdFx0cHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdGlvbi1iYWRnZXtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmNhcmQtY29udGVudHtcclxuXHRcdFx0cGFkZGluZzogdW5zZXQ7XHJcbiAgICBcdFx0bWFyZ2luOiB1bnNldDtcclxuXHRcdFx0Lml0ZW0tbG92ZXJ7XHJcblx0XHRcdFx0Lml0ZW0tdGV4dHtcclxuXHRcdFx0XHRcdG1pbi13aWR0aDogMTQ3cHg7XHJcbiAgICBcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnJvd3tcclxuXHRcdFx0XHRcdCAgICB3aWR0aDogMTAwJTtcclxuICAgIFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHQuY29se1xyXG5cdFx0XHRcdFx0XHRpb24tY2hlY2tib3h7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwcHggYXV0bztcclxuICAgIFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuaW9uLWl0ZW17XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "OLxu":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-teacher/manage-teacher.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OLxu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-icon style=\"font-size: 22px;\" name=\"person-add-outline\" (click)=\"addTeacher()\"></ion-icon>\n  \t</ion-buttons>\n\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n\n    <ion-title>{{'edit_teacher.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\"> \n\n\t<ion-list lines=\"none\" class=\"list\" *ngIf=\"trimmedTeacher\"> \n\t\t<ion-list-header class=\"list-header\">\n\t\t\t<ion-item style=\"width: 100%;\">\n\t\t\t\t<ion-searchbar mode=\"ios\" placeholder=\"{{'search.search_teacher' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n\t\t\t</ion-item>\n\t\t</ion-list-header>\n\t\t<div id=\"teacher\">\n\t\t\t<ion-card class=\"card\" *ngFor=\"let list of trimmedTeacher; let i=index\" (click)=\"openEditPage(list)\">\n\t\t\t\t<ion-card-header class=\"card-header\">\n\t\t\t\t\t<ion-item class=\"item\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t<img [src]=\"list.pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\"> \n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h2>{{list.first_name}}</h2>\n\t\t\t\t\t\t\t\t<p>{{list.username}}</p>\n\t\t\t\t\t\t\t<p>{{'edit_teacher.teacher_assign' | translate}}: \n\t\t\t\t\t\t\t\t<ion-badge color=\"primary\" mode=\"ios\" style=\"vertical-align: middle;\">{{list.in_class.length}}</ion-badge></p>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content class=\"card-content\">\n\t\t\t\t\t<!-- <ion-item class=\"item-lover\">\n\t\t\t\t\t\t<div class=\"item-text\">\n\t\t\t\t\t\t\t{{'edit_teacher.teacher_assign' | translate}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  \t<ion-row class=\"row\">\n\t\t\t\t\t  \t\t<ion-col size=\"6\" class=\"col\">\n\t\t\t\t\t  \t\t\t{{'edit_teacher.regular' | translate}}\n\t\t\t\t\t  \t\t\t<ion-checkbox [checked]=\"list.is_assigned==1 && list.assigned_as=='regular'\" (click)=\"markTeacher(list,'reg',$event,i)\" color=\"primary\" id=\"reg{{i}}\"></ion-checkbox>\n\t\t\t\t\t  \t\t</ion-col>\n\t\t\t\t\t  \t\t<ion-col size=\"6\" class=\"col\">\n\t\t\t\t\t  \t\t\t{{'edit_teacher.split' | translate}}\n\t\t\t\t\t\t\t\t<ion-checkbox [checked]=\"list.is_assigned==1 && list.assigned_as=='split'\" color=\"secondary\" (click)=\"markTeacher(list,'spl',$event,i)\" id=\"spl{{i}}\"></ion-checkbox>\n\t\t\t\t\t  \t\t</ion-col>\n\t\t\t\t\t  \t</ion-row>\n\t\t\t\t\t</ion-item> -->\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</div>\n\t</ion-list>\n\n\t<ion-list *ngIf=\"trimmedTeacher.length<1 && noTeacher\">\n\t\t<ion-list-header>\n\t\t\t{{'edit_teacher.no_data' | translate}}\n\t\t</ion-list-header>\n\t</ion-list>\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n<!-- \t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary margin\" *ngIf=\"trimmedTeacher.length>1\"  color=\"primary\" (click)=\"submitTeacher()\">{{'edit_teacher.assign' | translate}}</ion-button>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary margin\"  color=\"danger\" (click)=\"deletClass()\">{{'edit_teacher.delete' | translate}}</ion-button>\n\t\t</ion-col>\n\t</ion-row> -->\n\n</ion-content>\n";
      /***/
    },

    /***/
    "qa+G":
    /*!*********************************************************!*\
      !*** ./src/app/manage-teacher/manage-teacher.module.ts ***!
      \*********************************************************/

    /*! exports provided: ManageTeacherPageModule */

    /***/
    function qaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageTeacherPageModule", function () {
        return ManageTeacherPageModule;
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


      var _manage_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./manage-teacher-routing.module */
      "4j18");
      /* harmony import */


      var _manage_teacher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./manage-teacher.page */
      "LSg3");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ManageTeacherPageModule = function ManageTeacherPageModule() {
        _classCallCheck(this, ManageTeacherPageModule);
      };

      ManageTeacherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manage_teacher_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageTeacherPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_manage_teacher_page__WEBPACK_IMPORTED_MODULE_6__["ManageTeacherPage"]]
      })], ManageTeacherPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=manage-teacher-manage-teacher-module-es5.js.map
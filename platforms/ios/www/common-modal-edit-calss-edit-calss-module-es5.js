(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-modal-edit-calss-edit-calss-module"], {
    /***/
    "Hf6G":
    /*!**************************************************************!*\
      !*** ./src/app/common-modal/edit-calss/edit-calss.module.ts ***!
      \**************************************************************/

    /*! exports provided: EditCalssPageModule */

    /***/
    function Hf6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCalssPageModule", function () {
        return EditCalssPageModule;
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


      var _edit_calss_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-calss-routing.module */
      "XhzU");
      /* harmony import */


      var _edit_calss_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-calss.page */
      "cDOY");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");

      var EditCalssPageModule = function EditCalssPageModule() {
        _classCallCheck(this, EditCalssPageModule);
      };

      EditCalssPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _edit_calss_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCalssPageRoutingModule"]],
        declarations: [_edit_calss_page__WEBPACK_IMPORTED_MODULE_6__["EditCalssPage"]]
      })], EditCalssPageModule);
      /***/
    },

    /***/
    "LWIA":
    /*!**************************************************************!*\
      !*** ./src/app/common-modal/edit-calss/edit-calss.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function LWIA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list .list-header {\n  font-size: 16px;\n  font-weight: 700;\n}\n.list .card .card-header {\n  padding: unset;\n  border: 0.2px solid #00000017;\n}\n.list .card .card-content {\n  padding: unset;\n  margin: unset;\n}\n.list .card .card-content .item-lover .item-text {\n  min-width: 147px;\n  text-align: center;\n}\n.list .card .card-content .item-lover .row {\n  width: 100%;\n  text-align: center;\n}\n.list .card .card-content .item-lover .row .col ion-checkbox {\n  margin: 0px auto;\n  padding-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtY2Fsc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0ssZUFBQTtFQUNBLGdCQUFBO0FBQU47QUFHRTtFQUNDLGNBQUE7RUFDRyw2QkFBQTtBQUROO0FBTUU7RUFDQyxjQUFBO0VBQ0csYUFBQTtBQUpOO0FBTUk7RUFDQyxnQkFBQTtFQUNHLGtCQUFBO0FBSlI7QUFNSTtFQUNLLFdBQUE7RUFDQSxrQkFBQTtBQUpUO0FBTU07RUFDQyxnQkFBQTtFQUNHLGdCQUFBO0FBSlYiLCJmaWxlIjoiZWRpdC1jYWxzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcclxuXHQubGlzdC1oZWFkZXJ7XHJcblx0XHQgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG5cdC5jYXJke1xyXG5cdFx0LmNhcmQtaGVhZGVye1xyXG5cdFx0XHRwYWRkaW5nOiB1bnNldDtcclxuICAgIFx0XHRib3JkZXI6IDAuMnB4IHNvbGlkICMwMDAwMDAxNztcclxuXHRcdFx0Lml0ZW17XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuY2FyZC1jb250ZW50e1xyXG5cdFx0XHRwYWRkaW5nOiB1bnNldDtcclxuICAgIFx0XHRtYXJnaW46IHVuc2V0O1xyXG5cdFx0XHQuaXRlbS1sb3ZlcntcclxuXHRcdFx0XHQuaXRlbS10ZXh0e1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiAxNDdweDtcclxuICAgIFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucm93e1xyXG5cdFx0XHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdC5jb2x7XHJcblx0XHRcdFx0XHRcdGlvbi1jaGVja2JveHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "SWMM":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-modal/edit-calss/edit-calss.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SWMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'edit_class.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n\t<ion-list lines=\"none\" class=\"list\" *ngIf=\"teacherList\">\n\t\t<ion-list-header class=\"list-header\">\n\t\t\t{{'edit_class.sub_title' | translate}}\n\t\t</ion-list-header>\n\t\t<ion-card class=\"card\" *ngFor=\"let list of teacherList; let i=index\"> \n\t\t\t<ion-card-header class=\"card-header\">\n\t\t\t\t<ion-item class=\"item\">\n\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t<img [src]=\"list.pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h2>{{list.first_name}}</h2>\n\t\t\t\t\t\t<p> {{list.is_assigned}}: {{'edit_class.is_assigned' | translate}}</p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content class=\"card-content\">\n\t\t\t\t<ion-item class=\"item-lover\">\n\t\t\t\t\t<div class=\"item-text\">\n\t\t\t\t\t\t{{'edit_class.teacher_assign' | translate}}\n\t\t\t\t\t</div>\n\t\t\t\t  \t<ion-row class=\"row\">\n\t\t\t\t  \t\t<ion-col size=\"6\" class=\"col\">\n\t\t\t\t  \t\t\t{{'edit_class.regular' | translate}}\n\t\t\t\t  \t\t\t<ion-checkbox [checked]=\"list.is_assigned==1 && list.assigned_as=='regular'\" (click)=\"markTeacher(list,'reg',$event,i)\" color=\"primary\" id=\"reg{{i}}\"></ion-checkbox>\n\t\t\t\t  \t\t</ion-col>\n\t\t\t\t  \t\t<ion-col size=\"6\" class=\"col\">\n\t\t\t\t  \t\t\t{{'edit_class.split' | translate}}\n\t\t\t\t\t\t\t<ion-checkbox [checked]=\"list.is_assigned==1 && list.assigned_as=='split'\" color=\"secondary\" (click)=\"markTeacher(list,'spl',$event,i)\" id=\"spl{{i}}\"></ion-checkbox>\n\t\t\t\t  \t\t</ion-col>\n\t\t\t\t  \t</ion-row>\n\t\t\t\t</ion-item>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</ion-list>\n\n\t<ion-list *ngIf=\"teacherList.length<1 && noTeacher\">\n\t\t<ion-list-header>\n\t\t\t{{'edit_class.no_data' | translate}}\n\t\t</ion-list-header>\n\t</ion-list>\n\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary margin\" *ngIf=\"teacherList.length>1\"  color=\"primary\" (click)=\"submitTeacher()\">{{'edit_class.assign' | translate}}</ion-button>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button  expand=\"block\" class=\"btn-primary margin\"  color=\"danger\" (click)=\"deletClass()\">{{'edit_class.delete' | translate}}</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "XhzU":
    /*!**********************************************************************!*\
      !*** ./src/app/common-modal/edit-calss/edit-calss-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: EditCalssPageRoutingModule */

    /***/
    function XhzU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCalssPageRoutingModule", function () {
        return EditCalssPageRoutingModule;
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


      var _edit_calss_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-calss.page */
      "cDOY");

      var routes = [{
        path: '',
        component: _edit_calss_page__WEBPACK_IMPORTED_MODULE_3__["EditCalssPage"]
      }];

      var EditCalssPageRoutingModule = function EditCalssPageRoutingModule() {
        _classCallCheck(this, EditCalssPageRoutingModule);
      };

      EditCalssPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditCalssPageRoutingModule);
      /***/
    },

    /***/
    "cDOY":
    /*!************************************************************!*\
      !*** ./src/app/common-modal/edit-calss/edit-calss.page.ts ***!
      \************************************************************/

    /*! exports provided: EditCalssPage */

    /***/
    function cDOY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCalssPage", function () {
        return EditCalssPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_calss_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-calss.page.html */
      "SWMM");
      /* harmony import */


      var _edit_calss_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-calss.page.scss */
      "LWIA");
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


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EditCalssPage = /*#__PURE__*/function () {
        function EditCalssPage(navCtrl, // public app: App, 
        translate, dataProvider, authProvider, //public events: Events,
        alertCtrl, route, zone, router, modalController) {
          var _this = this;

          _classCallCheck(this, EditCalssPage);

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
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state;
              _this.course = _this.navData.course;
              _this.userDetails = _this.navData.userDetails; //   console.log(this.navData);

              console.log('data', _this.course, 'userfa', _this.userDetails);

              _this.getTeacher();
            }
          });
        }

        _createClass(EditCalssPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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

            var data = {
              'class_id': this.course.cid,
              'school_id': this.userDetails.school_id,
              'user_no': this.userDetails.user_no
            };
            this.dataProvider.showLoading();
            this.dataProvider.getTeachers(data).then(function (res) {
              _this2.dataProvider.hideLoading();

              console.log('teschers', res);

              if (res.session) {
                _this2.teacherList = res.data;
                _this2.selectedTeacher = res.data;

                if (res.data.length < 1) {
                  _this2.noTeacher = true;
                }
              } else {
                _this2.noTeacher = true;
                console.log('err', res);
              }
            }, function (error) {
              _this2.noTeacher = true;

              _this2.dataProvider.hideLoading();

              console.log(error);
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
            var _this3 = this;

            this.dataProvider.showLoading();
            var data = {
              'teachersList': this.selectedTeacher,
              'class_id': this.course.cid,
              'school_id': this.userDetails.school_id,
              'user_no': this.userDetails.user_no
            };
            this.dataProvider.updateTeacher(data).then(function (res) {
              _this3.dataProvider.hideLoading();

              console.log('teschers', res);

              if (res.session) {
                _this3.dataProvider.showToast(res.data);

                _this3.router.navigate(['tabs/classlist']);
              } else {
                _this3.dataProvider.showToast(res.message);
              }
            }, function (error) {
              _this3.dataProvider.showToast(error);

              _this3.dataProvider.hideLoading();

              console.log(error);
            });
          }
        }, {
          key: "deletClass",
          value: function deletClass() {
            var _this4 = this;

            this.dataProvider.showLoading();
            var data = {
              'class_id': this.course.cid,
              'school_id': this.userDetails.school_id,
              'user_no': this.userDetails.user_no
            };
            this.dataProvider.deleteClass(data).then(function (res) {
              _this4.dataProvider.hideLoading();

              console.log('teschers', res);

              if (res.session) {
                _this4.dataProvider.showToast(res.data);

                _this4.router.navigate(['tabs/classlist']);
              } else {
                _this4.dataProvider.showToast(res.message);
              }
            }, function (error) {
              _this4.dataProvider.showToast(error);

              _this4.dataProvider.hideLoading();

              console.log(error);
            });
          }
        }]);

        return EditCalssPage;
      }();

      EditCalssPage.ctorParameters = function () {
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

      EditCalssPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-calss',
        template: _raw_loader_edit_calss_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_calss_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], EditCalssPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-modal-edit-calss-edit-calss-module-es5.js.map
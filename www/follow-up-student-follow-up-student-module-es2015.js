(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["follow-up-student-follow-up-student-module"],{

/***/ "2C/J":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/follow-up-student/follow-up-student.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'followUp_student.title' | translate}}\n      <ion-icon name=\"add\" class=\"add-outline\" item-end color=\"icon-header\" class=\"add-circle\" (click) = \"createClass()\" ></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->\n\n   <div  class=\"body\">\n      <div>\n        <ion-grid no-padding>\n          <ion-row *ngIf = \"classes?.length > 0\">\n            <ion-col size=\"6\" *ngFor=\"let course of classes\" no-padding>\n              <!-- <ion-icon *ngIf=\"course.attendence_submitted\" class=\"check-icon\"  name=\"checkmark-circle-outline\"></ion-icon>\n -->              \n              <ion-card class=\"cards-description\" [ngStyle]=\"{'background-color': course.backgroundColor}\" (click)=\"openClassStudents(course)\">\n                <ion-card-header no-padding>\n                  <ion-card-title color=\"light\">{{course.name}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content no-padding color=\"light\">\n                  {{course.desc}}\n                </ion-card-content>\n                <div class=\"background-image-div\"></div>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <div class=\"no-record\">\n      <ion-label item-center class=\"norecord-found\" *ngIf = \"classes?.length == 0\">{{noDataFound}}</ion-label>\n    </div>\n</ion-content>");

/***/ }),

/***/ "4BFn":
/*!***********************************************************************!*\
  !*** ./src/app/follow-up-student/follow-up-student-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FollowUpStudentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpStudentPageRoutingModule", function() { return FollowUpStudentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _follow_up_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow-up-student.page */ "KG+J");




const routes = [
    {
        path: '',
        component: _follow_up_student_page__WEBPACK_IMPORTED_MODULE_3__["FollowUpStudentPage"]
    }
];
let FollowUpStudentPageRoutingModule = class FollowUpStudentPageRoutingModule {
};
FollowUpStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowUpStudentPageRoutingModule);



/***/ }),

/***/ "7Cvm":
/*!***************************************************************!*\
  !*** ./src/app/follow-up-student/follow-up-student.module.ts ***!
  \***************************************************************/
/*! exports provided: FollowUpStudentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpStudentPageModule", function() { return FollowUpStudentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _follow_up_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow-up-student-routing.module */ "4BFn");
/* harmony import */ var _follow_up_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./follow-up-student.page */ "KG+J");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let FollowUpStudentPageModule = class FollowUpStudentPageModule {
};
FollowUpStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _follow_up_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowUpStudentPageRoutingModule"]
        ],
        declarations: [_follow_up_student_page__WEBPACK_IMPORTED_MODULE_6__["FollowUpStudentPage"]]
    })
], FollowUpStudentPageModule);



/***/ }),

/***/ "J/NK":
/*!***************************************************************!*\
  !*** ./src/app/follow-up-student/follow-up-student.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-follow-up-student:host ion-toolbar:after {\n  height: 0px !important;\n}\napp-follow-up-student:host .container {\n  padding: 2px;\n  background: #dcdcdc;\n  min-height: 100%;\n}\napp-follow-up-student:host .edit_enabled_text {\n  width: 30%;\n  float: left;\n  text-align: left;\n}\napp-follow-up-student:host .body {\n  background: #fff;\n}\napp-follow-up-student:host .check-icon {\n  position: absolute;\n  z-index: 2;\n  right: 8px;\n  top: 8px;\n  font-size: 17px;\n  color: #fff;\n  background: #43a047;\n  border-radius: 50%;\n}\napp-follow-up-student:host .segement {\n  background: #fff;\n  margin: 6px 0px 0px 0px;\n  border-top-left-radius: 17px;\n  border-top-right-radius: 17px;\n}\napp-follow-up-student:host .segement ion-badge {\n  border-radius: 36vw;\n  vertical-align: middle;\n}\napp-follow-up-student:host .card-addon {\n  min-width: 43vw;\n  float: right;\n}\napp-follow-up-student:host .cards-description {\n  border-radius: 6px;\n  min-height: 100px;\n  position: relative;\n}\napp-follow-up-student:host .cards-description ion-card-title {\n  color: #fff;\n  width: 70%;\n  font-size: 15px;\n}\napp-follow-up-student:host .cards-description .card-title {\n  width: 73% !important;\n  z-index: 1;\n}\napp-follow-up-student:host .cards-description ion-card-content {\n  color: #fff;\n  width: 70%;\n  font-size: 11px;\n}\napp-follow-up-student:host .cards-description .card-constent {\n  font-size: 0.7rem;\n  width: 100% !important;\n  box-sizing: 187;\n  z-index: 2 !important;\n}\napp-follow-up-student:host .cards-description .background-image-div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  background-image: url('class-background-image.svg');\n  left: -60px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\napp-follow-up-student:host .small-data ion-card-content {\n  padding-right: 4px !important;\n}\napp-follow-up-student:host .small-data .background-image-div {\n  width: 75% !important;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  top: -8px !important;\n  background-image: url('class-background-image.svg');\n  left: -60px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\napp-follow-up-student:host .add-circle {\n  float: left;\n  margin-right: 10px;\n  font-size: 27px;\n}\n@media only screen and (max-width: 249px) and (orientation: portrait) {\n  app-follow-up-student:host .cards-description ion-card-title {\n    padding-right: 5px;\n    font-size: 1.2rem;\n    width: 60%;\n  }\n  app-follow-up-student:host .cards-description .card-title {\n    width: 73% !important;\n    z-index: 1;\n  }\n  app-follow-up-student:host .cards-description ion-card-content {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60% !important;\n  }\n  app-follow-up-student:host .cards-description .card-constent {\n    padding-right: 5px;\n    font-size: 0.7rem;\n    width: 100% !important;\n    box-sizing: 187;\n    z-index: 2 !important;\n  }\n  app-follow-up-student:host .cards-description .background-image-div {\n    left: -46px !important;\n  }\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) and (orientation: portrait) {\n  app-follow-up-student:host .cards-description ion-card-title {\n    padding-right: 5px;\n    font-size: 1.1rem;\n    width: 60%;\n  }\n  app-follow-up-student:host .cards-description .card-title {\n    width: 73% !important;\n    z-index: 1;\n  }\n  app-follow-up-student:host .cards-description ion-card-content {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60% !important;\n  }\n  app-follow-up-student:host .cards-description .card-constent {\n    padding-right: 5px;\n    font-size: 0.8rem;\n    width: 100% !important;\n    box-sizing: 187;\n    z-index: 2 !important;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 359px) and (orientation: portrait) {\n  app-follow-up-student:host .cards-description ion-card-header {\n    padding: 15px 6px 5px 0px;\n  }\n  app-follow-up-student:host .cards-description ion-card-title {\n    font-size: 1rem;\n    width: 60%;\n  }\n  app-follow-up-student:host .cards-description .card-title {\n    width: 73% !important;\n    z-index: 1;\n  }\n  app-follow-up-student:host .cards-description ion-card-content {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60% !important;\n  }\n  app-follow-up-student:host .cards-description .card-constent {\n    padding-right: 5px;\n    font-size: 0.8rem;\n    width: 100% !important;\n    box-sizing: 187;\n    z-index: 2;\n  }\n}\n.no-record {\n  text-align: center;\n  margin: 12px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvbGxvdy11cC1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUNRO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUNaO0FBRUk7RUFDUSxlQUFBO0VBQ0EsWUFBQTtBQUFaO0FBR0c7RUFDSyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRFo7QUFLUTtFQUNRLHFCQUFBO0VBQ0EsVUFBQTtBQUhoQjtBQUtRO0VBQ1EsV0FBQTtFQUNKLFVBQUE7RUFDQSxlQUFBO0FBSFo7QUFPUTtFQUVZLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFOcEI7QUFRUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFOWjtBQVVRO0VBQ1EsNkJBQUE7QUFSaEI7QUFVUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQVJaO0FBWUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVlI7QUFhSTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUFaZDtFQWNVO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0VBWmQ7RUFjVTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VBWmQ7RUFjVTtJQUNRLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQVpsQjtFQWNVO0lBQ0ksc0JBQUE7RUFaZDtBQUNGO0FBZ0JJO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQWZkO0VBaUJVO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0VBZmQ7RUFpQlU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQWZkO0VBaUJVO0lBQ1Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VBZmxCO0FBQ0Y7QUFtQkk7RUFFTTtJQUNFLHlCQUFBO0VBbEJWO0VBb0JVO0lBRUksZUFBQTtJQUNBLFVBQUE7RUFuQmQ7RUFxQlU7SUFDSSxxQkFBQTtJQUNBLFVBQUE7RUFuQmQ7RUFxQlU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQW5CZDtFQXFCVTtJQUNRLGtCQUFBO0lBQ0QsaUJBQUE7SUFDQyxzQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0VBbkJsQjtBQUNGO0FBdUJBO0VBQ1Esa0JBQUE7RUFDSixZQUFBO0VBQ0EsYUFBQTtBQXBCSiIsImZpbGUiOiJmb2xsb3ctdXAtc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZm9sbG93LXVwLXN0dWRlbnQ6aG9zdCB7XHJcbiAgICBpb24tdG9vbGJhcjphZnRlcntcclxuICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNkY2RjZGM7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5lZGl0X2VuYWJsZWRfdGV4dHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuY2hlY2staWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5zZWdlbWVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgaW9uLWJhZGdle1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNnZ3O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWFkZG9ue1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQzdnc7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiA3cHggMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAuY2FyZHMtZGVzY3JpcHRpb257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAgICAgICAgIC8vICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAgICAgICAvLyAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtY29uc3RlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiAxODc7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLmJhY2tncm91bmQtaW1hZ2UtZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9jbGFzcy1iYWNrZ3JvdW5kLWltYWdlLnN2Zyk7XHJcbiAgICAgICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNtYWxsLWRhdGF7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFja2dyb3VuZC1pbWFnZS1kaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIHRvcDogLThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvY2xhc3MtYmFja2dyb3VuZC1pbWFnZS5zdmcpO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWRkLWNpcmNsZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjQ5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgLmNhcmRzLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC1jb25zdGVudHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiAxODc7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWltYWdlLWRpdntcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC00NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDMxOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgIC5jYXJkcy1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtY29uc3RlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogMTg3O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgLmNhcmRzLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDZweCA1cHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtY29uc3RlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiAxODc7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubm8tcmVjb3Jke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "KG+J":
/*!*************************************************************!*\
  !*** ./src/app/follow-up-student/follow-up-student.page.ts ***!
  \*************************************************************/
/*! exports provided: FollowUpStudentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpStudentPage", function() { return FollowUpStudentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_follow_up_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./follow-up-student.page.html */ "2C/J");
/* harmony import */ var _follow_up_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-up-student.page.scss */ "J/NK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/loader.component */ "vPOg");











let FollowUpStudentPage = class FollowUpStudentPage {
    constructor(navCtrl, translate, dataProvider, authProvider, alertCtrl, route, popoverController, zone, router, modalCtrl) {
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
        this.classes = [];
        this.noDataFound = "";
        this.editMode = false;
        this.lang = {};
        this.userDetails = {};
        this.classBackgroundColor = ["#ff7043", "#2962ff", "#43a047", "#6d4c41", "#ffab00", "#00b0ff", "#651fff", "#2962ff", "#d81b60", "#6a1b9a"];
        this.canPresentPopover = false;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.ionViewWillEnter(false);
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter(loader = true) {
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                this.getCourse(loader);
            }
            else {
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
            }
        });
    }
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                backdropDismiss: true,
                translucent: false,
                cssClass: 'loaderStyle',
            });
            return this.popOver.present();
        });
    }
    dissmissPopOver() {
        setTimeout(() => {
            this.popOver.dismiss();
        }, 500);
    }
    doRefresh(event) {
        this.ionViewWillEnter(false);
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    getCourse(loader = true) {
        if (loader)
            this.presentPopover();
        let data = {
            "user_no": this.userDetails.details.user_no,
            "school_id": this.userDetails.details.school_id,
            "session_id": this.userDetails.session_id
        };
        this.dataProvider.getSelectedCourses(data).then(response => {
            if (loader)
                this.dissmissPopOver();
            console.log('response.data', response);
            if (response.session) {
                let courses = response.data;
                if (courses && courses.length > 0) {
                    let i = 0;
                    this.classes = courses || [];
                    this.classes.forEach((course) => {
                        course.backgroundColor = this.classBackgroundColor[i];
                        i++;
                        if (i == 9)
                            i = 0;
                    });
                }
                else {
                    this.classes = [];
                    this.noDataFound = this.lang.no_record_found;
                }
            }
            else {
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
            }
        }).catch(error => {
            if (loader)
                this.dissmissPopOver();
            console.log('response.data', error);
            this.classes = [];
            this.noDataFound = this.lang.no_record_found;
        });
    }
    openClassStudents(course) {
        const navigation = {
            state: { course: course }
        };
        this.zone.run(() => {
            this.router.navigate(['followup-student-list'], navigation);
        });
    }
    createClass() {
        this.router.navigate(['add-class']);
    }
};
FollowUpStudentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
FollowUpStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow-up-student',
        template: _raw_loader_follow_up_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_follow_up_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], FollowUpStudentPage);



/***/ })

}]);
//# sourceMappingURL=follow-up-student-follow-up-student-module-es2015.js.map
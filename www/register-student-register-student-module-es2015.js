(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-student-register-student-module"],{

/***/ "CmRx":
/*!*************************************************************!*\
  !*** ./src/app/register-student/register-student.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterStudentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStudentPageModule", function() { return RegisterStudentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_student_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-student-routing.module */ "JFWK");
/* harmony import */ var _register_student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-student.page */ "ew2Z");







let RegisterStudentPageModule = class RegisterStudentPageModule {
};
RegisterStudentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_student_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterStudentPageRoutingModule"]
        ],
        declarations: [_register_student_page__WEBPACK_IMPORTED_MODULE_6__["RegisterStudentPage"]]
    })
], RegisterStudentPageModule);



/***/ }),

/***/ "JFWK":
/*!*********************************************************************!*\
  !*** ./src/app/register-student/register-student-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterStudentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStudentPageRoutingModule", function() { return RegisterStudentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_student_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-student.page */ "ew2Z");




const routes = [
    {
        path: '',
        component: _register_student_page__WEBPACK_IMPORTED_MODULE_3__["RegisterStudentPage"]
    }
];
let RegisterStudentPageRoutingModule = class RegisterStudentPageRoutingModule {
};
RegisterStudentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterStudentPageRoutingModule);



/***/ }),

/***/ "Yvru":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-student/register-student.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>register-student</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "ew2Z":
/*!***********************************************************!*\
  !*** ./src/app/register-student/register-student.page.ts ***!
  \***********************************************************/
/*! exports provided: RegisterStudentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStudentPage", function() { return RegisterStudentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_student_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register-student.page.html */ "Yvru");
/* harmony import */ var _register_student_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-student.page.scss */ "gX3X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegisterStudentPage = class RegisterStudentPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterStudentPage.ctorParameters = () => [];
RegisterStudentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-student',
        template: _raw_loader_register_student_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_student_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RegisterStudentPage);



/***/ }),

/***/ "gX3X":
/*!*************************************************************!*\
  !*** ./src/app/register-student/register-student.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1zdHVkZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=register-student-register-student-module-es2015.js.map
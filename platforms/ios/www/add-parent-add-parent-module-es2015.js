(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-parent-add-parent-module"],{

/***/ "1398":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-parent/add-parent.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-right>{{'reg_parent.pagetitle' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding mode=\"md\">\n  <form [formGroup]=\"parentForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-list>\n      <ion-item class=\"background-input\">\n        <ion-label color=\"dark\" position=\"floating\">{{'reg_parent.parentid' | translate}}</ion-label>\n        <ion-input type=\"text\" formControlName=\"parentID\" #parentID pattern=\"[0-9]*$\"\n          (keypress)=\"_keyPress($event)\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.parentID.errors\" class=\"alert alert-danger\">\n        <div *ngIf=\"f.parentID.errors.required\">{{'validations.required' | translate}}</div>\n        <div *ngIf=\"parentID.errors.pattern\">{{'validations.invalidparentId' | translate}}</div>\n      </div>\n\n      <ion-item class=\"background-in  put\">\n        <ion-label color=\"dark\" position=\"floating\">{{'reg_parent.parentname' | translate}}</ion-label>\n        <ion-input type=\"text\" formControlName=\"parentName\" text-right required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.parentName.errors\" class=\"alert alert-danger\">\n        <div *ngIf=\"f.parentName.errors.require\">{{'validations.required' | translate}}</div>\n      </div>\n\n      <ion-item class=\"background-input\">\n        <ion-label color=\"dark\" position=\"floating\">{{'reg_parent.parentpassword' | translate}}</ion-label>\n        <ion-input type=\"password\" formControlName=\"parentPassword\" text-right required></ion-input>\n      </ion-item>\n      <div *ngIf=\"submitted && f.parentPassword.errors\" class=\"alert alert-danger\">\n        <div *ngIf=\"f.parentPassword.errors.require\">{{'validations.required' | translate}}</div>\n      </div>\n\n      <ion-item class=\"background-input\">\n        <ion-label color=\"dark\" position=\"floating\">{{'reg_parent.studentname' | translate}}</ion-label>\n        <ionic-selectable formControlName=\"selected_student\" [items]=\"students\" itemValueField=\"sid\"\n          itemTextField=\"name\" [canSearch]=\"true\" [isMultiple]=\"true\">\n        </ionic-selectable>\n      </ion-item>\n\n      <ion-row padding>\n        <ion-button type=\"submit\" expand=\"full\" class=\"btn-primary\" shape=\"round\" color=\"primary\"\n          [disabled]=\"parentForm.invalid\">{{'reg_parent.reg_btn' | translate}}</ion-button>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ }),

/***/ "5zoF":
/*!*************************************************!*\
  !*** ./src/app/add-parent/add-parent.module.ts ***!
  \*************************************************/
/*! exports provided: AddParentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentPageModule", function() { return AddParentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_parent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-parent-routing.module */ "n/2B");
/* harmony import */ var _add_parent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-parent.page */ "gKZN");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let AddParentPageModule = class AddParentPageModule {
};
AddParentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_parent_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddParentPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_add_parent_page__WEBPACK_IMPORTED_MODULE_6__["AddParentPage"]],
    })
], AddParentPageModule);



/***/ }),

/***/ "gKZN":
/*!***********************************************!*\
  !*** ./src/app/add-parent/add-parent.page.ts ***!
  \***********************************************/
/*! exports provided: AddParentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentPage", function() { return AddParentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_parent_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-parent.page.html */ "1398");
/* harmony import */ var _add_parent_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-parent.page.scss */ "jw23");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddParentPage = class AddParentPage {
    constructor(formBuilder, dataProvider, translate, router) {
        this.formBuilder = formBuilder;
        this.dataProvider = dataProvider;
        this.translate = translate;
        this.router = router;
        this.submitted = false;
        this.selected_student = {
            sid: "",
            name: ""
        };
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
        this.translate.get("reg_parent").subscribe((res) => {
            this.lang1 = res;
        });
    }
    ngOnInit() {
        this.parentForm = this.formBuilder.group({
            parentID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            parentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            parentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            selected_student: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.userdata = JSON.parse(localStorage.getItem("userloggedin"));
        this.getStudents();
    }
    get f() { return this.parentForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.parentForm.invalid) {
            return;
        }
        else {
            this.signUpData = {
                "parentID": this.f.parentID.value,
                "parentName": this.f.parentName.value,
                "password": this.f.parentPassword.value,
                "selected_students": JSON.stringify(this.f.selected_student.value),
                "school_id": this.userdata.details.school_id,
                "user_no": this.userdata.details.user_no
            };
            console.log('this signUpData---', this.signUpData);
            this.dataProvider.showLoading();
            this.dataProvider.createNewParent(this.signUpData).then((response) => {
                console.log('createNewParent--Response---', response);
                this.dataProvider.hideLoading();
                this.dataProvider.showToast(response);
                this.router.navigate(['requested-parent']);
            }).catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(err);
            });
        }
    }
    getStudents() {
        let data = {
            'school_id': this.userdata.details.school_id
        };
        this.dataProvider.getSchoolStudents(data).then(res => {
            this.dataProvider.hideLoading();
            console.log('seminar class', res);
            if (res.data) {
                this.students = res.data;
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(error);
            console.log(error);
        });
    }
    _keyPress(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
};
AddParentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddParentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-parent',
        template: _raw_loader_add_parent_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_parent_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AddParentPage);



/***/ }),

/***/ "jw23":
/*!*************************************************!*\
  !*** ./src/app/add-parent/add-parent.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGFyZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "n/2B":
/*!*********************************************************!*\
  !*** ./src/app/add-parent/add-parent-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddParentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentPageRoutingModule", function() { return AddParentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_parent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-parent.page */ "gKZN");




const routes = [
    {
        path: '',
        component: _add_parent_page__WEBPACK_IMPORTED_MODULE_3__["AddParentPage"]
    }
];
let AddParentPageRoutingModule = class AddParentPageRoutingModule {
};
AddParentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddParentPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-parent-add-parent-module-es2015.js.map
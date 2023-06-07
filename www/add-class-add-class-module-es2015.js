(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-class-add-class-module"],{

/***/ "+q+B":
/*!*********************************************!*\
  !*** ./src/app/add-class/add-class.page.ts ***!
  \*********************************************/
/*! exports provided: AddClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassPage", function() { return AddClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-class.page.html */ "LdUu");
/* harmony import */ var _add_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-class.page.scss */ "Npxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");








let AddClassPage = class AddClassPage {
    constructor(navCtrl, dataProvider, translate, alertCtrl, route, router, zone, platform) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.platform = platform;
        this.userDetails = {};
        this.classes = [];
        this.chnagedData = [];
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
    }
    ngOnInit() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.getClasses();
        }
    }
    getClasses() {
        let data = {
            "user_no": this.userDetails.details.user_no,
            "school_id": this.userDetails.details.school_id,
            "session_id": this.userDetails.session_id
        };
        this.dataProvider.showLoading();
        this.dataProvider.getTeachersClass(data).then(res => {
            this.dataProvider.hideLoading();
            if (res.data) {
                this.classes = res.data;
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(this.lang.usnexpectedError);
            console.log(error);
        });
    }
    changeClass(course, eve) {
        let isPresent = false;
        let ind;
        let selectedCourse = {
            'cid': course.courses.cid,
            "status": eve.detail.checked
        };
        for (let i = 0; i < this.chnagedData.length; i++) {
            if (this.chnagedData[i]['cid'] == selectedCourse.cid) {
                isPresent = true;
                ind = i;
            }
        }
        if (isPresent) {
            this.chnagedData.splice(ind, 1);
        }
        else {
            this.chnagedData.push(selectedCourse);
        }
        // console.log(this.chnagedData);
    }
    setClasses() {
        let data = {
            "user_no": this.userDetails.details.user_no,
            "school_id": this.userDetails.details.school_id,
            "session_id": this.userDetails.session_id,
            "updates": this.chnagedData
        };
        this.dataProvider.showLoading();
        this.dataProvider.setTeachersClass(data).then(res => {
            this.dataProvider.showToast(this.lang.class_added);
            this.dataProvider.hideLoading();
            const navigation = {
                state: {
                    isUpdated: true
                }
            };
            this.zone.run(() => {
                this.router.navigate(['tabs/follow-up-student'], navigation);
            });
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(this.lang.usnexpectedError);
            console.log(error);
        });
    }
};
AddClassPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
AddClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-class',
        template: _raw_loader_add_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], AddClassPage);



/***/ }),

/***/ "LdUu":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-class/add-class.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n      <ion-title text-right>{{'followUp_student.select_classes' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"students\" id=\"students\" *ngIf=\"classes\" > \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let class of classes; let i=index\">\t\t\n\t\t\t<ion-item  >\n\t\t\t\t<ion-checkbox slot=\"end\" [checked]=\"class.is_selected\" (ionChange)=\"changeClass(class,$event)\"></ion-checkbox>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{class.courses.name}}</h4>\n\t\t\t    \t<p>{{class.courses.desc}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t</div>\n\n</ion-content>\n<ion-footer style=\"background: #fff;\">\n\t<ion-button  expand=\"block\" shape=\"round\" color=\"primary\" [disabled]=\"!chnagedData.length\" (click)=\"setClasses()\">\n\t\t{{'followUp_student.select_classes' | translate}}\n\t</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "Npxh":
/*!***********************************************!*\
  !*** ./src/app/add-class/add-class.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2xhc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "gwAL":
/*!***********************************************!*\
  !*** ./src/app/add-class/add-class.module.ts ***!
  \***********************************************/
/*! exports provided: AddClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassPageModule", function() { return AddClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-class-routing.module */ "mFov");
/* harmony import */ var _add_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-class.page */ "+q+B");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let AddClassPageModule = class AddClassPageModule {
};
AddClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _add_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddClassPageRoutingModule"]
        ],
        declarations: [_add_class_page__WEBPACK_IMPORTED_MODULE_6__["AddClassPage"]]
    })
], AddClassPageModule);



/***/ }),

/***/ "mFov":
/*!*******************************************************!*\
  !*** ./src/app/add-class/add-class-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassPageRoutingModule", function() { return AddClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-class.page */ "+q+B");




const routes = [
    {
        path: '',
        component: _add_class_page__WEBPACK_IMPORTED_MODULE_3__["AddClassPage"]
    }
];
let AddClassPageRoutingModule = class AddClassPageRoutingModule {
};
AddClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddClassPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-class-add-class-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warning-report-warning-report-module"],{

/***/ "fLH3":
/*!*******************************************************!*\
  !*** ./src/app/warning-report/warning-report.page.ts ***!
  \*******************************************************/
/*! exports provided: WarningReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningReportPage", function() { return WarningReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_warning_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./warning-report.page.html */ "foz3");
/* harmony import */ var _warning_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning-report.page.scss */ "geTy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/document/document.service */ "0165");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "METt");












let WarningReportPage = class WarningReportPage {
    constructor(navCtrl, 
    // public app: App,
    translate, dataProvider, authProvider, 
    //public events: Events,
    alertCtrl, route, documentService, zone, router, photoViewer, printer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.documentService = documentService;
        this.zone = zone;
        this.router = router;
        this.photoViewer = photoViewer;
        this.printer = printer;
        this.modalCtrl = modalCtrl;
        this.userDetails = {};
        this.reportData = [];
    }
    ngOnInit(loader = true) {
    }
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.getAllWarning();
        }
    }
    getAllWarning(loader = true) {
        let data = {
            "user_no": this.userDetails.details.user_no,
            "session_id": this.userDetails.session_id,
            "school_id": this.userDetails.details.school_id,
        };
        if (loader)
            this.dataProvider.showLoading();
        this.dataProvider.getAllWarning(data).then(res => {
            this.dataProvider.hideLoading();
            console.log(res);
            if (res) {
                // this.dataProvider.viewNotes(res);
                this.reportData = res;
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            console.log(error);
        });
    }
    printReport(i) {
        console.log(i);
        let data = {
            "user_no": this.userDetails.details.user_no,
            "session_id": this.userDetails.session_id,
            "school_id": this.userDetails.details.school_id,
            "report_number": i + 1
        };
        this.dataProvider.showLoading();
        this.dataProvider.printWarning(data).then(res => {
            this.dataProvider.hideLoading();
            console.log(res);
            if (res) {
                let options = { orientation: 'portrait' };
                this.printer.print(res.url, options).then((onSuccess) => {
                    console.log('printer.print', onSuccess);
                }, (e) => {
                    console.log('printer.print', e);
                });
                // window.open(res.url, '_system');
            }
            else {
                this.dataProvider.showToast('Unable to generate report');
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast('Unable to generate report');
            console.log(error);
        });
    }
};
WarningReportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
WarningReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-warning-report',
        template: _raw_loader_warning_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_warning_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"],
        _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_11__["Printer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], WarningReportPage);



/***/ }),

/***/ "foz3":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warning-report/warning-report.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<!-- <ion-button *ngIf=\"reportData  && reportData.length\" class=\"small_btn_header\"  small clear icon-only (click)=\"printReport()\">\n            <ion-icon name=\"print-outline\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n        </ion-button> -->\n  \t</ion-buttons>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button></ion-menu-button>\n  \t</ion-buttons>\n    <ion-title>{{'sidemenu.warning_report' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-row *ngIf=\"reportData  && reportData.length\" class=\"row-top\">\n\t\t<ion-list>\n\t\t\t<ion-card *ngFor=\"let repo of reportData let i=index;\" class=\"card-react\" [ngStyle]=\"{'background-color': repo.cardColor}\">\n\t\t\t\t<ion-card-header class=\"card-head\">\n\t\t\t\t\t<ion-icon (click)=\"printReport(i)\" name=\"print-outline\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n\t\t\t\t    {{repo.title}} \n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content class=\"card-content\">\n\t\t\t\t\t<h3 *ngIf=\"repo.studentDetails\">{{'create_notes.student_name' | translate }}: {{repo.studentDetails.first_name  }}</h3>\n\t\t\t\t\t<h3 *ngIf=\"repo.studentDetails\">{{'create_notes.student_id'| translate }}: {{repo.studentDetails.username  }}</h3>\n\t\t\t\t\t<h3 *ngIf=\"repo.studentDetails\">{{'createClass.class_name'| translate }}: {{repo.studentDetails.student_class}}</h3>\n\t\t\t\t\t<h3>{{'list-student.unacceptable_absence' | translate}}: {{repo.no_of_unacceptable_absent}}</h3>\n\t\t\t\t\t<!-- <p> {{'student-details.sem' | translate}}: {{repo.sems}} </p> -->\n\t\t\t\t</ion-card-content>\n\t\t\t\t<div class=\"bgIcon\">\n\t\t\t\t\t<ion-icon name=\"warning-outline\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t</ion-card>\n\t\t</ion-list>\n\t</ion-row>\n \n\t<ion-row class=\"msg-row\" *ngIf=\"!reportData  || !reportData.length\">\n\t\t<div class=\"msg\">\n\t\t\t{{'alertmessages.no_record_found' | translate}}\n\t\t</div>\n\t</ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "geTy":
/*!*********************************************************!*\
  !*** ./src/app/warning-report/warning-report.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small_btn_header {\n  padding-left: 10px;\n  color: #000;\n}\n\nion-title {\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.row-top {\n  min-height: 100%;\n  background: #dfe0e0;\n  padding: 10px;\n}\n\n.row-top ion-list {\n  width: 100%;\n  background: unset;\n}\n\n.row-top ion-list .card-react {\n  margin: 0px 0px 22px;\n  min-width: 100%;\n  background: #ffb136;\n  color: #fff;\n  border-radius: 13px;\n  box-shadow: 0px 0px 7px #ffb136;\n}\n\n.row-top ion-list .card-react .card-head {\n  color: #000;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.row-top ion-list .card-react .card-content h3 {\n  font-size: 1rem;\n  margin: 8px 0px;\n  font-weight: bold;\n}\n\n.row-top ion-list .card-react .card-content p {\n  font-weight: bold;\n}\n\n.row-top ion-list .card-react .bgIcon {\n  position: absolute;\n  bottom: 1vh;\n  left: 3vw;\n}\n\n.row-top ion-list .card-react .bgIcon ion-icon {\n  font-size: 4rem;\n  color: #fff;\n}\n\n.msg-row {\n  margin: 20px;\n}\n\n.msg-row .msg {\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dhcm5pbmctcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ssV0FBQTtFQUNILGlCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNDLGdCQUFBO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0FBR0o7O0FBRkk7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFJTDs7QUFISztFQUNRLG9CQUFBO0VBQ04sZUFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFJUDs7QUFITTtFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBS1A7O0FBRk87RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSVI7O0FBRk87RUFDQyxpQkFBQTtBQUlSOztBQURNO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0gsU0FBQTtBQUdQOztBQUZPO0VBQ0ssZUFBQTtFQUNILFdBQUE7QUFJVDs7QUFHQTtFQUNLLFlBQUE7QUFBTDs7QUFDSztFQUNJLGdCQUFBO0FBQ1QiLCJmaWxlIjoid2FybmluZy1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsX2J0bl9oZWFkZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5pb24tdGl0bGV7XHJcblx0ICAgIGNvbG9yOiAjMDAwO1xyXG5cdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucm93LXRvcHtcclxuXHRtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2RmZTBlMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBpb24tbGlzdHtcclxuICAgIFx0d2lkdGg6IDEwMCU7XHJcbiAgICBcdGJhY2tncm91bmQ6IHVuc2V0O1xyXG5cdCAgICAuY2FyZC1yZWFjdHtcclxuICAgIFx0ICAgICAgICBtYXJnaW46IDBweCAwcHggMjJweDtcclxuXHRcdFx0ICAgIG1pbi13aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgIC8vIGhlaWdodDogMjJ2aDtcclxuXHRcdFx0ICAgIGJhY2tncm91bmQ6ICNmZmIxMzY7XHJcblx0XHRcdCAgICBjb2xvcjogI2ZmZjtcclxuXHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcblx0XHRcdCAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjZmZiMTM2O1xyXG5cdFx0ICAgIC5jYXJkLWhlYWR7XHJcblx0XHQgICAgXHRjb2xvcjogIzAwMDtcclxuXHRcdFx0ICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdFx0XHQgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIC5jYXJkLWNvbnRlbnR7XHJcblx0XHQgICAgXHRoM3tcclxuXHRcdCAgICBcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdCAgICBtYXJnaW46IDhweCAwcHg7XHJcblx0XHRcdFx0ICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0cHtcclxuXHRcdCAgICBcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIC5iZ0ljb257XHJcblx0XHQgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgICAgIGJvdHRvbTogMXZoO1xyXG4gICAgXHRcdFx0bGVmdDogM3Z3O1xyXG5cdFx0ICAgIFx0aW9uLWljb257XHJcblx0XHQgICAgXHRcdCAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgfVxyXG5cclxuXHQgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tc2ctcm93e1xyXG5cdCAgICBtYXJnaW46IDIwcHg7XHJcblx0ICAgIC5tc2d7XHJcbiAgICBcdCAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cdCAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "jkih":
/*!*****************************************************************!*\
  !*** ./src/app/warning-report/warning-report-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: WarningReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningReportPageRoutingModule", function() { return WarningReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _warning_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warning-report.page */ "fLH3");




const routes = [
    {
        path: '',
        component: _warning_report_page__WEBPACK_IMPORTED_MODULE_3__["WarningReportPage"]
    }
];
let WarningReportPageRoutingModule = class WarningReportPageRoutingModule {
};
WarningReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WarningReportPageRoutingModule);



/***/ }),

/***/ "jsql":
/*!*********************************************************!*\
  !*** ./src/app/warning-report/warning-report.module.ts ***!
  \*********************************************************/
/*! exports provided: WarningReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningReportPageModule", function() { return WarningReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _warning_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warning-report-routing.module */ "jkih");
/* harmony import */ var _warning_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warning-report.page */ "fLH3");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let WarningReportPageModule = class WarningReportPageModule {
};
WarningReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _warning_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["WarningReportPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_warning_report_page__WEBPACK_IMPORTED_MODULE_6__["WarningReportPage"]]
    })
], WarningReportPageModule);



/***/ })

}]);
//# sourceMappingURL=warning-report-warning-report-module-es2015.js.map
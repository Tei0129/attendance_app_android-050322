(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "00wH":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "MiEk");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "aqON");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "3SwB":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\napp-about-us:host ion-card {\n  margin-bottom: 1px !important;\n}\napp-about-us:host ion-card ion-card-header h2 {\n  font-weight: bold !important;\n  font-size: 1em !important;\n  margin: unset;\n}\napp-about-us:host ion-card ion-card-content {\n  color: #666;\n  text-align: justify;\n  font-size: 0.8em;\n}\napp-about-us:host ion-card ion-card-content ul {\n  list-style: none;\n  padding: 0;\n  margin-left: 0;\n}\napp-about-us:host ion-card ion-card-content li {\n  padding: 4px 0;\n}\napp-about-us:host ion-card ion-card-content li span {\n  color: #2979ff;\n  text-decoration: underline;\n  cursor: pointer;\n}\napp-about-us:host ion-card ion-card-content li::before {\n  content: \"•\";\n  color: #2979ff;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDWjtFQUNJLDZCQUFBO0FBQ1I7QUFDWTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFDSSxhQUFBO0FBQ3BCO0FBRVE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFaO0FBQ1k7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQ2hCO0FBQ1k7RUFDSSxjQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUVwQjtBQUNZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDaEIiLCJmaWxlIjoiYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFib3V0LXVzOmhvc3Qge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5NzlmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGk6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOTc5ZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "MiEk":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "aqON");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "aM5c":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title text-right>{{'about.pagetitle' | translate}}</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <ion-card>\n    <ion-card-header>\n      <h2>{{'about.what_is_stu_follow_up' | translate}}</h2>\n      <!-- <h2>ما هو نظام متابعة الطلاب ؟</h2> -->\n    </ion-card-header>\n    <ion-card-content>\n      {{'about.stu_follow_up_ans' | translate}}\n      <!-- هو عبارة عن تطبيق يهدف إلى تحسين بيئة العمل المدرسي حيث يتيح للإدارة المدرسية متابعة حالة الطالب أثناء الدوام المدرسي بشكل مباشر مقدماً مجموعة من الخدمات المتنوعه التي تعين المعلمين لإداء مهامهم الموكلين بها للتقليل من الأعباء الإدارية ورفع مستوى أدائهم داخل الحصة الدراسية مما ينعكس بالإيجاب على مستوى التحصيل الدراسي لدى الطالب وتقليل الأعباء المالية التي تترتب على ولي الأمر من خلال الدروس الخصوصيه وغيرها. -->\n<!-- كما يسمح النظام بتوفير آلية مبتكرة لتقييم مستوى الطالب سلوكياً وتعليمياً وشراكه رقابية بين المؤسسة التربوية وولي أمر الطالب يساهم في الحد من الظواهر السلبية داخل المبنى المدرسي وإعداد جيل من الشباب واعي بشخصيته, صانع لهويته ومساهم في تحقيق الرؤية الوطنية. -->\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <h2>{{'about.system_goals' | translate}}:</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <!-- <li>ترشيد استهلاك المصادر المادية في المؤسسة التعليمية</li> -->\n        <li>{{'about.ration_the_Consumption' | translate}}</li>\n        <!-- <li>توفير وسيلة سهلة ودقيقة لتسجيل حضور وغياب الطلاب داخل الفصل.</li> -->\n        <li>{{'about.providing_an_easy_and_accurate' | translate}}</li>\n        <!-- <li>توفير تقارير دقيقة ومتابعة مستمرة للطلاب من قبل الإدارة المدرسية.</li> -->\n        <li>{{'about.providing_accurate_report' | translate}}</li>\n        <!-- <li>الحد من الظواهر السلبية داخل المبنى المدرسي وتعزيز الأمن الوقائي لدى الطلاب.</li> -->\n        <li>{{'about.reducing_negative_phenomena' | translate}}</li>\n        <!-- <li>تخفيف العبء على المعلمين المكلفين بالإشراف الإداري والتفرغ لمتابعة سلوك الطلاب.</li> -->\n        <li>{{'about.reducing_the_burden_on_teachers' | translate}}</li>\n        <!-- <li>المساهمة في غرس وتعزيز القيم الأخلاقية النبيلة النابعة من تعاليم ديننا الاسلامي الحنيف والعادات العربية الاصيلة.</li> -->\n        <li>{{'about.contribute_to_instilling' | translate}}</li>\n        <!-- <li>اشراك ولي أمر الطالب بصفة مباشرة وبشكل فعال من اجل تحسين مستوى الطالب تربويا وتعليميا.</li> -->\n        <li>{{'about.involve_the_gardian' | translate}}</li>\n        <!-- <li>توفير الوسائل الكفيلة بجذب العناصر المؤهلة من أعضاء الهيئة التدريسية والفنية بما يضمن حسن استثمار وتوجيه هذه العناصر لخدمة نظام التعليم ورسالته السامية من أجل تطوير وتنمية العمل التربوي.</li> -->\n        <li>{{'about.means_to_attract' | translate}}</li>\n        <!-- <li>المساهمة في إعداد جيل من الشباب واعي بشخصيته، صانع لهويته ومساهم في تحقيق الرؤية الوطنية.</li> -->\n        <li>{{'about.contribute_to_pre_young_gen' | translate}}</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n\n    <ion-card>\n    <ion-card-header>\n      <!-- <h2>لمزيد من المعلومات:</h2> -->\n      <h2>{{'about.further_info' | translate}}</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <ul>\n        <li (click) = \"openPDF('https://basmapp.com/Att-App/assets/appmanual.pdf')\" class=\"link\">{{'about.system_user_manual'| translate}} [ <span>{{'about.press_here' | translate}} </span> ] </li>\n        <!-- <li (click) = \"openPDF('https://webapp.ws/att-admin/assets/appmanual.pdf')\" class=\"link\">{{'about.system_user_manual'| translate}} [ <span>{{'about.press_here' | translate}} </span> ] </li> -->\n        <!-- <li>قسم المحتوى التعليمي الخاص بكيفية استخدام النظام</li> -->\n        <li>{{'about.sec_of_educational_content' | translate}}</li>\n        <li (click) = \"openUrl('https://webapp.ws/iticket/')\" class=\"link\">{{'about.system_technical_support_site' | translate}} [ <span>{{'about.press_here' | translate}}</span> ]</li>\n      </ul>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "aqON":
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-us.page.html */ "aM5c");
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.page.scss */ "3SwB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let AboutUsPage = class AboutUsPage {
    constructor(iap) {
        this.iap = iap;
    }
    /**
     * Used to open the weblink
     * @param url
     */
    openUrl(url) {
        const browser = this.iap.create(url, '_blank');
        browser.show();
    }
    openPDF(url) {
        window.open(url, '_system');
        //browser.show();
    }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module-es2015.js.map
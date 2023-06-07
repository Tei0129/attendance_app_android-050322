(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-bulletins-share-bulletins-module"],{

/***/ "PP/t":
/*!***********************************************************!*\
  !*** ./src/app/share-bulletins/share-bulletins.module.ts ***!
  \***********************************************************/
/*! exports provided: ShareBulletinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBulletinsPageModule", function() { return ShareBulletinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _share_bulletins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-bulletins-routing.module */ "VgP3");
/* harmony import */ var _share_bulletins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share-bulletins.page */ "d2gO");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let ShareBulletinsPageModule = class ShareBulletinsPageModule {
};
ShareBulletinsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _share_bulletins_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShareBulletinsPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_share_bulletins_page__WEBPACK_IMPORTED_MODULE_6__["ShareBulletinsPage"]]
    })
], ShareBulletinsPageModule);



/***/ }),

/***/ "VgP3":
/*!*******************************************************************!*\
  !*** ./src/app/share-bulletins/share-bulletins-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShareBulletinsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBulletinsPageRoutingModule", function() { return ShareBulletinsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_bulletins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-bulletins.page */ "d2gO");




const routes = [
    {
        path: '',
        component: _share_bulletins_page__WEBPACK_IMPORTED_MODULE_3__["ShareBulletinsPage"]
    }
];
let ShareBulletinsPageRoutingModule = class ShareBulletinsPageRoutingModule {
};
ShareBulletinsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShareBulletinsPageRoutingModule);



/***/ }),

/***/ "d2gO":
/*!*********************************************************!*\
  !*** ./src/app/share-bulletins/share-bulletins.page.ts ***!
  \*********************************************************/
/*! exports provided: ShareBulletinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBulletinsPage", function() { return ShareBulletinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_share_bulletins_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./share-bulletins.page.html */ "iB6S");
/* harmony import */ var _share_bulletins_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-bulletins.page.scss */ "idCA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_document_scanner_ngx___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/document-scanner/ngx/ */ "Vj9j");











let ShareBulletinsPage = class ShareBulletinsPage {
    constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, network, route, router, documentScanner, zone, platform) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.route = route;
        this.router = router;
        this.documentScanner = documentScanner;
        this.zone = zone;
        this.platform = platform;
        this.bulletin = {};
        this.navData = {};
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.navData = this.router.getCurrentNavigation().extras.state;
                this.bulletin = this.router.getCurrentNavigation().extras.state.bulletin;
                this.forward_user_no = this.router.getCurrentNavigation().extras.state.forward_user_no;
                this.school_id = this.router.getCurrentNavigation().extras.state.school_id;
                console.log(this.navData);
            }
        });
    }
    share() {
        let data = {
            bulletinId: this.bulletin.bulletin_id,
            forwardedby_user_no: this.forward_user_no,
            school_id: this.school_id,
            description: this.description
        };
        const navigation = {
            state: {
                bulletinId: this.bulletin.bulletin_id,
                data: data
            }
        };
        this.zone.run(() => {
            this.router.navigate(['select-bulletins-user'], navigation);
        });
    }
    ngOnInit() {
    }
};
ShareBulletinsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_native_document_scanner_ngx___WEBPACK_IMPORTED_MODULE_10__["DocumentScanner"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ShareBulletinsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-share-bulletins',
        template: _raw_loader_share_bulletins_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_share_bulletins_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_native_document_scanner_ngx___WEBPACK_IMPORTED_MODULE_10__["DocumentScanner"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], ShareBulletinsPage);



/***/ }),

/***/ "iB6S":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share-bulletins/share-bulletins.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>\n\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button>\n  \t\t</ion-menu-button>\n  \t</ion-buttons>\n    <ion-title>{{'bulletin.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n\t<ion-list lines=\"none\" *ngIf=\"bulletin\">\n\t\t<ion-item>\n\t\t\t<p >{{bulletin.description}}</p>\n\t\t\t<!-- <ion-input placeholder=\"{{bulletin.description}}\" readonly=\"true\">\n\t\t\t</ion-input> -->\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">{{'bulletin.note' | translate}}</ion-label>\n\t\t\t<ion-textarea placeholder=\"\" [(ngModel)]=\"description\">\n\t\t\t</ion-textarea>\n\t\t</ion-item>\n\t</ion-list>\n\n</ion-content>\n<ion-footer>\n\t<ion-button expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"share()\">{{'bulletin.select_user' | translate}}</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "idCA":
/*!***********************************************************!*\
  !*** ./src/app/share-bulletins/share-bulletins.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 2.1vh;\n}\n\nion-list {\n  background: #e6e6e6;\n  padding: 10px;\n  height: 100%;\n}\n\nion-item {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NoYXJlLWJ1bGxldGlucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtBQUNEOztBQUNBO0VBQ0ssbUJBQUE7RUFDRCxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0Msa0JBQUE7QUFHRCIsImZpbGUiOiJzaGFyZS1idWxsZXRpbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG5cdGZvbnQtc2l6ZTogMi4xdmg7XHJcbn1cclxuaW9uLWxpc3R7XHJcblx0ICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1pdGVte1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=share-bulletins-share-bulletins-module-es2015.js.map
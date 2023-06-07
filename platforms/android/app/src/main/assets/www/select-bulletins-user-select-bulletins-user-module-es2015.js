(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-bulletins-user-select-bulletins-user-module"],{

/***/ "2awE":
/*!***********************************************************************!*\
  !*** ./src/app/select-bulletins-user/select-bulletins-user.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbGVjdC1idWxsZXRpbnMtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFBO0FBQUYiLCJmaWxlIjoic2VsZWN0LWJ1bGxldGlucy11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG5cdHB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ "FSmK":
/*!*********************************************************************!*\
  !*** ./src/app/select-bulletins-user/select-bulletins-user.page.ts ***!
  \*********************************************************************/
/*! exports provided: SelectBulletinsUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBulletinsUserPage", function() { return SelectBulletinsUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_bulletins_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-bulletins-user.page.html */ "HLMi");
/* harmony import */ var _select_bulletins_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-bulletins-user.page.scss */ "2awE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");







//import { TabsPage } from '../tabs/tabs';

let SelectBulletinsUserPage = class SelectBulletinsUserPage {
    constructor(navCtrl, dataProvider, translate, alertCtrl, route, router, zone, platform) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.platform = platform;
        this.allUsers = [];
        this.users = [];
        this.formData = {};
        this.userDetails = {};
        this.selectedUsers = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.formData = this.router.getCurrentNavigation().extras.state.formdata;
                this.type = this.router.getCurrentNavigation().extras.state.type;
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.bulletinId = this.router.getCurrentNavigation().extras.state.bulletinId;
                console.log(this.formData);
            }
        });
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.getUsers();
            console.log();
        }
    }
    getUsers() {
        let data = {
            'school_id': this.userDetails.details.school_id
        };
        this.dataProvider.showLoading();
        this.dataProvider.getSchoolUsers(data).then(res => {
            this.dataProvider.hideLoading();
            console.log('seminar class', res);
            if (res.data) {
                this.users = res.data;
                if (this.users.length > 1) {
                    this.allUsers = this.users.splice(0, 20);
                }
                else {
                    this.allUsers = this.users;
                }
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast(error);
            console.log(error);
        });
    }
    filterList(event) {
        //this.selectTopic=[];
        let input = document.getElementById('search').value;
        console.log(input);
        let data = {
            input: input,
            school_id: this.userDetails.details.school_id
        };
        this.dataProvider.searchUser(data).then(resp => {
            if (resp.data) {
                this.users = resp.data;
                if (this.users.length > 1) {
                    this.allUsers = this.users.splice(0, 20);
                }
                else {
                    this.allUsers = this.users;
                }
            }
        }).catch(arr => {
            console.log(arr);
        });
    }
    selectUser(users, eve, id) {
        console.log("custon event:::", eve);
        let isPresent = false;
        let ind;
        for (let i = 0; i < this.selectedUsers.length; i++) {
            if (this.selectedUsers[i] == users.user_no) {
                isPresent = true;
                ind = i;
            }
        }
        if (eve.detail.checked == true) {
            if (!isPresent) {
                if (users.user_no != this.userDetails.details.user_no) {
                    this.selectedUsers.push(users.user_no);
                }
                else {
                    this.dataProvider.showToast(this.lang.same_user);
                    let elem = (document.getElementById('ch' + id));
                    elem.checked = false;
                }
            }
        }
        else {
            if (isPresent) {
                this.selectedUsers.splice(ind, 1);
            }
        }
        console.log(this.selectedUsers);
    }
    uplaodBullentin(user) {
        console.log(user);
        if (this.bulletinId) {
            this.data.users = this.selectedUsers;
            // this.data.shareto_user_no=user.user_no;
            console.log(this.data);
            this.dataProvider.showLoading();
            this.dataProvider.shareBulletins(this.data).then(res => {
                this.dataProvider.hideLoading();
                console.log(res);
                this.dataProvider.showToast(res.message);
                this.router.navigate(['bulletins']);
            }).catch(err => {
                this.dataProvider.showToast(err.message);
                this.dataProvider.hideLoading();
                console.log(err);
            });
        }
        else {
            if (user.user_no != this.userDetails.details.user_no) {
                this.formData.users = user;
                console.log('this.formdata', this.formData);
                this.dataProvider.showLoading();
                this.dataProvider.createBulletins(this.formData).subscribe(res => {
                    this.dataProvider.hideLoading();
                    console.log(res);
                    this.dataProvider.showToast(res.message);
                    this.router.navigate(['bulletins']);
                }, err => {
                    this.dataProvider.showToast(err.message);
                    this.dataProvider.hideLoading();
                    console.log(err);
                });
            }
            else {
                this.dataProvider.showToast(this.lang.same_user);
            }
        }
    }
    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.allUsers = this.allUsers.concat(this.users.splice(0, 20));
            infiniteScroll.target.complete();
        }, 500);
    }
};
SelectBulletinsUserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
SelectBulletinsUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-bulletins-user',
        template: _raw_loader_select_bulletins_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_bulletins_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], SelectBulletinsUserPage);



/***/ }),

/***/ "HLMi":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-bulletins-user/select-bulletins-user.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n     <ion-toolbar>\n        <ion-searchbar style=\"padding-top: 15px;\" mode=\"ios\" placeholder=\"{{'search.search_user' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n      </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"students\" id=\"students\" *ngIf=\"allUsers && bulletinId && type!='create'\" > \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let users of allUsers; let i=index\">\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox slot=\"end\" id=\"ch{{i}}\" (ionChange)=\"selectUser(users,$event,i)\"></ion-checkbox>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{users.first_name}}</h4>\n\t\t\t    \t<p>{{users.username}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t</div>\n\t<div class=\"students\" id=\"students\" *ngIf=\"allUsers && type=='create'\"> \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let users of allUsers\">\t\t\n\t\t\t<ion-item  (click)=\"uplaodBullentin(users)\">\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{users.first_name}}</h4>\n\t\t\t    \t<p>{{users.username}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t</div>\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n<ion-footer>\n\t<ion-button *ngIf=\"type!='create'\" expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"uplaodBullentin('users')\">\n\t\t{{'bulletin.share' | translate}}\n\t</ion-button>\n\t</ion-footer>\n");

/***/ }),

/***/ "SbW6":
/*!*******************************************************************************!*\
  !*** ./src/app/select-bulletins-user/select-bulletins-user-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectBulletinsUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBulletinsUserPageRoutingModule", function() { return SelectBulletinsUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-bulletins-user.page */ "FSmK");




const routes = [
    {
        path: '',
        component: _select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_3__["SelectBulletinsUserPage"]
    }
];
let SelectBulletinsUserPageRoutingModule = class SelectBulletinsUserPageRoutingModule {
};
SelectBulletinsUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectBulletinsUserPageRoutingModule);



/***/ }),

/***/ "gpDj":
/*!***********************************************************************!*\
  !*** ./src/app/select-bulletins-user/select-bulletins-user.module.ts ***!
  \***********************************************************************/
/*! exports provided: SelectBulletinsUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBulletinsUserPageModule", function() { return SelectBulletinsUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_bulletins_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-bulletins-user-routing.module */ "SbW6");
/* harmony import */ var _select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-bulletins-user.page */ "FSmK");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let SelectBulletinsUserPageModule = class SelectBulletinsUserPageModule {
};
SelectBulletinsUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _select_bulletins_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectBulletinsUserPageRoutingModule"]
        ],
        declarations: [_select_bulletins_user_page__WEBPACK_IMPORTED_MODULE_6__["SelectBulletinsUserPage"]]
    })
], SelectBulletinsUserPageModule);



/***/ })

}]);
//# sourceMappingURL=select-bulletins-user-select-bulletins-user-module-es2015.js.map
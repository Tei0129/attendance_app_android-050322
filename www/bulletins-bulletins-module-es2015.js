(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bulletins-bulletins-module"],{

/***/ "/MlY":
/*!*******************************************************!*\
  !*** ./src/app/bulletins/bulletins-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BulletinsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletinsPageRoutingModule", function() { return BulletinsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bulletins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulletins.page */ "FC2f");




const routes = [
    {
        path: '',
        component: _bulletins_page__WEBPACK_IMPORTED_MODULE_3__["BulletinsPage"]
    }
];
let BulletinsPageRoutingModule = class BulletinsPageRoutingModule {
};
BulletinsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BulletinsPageRoutingModule);



/***/ }),

/***/ "/yTV":
/*!***********************************************!*\
  !*** ./src/app/bulletins/bulletins.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 2.1vh;\n}\n\n.forward-btn {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.pdf-div {\n  width: 30vw;\n  float: right;\n  margin: 5px;\n}\n\n.pdf-div img {\n  width: 31vw;\n  height: 16vh;\n}\n\n.pdf-div ion-icon {\n  font-size: 47px;\n  position: absolute;\n  right: 9vh;\n  top: 8vh;\n  color: #2979ff;\n}\n\n.user-list {\n  width: 82%;\n}\n\n.user-list ion-list-header {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.image_single {\n  width: 157px;\n  height: 150px;\n}\n\n.lock {\n  position: absolute;\n  left: 10px;\n  top: 9px;\n  font-size: 18px;\n}\n\nion-card ion-card-header {\n  padding-bottom: unset;\n}\n\nion-card ion-card-header h3 {\n  margin-top: unset;\n  font-size: 13px;\n  margin-bottom: 1px;\n  font-weight: 600;\n}\n\nion-card ion-card-header span {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1bGxldGlucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtBQUNEOztBQUNBO0VBQ0MsMEJBQUE7RUFDRyxpQkFBQTtBQUVKOztBQUNBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBREM7RUFDSyxXQUFBO0VBQ0EsWUFBQTtBQUdOOztBQURDO0VBQ0MsZUFBQTtFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBR0w7O0FBQUE7RUFDQyxVQUFBO0FBR0Q7O0FBRkM7RUFDQyxlQUFBO0VBQ0UsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUtMOztBQUZDO0VBQ0MscUJBQUE7QUFLRjs7QUFKRTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFNSDs7QUFKRTtFQUNDLGVBQUE7QUFNSCIsImZpbGUiOiJidWxsZXRpbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG5cdGZvbnQtc2l6ZTogMi4xdmg7XHJcbn1cclxuLmZvcndhcmQtYnRue1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5wZGYtZGl2e1xyXG5cdHdpZHRoOiAzMHZ3O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0aW1ne1xyXG5cdFx0ICAgIHdpZHRoOiAzMXZ3O1xyXG4gICAgXHRcdGhlaWdodDogMTZ2aDtcclxuXHR9XHJcblx0aW9uLWljb257XHJcblx0XHRmb250LXNpemU6IDQ3cHg7XHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDl2aDtcclxuXHQgICAgdG9wOiA4dmg7XHJcblx0ICAgIGNvbG9yOiAjMjk3OWZmO1xyXG5cdH1cclxufVxyXG4udXNlci1saXN0e1xyXG5cdHdpZHRoOiA4MiU7XHJcblx0aW9uLWxpc3QtaGVhZGVye1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG59XHJcbi5pbWFnZV9zaW5nbGV7XHJcbiAgICB3aWR0aDogMTU3cHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5sb2Nre1xyXG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIGxlZnQ6IDEwcHg7XHJcblx0ICAgIHRvcDogOXB4O1xyXG5cdCAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcblx0aW9uLWNhcmQtaGVhZGVye1xyXG5cdFx0cGFkZGluZy1ib3R0b206IHVuc2V0O1xyXG5cdFx0aDN7XHJcblx0XHRcdG1hcmdpbi10b3A6IHVuc2V0O1xyXG5cdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDFweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdH1cclxuXHRcdHNwYW57XHJcblx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FC2f":
/*!*********************************************!*\
  !*** ./src/app/bulletins/bulletins.page.ts ***!
  \*********************************************/
/*! exports provided: BulletinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletinsPage", function() { return BulletinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bulletins_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bulletins.page.html */ "pQC2");
/* harmony import */ var _bulletins_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulletins.page.scss */ "/yTV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_document_scanner_ngx___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/document-scanner/ngx/ */ "Vj9j");
/* harmony import */ var _service_document_document_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/document/document.service */ "0165");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/loader/loader.component */ "vPOg");








//import { TabsPage } from '../tabs/tabs';









let BulletinsPage = class BulletinsPage {
    constructor(navCtrl, dataProvider, authProvider, translate, alertCtrl, camera, network, photoViewer, route, router, documentService, documentScanner, zone, popoverController, fileOpener, platform) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.network = network;
        this.photoViewer = photoViewer;
        this.route = route;
        this.router = router;
        this.documentService = documentService;
        this.documentScanner = documentScanner;
        this.zone = zone;
        this.popoverController = popoverController;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.bulletins = [];
        this.allBullentins = [];
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
        // this.presentPopover();
        console.log("ghdfg===>", this.allBullentins);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            this.user_no = this.userDetails.details.user_no;
            this.getBulletins();
        }
    }
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle',
            });
            return this.popOver.present();
        });
    }
    dissmissPopOver() {
        this.popOver.dismiss();
    }
    addBulletin(base64Image) {
        let objToSend = {
            queryParams: {
                base64Image: base64Image
            }
        };
        this.router.navigate(['follow-bulletins'], { state: { cameraImage: objToSend } });
    }
    openImage(image) {
        this.photoViewer.show(image);
    }
    getMIMEtype(extn) {
        let ext = extn.toLowerCase();
        let MIMETypes = {
            'txt': 'text/plain',
            'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'doc': 'application/msword',
            'pdf': 'application/pdf',
            'jpg': 'image/jpeg',
            'bmp': 'image/bmp',
            'png': 'image/png',
            'xls': 'application/vnd.ms-excel',
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'rtf': 'application/rtf',
            'ppt': 'application/vnd.ms-powerpoint',
            'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        };
        return MIMETypes[ext];
    }
    opendoc(pdf) {
        let link = 'https://docs.google.com/viewer?url=' + pdf;
        console.log(link);
        window.open(link, '_system');
    }
    openBulletin(bullet) {
        console.log(bullet);
        const navigation = {
            state: bullet
        };
        this.zone.run(() => {
            this.router.navigate(['view-bulletin'], navigation);
        });
    }
    getBulletins() {
        let data = {
            user_no: this.userDetails.details.user_no,
            school_id: this.userDetails.details.school_id
        };
        this.presentPopover();
        this.dataProvider.getBulletins(data).then(res => {
            this.dissmissPopOver();
            if (res) {
                this.bulletins = res.data;
                if (this.bulletins) {
                    if (this.bulletins.length > 1) {
                        this.allBullentins = this.bulletins.splice(0, 20);
                    }
                    else {
                        this.allBullentins = this.bulletins;
                    }
                    console.log(this.allBullentins);
                }
            }
        }).catch(e => {
            this.dissmissPopOver();
            console.log(e);
        });
    }
    shareBulletin(bullet) {
        const navigation = {
            state: {
                bulletin: bullet,
                forward_user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id
            }
        };
        this.zone.run(() => {
            this.router.navigate(['share-bulletins'], navigation);
        });
    }
    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.allBullentins = this.allBullentins.concat(this.bulletins.splice(0, 20));
            infiniteScroll.target.complete();
        }, 500);
    }
    openPdf(pdf) {
        // let link='https://docs.google.com/viewer?url='+pdf;
        // console.log(link);
        // window.open(link, '_system');
        window.open(pdf, '_system');
        // this.documentService.openPdf(pdf,true);
    }
    openPdfs(pdf) {
        window.open(pdf + '.pdf', '_system');
        //this.documentService.openPdf(pdf,true);
    }
    openCamera() {
        let options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG
        };
        this.camera.getPicture(options).then((imageData) => {
            if (imageData) {
                this.addBulletin(imageData);
            }
        }, (err) => {
            console.log(err);
        });
    }
};
BulletinsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__["PhotoViewer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _service_document_document_service__WEBPACK_IMPORTED_MODULE_12__["DocumentService"] },
    { type: _ionic_native_document_scanner_ngx___WEBPACK_IMPORTED_MODULE_11__["DocumentScanner"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_14__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
BulletinsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bulletins',
        template: _raw_loader_bulletins_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bulletins_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__["PhotoViewer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _service_document_document_service__WEBPACK_IMPORTED_MODULE_12__["DocumentService"],
        _ionic_native_document_scanner_ngx___WEBPACK_IMPORTED_MODULE_11__["DocumentScanner"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_14__["FileOpener"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], BulletinsPage);



/***/ }),

/***/ "O/+U":
/*!***********************************************!*\
  !*** ./src/app/bulletins/bulletins.module.ts ***!
  \***********************************************/
/*! exports provided: BulletinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletinsPageModule", function() { return BulletinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bulletins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bulletins-routing.module */ "/MlY");
/* harmony import */ var _bulletins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulletins.page */ "FC2f");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");









let BulletinsPageModule = class BulletinsPageModule {
};
BulletinsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bulletins_routing_module__WEBPACK_IMPORTED_MODULE_5__["BulletinsPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_bulletins_page__WEBPACK_IMPORTED_MODULE_6__["BulletinsPage"]],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]]
    })
], BulletinsPageModule);



/***/ }),

/***/ "pQC2":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulletins/bulletins.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t <!-- <ion-button ico-only *ngIf=\"userType=='1'\" (click)=\"addBulletin()\"> -->\n        <ion-button ico-only *ngIf=\"userType=='1'\" (click)=\"openCamera()\">\n  \t\t\t<ion-icon name=\"add-outline\" ></ion-icon>\n  \t\t</ion-button>\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>   \n\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button>\n  \t\t</ion-menu-button>\n  \t</ion-buttons>\n    <ion-title>{{'bulletin.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n<div *ngIf=\"allBullentins\">\n    <ion-card *ngFor=\"let bullet of allBullentins\">\n      <ion-icon *ngIf=\"bullet.is_closed=='1'\" color=\"secondary\" class=\"lock\" name=\"checkmark-outline\"></ion-icon>\n      <ion-card-header>\n        <h3>{{bullet.bulletin_title}}</h3>\n        <span >{{bullet.created_at | dateFormat}}</span>\n        <ion-item style=\"width: 100%;\" *ngIf=\"bullet.created_by== user_no\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{bullet.created_by_user_pic}}\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n          </ion-avatar>\n            <ion-label>\n              <h3>{{bullet.created_by_username}}</h3>\n            </ion-label>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%;\" *ngIf=\"bullet.created_by == bullet.send_by && bullet.created_by!= user_no\">\n          <span>{{'bulletin.send_by' | translate}} <ion-icon name=\"caret-back-outline\"></ion-icon></span>\n              <h3>{{bullet.send_by_username}}</h3>\n        </ion-item>\n        \n        <ion-item style=\"width: 100%;\" *ngIf=\"bullet.created_by != bullet.send_by && bullet.created_by!= user_no\">\n          <span>{{'bulletin.forwarded_by' | translate}} <ion-icon name=\"caret-back-outline\"></ion-icon></span>\n              <h3>{{bullet.send_by_username}}</h3>\n        </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div *ngIf=\"bullet.documents.pdf !=''\">\n              <div class=\"pdf-div\" (click)=\"openPdfs(bullet.documents.pdf)\">\n                  <img src=\"pdf\" onerror=\"this.onerror=null;this.src='assets/imgs/pdfnew.png';\">\n                  <!-- <ion-icon name=\"document-attach-outline\"></ion-icon> -->\n              </div>\n              <div *ngFor=\"let doc of bullet.documents.files\">\n                <div *ngIf=\"!doc.is_img\">\n                  <div class=\"pdf-div\" *ngIf=\"doc.extension=='pdf'\" (click)=\"openPdf(doc.url_original)\">\n                    <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/pdfnew.png';\">\n                    <!-- <ion-icon  name=\"document-attach-outline\"></ion-icon> -->\n                  </div>\n                  <div class=\"pdf-div\" *ngIf=\"doc.extension!='pdf'\" (click)=\"opendoc(doc.url)\">\n                    <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/doc.png';\">\n                  </div>\n                </div>\n              </div>\n              \n            </div>\n            <div *ngIf=\"bullet.documents.pdf ==''\">\n              <div *ngFor=\"let doc of bullet.documents.files\">\n                <div class=\"pdf-div\" *ngIf=\"doc.extension=='pdf' && !doc.is_img\" (click)=\"openPdf(doc.url_original)\">\n                  <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/pdfnew.png';\">\n                  <!-- <ion-icon  name=\"document-attach-outline\"></ion-icon> -->\n                </div>\n                <div class=\"pdf-div\" *ngIf=\"doc.extension!='pdf' && !doc.is_img\" (click)=\"opendoc(doc.url)\">\n                  <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/doc.png';\">\n                </div>\n                <div class=\"pdf-div\" *ngIf=\"doc.is_img\" (click)=\"openImage(doc.url_original)\">\n                  <img [src]=\"doc.url_original\" onerror=\"this.onerror=null;this.src='assets/imgs/image.png';\">\n                </div>\n              </div>\n              \n            </div>\n          </ion-col>\n          <!-- <ion-col size=\"6\">\n            <div class=\"pdf-div\" (click)=\"openPdf(bullet.documents.pdf)\">\n              <img *ngIf=\"bullet.documents.image && bullet.documents.pdf\" [src]=\"bullet.documents.image\" onerror=\"this.onerror=null;this.src='assets/imgs/pdfnew.png';\">\n                <ion-icon *ngIf=\"bullet.documents.pdf\" name=\"document-attach-outline\"></ion-icon>\n            </div>\n              <img *ngIf=\"bullet.documents.image && !bullet.documents.pdf\" [src]=\"bullet.documents.image\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\" (click)=\"openImage(bullet.documents.image)\" class=\"image_single\">\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" >\n            <ion-button (click)=\"openBulletin(bullet)\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"forward-btn\">\n              {{'bulletin.view' | translate}}\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\"></ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n</div>\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=bulletins-bulletins-module-es2015.js.map
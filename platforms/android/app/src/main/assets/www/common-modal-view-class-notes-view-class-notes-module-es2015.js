(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-modal-view-class-notes-view-class-notes-module"],{

/***/ "6RMq":
/*!**************************************************************************!*\
  !*** ./src/app/common-modal/view-class-notes/view-class-notes.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trash {\n  float: left;\n  font-size: 25px;\n  padding: 2px;\n  color: #eb445a;\n}\n\n.pdf-div img {\n  width: 36vw;\n  height: 20vh;\n}\n\n.pdf-div ion-icon {\n  font-size: 47px;\n  position: absolute;\n  right: 9vh;\n  top: 8vh;\n  color: #2979ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZpZXctY2xhc3Mtbm90ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlDO0VBQ0ssV0FBQTtFQUNBLFlBQUE7QUFETjs7QUFHQztFQUNDLGVBQUE7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQURMIiwiZmlsZSI6InZpZXctY2xhc3Mtbm90ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYXNoe1xyXG5cdFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBjb2xvcjogI2ViNDQ1YTtcclxuXHJcbn1cclxuLnBkZi1kaXZ7XHJcblx0aW1ne1xyXG5cdFx0ICAgIHdpZHRoOiAzNnZ3O1xyXG4gICAgXHRcdGhlaWdodDogMjB2aDtcclxuXHR9XHJcblx0aW9uLWljb257XHJcblx0XHRmb250LXNpemU6IDQ3cHg7XHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDl2aDtcclxuXHQgICAgdG9wOiA4dmg7XHJcblx0ICAgIGNvbG9yOiAjMjk3OWZmO1xyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ "GQbG":
/*!************************************************************************!*\
  !*** ./src/app/common-modal/view-class-notes/view-class-notes.page.ts ***!
  \************************************************************************/
/*! exports provided: ViewClassNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClassNotesPage", function() { return ViewClassNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_class_notes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-class-notes.page.html */ "zKwT");
/* harmony import */ var _view_class_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-class-notes.page.scss */ "6RMq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/document/document.service */ "0165");











let ViewClassNotesPage = class ViewClassNotesPage {
    constructor(navCtrl, 
    // public app: App, 
    translate, dataProvider, authProvider, 
    //public events: Events,
    documentService, alertCtrl, route, photoViewer, zone, router, modalController) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.documentService = documentService;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.photoViewer = photoViewer;
        this.zone = zone;
        this.router = router;
        this.modalController = modalController;
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.navData = this.router.getCurrentNavigation().extras.state.course;
                console.log(this.navData);
            }
        });
    }
    ngOnInit() {
        console.log('moda', this.data);
    }
    cloeModal() {
        this.modalController.dismiss();
    }
    showPhoto(url) {
        console.log(url);
        this.photoViewer.show(url);
    }
    ionViewWillEnter() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
        }
    }
    addNotes() {
        this.cloeModal();
        const navigation = {
            state: {
                state: this.state,
                data: this.data
            }
        };
        //console.log(navigation);
        this.zone.run(() => {
            this.router.navigate(['add-notes'], navigation);
        });
        //this.router.navigate(['add-notes']);
    }
    openPdf(pdf) {
        //  window.open(pdf,'_blank')
        // this.documentService.openPdf(pdf,true);
        window.open(pdf, '_system');
    }
    deleteNote(note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.delete_note,
                backdropDismiss: true,
                mode: 'ios',
                buttons: [
                    {
                        text: this.lang.delete,
                        handler: () => {
                            console.log(note);
                            let data = {
                                note_id: note.notes_id
                            };
                            this.authProvider.deleteNote(data);
                            this.cloeModal();
                        }
                    },
                    {
                        text: this.lang.alert_btn_cancel_text,
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getAllClassNotes() {
        let course = this.navData;
        let studentData = {
            "user_no": this.userDetails.details.user_no,
            "session_id": this.userDetails.session_id,
            "course_id": course.cid,
            "school_id": this.userDetails.details.school_id,
        };
        this.dataProvider.getAllClassNotes(studentData).then(res => {
            console.log(res);
            if (res) {
                // this.dataProvider.viewNotes(res);
                this.notes = res;
            }
        }).catch(error => {
            console.log(error);
        });
    }
};
ViewClassNotesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ViewClassNotesPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ViewClassNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-class-notes',
        template: _raw_loader_view_class_notes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_class_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ViewClassNotesPage);



/***/ }),

/***/ "Hied":
/*!**************************************************************************!*\
  !*** ./src/app/common-modal/view-class-notes/view-class-notes.module.ts ***!
  \**************************************************************************/
/*! exports provided: ViewClassNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClassNotesPageModule", function() { return ViewClassNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_class_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-class-notes-routing.module */ "RxbU");
/* harmony import */ var _view_class_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-class-notes.page */ "GQbG");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");








let ViewClassNotesPageModule = class ViewClassNotesPageModule {
};
ViewClassNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_class_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewClassNotesPageRoutingModule"]
        ],
        declarations: [_view_class_notes_page__WEBPACK_IMPORTED_MODULE_6__["ViewClassNotesPage"]]
    })
], ViewClassNotesPageModule);



/***/ }),

/***/ "RxbU":
/*!**********************************************************************************!*\
  !*** ./src/app/common-modal/view-class-notes/view-class-notes-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewClassNotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClassNotesPageRoutingModule", function() { return ViewClassNotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_class_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-class-notes.page */ "GQbG");




const routes = [
    {
        path: 'view-class-notes',
        component: _view_class_notes_page__WEBPACK_IMPORTED_MODULE_3__["ViewClassNotesPage"]
    }
];
let ViewClassNotesPageRoutingModule = class ViewClassNotesPageRoutingModule {
};
ViewClassNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewClassNotesPageRoutingModule);



/***/ }),

/***/ "zKwT":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-modal/view-class-notes/view-class-notes.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-button class=\"small_btn_header\"  small clear icon-only (click)=\"addNotes()\">\n            <ion-icon name=\"add\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n        </ion-button>\n  \t\t<ion-button icon-only (click)=\"cloeModal()\">\n  \t\t\t<ion-icon name=\"close-circle-outline\"></ion-icon>\n  \t\t</ion-button>\n  \t</ion-buttons>\n    <ion-title>{{'student_notes.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n    <div *ngIf=\"data\">\n\t\t<ion-card *ngFor=\" let note of data\">\n\t\t\t<ion-card-header>\n\t\t\t\t<span style=\"float: left;\">{{note.datetime| dateFormat}}</span>\n\t\t\t\t<ion-item style=\"width: 100%;\" *ngIf=\"note.profile\">\n\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t<img src=\"{{note.profile.pic}}\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h3>{{note.profile.first_name}}</h3>\n\t\t\t\t\t\t<p>{{note.profile.email_id}}</p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t\t<p>\n\t\t\t\t\t{{note.description}}\n\t\t\t\t</p>\n\t\t\t\t<div *ngIf=\"note.file_link\" class=\"pdf-div\" (click)=\"openPdf(note.file_link)\">\n\t\t          <img  [src]=\"'bullet.documents.image'\" onerror=\"this.onerror=null;this.src='assets/imgs/pdf.png';\">\n\t\t            <ion-icon name=\"document-attach-outline\"></ion-icon>\n\t\t        </div>\n\t\t\t\t<!-- <a   href=\"\"><ion-icon name=\"attach\"></ion-icon></a> -->\n\t\t\t\t<img *ngIf=\"note.image_file\" [src]=\"note.image_file\" class=\"images\" (click)=\"showPhoto(note.image_file)\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t<ion-icon class=\"trash\" name=\"trash-outline\" (click)=\"deleteNote(note)\"></ion-icon>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common-modal-view-class-notes-view-class-notes-module-es2015.js.map
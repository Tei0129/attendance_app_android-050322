(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-notes-view-notes-module"],{

/***/ "5qbq":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-notes/view-notes.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n\t\t<ion-button class=\"small_btn_header\"  small clear icon-only (click)=\"openCalModal()\">\n            <ion-icon name=\"calendar-outline\" color=\"icon-header\"></ion-icon>\n        </ion-button>\n\t\t<ion-button class=\"small_btn_header\"  small clear icon-only (click)=\"addNotes()\">\n            <ion-icon name=\"add\" class=\"add-circle\" item-end color=\"icon-header\"></ion-icon>\n        </ion-button>\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'student_notes.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n    <div *ngIf=\"data\">\n\t\t<ion-card *ngFor=\" let note of data; let i=index\">\n\t\t\t<ion-card-header>\n\t\t\t\t<span *ngIf=\"note.send_to !== 'exam'\" style=\"float: left;\">{{note.datetime| dateFormat}}</span>\n\t\t\t\t<span *ngIf=\"note.send_to=='exam'\" style=\"float: left;\">{{note.examNoteDate| dateFormat}}</span>\n\t\t\t\t<ion-item style=\"width: 100%;\" *ngIf=\"note.profile\">\n\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t<img src=\"{{note.profile.pic}}\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h3>{{note.profile.first_name}}</h3>\n\t\t\t\t\t\t<!-- <p>{{note.profile.email_id}}</p> -->\n\t\t\t\t\t\t<span class=\"typeSpan\" *ngIf=\"userType=='1' || note.profile.user_no==userDetails.details.user_no\"> {{'student_notes.sendTO' | translate}}: {{note.send_to=='exam' ? 'اختبار' : note.send_to}} </span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t\t<p style=\"  padding-right: 13px;\">\n\t\t\t\t\t{{note.description}}\n\t\t\t\t</p>\n\t\t\t\t<div *ngIf=\"note.file_link\" class=\"pdf-div\" (click)=\"openPdf(note.file_link)\">\n\t\t          <img  [src]=\"'bullet.documents.image'\" onerror=\"this.onerror=null;this.src='assets/imgs/pdfnew.png';\">\n\t\t            <!-- <ion-icon name=\"document-attach-outline\"></ion-icon> -->\n\t\t        </div>\n\t\t\t\t<!-- <a   href=\"\"><ion-icon name=\"attach\"></ion-icon></a> -->\n\t\t\t\t<img *ngIf=\"note.image_file\" [src]=\"note.image_file\" class=\"images\" (click)=\"showPhoto(note.image_file)\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t<ion-button *ngIf=\"userType=='1' || note.profile.user_no==userDetails.details.user_no\" expand=\"block\" (click)=\"deleteNote(note,i)\" mode=\"ios\" color=\"danger\">\n\t\t\t\t\t{{'bulletin.delete'| translate}}\n\t\t\t\t</ion-button>\n\t\t\t\t<!-- <ion-icon class=\"trash\" name=\"trash-outline\" ></ion-icon> -->\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n    </div>\n\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "Lu3m":
/*!*************************************************!*\
  !*** ./src/app/view-notes/view-notes.module.ts ***!
  \*************************************************/
/*! exports provided: ViewNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotesPageModule", function() { return ViewNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-notes-routing.module */ "bDd4");
/* harmony import */ var _view_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-notes.page */ "uhAp");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _note_calendar_note_calendar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../note-calendar/note-calendar.module */ "tXSK");










let ViewNotesPageModule = class ViewNotesPageModule {
};
ViewNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewNotesPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__["NgCalendarModule"],
            _note_calendar_note_calendar_module__WEBPACK_IMPORTED_MODULE_9__["NoteCalendarPageModule"]
        ],
        declarations: [_view_notes_page__WEBPACK_IMPORTED_MODULE_6__["ViewNotesPage"]]
    })
], ViewNotesPageModule);



/***/ }),

/***/ "aK7b":
/*!*************************************************!*\
  !*** ./src/app/view-notes/view-notes.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trash {\n  float: left;\n  font-size: 25px;\n  padding: 2px;\n  color: #eb445a;\n}\n\n.pdf-div img {\n  width: 16vw;\n  height: 9vh;\n}\n\n.pdf-div ion-icon {\n  font-size: 47px;\n  position: absolute;\n  right: 9vh;\n  top: 8vh;\n  color: #2979ff;\n}\n\n.images {\n  height: 193px;\n  width: 100%;\n  border-radius: 8px;\n}\n\n.typeSpan {\n  font-size: 12px;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXctbm90ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlDO0VBQ1EsV0FBQTtFQUNMLFdBQUE7QUFESjs7QUFHQztFQUNDLGVBQUE7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQURMOztBQUlBO0VBQ0ssYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURMOztBQUdBO0VBQ0MsZUFBQTtFQUNHLGNBQUE7QUFBSiIsImZpbGUiOiJ2aWV3LW5vdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFzaHtcclxuXHRcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgY29sb3I6ICNlYjQ0NWE7XHJcblxyXG59XHJcbi5wZGYtZGl2e1xyXG5cdGltZ3tcclxuXHRcdCAgICAgICB3aWR0aDogMTZ2dztcclxuXHRcdFx0XHRoZWlnaHQ6IDl2aDtcclxuXHR9XHJcblx0aW9uLWljb257XHJcblx0XHRmb250LXNpemU6IDQ3cHg7XHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDl2aDtcclxuXHQgICAgdG9wOiA4dmg7XHJcblx0ICAgIGNvbG9yOiAjMjk3OWZmO1xyXG5cdH1cclxufVxyXG4uaW1hZ2Vze1xyXG5cdCAgICBoZWlnaHQ6IDE5M3B4O1xyXG5cdCAgICB3aWR0aDogMTAwJTtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi50eXBlU3BhbntcclxuXHRmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxufSJdfQ== */");

/***/ }),

/***/ "bDd4":
/*!*********************************************************!*\
  !*** ./src/app/view-notes/view-notes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewNotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotesPageRoutingModule", function() { return ViewNotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-notes.page */ "uhAp");




const routes = [
    {
        path: '',
        component: _view_notes_page__WEBPACK_IMPORTED_MODULE_3__["ViewNotesPage"]
    }
];
let ViewNotesPageRoutingModule = class ViewNotesPageRoutingModule {
};
ViewNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewNotesPageRoutingModule);



/***/ }),

/***/ "uhAp":
/*!***********************************************!*\
  !*** ./src/app/view-notes/view-notes.page.ts ***!
  \***********************************************/
/*! exports provided: ViewNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotesPage", function() { return ViewNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_notes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-notes.page.html */ "5qbq");
/* harmony import */ var _view_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-notes.page.scss */ "aK7b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _service_document_document_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/document/document.service */ "0165");










let ViewNotesPage = class ViewNotesPage {
    constructor(navCtrl, translate, dataProvider, documentService, alertCtrl, route, photoViewer, zone, router, modalController) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.documentService = documentService;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.photoViewer = photoViewer;
        this.zone = zone;
        this.router = router;
        this.modalController = modalController;
        this.data = [];
        this.dataAll = [];
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                if (!this.router.getCurrentNavigation().extras.state.isUpdated) {
                    this.navData = this.router.getCurrentNavigation().extras.state.course;
                    this.state = this.router.getCurrentNavigation().extras.state;
                    // console.log("state contais class:::", this.state);
                }
                else {
                    this.ngOnInit(false);
                }
            }
        });
    }
    ngOnInit(loader = true) {
        this.navData = this.router.getCurrentNavigation().extras.state.course;
        console.log('moda', this.data);
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            this.getAllClassNotes(loader);
        }
    }
    showPhoto(url) {
        console.log(url);
        this.photoViewer.show(url);
    }
    addNotes() {
        const navigation = {
            state: {
                state: this.state,
                data: this.data
            }
        };
        this.zone.run(() => {
            this.router.navigate(['add-notes'], navigation);
        });
    }
    openPdf(pdf) {
        window.open(pdf, '_system');
    }
    deleteNote(note, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.lang.delete_note,
                backdropDismiss: true,
                mode: 'ios',
                buttons: [
                    {
                        text: this.lang.delete,
                        handler: () => {
                            let data = {
                                note_id: note.notes_id
                            };
                            this.dataAll.splice(index, 1);
                            this.dataProvider.deleteNote(data, res => {
                                console.log("delete note res::::", res);
                                this.getAllClassNotes();
                            });
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
    getAllClassNotes(loader = true) {
        let course = this.navData;
        let studentData = {
            "user_no": this.userDetails.details.user_no,
            "session_id": this.userDetails.session_id,
            "course_id": course.cid,
            "school_id": this.userDetails.details.school_id,
        };
        this.dataAll = [];
        if (loader)
            this.dataProvider.showLoading();
        this.dataProvider.getAllClassNotes(studentData).then(res => {
            this.dataProvider.hideLoading();
            if (res) {
                this.data = res;
            }
        }).catch(error => {
            this.dataProvider.hideLoading();
        });
    }
    /* doInfinite(infiniteScroll: any) {
      setTimeout(() => {
        this.dataAll = this.dataAll.concat(this.data.splice(0, 20));
        infiniteScroll.target.complete();
      }, 500);
    } */
    openCalModal() {
        const navigation = {
            state: {
                note: this.data,
                state: this.navData
            }
        };
        this.router.navigate(['note-calendar'], navigation);
    }
};
ViewNotesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _service_document_document_service__WEBPACK_IMPORTED_MODULE_9__["DocumentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ViewNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-notes',
        template: _raw_loader_view_notes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _service_document_document_service__WEBPACK_IMPORTED_MODULE_9__["DocumentService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ViewNotesPage);



/***/ })

}]);
//# sourceMappingURL=view-notes-view-notes-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-notes-student-notes-module"],{

/***/ "E6Hu":
/*!*******************************************************!*\
  !*** ./src/app/student-notes/student-notes.module.ts ***!
  \*******************************************************/
/*! exports provided: StudentNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentNotesPageModule", function() { return StudentNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _student_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-notes-routing.module */ "YL7F");
/* harmony import */ var _student_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-notes.page */ "jOsM");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let StudentNotesPageModule = class StudentNotesPageModule {
};
StudentNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _student_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentNotesPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_student_notes_page__WEBPACK_IMPORTED_MODULE_6__["StudentNotesPage"]]
    })
], StudentNotesPageModule);



/***/ }),

/***/ "SeyO":
/*!*******************************************************!*\
  !*** ./src/app/student-notes/student-notes.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pdf-div img {\n  width: 16vw;\n  height: 9vh;\n}\n.pdf-div ion-icon {\n  font-size: 47px;\n  position: absolute;\n  right: 9vh;\n  top: 8vh;\n  color: #2979ff;\n}\n.images {\n  height: 193px;\n  width: 100%;\n  border-radius: 8px;\n}\n.notes {\n  padding: 25px;\n}\n.notes .no-data {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnQtbm90ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ1EsV0FBQTtFQUNMLFdBQUE7QUFKSjtBQU1DO0VBQ0MsZUFBQTtFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBSkw7QUFPQTtFQUNLLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKTDtBQU1BO0VBQ0MsYUFBQTtBQUhEO0FBSUM7RUFDQyxrQkFBQTtBQUZGIiwiZmlsZSI6InN0dWRlbnQtbm90ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmltYWdlc3tcclxuLy8gXHQgICAgd2lkdGg6IDQydnc7XHJcbi8vICAgICBcdGhlaWdodDogMjl2aDtcclxuLy8gfVxyXG4ucGRmLWRpdntcclxuXHRpbWd7XHJcblx0XHQgICAgICAgd2lkdGg6IDE2dnc7XHJcblx0XHRcdFx0aGVpZ2h0OiA5dmg7XHJcblx0fVxyXG5cdGlvbi1pY29ue1xyXG5cdFx0Zm9udC1zaXplOiA0N3B4O1xyXG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiA5dmg7XHJcblx0ICAgIHRvcDogOHZoO1xyXG5cdCAgICBjb2xvcjogIzI5NzlmZjtcclxuXHR9XHJcbn1cclxuLmltYWdlc3tcclxuXHQgICAgaGVpZ2h0OiAxOTNweDtcclxuXHQgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4ubm90ZXN7XHJcblx0cGFkZGluZzogMjVweDtcclxuXHQubm8tZGF0YXtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "YL7F":
/*!***************************************************************!*\
  !*** ./src/app/student-notes/student-notes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: StudentNotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentNotesPageRoutingModule", function() { return StudentNotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-notes.page */ "jOsM");




const routes = [
    {
        path: '',
        component: _student_notes_page__WEBPACK_IMPORTED_MODULE_3__["StudentNotesPage"]
    }
];
let StudentNotesPageRoutingModule = class StudentNotesPageRoutingModule {
};
StudentNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentNotesPageRoutingModule);



/***/ }),

/***/ "jOsM":
/*!*****************************************************!*\
  !*** ./src/app/student-notes/student-notes.page.ts ***!
  \*****************************************************/
/*! exports provided: StudentNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentNotesPage", function() { return StudentNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_student_notes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-notes.page.html */ "zxcJ");
/* harmony import */ var _student_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-notes.page.scss */ "SeyO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/document/document.service */ "0165");











let StudentNotesPage = class StudentNotesPage {
    constructor(navCtrl, 
    // public app: App,
    translate, dataProvider, authProvider, 
    //public events: Events,
    alertCtrl, route, documentService, zone, router, photoViewer, modalCtrl) {
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
        this.modalCtrl = modalCtrl;
        this.noData = false;
        this.authProvider.event.subscribe((res) => {
            console.log('change', res);
            if (res.changeUser) {
                this.ionViewWillEnter();
            }
        });
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
            console.log(this.lang);
        });
        this.dataProvider.language.subscribe((resq) => {
            this.translate.get("alertmessages").subscribe((res) => {
                // console.log(this.lang);
                this.lang = res;
            });
        });
    }
    ngOnInit() {
    }
    showPhoto(url) {
        this.photoViewer.show(url);
    }
    ionViewWillEnter() {
        // this.dataProvider.showLoading();
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            console.log('this', this.userDetails);
            this.navData = this.userDetails.details;
            this.userType = this.userDetails.details.user_type;
            this.getClassNotes();
        }
        else {
            this.dataProvider.hideLoading();
            console.log('not logged in');
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
        }
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getClassNotes();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getClassNotes() {
        let data = {
            "student_id": this.userDetails.details.stu_id,
            "school_id": this.userDetails.details.school_id,
            "session_id": this.userDetails.session_id
        };
        this.dataProvider.getClassNotes(data).then(res => {
            console.log('notes', res);
            this.notes = res;
            if (this.notes) {
                if (this.notes.length < 1) {
                    console.log('notes:::date31.1.22', res);
                    this.noData = true;
                }
                else {
                    this.noData = false;
                }
            }
            else {
                console.log('notes', res);
                this.noData = true;
            }
        }).catch(Error => {
            // this.dataProvider.showToast(Error);
            console.log(Error);
        });
    }
    openPdf(pdf) {
        //  window.open(pdf,'_blank')
        window.open(pdf, '_system');
        //this.documentService.openPdf(pdf,true);
    }
    openCalModal() {
        const navigation = {
            state: {
                note: this.notes,
                state: this.navData,
                page: 'student-note'
            }
        };
        //this.zone.run(() => {
        this.router.navigate(['note-calendar'], navigation);
        //});
        /*const modal = await this.modalCtrl.create({
          component: NoteCalendarPage,
          cssClass: 'cal-modal',
          backdropDismiss: true,
        });
        this.sendClassNotes(this.notes);
    
        return await modal.present();*/
    }
};
StudentNotesPage.ctorParameters = () => [
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
StudentNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-notes',
        template: _raw_loader_student_notes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], StudentNotesPage);



/***/ }),

/***/ "zxcJ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-notes/student-notes.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button></ion-menu-button>\n  \t</ion-buttons>\n\t  <ion-buttons slot=\"secondary\">\n\t\t<ion-button class=\"small_btn_header\" style=\"margin-left:12px;\" small clear icon-only (click)=\"openCalModal()\">\n\t\t  <ion-icon name=\"calendar-outline\" color=\"icon-header\"></ion-icon>\n\t  </ion-button>\n  </ion-buttons>\n    <ion-title>{{'student_notes.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content\n\t      pullingIcon=\"chevron-down-circle-outline\"\n\t      pullingText=\"Pull to refresh\"\n\t      refreshingSpinner=\"circles\"\n\t      refreshingText=\"Refreshing...\">\n\t    </ion-refresher-content>\n\t  </ion-refresher>\n    <div *ngIf=\"notes\">\n\t\t<ion-card *ngFor=\" let note of notes\">\n\t\t\t<ion-card-header>\n\t\t\t\t<span *ngIf=\"note.send_to!='exam' && note.datetime\" style=\"float: left;\">{{note.datetime | dateFormat}}</span>\n\t\t\t\t<span *ngIf=\"note.send_to=='exam' && note.examNoteDate\" style=\"float: left;\">{{note.examNoteDate | dateFormat}}</span>\n\t\t\t\t<ion-item style=\"width: 100%;\">\n\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t<img src=\"{{note.created_by.pic}}\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h3>{{note.created_by.first_name}}</h3>\n\t\t\t\t\t\t<!-- <p>{{note.created_by.email_id}}</p> -->\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t\t<p>\n\t\t\t\t\t{{note.description}}\n\t\t\t\t</p>\n\t\t\t\t<div *ngIf=\"note.file_link\" class=\"pdf-div\" (click)=\"openPdf(note.file_link)\">\n\t\t          <img  [src]=\"'bullet.documents.image'\" onerror=\"this.onerror=null;this.src='assets/imgs/pdfnew.png';\">\n\t\t            <!-- <ion-icon name=\"document-attach-outline\"></ion-icon> -->\n\t\t        </div>\n\t\t\t\t<a *ngIf=\"note.pdf\" (click)=\"openPdf(note.pdf)\" href=\"\">\n\t\t\t\t\t<ion-icon name=\"attach\"></ion-icon>\n\t\t\t\t</a>\n\t\t\t\t<img *ngIf=\"note.image_file\" [src]=\"note.image_file\" class=\"images\" (click)=\"showPhoto(note.image_file)\">\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n    </div>\n    <div class=\"notes\" *ngIf=\"noData\">\n    \t<div class=\"no-data\">\n    \t\t{{'student_notes.no_note' | translate}}\n    \t</div>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=student-notes-student-notes-module-es2015.js.map
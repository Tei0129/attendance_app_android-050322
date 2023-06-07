(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-notes-add-notes-module"], {
    /***/
    "5rAC":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-notes/add-notes.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function rAC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"md\">\n   \t<ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'create_notes.pagetitle'| translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content padding class=\"right-direction\" mode=\"md\">\n  <form #privateMessage='ngForm' class=\"fform\" *ngIf=\"!uploadStaus\">\n  \t<ion-radio-group [(ngModel)]=\"notes.sendTo\" [ngModelOptions]=\"{standalone: true}\">\n\t    <ion-row text-right>\n\t      <ion-col size=\"5\" align-self-center text-right>\n\t        {{'create_notes.self'| translate}}\n\t      </ion-col>\n\t      <ion-col size=\"1\" align-self-center no-padding>\n\t        <ion-radio value=\"self\"></ion-radio>\n\t      </ion-col>\n\t      <ion-col size=\"5\" align-self-center text-right>\n\t        {{'create_notes.class'| translate}}\n\t      </ion-col>\n\t      <ion-col size=\"1\" align-self-center no-padding text-right>\n\t        <ion-radio value=\"class\" ></ion-radio>\n          \n\t      </ion-col>\n\t    </ion-row>\n\t    <ion-row text-right padding-top>\n        <ion-col size=\"5\" align-self-center text-right>\n\t        {{'create_notes.exam_note'| translate}}\n\t      </ion-col>\n\t      <ion-col size=\"1\" align-self-center no-padding> \n           <ion-radio value=\"exam\"> </ion-radio>\n\t      </ion-col> \n\t      <ion-col size=\"5\" align-self-center text-right>\n\t        {{'create_notes.single_student'| translate}}\n          <!-- <p>{{examNoteDate}}</p> -->\n\t      </ion-col>\n\t      <ion-col size=\"1\" align-self-center no-padding>\n\t        <ion-radio value=\"oneuser\"></ion-radio>\n\t      </ion-col>\n\t      \n\t    </ion-row>\n\t</ion-radio-group>\n  <div class=\"\" *ngIf=\"notes.sendTo=='exam'\">\n    <ion-item>\n    <ion-datetime [(ngModel)]=\"notes.examNoteDate\" [ngModelOptions]=\"{standalone: true}\" max=\"2030-10-31\"  placeholder=\"select date\" style=\"padding-top: 0px;\"></ion-datetime> \n  </ion-item>\n  <ion-item class=\"background-input\" align-items-center>\n    <ion-label color=\"dark\">{{'create_notes.seminar' | translate}}</ion-label>\n    <ion-select name=\"seminar\" #seminar='ngModel' [(ngModel)]=\"notes.seminir_no\" interface=\"popover\">\n      <ion-select-option *ngFor=\"let seminar of getSeminars();let i = index;\" [value]=\"(i+1)\">{{i+1}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  </div>\n\n    <div class=\"subject\" *ngIf=\"notes.sendTo=='oneuser'\">\n      <ion-item>\n        <ion-label> {{'create_notes.student_name'| translate}}</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"selectedStudent\"\n          [ngModelOptions]=\"{standalone: true}\"\n          [isMultiple]=\"true\"\n          [items]=\"students\"\n          itemValueField=\"sid\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n     <!--  <ion-item>\n        <ion-input type=\"email\" class=\"message\" name=\"useremail\" placeholder=\"{{'create_notes.student_id'| translate}}\"\n          [(ngModel)]=\"notes.studentId\" text-right></ion-input>\n      </ion-item> -->\n    </div>\n    <!-- <div class=\"subject\">\n      <ion-item>\n        <ion-input type=\"text\" class=\"message\" placeholder=\"{{'create_notes.noti_title'| translate}}\"\n          [(ngModel)]=\"mail.title\" text-right name=\"title\" #title='ngModel' required maxlength=\"35\"></ion-input>\n      </ion-item>\n    </div> -->\n    <div class=\"subject\">\n      <ion-item>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"{{'create_notes.note'| translate}}\"\n          [(ngModel)]=\"notes.description\" text-right name=\"msg_body\" #msg_body='ngModel' required maxlength=\"140\">\n        </ion-textarea>\n      </ion-item>\n        <ion-item style=\"display: none;\">\n          <input type=\"file\" id=\"myFileInput\" (change)=\"onSelectFiles($event)\" />\n        </ion-item>\n      <ion-button class=\"attachment\" icon-only  (click) = \"takePicture()\">\n        <ion-icon name=\"image-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"attachment-video\" icon-only (click)=\"uploadPdf()\" >\n        <ion-icon name=\"document-outline\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"ticketImage != ''\">\n      <img src = \"assets/imgs/image.png\"/>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"notes.pdf != ''\">\n      <img src = \"assets/imgs/pdfnew.png\"/>\n    </div>\n  </form>\n  <ion-list *ngIf=\"uploadStaus && notes.pdf\">\n          <ion-list-header>\n            <ion-label>{{uploadStaus}}%</ion-label>\n          </ion-list-header>\n          <ion-range min=\"0\" max=\"100\" step=\"2\" [value]=\"uploadStaus\">\n          <ion-icon slot=\"end\" name=\"cloud-upload-outline\"></ion-icon>\n          <ion-icon size=\"small\" slot=\"start\"  name=\"cloud-upload\"></ion-icon>\n        </ion-range>\n          <!-- <ion-progress-bar value=\"0.{{uploadStaus}}\"></ion-progress-bar> -->\n  </ion-list>\n</ion-content>\n<ion-footer>\n <ion-button  expand=\"full\" class=\"send-btn\" color=\"dark\"\n    (click)=\"sendNotes()\">{{'create_notes.send_notes'| translate}}</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "Fg6/":
    /*!*******************************************************!*\
      !*** ./src/app/add-notes/add-notes-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AddNotesPageRoutingModule */

    /***/
    function Fg6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNotesPageRoutingModule", function () {
        return AddNotesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-notes.page */
      "Uq/T");

      var routes = [{
        path: '',
        component: _add_notes_page__WEBPACK_IMPORTED_MODULE_3__["AddNotesPage"]
      }];

      var AddNotesPageRoutingModule = function AddNotesPageRoutingModule() {
        _classCallCheck(this, AddNotesPageRoutingModule);
      };

      AddNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddNotesPageRoutingModule);
      /***/
    },

    /***/
    "Po93":
    /*!***********************************************!*\
      !*** ./src/app/add-notes/add-notes.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Po93(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-add-notes:host .back-btn ion-icon {\n  font-size: 25px;\n}\napp-add-notes:host .fform {\n  margin: 8px;\n}\napp-add-notes:host .subject {\n  border: 1px solid grey;\n  margin: 10px 0;\n  position: relative;\n}\napp-add-notes:host ion-row {\n  text-align: right;\n}\napp-add-notes:host .send-btn {\n  height: 60px;\n}\napp-add-notes:host .checkbox-inner {\n  position: absolute !important;\n  left: 8px !important;\n  height: 14px !important;\n  top: 0 !important;\n}\napp-add-notes:host .attachment {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-add-notes:host .attachment-video {\n  position: absolute;\n  bottom: 0px;\n  right: 40px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-add-notes:host .attach-image {\n  width: 100%;\n  height: 100px;\n  text-align: right;\n}\napp-add-notes:host .attach-image img {\n  width: 41px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1ub3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxlQUFBO0FBRFo7QUFJSTtFQUNJLFdBQUE7QUFGUjtBQUlJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlJO0VBQ1EsaUJBQUE7QUFGWjtBQUlJO0VBQ0ksWUFBQTtBQUZSO0FBSUk7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0ksbUJBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0ksVUFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0ksbUJBQUE7RUFDSixZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0ksVUFBQTtBQUZaO0FBSUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBRlI7QUFHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRFoiLCJmaWxlIjoiYWRkLW5vdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hZGQtbm90ZXM6aG9zdCB7XHJcbiAgICAuYmFjay1idG57XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmZvcm17XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuc3ViamVjdHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnNlbmQtYnRue1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5jaGVja2JveC1pbm5lcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC0tYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50LXZpZGVve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAuYXR0YWNoLWltYWdle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "Uq/T":
    /*!*********************************************!*\
      !*** ./src/app/add-notes/add-notes.page.ts ***!
      \*********************************************/

    /*! exports provided: AddNotesPage */

    /***/
    function UqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNotesPage", function () {
        return AddNotesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_notes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-notes.page.html */
      "5rAC");
      /* harmony import */


      var _add_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-notes.page.scss */
      "Po93");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      "0PQT");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR"); // import { FileChooser } from '@ionic-native/file-chooser/ngx';


      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"];

      var AddNotesPage = /*#__PURE__*/function () {
        function AddNotesPage(navCtrl, translate, dataProvider, camera, route, router, file, // private fileChooser: FileChooser,
        transfer, base64, filePath, alertCtrl, location) {
          var _this = this;

          _classCallCheck(this, AddNotesPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.camera = camera;
          this.route = route;
          this.router = router;
          this.file = file;
          this.transfer = transfer;
          this.base64 = base64;
          this.filePath = filePath;
          this.alertCtrl = alertCtrl;
          this.location = location;
          this.notes = {
            sendTo: '',
            description: '',
            studentIds: [],
            ticketImage: '',
            pdf: '',
            user_no: '',
            school_id: '',
            classId: '',
            type: '',
            examNoteDate: '',
            semno: ''
          };
          this.lang = {};
          this.userDetails = {};
          this.ticketImage = '';
          this.formdata = new FormData();
          this.studentsId = [];
          this.status = '';
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.class_id = _this.router.getCurrentNavigation().extras.state.state.course_id;
              _this.students = _this.router.getCurrentNavigation().extras.state.state.students;
              _this.state = _this.router.getCurrentNavigation().extras.state.state;
              _this.data = _this.router.getCurrentNavigation().extras.state.data;
            }
          });
          this.dataProvider.events.subscribe(function (res) {
            // console.log(res);
            _this.uploadStaus = res;
          });
        }

        _createClass(AddNotesPage, [{
          key: "getSeminars",
          value: function getSeminars() {
            return Array(parseInt(localStorage.getItem('class_total_sem')));
          }
          /**
           * Ionic navigation event will run when page is loaded
           */

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
          }
          /**
           * Used to send the message
           */

        }, {
          key: "sendNotes",
          value: function sendNotes() {
            console.log("examnotedate==>", this.notes.examNoteDate);

            if (!this.notes.sendTo) {
              this.dataProvider.showToast(this.lang.select_type);
            } else {
              console.log(this.userDetails);
              this.notes.classId = this.class_id;
              this.notes.user_no = this.userDetails.details.user_no;
              this.notes.school_id = this.userDetails.details.school_id; // this.notes.examNoteDate =  this.notes.examNoteDate;

              var media;
              console.log("notes contains===>", this.notes);

              if (this.notes.ticketImage && this.notes.ticketImage != '') {
                media = this.notes.ticketImage;
              } else {
                media = this.notes.pdf;
              }

              if (!media) {
                // this.uploadPdfToServer();
                this.startUpload(this.ticketImage);
              } else {
                if (this.notes.pdf != '') {
                  // this.uploadPdfToServer();
                  this.startUpload(this.ticketImage);
                } else {
                  this.startUpload(this.ticketImage); // this.uploadNotes(media,this.notes);
                }
              }
            }
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this2.openCamera(_this2.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this2.openCamera(_this2.camera.PictureSourceType.PHOTOLIBRARY); //this.openGallery()

                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openCamera",
          value: function openCamera(type) {
            var _this3 = this;

            var options = {
              sourceType: type
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this3.notes.pdf = '';
                _this3.notes.ticketImage = imageData;
                _this3.ticketImage = imageData;
                _this3.mediaType = 'image/jpg';
              }
            });
          }
        }, {
          key: "uploadNotes",
          value: function uploadNotes(media, formData) {
            var _this4 = this;

            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].serverURL + 'createNotes';
            /*
             console.log('media', media);
             console.log('formData', formData);
             console.log('url', url); */

            var filename = '';

            if (media) {
              var name = media.substr(media.lastIndexOf('/') + 1);
              var splitted = name.split('?');
              filename = splitted[0];
            }

            this.notes.type = this.mediaType;
            formData['studentIds'] = (formData.studentIds || []).join('#');
            var options = {
              fileName: filename,
              fileKey: 'file',
              mimeType: this.mediaType,
              chunkedMode: false,
              params: formData
            };
            console.log('upload', options);
            var notesUpload = this.transfer.create();
            this.dataProvider.showLoading();
            notesUpload.upload(media, url, options).then(function (data) {
              _this4.dataProvider.hideLoading();

              _this4.dataProvider.showToast(_this4.lang.note_created); // this.location.back();


              var navigation = {
                state: {
                  isUpdated: true,
                  course: {
                    cid: _this4.class_id
                  }
                }
              };

              _this4.router.navigate(['view-notes'], navigation);
            })["catch"](function (err) {
              _this4.dataProvider.hideLoading();

              _this4.dataProvider.showToast(err);

              console.log("Error", err);
            });
          } //EOF uploadData

        }, {
          key: "uploadPdf",
          value: function uploadPdf() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      document.getElementById('myFileInput').click();

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            var _this5 = this;

            console.log("ANPAGE portChange:::", event);
            this.notes.studentIds = [];
            this.studentsId = [];
            this.selectedStudent.forEach(function (res) {
              _this5.notes.studentIds.push(res.sid);

              _this5.studentsId.push(res.sid);
            });
          }
        }, {
          key: "onSelectFiles",
          value: function onSelectFiles(ev) {
            var files = ev && ev.target && ev.target.files ? ev.target.files : {};
            console.log('onSelectFiles', files[0]);
            var ext = files[0].name.split(".").reverse()[0];

            if (ext == 'pdf' || ext == 'PDF') {
              // this.selectedDocument.push(files[0]);
              this.notes.pdf = files[0];
              this.mediaType = 'file/pdf';
              this.notes.ticketImage = '';
              this.ticketImage = '';
            } else {
              this.dataProvider.showToast(this.lang.file_format_error);
            }

            console.log('onSelectFiles', this.notes.pdf);
          }
        }, {
          key: "uploadPdfToServer",
          value: function uploadPdfToServer(imgBlob, fileName) {
            var _this6 = this;

            this.formdata.append('sendTo', this.notes.sendTo);
            this.formdata.append('description', this.notes.description);
            this.formdata.append('studentIds', (this.notes.studentIds || []).join('#'));
            this.formdata.append('ticketImage', this.notes.ticketImage);
            this.formdata.append('pdf', this.notes.pdf);
            this.formdata.append('user_no', this.userDetails.details.user_no);
            this.formdata.append('classId', this.class_id);
            this.formdata.append('school_id', this.userDetails.details.school_id);
            this.formdata.append('type', this.mediaType);
            this.formdata.append('examNoteDate', this.notes.examNoteDate);
            this.formdata.append('seminir_no', this.notes.seminir_no);

            if (imgBlob) {
              this.formdata.append('file', imgBlob, fileName);
            } else {
              this.formdata.append('file', this.notes.pdf);
            }

            console.log(this.formdata); // this.dataProvider.showLoading();

            this.dataProvider.createclassNotes(this.formdata).subscribe(function (res) {
              console.log("Success", res);

              _this6.dataProvider.hideLoading();

              _this6.dataProvider.showToast(_this6.lang.note_created);

              var navigation = {
                state: {
                  isUpdated: true,
                  course: {
                    cid: _this6.class_id
                  }
                }
              };
              console.log(navigation);

              _this6.router.navigate(['view-notes'], navigation);
            }, function (e) {
              _this6.dataProvider.hideLoading();

              _this6.dataProvider.showToast(_this6.lang.usnexpectedError);

              _this6.uploadStaus = false;
            });
          }
        }, {
          key: "startUpload",
          value: function startUpload(imgEntry) {
            var _this7 = this;

            this.dataProvider.showLoading();

            if (imgEntry) {
              this.file.resolveLocalFilesystemUrl(imgEntry).then(function (entry) {
                entry.file(function (file) {
                  return _this7.readFile(file);
                });
              })["catch"](function (err) {
                _this7.dataProvider.hideLoading(); // this.presentToast('Error while reading file.');

              });
            } else {
              this.uploadPdfToServer();
            }
          }
        }, {
          key: "readFile",
          value: function readFile(file) {
            var _this8 = this;

            console.log('file', file);
            var reader = new FileReader();

            reader.onload = function () {
              var formData = new FormData();
              var imgBlob = new Blob([reader.result], {
                type: file.type
              });
              console.log('imgBlob', imgBlob, file.name);

              _this8.uploadPdfToServer(imgBlob, file.name); // formData.append('file', imgBlob, file.name);
              // this.uploadImageData(formData);

            };

            reader.readAsArrayBuffer(file);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddNotesPage;
      }();

      AddNotesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]
        }, {
          type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__["Base64"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      AddNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-notes',
        template: _raw_loader_add_notes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_12__["Base64"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], AddNotesPage);
      /***/
    },

    /***/
    "tNxg":
    /*!***********************************************!*\
      !*** ./src/app/add-notes/add-notes.module.ts ***!
      \***********************************************/

    /*! exports provided: AddNotesPageModule */

    /***/
    function tNxg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNotesPageModule", function () {
        return AddNotesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _add_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-notes-routing.module */
      "Fg6/");
      /* harmony import */


      var _add_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-notes.page */
      "Uq/T");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var AddNotesPageModule = function AddNotesPageModule() {
        _classCallCheck(this, AddNotesPageModule);
      };

      AddNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _add_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotesPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
        declarations: [_add_notes_page__WEBPACK_IMPORTED_MODULE_6__["AddNotesPage"]]
      })], AddNotesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-notes-add-notes-module-es5.js.map
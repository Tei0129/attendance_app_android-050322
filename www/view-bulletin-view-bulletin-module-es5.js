(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-bulletin-view-bulletin-module"], {
    /***/
    "EkJ+":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-bulletin/view-bulletin.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function EkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button></ion-menu-button>\n  \t</ion-buttons>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'bulletin.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\n\t<ion-card *ngIf=\"bulletinDetails.details\">\n\t\t<ion-card-header>\n\t\t\t<h3>{{navData.bulletin_title}}</h3>\n        \t<!-- <p *ngIf=\"navData.description\">{{navData.description}}</p> -->\n        \t<span >{{navData.created_at | dateFormat}}</span>\n\t\t      <ion-icon *ngIf=\"bulletinDetails.details.is_closed=='1'\" color=\"secondary\" class=\"lock\" name=\"checkmark-outline\">\n\t\t      </ion-icon>\n\t\t</ion-card-header>\n\t  <ion-card-content>\n\t  \t<ion-row>\n\t  \t\t\n\t  \t\t<!-- <ion-col size=\"4\">\n\t\t        <div class=\"pdf-div\" (click)=\"openPdf(navData.documents.pdf)\">\n\t\t          <img *ngIf=\"navData.documents.image && navData.documents.pdf\" [src]=\"navData.documents.image\" onerror=\"this.onerror=null;this.src='assets/imgs/pdf.png';\" style=\"min-height: 97px;\">\n\t\t            <ion-icon *ngIf=\"navData.documents.pdf\" name=\"document-attach-outline\"></ion-icon>\n\t\t        </div>\n\t\t          <img *ngIf=\"navData.documents.image && !navData.documents.pdf\" [src]=\"navData.documents.image\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\" style=\"min-height: 97px;\" (click)=\"openImage(navData.documents.image)\" class=\"image_single\">\n\t  \t\t</ion-col> -->\n\t  \t\t<ion-col size=\"12\">\n\t\t\t  <div class=\"srow\">\n\t\t\t\t<ion-row *ngIf=\"navData.created_by != navData.send_by\" >\n\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t<div class=\"title_div\">\n\t\t\t\t\t\t\t{{'bulletin.forwarded_by' | translate}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t<ion-item style=\"width: 100%;\" >\n\t\t\t\t            <ion-label>\n\t\t\t\t              <h3>{{navData.send_by_username}}</h3>\n\t\t\t\t            </ion-label>\n\t\t\t\t        </ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row >\n\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t<div class=\"title_div\">\n\t\t\t\t\t\t\t{{'bulletin.created_by' | translate}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t\t<ion-item style=\"width: 100%;\">\n\t\t\t\t\t          <ion-avatar slot=\"start\">\n\t\t\t\t\t            <img src=\"{{navData.created_by_user_pic}}\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t\t          </ion-avatar>\n\t\t\t\t            <ion-label>\n\t\t\t\t              <h3>{{navData.send_by_username}}</h3>\n\t\t\t\t            </ion-label>\n\t\t\t\t        </ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t  \t\t</ion-col>\n\t  \t\t<ion-col size=\"12\">\n\t  \t    <div *ngIf=\"navData.documents.pdf !=''\">\n              <div class=\"pdf-div\" (click)=\"openPdfs(navData.documents.pdf)\">\n                  <img src=\"pdf\" onerror=\"this.onerror=null;this.src='assets/imgs/pdf.png';\">\n                  <!-- <ion-icon name=\"document-attach-outline\"></ion-icon> -->\n              </div>\n              <div *ngFor=\"let doc of navData.documents.files\">\n                <div *ngIf=\"!doc.is_img\">\n                  <div class=\"pdf-div\" *ngIf=\"doc.extension=='pdf'\" (click)=\"openPdf(doc.url_original)\">\n                    <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/pdf.png';\">\n                    <!-- <ion-icon  name=\"document-attach-outline\"></ion-icon> -->\n                  </div>\n                  <div class=\"pdf-div\" *ngIf=\"doc.extension!='pdf'\" (click)=\"opendoc(doc.url)\">\n                    <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/doc.png';\">\n                  </div>\n                </div>\n              </div>\n              \n            </div>\n            <div *ngIf=\"navData.documents.pdf ==''\">\n              <div *ngFor=\"let doc of navData.documents.files\">\n                <div class=\"pdf-div\" *ngIf=\"doc.extension=='pdf' && !doc.is_img\" (click)=\"openPdf(doc.url_original)\">\n                  <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/pdf.png';\">\n                  <!-- <ion-icon  name=\"document-attach-outline\"></ion-icon> -->\n                </div>\n                <div class=\"pdf-div\" *ngIf=\"doc.extension!='pdf' && !doc.is_img\" (click)=\"opendoc(doc.url)\">\n                  <img [src]=\"doc.url\" onerror=\"this.onerror=null;this.src='assets/imgs/doc.png';\">\n                </div>\n                <div class=\"pdf-div\" *ngIf=\"doc.is_img\" (click)=\"openImage(doc.url_original)\">\n                  <img [src]=\"doc.url_original\" onerror=\"this.onerror=null;this.src='assets/imgs/image.png';\">\n                </div>\n              </div>\n              \n            </div>\n\t  \t\t</ion-col>\n\t  \t</ion-row>\n        <ion-row *ngIf=\"bulletinDetails\">\n          <ion-row *ngIf=\"bulletinDetails.details\">\n          <ion-col   *ngIf=\"bulletinDetails.details.is_closed=='0'\">\n            <ion-button (click)=\"openCommentSection(navData)\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"forward-btn\">\n              {{'bulletin.comment' | translate}}\n            </ion-button>\n          </ion-col>\n          <ion-col  *ngIf=\"bulletinDetails.details.is_closed=='0'\">\n            <ion-button (click)=\"shareBulletin(navData)\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"forward-btn\">\n              {{'bulletin.share' | translate}}\n            </ion-button>\n          </ion-col>\n          <ion-col  *ngIf=\"userDetails.details.user_type=='1' && bulletinDetails.details.is_closed=='0'\">\n            <ion-button  color=\"secondary\" (click)=\"completeBulletin()\" expand=\"block\" shape=\"round\" class=\"forward-btn\">\n              {{'bulletin.complete' | translate}}\n            </ion-button>\n          </ion-col>\n          <ion-col  *ngIf=\"userDetails.details.user_type=='1' && bulletinDetails.details.is_closed=='1'\">\n            <ion-button  color=\"secondary\" (click)=\"reOpen()\" expand=\"block\" shape=\"round\" class=\"forward-btn\">\n              {{'bulletin.reopen' | translate}}\n            </ion-button>\n          </ion-col>\n          <ion-col  *ngIf=\"navData.created_by== user_no ||userDetails.details.user_type=='1'\">\n            <ion-button  color=\"danger\" (click)=\"deleteBulletin()\" expand=\"block\" shape=\"round\" class=\"forward-btn\">\n              {{'bulletin.delete' | translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        </ion-row>\n      </ion-card-content>\n\t</ion-card>\n\n\t<ion-row *ngIf=\"visibleComment\" class=\"comment-row\">\n\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon color=\"primary\" (click)=\"markComment()\" slot=\"start\" name=\"send-outline\"></ion-icon>\t\n\t\t\t<ion-textarea placeholder=\" {{'bulletin.add_comment' | translate}}\" [(ngModel)]=\"comment\">\n\t\t\t</ion-textarea>\n\n\t\t</ion-item>\n\t</ion-row>\n\n\t<div *ngIf=\"bulletinDetails.details\">\n\t\t<ion-list >\n\t\t\t<ion-card *ngFor=\"let track of bulletinDetails.activity\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-item class=\"list-item\">\n\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t<img [src]=\"track.send_by_user_pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<span>{{track.send_by_username}} \n\t\t\t\t\t\t\t<ion-icon *ngIf=\"track.send_to_username\" name=\"caret-back-outline\"></ion-icon>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<ion-avatar *ngIf=\"track.send_to_username\">\n\t\t\t\t\t\t\t<img [src]=\"track.send_to_user_pic\" onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t\t\t</ion-avatar>\n              \t\t\t<span>{{track.send_to_username}}</span>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<p>{{track.description}}</p>\n\t\t\t\t\t<p>{{track.created_at | dateFormat}}</p>\n\t\t\t\t\t<p *ngIf=\"track.is_view=='1'\"><ion-icon name=\"checkmark-done-outline\" color=\"secondary\"></ion-icon></p>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t\t\n\t\t</ion-list>\n\n\n\t</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "NIR3":
    /*!*****************************************************!*\
      !*** ./src/app/view-bulletin/view-bulletin.page.ts ***!
      \*****************************************************/

    /*! exports provided: ViewBulletinPage */

    /***/
    function NIR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewBulletinPage", function () {
        return ViewBulletinPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_bulletin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-bulletin.page.html */
      "EkJ+");
      /* harmony import */


      var _view_bulletin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-bulletin.page.scss */
      "mV5q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../service/document/document.service */
      "0165");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");

      var ViewBulletinPage = /*#__PURE__*/function () {
        function ViewBulletinPage(navCtrl, dataProvider, authProvider, translate, alertCtrl, network, photoViewer, route, router, documentService, zone, platform) {
          var _this = this;

          _classCallCheck(this, ViewBulletinPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.network = network;
          this.photoViewer = photoViewer;
          this.route = route;
          this.router = router;
          this.documentService = documentService;
          this.zone = zone;
          this.platform = platform;
          this.bulletinDetails = {};
          this.visibleComment = false;
          this.translate.get("alertmessages").subscribe(function (response) {
            _this.lang = response;
          });
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state;
              console.log(_this.navData); //	this.markasReads();
            }
          });
        }

        _createClass(ViewBulletinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.user_no = this.userDetails.details.user_no;
              this.getBulletin();
            }
          }
        }, {
          key: "openCommentSection",
          value: function openCommentSection(navData) {
            this.visibleComment = true;
          }
        }, {
          key: "openPdf",
          value: function openPdf(pdf) {
            //   let link='https://docs.google.com/viewer?url='+pdf;
            // console.log(link);
            // window.open(link, '_system');
            window.open(pdf, '_system'); // this.documentService.openPdf(pdf,true);
          }
        }, {
          key: "opendoc",
          value: function opendoc(pdf) {
            var link = 'https://docs.google.com/viewer?url=' + pdf;
            console.log(link);
            window.open(link, '_system');
          }
        }, {
          key: "openPdfs",
          value: function openPdfs(pdf) {
            window.open(pdf + '.pdf', '_system'); //this.documentService.openPdf(pdf,true);
          }
        }, {
          key: "openImage",
          value: function openImage(image) {
            this.photoViewer.show(image);
          }
        }, {
          key: "getBulletin",
          value: function getBulletin() {
            var _this2 = this;

            var data = {
              user_no: this.user_no,
              b_id: this.navData.bulletin_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getBulletinDetails(data).then(function (res) {
              _this2.bulletinDetails = res.data;

              _this2.dataProvider.hideLoading();

              console.log(_this2.bulletinDetails);
            }, function (e) {
              _this2.dataProvider.hideLoading();

              console.log(e);
            });
          }
        }, {
          key: "shareBulletin",
          value: function shareBulletin(bullet) {
            var _this3 = this;

            var navigation = {
              state: {
                bulletin: bullet,
                forward_user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id
              }
            };
            this.zone.run(function () {
              _this3.router.navigate(['share-bulletins'], navigation);
            });
          }
        }, {
          key: "markasReads",
          value: function markasReads() {
            var data = {
              user_no: this.userDetails.details.user_no,
              bulletin_id: this.navData.id
            };
            this.dataProvider.markBulletinRead(data).then(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "markComment",
          value: function markComment() {
            var _this4 = this;

            var data = {
              bulletinId: this.navData.bulletin_id,
              forwardedby_user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              description: this.comment
            };
            this.dataProvider.commentBulletins(data).then(function (res) {
              _this4.dataProvider.showToast(res.message);

              _this4.getBulletin();

              _this4.visibleComment = false;
              _this4.comment = '';
            })["catch"](function (re) {
              console.log(re);
            });
          }
        }, {
          key: "deleteBulletin",
          value: function deleteBulletin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.delete_bulletin,
                        backdropDismiss: true,
                        mode: 'ios',
                        buttons: [{
                          text: this.lang["delete"],
                          handler: function handler() {
                            var data = {
                              user_no: _this5.userDetails.details.user_no,
                              b_id: _this5.navData.bulletin_id
                            };

                            _this5.dataProvider.deleteBulletin(data).then(function (res) {
                              console.log(res);

                              _this5.router.navigate(['bulletins']);
                            });
                          }
                        }, {
                          text: this.lang.alert_btn_cancel_text,
                          handler: function handler() {}
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
          key: "reOpen",
          value: function reOpen() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.sure,
                        backdropDismiss: true,
                        mode: 'ios',
                        buttons: [{
                          text: this.lang.reopen_bulletin,
                          handler: function handler() {
                            var data = {
                              user_no: _this6.userDetails.details.user_no,
                              b_id: _this6.navData.bulletin_id
                            };

                            _this6.dataProvider.reOpenBulletin(data).then(function (res) {
                              console.log(res);

                              _this6.getBulletin();
                            });
                          }
                        }, {
                          text: this.lang.alert_btn_cancel_text,
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "completeBulletin",
          value: function completeBulletin() {
            var _this7 = this;

            var data = {
              user_no: this.userDetails.details.user_no,
              b_id: this.navData.bulletin_id
            };
            this.dataProvider.closeBulletin(data).then(function (res) {
              console.log(res);

              _this7.getBulletin();
            });
          }
        }]);

        return ViewBulletinPage;
      }();

      ViewBulletinPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      ViewBulletinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-bulletin',
        template: _raw_loader_view_bulletin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_bulletin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _service_document_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], ViewBulletinPage);
      /***/
    },

    /***/
    "jV4k":
    /*!*******************************************************!*\
      !*** ./src/app/view-bulletin/view-bulletin.module.ts ***!
      \*******************************************************/

    /*! exports provided: ViewBulletinPageModule */

    /***/
    function jV4k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewBulletinPageModule", function () {
        return ViewBulletinPageModule;
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


      var _view_bulletin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-bulletin-routing.module */
      "m+Bj");
      /* harmony import */


      var _view_bulletin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-bulletin.page */
      "NIR3");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var ViewBulletinPageModule = function ViewBulletinPageModule() {
        _classCallCheck(this, ViewBulletinPageModule);
      };

      ViewBulletinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_bulletin_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewBulletinPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_view_bulletin_page__WEBPACK_IMPORTED_MODULE_6__["ViewBulletinPage"]]
      })], ViewBulletinPageModule);
      /***/
    },

    /***/
    "m+Bj":
    /*!***************************************************************!*\
      !*** ./src/app/view-bulletin/view-bulletin-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ViewBulletinPageRoutingModule */

    /***/
    function mBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewBulletinPageRoutingModule", function () {
        return ViewBulletinPageRoutingModule;
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


      var _view_bulletin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-bulletin.page */
      "NIR3");

      var routes = [{
        path: '',
        component: _view_bulletin_page__WEBPACK_IMPORTED_MODULE_3__["ViewBulletinPage"]
      }];

      var ViewBulletinPageRoutingModule = function ViewBulletinPageRoutingModule() {
        _classCallCheck(this, ViewBulletinPageRoutingModule);
      };

      ViewBulletinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewBulletinPageRoutingModule);
      /***/
    },

    /***/
    "mV5q":
    /*!*******************************************************!*\
      !*** ./src/app/view-bulletin/view-bulletin.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function mV5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-size: 2.1vh;\n}\n\n.forward-btn {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n\n.pdf-div {\n  width: 30vw;\n  float: right;\n  margin: 5px;\n}\n\n.pdf-div img {\n  width: 31vw;\n  height: 16vh;\n}\n\n.pdf-div ion-icon {\n  font-size: 47px;\n  position: absolute;\n  right: 9vh;\n  top: 8vh;\n  color: #2979ff;\n}\n\n.srow {\n  background: #ececec;\n}\n\n.srow .title_div {\n  padding-top: 9px;\n  font-size: 12px;\n}\n\nion-list {\n  background: #e6e6e5;\n}\n\nion-card ion-card-header {\n  background: #fbfbfb;\n  padding: 0px 9px 12px 0px;\n  color: #2979ff;\n}\n\nion-card ion-card-header h3 {\n  margin-top: 2px;\n  font-size: 15px;\n  margin-bottom: 1px;\n  font-weight: 600;\n}\n\nion-card ion-card-header span {\n  font-size: 10px;\n}\n\nion-card ion-card-content {\n  padding: 0px 0px 5px 0px;\n}\n\n.list-item {\n  font-size: 12px;\n}\n\n.list-item ion-avatar {\n  padding: 6px;\n}\n\n.lock {\n  font-size: 26px;\n  float: left;\n  margin-left: 13px;\n}\n\n.comment-row {\n  margin-top: 23px;\n}\n\n.comment-row ion-item ion-icon {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXctYnVsbGV0aW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBCQUFBO0VBQ0csaUJBQUE7QUFFSjs7QUFDQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQURDO0VBQ0ssV0FBQTtFQUNBLFlBQUE7QUFHTjs7QUFEQztFQUNDLGVBQUE7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUdMOztBQUFBO0VBRUksbUJBQUE7QUFFSjs7QUFESTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQUdMOztBQUFBO0VBQ0ssbUJBQUE7QUFHTDs7QUFDQztFQUNLLG1CQUFBO0VBQ0YseUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBREk7RUFDRCxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHSDs7QUFERTtFQUNDLGVBQUE7QUFHSDs7QUFBQztFQUNDLHdCQUFBO0FBRUY7O0FBQ0E7RUFDQyxlQUFBO0FBRUQ7O0FBREM7RUFDSyxZQUFBO0FBR047O0FBQUE7RUFDQyxlQUFBO0VBQ0csV0FBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSyxnQkFBQTtBQUlMOztBQUZNO0VBQ0ssZUFBQTtBQUlYIiwiZmlsZSI6InZpZXctYnVsbGV0aW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG5cdGZvbnQtc2l6ZTogMi4xdmg7XHJcbn1cclxuLmZvcndhcmQtYnRue1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5wZGYtZGl2e1xyXG5cdHdpZHRoOiAzMHZ3O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcblx0aW1ne1xyXG5cdFx0ICAgIHdpZHRoOiAzMXZ3O1xyXG4gICAgXHRcdGhlaWdodDogMTZ2aDtcclxuXHR9XHJcblx0aW9uLWljb257XHJcblx0XHRmb250LXNpemU6IDQ3cHg7XHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDl2aDtcclxuXHQgICAgdG9wOiA4dmg7XHJcblx0ICAgIGNvbG9yOiAjMjk3OWZmO1xyXG5cdH1cclxufVxyXG4uc3Jvd3tcclxuXHQvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgLnRpdGxlX2RpdntcclxuICAgIFx0cGFkZGluZy10b3A6IDlweDtcclxuICAgIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi1saXN0e1xyXG5cdCAgICBiYWNrZ3JvdW5kOiAjZTZlNmU1O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuXHRpb24tY2FyZC1oZWFkZXJ7XHJcblx0XHQgICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICAgIHBhZGRpbmc6IDBweCA5cHggMTJweCAwcHg7XHJcbiAgICBjb2xvcjogIzI5NzlmZjtcclxuICAgIGgze1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMXB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0fVxyXG5cdFx0c3BhbntcclxuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpb24tY2FyZC1jb250ZW50e1xyXG5cdFx0cGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG5cdH1cclxufVxyXG4ubGlzdC1pdGVte1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRpb24tYXZhdGFye1xyXG5cdFx0ICAgIHBhZGRpbmc6IDZweDtcclxuXHR9XHJcbn1cclxuLmxvY2t7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxufVxyXG4uY29tbWVudC1yb3d7XHJcblx0ICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcblx0ICAgIGlvbi1pdGVte1xyXG5cdCAgICBcdGlvbi1pY29ue1xyXG5cdCAgICBcdFx0ICAgIG1hcmdpbi10b3A6IDBweDtcclxuXHQgICAgXHR9XHJcblx0ICAgIH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=view-bulletin-view-bulletin-module-es5.js.map
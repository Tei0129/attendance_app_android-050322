(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-news-post-news-module"], {
    /***/
    "+eoj":
    /*!***********************************************!*\
      !*** ./src/app/post-news/post-news.module.ts ***!
      \***********************************************/

    /*! exports provided: PostNewsPageModule */

    /***/
    function eoj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostNewsPageModule", function () {
        return PostNewsPageModule;
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


      var _post_news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./post-news-routing.module */
      "tJrc");
      /* harmony import */


      var _post_news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./post-news.page */
      "kavo");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var PostNewsPageModule = function PostNewsPageModule() {
        _classCallCheck(this, PostNewsPageModule);
      };

      PostNewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _post_news_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostNewsPageRoutingModule"]],
        declarations: [_post_news_page__WEBPACK_IMPORTED_MODULE_6__["PostNewsPage"]]
      })], PostNewsPageModule);
      /***/
    },

    /***/
    "J4wE":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-news/post-news.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function J4wE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n   \t<ion-buttons slot=\"end\" class=\"back-btn\">\n      <!-- <ion-icon name=\"arrow-back-outline\" (click)=\"moveBack()\"></ion-icon> -->\n      <ion-back-button></ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'post_news.title'| translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content padding class=\"right-direction\" mode=\"md\">\n  <form #privateMessage='ngForm' class=\"fform\">\n    <!-- <div class=\"subject\">\n      <ion-item>\n        <ion-input type=\"hidden\"  class=\"message\" placeholder=\"{{'post_news.news_title'| translate}}\"\n          [(ngModel)]=\"news.title\" text-right name=\"title\" #title='ngModel' required></ion-input>\n      </ion-item>\n    </div> -->\n    <div class=\"subject\">\n      <ion-item>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"{{'post_news.news_description'| translate}}\"\n          [(ngModel)]=\"news.news_description\" text-right name=\"msg_body\" #msg_body='ngModel' required maxlength=\"300\">\n        </ion-textarea>\n      </ion-item>\n      <ion-button class=\"attachment\" icon-only  (click)=\"takePicture()\">\n        <ion-icon name=\"image-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"attachment-video\" icon-only  (click) = \"takeVideo()\">\n        <ion-icon name=\"videocam-outline\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"safeUrl && mediaKey == 'image'\">\n      <img src = \"assets/imgs/image.png\"/>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"safeUrl && mediaKey == 'video'\">\n      <video src = \"assets/imgs/image\" style=\"height: 76px;\"></video>\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n <ion-button  expand=\"full\" class=\"send-btn\" color=\"dark\"\n   (click)=\"sendNews()\">{{'post_news.post'| translate}}</ion-button>\n    <!-- (click)=\"sendMessage()\" -->\n</ion-footer>";
      /***/
    },

    /***/
    "kavo":
    /*!*********************************************!*\
      !*** ./src/app/post-news/post-news.page.ts ***!
      \*********************************************/

    /*! exports provided: PostNewsPage */

    /***/
    function kavo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostNewsPage", function () {
        return PostNewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-news.page.html */
      "J4wE");
      /* harmony import */


      var _post_news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-news.page.scss */
      "laT1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/file-upload/file-upload.service */
      "MsQK");
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


      var _service_location_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../service/location/location.service */
      "9XNo");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../service/geo-service/geo-service */
      "G+rw");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR"); // import { FileChooser } from '@ionic-native/file-chooser/ngx';


      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"];

      var PostNewsPage = /*#__PURE__*/function () {
        /**
         *
         * @param navCtrl Navigation controller
         * @param translate used from translation messages
         * @param dataProvider data provider
         * @param camera used for taking images
         * @param alertCtrl use for alert popup
         */
        function PostNewsPage(navCtrl, translate, dataProvider, camera, locationSrevice, router, file, geo, mediaCapture, fileUpload, // private fileChooser: FileChooser,
        transfer, alertCtrl, DomSanitizer) {
          var _this = this;

          _classCallCheck(this, PostNewsPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.camera = camera;
          this.locationSrevice = locationSrevice;
          this.router = router;
          this.file = file;
          this.geo = geo;
          this.mediaCapture = mediaCapture;
          this.fileUpload = fileUpload;
          this.transfer = transfer;
          this.alertCtrl = alertCtrl;
          this.DomSanitizer = DomSanitizer;
          this.news = {
            'title': 'Title',
            'news_description': '',
            'user_no': '',
            'user_type': '',
            'type': '',
            'school_id': 'school_id',
            'countryCode': ''
          };
          this.lang = {};
          this.userDetails = {};
          this.formdata = new FormData();
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.translate.get("location").subscribe(function (res) {
            _this.location_lang = res;
          });
          this.getLocation();
        }

        _createClass(PostNewsPage, [{
          key: "getLocation",
          value: function getLocation() {
            var _this2 = this;

            // this.locationSrevice.checkGPSPermission(resp=>{
            //   this.country_code=resp.countryCode;
            //   this.news.countryCode=resp.country_code;
            // },e=>{
            //  this.dataProvider.showToast(this.location_lang.location_error);
            //   console.log(e);
            // });
            this.geo.getMyLocation().then(function (resp) {
              console.log(resp.countrycode);

              if (resp != '') {
                _this2.country_code = resp.countryCode; // this.news.countryCode=resp.country_code;
              } else {
                _this2.dataProvider.showToast(_this2.location_lang.location_error);
              }
            });
          }
          /**
           * Ionic navigation event will run when page is loaded
           */

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            console.log(this.userDetails);
            this.news.user_no = this.userDetails.details.user_no;
            this.news.user_type = this.userDetails.details.user_type;
            this.news.school_id = this.userDetails.details.school_id;
          }
          /**
           * Used to send the message
           */

        }, {
          key: "moveBack",
          value: function moveBack() {
            this.router.navigate(['tabs/messages']);
          }
        }, {
          key: "sendNews",
          value: function sendNews() {
            var _this3 = this;

            if (this.userDetails) {
              if (this.news.news_description == '' || this.news.news_description.length > 300) {
                this.dataProvider.showToast(this.lang.max_body);
              } else {
                this.news.type = this.mediaType;
                this.fileUpload.uploadfile(this.media, this.news, 'postNews', function (res) {
                  console.log('resPage', res);

                  if (res) {
                    _this3.router.navigate(['tabs/news']);

                    _this3.dataProvider.showToast(_this3.lang.news_posted);

                    _this3.news = {
                      'title': 'title',
                      'news_description': '',
                      'user_no': '',
                      'type': '',
                      'user_type': '',
                      'school_id': '',
                      'countryCode': ''
                    };
                    _this3.media = '';
                    _this3.safeUrl = false;
                  } else {
                    _this3.dataProvider.showToast(_this3.lang.usnexpectedError);
                  }
                }); // this.uploadData(this.media,this.news);
                // this.startUpload(this.media,this.news);
              }
            } else {
              this.dataProvider.showToast(this.lang.user_not_exist);
            }
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

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
                            _this4.openCamera(_this4.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            //this.openGallery()
                            _this4.openCamera(_this4.camera.PictureSourceType.PHOTOLIBRARY);
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
          key: "takeVideo",
          value: function takeVideo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.video_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this5.openVideoCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this5.openVideoGallery();
                          }
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
          key: "openVideoCamera",
          value: function openVideoCamera() {
            var _this6 = this;

            var options = {
              limit: 1
            };
            this.mediaCapture.captureVideo(options).then(function (videodata) {
              console.log(videodata);
              _this6.media = videodata[0].fullPath;
              _this6.safeUrl = _this6.DomSanitizer.bypassSecurityTrustResourceUrl(_this6.media);
              _this6.mediaKey = 'video', _this6.mediaType = 'video/mp4';
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "openVideoGallery",
          value: function openVideoGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var options;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      options = {
                        destinationType: this.camera.DestinationType.NATIVE_URI,
                        mediaType: this.camera.MediaType.VIDEO,
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                      };
                      this.dataProvider.showLoading();
                      this.camera.getPicture(options).then(function (videoData) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this8 = this;

                          var filename, dirpath, dirUrl, retrievedFile;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  this.dataProvider.hideLoading();

                                  if (!videoData) {
                                    _context3.next = 19;
                                    break;
                                  }

                                  console.log(videoData);
                                  filename = videoData.substr(videoData.lastIndexOf('/') + 1);
                                  dirpath = videoData.substr(0, videoData.lastIndexOf('/') + 1);
                                  dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                                  _context3.prev = 6;
                                  _context3.next = 9;
                                  return this.file.resolveDirectoryUrl(dirpath);

                                case 9:
                                  dirUrl = _context3.sent;
                                  _context3.next = 12;
                                  return this.file.getFile(dirUrl, filename, {});

                                case 12:
                                  retrievedFile = _context3.sent;
                                  console.log(dirUrl, retrievedFile);
                                  _context3.next = 18;
                                  break;

                                case 16:
                                  _context3.prev = 16;
                                  _context3.t0 = _context3["catch"](6);

                                case 18:
                                  retrievedFile.file(function (data) {
                                    _this8.media = retrievedFile.nativeURL;
                                    _this8.safeUrl = _this8.DomSanitizer.bypassSecurityTrustResourceUrl(_this8.media);
                                    _this8.mediaKey = 'video', _this8.mediaType = 'video/mp4';
                                  });

                                case 19:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this, [[6, 16]]);
                        }));
                      })["catch"](function () {
                        return _this7.dataProvider.hideLoading();
                      });

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera(type) {
            var _this9 = this;

            var options = {
              quality: 100,
              // destinationType: this.camera.DestinationType.NATIVE_URI,
              // //destinationType: this.camera.DestinationType.DATA_URL,
              // encodingType: this.camera.EncodingType.PNG,
              // mediaType: this.camera.MediaType.PICTURE,
              // allowEdit: true,
              // correctOrientation: true,
              sourceType: type
            };
            this.dataProvider.showLoading();
            this.camera.getPicture(options).then(function (imageData) {
              _this9.dataProvider.hideLoading();

              if (imageData) {
                console.log('camera', imageData);
                _this9.media = imageData;
                _this9.safeUrl = _this9.DomSanitizer.bypassSecurityTrustResourceUrl(_this9.media);
                _this9.mediaKey = 'image', _this9.mediaType = 'image/png';
              }
            })["catch"](function () {
              return _this9.dataProvider.hideLoading();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostNewsPage;
      }();

      PostNewsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        }, {
          type: _service_location_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"]
        }, {
          type: _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_15__["GeoServiceProvider"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"]
        }, {
          type: _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_6__["FileUploadService"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]
        }];
      };

      PostNewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-news',
        template: _raw_loader_post_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _service_location_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"], _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_15__["GeoServiceProvider"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"], _service_file_upload_file_upload_service__WEBPACK_IMPORTED_MODULE_6__["FileUploadService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]])], PostNewsPage);
      /***/
    },

    /***/
    "laT1":
    /*!***********************************************!*\
      !*** ./src/app/post-news/post-news.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function laT1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-post-news:host .back-btn ion-icon {\n  font-size: 25px;\n}\napp-post-news:host .fform {\n  margin: 8px;\n}\napp-post-news:host .subject {\n  border: 1px solid grey;\n  margin: 10px 0;\n  position: relative;\n}\napp-post-news:host ion-row {\n  text-align: right;\n}\napp-post-news:host .send-btn {\n  height: 60px;\n}\napp-post-news:host .checkbox-inner {\n  position: absolute !important;\n  left: 8px !important;\n  height: 14px !important;\n  top: 0 !important;\n}\napp-post-news:host .attachment {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-post-news:host .attachment-video {\n  position: absolute;\n  bottom: 0px;\n  right: 40px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-post-news:host .attach-image {\n  text-align: right;\n}\napp-post-news:host .attach-image img {\n  height: auto;\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3QtbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxlQUFBO0FBRFo7QUFJSTtFQUNJLFdBQUE7QUFGUjtBQUlJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlJO0VBQ1EsaUJBQUE7QUFGWjtBQUlJO0VBQ0ksWUFBQTtBQUZSO0FBSUk7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0ksbUJBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0ksVUFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0ksbUJBQUE7RUFDSixZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0ksVUFBQTtBQUZaO0FBSUk7RUFDSSxpQkFBQTtBQUZSO0FBR1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURaIiwiZmlsZSI6InBvc3QtbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcG9zdC1uZXdzOmhvc3Qge1xyXG4gICAgLmJhY2stYnRue1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZmb3Jte1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YmplY3R7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5zZW5kLWJ0bntcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtaW5uZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYXR0YWNobWVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAuYXR0YWNobWVudC12aWRlb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaC1pbWFnZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "tJrc":
    /*!*******************************************************!*\
      !*** ./src/app/post-news/post-news-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PostNewsPageRoutingModule */

    /***/
    function tJrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostNewsPageRoutingModule", function () {
        return PostNewsPageRoutingModule;
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


      var _post_news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./post-news.page */
      "kavo");

      var routes = [{
        path: '',
        component: _post_news_page__WEBPACK_IMPORTED_MODULE_3__["PostNewsPage"]
      }];

      var PostNewsPageRoutingModule = function PostNewsPageRoutingModule() {
        _classCallCheck(this, PostNewsPageRoutingModule);
      };

      PostNewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PostNewsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=post-news-post-news-module-es5.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playvideo-playvideo-module"], {
    /***/
    "0yZI":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playvideo/playvideo.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function yZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"end\">\n   \t\t<ion-back-button></ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title text-right>{{'eLearning.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <div class=\"video-fix\" style=\"top: 0px;\" *ngIf=\"flag\">\n    <div class=\"video\" color=\"menu-color\">\n      <video #videoPlayer controls *ngIf=\"material.material_video_file !=''\" [src]=\"material.material_video_file\"\n        autoplay class=\"videoPlayer\"></video>\n      <iframe #youTubeVideo class=\"material-video-iframe\" allowfullscreen=\"allowfullscreen\" *ngIf=\"material.material_video_link !=''\"\n        [src]=\"material.material_video_link | safe\"></iframe>\n    </div>\n    <div style=\"min-height: 100px;\">\n      <ion-item no-lines class=\"e-learningdesc\">\n      \t<ion-label>\n\t        <h4>{{material.material_title}}</h4>\n          <p>{{material.material_description}}</p>\n      \t</ion-label>\n        <ion-icon name=\"share-social-outline\" (click)=\"share(material)\"></ion-icon>\n      </ion-item>\n    </div>\n  </div>\n\n  <div style=\"height: 280px;\" class=\"videoscroll\">\n    <div *ngFor=\"let relatedVideo of material.related_videos\">\n      <ion-row align-items-center (click)=\"playvideo(relatedVideo.id)\">\n        <ion-col size=\"4\">\n          <img *ngIf=\"relatedVideo.video_thumb.length > 0\" src=\"{{relatedVideo.video_thumb}}\" class=\"upcomming-video\">\n          <!-- <img *ngIf=\"relatedVideo.video_thumb.length == 0\" src=\"https://webapp.ws/att-admin/uploads/no-thumb.jpg\"\n            class=\"upcomming-video\"> -->\n            <video #vidThumbnail *ngIf=\"relatedVideo.material_video_file !=''\" class=\"upcomming-video vidThumbnail\">\n              <source [src]=\"relatedVideo.material_video_file\" type=\"video/mp4\">\n            </video>\n            <iframe #youTubeVideo  frameborder=\"0\"  class=\"upcomming-video\" *ngIf=\"relatedVideo.material_video_link !=''\"\n        [src]=\"relatedVideo.material_video_link | safe\"></iframe>\n        </ion-col>\n        <ion-col size=\"8\">\n          <p class=\"videosname\">{{relatedVideo.material_title}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "Vqo3":
    /*!*******************************************************!*\
      !*** ./src/app/playvideo/playvideo-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PlayvideoPageRoutingModule */

    /***/
    function Vqo3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayvideoPageRoutingModule", function () {
        return PlayvideoPageRoutingModule;
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


      var _playvideo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./playvideo.page */
      "impI");

      var routes = [{
        path: '',
        component: _playvideo_page__WEBPACK_IMPORTED_MODULE_3__["PlayvideoPage"]
      }];

      var PlayvideoPageRoutingModule = function PlayvideoPageRoutingModule() {
        _classCallCheck(this, PlayvideoPageRoutingModule);
      };

      PlayvideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlayvideoPageRoutingModule);
      /***/
    },

    /***/
    "dowu":
    /*!***********************************************!*\
      !*** ./src/app/playvideo/playvideo.module.ts ***!
      \***********************************************/

    /*! exports provided: PlayvideoPageModule */

    /***/
    function dowu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayvideoPageModule", function () {
        return PlayvideoPageModule;
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


      var _playvideo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./playvideo-routing.module */
      "Vqo3");
      /* harmony import */


      var _playvideo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./playvideo.page */
      "impI");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var PlayvideoPageModule = function PlayvideoPageModule() {
        _classCallCheck(this, PlayvideoPageModule);
      };

      PlayvideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _playvideo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayvideoPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_playvideo_page__WEBPACK_IMPORTED_MODULE_6__["PlayvideoPage"]]
      })], PlayvideoPageModule);
      /***/
    },

    /***/
    "impI":
    /*!*********************************************!*\
      !*** ./src/app/playvideo/playvideo.page.ts ***!
      \*********************************************/

    /*! exports provided: PlayvideoPage */

    /***/
    function impI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayvideoPage", function () {
        return PlayvideoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_playvideo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./playvideo.page.html */
      "0yZI");
      /* harmony import */


      var _playvideo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./playvideo.page.scss */
      "uXGG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");

      var PlayvideoPage = /*#__PURE__*/function () {
        function PlayvideoPage(navCtrl, //	public navParams: NavParams,
        dataProvider, //			    public sanitizer: DomSanitizer,
        platform, route, socialSharing, router, zone, screen) {
          var _this = this;

          _classCallCheck(this, PlayvideoPage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.platform = platform;
          this.route = route;
          this.socialSharing = socialSharing;
          this.router = router;
          this.zone = zone;
          this.screen = screen;
          /**
           * @member material contains the information about the currently playing material and related materials
           * @member flag Boolean variable will return true and false
           */

          this.material = {};
          this.flag = false;
          this.thumbnail = [];
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              // 		 this.navData = this.router.getCurrentNavigation().extras.state.course;
              // console.log(this.navData);
              _this.dataProvider.showLoading();

              var materialId = _this.router.getCurrentNavigation().extras.state.materialId;

              _this.dataProvider.getMaterialDetails(materialId).then(function (materialDetail) {
                _this.flag = true;

                _this.dataProvider.hideLoading();

                if (materialDetail.material_video_link != '') {
                  materialDetail.material_video_link = materialDetail.material_video_link + '?enablejsapi=1';

                  _this.youTubeVideoEvents();
                } else {
                  _this.VideoEvents();
                }

                _this.material = materialDetail;
              })["catch"](function (err) {
                _this.dataProvider.hideLoading();

                _this.dataProvider.errorALertMessage(err);
              });
            }
          });
          this.ionViewDidLoad();
        }

        _createClass(PlayvideoPage, [{
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.platform.is("cordova")) {
              this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(function () {})["catch"](function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "pausevideo",
          value: function pausevideo() {//let video = this.mVideoPlayer.nativeElement; 
            //video.pause();
          }
          /**
           * Play video
           * @param materialId id of the selected ,aterial
           */

        }, {
          key: "playvideo",
          value: function playvideo(materialId) {
            var _this2 = this;

            this.dataProvider.showLoading();
            this.dataProvider.getMaterialDetails(materialId).then(function (materialDetail) {
              _this2.dataProvider.hideLoading();

              _this2.material = materialDetail;
            })["catch"](function (err) {
              _this2.dataProvider.hideLoading();

              _this2.dataProvider.errorALertMessage(err);
            });
          }
        }, {
          key: "youTubeVideoEvents",
          value: function youTubeVideoEvents() {
            var _this3 = this;

            setTimeout(function () {
              _this3.video = new YT.Player(_this3.myouTubeVideo.nativeElement);

              _this3.video.addEventListener("onReady", function () {
                console.log("video is ready");
              });

              _this3.video.addEventListener("onStateChange", function (event) {
                switch (event.data) {
                  case YT.PlayerState.UNSTARTED:
                    if (_this3.platform.is("cordova")) {
                      _this3.screen.unlock();
                    }

                    break;

                  case YT.PlayerState.ENDED:
                    if (_this3.platform.is("cordova")) {
                      _this3.screen.lock(_this3.screen.ORIENTATIONS.PORTRAIT).then(function () {
                        console.log("locked again");
                      });
                    }

                    break;

                  case YT.PlayerState.PLAYING:
                    console.log('playing');
                    break;
                }
              });
            }, 2000);
          }
        }, {
          key: "VideoEvents",
          value: function VideoEvents() {
            var _this4 = this;

            setTimeout(function () {
              console.log("start");
              _this4.mVidThumbnail.nativeElement.currentTime = 5; //added new code for thumbnail start time

              _this4.video = _this4.mVideoPlayer.nativeElement;

              _this4.video.addEventListener("loadeddata", function () {
                if (_this4.platform.is("cordova")) {
                  _this4.screen.unlock();
                }
              });

              _this4.video.addEventListener("ended", function () {
                if (_this4.platform.is("cordova")) {
                  _this4.screen.lock(_this4.screen.ORIENTATIONS.PORTRAIT).then(function () {
                    console.log("locked again");
                  });
                }
              });
            }, 0);
          }
        }, {
          key: "share",
          value: function share(video) {
            //console.log(video);
            var content = video.material_description;

            if (this.platform.is('cordova')) {
              if (video.material_video_file != '') {
                var videoUrl = video.material_video_file;
                this.socialSharing.share(content, video.material_title, videoUrl, null).then(function (res) {
                  console.log(res);
                }, function (err) {
                  console.log(err);
                });
              } else {
                var _videoUrl = video.material_video_link;
                this.socialSharing.share(content, video.title, _videoUrl, null).then(function (res) {})["catch"](function (err) {
                  console.log(err);
                });
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlayvideoPage;
      }();

      PlayvideoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]
        }];
      };

      PlayvideoPage.propDecorators = {
        mVideoPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['videoPlayer']
        }],
        myouTubeVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['youTubeVideo']
        }],
        mVidThumbnail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['vidThumbnail']
        }]
      };
      PlayvideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-playvideo',
        template: _raw_loader_playvideo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_playvideo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])], PlayvideoPage);
      /***/
    },

    /***/
    "uXGG":
    /*!***********************************************!*\
      !*** ./src/app/playvideo/playvideo.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function uXGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-playvideo:host .video-fix {\n  width: 100%;\n  margin: 0 auto;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 999;\n}\napp-playvideo:host .video-fix h4 {\n  font-size: 17px;\n  font-weight: 600;\n}\napp-playvideo:host [ion-fixed] {\n  height: 100%;\n}\napp-playvideo:host .video {\n  width: 100%;\n  height: 33vh;\n}\napp-playvideo:host .video img {\n  width: 100%;\n}\napp-playvideo:host .video video {\n  height: 100%;\n  width: 100%;\n}\napp-playvideo:host .videoscroll {\n  width: 100%;\n  height: 280px;\n}\napp-playvideo:host .videoscroll .upcomming-video {\n  height: 58px;\n  width: 100%;\n  border-radius: 0px;\n  border-width: 0px;\n}\napp-playvideo:host .videoscroll .upcomming-video button.ytp-large-play-button.ytp-button {\n  display: none;\n}\napp-playvideo:host .videoscroll .videosname {\n  font-size: 17px;\n  font-weight: 400;\n}\napp-playvideo:host .playingvideo {\n  height: 75px;\n  border-bottom: 1px solid #dad4d4;\n}\napp-playvideo:host .playingvideo h4 {\n  font-size: 17px;\n  font-weight: 500;\n}\napp-playvideo:host .material-video-iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BsYXl2aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUdBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNaO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNFLFdBQUE7QUFDVjtBQUNTO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFDWjtBQUlLO0VBQ0csV0FBQTtFQUNBLGFBQUE7QUFGUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFo7QUFFWTtFQUNJLGFBQUE7QUFBaEI7QUFJUztFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUZiO0FBTUs7RUFDRyxZQUFBO0VBQ0EsZ0NBQUE7QUFKUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFo7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTFIiLCJmaWxlIjoicGxheXZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1wbGF5dmlkZW86aG9zdCB7XHJcbiAgICAudmlkZW8tZml4e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgW2lvbi1maXhlZF0ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC52aWRlb3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMzdmg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZpZGVve1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxuXHJcbiAgICAgLnZpZGVvc2Nyb2xse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgLnVwY29tbWluZy12aWRlb3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgYnV0dG9uLnl0cC1sYXJnZS1wbGF5LWJ1dHRvbi55dHAtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLnZpZGVvc25hbWV7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICAucGxheWluZ3ZpZGVve1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZDRkNDtcclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgIC5tYXRlcmlhbC12aWRlby1pZnJhbWV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBcclxuXHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=playvideo-playvideo-module-es5.js.map
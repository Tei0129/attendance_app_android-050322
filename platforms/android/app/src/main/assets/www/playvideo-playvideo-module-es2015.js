(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playvideo-playvideo-module"],{

/***/ "0yZI":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playvideo/playvideo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"end\">\n   \t\t<ion-back-button></ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title text-right>{{'eLearning.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <div class=\"video-fix\" style=\"top: 0px;\" *ngIf=\"flag\">\n    <div class=\"video\" color=\"menu-color\">\n      <video #videoPlayer controls *ngIf=\"material.material_video_file !=''\" [src]=\"material.material_video_file\"\n        autoplay class=\"videoPlayer\"></video>\n      <iframe #youTubeVideo class=\"material-video-iframe\" allowfullscreen=\"allowfullscreen\" *ngIf=\"material.material_video_link !=''\"\n        [src]=\"material.material_video_link | safe\"></iframe>\n    </div>\n    <div style=\"min-height: 100px;\">\n      <ion-item no-lines class=\"e-learningdesc\">\n      \t<ion-label>\n\t        <h4>{{material.material_title}}</h4>\n          <p>{{material.material_description}}</p>\n      \t</ion-label>\n        <ion-icon name=\"share-social-outline\" (click)=\"share(material)\"></ion-icon>\n      </ion-item>\n    </div>\n  </div>\n\n  <div style=\"height: 280px;\" class=\"videoscroll\">\n    <div *ngFor=\"let relatedVideo of material.related_videos\">\n      <ion-row align-items-center (click)=\"playvideo(relatedVideo.id)\">\n        <ion-col size=\"4\">\n          <img *ngIf=\"relatedVideo.video_thumb.length > 0\" src=\"{{relatedVideo.video_thumb}}\" class=\"upcomming-video\">\n          <!-- <img *ngIf=\"relatedVideo.video_thumb.length == 0\" src=\"https://webapp.ws/att-admin/uploads/no-thumb.jpg\"\n            class=\"upcomming-video\"> -->\n            <video #vidThumbnail *ngIf=\"relatedVideo.material_video_file !=''\" class=\"upcomming-video vidThumbnail\">\n              <source [src]=\"relatedVideo.material_video_file\" type=\"video/mp4\">\n            </video>\n            <iframe #youTubeVideo  frameborder=\"0\"  class=\"upcomming-video\" *ngIf=\"relatedVideo.material_video_link !=''\"\n        [src]=\"relatedVideo.material_video_link | safe\"></iframe>\n        </ion-col>\n        <ion-col size=\"8\">\n          <p class=\"videosname\">{{relatedVideo.material_title}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Vqo3":
/*!*******************************************************!*\
  !*** ./src/app/playvideo/playvideo-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PlayvideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvideoPageRoutingModule", function() { return PlayvideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playvideo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playvideo.page */ "impI");




const routes = [
    {
        path: '',
        component: _playvideo_page__WEBPACK_IMPORTED_MODULE_3__["PlayvideoPage"]
    }
];
let PlayvideoPageRoutingModule = class PlayvideoPageRoutingModule {
};
PlayvideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayvideoPageRoutingModule);



/***/ }),

/***/ "dowu":
/*!***********************************************!*\
  !*** ./src/app/playvideo/playvideo.module.ts ***!
  \***********************************************/
/*! exports provided: PlayvideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvideoPageModule", function() { return PlayvideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _playvideo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playvideo-routing.module */ "Vqo3");
/* harmony import */ var _playvideo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playvideo.page */ "impI");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let PlayvideoPageModule = class PlayvideoPageModule {
};
PlayvideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _playvideo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayvideoPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_playvideo_page__WEBPACK_IMPORTED_MODULE_6__["PlayvideoPage"]]
    })
], PlayvideoPageModule);



/***/ }),

/***/ "impI":
/*!*********************************************!*\
  !*** ./src/app/playvideo/playvideo.page.ts ***!
  \*********************************************/
/*! exports provided: PlayvideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvideoPage", function() { return PlayvideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_playvideo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./playvideo.page.html */ "0yZI");
/* harmony import */ var _playvideo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playvideo.page.scss */ "uXGG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");









let PlayvideoPage = class PlayvideoPage {
    constructor(navCtrl, 
    //	public navParams: NavParams,
    dataProvider, 
    //			    public sanitizer: DomSanitizer,
    platform, route, socialSharing, router, zone, screen) {
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
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                // 		 this.navData = this.router.getCurrentNavigation().extras.state.course;
                // console.log(this.navData);
                this.dataProvider.showLoading();
                let materialId = this.router.getCurrentNavigation().extras.state.materialId;
                this.dataProvider.getMaterialDetails(materialId).then((materialDetail) => {
                    this.flag = true;
                    this.dataProvider.hideLoading();
                    if (materialDetail.material_video_link != '') {
                        materialDetail.material_video_link = materialDetail.material_video_link + '?enablejsapi=1';
                        this.youTubeVideoEvents();
                    }
                    else {
                        this.VideoEvents();
                    }
                    this.material = materialDetail;
                }).catch((err) => {
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(err);
                });
            }
        });
        this.ionViewDidLoad();
    }
    ionViewDidLoad() {
    }
    ionViewWillLeave() {
        if (this.platform.is("cordova")) {
            this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(() => {
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    pausevideo() {
        //let video = this.mVideoPlayer.nativeElement; 
        //video.pause();
    }
    /**
     * Play video
     * @param materialId id of the selected ,aterial
     */
    playvideo(materialId) {
        this.dataProvider.showLoading();
        this.dataProvider.getMaterialDetails(materialId).then((materialDetail) => {
            this.dataProvider.hideLoading();
            this.material = materialDetail;
        }).catch((err) => {
            this.dataProvider.hideLoading();
            this.dataProvider.errorALertMessage(err);
        });
    }
    youTubeVideoEvents() {
        setTimeout(() => {
            this.video = new YT.Player(this.myouTubeVideo.nativeElement);
            this.video.addEventListener("onReady", () => {
                console.log("video is ready");
            });
            this.video.addEventListener("onStateChange", (event) => {
                switch (event.data) {
                    case YT.PlayerState.UNSTARTED:
                        if (this.platform.is("cordova")) {
                            this.screen.unlock();
                        }
                        break;
                    case YT.PlayerState.ENDED:
                        if (this.platform.is("cordova")) {
                            this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(() => {
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
    VideoEvents() {
        setTimeout(() => {
            console.log("start");
            this.mVidThumbnail.nativeElement.currentTime = 5; //added new code for thumbnail start time
            this.video = this.mVideoPlayer.nativeElement;
            this.video.addEventListener("loadeddata", () => {
                if (this.platform.is("cordova")) {
                    this.screen.unlock();
                }
            });
            this.video.addEventListener("ended", () => {
                if (this.platform.is("cordova")) {
                    this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(() => {
                        console.log("locked again");
                    });
                }
            });
        }, 0);
    }
    share(video) {
        //console.log(video);
        let content = video.material_description;
        if (this.platform.is('cordova')) {
            if (video.material_video_file != '') {
                let videoUrl = video.material_video_file;
                this.socialSharing.share(content, video.material_title, videoUrl, null).then(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                });
            }
            else {
                let videoUrl = video.material_video_link;
                this.socialSharing.share(content, video.title, videoUrl, null).then((res) => {
                }).catch((err) => {
                    console.log(err);
                });
            }
        }
    }
    ngOnInit() {
    }
};
PlayvideoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"] }
];
PlayvideoPage.propDecorators = {
    mVideoPlayer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['videoPlayer',] }],
    myouTubeVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['youTubeVideo',] }],
    mVidThumbnail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['vidThumbnail',] }]
};
PlayvideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-playvideo',
        template: _raw_loader_playvideo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_playvideo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])
], PlayvideoPage);



/***/ }),

/***/ "uXGG":
/*!***********************************************!*\
  !*** ./src/app/playvideo/playvideo.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-playvideo:host .video-fix {\n  width: 100%;\n  margin: 0 auto;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 999;\n}\napp-playvideo:host .video-fix h4 {\n  font-size: 17px;\n  font-weight: 600;\n}\napp-playvideo:host [ion-fixed] {\n  height: 100%;\n}\napp-playvideo:host .video {\n  width: 100%;\n  height: 33vh;\n}\napp-playvideo:host .video img {\n  width: 100%;\n}\napp-playvideo:host .video video {\n  height: 100%;\n  width: 100%;\n}\napp-playvideo:host .videoscroll {\n  width: 100%;\n  height: 280px;\n}\napp-playvideo:host .videoscroll .upcomming-video {\n  height: 58px;\n  width: 100%;\n  border-radius: 0px;\n  border-width: 0px;\n}\napp-playvideo:host .videoscroll .upcomming-video button.ytp-large-play-button.ytp-button {\n  display: none;\n}\napp-playvideo:host .videoscroll .videosname {\n  font-size: 17px;\n  font-weight: 400;\n}\napp-playvideo:host .playingvideo {\n  height: 75px;\n  border-bottom: 1px solid #dad4d4;\n}\napp-playvideo:host .playingvideo h4 {\n  font-size: 17px;\n  font-weight: 500;\n}\napp-playvideo:host .material-video-iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BsYXl2aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUdBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNaO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNFLFdBQUE7QUFDVjtBQUNTO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFDWjtBQUlLO0VBQ0csV0FBQTtFQUNBLGFBQUE7QUFGUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFo7QUFFWTtFQUNJLGFBQUE7QUFBaEI7QUFJUztFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUZiO0FBTUs7RUFDRyxZQUFBO0VBQ0EsZ0NBQUE7QUFKUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFo7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTFIiLCJmaWxlIjoicGxheXZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1wbGF5dmlkZW86aG9zdCB7XHJcbiAgICAudmlkZW8tZml4e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgW2lvbi1maXhlZF0ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC52aWRlb3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMzdmg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZpZGVve1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxuXHJcbiAgICAgLnZpZGVvc2Nyb2xse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgLnVwY29tbWluZy12aWRlb3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgYnV0dG9uLnl0cC1sYXJnZS1wbGF5LWJ1dHRvbi55dHAtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLnZpZGVvc25hbWV7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICAucGxheWluZ3ZpZGVve1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZDRkNDtcclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgIC5tYXRlcmlhbC12aWRlby1pZnJhbWV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBcclxuXHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=playvideo-playvideo-module-es2015.js.map
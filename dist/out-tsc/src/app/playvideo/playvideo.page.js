import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, NgZone } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavController, Platform } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
let PlayvideoPage = /** @class */ (() => {
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
    __decorate([
        ViewChild('videoPlayer'),
        __metadata("design:type", Object)
    ], PlayvideoPage.prototype, "mVideoPlayer", void 0);
    __decorate([
        ViewChild('youTubeVideo'),
        __metadata("design:type", Object)
    ], PlayvideoPage.prototype, "myouTubeVideo", void 0);
    PlayvideoPage = __decorate([
        Component({
            selector: 'app-playvideo',
            templateUrl: './playvideo.page.html',
            styleUrls: ['./playvideo.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            Platform,
            ActivatedRoute,
            SocialSharing,
            Router,
            NgZone,
            ScreenOrientation])
    ], PlayvideoPage);
    return PlayvideoPage;
})();
export { PlayvideoPage };
//# sourceMappingURL=playvideo.page.js.map
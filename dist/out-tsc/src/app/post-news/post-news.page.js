import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LocationService } from '../service/location/location.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
const env = environment;
let PostNewsPage = /** @class */ (() => {
    let PostNewsPage = class PostNewsPage {
        /**
         *
         * @param navCtrl Navigation controller
         * @param translate used from translation messages
         * @param dataProvider data provider
         * @param camera used for taking images
         * @param alertCtrl use for alert popup
         */
        constructor(navCtrl, translate, dataProvider, camera, locationSrevice, router, file, mediaCapture, fileChooser, transfer, alertCtrl, DomSanitizer) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.camera = camera;
            this.locationSrevice = locationSrevice;
            this.router = router;
            this.file = file;
            this.mediaCapture = mediaCapture;
            this.fileChooser = fileChooser;
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
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.translate.get("location").subscribe((res) => {
                this.location_lang = res;
            });
            this.getLocation();
        }
        getLocation() {
            this.locationSrevice.checkGPSPermission(resp => {
                this.country_code = resp.countryCode;
                this.news.countryCode = resp.country_code;
            }, e => {
                this.dataProvider.showToast(this.location_lang.location_error);
                console.log(e);
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            console.log(this.userDetails);
            this.news.user_no = this.userDetails.details.user_no;
            this.news.user_type = this.userDetails.details.user_type;
            this.news.school_id = this.userDetails.details.school_id;
        }
        /**
         * Used to send the message
         */
        moveBack() {
            this.router.navigate(['tabs/messages']);
        }
        sendNews() {
            if (this.userDetails) {
                if (this.news.news_description == '' || this.news.news_description.length > 300) {
                    this.dataProvider.showToast(this.lang.max_body);
                }
                else {
                    this.uploadData(this.media, this.news);
                }
            }
            else {
                this.dataProvider.showToast(this.lang.user_not_exist);
            }
        }
        /**
         * alert to show image take choice
         */
        takePicture() {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.image_option,
                    buttons: [
                        {
                            text: this.lang.camera,
                            handler: () => {
                                this.openCamera(this.camera.PictureSourceType.CAMERA);
                            }
                        },
                        {
                            text: this.lang.gallery,
                            handler: () => {
                                //this.openGallery()
                                this.openCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        takeVideo() {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.video_option,
                    buttons: [
                        {
                            text: this.lang.camera,
                            handler: () => {
                                this.openVideoCamera();
                            }
                        },
                        {
                            text: this.lang.gallery,
                            handler: () => {
                                this.openVideoGallery();
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        openVideoCamera() {
            let options = { limit: 1 };
            this.mediaCapture.captureVideo(options)
                .then((videodata) => {
                console.log(videodata);
                this.media = videodata[0].fullPath;
                this.safeUrl = this.DomSanitizer.bypassSecurityTrustResourceUrl(this.media);
                this.mediaKey = 'video',
                    this.mediaType = 'video/mp4';
            }).catch(error => {
                console.log(error);
            });
        }
        openVideoGallery() {
            return __awaiter(this, void 0, void 0, function* () {
                let options = {
                    destinationType: this.camera.DestinationType.NATIVE_URI,
                    mediaType: this.camera.MediaType.VIDEO,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                };
                this.dataProvider.showLoading();
                this.camera.getPicture(options).then((videoData) => __awaiter(this, void 0, void 0, function* () {
                    this.dataProvider.hideLoading();
                    if (videoData) {
                        console.log(videoData);
                        var filename = videoData.substr(videoData.lastIndexOf('/') + 1);
                        var dirpath = videoData.substr(0, videoData.lastIndexOf('/') + 1);
                        dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                        try {
                            var dirUrl = yield this.file.resolveDirectoryUrl(dirpath);
                            var retrievedFile = yield this.file.getFile(dirUrl, filename, {});
                            console.log(dirUrl, retrievedFile);
                        }
                        catch (err) {
                        }
                        retrievedFile.file(data => {
                            this.media = retrievedFile.nativeURL;
                            this.safeUrl = this.DomSanitizer.bypassSecurityTrustResourceUrl(this.media);
                            this.mediaKey = 'video',
                                this.mediaType = 'video/mp4';
                        });
                    }
                })).catch(() => this.dataProvider.hideLoading());
            });
        }
        /**
         * mobile camera to take image
         */
        openCamera(type) {
            let options = {
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
            this.camera.getPicture(options).then((imageData) => {
                this.dataProvider.hideLoading();
                if (imageData) {
                    console.log('camera', imageData);
                    this.media = imageData;
                    this.safeUrl = this.DomSanitizer.bypassSecurityTrustResourceUrl(this.media);
                    this.mediaKey = 'image',
                        this.mediaType = 'image/png';
                }
            }).catch(() => this.dataProvider.hideLoading());
        }
        ngOnInit() {
        }
        uploadData(media, formData) {
            var url = environment.serverURL + 'postNews';
            console.log('media', media);
            console.log('formData', formData);
            console.log('url', url);
            var filename = '';
            if (media) {
                var name = media.substr(media.lastIndexOf('/') + 1);
                var splitted = name.split('?');
                filename = splitted[0];
            }
            this.news.type = this.mediaType;
            var options = {
                fileName: filename,
                fileKey: 'file',
                mimeType: this.mediaType,
                //chunkedMode:false,
                //headers: {'Content-Type':'application/x-www-form-urlencoded'},
                params: formData,
            };
            console.log('upload', options);
            this.videoFileUpload = this.transfer.create();
            this.dataProvider.showLoading();
            this.videoFileUpload.upload(media, url, options).then((data) => {
                console.log("Success", data);
                this.dataProvider.hideLoading();
                this.dataProvider.showToast(this.lang.news_posted);
                this.news = {
                    'title': 'title',
                    'news_description': '',
                    'user_no': '',
                    'type': '',
                    'user_type': '',
                    'school_id': '',
                    'countryCode': ''
                };
                this.media = '';
                this.safeUrl = false;
                // this.router.navigate(['tabs/news']);
            })
                .catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.showToast(err);
                console.log("Error", err);
            });
            // this.videoFileUpload.onProgress((data) => {
            //   this.uploadPercent = Math.round((data.loaded/data.total) * 100);
            // });
        } //EOF uploadData
    };
    PostNewsPage = __decorate([
        Component({
            selector: 'app-post-news',
            templateUrl: './post-news.page.html',
            styleUrls: ['./post-news.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            Camera,
            LocationService,
            Router,
            File,
            MediaCapture,
            FileChooser,
            FileTransfer,
            AlertController,
            DomSanitizer])
    ], PostNewsPage);
    return PostNewsPage;
})();
export { PostNewsPage };
//# sourceMappingURL=post-news.page.js.map
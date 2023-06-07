import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { DataService } from '../service/data/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { environment } from '../../environments/environment';
const env = environment;
let AddNotesPage = /** @class */ (() => {
    let AddNotesPage = class AddNotesPage {
        constructor(navCtrl, translate, dataProvider, camera, route, router, file, fileChooser, transfer, base64, filePath, alertCtrl, location) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.camera = camera;
            this.route = route;
            this.router = router;
            this.file = file;
            this.fileChooser = fileChooser;
            this.transfer = transfer;
            this.base64 = base64;
            this.filePath = filePath;
            this.alertCtrl = alertCtrl;
            this.location = location;
            this.notes = {
                sendTo: '',
                description: '',
                studentIds: '',
                ticketImage: '',
                pdf: '',
                user_no: '',
                school_id: '',
                classId: '',
                type: ''
            };
            this.lang = {};
            this.userDetails = {};
            this.ticketImage = '';
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.class_id = this.router.getCurrentNavigation().extras.state.state.course_id;
                    this.students = this.router.getCurrentNavigation().extras.state.state.students;
                    this.state = this.router.getCurrentNavigation().extras.state.state;
                    this.data = this.router.getCurrentNavigation().extras.state.data;
                    console.log(this.students);
                }
            });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
        }
        /**
         * Used to send the message
         */
        sendNotes() {
            if (!this.notes.sendTo) {
                this.dataProvider.showToast(this.lang.select_type);
            }
            else {
                console.log(this.userDetails);
                this.notes.classId = this.class_id;
                this.notes.user_no = this.userDetails.details.user_no;
                this.notes.school_id = this.userDetails.details.school_id;
                console.log(this.notes);
                let media;
                if (this.notes.ticketImage && this.notes.ticketImage != '') {
                    media = this.notes.ticketImage;
                }
                else {
                    media = this.notes.pdf;
                }
                this.uploadNotes(media, this.notes);
                //  	this.dataProvider.createNotes(this.notes).then(res=>{
                // this.dataProvider.showToast(res);
                // this.location.back();
                //  	}).catch(e=>{ 
                // this.dataProvider.showToast(e);
                // console.log('res',e);
                //  	})
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
                                this.openCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
                                //this.openGallery()
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        openCamera(type) {
            let options = {
                quality: 100,
                sourceType: type
            };
            this.camera.getPicture(options).then((imageData) => {
                if (imageData) {
                    this.notes.ticketImage = imageData;
                    this.ticketImage = imageData;
                    this.mediaType = 'image/jpg';
                }
            });
        }
        uploadNotes(media, formData) {
            var url = environment.serverURL + 'createNotes';
            console.log('media', media);
            console.log('formData', formData);
            console.log('url', url);
            var filename = '';
            if (media) {
                var name = media.substr(media.lastIndexOf('/') + 1);
                var splitted = name.split('?');
                filename = splitted[0];
            }
            this.notes.type = this.mediaType;
            var options = {
                fileName: filename,
                fileKey: 'file',
                mimeType: this.mediaType,
                params: formData,
            };
            console.log('upload', options);
            const notesUpload = this.transfer.create();
            this.dataProvider.showLoading();
            notesUpload.upload(media, url, options).then((data) => {
                console.log("Success", data);
                this.dataProvider.hideLoading();
                this.dataProvider.showToast('Note created');
                // this.location.back();
                this.router.navigate(['view-notes']);
                //this.dataProvider.viewNotes(this.notes,this.state);
            })
                .catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.showToast(err);
                console.log("Error", err);
            });
        } //EOF uploadData
        uploadPdf() {
            return __awaiter(this, void 0, void 0, function* () {
                this.fileChooser.open().then((filePath) => {
                    console.log('filePath', filePath);
                    this.notes.pdf = filePath;
                    this.mediaType = 'file/pdf';
                });
            });
        }
        portChange(event) {
        }
        ngOnInit() {
        }
    };
    AddNotesPage = __decorate([
        Component({
            selector: 'app-add-notes',
            templateUrl: './add-notes.page.html',
            styleUrls: ['./add-notes.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            Camera,
            ActivatedRoute,
            Router,
            File,
            FileChooser,
            FileTransfer,
            Base64,
            FilePath,
            AlertController,
            Location])
    ], AddNotesPage);
    return AddNotesPage;
})();
export { AddNotesPage };
//# sourceMappingURL=add-notes.page.js.map
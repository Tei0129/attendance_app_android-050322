import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../../service/auth/auth.service';
import { DataService } from '../../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentService } from '../../service/document/document.service';
let ViewClassNotesPage = /** @class */ (() => {
    let ViewClassNotesPage = class ViewClassNotesPage {
        constructor(navCtrl, 
        // public app: App, 
        translate, dataProvider, authProvider, 
        //public events: Events,
        documentService, alertCtrl, route, photoViewer, zone, router, modalController) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.documentService = documentService;
            this.alertCtrl = alertCtrl;
            this.route = route;
            this.photoViewer = photoViewer;
            this.zone = zone;
            this.router = router;
            this.modalController = modalController;
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state.course;
                    console.log(this.navData);
                }
            });
        }
        ngOnInit() {
            console.log('moda', this.data);
        }
        cloeModal() {
            this.modalController.dismiss();
        }
        showPhoto(url) {
            console.log(url);
            this.photoViewer.show(url);
        }
        ionViewWillEnter() {
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
            }
        }
        addNotes() {
            this.cloeModal();
            const navigation = {
                state: {
                    state: this.state,
                    data: this.data
                }
            };
            //console.log(navigation);
            this.zone.run(() => {
                this.router.navigate(['add-notes'], navigation);
            });
            //this.router.navigate(['add-notes']);
        }
        openPdf(pdf) {
            //  window.open(pdf,'_blank')
            // this.documentService.openPdf(pdf,true);
            window.open(pdf, '_system');
        }
        deleteNote(note) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.delete_note,
                    backdropDismiss: true,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.lang.delete,
                            handler: () => {
                                console.log(note);
                                let data = {
                                    note_id: note.notes_id
                                };
                                this.authProvider.deleteNote(data);
                                this.cloeModal();
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
        getAllClassNotes() {
            let course = this.navData;
            let studentData = {
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "course_id": course.cid,
                "school_id": this.userDetails.details.school_id,
            };
            this.dataProvider.getAllClassNotes(studentData).then(res => {
                console.log(res);
                if (res) {
                    // this.dataProvider.viewNotes(res);
                    this.notes = res;
                }
            }).catch(error => {
                console.log(error);
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ViewClassNotesPage.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ViewClassNotesPage.prototype, "state", void 0);
    ViewClassNotesPage = __decorate([
        Component({
            selector: 'app-view-class-notes',
            templateUrl: './view-class-notes.page.html',
            styleUrls: ['./view-class-notes.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            AuthService,
            DocumentService,
            AlertController,
            ActivatedRoute,
            PhotoViewer,
            NgZone,
            Router,
            ModalController])
    ], ViewClassNotesPage);
    return ViewClassNotesPage;
})();
export { ViewClassNotesPage };
//# sourceMappingURL=view-class-notes.page.js.map
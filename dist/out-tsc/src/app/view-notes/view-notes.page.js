import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentService } from '../service/document/document.service';
let ViewNotesPage = /** @class */ (() => {
    let ViewNotesPage = class ViewNotesPage {
        constructor(navCtrl, translate, dataProvider, documentService, alertCtrl, route, photoViewer, zone, router, modalController) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
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
                    this.state = this.router.getCurrentNavigation().extras.state;
                    console.log(this.navData);
                }
            });
        }
        ngOnInit() {
            console.log('moda', this.data);
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                this.getAllClassNotes();
            }
        }
        showPhoto(url) {
            console.log(url);
            this.photoViewer.show(url);
        }
        ionViewWillEnter() {
        }
        addNotes() {
            // this.cloeModal();
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
                                this.dataProvider.deleteNote(data, res => {
                                    this.getAllClassNotes();
                                });
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
                    this.data = res;
                }
            }).catch(error => {
                console.log(error);
            });
        }
    };
    ViewNotesPage = __decorate([
        Component({
            selector: 'app-view-notes',
            templateUrl: './view-notes.page.html',
            styleUrls: ['./view-notes.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            DocumentService,
            AlertController,
            ActivatedRoute,
            PhotoViewer,
            NgZone,
            Router,
            ModalController])
    ], ViewNotesPage);
    return ViewNotesPage;
})();
export { ViewNotesPage };
//# sourceMappingURL=view-notes.page.js.map
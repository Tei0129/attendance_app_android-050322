import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentService } from '../service/document/document.service';
let StudentNotesPage = /** @class */ (() => {
    let StudentNotesPage = class StudentNotesPage {
        constructor(navCtrl, 
        // public app: App, 
        translate, dataProvider, authProvider, 
        //public events: Events,
        alertCtrl, route, documentService, zone, router, photoViewer, modalCtrl) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.alertCtrl = alertCtrl;
            this.route = route;
            this.documentService = documentService;
            this.zone = zone;
            this.router = router;
            this.photoViewer = photoViewer;
            this.modalCtrl = modalCtrl;
            this.authProvider.event.subscribe((res) => {
                console.log('change', res);
                if (res.changeUser) {
                    this.ionViewWillEnter();
                }
            });
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
                console.log(this.lang);
            });
        }
        ngOnInit() {
        }
        showPhoto(url) {
            this.photoViewer.show(url);
        }
        ionViewWillEnter() {
            // this.dataProvider.showLoading();
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                console.log('this', this.userDetails);
                this.userType = this.userDetails.details.user_type;
                this.getClassNotes();
            }
            else {
                this.dataProvider.hideLoading();
                console.log('not logged in');
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
            }
        }
        getClassNotes() {
            let data = {
                "student_id": this.userDetails.details.stu_id,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.getClassNotes(data).then(res => {
                console.log(res);
                this.notes = res;
            }).catch(Error => {
                this.dataProvider.showToast(Error);
                console.log(Error);
            });
        }
        openPdf(pdf) {
            //  window.open(pdf,'_blank')
            window.open(pdf, '_system');
            //this.documentService.openPdf(pdf,true);
        }
    };
    StudentNotesPage = __decorate([
        Component({
            selector: 'app-student-notes',
            templateUrl: './student-notes.page.html',
            styleUrls: ['./student-notes.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            AuthService,
            AlertController,
            ActivatedRoute,
            DocumentService,
            NgZone,
            Router,
            PhotoViewer,
            ModalController])
    ], StudentNotesPage);
    return StudentNotesPage;
})();
export { StudentNotesPage };
//# sourceMappingURL=student-notes.page.js.map
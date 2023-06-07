import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, PopoverController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
//import { TabsPage } from '../tabs/tabs';
import { Camera } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../service/database/database.service';
import { StudentDataService } from '../service/student-data/student-data.service';
let StudentDetailPage = /** @class */ (() => {
    let StudentDetailPage = class StudentDetailPage {
        /**
         *
         * @param navParams     Use to get the value passed from previous page
         * @param app           Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         */
        constructor(navCtrl, 
        //	public navParams: NavParams, 
        dataProvider, authProvider, dbProvider, studentService, alertController, 
        //public app: App, 
        translate, alertCtrl, camera, network, route, router, zone, popover, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.dbProvider = dbProvider;
            this.studentService = studentService;
            this.alertController = alertController;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.camera = camera;
            this.network = network;
            this.route = route;
            this.router = router;
            this.zone = zone;
            this.popover = popover;
            this.platform = platform;
            this.absenceDetail = [];
            this.notes = [];
            this.studentDetails = {};
            this.lang = {};
            this.userDetails = {};
            this.noteMessage = "";
            this.canAddStudentNote = true;
            this.noNotesFound = '';
            this.noAbsenceFound = '';
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
            this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
            this.ratingStars = 1;
            this.showNoteModal = false;
            this.halfStar = false;
            this.studentBehaviour = {
                "icon": "",
                "text": ""
            };
            this.navData = {};
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state;
                    this.totalDelay = this.navData.total_delay;
                    //   console.log(this.navData,this.totalDelay);
                }
            });
            // this.category = "absence";
            this.translate.get("alertmessages").subscribe((val) => {
                this.lang = val;
            });
            this.translate.get("plan").subscribe((val) => {
                this.planLang = val;
            });
            this.translate.get("app_rate").subscribe((val) => {
                this.app_rate = val;
            });
        }
        ionViewWillEnter() {
            if (this.platform.is('cordova')) {
                if (this.network.type != this.network.Connection.NONE && this.network.type != this.network.Connection.UNKNOWN) {
                    this.checkProfile();
                }
                else {
                    if (this.navData.student_id) {
                        this.getOfflineNote();
                        this.studentService.getStudent(this.navData.student_id, response => {
                            this.studentDetails = response;
                            if (this.studentDetails.can_view_absent) {
                                this.category = "absence";
                            }
                            else {
                                this.category = "notes";
                            }
                            //  console.log('studentDetails',this.studentDetails);
                            if (this.studentDetails.absents.length == 0) {
                                this.noAbsenceFound = this.lang.no_absent;
                            }
                        }, error => {
                            this.dataProvider.showToast(this.lang.no_internet);
                        });
                    }
                    else {
                        this.dataProvider.showToast(this.lang.no_internet);
                        this.navCtrl.back();
                    }
                }
            }
            else {
                this.checkProfile();
            }
        }
        getOfflineNote() {
            this.studentService.getStudentNote(this.navData.student_id, response => {
                this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
                this.notes = response;
                if (response.agg_ranking > 0 && response.agg_ranking < 2.6) {
                    this.studentBehaviour.icon = "./assets/icon/warning.png";
                    this.studentBehaviour.text = this.lang.warning_behaviour;
                }
                else if (response.agg_ranking > 2.5 && response.agg_ranking < 3.6) {
                    this.studentBehaviour.icon = "./assets/icon/good.png";
                    this.studentBehaviour.text = this.lang.good_behaviour;
                }
                else if (response.agg_ranking > 3.5 && response.agg_ranking < 4.6) {
                    this.studentBehaviour.icon = "./assets/icon/very-good.png";
                    this.studentBehaviour.text = this.lang.very_good_behaviour;
                }
                else if (response.agg_ranking > 4.5 && response.agg_ranking < 5.1) {
                    this.studentBehaviour.icon = "./assets/icon/excellent.png";
                    this.studentBehaviour.text = this.lang.excellent_behaviour;
                }
                else {
                    this.studentBehaviour.icon = "chatbubbles";
                    this.studentBehaviour.text = this.lang.no_behaviour;
                }
                if (response.notes.length > 0) {
                    this.notes.notes.forEach((note) => {
                        if (this.checkNoteDate(new Date(note.date)) && note.user_id == this.userDetails.details.user_no) {
                            this.canAddStudentNote = false;
                        }
                        if (note.rating > 0) {
                            note.selections = ['#fff', '#fff', '#fff', '#fff', '#fff'];
                            for (let i = 0; i < parseInt(note.rating); i++) {
                                note.selections[i] = "#04855f";
                            }
                        }
                    });
                    let realNo = 0;
                    if (this.notes.agg_ranking % 1 == 0) {
                        realNo = parseInt(this.notes.agg_ranking);
                    }
                    else {
                        realNo = Math.floor(this.notes.agg_ranking);
                        this.halfStarPosition = realNo;
                        this.halfStar = true;
                    }
                    for (let i = 0; i < realNo; i++) {
                        this.aggStars[i] = "#04855f";
                    }
                }
                else {
                    this.noNotesFound = this.lang.no_note;
                }
            }, error => { this.dataProvider.showToast(this.lang.no_internet); });
        }
        checkProfile() {
            this.dataProvider.showLoading();
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                let data = {
                    "user_no": this.userDetails.details.user_no,
                    "session_id": this.userDetails.session_id,
                    "cid": this.navData.course_id,
                    "date": this.navData.dateSelected,
                    "sid": this.navData.student_id
                };
                this.getNotes();
                this.dataProvider.getStudentDetails(data).then(response => {
                    this.dataProvider.hideLoading();
                    if (response.session) {
                        this.studentService.checkStudent(response.data);
                        this.studentDetails = response.data;
                        if (this.studentDetails.can_view_absent) {
                            this.category = "absence";
                        }
                        else {
                            this.category = "notes";
                        }
                        // console.log('studentDetails',this.studentDetails);
                        if (this.studentDetails.absents.length == 0) {
                            this.noAbsenceFound = this.lang.no_absent;
                        }
                    }
                    else {
                        this.authProvider.flushLocalStorage();
                        this.dataProvider.errorALertMessage(response.message);
                        //this.app.getRootNav().setRoot("LoginPage");
                    }
                }).catch(error => {
                    console.log(error);
                    this.dataProvider.hideLoading();
                    this.dataProvider.errorALertMessage(error);
                });
            }
            else {
                this.dataProvider.hideLoading();
                this.authProvider.flushLocalStorage();
                //  this.app.getRootNav().setRoot("LoginPage");
            }
        }
        getNotes() {
            let data = {
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "cid": this.navData.course_id,
                "date": this.navData.dateSelected,
                "sid": this.navData.student_id
            };
            this.dataProvider.getStudentNotes(data).then((response) => {
                // console.log(response);
                this.studentService.checkStudentNotes(response, this.navData.student_id);
                this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
                this.notes = response;
                if (response.agg_ranking > 0 && response.agg_ranking < 2.6) {
                    this.studentBehaviour.icon = "./assets/icon/warning.png";
                    this.studentBehaviour.text = this.lang.warning_behaviour;
                }
                else if (response.agg_ranking > 2.5 && response.agg_ranking < 3.6) {
                    this.studentBehaviour.icon = "./assets/icon/good.png";
                    this.studentBehaviour.text = this.lang.good_behaviour;
                }
                else if (response.agg_ranking > 3.5 && response.agg_ranking < 4.6) {
                    this.studentBehaviour.icon = "./assets/icon/very-good.png";
                    this.studentBehaviour.text = this.lang.very_good_behaviour;
                }
                else if (response.agg_ranking > 4.5 && response.agg_ranking < 5.1) {
                    this.studentBehaviour.icon = "./assets/icon/excellent.png";
                    this.studentBehaviour.text = this.lang.excellent_behaviour;
                }
                else {
                    this.studentBehaviour.icon = "chatbubbles";
                    this.studentBehaviour.text = this.lang.no_behaviour;
                }
                if (response.notes.length > 0) {
                    this.notes.notes.forEach((note) => {
                        if (this.checkNoteDate(new Date(note.date)) && note.user_id == this.userDetails.details.user_no) {
                            this.canAddStudentNote = false;
                        }
                        if (note.rating > 0) {
                            note.selections = ['#fff', '#fff', '#fff', '#fff', '#fff'];
                            for (let i = 0; i < parseInt(note.rating); i++) {
                                note.selections[i] = "#04855f";
                            }
                        }
                    });
                    let realNo = 0;
                    if (this.notes.agg_ranking % 1 == 0) {
                        realNo = parseInt(this.notes.agg_ranking);
                    }
                    else {
                        realNo = Math.floor(this.notes.agg_ranking);
                        this.halfStarPosition = realNo;
                        this.halfStar = true;
                    }
                    for (let i = 0; i < realNo; i++) {
                        this.aggStars[i] = "#04855f";
                    }
                }
                else {
                    this.noNotesFound = this.lang.no_note;
                }
            }).catch(error => {
                this.dataProvider.errorALertMessage(error);
            });
        }
        /**
         * input alert to add absent note
         * @param notes Array of absence notes
         * @param date Date of the absence
         */
        addAbsentNote(notes, date) {
            return __awaiter(this, void 0, void 0, function* () {
                let note = notes.filter((note) => {
                    return note.created_by == this.userDetails.details.user_no;
                });
                if (note.length == 0) {
                    const alert = yield this.alertCtrl.create({
                        header: this.lang.absent_alert_title,
                        backdropDismiss: false,
                        inputs: [
                            {
                                name: 'note',
                                placeholder: this.lang.absent_alert_text_placeholder,
                                type: 'text'
                            },
                        ],
                        buttons: [
                            {
                                text: this.lang.alert_btn_cancel_text,
                            },
                            {
                                text: this.lang.alert_btn_submit_text,
                                handler: (data) => {
                                    if (data.note && data.note.trim() != '') {
                                        this.saveNote(data, notes, date);
                                    }
                                    else {
                                        this.dataProvider.showToast(this.lang.empty_note);
                                        return false;
                                    }
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    this.dataProvider.showToast(this.lang.already_submit_note);
                }
            });
        }
        /**
         * Save note function for absence
         * @param noteData contains the note text entered by user
         * @param date contains the date of the absence
         */
        saveNote(noteData, notes, date) {
            this.dataProvider.showLoading();
            let data = {
                sid: this.studentDetails.sid,
                cid: this.navData.course_id,
                date: date,
                note: noteData.note,
                user_no: this.userDetails.details.user_no,
                session_id: this.userDetails.session_id
            };
            this.dataProvider.saveAbsenceNote(data).then((response) => {
                if (response.session) {
                    this.dataProvider.hideLoading();
                    notes.push({
                        note: noteData.note,
                        ID: response.note_id,
                        created_by: this.userDetails.details.user_no
                    });
                    this.dataProvider.showToast(response.message);
                }
                else {
                    this.dataProvider.hideLoading();
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    // this.app.getRootNav().setRoot("LoginPage");
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
        /**
         *  Delete note function for absence
         * @param notes Absent notes array
         * @param note_id note id
         * @param index index of note from frontend
         */
        deleteAbsenceNote(notes, note_id, index) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: this.lang.want_to_delete,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: this.lang.no,
                        },
                        {
                            text: this.lang.yes,
                            handler: () => {
                                this.dataProvider.showLoading();
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    session_id: this.userDetails.session_id
                                };
                                this.dataProvider.deleteAbsenceNote(data, note_id).then((response) => {
                                    if (response.session) {
                                        this.dataProvider.hideLoading();
                                        notes.splice(index, 1);
                                        this.dataProvider.showToast(response.message);
                                    }
                                    else {
                                        this.dataProvider.hideLoading();
                                        this.authProvider.flushLocalStorage();
                                        this.dataProvider.errorALertMessage(response.message);
                                        //  this.app.getRootNav().setRoot("LoginPage");
                                    }
                                }).catch(error => {
                                    this.dataProvider.hideLoading();
                                    this.dataProvider.errorALertMessage(error);
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        /**
         * Add user notes
         */
        addNotesNote() {
            if (this.noteMessage && this.noteMessage.trim() != '') {
                if (this.noteMessage.length <= 45) {
                    if (this.canAddStudentNote) {
                        this.dataProvider.showLoading();
                        let data = {
                            sid: this.navData.student_id,
                            note: this.noteMessage,
                            user_id: this.userDetails.details.user_no,
                            rating: this.ratingStars
                        };
                        this.dataProvider.addStudentNote(data).then((note_id) => {
                            this.dataProvider.hideLoading();
                            this.getNotes();
                            this.noteMessage = '';
                            this.showNoteModal = false;
                        }).catch(error => {
                            this.dataProvider.hideLoading();
                            this.dataProvider.errorALertMessage(error);
                        });
                    }
                    else {
                        this.dataProvider.showToast(this.lang.already_submit_note);
                    }
                }
                else {
                    this.dataProvider.showToast(this.lang.max_note_length);
                }
            }
            else {
                this.dataProvider.showToast(this.lang.empty_note);
            }
        }
        editDeleteNotes(note_id, index, note) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.cange_note,
                    backdropDismiss: true,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.lang.delete,
                            handler: () => {
                                this.deleteUserNote(note_id, index);
                            }
                        },
                        {
                            text: this.lang.edit_title,
                            handler: () => {
                                this.dataProvider.presentRatingPopover(this.app_rate, note, (res) => {
                                    if (res) {
                                        console.log(res);
                                        this.udateNotes(res, note_id);
                                    }
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        udateNotes(data, note_id) {
            let updates = {
                sid: this.navData.student_id,
                note_id: note_id,
                rating: data.stars,
                note: data.description,
                updated_by: this.userDetails.details.user_no
            };
            this.dataProvider.editAbsentNotes(updates).then(res => {
                console.log(res);
                if (res) {
                    this.dataProvider.showToast(res.message);
                    this.getNotes();
                }
            }).catch(err => {
                console.log(err);
                this.dataProvider.showToast(err.message);
            });
        }
        deleteUserNote(note_id, index) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    message: this.lang.want_to_delete,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: this.lang.no,
                        },
                        {
                            text: this.lang.yes,
                            handler: () => {
                                this.dataProvider.showLoading();
                                let data = {
                                    user_no: this.userDetails.details.user_no,
                                    session_id: this.userDetails.session_id
                                };
                                this.dataProvider.deleteStudentNote(data, note_id).then((response) => {
                                    this.canAddStudentNote = true;
                                    this.getNotes();
                                    this.dataProvider.hideLoading();
                                }).catch(error => {
                                    this.dataProvider.hideLoading();
                                    this.dataProvider.errorALertMessage(error);
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        /**
         * function to match the dates
         * @param date date with which compare the current date
         */
        checkNoteDate(date) {
            let currentDate = new Date();
            if (date.getDate() == currentDate.getDate() && date.getMonth() == currentDate.getMonth() && date.getFullYear() == currentDate.getFullYear()) {
                return true;
            }
            else {
                return false;
            }
        }
        /**
         * alert to show image take choice
         */
        takePicture() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.userType == '1' || this.userType == '3') {
                    const alert = yield this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [
                            {
                                text: this.lang.camera,
                                handler: () => {
                                    this.openCamera();
                                }
                            },
                            {
                                text: this.lang.gallery,
                                handler: () => {
                                    this.openGallery();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
            });
        }
        /**
         * mobile camera to take image
         */
        openCamera() {
            let options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.CAMERA,
                targetHeight: 500,
                targetWidth: 500
            };
            this.camera.getPicture(options).then((imageData) => {
                if (imageData) {
                    this.dataProvider.showLoading();
                    let data = {
                        user_no: this.userDetails.details.user_no,
                        session_id: this.userDetails.session_id,
                        imageData: 'data:image/png;base64,' + imageData,
                        sid: this.navData.student_id
                    };
                    this.dataProvider.updateUserImage(data).then((response) => {
                        this.dataProvider.hideLoading();
                        if (response.session) {
                            this.studentDetails.pic = response.url;
                        }
                        else {
                            this.authProvider.flushLocalStorage();
                            this.dataProvider.errorALertMessage(response.message);
                            // this.app.getRootNav().setRoot("LoginPage");
                        }
                    }).catch((error) => {
                        this.dataProvider.hideLoading();
                        this.dataProvider.errorALertMessage(error);
                    });
                }
            });
        }
        /**
         * Open gallery to take image
         */
        openGallery() {
            let options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                targetHeight: 500,
                targetWidth: 500
            };
            this.camera.getPicture(options).then((imageData) => {
                if (imageData) {
                    this.dataProvider.showLoading();
                    let data = {
                        user_no: this.userDetails.details.user_no,
                        session_id: this.userDetails.session_id,
                        imageData: 'data:image/png;base64,' + imageData,
                        sid: this.navData.student_id
                    };
                    this.dataProvider.updateUserImage(data).then((response) => {
                        this.dataProvider.hideLoading();
                        if (response.session) {
                            this.studentDetails.pic = response.url;
                        }
                        else {
                            this.authProvider.flushLocalStorage();
                            this.dataProvider.errorALertMessage(response.message);
                            // this.app.getRootNav().setRoot("LoginPage");
                        }
                    }).catch((error) => {
                        this.dataProvider.hideLoading();
                        this.dataProvider.errorALertMessage(error);
                    });
                }
            });
        }
        getSelectedStars() {
            return new Array(5);
        }
        selectStarsForRating(index) {
            this.ratingStars = index + 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
            for (let i = 0; i <= index; i++) {
                this.selections[i] = '#04855f';
            }
        }
        openNoteModal() {
            this.ratingStars = 1;
            this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
            this.showNoteModal = true;
        }
        hideNoteModal() {
            this.showNoteModal = false;
        }
        openPdf() {
            let data = {
                school_id: this.userDetails.details.school_id,
                sid: this.navData.student_id
            };
            let planData = {
                user_no: this.userDetails.details.user_no
            };
            this.dataProvider.openPdf(planData).then(res => {
                window.open('https://webapp.ws/v2-admin/app_service_new/student_report?school_id=' + data.school_id + '&sid=' + data.sid);
                console.log(res);
            }).catch(e => {
                console.log(e);
                this.presentAlertConfirm();
            });
        }
        presentAlertConfirm() {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: this.planLang.not_valid,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.planLang.cancel,
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: this.planLang.subscribe,
                            handler: () => {
                                console.log('Confirm Okay');
                                this.router.navigate(['available-plan']);
                            }
                        }
                    ]
                });
                yield alert.present();
            });
        }
        ngOnInit() {
        }
    };
    StudentDetailPage = __decorate([
        Component({
            selector: 'app-student-detail',
            templateUrl: './student-detail.page.html',
            styleUrls: ['./student-detail.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            DatabaseService,
            StudentDataService,
            AlertController,
            TranslateService,
            AlertController,
            Camera,
            Network,
            ActivatedRoute,
            Router,
            NgZone,
            PopoverController,
            Platform])
    ], StudentDetailPage);
    return StudentDetailPage;
})();
export { StudentDetailPage };
//# sourceMappingURL=student-detail.page.js.map
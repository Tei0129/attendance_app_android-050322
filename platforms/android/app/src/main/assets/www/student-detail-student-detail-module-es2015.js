(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-detail-student-detail-module"],{

/***/ "Kulp":
/*!*********************************************************!*\
  !*** ./src/app/student-detail/student-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: StudentDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailPageModule", function() { return StudentDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _student_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-detail-routing.module */ "hH79");
/* harmony import */ var _student_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-detail.page */ "MLlQ");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let StudentDetailPageModule = class StudentDetailPageModule {
};
StudentDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _student_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentDetailPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_student_detail_page__WEBPACK_IMPORTED_MODULE_6__["StudentDetailPage"]]
    })
], StudentDetailPageModule);



/***/ }),

/***/ "MLlQ":
/*!*******************************************************!*\
  !*** ./src/app/student-detail/student-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: StudentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailPage", function() { return StudentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_student_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-detail.page.html */ "nrsX");
/* harmony import */ var _student_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-detail.page.scss */ "tBp2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/database/database.service */ "HbOQ");
/* harmony import */ var _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/student-data/student-data.service */ "TgDs");
/* harmony import */ var _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/subscription/subscription.service */ "iISc");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../add-review/add-review.component */ "YXaF");








//import { TabsPage } from '../tabs/tabs';









const env = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"];
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
    translate, alertCtrl, camera, network, route, router, zone, popover, platform, storage, modalController, subscription) {
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
        this.storage = storage;
        this.modalController = modalController;
        this.subscription = subscription;
        this.absenceDetail = [];
        this.notes = [];
        this.studentDetails = {};
        this.lang = {};
        this.userDetails = {};
        this.noteMessage = "this is test note";
        this.canAddStudentNote = true;
        this.noNotesFound = '';
        this.noAbsenceFound = '';
        this.selections = ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
        this.aggStars = ['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
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
                this.storage.set('currentStudent', this.navData);
                localStorage.setItem("currentStudent", this.navData);
                this.totalDelay = this.navData.total_delay;
                console.log("navData::===>", this.navData, this.totalDelay);
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
                        console.log('offli8ne', response);
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
            console.log('offlineNo', this.notes);
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
            console.log('student sid====>,', this.navData.student_id);
            let data = {
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "cid": this.navData.course_id,
                "date": this.navData.dateSelected,
                "sid": this.navData.student_id
            };
            this.getNotes();
            this.dataProvider.getStudentDetails(data).then(response => {
                if (response.session) {
                    this.dataProvider.hideLoading();
                    this.studentService.checkStudent(response.data);
                    this.studentDetails = response.data;
                    console.log("can_view_abs:::", this.studentDetails.can_view_absent);
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
            console.log(response);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        // if(this.noteMessage && this.noteMessage.trim() != '') {
        //   if(this.noteMessage.length <= 45) {
        if (this.canAddStudentNote) {
            this.dataProvider.showLoading();
            let data = {
                sid: this.navData.student_id,
                note: this.noteMessage,
                user_id: this.userDetails.details.user_no,
                rating: this.ratingStars,
                new_rating: JSON.stringify(this.ratingStars)
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
        // }else {
        //   this.dataProvider.showToast(this.lang.max_note_length);
        // }
        // }
        // else{
        //   this.dataProvider.showToast(this.lang.empty_note);
        // }
    }
    editDeleteNotes(note_id, index, note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                this.dataProvider.showToast(res.data.msg);
                this.getNotes();
            }
        }).catch(err => {
            console.log(err);
            this.dataProvider.showToast(err.message);
        });
    }
    deleteUserNote(note_id, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.ratingStars = 1;
            // this.selections= ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee']
            // this.showNoteModal = true;
            const modal = yield this.modalController.create({
                component: _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_16__["AddReviewComponent"],
                cssClass: 'my-custom-class',
            });
            modal.onDidDismiss().then(data => {
                console.log(data);
                if (data.data.data) {
                    this.ratingStars = (data.data.data);
                    this.addNotesNote();
                }
            });
            return yield modal.present();
        });
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
        this.dataProvider.showLoading();
        // this.dataProvider.openPdf(planData).then(res=>{
        let url = env.serverURL + 'student_report_new?school_id=' + data.school_id + '&sid=' + data.sid;
        this.dataProvider.openStudentReport(url).then(res => {
            this.dataProvider.hideLoading();
            console.log(res);
            if (res) {
                window.open(res.url, '_system');
            }
            else {
                this.dataProvider.showToast('Unable to generate report');
            }
        }).catch(e => {
            this.dataProvider.hideLoading();
            this.dataProvider.showToast('Unable to generate report');
        });
        // }).catch(e=>{
        //   this.dataProvider.hideLoading();
        //   console.log(e)
        //   this.presentAlertConfirm();
        // })
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                            // this.subscription.blockAds();
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
StudentDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_11__["DatabaseService"] },
    { type: _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__["StudentDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_13__["SubscriptionService"] }
];
StudentDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-detail',
        template: _raw_loader_student_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _service_database_database_service__WEBPACK_IMPORTED_MODULE_11__["DatabaseService"],
        _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__["StudentDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _service_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_13__["SubscriptionService"]])
], StudentDetailPage);



/***/ }),

/***/ "hH79":
/*!*****************************************************************!*\
  !*** ./src/app/student-detail/student-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StudentDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailPageRoutingModule", function() { return StudentDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-detail.page */ "MLlQ");




const routes = [
    {
        path: '',
        component: _student_detail_page__WEBPACK_IMPORTED_MODULE_3__["StudentDetailPage"]
    }
];
let StudentDetailPageRoutingModule = class StudentDetailPageRoutingModule {
};
StudentDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudentDetailPageRoutingModule);



/***/ }),

/***/ "nrsX":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-detail/student-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar transparent>\n   \t<ion-buttons slot=\"end\">\n      <ion-button icon-only (click)=\"openPdf()\" *ngIf=\"userType !='4'\">\n        <ion-icon name=\"document-attach-outline\"></ion-icon>\n      </ion-button>\n   \t\t<ion-back-button>\n   \t\t</ion-back-button>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n     <ion-title text-right class=\"text-center\">{{'student-details.heading' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <ion-row justify-content-center class=\"text-center\" align-items-center>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" text-center align-self-center (click)=\"takePicture()\">\n      <div class=\"bgcircle\">\n        <ion-icon class=\"message-content\" name=\"people-circle-outline\" color=\"icon-header\"></ion-icon>\n      </div>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"4\" text-center>\n      <div class=\"student-background-image\" [ngStyle] = \"{'background-image': 'url('+studentDetails.pic+')'}\">\n      </div>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" text-center align-self-center>\n      <div class=\"bgcircle\">\n        <ion-icon class=\"message-content\" [name]=\"studentBehaviour.icon\" color=\"icon-header\" *ngIf=\"notes.agg_ranking == 0\"></ion-icon>\n        <img [src]=\"studentBehaviour.icon\" *ngIf=\"notes.agg_ranking > 0\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n  <ion-row justify-content-center  class=\"details text-center\">\n    <ion-col size=\"12\" align-self-center>\n      <p text-center class=\"absence-count\">{{studentDetails.name}}</p>\n      <p text-center class=\"bahaviou-text\" *ngIf=\"studentDetails.course\"> {{studentDetails.course.name}}</p> \n      <p text-center class=\"bahaviou-text\">{{studentBehaviour.text}}</p>\n      <p text-center class=\"bahaviou-text\">{{'delay_stu_list.total_delay' | translate}} {{studentDetails.total_delay}}</p>\n      <!-- {{'delay_stu_list.class_name' | translate}}: -->\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"details\" *ngIf=\"!studentDetails.can_view_absent\">\n    <ion-col size=\"6\" text-center class=\"text-center\">\n      <p text-center class=\"absence-count\">{{studentDetails.suspend_days}}</p>\n      <p text-center class=\"absence\">{{'list-student.suspension_days' | translate}}</p>\n    </ion-col>\n    <ion-col size=\"6\" text-left class=\"text-center lefthorizline\">\n      <p text-center class=\"absence-count\">{{studentDetails.medical_days}}</p>\n      <p text-center class=\"absence\">{{'list-student.medical_days' | translate}}</p>\n    </ion-col>\n  </ion-row>  \n  <ion-row class=\"details\" *ngIf=\"studentDetails.can_view_absent\">\n    <ion-col size=\"4\" text-right class=\"text-center\" >\n      <p text-center class=\"absence-count\">{{studentDetails.unacceptable_absent_days}}</p>\n      <p text-center class=\"absence\">{{'list-student.unacceptable_absence' | translate}}</p>\n    </ion-col>\n    <ion-col size=\"4\" text-center class=\"text-center\">\n      <p text-center class=\"absence-count\">{{studentDetails.suspend_days}}</p>\n      <p text-center class=\"absence\">{{'list-student.suspension_days' | translate}}</p>\n    </ion-col>\n    <ion-col size=\"4\" text-left class=\"text-center lefthorizline\">\n      <p text-center class=\"absence-count\">{{studentDetails.medical_days}}</p>\n      <p text-center class=\"absence\">{{'list-student.medical_days' | translate}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"segement\">\n    <ion-segment *ngIf=\"studentDetails.can_view_absent\" [(ngModel)]=\"category\" color=\"primary\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"6\">\n          <ion-segment-button value=\"absence\" >\n            <p>\n              <ion-badge color=\"count-color\">{{studentDetails.absent_count}}</ion-badge>&nbsp;{{'student-details.total_absent' | translate}} \n            </p>\n          </ion-segment-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-segment-button value=\"notes\">\n            <P>\n              <ion-badge color=\"count-color\">{{notes.notes?.length}}</ion-badge>&nbsp;{{'student-details.notes' | translate}} \n            </P>\n          </ion-segment-button>\n        </ion-col>\n      </ion-row>\n    </ion-segment>\n  </ion-row>\n\n  <div [ngSwitch]=\"category\">\n    <div *ngSwitchCase=\"'absence'\">\n      <ion-card *ngFor=\"let details of studentDetails?.absents\">\n        <ion-card-header>\n          <p class=\"right-direction\">{{details.date | dateFormat}}</p>\n        </ion-card-header>\n        <ion-card-content>\n          <p class=\"description\">\n            {{details.sem}}\n          </p>\n          <div class=\"absence-note-sec\" *ngFor=\"let note of details.notes; let i = index;\">\n            <div class=\"note-trash-icon-sec\" *ngIf=\"userDetails.details\">\n              <ion-icon name=\"trash\" color=\"danger\" *ngIf=\"note.created_by == userDetails.details.user_no || userDetails.details.user_type == '1'\"\n                (click)=\"deleteAbsenceNote(details.notes, note.ID, i)\"></ion-icon>\n            </div>\n            <div class=\"absence-note-desc\">\n              {{note.note}}\n            </div>\n            <div class=\"absence-note-icon\">\n              <ion-icon name=\"clipboard\"></ion-icon>\n            </div>\n          </div>\n        </ion-card-content>\n        <ion-icon name=\"add-circle\" class=\"add-circle\" color=\"icon-header\" (click)=\"addAbsentNote(details.notes, details.date)\"\n          *ngIf=\"userType == '1' || userType == '3'\"></ion-icon>\n      </ion-card>\n      <div class=\"text-center\" style=\"width: 100%;\">\n        <ion-label text-center  *ngIf=\"studentDetails.absents?.length == 0\">\n          {{noAbsenceFound}}\n        </ion-label>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'notes'\" class=\"notes-sec\">\n      <div class=\"right-direction rating-review-sec\">\n        <ion-row>\n          <ion-col size=\"2\" align-self-center text-center class=\"text-center\">\n            <ion-icon name=\"add-circle\" color=\"icon-header\" class=\"add_icon\" *ngIf=\"userType != '4' && canAddStudentNote\" (click)=\"openNoteModal()\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" text-right class=\"text-right\" align-self-center>\n            <h4>{{'student-details.rating_reviews' | translate}}</h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"8\">\n            <div class=\"rating-bar-sec\">\n              <div class=\"rating-bar\">\n                <div class=\"ranking-fill\" [style.width]=\"notes.total_rating.five_stars+ '%'\"></div>\n              </div><span class=\"rating-star-number\">5</span>\n            </div>\n            <div class=\"rating-bar-sec\">\n              <div class=\"rating-bar\">\n                <div class=\"ranking-fill\" [style.width]=\"notes.total_rating.four_stars+ '%'\"></div>\n              </div><span class=\"rating-star-number\">4</span>\n            </div>\n            <div class=\"rating-bar-sec\">\n              <div class=\"rating-bar\">\n                <div class=\"ranking-fill\" [style.width]=\"notes.total_rating.three_stars+ '%'\"></div>\n              </div><span class=\"rating-star-number\">3</span>\n            </div>\n            <div class=\"rating-bar-sec\">\n              <div class=\"rating-bar\">\n                <div class=\"ranking-fill\" [style.width]=\"notes.total_rating.two_stars+ '%'\"></div>\n              </div><span class=\"rating-star-number\">2</span>\n            </div>\n            <div class=\"rating-bar-sec\">\n              <div class=\"rating-bar\">\n                <div class=\"ranking-fill\" [style.width]=\"notes.total_rating.one_stars+ '%'\"></div>\n              </div><span class=\"rating-star-number\">1</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\" class=\"total-rating-sec left-direction\" align-self-center text-center>\n            <h4>{{notes.agg_ranking}}</h4>\n            <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n              <ion-icon name=\"star\" [ngStyle]=\"{'color':aggStars[i]}\" *ngIf=\"!halfStar || halfStarPosition != i\"></ion-icon>\n              <ion-icon name=\"star-half\" class=\"half-star\" color=\"rating\" *ngIf=\"halfStar && halfStarPosition == i\"></ion-icon>\n            </span>\n            <p>{{notes.total_notes}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-card *ngFor=\"let note of notes.notes; let i = index;\">\n        <ion-card-header>\n          <p class=\"right-direction\">{{note.date | dateFormat}}</p>\n          <p class=\"notes-desc\">{{note.note}}</p>\n          <div class=\"user-rating\" *ngIf=\"note.selections != undefined\">\n            <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n              <ion-icon name=\"star\" [ngStyle]=\"{'color':note.selections[i]}\"></ion-icon>\n            </span>\n          </div>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-row style=\" width: 100%;\" align-items-center>\n            <ion-col size=\"2\">\n              <img [src]=\"note.pic\" class=\"username\">\n            </ion-col>\n            <ion-col size=\"10\">\n              <p class=\"absence\">{{note.first_name}} {{note.last_name}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n        <span *ngIf=\"userDetails.details\">\n          \n          <ion-icon class=\"add-circle\" name=\"chevron-down\" color=\"primary\" (click)=\"editDeleteNotes(note.id, i,note)\" *ngIf=\"(note.user_id == userDetails.details.user_no || userType == '1') && userType != '2' && userType != '7'\"></ion-icon>\n        </span>\n      </ion-card>\n      <ion-label text-center *ngIf=\"notes?.length == 0\">\n        {{noNotesFound}}\n      </ion-label>\n    </div>\n  </div>\n  \n</ion-content>\n<!-- <div class=\"custom-modal-main\" *ngIf=\"showNoteModal\">\n  <div class=\"custom-modal\">\n    <div class=\"custom-note-header\">\n      <h4 style=\"color:black;\">{{'student-details.add_note' | translate}}</h4>\n    </div>\n\n    <div class=\"custom-note-content\">\n      <span *ngFor=\"let star of getSelectedStars();let i = index;\">\n        <ion-icon name=\"star\" class=\"rating-star\" [ngStyle]=\"{'color':selections[i]}\" (click)=\"selectStarsForRating(i)\"></ion-icon>\n      </span>\n      <div class=\"note-desc\">\n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"noteMessage\" placeholder=\"{{'student-details.type_here' | translate}}\"></ion-input>\n        </ion-item>\n        <p class=\"max_length\">{{noteMessage.length}}/45</p>\n      </div>\n    </div>\n    <div class=\"custom-modal-footer right-direction\">\n      <ion-row>\n        <ion-col size=\"6\" text-right>\n         <ion-button expand=\"block\" class=\"btn-primary\" shape=\"round\" color=\"secondary\"  (click)=\"hideNoteModal()\">{{'alertmessages.alert_btn_cancel_text' |\n            translate}}</ion-button> \n        </ion-col>\n        <ion-col size=\"6\" text-center>\n          <ion-button expand=\"block\" class=\"btn-secondary\" shape=\"round\" color=\"primary\" (click)=\"addNotesNote()\">{{'alertmessages.alert_btn_submit_text' | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div> -->");

/***/ }),

/***/ "tBp2":
/*!*********************************************************!*\
  !*** ./src/app/student-detail/student-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-student-detail:host ion-title {\n  font-size: 18px !important;\n}\napp-student-detail:host ion-segment-button {\n  font-size: 12px;\n  letter-spacing: 0;\n}\napp-student-detail:host .header-md::after {\n  background-image: none !important;\n}\napp-student-detail:host .absence-count {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\napp-student-detail:host .absence {\n  font-size: 11px;\n  font-weight: 400;\n  color: #666;\n}\napp-student-detail:host .message-content {\n  margin: 12px auto;\n}\napp-student-detail:host .message-content::before {\n  font-size: 18px;\n}\napp-student-detail:host .student-background-image {\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  margin: 0 auto;\n  border-radius: 50%;\n}\napp-student-detail:host .add-circle {\n  position: absolute;\n  top: 13px;\n  left: 8px;\n}\napp-student-detail:host ion-card {\n  border-radius: 10px !important;\n  background: #ececec !important;\n  position: relative;\n}\napp-student-detail:host ion-card p {\n  float: right;\n  width: 100%;\n  text-align: right;\n}\napp-student-detail:host ion-card .absence-note-sec {\n  width: 100%;\n  float: left;\n}\napp-student-detail:host ion-card .absence-note-sec .note-trash-icon-sec {\n  width: 10%;\n  display: flex;\n  float: left;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n}\napp-student-detail:host ion-card .absence-note-sec .note-trash-icon-sec .note-trash-icon-sec ion-icon::before {\n  font-size: 2rem;\n}\napp-student-detail:host ion-card .absence-note-sec .absence-note-desc {\n  width: 85%;\n  float: left;\n  padding: 2px 3px 2px;\n}\napp-student-detail:host ion-card .absence-note-sec .absence-note-icon {\n  width: 5%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n}\napp-student-detail:host .details {\n  margin: -22px 0;\n}\napp-student-detail:host .details .bahaviou-text {\n  margin: 3px 0;\n  color: #666;\n  font-size: 13px;\n}\napp-student-detail:host .segement {\n  background: #ffffff;\n  margin: 18px 0;\n  border-top-left-radius: 17px;\n  border-top-right-radius: 17px;\n}\napp-student-detail:host .segement ion-badge {\n  border-radius: 50%;\n  vertical-align: middle;\n  min-width: 20px;\n  text-align: center;\n}\napp-student-detail:host .bgcircle {\n  border-radius: 50%;\n  background: #ececec;\n  height: 35px;\n  width: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\napp-student-detail:host .trash-icon {\n  float: left;\n  font-size: 30px;\n}\napp-student-detail:host .notes-desc {\n  font-size: 18px;\n  white-space: normal;\n}\napp-student-detail:host .username {\n  height: 35px;\n  width: 36px;\n  border-radius: 50%;\n}\napp-student-detail:host .message {\n  border-radius: 25px 25px 25px 25px;\n  background: #f1f1f1;\n  font-size: larger;\n}\napp-student-detail:host .send-icon {\n  margin: -6px -6px;\n}\napp-student-detail:host .send-icon button {\n  transform: rotate(-45deg);\n}\napp-student-detail:host .rating-star {\n  font-size: 1.5rem;\n}\napp-student-detail:host .notes-sec .rating-review-sec {\n  background: #fff;\n}\napp-student-detail:host .notes-sec .rating-review-sec .add_icon {\n  padding-top: 16px;\n}\napp-student-detail:host .notes-sec .rating-review-sec ion-col ion-icon {\n  font-size: 24px;\n}\napp-student-detail:host .notes-sec .rating-review-sec h1 {\n  font-size: 4em;\n  margin: 0;\n}\napp-student-detail:host .notes-sec .rating-review-sec p {\n  margin: 0;\n}\napp-student-detail:host .notes-sec .rating-review-sec .rating-bar-sec {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5px;\n}\napp-student-detail:host .notes-sec .rating-review-sec .rating-bar-sec .rating-bar {\n  width: 93%;\n  height: 10px;\n  background: #eeeeee;\n  border-radius: 10px;\n  position: relative;\n}\napp-student-detail:host .notes-sec .rating-review-sec .rating-bar-sec .rating-bar .ranking-fill {\n  position: absolute;\n  right: 0;\n  background: #04855f;\n  height: 10px;\n  border-radius: 10px;\n}\napp-student-detail:host .notes-sec .rating-review-sec .rating-bar-sec .rating-star-number {\n  width: 7%;\n  text-align: center;\n}\napp-student-detail:host .notes-sec .rating-review-sec .total-rating-sec {\n  text-align: center;\n}\napp-student-detail:host .notes-sec .rating-review-sec .total-rating-sec h4 {\n  font-size: 40px;\n  font-weight: bold;\n  padding-top: unset;\n  margin-top: unset;\n}\napp-student-detail:host .notes-sec .rating-review-sec .total-rating-sec ion-icon {\n  font-size: 0.8rem;\n  padding: 3px;\n}\napp-student-detail:host .notes-sec .rating-review-sec .half-star {\n  transform: rotateY(180deg);\n}\napp-student-detail:host .notes-sec .user-rating {\n  width: 100%;\n  float: right;\n}\napp-student-detail:host .footer-height .scroll-content {\n  margin-bottom: 56px !important;\n}\napp-student-detail:host .max_length {\n  text-align: left;\n  padding-left: 16px;\n  color: #ababab;\n  margin-top: 10px;\n}\n@media only screen and (max-width: 249px) {\n  app-student-detail:host ion-card .description {\n    font-size: 0.6rem !important;\n  }\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) {\n  app-student-detail:host .student-background-image {\n    width: 80px;\n    height: 80px;\n  }\n  app-student-detail:host ion-card .description {\n    font-size: 0.6rem !important;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 380px) {\n  app-student-detail:host ion-card .description {\n    font-size: 0.7rem !important;\n  }\n}\n@media only screen and (min-width: 381px) {\n  app-student-detail:host ion-card .description {\n    font-size: 0.8rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDTSwwQkFBQTtBQWpCTjtBQW1CSTtFQUNRLGVBQUE7RUFDQSxpQkFBQTtBQWpCWjtBQW1CSTtFQUNJLGlDQUFBO0FBakJSO0FBb0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQlI7QUFvQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbEJSO0FBb0JJO0VBQ0ksaUJBQUE7QUFsQlI7QUFvQkk7RUFDSSxlQUFBO0FBbEJSO0FBb0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWxCUjtBQW9CSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFsQlI7QUFvQkk7RUFDSSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFtQlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBakJaO0FBbUJRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFqQlo7QUFrQlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQWhCaEI7QUFpQmdCO0VBQ0ksZUFBQTtBQWZwQjtBQWtCWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFoQmhCO0FBa0JZO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFoQmhCO0FBb0JJO0VBQ0ksZUFBQTtBQWxCUjtBQW1CUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWpCWjtBQW9CSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFsQlI7QUFtQlE7RUFDUSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBakJoQjtBQW9CSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWxCUjtBQW9CSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBbEJSO0FBb0JJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBbEJSO0FBb0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWxCUjtBQW9CSTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWxCUjtBQW9CSTtFQUNJLGlCQUFBO0FBbEJSO0FBbUJRO0VBQ0kseUJBQUE7QUFqQlo7QUFvQkk7RUFDSSxpQkFBQTtBQWxCUjtBQXFCUTtFQUlJLGdCQUFBO0FBdEJaO0FBbUJZO0VBQ0ksaUJBQUE7QUFqQmhCO0FBcUJnQjtFQUNJLGVBQUE7QUFuQnBCO0FBdUJZO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUFyQmhCO0FBdUJZO0VBQ0ksU0FBQTtBQXJCaEI7QUF1Qlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJoQjtBQXNCZ0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXBCcEI7QUFxQm9CO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFuQnhCO0FBc0JnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQXBCcEI7QUF1Qlk7RUFDSSxrQkFBQTtBQXJCaEI7QUFzQmdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXBCcEI7QUFzQmdCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBcEJwQjtBQXVCWTtFQUNJLDBCQUFBO0FBckJoQjtBQXdCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBdEJaO0FBMEJRO0VBQ0ksOEJBQUE7QUF4Qlo7QUEyQkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBekJSO0FBNEJJO0VBQ0k7SUFDSSw0QkFBQTtFQTFCVjtBQUNGO0FBNkJJO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQTNCVjtFQTZCTTtJQUNJLDRCQUFBO0VBM0JWO0FBQ0Y7QUE4Qkk7RUFDSTtJQUNJLDRCQUFBO0VBNUJWO0FBQ0Y7QUErQkk7RUFDSTtJQUNRLDRCQUFBO0VBN0JkO0FBQ0YiLCJmaWxlIjoic3R1ZGVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXN0dWRlbnQtZGV0YWlsOmhvc3Qge1xyXG4gICAgJGNvbG9yczogKFxyXG4gIHByaW1hcnk6ICAgICAgIzI5NzlmZixcclxuICBzZWNvbmRhcnk6ICAgICM0M2EwNDcsXHJcbiAgZGFuZ2VyOiAgICAgICAjZjUzZDNkLFxyXG4gIGxpZ2h0OiAgICAgICAgI2Y0ZjRmNCxcclxuICBkYXJrOiAgICAgICAgICMwMDAsXHJcbiAgY29udGVudC1iYWNrOiAjZmFmYWZhLFxyXG4gIG1lbnUtY29sb3I6ICAgIzc5Nzk3OSxcclxuICBjYXJkLWNvbG9yOiAgICNlZWVlZWUsXHJcbiAgY291bnQtY29sb3I6ICAjZWFlZGZlLFxyXG4gIGljb24taGVhZGVyOiAgIzAwMCxcclxuICB3aGl0ZTogICAgICAgICNmZmYsXHJcbiAgaW5wdXQtc2V0dGluZzojZWNlY2VjLFxyXG4gIHJlbW92ZS1hcHA6ICAgI2ZmYTUwMCxcclxuICByYXRpbmc6ICAgICAgICMwNDg1NWZcclxuXHJcbik7XHJcbmlvbi10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbWQ6OmFmdGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJzZW5jZS1jb3VudHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmFic2VuY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtY29udGVudDo6YmVmb3JlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1iYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5hZGQtY2lyY2xle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEzcHg7XHJcbiAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWMgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFic2VuY2Utbm90ZS1zZWMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIC5ub3RlLXRyYXNoLWljb24tc2VjIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAubm90ZS10cmFzaC1pY29uLXNlYyBpb24taWNvbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFic2VuY2Utbm90ZS1kZXNjIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAzcHggMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYnNlbmNlLW5vdGUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNSU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsc3tcclxuICAgICAgICBtYXJnaW46IC0yMnB4IDA7XHJcbiAgICAgICAgLmJhaGF2aW91LXRleHR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlZ2VtZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgICAgICBpb24tYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iZ2NpcmNsZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnRyYXNoLWljb257XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICB9XHJcbiAgICAubm90ZXMtZGVzY3tcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC51c2VybmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2V7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG4gICAgLnNlbmQtaWNvbntcclxuICAgICAgICBtYXJnaW46IC02cHggLTZweDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJhdGluZy1zdGFye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLm5vdGVzLXNlY3tcclxuICAgICAgICAucmF0aW5nLXJldmlldy1zZWN7XHJcbiAgICAgICAgICAgIC5hZGRfaWNvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJhdGluZy1iYXItc2VjIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAucmF0aW5nLWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkzJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAucmFua2luZy1maWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA0ODU1ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yYXRpbmctc3Rhci1udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3JTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvdGFsLXJhdGluZy1zZWN7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhhbGYtc3RhciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1yYXRpbmcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb290ZXItaGVpZ2h0e1xyXG4gICAgICAgIC5zY3JvbGwtY29udGVudHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXhfbGVuZ3RoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBjb2xvcjogI2FiYWJhYjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjQ5cHgpIHtcclxuICAgICAgICBpb24tY2FyZCAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkge1xyXG4gICAgICAgIC5zdHVkZW50LWJhY2tncm91bmQtaW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgaW9uLWNhcmQgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MXB4KSB7XHJcbiAgICAgICAgaW9uLWNhcmQgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=student-detail-student-detail-module-es2015.js.map
import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateClassPage } from '../create-class/create-class.page';
let ClasslistPage = /** @class */ (() => {
    let ClasslistPage = class ClasslistPage {
        /**
         * Class list constructor
         * @param navCtrl Use for navigation between pages
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param alertCtrl Ionic alert controller to show alert popup
         * @param translate used for translation service
         * @param modalCtrl modal controller to open create class
         */
        constructor(navCtrl, 
        // public app: App, 
        translate, dataProvider, authProvider, 
        //public events: Events,
        alertCtrl, route, zone, router, modalCtrl) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.alertCtrl = alertCtrl;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.modalCtrl = modalCtrl;
            /**
             * @member classes Array of list of classes
             * @member userType user type of logged in user
             * @member editMode For checking whether the user has power to edit class name
             * @member classBackgroundColor used for background color of class
             * @member userDetails Contains the user details who is logged in from local storage
             * @member noDataFound used for diplaying the message when no child found
             * @member lang Contains the language translation object
             */
            this.classes = [];
            this.noDataFound = "";
            this.editMode = false;
            this.lang = {};
            this.userDetails = {};
            this.classBackgroundColor = ["#ff7043", "#2962ff", "#43a047", "#6d4c41", "#ffab00", "#00b0ff", "#651fff", "#2962ff", "#d81b60", "#6a1b9a"];
            this.authProvider.event.subscribe((res) => {
                console.log('change', res);
                if (res.changeUser) {
                    this.ngOnInit();
                }
            });
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
                console.log(this.lang);
            });
            this.category = "list";
        }
        /**
         * Ionic navigation event will run when page is loaded
         */
        ngOnInit() {
            this.editMode = false;
            // this.dataProvider.showLoading();
            if (localStorage.getItem("userloggedin")) {
                console.log('logged in');
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                this.getCourse();
                this.getTodayDeshboard();
            }
            else {
                this.dataProvider.hideLoading();
                console.log('not logged in');
                this.authProvider.flushLocalStorage();
                this.router.navigate(['login'], { replaceUrl: true });
                //this.app.getRootNav().setRoot("LoginPage");
            }
        }
        ionViewWillEnter() {
        }
        getCourse() {
            // this.dataProvider.showLoading();
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.getCourses(data).then(response => {
                //  this.dataProvider.hideLoading();
                if (response.session) {
                    this.dataProvider.syncOffileData();
                    let courses = response.data;
                    if (response.linkData != undefined) {
                        this.authProvider.piblisEvenetActiveLink(response.linkData);
                        //this.events.publish("activeLink", response.linkData)
                    }
                    if (courses && courses.length > 0) {
                        let i = 0;
                        this.classes = courses;
                        this.classes.forEach((course) => {
                            course.backgroundColor = this.classBackgroundColor[i];
                            i++;
                            if (i == 9)
                                i = 0;
                        });
                    }
                    else {
                        this.noDataFound = this.lang.no_class_found;
                    }
                }
                else {
                    console.log('here');
                    this.authProvider.flushLocalStorage();
                    this.dataProvider.errorALertMessage(response.message);
                    this.router.navigate(['login'], { replaceUrl: true });
                    // this.app.getRootNav().setRoot("LoginPage");
                }
            }).catch(error => {
                // this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
        getTodayDeshboard() {
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.todayDashboard(data).then(response => {
                if (response.session) {
                    //this.dataProvider.syncOffileData();
                    this.dashBoard = response.data.seminar;
                    console.log('', this.dashBoard);
                }
                else {
                    //  this.authProvider.flushLocalStorage();
                    //  this.dataProvider.errorALertMessage(response.message);
                    // this.router.navigate(['login'], { replaceUrl: true });
                    // this.app.getRootNav().setRoot("LoginPage");
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
            });
        }
        /**
         * Ionic navigation event will run when page is entered
         */
        /**
         * Open student list or open alert to edit class desc
         * @param course contains the course information
         */
        openClassStudents(course) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.editMode) {
                    if (this.userType == 1) {
                        this.editClass(course);
                    }
                    else {
                        const alert = yield this.alertCtrl.create({
                            header: this.lang.edit_title,
                            message: this.lang.givecourse,
                            backdropDismiss: false,
                            inputs: [
                                {
                                    type: "text",
                                    value: course.name,
                                    name: "courseName",
                                    placeholder: this.lang.enter_value_placeholder
                                },
                                {
                                    type: "text",
                                    value: course.desc,
                                    name: "courseDesc",
                                    placeholder: this.lang.enter_value_placeholder
                                }
                            ],
                            buttons: [
                                {
                                    text: this.lang.alert_btn_cancel_text,
                                    role: 'cancel',
                                },
                                {
                                    text: this.lang.alert_btn_submit_text,
                                    handler: (data) => {
                                        if ((data.courseDesc && data.courseDesc.trim() != "") && (data.courseName && data.courseName.trim() != "")) {
                                            let postData = {
                                                cid: course.cid,
                                                user_no: this.userDetails.details.user_no,
                                                session_id: this.userDetails.session_id,
                                                course: {
                                                    name: data.courseName,
                                                    desc: data.courseDesc
                                                }
                                            };
                                            this.dataProvider.updateCourseDesc(postData).then((response) => {
                                                if (response.session) {
                                                    course.name = data.courseName;
                                                    course.desc = data.courseDesc;
                                                    this.editMode = false;
                                                    return true;
                                                }
                                                else {
                                                    this.authProvider.flushLocalStorage();
                                                    this.dataProvider.errorALertMessage(response.message);
                                                    this.router.navigate(['login'], { replaceUrl: true });
                                                    // this.app.getRootNav().setRoot("LoginPage");
                                                }
                                            }).catch((error) => {
                                                this.dataProvider.errorALertMessage(error);
                                            });
                                        }
                                        else {
                                            this.dataProvider.showToast(this.lang.can_not_empty);
                                        }
                                    }
                                }
                            ]
                        });
                        yield alert.present();
                    }
                }
                else {
                    const navigation = {
                        state: { course: course }
                    };
                    this.zone.run(() => {
                        this.router.navigate(['list-student'], navigation);
                    });
                }
            });
        }
        openSeminar(seminar) {
            const navigation = {
                state: { seminar: seminar }
            };
            this.zone.run(() => {
                this.router.navigate(['seminar-list'], navigation);
            });
        }
        /**
        *advance aditing like delete assign teacher
        */
        editClass(course) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.edit_title,
                    message: this.lang.givecourse,
                    backdropDismiss: false,
                    inputs: [
                        {
                            type: "text",
                            value: course.name,
                            name: "courseName",
                            placeholder: this.lang.enter_value_placeholder
                        },
                        {
                            type: "text",
                            value: course.desc,
                            name: "courseDesc",
                            placeholder: this.lang.enter_value_placeholder
                        }
                    ],
                    buttons: [
                        {
                            text: this.lang.alert_btn_cancel_text,
                            role: 'cancel',
                        },
                        {
                            text: this.lang.alert_btn_submit_text,
                            handler: (data) => {
                                if ((data.courseDesc && data.courseDesc.trim() != "") && (data.courseName && data.courseName.trim() != "")) {
                                    let postData = {
                                        cid: course.cid,
                                        user_no: this.userDetails.details.user_no,
                                        session_id: this.userDetails.session_id,
                                        course: {
                                            name: data.courseName,
                                            desc: data.courseDesc
                                        }
                                    };
                                    this.dataProvider.updateCourseDesc(postData).then((response) => {
                                        if (response.session) {
                                            course.name = data.courseName;
                                            course.desc = data.courseDesc;
                                            this.editMode = false;
                                            return true;
                                        }
                                        else {
                                            this.authProvider.flushLocalStorage();
                                            this.dataProvider.errorALertMessage(response.message);
                                            this.router.navigate(['login'], { replaceUrl: true });
                                            // this.app.getRootNav().setRoot("LoginPage");
                                        }
                                    }).catch((error) => {
                                        this.dataProvider.errorALertMessage(error);
                                    });
                                }
                                else {
                                    this.dataProvider.showToast(this.lang.can_not_empty);
                                }
                            }
                        },
                        {
                            text: this.lang.delete,
                            handler: (data) => {
                                this.deletClass(course);
                            }
                        }
                        // {
                        //   text: this.lang.advance_edit,
                        //   handler: (data)=>{
                        //      const navigation: NavigationExtras = {
                        //           state : {course: course,userDetails:this.userDetails.details}
                        //           };
                        //           //console.log(navigation);
                        //           this.zone.run(() => {
                        //             this.router.navigate(['edit-calss'], navigation);
                        //           });
                        //     // this.dataProvider.editClassModal(course, resp=>{
                        //     //   console.log(resp);
                        //     // });
                        //   }
                        // }
                    ]
                });
                yield alert.present();
            });
        }
        deletClass(course) {
            // this.dataProvider.showLoading();
            let data = {
                'class_id': course.cid,
                'school_id': this.userDetails.details.school_id,
                'user_no': this.userDetails.details.user_no
            };
            console.log(data);
            this.dataProvider.deleteClass(data).then(res => {
                this.ngOnInit();
                this.dataProvider.hideLoading();
                console.log('teschers', res);
                if (res.session) {
                    this.dataProvider.showToast(res.data);
                    this.router.navigate(['tabs/classlist']);
                }
                else {
                    this.dataProvider.showToast(res.message);
                }
            }, error => {
                //     this.dataProvider.showToast(error);
                this.dataProvider.hideLoading();
                console.log(error);
            });
        }
        openSearchPage() {
            const navigation = {
                state: { userDetails: this.userDetails.details }
            };
            //console.log(navigation);
            this.zone.run(() => {
                this.router.navigate(['search-student'], navigation);
            });
        }
        /**
         * enable edit mode for admin
         */
        enableEditMode() {
            this.editMode = !this.editMode;
        }
        /**
         * Open create class modal
         */
        createClass() {
            return __awaiter(this, void 0, void 0, function* () {
                const modal = yield this.modalCtrl.create({
                    component: CreateClassPage,
                    cssClass: 'my-custom-class',
                    componentProps: {
                        'firstName': 'Douglas',
                        'lastName': 'Adams',
                        'middleInitial': 'N'
                    }
                });
                yield modal.present();
                modal.onDidDismiss().then((refresh) => {
                    if (refresh) {
                        // this.dataProvider.showLoading();
                        this.getCourse();
                    }
                });
            });
        }
    };
    ClasslistPage = __decorate([
        Component({
            selector: 'app-classlist',
            templateUrl: './classlist.page.html',
            styleUrls: ['./classlist.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            AuthService,
            AlertController,
            ActivatedRoute,
            NgZone,
            Router,
            ModalController])
    ], ClasslistPage);
    return ClasslistPage;
})();
export { ClasslistPage };
//# sourceMappingURL=classlist.page.js.map
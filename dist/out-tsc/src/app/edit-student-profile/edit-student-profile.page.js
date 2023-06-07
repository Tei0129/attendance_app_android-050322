import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DatabaseService } from '../service/database/database.service';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../service/data/data.service';
//import { DatabaseProvider } from '../../providers/database/database';
let EditStudentProfilePage = /** @class */ (() => {
    let EditStudentProfilePage = class EditStudentProfilePage {
        constructor(popoverController, navCtrl, device, authProvider, platform, fcm, alertCtrl, 
        // public events: Events, 
        translate, dataProvider, route, zone, router, dbProvider) {
            this.popoverController = popoverController;
            this.navCtrl = navCtrl;
            this.device = device;
            this.authProvider = authProvider;
            this.platform = platform;
            this.fcm = fcm;
            this.alertCtrl = alertCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.dbProvider = dbProvider;
            this.student = {};
            this.classes = [];
            this.route.queryParams.subscribe(params => {
                this.translate.get("alertmessages").subscribe((val) => {
                    this.lang = val;
                });
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state;
                    this.studentName = this.navData.student.name;
                    this.student_id = this.navData.student.student_id;
                    console.log(this.navData);
                    if (localStorage.getItem("userloggedin")) {
                        this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                        this.currentUser = this.userDetails.details.username;
                        this.currentUserEmail = this.userDetails.details.email_id;
                    }
                    if (localStorage.getItem('earlyLogin')) {
                        this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
                    }
                    this.getStudentProfile();
                }
            });
        }
        ngOnInit() {
            //	console.log(this.student,this.classes,this.studentSemester,this.studentName);
        }
        closeModal() {
            this.popoverController.dismiss();
        }
        getStudentProfile() {
            let data = {
                "user_no": this.userDetails.details.user_no,
                "session_id": this.userDetails.session_id,
                "cid": this.navData.course_id,
                "date": this.navData.dateSelected,
                "sid": this.navData.student.sid
            };
            this.dataProvider.getStudentDetails(data).then(response => {
                this.dataProvider.hideLoading();
                if (response.session) {
                    console.log(response);
                    this.student = response.data;
                    this.getClasses();
                }
                else {
                    this.dataProvider.errorALertMessage(response.message);
                }
            }).catch(error => {
                console.log(error);
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
        getClasses() {
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getCourses(data).then(response => {
                this.dataProvider.hideLoading();
                if (response.session) {
                    this.classes = response.data;
                    this.classes.forEach(res => {
                        if (res.name == this.student.course.name) {
                            this.studentSemester = res.cid;
                        }
                    });
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(error);
            });
        }
        saveChanges() {
            const inputElement = document.getElementById("input");
            const inputElementid = document.getElementById("inputid");
            let i = inputElement.value;
            let id = inputElementid.value;
            const select = document.getElementById("select");
            let s = select.value;
            let data = {
                student: this.student,
                studentName: i,
                studentSemester: s
            };
            let updateData = {
                sid: this.student.sid,
                cid: this.student.cid,
                student_name: i,
                student_id: id,
                class_id: s,
                user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id,
                session_id: this.userDetails.session_id
            };
            console.log(updateData);
            this.dataProvider.updateStudentProfile(updateData, res => {
                // callback(res);
                const navigation = {
                    state: {
                        isUpdated: true
                    }
                };
                this.zone.run(() => {
                    this.router.navigate(['manage-student'], navigation);
                });
                // this.router.navigate(['manage-student']);
                console.log(res);
            });
            //	console.log(data);
            //	this.popoverController.dismiss(data);
        }
        deleteStudent() {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: this.lang.delete_student,
                    backdropDismiss: true,
                    mode: 'ios',
                    buttons: [
                        {
                            text: this.lang.delete,
                            handler: () => {
                                // this.deleteUserNote(note_id, index);
                                let deleteData = {
                                    sid: this.student.sid,
                                    cid: this.student.cid,
                                    user_no: this.userDetails.details.user_no,
                                    school_id: this.userDetails.details.school_id,
                                    session_id: this.userDetails.session_id
                                };
                                this.dataProvider.deleteStudent(deleteData, res => {
                                    // callback(res);
                                    const navigation = {
                                        state: {
                                            isUpdated: true
                                        }
                                    };
                                    this.zone.run(() => {
                                        this.router.navigate(['manage-student'], navigation);
                                    });
                                    console.log(res);
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
        deleteClass() {
            let data = {
                student: this.student,
                deleteClass: true
            };
            let deleteData = {
                sid: this.student.sid,
                cid: this.student.cid,
                user_no: this.userDetails.details.user_no,
                school_id: this.userDetails.details.school_id,
                session_id: this.userDetails.session_id
            };
            this.dataProvider.deleteStudentClass(deleteData, res => {
                // callback(res);
                this.router.navigate(['manage-student']);
                console.log(res);
            });
        }
    };
    EditStudentProfilePage = __decorate([
        Component({
            selector: 'app-edit-student-profile',
            templateUrl: './edit-student-profile.page.html',
            styleUrls: ['./edit-student-profile.page.scss'],
        }),
        __metadata("design:paramtypes", [PopoverController,
            NavController,
            Device,
            AuthService,
            Platform,
            FCM,
            AlertController,
            TranslateService,
            DataService,
            ActivatedRoute,
            NgZone,
            Router,
            DatabaseService])
    ], EditStudentProfilePage);
    return EditStudentProfilePage;
})();
export { EditStudentProfilePage };
//# sourceMappingURL=edit-student-profile.page.js.map
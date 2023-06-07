import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
let DelaylistPage = /** @class */ (() => {
    let DelaylistPage = class DelaylistPage {
        /**
         * Class list constructor
         * @param navCtrl Use for navigation between pages
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param alertCtrl Ionic alert controller to show alert popup
         * @param translate used for translation service
         */
        constructor(navCtrl, 
        //public app: App, 
        translate, dataProvider, authProvider, route, zone, router, alertCtrl) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.alertCtrl = alertCtrl;
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
        }
        ngOnInit() {
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.dataProvider.showLoading();
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.userType = this.userDetails.details.user_type;
                let data = {
                    "user_no": this.userDetails.details.user_no,
                    "school_id": this.userDetails.details.school_id,
                    "session_id": this.userDetails.session_id
                };
                this.dataProvider.getCourses(data).then(response => {
                    this.dataProvider.hideLoading();
                    if (response.session) {
                        let courses = response.data;
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
                        this.authProvider.flushLocalStorage();
                        this.dataProvider.errorALertMessage(response.message);
                        //   this.app.getRootNav().setRoot("LoginPage");
                    }
                }).catch(error => {
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
        ionViewWillEnter() {
            this.editMode = false;
        }
        /**
         * Open delay student list or open alert to edit class desc
         * @param course contains the course information
         */
        openClassStudents(course) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.editMode) {
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
                                                //  this.app.getRootNav().setRoot("LoginPage");
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
                else {
                    const navigation = {
                        state: { course: course }
                    };
                    //console.log(navigation);
                    this.zone.run(() => {
                        this.router.navigate(['students'], navigation);
                    });
                    //   this.app.getRootNav().push("StudentsPage", {course: course});
                }
            });
        }
        /**
         * enable edit mode for admin
         */
        enableEditMode() {
            this.editMode = !this.editMode;
        }
    };
    DelaylistPage = __decorate([
        Component({
            selector: 'app-delaylist',
            templateUrl: './delaylist.page.html',
            styleUrls: ['./delaylist.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            TranslateService,
            DataService,
            AuthService,
            ActivatedRoute,
            NgZone,
            Router,
            AlertController])
    ], DelaylistPage);
    return DelaylistPage;
})();
export { DelaylistPage };
//# sourceMappingURL=delaylist.page.js.map
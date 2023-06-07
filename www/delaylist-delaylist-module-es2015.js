(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delaylist-delaylist-module"],{

/***/ "2p4E":
/*!*******************************************************!*\
  !*** ./src/app/delaylist/delaylist-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DelaylistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelaylistPageRoutingModule", function() { return DelaylistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delaylist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delaylist.page */ "Qoo4");




const routes = [
    {
        path: '',
        component: _delaylist_page__WEBPACK_IMPORTED_MODULE_3__["DelaylistPage"]
    }
];
let DelaylistPageRoutingModule = class DelaylistPageRoutingModule {
};
DelaylistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DelaylistPageRoutingModule);



/***/ }),

/***/ "Qoo4":
/*!*********************************************!*\
  !*** ./src/app/delaylist/delaylist.page.ts ***!
  \*********************************************/
/*! exports provided: DelaylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelaylistPage", function() { return DelaylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_delaylist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./delaylist.page.html */ "m10P");
/* harmony import */ var _delaylist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delaylist.page.scss */ "bG70");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/loader.component */ "vPOg");











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
    translate, dataProvider, authProvider, route, popoverController, zone, router, alertCtrl) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.route = route;
        this.popoverController = popoverController;
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
        this.authProvider.event.subscribe((res) => {
            //  console.log('change',res)
            if (res.changeUser) {
                this.ngOnInit(false);
            }
        });
        this.dataProvider.language.subscribe((resq) => {
            this.translate.get("alertmessages").subscribe((res) => {
                // console.log(this.lang);
                this.lang = res;
            });
            this.ngOnInit(false);
        });
    }
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popOver = yield this.popoverController.create({
                component: _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                backdropDismiss: true,
                //event: ev,
                translucent: false,
                // animated:true,
                cssClass: 'loaderStyle',
            });
            return this.popOver.present();
        });
    }
    dissmissPopOver() {
        if (this.popOver)
            this.popOver.dismiss();
    }
    ngOnInit(loader = true) {
        this.translate.get("alertmessages").subscribe((res) => {
            this.lang = res;
        });
        if (loader)
            this.presentPopover();
        // this.dataProvider.showLoading();
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.userType = this.userDetails.details.user_type;
            let data = {
                "user_no": this.userDetails.details.user_no,
                "school_id": this.userDetails.details.school_id,
                "session_id": this.userDetails.session_id
            };
            this.dataProvider.getCourses(data).then(response => {
                if (loader)
                    this.dissmissPopOver();
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
                    this.router.navigate(['login'], { replaceUrl: true });
                    this.dataProvider.errorALertMessage(response.message);
                    //   this.app.getRootNav().setRoot("LoginPage");
                }
            }).catch(error => {
                if (loader)
                    this.dissmissPopOver();
                this.dataProvider.errorALertMessage(error);
            });
        }
        else {
            this.dissmissPopOver();
            this.authProvider.flushLocalStorage();
            this.router.navigate(['login'], { replaceUrl: true });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
DelaylistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
DelaylistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-delaylist',
        template: _raw_loader_delaylist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_delaylist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], DelaylistPage);



/***/ }),

/***/ "bG70":
/*!***********************************************!*\
  !*** ./src/app/delaylist/delaylist.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-delaylist:host .edit_enabled_text {\n  width: 30%;\n  float: left;\n  text-align: left;\n}\napp-delaylist:host .cards-description {\n  border-radius: 6px;\n  min-height: 100px;\n  position: relative;\n  margin: 2px;\n}\napp-delaylist:host .cards-description ion-card-title {\n  color: #fff;\n  width: 70%;\n  font-size: 15px;\n}\napp-delaylist:host .cards-description ion-card-content {\n  color: #fff;\n  width: 70%;\n  font-size: 11px;\n}\napp-delaylist:host .cards-description .background-image-div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  background-image: url('class-background-image.svg');\n  left: -60px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\napp-delaylist:host .add-circle {\n  float: left;\n  margin-right: 25px;\n  font-size: 27px;\n}\n@media only screen and (max-width: 249px) and (orientation: portrait) {\n  app-delaylist:host .cards-description ion-card-title {\n    padding-right: 5px;\n    font-size: 1.2rem;\n    width: 60%;\n  }\n  app-delaylist:host .cards-description ion-card-content {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60% !important;\n  }\n  app-delaylist:host .cards-description .background-image-div {\n    left: -46px !important;\n  }\n}\n@media only screen and (min-width: 250px) and (max-width: 319px) and (orientation: portrait) {\n  app-delaylist:host .cards-description ion-card-title {\n    padding-right: 5px;\n    font-size: 1.1rem;\n    width: 60%;\n  }\n  app-delaylist:host .cards-description ion-card-content {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60% !important;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 359px) and (orientation: portrait) {\n  app-delaylist:host .cards-description ion-card-title {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60%;\n  }\n  app-delaylist:host .cards-description ion-card-header {\n    padding: 15px 6px 5px 0px;\n  }\n  app-delaylist:host .cards-description ion-card-content {\n    padding-right: 5px;\n    font-size: 1rem;\n    width: 60% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RlbGF5bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNJLFdBQUE7QUFEWjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQVo7QUFJUTtFQUNRLFdBQUE7RUFDSixVQUFBO0VBQ0EsZUFBQTtBQUZaO0FBTVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxtREFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBSlo7QUFRSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVNJO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQVJkO0VBVVU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQVJkO0VBVVU7SUFDSSxzQkFBQTtFQVJkO0FBQ0Y7QUFZSTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUFYZDtFQWFVO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7RUFYZDtBQUNGO0FBZUk7RUFFUTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUFkZDtFQWdCVTtJQUNFLHlCQUFBO0VBZFo7RUFnQlU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQWRkO0FBQ0YiLCJmaWxlIjoiZGVsYXlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1kZWxheWxpc3Q6aG9zdHtcclxuICAgICAgICAuZWRpdF9lbmFibGVkX3RleHR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1kZXNjcmlwdGlvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG4gICAgICAgICAgLy8gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuICAgICAgICAgIC8vICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFja2dyb3VuZC1pbWFnZS1kaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2NsYXNzLWJhY2tncm91bmQtaW1hZ2Uuc3ZnKTtcclxuICAgICAgICAgICAgbGVmdDogLTYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC1jaXJjbGV7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgIC5jYXJkcy1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFja2dyb3VuZC1pbWFnZS1kaXZ7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAuY2FyZHMtZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgIC5jYXJkcy1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDZweCA1cHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "dVcN":
/*!***********************************************!*\
  !*** ./src/app/delaylist/delaylist.module.ts ***!
  \***********************************************/
/*! exports provided: DelaylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelaylistPageModule", function() { return DelaylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _delaylist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delaylist-routing.module */ "2p4E");
/* harmony import */ var _delaylist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delaylist.page */ "Qoo4");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");








let DelaylistPageModule = class DelaylistPageModule {
};
DelaylistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _delaylist_routing_module__WEBPACK_IMPORTED_MODULE_5__["DelaylistPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_delaylist_page__WEBPACK_IMPORTED_MODULE_6__["DelaylistPage"]]
    })
], DelaylistPageModule);



/***/ }),

/***/ "m10P":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delaylist/delaylist.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'delaylist.title' | translate}}\n      <!-- <ion-icon name=\"send-outline\" (click)=\"editMode = !editMode\" class=\"add-circle\" item-end color=\"icon-header\" *ngIf = \"editMode\"></ion-icon> -->\n      <!-- <div class=\"edit_enabled_text\" *ngIf = \"editMode\">{{saveText}}</div> -->\n      <!-- <ion-icon name=\"pencil\" class=\"add-circle\" item-end color=\"icon-header\" (click) = \"enableEditMode()\" *ngIf = \"userType == '1' && !editMode\"></ion-icon> -->\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <ion-grid no-padding>\n    <ion-row *ngIf = \"classes?.length > 0\">\n      <ion-col size=\"6\" *ngFor=\"let course of classes\" no-padding>\n        <ion-card class=\"cards-description\" [ngStyle]=\"{'background-color': course.backgroundColor}\" (click)=\"openClassStudents(course)\">\n          <ion-card-header no-padding>\n            <ion-card-title color=\"light\">{{course.name}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content no-padding color=\"light\">\n            {{course.desc}}\n          </ion-card-content>\n          <div class=\"background-image-div\"></div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-label item-center class=\"norecord-found\" *ngIf = \"classes?.length == 0\">{{noDataFound}}</ion-label>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=delaylist-delaylist-module-es2015.js.map
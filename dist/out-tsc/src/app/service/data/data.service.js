import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Platform, LoadingController, ToastController, AlertController, ModalController, PopoverController } from '@ionic/angular';
//import { HttpParams, Http, Headers } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { DatabaseService } from '../database/database.service';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { LoaderComponent } from '../../components/loader/loader.component';
import { RateAppComponent } from '../../components/rate-app/rate-app.component';
import { TranslateService } from '@ngx-translate/core';
import { SwitchAccountComponent } from '../../components/switch-account/switch-account.component';
import { EditStudentProfileComponent } from '../../components/edit-student-profile/edit-student-profile.component';
//import { EditCalssPage } from '../../common-modal/edit-calss/edit-calss.page';
// import { ViewClassNotesPage } from '../../common-modal/view-class-notes/view-class-notes.page';
import { AppRate } from '@ionic-native/app-rate/ngx';
const env = environment;
let DataService = /** @class */ (() => {
    let DataService = class DataService {
        /**
          * Represents a Data provider from API.
          * @constructor
          * @param {Http} http - for making http request.
          * @param {AlertController} alertCtrl - Alert popup.
          * @param {LoadingController} loadingCtrl - Loading popup.
          * @param {ToastController} toastCtrl - show toast
        */
        constructor(httpClient, http, alertCtrl, platform, loadingCtrl, toastCtrl, translate, modalController, network, popoverController, dbProvider, appRate, photoLibrary) {
            this.httpClient = httpClient;
            this.http = http;
            this.alertCtrl = alertCtrl;
            this.platform = platform;
            this.loadingCtrl = loadingCtrl;
            this.toastCtrl = toastCtrl;
            this.translate = translate;
            this.modalController = modalController;
            this.network = network;
            this.popoverController = popoverController;
            this.dbProvider = dbProvider;
            this.appRate = appRate;
            this.photoLibrary = photoLibrary;
            this.lang = {};
            this.mediaDirectory = '';
        }
        /**
         * This is a user rating popup
         * @return rating in int
         * @param ev - event
         */
        presentRatingPopover(lang, note, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                // console.log('call');
                const popover = yield this.popoverController.create({
                    component: RateAppComponent,
                    // event: ev,
                    translucent: false,
                    mode: "ios",
                    cssClass: 'ratePopup',
                    backdropDismiss: false,
                    componentProps: { lang: lang, data: note }
                });
                yield popover.present();
                popover.onDidDismiss().then((response) => {
                    // console.log('call',response);
                    if (response.data) {
                        callback(response.data);
                    }
                    else {
                        callback(false);
                    }
                });
            });
        }
        editClassModal(course, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(course);
                //   const modal = await this.modalController.create({
                //   component: EditCalssPage,
                //   cssClass: 'my-custom-class',
                //   componentProps: {couerse:course}
                // });
                // await modal.present();
                // modal.onDidDismiss().then(res=>{
                //   callback(res);
                // })
            });
        }
        viewNotes(data, state) {
            return __awaiter(this, void 0, void 0, function* () {
                //   const modal = await this.modalController.create({
                //   component: ViewClassNotesPage,
                //   cssClass: 'my-custom-class',
                //   componentProps: {data:data,state:state}
                // });
                // await modal.present();
            });
        }
        /**
        * submit rating to playstore
        * @param rating - int rating value
        */
        submitRating(rating) {
            console.log(rating);
        }
        showRatePrompt(lang) {
            this.appRate.preferences = {
                inAppReview: false,
                usesUntilPrompt: 5,
                useLanguage: lang,
                promptAgainForEachNewVersion: true,
                storeAppURL: {
                    ios: '< my_app_id >',
                    android: 'market://details?id=com.webapp.attendance'
                },
                callbacks: {
                    onRateDialogShow: function (callback) {
                        console.log('User Prompt for Rating');
                    },
                    onButtonClicked: function (buttonIndex) {
                        console.log('Selected Button Index', buttonIndex);
                    }
                }
            };
            // this.appRate.preferences.openUrl = function(url) {
            // window.open(url, '_blank', 'location=yes');
            // };
            this.appRate.promptForRating(true);
        }
        switchAccount(ev, lang) {
            return __awaiter(this, void 0, void 0, function* () {
                const popover = yield this.popoverController.create({
                    component: SwitchAccountComponent,
                    // event: ev,
                    translucent: false,
                    // mode:"ios",
                    cssClass: 'switch-account',
                    backdropDismiss: true,
                    componentProps: { lang: lang }
                });
                yield popover.present();
                popover.onDidDismiss().then((response) => {
                    // console.log('call',response);
                    // if(response.data){
                    //   this.submitRating(response.data)
                    // }else{
                    //   this.showToast(lang.no_rating);
                    // }
                });
            });
        }
        editStudentClass(ev, student, classes, user, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                const popover = yield this.popoverController.create({
                    component: EditStudentProfileComponent,
                    event: ev,
                    translucent: false,
                    mode: "ios",
                    cssClass: 'edit-student',
                    backdropDismiss: true,
                    componentProps: { student: student, classes: classes }
                });
                yield popover.present();
                popover.onDidDismiss().then((response) => {
                    // console.log('call',response);
                    if (response.data) {
                        if (response.data.deleteClass) {
                            let deleteData = {
                                sid: response.data.student.sid,
                                cid: response.data.student.cid,
                                user_no: user.user_no,
                                school_id: user.school_id,
                                session_id: user.session_id
                            };
                            this.deleteStudentClass(deleteData, res => {
                                callback(res);
                            });
                        }
                        else {
                            let updateData = {
                                sid: response.data.student.sid,
                                cid: response.data.student.cid,
                                student_name: response.data.studentName,
                                class_id: response.data.studentSemester,
                                user_no: user.user_no,
                                school_id: user.school_id,
                                session_id: user.session_id
                            };
                            this.updateStudentProfile(updateData, res => {
                                callback(res);
                            });
                        }
                    }
                });
            });
        }
        deleteStudentClass(data, callback) {
            console.log('delete', data);
            this.postRequest(data, 'deleteStudentClass').then((response) => {
                if (response) {
                    this.showToast(response.msg);
                    callback(response);
                }
            }).catch((error) => {
                console.log(error);
                //this.showToast(response.message);
            });
        }
        deleteStudent(data, callback) {
            console.log('delete', data);
            this.postRequest(data, 'deleteStudent').then((response) => {
                if (response) {
                    this.showToast(response.msg);
                    callback(response);
                }
            }).catch((error) => {
                console.log(error);
                //this.showToast(response.message);
            });
        }
        deleteTeacher(data, callback) {
            console.log('delete', data);
            this.postRequest(data, 'deleteTeacher').then((response) => {
                if (response) {
                    this.showToast(response.msg);
                    callback(response);
                }
            }).catch((error) => {
                console.log(error);
                //this.showToast(response.message);
            });
        }
        deleteParent(data, callback) {
            console.log('delete', data);
            this.postRequest(data, 'deleteParent').then((response) => {
                if (response) {
                    this.showToast(response.msg);
                    callback(response);
                }
            }).catch((error) => {
                console.log(error);
                //this.showToast(response.message);
            });
        }
        deleteNote(data, callback) {
            console.log('delete', data);
            this.postRequest(data, 'deleteNotes').then((response) => {
                if (response) {
                    this.showToast(response.msg);
                    callback(response);
                }
            }).catch((error) => {
                console.log(error);
                //this.showToast(response.message);
            });
        }
        updateStudentProfile(data, callback) {
            console.log('update', data);
            this.postRequest(data, 'updateStudentProfile').then((response) => {
                if (response) {
                    callback(response);
                    this.showToast(response.msg);
                }
            }).catch((error) => {
                console.log(error);
                //this.showToast(response.message);
            });
        }
        updateTeacherProfile(data, callback) {
            console.log('update', data);
            let header = new HttpHeaders();
            header.append('Content-Type', 'application/json');
            let body = new HttpParams();
            Object.keys(data).forEach(function (key) {
                body = body.append(key, data[key]);
            });
            body['class'] = [];
            Object.keys(data.class).map((key) => {
                Object.keys(data.class[key]).map((sid) => {
                    body = body.append('classes' + '[' + key + ']' + '[' + sid + ']', data.class[key][sid]);
                });
            });
            this.httpClient.post(env.serverURL + 'updateTeacherProfile', body, { headers: header }).subscribe((response) => {
                if (response) {
                    console.log('tescherList', response);
                    if (response.response == false) {
                        callback({ session: false, message: response.msg });
                    }
                    else if (response.response == true) {
                        // this.dbProvider.insertClasses(response.courses);
                        callback({ session: true, data: response.msg });
                    }
                    else {
                        callback(response.msg);
                    }
                }
                else {
                }
            }, (error) => {
                console.log(error);
                if (error.message != undefined && error.message != '' && error.message != null) {
                    callback(error.message);
                }
                else {
                    callback("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                }
            });
        }
        /**
         * This is a user defined loader
         * @param ev - event
         */
        presentPopover(ev) {
            return __awaiter(this, void 0, void 0, function* () {
                this.popOver = yield this.popoverController.create({
                    component: LoaderComponent,
                    backdropDismiss: true,
                    //event: ev,
                    translucent: false,
                    // animated:true,
                    cssClass: 'loaderStyle'
                    // mode:"ios"
                });
                return yield this.popOver.present();
            });
        }
        closePopup() {
            this.popOver.dismiss();
        }
        /**
         * This is a toast message function
         * @param message - string of message to be shown
         */
        showToast(message) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.toastCtrl.create({
                    message: message,
                    position: 'bottom',
                    duration: 3000
                });
                yield alert.present();
            });
        }
        /** ALert message popup.
         * @param {String} error - Error message to display
        */
        errorALertMessage(error) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'تحذير',
                    message: error,
                    backdropDismiss: false,
                    buttons: ['Ok']
                });
                yield alert.present();
            });
        }
        /** ALert message popup.
         * @param {String} error - Error message to display
        */
        msgALertMessage(msg) {
            return __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'معلومات',
                    message: msg,
                    backdropDismiss: false,
                    buttons: ['Ok']
                });
                yield alert.present();
            });
        }
        /** Show Loading popup. */
        showLoading() {
            return __awaiter(this, void 0, void 0, function* () {
                this.presentPopover('');
            });
        }
        /** Hide loading popup. */
        hideLoading() {
            return __awaiter(this, void 0, void 0, function* () {
                setTimeout(res => {
                    this.closePopup();
                    // this.loader.dismiss();
                }, 1000);
            });
        }
        /** Search all user from API.
         * @returns Array of users list or error
        */
        searchUser(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'search_user').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        markBulletinRead(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'markBulletinRead').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        deleteBulletin(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'delete_bulletins').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        closeBulletin(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'closed_bulletins').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        reOpenBulletin(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'reOpenBulletin').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        getBulletinDetails(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'bulletins_details').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        getBulletins(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getBulletins').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        editAbsentNotes(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'editAbsentNotes').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response.response, message: response.mg });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        shareBulletins(data) {
            return new Promise((resolve, reject) => {
                let header = new HttpHeaders();
                header.append('Content-Type', 'application/json');
                let body = this.makeObjectToUrlParams(data);
                Object.keys(data.users).map((key) => {
                    console.log('key', key);
                    body = body.append('shareto_user_no' + '[' + key + ']', data.users[key]);
                });
                // console.log(body);
                this.httpClient.post(env.serverURL + 'shareBulletins', body, { headers: header }).subscribe((response) => {
                    if (response) {
                        resolve({ session: true, data: response.response, message: response.msg });
                    }
                    else {
                        reject(response.msg);
                    }
                }, (error) => {
                    console.log(error);
                });
                // console.log(data);
                // this.postRequest(data, 'shareBulletins').then((response: any) => {
                //   if (response) {
                //       resolve({ session: true, data: response.response,message:response.msg});
                //   } else {
                //       reject(response.msg)
                //   }
                // }).catch((error) => {
                //   console.log(error);
                // })
            });
        }
        /** Search all student of School from API.
       * @returns Array of users list or error
      */
        serachStudent(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'search_student').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        searTeacher(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getTeacherWithPagging').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        /** Search all parent of School from API.
     * @returns Array of users list or error
    */
        serachParent(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'serachParent').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        /** Get school list from API.
         * @returns Array of school list or error
        */
        getSchool(country_code) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/json');
                        let url = env.serverURL + 'getSchoolsHavingMaterials/' + ((country_code && typeof country_code !== 'undefined') ? '?country_code=' + country_code : '');
                        this.httpClient.post(url, country_code, { headers: header }).subscribe((response) => {
                            if (response.success) {
                                resolve(response.schools);
                            }
                            else {
                                reject("Server is not responding");
                            }
                        }, (error) => {
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /** Get teacher list of a perticular school  from API.
       * @returns Array of teacher list or error
      */
        getTeachers(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getAllTeachers').then((response) => {
                    if (response) {
                        console.log('tescherList', response);
                        if (response.response == false) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response == true) {
                            // this.dbProvider.insertClasses(response.courses);
                            resolve({ session: true, data: response.profile });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        // this.dbProvider.getClasses().then((classes) => {
                        //   resolve({ session: true, data: classes });
                        // }).catch((error) => {
                        //   reject(error);
                        // })
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** update teacher list of a perticular class of a school .
         * @returns updation status
        */
        updateTeacher(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                let header = new HttpHeaders();
                header.append('Content-Type', 'application/json');
                let body = new HttpParams();
                body = body.append("class_id", data.class_id);
                body = body.append("school_id", data.school_id);
                body = body.append("user_no", data.user_no);
                body['teachersList'] = [];
                let obj = [];
                for (let i = 0; i < data.teachersList.length; i++) {
                    // code...
                }
                Object.keys(data.teachersList).map((key) => {
                    console.log('key', key);
                    Object.keys(data.teachersList[key]).map((sid) => {
                        console.log('ap', sid);
                        body = body.append('teachersList' + '[' + key + ']' + '[' + sid + ']', data.teachersList[key][sid]);
                    });
                });
                // console.log(body);
                this.httpClient.post(env.serverURL + 'updateTeachers', body, { headers: header }).subscribe((response) => {
                    if (response) {
                        console.log('tescherList', response);
                        if (response.response == false) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response == true) {
                            // this.dbProvider.insertClasses(response.courses);
                            resolve({ session: true, data: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        // this.dbProvider.getClasses().then((classes) => {
                        //   resolve({ session: true, data: classes });
                        // }).catch((error) => {
                        //   reject(error);
                        // })
                    }
                }, (error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** update teacher list of a perticular class of a school .
         * @returns updation status
        */
        createBulletins(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                let header = new HttpHeaders();
                header.append('Content-Type', 'application/json');
                let body = new HttpParams();
                body = body.append("title", data.title);
                body = body.append("school_id", data.school_id);
                body = body.append("user_no", data.user_no);
                body['users'] = [];
                let obj = [];
                Object.keys(data.users).map((key) => {
                    //  console.log('key',key);
                    body = body.append('users' + '[' + key + ']', data.users[key]);
                });
                Object.keys(data.documents).map((key) => {
                    // console.log('key',key);
                    body = body.append('documents' + '[' + key + ']', data.documents[key]);
                });
                console.log(body);
                this.httpClient.post(env.serverURL + 'createBulletins', body, { headers: header }).subscribe((response) => {
                    if (response) {
                        console.log('tescherList', response);
                        if (response.response == false) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response == true) {
                            resolve({ session: true, data: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                    }
                }, (error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** delete a class from a school.
         * @returns status of deletion
        */
        deleteClass(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'deleteClass').then((response) => {
                    if (response) {
                        console.log('tescherList', response);
                        if (response.response == false) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response == true) {
                            // this.dbProvider.insertClasses(response.courses);
                            resolve({ session: true, data: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        // this.dbProvider.getClasses().then((classes) => {
                        //   resolve({ session: true, data: classes });
                        // }).catch((error) => {
                        //   reject(error);
                        // })
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        openPdf(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'check_user_plan').then((response) => {
                    if (response) {
                        if (response.response) {
                            resolve(response);
                        }
                        else {
                            reject(response);
                        }
                    }
                    else {
                        reject(response);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        getPlan(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getPlan').then((response) => {
                    if (response) {
                        if (response.response) {
                            resolve(response);
                        }
                        else {
                            reject(response);
                        }
                    }
                    else {
                        reject(response);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get parent list of a perticular school who recently registered on app  from API.
         * @returns Array of parent list or error
        */
        getRequestedParents(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getNewParents').then((response) => {
                    if (response) {
                        console.log('tescherList', response);
                        if (response.response == false) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response == true) {
                            // this.dbProvider.insertClasses(response.courses);
                            resolve({ session: true, data: response.parents });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        // this.dbProvider.getClasses().then((classes) => {
                        //   resolve({ session: true, data: classes });
                        // }).catch((error) => {
                        //   reject(error);
                        // })
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        getAllParents(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getAllParents').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** take action on requested registered parents.
         * @returns status of action
         * @param parent id
         * @param school id
      
        */
        acceptRequestedParents(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'acceptParentRequest').then((response) => {
                    if (response) {
                        if (response.response == false) {
                            resolve({ session: false });
                        }
                        else {
                            resolve({ session: true });
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        changeParentStatus(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'changeParentStatus').then((response) => {
                    if (response) {
                        if (response.response == false) {
                            resolve({ session: false, msg: response.msg });
                        }
                        else {
                            resolve({ session: true, msg: response.msg });
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** delete requested registered parents.
       * @returns status of action
       * @param parent id
       * @param school id
    
      */
        deleteRequestedParents(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'deleteParentRequest').then((response) => {
                    if (response) {
                        if (response.response == false) {
                            resolve({ session: false });
                        }
                        else {
                            resolve({ session: true });
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get E-Learning categories list from API.
        * @returns Array of category list or error
       */
        getElearningMaterials(schoolId, country_code) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/json');
                        let url = env.serverURL + 'getElearningMaterials/' + schoolId + ((country_code && typeof country_code !== 'undefined') ? '?country_code=' + country_code : '');
                        this.httpClient.get(url, { headers: header }).subscribe((response) => {
                            if (response.success) {
                                resolve(response.materials);
                            }
                            else {
                                reject("Server is not responding");
                            }
                        }, (error) => {
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /** Get E-Learning material data from API.
          * @returns Array of material data or error
         */
        getMaterialDetails(materialId) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/json');
                        this.httpClient.get(env.serverURL + 'getMaterialDetails/' + materialId, { headers: header }).subscribe((response) => {
                            if (response.success) {
                                resolve(response.material);
                            }
                            else {
                                reject("Server is not responding");
                            }
                        }, (error) => {
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /** Get ads on login page.
         * @returns Array of ads or error
        */
        getAds() {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/json');
                        this.httpClient.get(env.serverURL + 'getAds', { headers: header }).subscribe((response) => {
                            resolve(response);
                        }, (error) => {
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        }
        /** Get news from API for news page.
         * @returns Array of news or error
        */
        getNews() {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/json');
                        this.httpClient.get(env.serverURL + 'getNews', { headers: header }).subscribe((response) => {
                            if (response.success) {
                                resolve(response.news);
                            }
                            resolve(response);
                        }, (error) => {
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /** Get news from API with paging.
         * @param {number} start - starting point of news list
         * @param {number} newsPerPage - how many news in one page
         * @param {object} userDeatils logged in user details
         * @param {char} countrycode - to get news of current locaion
         * @returns Array of News as per location or error
        */
        getNewsJoin(start, newsPerPage, userDeatils, countryCode) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/json');
                        let url = '';
                        if (userDeatils) {
                            url = env.serverURL + 'getNewsjoin/' + start + '/' + newsPerPage + '/desc/' + userDeatils.user_no;
                        }
                        else {
                            url = env.serverURL + 'getNewsjoin/' + start + '/' + newsPerPage + '/desc';
                        }
                        if (countryCode && typeof countryCode !== 'undefined') {
                            url = url + '?code=' + countryCode;
                        }
                        this.httpClient.get(url, { headers: header }).subscribe((response) => {
                            if (response.success) {
                                if (response.news.length > 20) {
                                    this.dbProvider.insertNews(response.news.slice(0, 20));
                                }
                                else {
                                    this.dbProvider.insertNews(response.news);
                                }
                                resolve(response.news);
                            }
                            resolve(response);
                        }, (error) => {
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        this.dbProvider.getNews().then((news) => {
                            resolve(news);
                        }).catch((err) => {
                            reject(err);
                        });
                    }
                });
            });
        }
        /**
         * Like the news post
         * @param data user_no, news_id, session_id
         */
        likeNewsPost(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'likeNewsPost').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Dislike the news post
         * @param data user_no, news_id, session_id
         */
        dislikeNewsPost(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'dislikeNewsPost').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, data: response.courses });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get courses from API to show on classlist page.
         * @param {Object} data - contains user_no, school_id, session_id
         * @returns list of courses or error
        */
        getCourses(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getCourses/' + data.school_id).then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            this.dbProvider.insertClasses(response.courses);
                            resolve({ session: true, data: response.courses, linkData: response.activeLink });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        this.dbProvider.getClasses().then((classes) => {
                            resolve({ session: true, data: classes });
                        }).catch((error) => {
                            reject(error);
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** get all seminars and their total present absent total student
        
        */
        getSeminarClassList(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'getSeminarClassList/' + data.school_id).then((response) => {
                    if (response) {
                        if (!response.response) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response) {
                            resolve({ session: true, data: response.response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** submit email for forgot password
        */
        submitEmail(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'forgot_password').then((response) => {
                    if (response) {
                        if (!response.response) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response) {
                            resolve({ session: true, data: response.response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Check OTP for sorgot password
        */
        checkOtp(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'checkOtp').then((response) => {
                    if (response) {
                        if (!response.response) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response) {
                            resolve({ session: true, data: response.response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** reset pass. for sorgot password
        */
        resetPassword(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'reset_password').then((response) => {
                    if (response) {
                        if (!response.response) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response) {
                            resolve({ session: true, data: response.response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** get all student of a school
        */
        getSchoolStudents(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'get_school_stu').then((response) => {
                    if (response) {
                        if (!response.response) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response) {
                            resolve({ session: true, data: response.response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** get all student of a school
      */
        getSchoolUsers(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'get_school_users').then((response) => {
                    if (response) {
                        resolve({ session: true, data: response.response });
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    reject(error.message);
                });
            });
        }
        todayDashboard(data) {
            return new Promise((resolve, reject) => {
                // console.log(data);
                this.postRequest(data, 'todayDashboard/' + data.school_id).then((response) => {
                    if (response) {
                        if (!response.response) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response) {
                            resolve({ session: true, data: response.response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject(response.msg);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Register new course.
        * @param {Object} data - contains user_no, school_id, code, name, desc, semno
        * @returns Success or error msg
       */
        createNewCourse(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'createCourse').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Register new teacher.
           * @param {Object} data - contains user_no, school_id, Teacher Id, teacher name, teacher password
           * @returns Success or error msg
          */
        registerNewTeacher(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'registerNewTeacher').then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(response.msg);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        registerNewParent(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'registerNewParent').then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(response.msg);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        getAllRules(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getAllRules').then((response) => {
                    if (response) {
                        if (response.details) {
                            resolve(response.details);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        //  reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.")
                    }
                });
            });
        }
        /** Register new Student.
           * @param {Object} data - contains user_no, school_id, name, student_id
           * @returns Success or Error msg
          */
        registerStudent(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'registerStudent').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        this.dbProvider.getClasses().then((classes) => {
                            resolve({ session: true, data: classes });
                        }).catch((error) => {
                            reject(error);
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Update course description
         * @param data user_no, session_id, cid, course object
         */
        updateCourseDesc(data) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let headers = new HttpHeaders();
                        headers.set('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("cid", data.cid);
                        body = body.append("session_id", data.session_id);
                        body = body.append("user_no", data.user_no);
                        body = body.append('course[name]', data.course.name);
                        body = body.append('course[desc]', data.course.desc);
                        this.http.post(environment.serverURL + '/manageCourse', body, { headers }).subscribe((res) => {
                            let response = res;
                            if (!response['session']) {
                                resolve({ session: false, message: response['msg'] });
                            }
                            else if (response['success']) {
                                resolve({ session: true, data: response['courses'] });
                            }
                            else {
                                reject(response['msg']);
                            }
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Get holiday list from backend
         * @param data user_no, school_id, session_id
         */
        getHolidays(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getHolidays/' + data.school_id).then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(response);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        resolve(false);
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get student list according to course.
         * @param {Object} data - date, user_no, session_id, course_id, school_id
         * @returns list of students or error
        */
        getClassStudentList(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getStudents/' + data.course_id).then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            this.dbProvider.insertStudentList(response.students, 5);
                            resolve({ session: true, data: response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        if (localStorage.getItem("classlocalatt")) {
                            let attendance = JSON.parse(localStorage.getItem("classlocalatt"));
                            if (attendance[data.course_id]) {
                                resolve({ session: true, data: attendance[data.course_id] });
                            }
                            else {
                                this.dbProvider.getStudentList(data.course_id).then((students) => {
                                    resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [] } });
                                }).catch((error) => {
                                    reject(error);
                                });
                            }
                        }
                        else {
                            this.dbProvider.getStudentList(data.course_id).then((students) => {
                                resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [] } });
                            }).catch((error) => {
                                reject(error);
                            });
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get delay student list according to course.
         * @param {Object} data - date, user_no, session_id, course_id, school_id
         * @returns list of students or error
        */
        getDelayClassStudentList(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getStudents_delay/' + data.course_id).then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            this.dbProvider.insertStudentList(response.students, response.delay_rule);
                            resolve({ session: true, data: response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        if (localStorage.getItem("delayclasslocalatt")) {
                            let attendance = JSON.parse(localStorage.getItem("delayclasslocalatt"));
                            if (attendance[data.course_id]) {
                                resolve({ session: true, data: attendance[data.course_id] });
                            }
                            else {
                                this.dbProvider.getStudentList(data.course_id).then((students) => {
                                    if (students.length > 0) {
                                        resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: students[0].delay_rule } });
                                    }
                                    else {
                                        resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: 5 } });
                                    }
                                }).catch((error) => {
                                    reject(error);
                                });
                            }
                        }
                        else {
                            this.dbProvider.getStudentList(data.course_id).then((students) => {
                                if (students.length > 0) {
                                    resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: students[0].delay_rule } });
                                }
                                else {
                                    resolve({ session: true, data: { students: students, last_cem: 0, semteacher: [], delay_rule: 5 } });
                                }
                            }).catch((error) => {
                                reject(error);
                            });
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get student details.
         * @param {Object} data - user_no, session_id, cid, date, sid
         * @returns Student details or error
        */
        getStudentDetails(data) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        this.postRequest(data, 'viewStudent/' + data.sid).then((response) => {
                            if (response) {
                                if (!response.session) {
                                    reject(response.msg);
                                }
                                else if (response.success) {
                                    resolve({ session: true, data: response.details });
                                    let a = response.details;
                                    let data = [];
                                    data.push(a);
                                }
                                else {
                                    reject(response.msg);
                                }
                            }
                            else {
                                reject("الرجاء التأكد من اتصالك بالانترنت");
                            }
                        }).catch((error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                });
            });
        }
        /** Get notes of the student.
         * @param {Object} data - user_no, session_id, cid, date, sid
         * @returns List of notes or error
        */
        getStudentNotes(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getStudentNote/' + data.sid).then((response) => {
                    if (response) {
                        if (response.status) {
                            resolve(response);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        createNotes(data) {
            return new Promise((resolve, reject) => {
                let header = new HttpHeaders();
                header.append('Content-Type', 'application/json');
                let body = new HttpParams();
                Object.keys(data).forEach(function (key) {
                    body = body.append(key, data[key]);
                });
                body['studentIds'] = [];
                Object.keys(data.studentIds).map((key) => {
                    Object.keys(data.studentIds[key]).map((sid) => {
                        body = body.append('studentId' + '[' + key + ']' + '[' + sid + ']', data.studentIds[key][sid]);
                    });
                });
                this.httpClient.post(env.serverURL + 'createNotes', body, { headers: header }).subscribe((response) => {
                    if (response) {
                        console.log('tescherList', response);
                        if (response.response == false) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.response == true) {
                            resolve({ session: true, data: response.msg });
                        }
                        else {
                            resolve(response.msg);
                        }
                    }
                    else {
                    }
                }, (error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        getClassNotes(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'studentClassNotes').then((response) => {
                    if (response) {
                        if (response.response) {
                            resolve(response.response);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        getAllClassNotes(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'all_classNotes').then((response) => {
                    if (response) {
                        if (response.response) {
                            resolve(response.response);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Get notification of the school.
         * @param {Object} data- user_no, school_id, session_id
         * @returns list of notifications or error
         */
        getNotifications(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getNotifications/' + data.school_id).then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            this.dbProvider.insertPrivateMessages(response.list);
                            resolve({ session: true, data: response.list });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        this.dbProvider.getPrivateMessages().then((messages) => {
                            resolve({ session: true, data: messages });
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * delete user notification
         * @param data user_no, nid, session_id
         */
        deleteNotification(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'deleteNotifications').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Attendance mark post function
         * @param data user_no, session_id, cid, date, school_id, sheet
         */
        markAttendance(data) {
            // console.log(data);
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("cid", data.cid);
                        body = body.append("date", data.date);
                        body = body.append("session_id", data.session_id);
                        body = body.append("user_no", data.user_no);
                        let index = 0;
                        Object.keys(data.removal_sheet).map((key) => {
                            body = body.append('removal_sheet[' + index + '][sid]', data.removal_sheet[key].sid);
                            body = body.append('removal_sheet[' + index + '][sem]', data.removal_sheet[key].sem);
                            index++;
                        });
                        Object.keys(data.sheet).map((key) => {
                            Object.keys(data.sheet[key]).map((sid) => {
                                body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                            });
                        });
                        this.http.post(environment.serverURL + 'saveAttendance/' + data.school_id, body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (!response.session) {
                                resolve({ session: false, message: response.msg });
                            }
                            else if (response.success) {
                                resolve({ session: true, message: response.msg });
                            }
                            else {
                                reject(response.msg);
                            }
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
        * Delay attendance mark post function
        * @param data user_no, session_id, cid, date, school_id, sheet
        * @param submittedByUser submitted by which user 1 - admin, 2- moderator
        */
        markDelayAttendance(data, submittedByUser) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("cid", data.cid);
                        body = body.append("date", data.date);
                        body = body.append("session_id", data.session_id);
                        body = body.append("user_no", data.user_no);
                        Object.keys(data.sheet).map((key) => {
                            Object.keys(data.sheet[key]).map((sid) => {
                                body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                            });
                        });
                        this.http.post(environment.serverURL + 'ManroxTesting2/' + data.school_id + '/' + submittedByUser, body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (response.success == true) {
                                resolve(true);
                            }
                            else {
                                reject(response.msg);
                            }
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Absence save note
         * @param data sid, cid, date, note, user_no, session_id
         */
        saveAbsenceNote(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'saveNote').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg, res: response });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Absence delete note
         * @param data user_no, session_id
         * @param note_id Note id which will be deleted
         */
        deleteAbsenceNote(data, note_id) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'deleteNote/' + note_id).then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Submit Student note
         * @param data sid, note, user_id
         */
        addStudentNote(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'addStudentNote').then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(response.note_id);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Update user image
         * @param data Base64 image data
         */
        updateUserImage(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'updateStudentImage/' + data.sid).then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, url: response.imageUrl });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * send Private message
         * @param data user_no, session_id, notification, isemail, school_id
         */
        sendMessage(data) {
            return new Promise((resolve, reject) => {
                console.log(data);
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("user_no", data.user_no);
                        body = body.append("session_id", data.session_id);
                        body = body.append("isemail", data.isemail);
                        Object.keys(data.notification).map((key) => {
                            if (key == 'send_to') {
                                Object.keys(data.notification[key]).map((send_to_key) => {
                                    body = body.append('notification[' + key + '][' + send_to_key + ']', data.notification[key][send_to_key]);
                                });
                            }
                            else {
                                body = body.append('notification[' + key + ']', data.notification[key]);
                            }
                        });
                        this.http.post(environment.serverURL + 'sendMessage/' + data.school_id, body, { headers: header }).subscribe(() => {
                            resolve(true);
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        postNews___OLD(data) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("title", data.title);
                        body = body.append("news_description", data.news_description);
                        body = body.append("video", data.video);
                        body = body.append("image", data.image);
                        body = body.append("user_no", data.user_no);
                        body = body.append("user_type", data.user_type);
                        body = body.append("school_id", data.school_id);
                        body = body.append("countryCode", data.countryCode);
                        this.http.post(environment.serverURL + 'postNews', body, { headers: header }).subscribe(() => {
                            resolve(true);
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        postNews(data) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new FormData();
                        body.append("title", data.title);
                        body.append("news_description", data.news_description);
                        body.append("video", data.video);
                        //body.append("image", data.image);
                        body.append("user_no", data.user_no);
                        body.append("user_type", data.user_type);
                        body.append("school_id", data.school_id);
                        body.append("countryCode", data.countryCode);
                        this.http.post(environment.serverURL + 'postNews', body /*, { headers: header }*/).subscribe(() => {
                            resolve(true);
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Update user settings
         * @param data user_no, session_id, user object
         */
        updateUserSettings(data) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = this.makeObjectToUrlParams(data);
                        Object.keys(data.users).map((key) => {
                            if (data.users[key] != '') {
                                body = body.append('user[' + key + ']', data.users[key]);
                            }
                        });
                        this.http.post(environment.serverURL + 'saveUser', body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (!response.session) {
                                resolve({ session: false, message: response.msg });
                            }
                            else if (response.success) {
                                resolve({ session: true, message: response.msg, pic: response.picUrl });
                            }
                            else {
                                reject(response.msg);
                            }
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Get parent connect listing
         * @param data
         */
        getConnectChatList(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getParentConnectChatList').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            this.dbProvider.insertParentConnectMessages(response.chat_list);
                            resolve({ session: true, chatList: response.chat_list });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        this.dbProvider.getParentConnectMessages().then((messages) => {
                            resolve({ session: true, chatList: messages });
                        }).catch((error) => {
                            reject(error);
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * create parent connect chat
         * @param data user_no, school_id, session_id, message object
         */
        createParentConnectChat(data) {
            console.log(data);
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("user_no", data.user_no);
                        body = body.append("session_id", data.session_id);
                        body = body.append("school_id", data.school_id);
                        if (data.chat_msg) {
                            Object.keys(data.chat_msg).forEach(function (key) {
                                body = body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                            });
                        }
                        Object.keys(data.message).map((key) => {
                            if (data.message[key] != '') {
                                body = body.append('message[' + key + ']', data.message[key]);
                            }
                        });
                        this.http.post(environment.serverURL + 'createParentConnectChat', body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (!response.session) {
                                resolve({ session: false, message: response.msg });
                            }
                            else if (response.success) {
                                resolve({ session: true, url: response.msg });
                            }
                            else {
                                reject(response.msg);
                            }
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Close parent connect chat
         * @param data user_no, chat_list_id, session_id
         */
        closeParentConnectChat(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'closeParentConnectChat').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Reopen parent connect chat
         * @param data user_no, chat_list_id, session_id
         */
        reopenParentConnectChat(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'reopenParentConnectChat').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, message: response.msg });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Get parent connect chat messages
         * @param data user_no, school_id, user_type, session_id, chat_id
         */
        getParentConnectChatMessages(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getParentConnectChatMessages').then((response) => {
                    if (response) {
                        if (!response.session) {
                            resolve({ session: false, message: response.msg });
                        }
                        else if (response.success) {
                            resolve({ session: true, chat: response.chat });
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Send parent connect chat message
         * @param data session_id, user_type, chat_msg object
         */
        sendParentConnectChatMsg(data) {
            // console.log(data);
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("session_id", data.session_id);
                        body = body.append("user_no", data.user_no);
                        body = body.append("user_type", data.user_type);
                        Object.keys(data.chat_msg).forEach(function (key) {
                            body = body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                        });
                        // Object.keys(data.chat_msg).map((key) => {
                        //   if (data.chat_msg[key] != '') {
                        //     body= body.append('chat_msg[' + key + ']', data.chat_msg[key]);
                        //   }
                        // })
                        // console.log('body',body);
                        this.http.post(environment.serverURL + 'sendParentConnectChatMessage', body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (!response.session) {
                                resolve({ session: false, message: response.msg });
                            }
                            else if (response.success) {
                                if (response.attachment_url) {
                                    resolve({ session: true, message: response.msg, msg_id: response.msg_id, attachment_url: response.attachment_url });
                                }
                                else {
                                    resolve({ session: true, message: response.msg, msg_id: response.msg_id });
                                }
                            }
                            else {
                                reject(response.msg);
                            }
                        }, (error) => {
                            console.log(error);
                            if (error.message != undefined && error.message != '' && error.message != null) {
                                reject(error.message);
                            }
                            else {
                                reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                            }
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Send the contact form
         * @param data
         */
        sendContact(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'sendcontact').then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(true);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
        * Absence delete note
        * @param data user_no, session_id
        * @param note_id Note id which will be deleted
        */
        deleteStudentNote(data, note_id) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'deleteStudentNote/' + note_id).then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(true);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /**
         * Function to sync offline attendance
         */
        syncOffileData() {
            if (!this.syncInterval) {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        if (localStorage.getItem("attendance")) {
                            let attendances = JSON.parse(localStorage.getItem("attendance"));
                            let promises = [];
                            attendances.forEach((attendance) => {
                                promises.push(this.markOfflineAttendance(attendance));
                            });
                            Promise.all(promises).then((res) => {
                                this.showToast('Attendance Synced successfully');
                                localStorage.removeItem("attendance");
                            });
                        }
                        if (localStorage.getItem("delayattendance")) {
                            let delayAttendances = JSON.parse(localStorage.getItem("delayattendance"));
                            let delayPromises = [];
                            delayAttendances.forEach((delayAttendance) => {
                                delayPromises.push(this.markOfflineDelayAttendance(delayAttendance.attendance, delayAttendance.submittedByUser));
                            });
                            Promise.all(delayPromises).then((res) => {
                                this.showToast('Delay Attendance Synced successfully');
                                localStorage.removeItem("delayattendance");
                            });
                        }
                    }
                });
                this.syncInterval = setInterval(() => {
                    this.getNetworkInformation().then((isNetworkAvailable) => {
                        if (isNetworkAvailable) {
                            if (localStorage.getItem("attendance")) {
                                let attendances = JSON.parse(localStorage.getItem("attendance"));
                                let promises = [];
                                attendances.forEach((attendance) => {
                                    promises.push(this.markOfflineAttendance(attendance));
                                });
                                Promise.all(promises).then((res) => {
                                    // console.log(res);
                                    this.showToast('Attendance Synced successfully');
                                    localStorage.removeItem("attendance");
                                });
                            }
                        }
                        if (localStorage.getItem("delayattendance")) {
                            let delayAttendances = JSON.parse(localStorage.getItem("delayattendance"));
                            let delayPromises = [];
                            delayAttendances.forEach((delayAttendance) => {
                                delayPromises.push(this.markOfflineDelayAttendance(delayAttendance.attendance, delayAttendance.submittedByUser));
                            });
                            Promise.all(delayPromises).then((res) => {
                                this.showToast('Delay Attendance Synced successfully');
                                localStorage.removeItem("delayattendance");
                            });
                        }
                    });
                }, 20000);
            }
        }
        /**
         * Offline Attendance mark post function
         * @param data user_no, session_id, cid, date, school_id, sheet
         */
        markOfflineAttendance(data) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("cid", data.cid);
                        body = body.append("date", data.date);
                        body = body.append("session_id", data.session_id);
                        body = body.append("user_no", data.user_no);
                        let index = 0;
                        Object.keys(data.removal_sheet).map((key) => {
                            body = body.append('removal_sheet[' + index + '][sid]', data.removal_sheet[key].sid);
                            body = body.append('removal_sheet[' + index + '][sem]', data.removal_sheet[key].sem);
                            index++;
                        });
                        Object.keys(data.sheet).map((key) => {
                            Object.keys(data.sheet[key]).map((sid) => {
                                body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                            });
                        });
                        this.http.post(environment.serverURL + 'saveOfflineAttendance/' + data.school_id, body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (response.success) {
                                resolve(true);
                            }
                            else {
                                this.errorALertMessage(response.msg);
                                resolve(false);
                            }
                        }, (error) => {
                            console.log(error);
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        /**
         * Offline Delay attendance mark post function
         * @param data user_no, session_id, cid, date, school_id, sheet
         * @param submittedByUser submitted by which user 1 - admin, 2- moderator
         */
        markOfflineDelayAttendance(data, submittedByUser) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        let body = new HttpParams();
                        body = body.append("cid", data.cid);
                        body = body.append("date", data.date);
                        body = body.append("session_id", data.session_id);
                        body = body.append("user_no", data.user_no);
                        Object.keys(data.sheet).map((key) => {
                            Object.keys(data.sheet[key]).map((sid) => {
                                body = body.append('sheet[' + key + '][' + sid + ']', data.sheet[key][sid]);
                            });
                        });
                        this.http.post(environment.serverURL + 'saveOfflineDelayAttendance/' + data.school_id + '/' + submittedByUser, body, { headers: header }).subscribe((res) => {
                            let response = res;
                            if (response.success == true) {
                                resolve(true);
                            }
                            else {
                                this.errorALertMessage(response.msg);
                                resolve(false);
                            }
                        }, (error) => {
                            console.log(error);
                            resolve(false);
                        });
                    }
                    else {
                        reject("الرجاء التأكد من اتصالك بالانترنت");
                    }
                });
            });
        }
        getChildrens(data) {
            return new Promise((resolve, reject) => {
                this.postRequest(data, 'getChildrens').then((response) => {
                    if (response) {
                        if (response.success) {
                            resolve(response.child);
                        }
                        else {
                            reject(response.msg);
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    if (error.message != undefined && error.message != '' && error.message != null) {
                        reject(error.message);
                    }
                    else {
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    }
                });
            });
        }
        /** Post request function.
         * @param {Object} data - contains the properties to post to API
         * @param {String} slug - contains the API method to call
         * @returns Success or error
         */
        postRequest(data, slug) {
            return new Promise((resolve, reject) => {
                this.getNetworkInformation().then((isNetworkAvailable) => {
                    if (isNetworkAvailable) {
                        let header = new HttpHeaders();
                        data.lang_code = environment.lang_code;
                        let body = this.makeObjectToUrlParams(data);
                        header.append('Content-Type', 'application/x-www-form-urlencoded');
                        this.http.post(environment.serverURL + slug, body, { headers: header }).subscribe((response) => {
                            if (response) {
                                if (response['_body'] != '') {
                                    let resObj = response;
                                    resolve(resObj);
                                }
                                else {
                                    reject("Unable to find any record");
                                }
                            }
                        }, (error) => {
                            reject(error);
                        });
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        }
        /** Function to convert object into param string
         * @param {Object} data - contains the properties to post to API
         * @returns Param string
        */
        makeObjectToUrlParams(data) {
            let body = new HttpParams();
            Object.keys(data).forEach(function (key) {
                body = body.append(key, data[key]);
            });
            return body;
        }
        /**
         * get date in yyyy-mm-dd
         * @param date date object
         */
        getFormatedDate(date) {
            let m = date.getMonth() + 1;
            return date.getFullYear() + '-' + m + '-' + date.getDate();
        }
        /**
         * Check whether network is available or not
         */
        getNetworkInformation() {
            return new Promise((resolve) => {
                if (this.platform.is('cordova')) {
                    if (this.network.type == this.network.Connection.UNKNOWN || this.network.type == this.network.Connection.NONE) {
                        resolve(false);
                    }
                    else {
                        resolve(true);
                    }
                }
                else {
                    resolve(true);
                }
            });
        }
        /**
         * Download image
         * @param url image url
         */
        downloadImage(url) {
            return new Promise((resolve, reject) => {
                this.checkStoragePermission().then(() => {
                    this.photoLibrary.saveImage(url, 'attendance').then((res) => {
                        resolve(true);
                    }).catch((err) => {
                        // console.log(err);
                        reject("حدث خطأ غير متوقع يرجى معاودة المحاولة في وقت لاحق.");
                    });
                }).catch(() => {
                });
            });
        }
        checkStoragePermission() {
            return new Promise((resolve) => {
                this.photoLibrary.requestAuthorization({ read: true, write: true }).then(() => {
                    resolve(true);
                }).catch(() => {
                    resolve(false);
                });
            });
        }
    };
    DataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            HttpClient,
            AlertController,
            Platform,
            LoadingController,
            ToastController,
            TranslateService,
            ModalController,
            Network,
            PopoverController,
            DatabaseService,
            AppRate,
            PhotoLibrary])
    ], DataService);
    return DataService;
})();
export { DataService };
//# sourceMappingURL=data.service.js.map
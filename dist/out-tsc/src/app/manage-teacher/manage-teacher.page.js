import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
let ManageTeacherPage = /** @class */ (() => {
    let ManageTeacherPage = class ManageTeacherPage {
        constructor(navCtrl, 
        // public app: App, 
        translate, dataProvider, authProvider, 
        //public events: Events,
        alertCtrl, route, zone, router, modalController) {
            this.navCtrl = navCtrl;
            this.translate = translate;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.alertCtrl = alertCtrl;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.modalController = modalController;
            this.teacherList = [];
            this.noTeacher = false;
            this.selectedTeacher = [];
            this.trimmedTeacher = [];
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    let isUpdated = this.router.getCurrentNavigation().extras.state.isUpdated;
                    if (isUpdated) {
                        this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                        this.getTeacher();
                    }
                }
            });
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
        }
        ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
                // console.log('logged in');
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.getTeacher();
            }
        }
        ionViewWillEnter() {
        }
        closeModal() {
            this.modalController.dismiss({
                'dismissed': true
            });
        }
        getTeacher() {
            let data = {
                'class_id': '',
                'school_id': this.userDetails.details.school_id,
                'user_no': this.userDetails.details.user_no
            };
            this.dataProvider.showLoading();
            this.dataProvider.getTeachers(data).then(res => {
                this.dataProvider.hideLoading();
                console.log('teschers', res);
                if (res.session) {
                    this.teacherList = res.data;
                    this.selectedTeacher = res.data;
                    if (this.selectedTeacher.length > 1) {
                        this.trimmedTeacher = this.selectedTeacher.splice(0, 20);
                    }
                    else {
                        this.trimmedTeacher = this.selectedTeacher;
                    }
                    if (res.data.length < 1) {
                        this.noTeacher = true;
                    }
                }
                else {
                    this.noTeacher = true;
                    console.log('err', res);
                }
            }, error => {
                this.noTeacher = true;
                this.dataProvider.hideLoading();
                console.log(error);
            });
        }
        doInfinite(infiniteScroll) {
            setTimeout(() => {
                this.trimmedTeacher = this.trimmedTeacher.concat(this.selectedTeacher.splice(0, 20));
                infiniteScroll.target.complete();
            }, 500);
        }
        openEditPage(teacher) {
            const navigation = {
                state: { teacher: teacher }
            };
            this.zone.run(() => {
                this.router.navigate(['edit-teacher-profile'], navigation);
            });
        }
        markTeacher(teacher, type, eve, id) {
            let is_checked = eve.srcElement.ariaChecked;
            console.log(teacher, type, id, is_checked);
            if (type == 'reg') {
                if (is_checked != "true") {
                    this.selectedTeacher[id].is_assign = 1;
                    this.selectedTeacher[id].assign_as = "regular";
                    let elem = (document.getElementById('spl' + id));
                    elem.checked = false;
                }
                else {
                    this.selectedTeacher[id].is_assign = 2;
                    this.selectedTeacher[id].assign_as = 0;
                    // this.popMarkedTeacher(data);
                }
            }
            else {
                if (is_checked != "true") {
                    this.selectedTeacher[id].is_assign = 1;
                    this.selectedTeacher[id].assign_as = "split";
                    let elem = (document.getElementById('reg' + id));
                    elem.checked = false;
                }
                else {
                    this.selectedTeacher[id].is_assign = 2;
                    this.selectedTeacher[id].assign_as = 1;
                }
            }
            console.log(this.selectedTeacher);
        }
        submitTeacher() {
            this.dataProvider.showLoading();
            let data = {
                'teachersList': this.selectedTeacher,
                'class_id': this.course.cid,
                'school_id': this.userDetails.school_id,
                'user_no': this.userDetails.user_no
            };
            this.dataProvider.updateTeacher(data).then(res => {
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
                this.dataProvider.showToast(error);
                this.dataProvider.hideLoading();
                console.log(error);
            });
        }
        deletClass() {
            this.dataProvider.showLoading();
            let data = {
                'class_id': this.course.cid,
                'school_id': this.userDetails.school_id,
                'user_no': this.userDetails.user_no
            };
            this.dataProvider.deleteClass(data).then(res => {
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
                this.dataProvider.showToast(error);
                this.dataProvider.hideLoading();
                console.log(error);
            });
        }
        filterList(event) {
            //this.selectTopic=[];
            let input = document.getElementById('search').value;
            let data = {
                'keyword': input,
                'school_id': this.userDetails.details.school_id,
                'pageno': 0
            };
            this.dataProvider.searTeacher(data).then(res => {
                console.log(res);
                if (res.data) {
                    let teacher = res.data.profile;
                    console.log(teacher, this.selectedTeacher, this.teacherList);
                    if (teacher.length > 0) {
                        this.trimmedTeacher = teacher.splice(0, 20);
                    }
                    else {
                        this.trimmedTeacher = this.selectedTeacher.splice(0, 20);
                    }
                }
            });
            // console.log(input);
            // const items = Array.from(document.getElementById('teacher').children);
            // items.forEach(item => {
            //       const shouldShow = item.textContent.toLowerCase().indexOf(input) > -1;
            //       (<HTMLElement>item).style.display = shouldShow ? 'block' : 'none';
            // });
        }
    };
    ManageTeacherPage = __decorate([
        Component({
            selector: 'app-manage-teacher',
            templateUrl: './manage-teacher.page.html',
            styleUrls: ['./manage-teacher.page.scss'],
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
    ], ManageTeacherPage);
    return ManageTeacherPage;
})();
export { ManageTeacherPage };
//# sourceMappingURL=manage-teacher.page.js.map
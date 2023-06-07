import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../../service/auth/auth.service';
import { DataService } from '../../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
let EditCalssPage = /** @class */ (() => {
    let EditCalssPage = class EditCalssPage {
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
            this.translate.get("alertmessages").subscribe((res) => {
                this.lang = res;
            });
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.navData = this.router.getCurrentNavigation().extras.state;
                    this.course = this.navData.course;
                    this.userDetails = this.navData.userDetails;
                    //   console.log(this.navData);
                    console.log('data', this.course, 'userfa', this.userDetails);
                    this.getTeacher();
                }
            });
        }
        ngOnInit() {
        }
        closeModal() {
            this.modalController.dismiss({
                'dismissed': true
            });
        }
        getTeacher() {
            let data = {
                'class_id': this.course.cid,
                'school_id': this.userDetails.school_id,
                'user_no': this.userDetails.user_no
            };
            this.dataProvider.showLoading();
            this.dataProvider.getTeachers(data).then(res => {
                this.dataProvider.hideLoading();
                console.log('teschers', res);
                if (res.session) {
                    this.teacherList = res.data;
                    this.selectedTeacher = res.data;
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
    };
    EditCalssPage = __decorate([
        Component({
            selector: 'app-edit-calss',
            templateUrl: './edit-calss.page.html',
            styleUrls: ['./edit-calss.page.scss'],
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
    ], EditCalssPage);
    return EditCalssPage;
})();
export { EditCalssPage };
//# sourceMappingURL=edit-calss.page.js.map
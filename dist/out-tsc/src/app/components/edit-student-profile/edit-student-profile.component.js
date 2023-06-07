import { __decorate, __metadata } from "tslib";
import { Component, Input, NgZone } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from '../../service/auth/auth.service';
import { DatabaseService } from '../../service/database/database.service';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
//import { DataProvider } from '../../providers/data/data';
//import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { DatabaseProvider } from '../../providers/database/database';
let EditStudentProfileComponent = /** @class */ (() => {
    let EditStudentProfileComponent = class EditStudentProfileComponent {
        constructor(popoverController, navCtrl, device, authProvider, platform, fcm, 
        // public events: Events, 
        translate, route, zone, router, dbProvider) {
            this.popoverController = popoverController;
            this.navCtrl = navCtrl;
            this.device = device;
            this.authProvider = authProvider;
            this.platform = platform;
            this.fcm = fcm;
            this.translate = translate;
            this.route = route;
            this.zone = zone;
            this.router = router;
            this.dbProvider = dbProvider;
        }
        ngOnInit() {
            this.studentName = this.student.name;
            this.classes.forEach(res => {
                if (res.name == this.student.course_name) {
                    this.studentSemester = res.cid;
                }
            });
            //	console.log(this.student,this.classes,this.studentSemester,this.studentName);
            if (localStorage.getItem("userloggedin")) {
                // console.log('logged in');
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.currentUser = this.userDetails.details.username;
                this.currentUserEmail = this.userDetails.details.email_id;
                // console.log('th',this.currentUser);
            }
            if (localStorage.getItem('earlyLogin')) {
                this.loggedinUser = JSON.parse(localStorage.getItem("earlyLogin"));
                // console.log(this.loggedinUser);
            }
        }
        closeModal() {
            this.popoverController.dismiss();
        }
        saveChanges() {
            const inputElement = document.getElementById("input");
            let i = inputElement.value;
            const select = document.getElementById("select");
            let s = select.value;
            let data = {
                student: this.student,
                studentName: i,
                studentSemester: s
            };
            //	console.log(data);
            this.popoverController.dismiss(data);
        }
        deleteClass() {
            let data = {
                student: this.student,
                deleteClass: true
            };
            this.popoverController.dismiss(data);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EditStudentProfileComponent.prototype, "student", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EditStudentProfileComponent.prototype, "classes", void 0);
    EditStudentProfileComponent = __decorate([
        Component({
            selector: 'app-edit-student-profile',
            templateUrl: './edit-student-profile.component.html',
            styleUrls: ['./edit-student-profile.component.scss'],
        }),
        __metadata("design:paramtypes", [PopoverController,
            NavController,
            Device,
            AuthService,
            Platform,
            FCM,
            TranslateService,
            ActivatedRoute,
            NgZone,
            Router,
            DatabaseService])
    ], EditStudentProfileComponent);
    return EditStudentProfileComponent;
})();
export { EditStudentProfileComponent };
//# sourceMappingURL=edit-student-profile.component.js.map
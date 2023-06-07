import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { DatabaseService } from '../service/database/database.service';
let RegisterTeacherPage = /** @class */ (() => {
    let RegisterTeacherPage = class RegisterTeacherPage {
        constructor(authProvider, dataProvider, route, router, dbProvider) {
            this.authProvider = authProvider;
            this.dataProvider = dataProvider;
            this.route = route;
            this.router = router;
            this.dbProvider = dbProvider;
            this.teacher = {};
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.user_no = this.router.getCurrentNavigation().extras.state.un;
                    this.school_id = this.router.getCurrentNavigation().extras.state.id;
                    console.log('ionViewDidLoad RegisterTeacherPage');
                    console.log("user_no" + this.user_no);
                    console.log("school_id" + this.school_id);
                }
            });
        }
        ngOnInit() {
        }
        _keyPress(event) {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        }
        registerTeacher() {
            this.dataProvider.showLoading();
            this.dataProvider.registerNewTeacher({
                "user_no": this.user_no,
                "school_id": this.school_id,
                "teacherId": this.teacher.teacherId,
                "name": this.teacher.name,
                "password": this.teacher.password
            }).then((response) => {
                this.dataProvider.hideLoading();
                this.dataProvider.showToast(response);
                // this.navCtrl.pop();
            }).catch((err) => {
                this.dataProvider.hideLoading();
                this.dataProvider.errorALertMessage(err);
            });
        }
    };
    RegisterTeacherPage = __decorate([
        Component({
            selector: 'app-register-teacher',
            templateUrl: './register-teacher.page.html',
            styleUrls: ['./register-teacher.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthService,
            DataService,
            ActivatedRoute,
            Router,
            DatabaseService])
    ], RegisterTeacherPage);
    return RegisterTeacherPage;
})();
export { RegisterTeacherPage };
//# sourceMappingURL=register-teacher.page.js.map
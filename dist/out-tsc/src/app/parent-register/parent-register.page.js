import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { DatabaseService } from '../service/database/database.service';
let ParentRegisterPage = /** @class */ (() => {
    let ParentRegisterPage = class ParentRegisterPage {
        constructor(authProvider, dataProvider, route, router, dbProvider) {
            this.authProvider = authProvider;
            this.dataProvider = dataProvider;
            this.route = route;
            this.router = router;
            this.dbProvider = dbProvider;
            this.parent = {};
            this.route.queryParams.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.user_no = this.router.getCurrentNavigation().extras.state.un;
                    this.school_id = this.router.getCurrentNavigation().extras.state.id;
                    console.log('ionViewDidLoad RegisterparentPage');
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
        registerparent() {
            this.dataProvider.showLoading();
            this.dataProvider.registerNewParent({
                "user_no": 9999,
                "school_id": 41,
                "parentId": this.parent.parentId,
                "parentName": this.parent.name,
                "studentId": this.parent.studentId,
                "studentName": this.parent.studentName,
                "password": this.parent.password
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
    ParentRegisterPage = __decorate([
        Component({
            selector: 'app-parent-register',
            templateUrl: './parent-register.page.html',
            styleUrls: ['./parent-register.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthService,
            DataService,
            ActivatedRoute,
            Router,
            DatabaseService])
    ], ParentRegisterPage);
    return ParentRegisterPage;
})();
export { ParentRegisterPage };
//# sourceMappingURL=parent-register.page.js.map
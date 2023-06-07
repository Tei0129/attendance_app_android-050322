import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DatabaseService } from '../service/database/database.service';
import { AuthService } from '../service/auth/auth.service';
let TabsPage = /** @class */ (() => {
    let TabsPage = class TabsPage {
        constructor(dbProvider, authProvider) {
            this.dbProvider = dbProvider;
            this.authProvider = authProvider;
            this.loggedin = false;
            this.isParent = false;
            this.isStudent = false;
            this.user = {
                name: "Guest",
                description: "Guest",
                image: "./assets/imgs/logo.png",
                userType: "guest"
            };
            this.authProvider.event.subscribe(res => {
                if (res) {
                    if (res.changeUser) {
                        this.dbProvider.openDataBase().then(() => {
                            if (localStorage.getItem("userloggedin")) {
                                this.loggedin = true;
                                this.setUserdetails();
                                // console.log(this.user);
                                if (this.user.userType == 'parent') {
                                    this.isParent = true;
                                }
                                else if (this.user.userType == 'student') {
                                    this.isStudent = true;
                                }
                                else {
                                    this.isStudent = false;
                                }
                            }
                        });
                    }
                }
            });
            this.dbProvider.openDataBase().then(() => {
                if (localStorage.getItem("userloggedin")) {
                    this.loggedin = true;
                    this.setUserdetails();
                    // console.log(this.user);
                    if (this.user.userType == 'parent') {
                        this.isParent = true;
                    }
                    else if (this.user.userType == 'student') {
                        this.isStudent = true;
                    }
                    else {
                        this.isStudent = false;
                    }
                }
            });
        }
        setUserdetails() {
            if (localStorage.getItem("userloggedin")) {
                let userDetail = JSON.parse(localStorage.getItem("userloggedin"));
                this.user.name = userDetail.details.first_name + " " + userDetail.details.last_name;
                this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
                this.user.description = userDetail.details.school_name;
                if (userDetail.details.user_type == '1') {
                    if (userDetail.details.school_details != '') {
                        this.user.description = userDetail.details.school_details;
                    }
                    this.user.userType = 'admin';
                }
                else if (userDetail.details.user_type == '2') {
                    this.user.userType = 'teacher';
                }
                else if (userDetail.details.user_type == '3') {
                    this.user.userType = 'moderator';
                }
                else if (userDetail.details.user_type == '4') {
                    this.user.userType = 'parent';
                }
                else if (userDetail.details.user_type == '7') {
                    this.user.userType = 'viewer';
                }
                else if (userDetail.details.user_type == '8') {
                    this.user.userType = 'student';
                }
            }
            else {
                // this.user.name = "Guest";
                // this.user.image = "./assets/imgs/logo.png";
                // this.user.userType = 'guest';
            }
        }
        ngOnInit() {
        }
    };
    TabsPage = __decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: './tabs.page.html',
            styleUrls: ['./tabs.page.scss'],
        }),
        __metadata("design:paramtypes", [DatabaseService, AuthService])
    ], TabsPage);
    return TabsPage;
})();
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map
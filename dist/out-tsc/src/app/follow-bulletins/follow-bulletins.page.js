import { __decorate, __metadata } from "tslib";
import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
//import { TabsPage } from '../tabs/tabs';
import { Camera } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentScanner } from '@ionic-native/document-scanner/ngx/';
import { FormBuilder } from "@angular/forms";
let FollowBulletinsPage = /** @class */ (() => {
    let FollowBulletinsPage = class FollowBulletinsPage {
        constructor(navCtrl, 
        //	public navParams: NavParams,  
        dataProvider, authProvider, 
        //public app: App, 
        translate, alertCtrl, camera, network, route, router, documentScanner, formBuilder, zone, platform) {
            this.navCtrl = navCtrl;
            this.dataProvider = dataProvider;
            this.authProvider = authProvider;
            this.translate = translate;
            this.alertCtrl = alertCtrl;
            this.camera = camera;
            this.network = network;
            this.route = route;
            this.router = router;
            this.documentScanner = documentScanner;
            this.formBuilder = formBuilder;
            this.zone = zone;
            this.platform = platform;
            this.allUsers = [];
            this.selectedUsers = [];
            this.userDetails = {};
            this.selectedDocument = [];
            this.inputText = true;
            this.inputUser = false;
            this.translate.get("alertmessages").subscribe((response) => {
                this.lang = response;
            });
        }
        ngOnInit() {
            this.formdata = this.formBuilder.group({});
            if (localStorage.getItem("userloggedin")) {
                this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
                this.getUsers();
            }
        }
        cahnge() {
            console.log(this.formdata);
        }
        openUser() {
            this.inputText = false;
            this.inputUser = true;
        }
        markUser(users) {
            console.log(users);
        }
        getUsers() {
            let data = {
                'school_id': this.userDetails.details.school_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getSchoolUsers(data).then(res => {
                this.dataProvider.hideLoading();
                console.log('seminar class', res);
                if (res.data) {
                    this.users = res.data;
                    if (this.users.length > 1) {
                        this.allUsers = this.users.splice(0, 20);
                    }
                    else {
                        this.allUsers = this.users;
                    }
                }
            }).catch(error => {
                this.dataProvider.hideLoading();
                this.dataProvider.showToast(error);
                console.log(error);
            });
        }
        filterList(event) {
            //this.selectTopic=[];
            let input = document.getElementById('search').value;
            console.log(input);
            let data = {
                input: input,
                school_id: this.userDetails.details.school_id
            };
            this.dataProvider.searchUser(data).then(resp => {
                if (resp.data) {
                    this.users = resp.data;
                    if (this.users.length > 1) {
                        this.allUsers = this.users.splice(0, 20);
                    }
                    else {
                        this.allUsers = this.users;
                    }
                }
            }).catch(arr => {
                console.log(arr);
            });
        }
        scanDocument() {
            let opts = {
                quality: 2.5,
                returnBase64: true
            };
            this.documentScanner.scanDoc(opts)
                .then((res) => {
                console.log(res);
                this.selectedDocument.push('data:image/jpg;base64,' + res);
            })
                .catch((error) => console.error(error));
        }
        removeImage(i) {
            this.selectedDocument.splice(i, 1);
        }
        submit() {
            if (this.checkForm()) {
                this.formdata.documents = this.selectedDocument;
                this.formdata.users = this.selectedUsers;
                this.formdata.school_id = this.userDetails.details.school_id;
                this.formdata.user_no = this.userDetails.details.user_no;
                console.log(this.formdata);
                //this.dataProvider.showLoading();
                const navigation = {
                    state: {
                        formdata: this.formdata,
                        type: 'create'
                    }
                };
                //console.log(navigation);
                this.zone.run(() => {
                    this.router.navigate(['select-bulletins-user'], navigation);
                });
            }
        }
        checkForm() {
            if (this.selectedDocument.length < 1) {
                this.dataProvider.showToast(this.lang.doc_error);
                return (false);
            }
            else if (!this.formdata.title || this.formdata.title == '') {
                this.dataProvider.showToast(this.lang.title_error);
                return (false);
            }
            else {
                return (true);
            }
        }
    };
    FollowBulletinsPage = __decorate([
        Component({
            selector: 'app-follow-bulletins',
            templateUrl: './follow-bulletins.page.html',
            styleUrls: ['./follow-bulletins.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            DataService,
            AuthService,
            TranslateService,
            AlertController,
            Camera,
            Network,
            ActivatedRoute,
            Router,
            DocumentScanner,
            FormBuilder,
            NgZone,
            Platform])
    ], FollowBulletinsPage);
    return FollowBulletinsPage;
})();
export { FollowBulletinsPage };
//# sourceMappingURL=follow-bulletins.page.js.map
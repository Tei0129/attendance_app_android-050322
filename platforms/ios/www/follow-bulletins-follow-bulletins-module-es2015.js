(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["follow-bulletins-follow-bulletins-module"],{

/***/ "AabH":
/*!***********************************************************!*\
  !*** ./src/app/follow-bulletins/follow-bulletins.page.ts ***!
  \***********************************************************/
/*! exports provided: FollowBulletinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowBulletinsPage", function() { return FollowBulletinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_follow_bulletins_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./follow-bulletins.page.html */ "gWup");
/* harmony import */ var _follow_bulletins_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-bulletins.page.scss */ "cevA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data/data.service */ "v2nD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");








//import { TabsPage } from '../tabs/tabs';





let FollowBulletinsPage = class FollowBulletinsPage {
    constructor(navCtrl, 
    //	public navParams: NavParams,  
    dataProvider, authProvider, file, 
    //public app: App, 
    translate, alertCtrl, camera, network, route, router, formBuilder, zone, platform) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.authProvider = authProvider;
        this.file = file;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.network = network;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.platform = platform;
        this.allUsers = [];
        this.selectedUsers = [];
        this.userDetails = {};
        this.formdata = new FormData();
        this.selectedDocument = [];
        this.inputText = true;
        this.inputUser = false;
        this.cameraImage64 = '';
        this.translate.get("alertmessages").subscribe((response) => {
            this.lang = response;
        });
        this.dataProvider.events.subscribe(res => {
            console.log(res);
            this.uploadStaus = res;
        });
        this.cameraImage64 = this.router.getCurrentNavigation().extras.state.cameraImage.queryParams.base64Image;
        console.log('cameraImage64 :::', this.cameraImage64);
        this.getImageToFile(this.cameraImage64).then((inputFile) => {
            console.log('getImageToFile SUCC', inputFile);
            const fileName = inputFile.fileObj.name || "UNKNOWN.PNG";
            const file = inputFile.fileObj || {};
            file['extention'] = fileName.split(".").pop();
            file['auto_created'] = true;
            file['name'] = fileName;
            file['imgBlob'] = inputFile.imgBlob;
            file['currentImgSrc'] = window.Ionic.WebView.convertFileSrc(this.cameraImage64); //updated at 18/12/2021
            this.selectedDocument.push(file);
        }).catch((e) => {
            console.log('getImageToFile ERROR', e);
        });
        console.log('in counstrucor selectedDocument', this.selectedDocument);
    }
    openImgPreview(image) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("openImgPreview==>DOc==>", image);
            const imgSrc = window.Ionic.WebView.convertFileSrc(image);
            console.log("WIUND::::: ", imgSrc);
            const alert = yield this.alertCtrl.create({
                header: 'Preview',
                cssClass: 'previewImg',
                message: '<img src="' + imgSrc + '" class="card-alert">',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getImageToFile(cropImageSrc) {
        return new Promise((resolve, reject) => {
            this.file.resolveLocalFilesystemUrl(cropImageSrc).then(entry => {
                entry.file((fileObj) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const imgBlob = new Blob([reader.result], {
                            type: fileObj.type
                        });
                        resolve({ fileObj: fileObj, imgBlob: imgBlob });
                    };
                    reader.readAsArrayBuffer(fileObj);
                }, (err) => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });
        });
    }
    ngOnInit() {
        if (localStorage.getItem("userloggedin")) {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            console.log("usrdtls::", this.userDetails);
            this.getUsers();
        }
    }
    cahnge() {
        console.log(this.formdata);
    }
    openUser() {
        if (this.checkForm()) {
            this.inputText = false;
            this.inputUser = true;
        }
    }
    /* markUser(users) {
      console.log(users);
      if (this.userDetails.details.user_no != users.user_no) {
        this.selectedUsers.push(users.user_no);
      } else {
        this.dataProvider.showToast(this.lang.same_user)
      }
  
    } */
    onSelectFiles(ev) {
        console.log('ev', ev);
        let files = ev && ev.target && ev.target.files ? ev.target.files : [];
        console.log('onSelectFiles', files);
        for (let i = 0; i < files.length; i++) {
            let file = ev.target.files[i] ? ev.target.files[i] : {};
            /*   updated on 18/12/2021  */
            console.log('currentImgSrcFILE--', file);
            if (file) {
                let ext = file.name.split(".").reverse()[0];
                //let tmpSrc =  (<any>window).URL.createObjectURL(file);
                // console.log('::tmpSrc::--',tmpSrc);
                //const imgSrc= (<any>window).Ionic.WebView.convertFileSrc(tmpSrc);
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    //resolve({fileObj : fileObj,imgBlob:imgBlob}); 
                    console.log('onloadend reader--', e);
                    file['currentImgSrc'] = reader.result;
                };
                reader.readAsDataURL(file);
                //console.log(ext);
                if (ext == 'jpg' || ext == 'png' || ext == 'doc' || ext == 'docx' || ext == 'pdf' || ext == 'jpeg') {
                    file.extention = ext;
                    this.selectedDocument.push(file);
                    console.log("slected docs::", this.selectedDocument);
                    //file['currentImgSrc']= e.target.result;
                }
                else {
                    this.dataProvider.showToast(this.lang.file_format_error);
                }
            }
        }
    }
    getUsers() {
        let data = {
            'school_id': this.userDetails.details.school_id
        };
        this.dataProvider.showLoading();
        this.dataProvider.getSchoolUsers(data).then(res => {
            this.dataProvider.hideLoading();
            //console.log('seminar class',res);
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
    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.allUsers = this.allUsers.concat(this.users.splice(0, 20));
            infiniteScroll.target.complete();
        }, 500);
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
        document.getElementById('myFileInput').click();
    }
    removeImage(i) {
        this.selectedDocument.splice(i, 1);
        //console.log(this.selectedDocument);
    }
    submit() {
        console.log("selected users ln302::", this.selectedUsers);
        this.formdata.append('school_id', this.userDetails.details.school_id);
        this.formdata.append('sended_by', this.userDetails.details.user_no);
        this.formdata.append('sended_to', this.selectedUsers);
        this.formdata.append('tital', this.tital);
        for (let k in this.selectedDocument) {
            const fileEle = this.selectedDocument[k];
            if (fileEle.hasOwnProperty('auto_created') && fileEle.hasOwnProperty('imgBlob')) {
                this.formdata.append('files[]', fileEle['imgBlob'], fileEle['name']);
            }
            else {
                this.formdata.append('files[]', fileEle);
            }
        }
        this.dataProvider.showLoading();
        // this.dataProvider.createBulletins(this.formdata).then(res=>{
        //   this.dataProvider.hideLoading();
        //     console.log(res);
        //     this.dataProvider.showToast(res.message);
        //     this.router.navigate(['bulletins']);
        //   }).catch(err=>{
        //     this.dataProvider.showToast(err.message);
        //     console.log(err);
        //   })
        this.dataProvider.createBulletins(this.formdata).subscribe(res => {
            this.dataProvider.hideLoading();
            console.log(res);
            this.router.navigate(['bulletins']);
        }, e => {
            this.dataProvider.hideLoading();
        });
    }
    checkForm() {
        if (!this.selectedDocument) {
            this.dataProvider.showToast(this.lang.doc_error);
            return (false);
        }
        else if (this.selectedDocument.length < 1) {
            this.dataProvider.showToast(this.lang.doc_error);
            return (false);
        }
        else if (!this.tital || this.tital == '') {
            this.dataProvider.showToast(this.lang.title_error);
            return (false);
        }
        else {
            return (true);
        }
    }
    //===============added on date 22/12/2021 for selecting multiple users to share bullentins=========
    selectUser(users, eve) {
        if (eve.detail.checked == true) {
            this.selectedUsers.push(users.user_no);
        }
        else {
            let iof = this.selectedUsers.indexOf(users.user_no);
            if (iof >= 0) {
                this.selectedUsers.splice(iof, 1);
            }
        }
    }
};
FollowBulletinsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
FollowBulletinsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow-bulletins',
        template: _raw_loader_follow_bulletins_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_follow_bulletins_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], FollowBulletinsPage);



/***/ }),

/***/ "Wgra":
/*!*************************************************************!*\
  !*** ./src/app/follow-bulletins/follow-bulletins.module.ts ***!
  \*************************************************************/
/*! exports provided: FollowBulletinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowBulletinsPageModule", function() { return FollowBulletinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _follow_bulletins_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./follow-bulletins-routing.module */ "Y2ji");
/* harmony import */ var _follow_bulletins_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow-bulletins.page */ "AabH");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let FollowBulletinsPageModule = class FollowBulletinsPageModule {
};
FollowBulletinsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _follow_bulletins_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowBulletinsPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ],
        declarations: [_follow_bulletins_page__WEBPACK_IMPORTED_MODULE_5__["FollowBulletinsPage"]]
    })
], FollowBulletinsPageModule);



/***/ }),

/***/ "Y2ji":
/*!*********************************************************************!*\
  !*** ./src/app/follow-bulletins/follow-bulletins-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FollowBulletinsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowBulletinsPageRoutingModule", function() { return FollowBulletinsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _follow_bulletins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow-bulletins.page */ "AabH");




const routes = [
    {
        path: '',
        component: _follow_bulletins_page__WEBPACK_IMPORTED_MODULE_3__["FollowBulletinsPage"]
    }
];
let FollowBulletinsPageRoutingModule = class FollowBulletinsPageRoutingModule {
};
FollowBulletinsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowBulletinsPageRoutingModule);



/***/ }),

/***/ "cevA":
/*!*************************************************************!*\
  !*** ./src/app/follow-bulletins/follow-bulletins.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 2.1vh;\n}\n\n.container {\n  margin: 5px;\n}\n\n.container .scan-btn-col {\n  margin-top: 25px;\n}\n\n.container .scan-btn-col .scan-btn-div {\n  width: 50%;\n  margin: 0px auto;\n}\n\n.container .view-image .selected-image img {\n  width: 100%;\n  height: 97px;\n}\n\n.container .view-image .selected-image ion-icon {\n  position: absolute;\n  font-size: 44px;\n  color: red;\n}\n\n.container .view-image .add-more {\n  background: #cccccc;\n  text-align: center;\n  color: #fff;\n  font-size: 38px;\n  min-height: 96px;\n}\n\n.container .view-image .add-more ion-icon {\n  vertical-align: middle;\n  padding-top: 26px;\n}\n\n.students:hover {\n  --color: #2979ff !important;\n  --background: aliceblue;\n}\n\n.students:hover p {\n  color: #2979ff !important;\n}\n\n.mform {\n  width: 100%;\n}\n\n.mform ion-item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.image-name {\n  position: absolute;\n  z-index: 1;\n  right: 2px;\n  bottom: 2px;\n  text-align: center;\n  font-size: 12px;\n  background: #ffffff91;\n}\n\n#myFileInput {\n  display: none;\n}\n\n.image-preview {\n  width: 300px;\n  min-height: 100px;\n}\n\n.image-preview {\n  display: none;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvbGxvdy1idWxsZXRpbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsZ0JBQUE7QUFBRDs7QUFFQTtFQUNDLFdBQUE7QUFDRDs7QUFBQztFQUNLLGdCQUFBO0FBRU47O0FBRE07RUFDSyxVQUFBO0VBQ0gsZ0JBQUE7QUFHUjs7QUFFRztFQUNLLFdBQUE7RUFDQSxZQUFBO0FBQVI7O0FBRUc7RUFDQyxrQkFBQTtFQUNHLGVBQUE7RUFDQSxVQUFBO0FBQVA7O0FBR0U7RUFFSyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZQOztBQUdPO0VBQ0Msc0JBQUE7RUFDSSxpQkFBQTtBQURaOztBQU1BO0VBQ0MsMkJBQUE7RUFDRyx1QkFBQTtBQUhKOztBQUlJO0VBQ0YseUJBQUE7QUFGRjs7QUFLQTtFQUNDLFdBQUE7QUFGRDs7QUFHQztFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNDLGtCQUFBO0VBQ0csVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtBQUREOztBQUdBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7QUFBRCIsImZpbGUiOiJmb2xsb3ctYnVsbGV0aW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdGl0bGV7XHJcblx0Zm9udC1zaXplOiAyLjF2aDtcclxufVxyXG4uY29udGFpbmVye1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdC5zY2FuLWJ0bi1jb2x7XHJcblx0XHQgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHRcdCAgICAuc2Nhbi1idG4tZGl2e1xyXG5cdFx0ICAgIFx0ICAgIHdpZHRoOiA1MCU7XHJcbiAgICBcdFx0XHRcdG1hcmdpbjogMHB4IGF1dG87XHJcblx0XHQgICAgfVxyXG5cdH1cclxuXHQudmlldy1pbWFnZXtcclxuXHRcdC5zZWxlY3RlZC1pbWFnZXtcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdCAgICB3aWR0aDogMTAwJTtcclxuICAgIFx0XHRcdFx0aGVpZ2h0OiA5N3B4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1pY29ue1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0ICAgIGZvbnQtc2l6ZTogNDRweDtcclxuXHRcdFx0ICAgIGNvbG9yOiByZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5hZGQtbW9yZXtcclxuXHRcdFx0ICAgIC8vbWFyZ2luOiA1cHg7XHJcblx0XHRcdCAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG5cdFx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgY29sb3I6ICNmZmY7XHJcblx0XHRcdCAgICBmb250LXNpemU6IDM4cHg7XHJcblx0XHRcdCAgICBtaW4taGVpZ2h0OiA5NnB4O1xyXG5cdFx0XHQgICAgaW9uLWljb257XHJcblx0XHRcdCAgICBcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdCAgICBcdCAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuXHRcdFx0ICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLnN0dWRlbnRzOmhvdmVye1xyXG5cdC0tY29sb3I6ICMyOTc5ZmYgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgcHtcclxuXHRcdGNvbG9yOiAjMjk3OWZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1mb3Jte1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGlvbi1pdGVte1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbi5pbWFnZS1uYW1le1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOTE7XHJcbn1cclxuXHJcbiNteUZpbGVJbnB1dCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3e1xyXG5cdHdpZHRoOjMwMHB4O1xyXG5cdG1pbi1oZWlnaHQ6MTAwcHg7XHJcbn1cclxuLmltYWdlLXByZXZpZXd7XHJcblx0ZGlzcGxheTpub25lO1xyXG5cdHdpZHRoOjEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "gWup":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/follow-bulletins/follow-bulletins.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button>\n  \t\t</ion-back-button>\n  \t</ion-buttons>\n\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button>\n  \t\t</ion-menu-button>\n  \t</ion-buttons>\n    <ion-title>{{'bulletin.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n\t<div class=\"container\" *ngIf=\"inputText\">\n\t\t<ion-row class=\"scan-btn-col\">\n\t\t\t<form enctype=\"multipart/formdata\" class=\"mform\">\n\t\t\t\t<ion-item style=\"width: 100%;\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'bulletin.input_title' | translate}}</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"tital\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{'bulletin.placeholder' | translate}}\" ></ion-input>\t\n\t\t\t\t<!-- [(ngModel)]=\"formdata.title\" -->\t\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item style=\"display: none;\">\n\t\t\t\t\t<input type=\"file\" id=\"myFileInput\" (change)=\"onSelectFiles($event)\"  multiple=\"true\" />\n\t\t\t\t</ion-item>\n\t\t\t\t<!-- new code for image preview -->\n\t\t\n\t\t\t</form>\n\t\t\t<!-- <div class=\"scan-btn-div\">\n\t\t\t\t<ion-button expand=\"block\" color=\"primary\" shape=\"round\" (click)=\"scanDocument()\">\n\t\t\t\t\t{{'bulletin.select_file' | translate}}\n\t\t\t\t\t <ion-icon name=\"scan-outline\"></ion-icon> \n\t\t\t\t</ion-button>\n\t\t\t</div> -->\n\t\t</ion-row>\n\t\t<ion-row class=\"view-image\" *ngIf=\"selectedDocument.length>0\">\n\t\t\t<ion-col size=\"4\" *ngFor=\"let doc of selectedDocument; let i=index\" class=\"selected-image\" (click)=\"openImgPreview(doc.currentImgSrc)\">\t\t\t\t\n\t\t\t\t<ion-icon name=\"close-outline\" (click)=\"removeImage(i)\"></ion-icon>\n\t\t\t\t<img src=\"assets/imgs/pdf.png\" *ngIf=\"doc.extention=='pdf'\">\n\t\t\t\t<img src=\"assets/imgs/doc.png\" *ngIf=\"doc.extention=='docx'||doc.extention=='doc'|| doc.extention=='txt'\">\n\t\t\t\t<img [src]=\"doc.currentImgSrc\" *ngIf=\"doc.extention=='png' || doc.extention=='jpg' || doc.extension=='jpeg'\">\n\t\t\t\t<img src=\"assets/imgs/pdssf.png\" *ngIf=\"doc.extention!='png' && doc.extention!='jpg' && doc.extention!='docx'&& doc.extention!='txt'&& doc.extention!='pdf'\">\n\t\t\t\t<span class=\"image-name\">{{doc.name}}</span>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<div class=\"add-more\" (click)=\"scanDocument()\">\n\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n\t<div *ngIf=\"inputUser\">\n\t\t<ion-item>\n\t\t\t <ion-searchbar style=\"padding-top: 15px;\" mode=\"ios\" placeholder=\"{{'search.search_user' | translate}}\" id=\"search\" (keyup)=\"filterList($event)\"></ion-searchbar>\n\t\t</ion-item>\n\t\t<ion-list *ngIf=\"uploadStaus\">\n\t        <ion-list-header>\n\t          <ion-label>{{uploadStaus}}%</ion-label>\n\t        </ion-list-header>\n\t        <ion-range min=\"0\" max=\"100\" step=\"2\" [value]=\"uploadStaus\">\n\t\t      <ion-icon slot=\"end\" name=\"cloud-upload-outline\"></ion-icon>\n\t\t      <ion-icon size=\"small\" slot=\"start\"  name=\"cloud-upload\"></ion-icon>\n\t\t    </ion-range>\n\t        <!-- <ion-progress-bar value=\"0.{{uploadStaus}}\"></ion-progress-bar> -->\n\t    </ion-list>\n\t\t<div  id=\"students\" *ngIf=\"!uploadStaus\"> \n\t\t<!-- <ion-virtual-scroll [items]=\"students\" approxItemHeight=\"320px\"> -->\n\t\t<ion-card  class=\"text-left body-font card heigt-min\"  *ngFor=\"let users of allUsers\">\t\t\n\t\t\t<ion-item class=\"students\">\n\t\t\t\t<ion-checkbox slot=\"end\"  (ionChange)=\"selectUser(users,$event,i)\"></ion-checkbox>\n\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t<img [src]=\"users.pic\"  onerror=\"this.onerror=null;this.src='assets/imgs/logo.png';\">\n\t\t\t\t</ion-avatar>\n\t\t\t    <ion-label>\n\t\t\t    \t<h4>{{users.first_name}}</h4>\n\t\t\t    \t<p>{{users.username}}</p> \n\t\t\t    </ion-label>\n\t\t\t</ion-item>\n\t\t</ion-card> \n\t\t\t<!-- </ion-virtual-scroll> -->\n\t</div>\n\t\t\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n\t    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\t</div>\n\t\n\n</ion-content>\n<ion-footer style=\"background: white;\">\n\t<ion-button [disabled]=\"selectedDocument.length==0\" *ngIf=\"!inputUser\" expand=\"block\" color=\"primary\" shape=\"round\" (click)=\"openUser()\">\n\t\t\t\t\t{{'bulletin.select_user' | translate}}\n\t</ion-button>\n\t<ion-button *ngIf=\"inputUser\" expand=\"block\" color=\"primary\" shape=\"round\" (click)=\"submit()\" [disabled]=\"!selectedUsers\" >\n\t\t\t{{'bulletin.share' | translate}}\n\t</ion-button>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=follow-bulletins-follow-bulletins-module-es2015.js.map
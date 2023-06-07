(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sendmessage-sendmessage-module"], {
    /***/
    "8Jp3":
    /*!***************************************************!*\
      !*** ./src/app/sendmessage/sendmessage.module.ts ***!
      \***************************************************/

    /*! exports provided: SendmessagePageModule */

    /***/
    function Jp3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendmessagePageModule", function () {
        return SendmessagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _sendmessage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sendmessage-routing.module */
      "RbdT");
      /* harmony import */


      var _sendmessage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sendmessage.page */
      "UU7i");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var SendmessagePageModule = function SendmessagePageModule() {
        _classCallCheck(this, SendmessagePageModule);
      };

      SendmessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sendmessage_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendmessagePageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
        declarations: [_sendmessage_page__WEBPACK_IMPORTED_MODULE_6__["SendmessagePage"]]
      })], SendmessagePageModule);
      /***/
    },

    /***/
    "C5b9":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sendmessage/sendmessage.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function C5b9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\n  <ion-toolbar>\n   \t<ion-buttons slot=\"end\" class=\"back-btn\">\n      <ion-icon name=\"arrow-back-outline\" (click)=\"moveBack()\"></ion-icon>\n   \t</ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-right>{{'sendmsg.title'| translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content padding class=\"right-direction\" mode=\"md\">\n  <form #privateMessage='ngForm' class=\"fform\">\n    <ion-row text-right>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.parent'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.parents\" name=\"parent\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.mod'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding text-right>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.mod\" name=\"moderator\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <ion-row text-right padding-top>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.users'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.others\" name=\"specificuser\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"5\" align-self-center text-right>\n        {{'sendmsg.admin'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.admin\" name=\"admin\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <ion-row text-right padding-top>\n      <ion-col size=\"5\" align-self-center>\n        {{'sendmsg.viewer'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding text-right>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.viewer\" name=\"viewer\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"5\" align-self-center>\n        {{'sendmsg.teachers'| translate}}\n      </ion-col>\n      <ion-col size=\"1\" align-self-center no-padding text-right>\n        <ion-checkbox [(ngModel)]=\"mail.send_to.tech\" name=\"teacher\"></ion-checkbox>\n      </ion-col>\n    </ion-row>\n    <div class=\"subject\" *ngIf=\"mail.send_to.others\">\n      <!-- <ion-item>\n        <ion-input type=\"email\" class=\"message\" name=\"useremail\" placeholder=\"{{'sendmsg.emai_user_id'| translate}}\"\n          [(ngModel)]=\"mail.one_user_email\" text-right></ion-input>\n      </ion-item> -->\n      <ion-item (click)=\"selectUserpage()\" >\n          <ion-label>{{'sendmsg.select_user'| translate}}</ion-label>\n          <p *ngIf=\"this.mail.selected_users?.length==1\">{{selectedUsersShow[0]}}</p>\n          <p *ngIf=\"this.mail.selected_users?.length > 1\">{{selectedUsersShow[0]+',...'}}</p>\n          <!-- <ionic-selectable style=\"height: 4vh;\" \n            [(ngModel)]=\"selectedUsers\"\n            [ngModelOptions]=\"{standalone: true}\"\n            [isMultiple]=\"true\"\n            [items]=\"users\"\n            itemValueField=\"user_no\"\n            itemTextField=\"first_name\"\n            (onChange)=\"portChange($event)\"\n            [canSearch]=\"true\">\n          </ionic-selectable> -->\n        </ion-item>\n    </div>\n    <!-- <div class=\"subject\">\n      <ion-item>\n        <ion-input type=\"text\" class=\"message\" placeholder=\"{{'sendmsg.noti_title'| translate}}\"\n          [(ngModel)]=\"mail.title\" text-right name=\"title\" #title='ngModel' required maxlength=\"35\"></ion-input>\n      </ion-item>\n    </div> -->\n    <div class=\"subject\">\n      <ion-item>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"{{'sendmsg.notification'| translate}}\"\n          [(ngModel)]=\"mail.notification\" text-right name=\"msg_body\" #msg_body='ngModel' required maxlength=\"140\">\n        </ion-textarea>\n      </ion-item>\n      <ion-button class=\"attachment\" icon-only  (click) = \"takePicture()\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"attach-image\" *ngIf = \"ticketImage != ''\">\n      <img style=\"width: 41px\" src= \"assets/imgs/image.png\"/>\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n <ion-button  expand=\"full\" class=\"send-btn\" color=\"dark\"\n    (click)=\"sendMessage()\"><ion-spinner name=\"crescent\" *ngIf=\"show_spinner\"></ion-spinner><span *ngIf=\"!show_spinner\"> {{'sendmsg.send_msg'| translate}} </span></ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    "RbdT":
    /*!***********************************************************!*\
      !*** ./src/app/sendmessage/sendmessage-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SendmessagePageRoutingModule */

    /***/
    function RbdT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendmessagePageRoutingModule", function () {
        return SendmessagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sendmessage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sendmessage.page */
      "UU7i");

      var routes = [{
        path: '',
        component: _sendmessage_page__WEBPACK_IMPORTED_MODULE_3__["SendmessagePage"]
      }];

      var SendmessagePageRoutingModule = function SendmessagePageRoutingModule() {
        _classCallCheck(this, SendmessagePageRoutingModule);
      };

      SendmessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SendmessagePageRoutingModule);
      /***/
    },

    /***/
    "UU7i":
    /*!*************************************************!*\
      !*** ./src/app/sendmessage/sendmessage.page.ts ***!
      \*************************************************/

    /*! exports provided: SendmessagePage */

    /***/
    function UU7i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendmessagePage", function () {
        return SendmessagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sendmessage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sendmessage.page.html */
      "C5b9");
      /* harmony import */


      var _sendmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sendmessage.page.scss */
      "yrED");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR"); // import { threadId } from 'worker_threads';


      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"]; // import{SelectMessageUserPage} from '../common-modal/select-message-user/select-message-user.page'
      // import { ModalController } from '@ionic/angular';

      var SendmessagePage = /*#__PURE__*/function () {
        /**
         *
         * @param navCtrl Navigation controller
         * @param translate used from translation messages
         * @param dataProvider data provider
         * @param camera used for taking images
         * @param alertCtrl use for alert popup
         */
        function SendmessagePage(navCtrl, translate, dataProvider, camera, zone, router, route, transfer, file, // public modalController: ModalController,
        alertCtrl) {
          var _this = this;

          _classCallCheck(this, SendmessagePage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.dataProvider = dataProvider;
          this.camera = camera;
          this.zone = zone;
          this.router = router;
          this.route = route;
          this.transfer = transfer;
          this.file = file;
          this.alertCtrl = alertCtrl;
          this.mail = {
            send_to: {
              parents: false,
              mod: false,
              tech: false,
              others: false,
              admin: false,
              viewer: false
            },
            title: '',
            notification: '',
            useremailorid: '',
            selected_users: []
          };
          this.lang = {};
          this.userDetails = {};
          this.ticketImage = '';
          this.users = [];
          this.selectedUsersShow = [];
          this.formdata = new FormData();
          this.show_spinner = false; // this.route.queryParams.subscribe(params => {
          //     if (this.router.getCurrentNavigation().extras.state) {
          //          this.mail.selected_users = this.router.getCurrentNavigation().extras.state; 
          //     }
          //   });

          this.dataProvider.selectedUsers.subscribe(function (res) {
            _this.mail.selected_users = res.selectedUsers;
            _this.selectedUsersShow = res.selectedUsersShow;
            console.log(_this.mail.selected_users);
            console.log(res); // this.getUsers();    
          });
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
        }
        /**
         * Ionic navigation event will run when page is loaded
         */


        _createClass(SendmessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
            this.ticketImage = '';
            this.getUsers();
          }
        }, {
          key: "selectUserpage",
          value: function selectUserpage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var navigation;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      navigation = {
                        state: this.users,
                        queryParams: {
                          selectedUsers: this.mail.selected_users,
                          selectedUsersShow: this.selectedUsersShow
                        }
                      };
                      this.zone.run(function () {
                        _this2.router.navigate(['select-message-user'], navigation);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Used to send the message
           */

        }, {
          key: "moveBack",
          value: function moveBack() {
            this.router.navigate(['tabs/messages']);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this3 = this;

            var data = {
              'school_id': this.userDetails.details.school_id
            };
            this.dataProvider.showLoading();
            this.dataProvider.getAllSchoolUsers(data).then(function (res) {
              _this3.dataProvider.hideLoading();

              console.log('seminar class', res);

              if (res.data) {
                _this3.users = res.data;
              }
            })["catch"](function (error) {
              _this3.dataProvider.hideLoading();

              _this3.dataProvider.showToast(error);

              console.log(error);
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this4 = this;

            if (!this.mail.send_to.parents && !this.mail.send_to.mod && !this.mail.send_to.tech && !this.mail.send_to.others && !this.mail.send_to.admin && !this.mail.send_to.viewer) {
              this.dataProvider.showToast(this.lang.select_user);
            } // else if (this.mail.title && this.mail.title.trim() == '') {
            //   this.dataProvider.showToast(this.lang.enter_title);
            // } else if(this.mail.title.length > 35){
            //   this.dataProvider.showToast(this.lang.max_title);
            // }
            else if (this.mail.notification && this.mail.notification.trim() == '') {
                this.dataProvider.showToast(this.lang.enter_noti_desc);
              } else if (this.mail.notification.length > 140) {
                this.dataProvider.showToast(this.lang.max_body);
              } else {
                if (this.mail.send_to.others && this.mail.selected_users.length < 1) {
                  this.dataProvider.showToast(this.lang.enter_email_userid);
                } else if (this.mail.send_to.others) {
                  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  var isEmail = re.test(this.mail.one_user_email);

                  if (this.mail.selected_users.length > 0) {
                    // check for email of selected user
                    var isemailvar = 1;
                    var data = {
                      user_no: this.userDetails.details.user_no,
                      session_id: this.userDetails.session_id,
                      notification: this.mail,
                      isemail: isemailvar,
                      school_id: this.userDetails.details.school_id
                    };
                    this.show_spinner = true;
                    this.startUpload(this.ticketImage, data);
                  } else {
                    // if entered email is user id
                    // this.dataProvider.showLoading();
                    this.show_spinner = true;
                    this.dataProvider.postRequest({}, 'exist_usern/' + this.mail.one_user_email).then(function (response) {
                      if (response.success) {
                        if (response.user.username) {
                          var _isemailvar = 0;
                          var _data = {
                            user_no: _this4.userDetails.details.user_no,
                            session_id: _this4.userDetails.session_id,
                            notification: _this4.mail,
                            isemail: _isemailvar,
                            school_id: _this4.userDetails.details.school_id
                          };

                          _this4.startUpload(_this4.ticketImage, _data);
                        } else {
                          // this.dataProvider.hideLoading();
                          _this4.show_spinner = false;

                          _this4.dataProvider.showToast(_this4.lang.user_not_exist);
                        }
                      }
                    });
                  }
                } else {
                  var _isemailvar2 = 2;
                  this.show_spinner = true;
                  var _data2 = {
                    user_no: this.userDetails.details.user_no,
                    session_id: this.userDetails.session_id,
                    notification: this.mail,
                    isemail: _isemailvar2,
                    school_id: this.userDetails.details.school_id
                  };
                  this.startUpload(this.ticketImage, _data2); // this.uploadMessage(data,this.ticketImage);
                }
              }
          }
        }, {
          key: "uploadToServer",
          value: function uploadToServer(data, imgBlob, fileName) {
            var _this5 = this;

            console.log(data);
            this.formdata.append('user_no', data.user_no);
            this.formdata.append('session_id', this.userDetails.session_id);
            Object.keys(data.notification).map(function (key) {
              if (key == 'send_to') {
                Object.keys(data.notification[key]).map(function (send_to_key) {
                  _this5.formdata.append('notification[' + key + '][' + send_to_key + ']', data.notification[key][send_to_key]);
                });
              } else {
                _this5.formdata.append('notification[' + key + ']', data.notification[key]);
              }
            });
            this.formdata.append('isemail', data.isemail);
            this.formdata.append('school_id', this.userDetails.details.school_id);

            if (imgBlob) {
              this.formdata.append('file', imgBlob, fileName);
            }

            console.log(this.formdata); // this.dataProvider.showLoading();

            this.dataProvider.sendMessage(this.formdata, data.school_id).subscribe(function (res) {
              // this.dataProvider.hideLoading();
              _this5.show_spinner = false;
              console.log("Success", res);

              _this5.dataProvider.showToast(_this5.lang.msg_sent_success);

              _this5.mail = {
                send_to: {
                  parents: false,
                  mod: false,
                  tech: false,
                  others: false,
                  admin: false,
                  viewer: false
                },
                title: '',
                notification: '',
                useremailorid: ''
              };
              _this5.ticketImage = '';

              _this5.router.navigate(['tabs/messages']);
            }, function (e) {
              // this.dataProvider.hideLoading();
              _this5.show_spinner = false;
              _this5.mail = {
                send_to: {
                  parents: false,
                  mod: false,
                  tech: false,
                  others: false,
                  admin: false,
                  viewer: false
                },
                title: '',
                notification: '',
                useremailorid: ''
              };
              _this5.ticketImage = '';

              _this5.router.navigate(['tabs/messages']);

              _this5.dataProvider.showToast(_this5.lang.usnexpectedError);
            });
          }
        }, {
          key: "startUpload",
          value: function startUpload(imgEntry, data) {
            var _this6 = this;

            // this.dataProvider.showLoading();
            if (imgEntry) {
              this.file.resolveLocalFilesystemUrl(imgEntry).then(function (entry) {
                entry.file(function (file) {
                  return _this6.readFile(file, data);
                });
              })["catch"](function (err) {// this.presentToast('Error while reading file.');
              });
            } else {
              this.uploadToServer(data);
            }
          }
        }, {
          key: "readFile",
          value: function readFile(file, data) {
            var _this7 = this;

            console.log('file', file);
            var reader = new FileReader();

            reader.onload = function () {
              var formData = new FormData();
              var imgBlob = new Blob([reader.result], {
                type: file.type
              });
              console.log('imgBlob', imgBlob, file.name);

              _this7.uploadToServer(data, imgBlob, file.name); // formData.append('file', imgBlob, file.name);
              // this.uploadImageData(formData);

            };

            reader.readAsArrayBuffer(file);
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            var user = [];
            console.log(event);
            event.value.forEach(function (res) {
              console.log(res);
              user.push(res.user_no);
            });
            console.log(user);
            this.mail.selected_users = user;
            this.getUsers();
          }
          /**
           * alert to show image take choice
           */

        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: this.lang.image_option,
                        buttons: [{
                          text: this.lang.camera,
                          handler: function handler() {
                            _this8.openCamera();
                          }
                        }, {
                          text: this.lang.gallery,
                          handler: function handler() {
                            _this8.openGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * mobile camera to take image
           */

        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this9 = this;

            var options = {
              quality: 100,
              sourceType: this.camera.PictureSourceType.CAMERA
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this9.ticketImage = imageData;
                _this9.mediaType = 'image/jpg';
              }
            });
          }
          /**
           * Open gallery to take image
           */

        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this10 = this;

            var options = {
              quality: 100,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              if (imageData) {
                _this10.ticketImage = imageData;
                _this10.mediaType = 'image/jpg';
              }
            });
          }
        }]);

        return SendmessagePage;
      }();

      SendmessagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      SendmessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sendmessage',
        template: _raw_loader_sendmessage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sendmessage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], SendmessagePage);
      /***/
    },

    /***/
    "yrED":
    /*!***************************************************!*\
      !*** ./src/app/sendmessage/sendmessage.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function yrED(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-sendmessage:host .back-btn ion-icon {\n  font-size: 25px;\n}\napp-sendmessage:host .fform {\n  margin: 8px;\n}\napp-sendmessage:host .subject {\n  border: 1px solid grey;\n  margin: 10px 0;\n  position: relative;\n}\napp-sendmessage:host ion-row {\n  text-align: right;\n}\napp-sendmessage:host .send-btn {\n  height: 60px;\n}\napp-sendmessage:host .checkbox-inner {\n  position: absolute !important;\n  left: 8px !important;\n  height: 14px !important;\n  top: 0 !important;\n}\napp-sendmessage:host .attachment {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  --background: unset;\n  color: black;\n  float: right;\n  --box-shadow: unset;\n  z-index: 2;\n}\napp-sendmessage:host .attach-image {\n  width: 100%;\n  height: 100px;\n  text-align: right;\n}\napp-sendmessage:host .attach-image img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlbmRtZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGVBQUE7QUFEWjtBQUlJO0VBQ0ksV0FBQTtBQUZSO0FBSUk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZSO0FBSUk7RUFDUSxpQkFBQTtBQUZaO0FBSUk7RUFDSSxZQUFBO0FBRlI7QUFJSTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDSSxtQkFBQTtFQUNSLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSSxVQUFBO0FBRlI7QUFJSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUdRO0VBQ0ksWUFBQTtBQURaIiwiZmlsZSI6InNlbmRtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1zZW5kbWVzc2FnZTpob3N0IHtcclxuICAgIC5iYWNrLWJ0bntcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mZm9ybXtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgIH1cclxuICAgIC5zdWJqZWN0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuc2VuZC1idG57XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94LWlubmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaG1lbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLS1ib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaC1pbWFnZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=sendmessage-sendmessage-module-es5.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
    /***/
    "/u5v":
    /*!*************************************!*\
      !*** ./src/app/news/news.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function u5v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-news:host ion-card {\n  margin: 9px;\n}\napp-news:host ion-card .location-sec {\n  width: 70%;\n  float: right;\n  font-size: 10px;\n}\napp-news:host ion-card ion-item h2 {\n  font-size: 13px;\n}\napp-news:host ion-card .time-sec {\n  color: #111;\n  width: 30%;\n  float: right;\n  text-align: left;\n  direction: ltr;\n  font-size: small;\n}\napp-news:host ion-card ion-card-content p {\n  color: #666 !important;\n}\napp-news:host ion-card ion-icon {\n  font-size: 2em !important;\n}\napp-news:host ion-card .like-icon {\n  margin: 0 0 8px 8px;\n}\napp-news:host ion-card .video {\n  width: 100%;\n  height: 33vh;\n}\napp-news:host ion-card .video img {\n  width: 100%;\n}\napp-news:host ion-card .video video {\n  height: 100%;\n  width: 100%;\n}\napp-news:host .share-btn {\n  color: #797979;\n}\n.county {\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n}\n.county ion-item {\n  width: 100%;\n  --background: #f8f8f8;\n  font-size: 17px;\n}\n.body {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsV0FBQTtBQUFOO0FBQ1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDWjtBQUVVO0VBQ0UsZUFBQTtBQUFaO0FBR1E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURaO0FBR1E7RUFDSSxzQkFBQTtBQURaO0FBR1E7RUFDSSx5QkFBQTtBQURaO0FBR1E7RUFDSSxtQkFBQTtBQURaO0FBR1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURaO0FBRVk7RUFDRSxXQUFBO0FBQWQ7QUFFYTtFQUNHLFlBQUE7RUFDQSxXQUFBO0FBQWhCO0FBS0k7RUFDUSxjQUFBO0FBSFo7QUFNQTtFQUNRLGVBQUE7RUFDSixXQUFBO0VBQ0EsV0FBQTtBQUhKO0FBSUk7RUFDSSxXQUFBO0VBQ0oscUJBQUE7RUFDSSxlQUFBO0FBRlI7QUFLQTtFQUNJLGdCQUFBO0FBRkoiLCJmaWxlIjoibmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbmV3czpob3N0IHtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICBtYXJnaW46IDlweDtcclxuICAgICAgICAubG9jYXRpb24tc2VjIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWUtc2VjIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpa2UtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZpZGVve1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzM3ZoO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB2aWRlb3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNoYXJlLWJ0bntcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMjEsIDEyMSwgMTIxKTtcclxuICAgIH1cclxufVxyXG4uY291bnR5e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbn1cclxuLmJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "5KHY":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function KHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button icon-only (click)=\"selectNewsCountry()\">\n        <ion-icon name=\"help-circle-outline\" ></ion-icon>\n      </ion-button> -->\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"userDetails.details\">\n      <ion-button icon-only (click)=\"addNews()\" *ngIf=\"userDetails.details.user_type != '4'\">\n        <ion-icon name=\"add-outline\" style=\"font-size: 26px;\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title text-right>{{'news.pagetitle' | translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"county\">\n\n        <ion-item>\n          <ion-label>{{'location.select_country'| translate}}</ion-label>\n          <ionic-selectable\n            [(ngModel)]=\"selected_country\"\n            [items]=\"country\"\n            itemValueField=\"code\"\n            itemTextField=\"name\"\n            (onChange)=\"portChange($event)\"\n            [canSearch]=\"true\">\n          </ionic-selectable>\n        </ion-item>\n  </ion-row>\n  <div *ngIf = \"allNews?.length > 0\" class=\"body\">\n    <ion-card *ngFor=\"let news of allNews\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"news.school_logo;else app_logo\" [src]=\"news.school_logo\" onerror=\"this.onerror=null;this.src='./assets/imgs/logo.png';\" />\n          <ng-template #app_logo><img src=\"./assets/imgs/logo.png\" /></ng-template>\n        </ion-avatar>\n        <ion-label>\n\t        <h2>{{news.school_name}}</h2>\n\t        <p class=\"location-sec\">{{news.detail}}</p>\n\t        <p class=\"time-sec\">{{news.ago}}</p>\n\t    </ion-label>\n      </ion-item>\n      <ion-card-content>\n        <div (click)=\"openUrl($event)\" [innerHtml]=\"news.content\"></div>\n      </ion-card-content>\n      <img [src]=\"news.news_image\" *ngIf=\"news.news_image\" imageViewer (click)=\"showPhoto(news.news_image)\">\n      <div class=\"video\" color=\"menu-color\" *ngIf=\"news.video_url != ''\">\n        <video #videoPlayer controls [src]=\"news.video_url\" class=\"videoPlayer\" poster=\"https://webapp.ws/att-admin/uploads/no-thumb.jpg\"></video>\n      </div>\n      <ion-row class=\"right-direction\">\n        <ion-col align-self-center text-left>\n          <ion-button  icon-only clear small class=\"share-btn btn-primary\" color=\"menu-color\" (click)=\"share(news)\">\n            <ion-icon name=\"share-social\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n        <ion-col align-self-center text-right>\n          <ion-button  icon-only clear small class=\"btn-primary\" color=\"menu-color\" (click)=\"changeLike(news)\">\n            <div class=\"total-likes\" class=\"share-btn\">{{news.total_likes}}</div>\n            <ion-icon name=\"thumbs-up\" [ngStyle]=\"{'color': news.already_like == 'true'? '#2979ff':'#797979'}\" class=\"like-icon\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-label item-center class=\"norecord-found\" *ngIf=\"allNews?.length == 0\">{{noDataFound}}</ion-label>\n  <div item-center class=\"students\" id=\"students\" *ngIf=\"show_loading\"> \n    <ion-card  class=\"text-left body-font card heigt-min\" *ngFor=\"let dummy of ' '.repeat(20).split(''), let x = index\">\t\t\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h4><ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text></h4>\n          <p><ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text></p>\n        </ion-label>\n      </ion-item>\n    </ion-card> \n    </div>\n</ion-content> ";
      /***/
    },

    /***/
    "7iu3":
    /*!***********************************!*\
      !*** ./src/app/news/news.page.ts ***!
      \***********************************/

    /*! exports provided: NewsPage */

    /***/
    function iu3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
        return NewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./news.page.html */
      "5KHY");
      /* harmony import */


      var _news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./news.page.scss */
      "/u5v");
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");
      /* harmony import */


      var _service_location_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../service/location/location.service */
      "9XNo");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../service/geo-service/geo-service */
      "G+rw");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var NewsPage = /*#__PURE__*/function () {
        /**
         *
         * @param app   Root app
         * @param dataProvider  Use for getting data from the API
         * @param authProvider  Use for authentication purpose
         * @param translate used for translation service
         * @param platform to check on which platform app is running
         * @param iap used to open the weblink within the app
         * @param socialSharing for sharing on social media
         */
        function NewsPage(dataProvider, platform, iap, // public app: IonApp,
        geo, authProvider, translate, socialSharing, photoViewer, router, alertController, locationSrevice, screen, storage) {
          var _this = this;

          _classCallCheck(this, NewsPage);

          this.dataProvider = dataProvider;
          this.platform = platform;
          this.iap = iap;
          this.geo = geo;
          this.authProvider = authProvider;
          this.translate = translate;
          this.socialSharing = socialSharing;
          this.photoViewer = photoViewer;
          this.router = router;
          this.alertController = alertController;
          this.locationSrevice = locationSrevice;
          this.screen = screen;
          this.storage = storage;
          this.allNews = [];
          this.originalNews = [];
          this.userDetails = {};
          this.noDataFound = '';
          this.lang = {};
          this.location_lang = {};
          this.selected_country = {
            code: "",
            name: "Worldwide"
          };
          this.show_loading = false;
          this.translate.get("alertmessages").subscribe(function (res) {
            _this.lang = res;
          });
          this.translate.get("location").subscribe(function (res) {
            _this.location_lang = res;
          });
          this.dataProvider.language.subscribe(function (resq) {
            _this.translate.get("alertmessages").subscribe(function (res) {
              _this.lang = res;
            });

            _this.translate.get("location").subscribe(function (res) {
              _this.location_lang = res;
            });
          });
          this.storage.get('language').then(function (res) {
            if (res == 'en') {
              _this.country = _this.geo.getEnCountries();
            } else {
              _this.country = _this.geo.getAllCountries();
            }
          });
          console.log(this.country);
          this.authProvider.event.subscribe(function (res) {
            //  console.log('change',res)
            if (res.changeUser) {
              _this.ngOnInit(false);
            }
          });
        }

        _createClass(NewsPage, [{
          key: "showPhoto",
          value: function showPhoto(url) {
            this.photoViewer.show(url);
          }
        }, {
          key: "addNews",
          value: function addNews() {
            this.router.navigate(['post-news']);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var start = 0;
            var newsPerPage = 0;

            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              console.log(this.userDetails);
            }

            this.geo.getMyLocation().then(function (resp) {
              console.log(resp.countrycode);

              if (resp != '') {
                _this2.country_code = resp.countryCode;
              } else {
                _this2.dataProvider.showToast(_this2.location_lang.location_error);
              }
            }); // this.locationSrevice.checkGPSPermission(resp=>{
            // this.country_code=resp.countryCode;
            // this.getNews(start, newsPerPage,resp.countryCode);
            // },e=>{
            //  this.dataProvider.showToast(this.location_lang.location_error);
            //   console.log(e);
            // });

            this.show_loading = true;
            this.getNews(start, newsPerPage, '', loading);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.platform.is("cordova")) {
              this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(function () {})["catch"](function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            console.log(event);
            var start = 0;
            var newsPerPage = 0;

            if (event.value.code) {
              this.getNews(start, newsPerPage, event.value.code);
            } else {
              this.getNews(start, newsPerPage, null);
            }
          }
        }, {
          key: "selectNewsCountry",
          value: function selectNewsCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var start, newsPerPage, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      start = 0;
                      newsPerPage = 0;
                      _context.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: this.location_lang.select_country,
                        message: this.location_lang.select_country_subheading,
                        mode: 'ios',
                        buttons: [{
                          text: this.location_lang.local,
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            _this3.getNews(start, newsPerPage, _this3.country_code);

                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: this.location_lang.international,
                          handler: function handler() {
                            _this3.getNews(start, newsPerPage, null);

                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 4:
                      alert = _context.sent;
                      _context.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "urlify",
          value: function urlify(text) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, function (url) {
              return '<a class="urlToOpen" data-url = "' + url + '">' + url + '</a>';
            });
          }
          /**
           * Function to get the news
           * @param start starting of news
           * @param newsPerPage news per page
           */

        }, {
          key: "getNews",
          value: function getNews(start, newsPerPage, countryCode) {
            var _this4 = this;

            var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            return new Promise(function (resolve) {
              //  if(loading)this.dataProvider.showLoading();
              _this4.dataProvider.getNewsJoin(start, newsPerPage, _this4.userDetails.details, countryCode).then(function (totalNews) {
                // this.dataProvider.hideLoading();
                _this4.show_loading = false;
                _this4.allNews = [];

                if (totalNews.length > 0) {
                  _this4.originalNews = JSON.parse(JSON.stringify(totalNews));

                  _this4.originalNews.forEach(function (news) {
                    news.content = _this4.urlify(news.content);
                    var date = news.ago.split(' ');

                    if (date.length > 20) {
                      news.ago = date[2] + ' ' + date[1] + ' ' + date[0];
                    }
                  });

                  if (_this4.originalNews.length > 1) {
                    _this4.allNews = _this4.originalNews.splice(0, 20);
                  } else {
                    _this4.allNews = _this4.originalNews;
                  }

                  for (var i = 0; i < _this4.allNews.length; i++) {
                    if (_this4.allNews[i].video_url != '') {
                      if (_this4.platform.is("cordova")) {
                        _this4.screen.unlock();
                      }

                      break;
                    }
                  }
                } else {
                  _this4.noDataFound = _this4.lang.no_news;
                }

                resolve(true);
              })["catch"](function (err) {
                // this.dataProvider.hideLoading();
                _this4.show_loading = false;

                _this4.dataProvider.errorALertMessage(err);

                resolve(false);
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this5 = this;

            setTimeout(function () {
              _this5.allNews = _this5.allNews.concat(_this5.originalNews.splice(0, 20));
              infiniteScroll.target.complete();
            }, 500);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(refresher) {
            this.getNews(0, 0, '').then(function (res) {
              refresher.target.complete();
            });
          }
          /**
           * Open the url inside news content
           * @param event click event
           */

        }, {
          key: "openUrl",
          value: function openUrl(event) {
            if (event.target.tagName == 'A' || event.target.tagName == 'a') {
              if (this.platform.is('cordova')) {
                var browser = this.iap.create(event.target.textContent, '_system');
                browser.show();
              }
            }
          }
          /**
           * Change the like or dislike status
           * @param news News object
           */

        }, {
          key: "changeLike",
          value: function changeLike(news) {
            var _this6 = this;

            if (localStorage.getItem("userloggedin")) {
              if (news.already_like == 'true' || news.already_like == true) {
                this.dataProvider.dislikeNewsPost({
                  session_id: this.userDetails.session_id,
                  news_id: news.id,
                  user_no: this.userDetails.details.user_no
                }).then(function (response) {
                  if (response.session) {
                    // this.dataProvider.showToast(response.message);
                    news.already_like = 'false';
                    news.total_likes = parseInt(news.total_likes) - 1;
                  } else {
                    _this6.authProvider.flushLocalStorage();

                    _this6.dataProvider.errorALertMessage(response.message); // this.app.getRootNav().setRoot("LoginPage");

                  }
                });
              } else {
                this.dataProvider.likeNewsPost({
                  session_id: this.userDetails.session_id,
                  news_id: news.id,
                  user_no: this.userDetails.details.user_no
                }).then(function (response) {
                  if (response.session) {
                    // this.dataProvider.showToast(response.message);
                    news.already_like = 'true';
                    news.total_likes = parseInt(news.total_likes) + 1;
                  } else {
                    _this6.authProvider.flushLocalStorage();

                    _this6.dataProvider.errorALertMessage(response.message); //  this.app.getRootNav().setRoot("LoginPage");

                  }
                });
              }
            } else {
              this.dataProvider.showToast("Please login first");
            }
          }
          /**
           * Social sharing
           * @param news News object contains news content and image
           */

        }, {
          key: "share",
          value: function share(news) {
            var content = news.content + '\n\nتم نشر الخبر بواسطة تطبيق "نظام متابعة الطلاب"';

            if (this.platform.is('cordova')) {
              if (news.news_image != '') {
                var imageUrl = news.news_image;
                this.socialSharing.share(content, news.title, imageUrl, null).then(function (res) {
                  console.log(res);
                }, function (err) {
                  console.log(err);
                });
              } else {
                this.socialSharing.share(content, news.title, null, null).then(function (res) {})["catch"](function (err) {
                  console.log(err);
                });
              }
            }
          }
          /**
           * Convert image url to image file for sharing
           * @param imageUrl Url of image
           */

        }, {
          key: "getBase64ImageFromUrl",
          value: function getBase64ImageFromUrl(imageUrl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var res, blob;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return fetch(imageUrl);

                    case 2:
                      res = _context2.sent;
                      _context2.next = 5;
                      return res.blob();

                    case 5:
                      blob = _context2.sent;
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.addEventListener("load", function () {
                          resolve(reader.result);
                        }, false);

                        reader.onerror = function () {
                          return reject(_this7);
                        };

                        reader.readAsDataURL(blob);
                      }));

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return NewsPage;
      }();

      NewsPage.ctorParameters = function () {
        return [{
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
        }, {
          type: _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_14__["GeoServiceProvider"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _service_location_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"]
        }];
      };

      NewsPage.propDecorators = {
        mVideoPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['videoPlayer']
        }]
      };
      NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-news',
        template: _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _service_geo_service_geo_service__WEBPACK_IMPORTED_MODULE_14__["GeoServiceProvider"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _service_location_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"], _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"]])], NewsPage);
      /***/
    },

    /***/
    "YXEz":
    /*!*************************************!*\
      !*** ./src/app/news/news.module.ts ***!
      \*************************************/

    /*! exports provided: NewsPageModule */

    /***/
    function YXEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
        return NewsPageModule;
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


      var _news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./news-routing.module */
      "psql");
      /* harmony import */


      var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./news.page */
      "7iu3");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var NewsPageModule = function NewsPageModule() {
        _classCallCheck(this, NewsPageModule);
      };

      NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
      })], NewsPageModule);
      /***/
    },

    /***/
    "psql":
    /*!*********************************************!*\
      !*** ./src/app/news/news-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: NewsPageRoutingModule */

    /***/
    function psql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function () {
        return NewsPageRoutingModule;
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


      var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./news.page */
      "7iu3");

      var routes = [{
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["NewsPage"]
      }];

      var NewsPageRoutingModule = function NewsPageRoutingModule() {
        _classCallCheck(this, NewsPageRoutingModule);
      };

      NewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=news-news-module-es5.js.map
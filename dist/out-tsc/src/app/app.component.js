import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
//import { tabs } from '../pages/tabs/tabs';
import { AuthService } from './service/auth/auth.service';
import { DataService } from './service/data/data.service';
import { DatabaseService } from './service/database/database.service';
import { Network } from '@ionic-native/network/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
let AppComponent = /** @class */ (() => {
    let AppComponent = class AppComponent {
        /**
         * Constructor
         * @param platform platform object
         * @param statusBar statusbar object to of StatusBar plugin
         * @param splashScreen used for splash screen hide
         * @param translate translation service
         * @param events used for app custom events
         * @param auth Authentication provider object
         * @param screen Object of ScreenOrientation for screen orientation
         * @param dataProvider Dataprovider provider object
         * @param dbProvider Local database  provider object
         * @param network Network object of plugin NetworkInformation
         */
        constructor(platform, statusBar, splashScreen, translate, auth, screen, dataProvider, dbProvider, network, storage, deeplinks, navController, socialSharing, iap, menuCtrl, router) {
            this.platform = platform;
            this.statusBar = statusBar;
            this.splashScreen = splashScreen;
            this.translate = translate;
            this.auth = auth;
            this.screen = screen;
            this.dataProvider = dataProvider;
            this.dbProvider = dbProvider;
            this.network = network;
            this.storage = storage;
            this.deeplinks = deeplinks;
            this.navController = navController;
            this.socialSharing = socialSharing;
            this.iap = iap;
            this.menuCtrl = menuCtrl;
            this.router = router;
            this.loggedin = false;
            this.user = {};
            this.lang = {};
            this.activeLink = {};
            this.changedLanguage = 'English';
            this.checked = false;
            this.runNetwork = false;
            this.routeDone = false;
            this.storage.get('language').then(res => {
                console.log('res', res);
                if (res) {
                    if (res == 'en') {
                        this.checked = false;
                    }
                    else {
                        this.checked = true;
                    }
                    this.translate.setDefaultLang(res);
                }
                else {
                    this.checked = true;
                    this.translate.setDefaultLang('ar');
                }
                this.initializeApp();
            });
            this.auth.event.subscribe((status) => {
                //  console.log(status,this.loggedin)
                if (status.loggedin) {
                    this.loggedin = status.loggedin;
                    // console.log(status,this.loggedin)
                    this.setUserdetails();
                    if (status.loggedin) {
                        this.pages = [];
                        if (this.user.userType == 'parent') {
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                            // <=== added in tabs  ===>
                            // this.pages.push({ title: this.lang.sidemenu.private_msg, component: "private-message", icon: "mail" },
                            //   { title: this.lang.sidemenu.parent_connect , component: "parentconnect", icon: "mail" },
                            //   { title: this.lang.sidemenu.news, component: "news", icon: "time" });
                        }
                        else if (this.user.userType != 'student') {
                            this.pages.push({ title: this.lang.sidemenu.class_list, component: "tabs", icon: "list" });
                        }
                        else if (this.user.userType == 'moderator') {
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                        }
                        if (this.user.userType == 'admin') {
                            this.pages.push({ title: this.lang.sidemenu.parent_connect, component: "parentconnect", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.manage_teacher, component: "manage-teacher", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.manage_student, component: "manage-student", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                            // this.pages.push({ title: this.lang.sidemenu.post_news, component: "post-news", icon: "newspaper" });
                        }
                        if (this.user.userType == 'student') {
                            // this.pages.push({ title: this.lang.sidemenu.messages, component: "parentconnect", icon: "list" });
                            // this.pages.push({ title: this.lang.sidemenu.post_news, component: "post-news", icon: "newspaper" });
                        }
                        if (this.user.userType == 'teacher' || this.user.userType == 'moderator') {
                            this.pages.push({ title: this.lang.sidemenu.manage_student, component: "manage-student", icon: "list" });
                            this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                        }
                        this.pages.push({ title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" }, { title: this.lang.sidemenu.about_us, component: "about-us", icon: "home" }, { title: this.lang.sidemenu.settings, component: "settings", icon: "settings" });
                    }
                    else {
                        this.pages = [
                            { title: this.lang.sidemenu.login, component: "login", icon: "log-in" },
                            // { title: this.lang.sidemenu.register_school, component: "school-registration", icon: "create-outline" },
                            { title: this.lang.sidemenu.news, component: "news", icon: "time" },
                            { title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" },
                            { title: this.lang.sidemenu.about_us, component: "about-us", icon: "information-circle-outline" },
                            { title: this.lang.sidemenu.contact_us, component: "contact-us", icon: "contacts-outline" }
                        ];
                    }
                }
                if (status.loggedin == false) {
                    this.user = {};
                    this.loggedin = status.loggedin;
                    this.pages = [
                        { title: this.lang.sidemenu.login, component: "login", icon: "log-in" },
                        // { title: this.lang.sidemenu.register_school, component: "school-registration", icon: "create-outline" },
                        { title: this.lang.sidemenu.news, component: "news", icon: "time" },
                        { title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" },
                        { title: this.lang.sidemenu.about_us, component: "about-us", icon: "information-circle-outline" },
                        { title: this.lang.sidemenu.contact_us, component: "contact-us", icon: "people-circle-outline" }
                    ];
                }
            });
        }
        /**
         * Initializer function will run when app is ready
         */
        initializeApp() {
            this.platform.ready().then(() => {
                this.statusBar.backgroundColorByHexString("#FFFFFF");
                this.statusBar.overlaysWebView(false);
                this.statusBar.styleDefault();
                this.splashScreen.hide();
                //console.log('window',(<any>window));
                //console.log('cordova',(<any>cordova));
                // (<any>window).open = (<any>cordova).InAppBrowser.open;
                this.translate.get(["sidemenu", "alertmessages", "app_rate", "switch_account"]).subscribe((response) => {
                    this.lang = response;
                    this.dbProvider.openDataBase().then(() => {
                        if (localStorage.getItem("userloggedin")) {
                            this.loggedin = true;
                            this.setUserdetails();
                            this.pages = [];
                            // console.log('user',this.user);
                            if (this.user.userType == 'parent') {
                                this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                                // <=== added in tabs  ===>
                                // this.pages.push({ title: this.lang.sidemenu.private_msg, component: "private-message", icon: "mail" },
                                //   { title: this.lang.sidemenu.parent_connect , component: "parentconnect", icon: "mail" },
                                //   { title: this.lang.sidemenu.news, component: "news", icon: "list" });
                            }
                            else if (this.user.userType != 'student') {
                                this.pages.push({ title: this.lang.sidemenu.class_list, component: "tabs", icon: "list" });
                            }
                            else if (this.user.userType == 'moderator') {
                                this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                            }
                            if (this.user.userType == 'admin') {
                                this.pages.push({ title: this.lang.sidemenu.parent_connect, component: "parentconnect", icon: "list" });
                                this.pages.push({ title: this.lang.sidemenu.manage_teacher, component: "manage-teacher", icon: "list" });
                                this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                                this.pages.push({ title: this.lang.sidemenu.manage_student, component: "manage-student", icon: "list" });
                                // this.pages.push({ title: this.lang.sidemenu.register_parent, component: "parent-register", icon: "newspaper" });
                            }
                            if (this.user.userType == 'student') {
                                // this.pages.push({ title: this.lang.sidemenu.messages, component: "parentconnect", icon: "list" });
                                // this.pages.push({ title: this.lang.sidemenu.post_news, component: "post-news", icon: "newspaper" });
                            }
                            if (this.user.userType == 'teacher' || this.user.userType == 'moderator') {
                                this.pages.push({ title: this.lang.sidemenu.manage_student, component: "manage-student", icon: "list" });
                                this.pages.push({ title: this.lang.sidemenu.billetins, component: "bulletins", icon: "list" });
                            }
                            this.pages.push({ title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" }, { title: this.lang.sidemenu.about_us, component: "about-us", icon: "home" }, { title: this.lang.sidemenu.settings, component: "settings", icon: "settings" });
                            if (this.user.userType == 'parent') {
                                this.rootPage = "ChildrenPage";
                            }
                            else {
                                this.rootPage = 'tabs';
                            }
                        }
                        else {
                            this.checkRoute();
                            this.pages = [
                                { title: this.lang.sidemenu.login, component: "login", icon: "log-in" },
                                // { title: this.lang.sidemenu.register_school, component: "school-registration", icon: "create-outline" },
                                { title: this.lang.sidemenu.news, component: "news", icon: "list" },
                                { title: this.lang.sidemenu.e_learning, component: "elearning-schools", icon: "list" },
                                { title: this.lang.sidemenu.about_us, component: "about-us", icon: "information-circle-outline" },
                                { title: this.lang.sidemenu.contact_us, component: "contact-us", icon: "people-circle-outline" }
                            ];
                            this.rootPage = "login";
                        }
                        this.deeplinks.routeWithNavController(this.navController, {
                            '/registerteacher': 'register-teacher',
                            '/parent_register': 'parent-register'
                        }).subscribe((match) => {
                            console.log('Successfully matched route', match);
                            let link = match.$link.path;
                            let res = link.split("/");
                            let es = res[2].split(".");
                            let s = es[0];
                            console.log(s);
                            if (s == 'parent_register') {
                                this.router.navigate(['parent-register']);
                            }
                            else {
                                this.router.navigate(['register-teacher']);
                            }
                            this.routeDone = true;
                        }, (nomatch) => {
                            console.error('Got a deeplink that didn\'t match', nomatch);
                        });
                    });
                    if (this.platform.is('cordova')) {
                        this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT).then(() => {
                        }).catch((err) => {
                            console.log(err);
                        });
                        setTimeout(() => {
                            if (this.network.type == this.network.Connection.UNKNOWN || this.network.type == this.network.Connection.NONE) {
                                this.dataProvider.showToast(this.lang.alertmessages.offline);
                                console.log('notOnline:::::::::::::::::::', this.network.type);
                            }
                        }, 1000);
                        this.network.onDisconnect().subscribe(() => {
                            console.log('notOnline:::::::::::::::::::', this.network.type);
                            this.dataProvider.showToast(this.lang.alertmessages.not_online);
                        });
                        this.network.onConnect().subscribe(() => {
                            console.log('online:::::::::::::::::::', this.network.type);
                            if (!this.runNetwork) {
                                this.runNetwork = true;
                                this.dataProvider.showToast(this.lang.alertmessages.online);
                            }
                        });
                    }
                });
                this.auth.event.subscribe((data) => {
                    if (data) {
                        if (data.activeLink) {
                            //console.log('activeLink',data.activeLink);
                            this.activeLink = data.activeLink;
                        }
                    }
                });
            });
        }
        /**
         * Function to open the page
         * @param page Page object of pages array
         */
        openPage(page) {
            if (page.component == "login") {
                // this.nav.setRoot(page.component);
                this.router.navigate([page.component]);
            }
            else {
                // this.nav.push(page.component);
                this.router.navigate([page.component]);
            }
            this.activePage = page;
            this.menuCtrl.close();
        }
        /**
         * Used to get the active page
         * @param page Page object of pages array
         */
        getActivePage(page) {
            return this.activePage == page;
        }
        checkRoute() {
            //  console.log('check',this.user);
            if (!this.routeDone) {
                if (this.user.userType == 'parent') {
                    this.router.navigate(['tabs/children'], { replaceUrl: true });
                }
                else if (!this.user.userType) {
                    this.router.navigate(['login'], { replaceUrl: true });
                    //this.rootPage = 'tabs';
                }
                else if (this.user.userType == 'student') {
                    this.router.navigate(['tabs/student-notes'], { replaceUrl: true });
                    //this.rootPage = 'tabs';
                }
                else {
                    this.router.navigate(['tabs'], { replaceUrl: true });
                }
            }
        }
        /**
         * Logout function
         */
        logout() {
            let userDetail = JSON.parse(localStorage.getItem("userloggedin"));
            let data = {
                "user_no": userDetail.details.user_no,
                "session_id": userDetail.session_id
            };
            this.dataProvider.showLoading();
            this.auth.doLogout(data).then((resp) => {
                this.dataProvider.hideLoading();
                //  this.nav.setRoot("login")
                this.router.navigate(['login'], { replaceUrl: true });
            }).catch((error) => {
                this.dataProvider.hideLoading();
                // this.dataProvider.errorALertMessage(error);
            });
            this.menuCtrl.close();
        }
        /**
         * Function to use set user details
         */
        setUserdetails() {
            //  console.log('details',localStorage.getItem("userloggedin"));
            if (localStorage.getItem("userloggedin")) {
                let userDetail = JSON.parse(localStorage.getItem("userloggedin"));
                this.isSchoolAdmin = userDetail.details.is_admin;
                console.log('isSchoolAdmin', this.isSchoolAdmin);
                this.user.name = userDetail.details.first_name + " " + userDetail.details.last_name;
                if (userDetail.details.is_school_admin == 1) {
                    this.user.image = userDetail.details.school_logo ? userDetail.details.school_logo : "./assets/imgs/logo.png";
                }
                else {
                    this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
                }
                // this.user.image = userDetail.details.pic ? userDetail.details.pic : "./assets/imgs/logo.png";
                this.user.description = userDetail.details.school_name;
                this.user.school_image = userDetail.details.school_logo;
                this.user.is_school_admin = userDetail.details.is_school_admin;
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
            this.checkRoute();
        }
        /**
         * Share teacher registration link
         */
        shareRegistrationLink() {
            this.socialSharing.share("Teacher Registration", "This is registration link for the new teacher.", null, this.activeLink.link).then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            });
        }
        shareParentRegistrationLink() {
            this.socialSharing.share("Parent Registration", "This is registration link for the new parents.", null, this.activeLink.parent_link_active).then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            });
        }
        registerParent(page) {
            if (page == 'parent_register') {
                this.router.navigate(['parent-register']);
            }
            else {
                this.router.navigate(['requested-parent']);
            }
            this.menuCtrl.close();
        }
        shareApp() {
            this.socialSharing.share("متابعة الطلاب</", null, null, 'https://webapp.ws/v2-admin/share_link_page.html?id=com.webapp.attendance&hl=en').then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            });
            this.menuCtrl.close();
        }
        rateApp() {
            let lang = this.translate.getDefaultLang();
            //console.log(lang);
            // this.dataProvider.presentRatingPopover(this.lang.app_rate);
            this.dataProvider.showRatePrompt(lang);
            this.menuCtrl.close();
        }
        /**
         * Open backend url
         */
        openBackendUrl() {
            if (this.platform.is('cordova')) {
                const browser = this.iap.create("https://webapp.ws/v2-admin/login", '_blank');
                browser.show();
            }
            this.menuCtrl.close();
        }
        ngOnInit() {
            const path = window.location.pathname.split('folder/')[1];
            if (path !== undefined) {
                // this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
            }
        }
        setLanguage(event) {
            let elem = (document.getElementById('laguage_check'));
            console.log(elem.checked);
            if (elem.checked == true) {
                this.storage.set('language', 'ar');
                this.translate.use('ar');
                this.changedLanguage = 'Arabic';
            }
            else {
                this.storage.set('language', 'en');
                this.translate.use('en');
                this.changedLanguage = 'English';
            }
            //this.menuCtrl.close();
            //this.translate.setDefaultLang(this.changedLanguage);
            this.checkRoute();
            this.translate.get(["sidemenu", "alertmessages", "app_rate"]).subscribe((response) => {
                this.lang = response;
                this.initializeApp();
            });
        }
        changeAccount(event) {
            this.dataProvider.switchAccount(event, this.lang.switch_account);
            this.menuCtrl.close();
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            TranslateService,
            AuthService,
            ScreenOrientation,
            DataService,
            DatabaseService,
            Network,
            Storage,
            Deeplinks,
            NavController,
            SocialSharing,
            InAppBrowser,
            MenuController,
            Router])
    ], AppComponent);
    return AppComponent;
})();
export { AppComponent };
//# sourceMappingURL=app.component.js.map
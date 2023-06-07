(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-report-manage-student-report-manage-module"], {
    /***/
    "4CWl":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-report-manage/student-report-manage.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CWl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"end\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>{{'manage_report.title' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"body\">\n\t\t<div class=\"conatiner-form\">\n\n\t\t\t<ion-card class=\"form-card\">\n\t\t\t\t<ion-card-header >\n\t\t\t\t\t<ion-label>{{'manage_report.report_type' |translate}}</ion-label>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t    <ion-select interface=\"popover\" [(ngModel)]=\"formData.reportType\" placeholder=\"{{'manage_report.report_type' |translate}}\" (ionChange)=\"changeReportType($event)\">\n\t\t\t\t\t      <ion-select-option value=\"medical\" *ngIf=\"userDetails.details.user_type=='6' || userDetails.details.user_type=='1'\">{{'manage_report.medical_report' | translate}}</ion-select-option>\n\t\t\t\t\t      <ion-select-option value=\"suspend\" *ngIf=\"userDetails.details.user_type=='3' || userDetails.details.user_type=='1'\">{{'manage_report.suspension_report' | translate}}</ion-select-option>\n\t\t\t\t\t      <ion-select-option value=\"exit\" *ngIf=\"userDetails.details.user_type=='6' || userDetails.details.user_type=='1'\">{{'manage_report.exit_report' | translate}}</ion-select-option>\n\t\t\t\t\t    </ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content *ngIf=\"formData.reportType\">\n\t\t\t\t\t<ion-item-group *ngIf=\"formData.reportType !='exit'\">\n\t\t\t\t\t\t<ion-label>{{'manage_report.select_date' | translate}}</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t  <ion-datetime [(ngModel)]=\"formData.selectedDate\" displayFormat=\"YYYY/MM/DD\"></ion-datetime>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group *ngIf=\"formData.reportType !='exit'\">\n\t\t\t\t\t\t<ion-label>{{'manage_report.days'|translate}}</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t  <ion-input type=\"number\" [(ngModel)]=\"formData.selectedDays\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-item-group *ngIf=\"formData.reportType =='exit' && !isExitToday\">\n\t\t\t\t\t\t<ion-label>{{'manage_report.note'|translate}}</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t  <ion-input  [(ngModel)]=\"formData\t.note\"  type=\"text\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-item-group>\n\t\t\t\t\t<ion-item-group *ngIf=\"formData.reportType =='suspend'\">\n\t\t\t\t\t\t<ion-label>{{'manage_report.note'|translate}}</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t  <ion-input  [(ngModel)]=\"formData.note\" value=\"suspend\" type=\"text\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-item-group>\n\t\t\t\t</ion-card-content>\n\t\t\t\t<ion-button (click)=\"submitForm()\" ion-button style=\"margin: 14px;\"  expand=\"block\" class=\"margin\"  color=\"primary\"> {{'manage_report.save'|translate}}</ion-button>\n\t\t\t</ion-card>\n\t\t\t\n\t\t</div>\n\n\t\t<!-- <div class=\"container-table\">\n\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\" (click)=\"printReport()\" [disabled]=\"foundAnyReport\"> <ion-icon name=\"print-outline\"></ion-icon> {{'manage_report.printReport' | translate}} </ion-button>\n\t\t</div> -->\n\n\t\t<div class=\"container-table\" *ngIf=\"userDetails.details.user_type=='3' || userDetails.details.user_type=='1'\">\n\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\" *ngIf=\"suspend.length\" (click)=\"printReport('suspend')\">\t\t\t\t\n\t\t\t\t<ion-icon name=\"print-outline\"></ion-icon> {{'manage_report.printReport' | translate}}\n\t\t\t</ion-button>\n\t\t\t<ion-card class=\"card-table\">\n\t\t\t\t<ion-card-header>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t{{'manage_report.suspension_days' | translate}}\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-row class=\"header-row\">\n\t\t\t\t\t\t<ion-col size=\"1\" class=\"top left bottom right\">\n\t\t\t\t\t\t\t#\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.start_date' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.end_date' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.days' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom \">\n\t\t\t\t\t\t\t{{'manage_report.action' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<div *ngIf=\"suspend.length\">\n\t\t\t\t\t\t<ion-row class=\"body-row\" *ngFor=\"let sdays of suspend; let i=index\">\n\t\t\t\t\t\t\t<ion-col size=\"1\" class=\" left bottom right\">\n\t\t\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{sdays.start_date}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{sdays.end_date}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{sdays.amount_days}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom \">\n\t\t\t\t\t\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\" (click)=\"presentAlert(sdays.id,'suspend')\" > {{'manage_report.delete' | translate}}</ion-button>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</div>\n\n\t\t<div class=\"container-table\" *ngIf=\"userDetails.details.user_type=='6' || userDetails.details.user_type=='1'\">\n\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\" (click)=\"printReport('medical')\" *ngIf=\"medical.length\">\n\t\t\t\t<ion-icon name=\"print-outline\"></ion-icon> {{'manage_report.printReport' | translate}}\n\t\t\t</ion-button>\n\t\t\t<ion-card class=\"card-table\">\n\t\t\t\t<ion-card-header>\t\t\t\t\t\n\t\t\t\t\t{{'manage_report.medical_days' | translate}}\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-row class=\"header-row\">\n\t\t\t\t\t\t<ion-col size=\"1\" class=\"top left bottom right\">\n\t\t\t\t\t\t\t#\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.start_date' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.end_date' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.days' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom \">\n\t\t\t\t\t\t\t{{'manage_report.action' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<div *ngIf=\"medical.length\" >\n\t\t\t\t\t\t<ion-row class=\"body-row\" *ngFor=\"let mdays of medical; let i=index\">\n\t\t\t\t\t\t\t<ion-col size=\"1\" class=\" left bottom right\">\n\t\t\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{mdays.start_date}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{mdays.end_date}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{mdays.amount_days}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom \">\n\t\t\t\t\t\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\" (click)=\"presentAlert(mdays.id,'medical')\">{{'manage_report.delete' | translate}} </ion-button>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</div>\n\n\t\t<div class=\"container-table\" *ngIf=\"userDetails.details.user_type=='6' || userDetails.details.user_type=='1'\">\n\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\" (click)=\"printReport('exit')\" *ngIf=\"exitdays.length\">\n\t\t\t\t<ion-icon name=\"print-outline\"></ion-icon> {{'manage_report.printReport' | translate}}\n\t\t\t</ion-button>\n\t\t\t<ion-card class=\"card-table\">\n\t\t\t\t<ion-card-header>\t\t\t\t\t\n\t\t\t\t\t{{'manage_report.exit_days' | translate}}\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-card-content>\n\t\t\t\t\t<ion-row class=\"header-row\">\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"top left bottom right\">\n\t\t\t\t\t\t\t#\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.date' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\" class=\"top left bottom\">\n\t\t\t\t\t\t\t{{'manage_report.time' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\" class=\"top left bottom \">\n\t\t\t\t\t\t\t{{'manage_report.action' | translate}}\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t\t<div *ngIf=\"exitdays.length\">\n\t\t\t\t\t\t<ion-row class=\"body-row\" *ngFor=\"let edays of exitdays; let i=index\">\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\" left bottom right\">\n\t\t\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{edays.date}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"3\" class=\" left bottom\">\n\t\t\t\t\t\t\t\t{{edays.time}}\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"4\" class=\" left bottom \">\n\t\t\t\t\t\t\t\t<ion-button class=\"dlt-btn\" fill=\"outline\"  (click)=\"presentAlert(edays.id,'exit')\" >{{'manage_report.delete' | translate}} </ion-button>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ion-card-content>\n\t\t\t</ion-card>\n\t\t</div>\n\n\t</div> \n\n</ion-content>\n";
      /***/
    },

    /***/
    "aOq8":
    /*!***********************************************************************!*\
      !*** ./src/app/student-report-manage/student-report-manage.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function aOq8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-student-report-manage:host .body {\n  min-height: 100%;\n  background: #e8e8e8;\n}\napp-student-report-manage:host .body .conatiner-form {\n  padding: 8px;\n}\napp-student-report-manage:host .body .conatiner-form .form-card ion-label {\n  font-size: 15px;\n  font-weight: bold;\n  color: #222428;\n}\napp-student-report-manage:host .body .conatiner-form .form-card ion-item {\n  border: 1px solid #dad7d7;\n  margin-top: 5px;\n  color: #3171e0;\n  border-radius: 5px;\n}\napp-student-report-manage:host .body .conatiner-form .form-card ion-select {\n  width: 100%;\n}\napp-student-report-manage:host .body .container-table {\n  padding: 8px;\n  text-align: center;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-header {\n  font-size: 15px;\n  text-align: center;\n  font-weight: bold;\n  color: #888b8e;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content {\n  padding: 2px;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content ion-col {\n  padding: 10px 0px;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content .header-row {\n  background: #ebf6ff;\n  font-weight: bold;\n  color: #2b3742;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content .top {\n  border-top: 1px solid;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content .bottom {\n  border-bottom: 1px solid;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content .left {\n  border-left: 1px solid;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content .right {\n  border-right: 1px solid;\n}\napp-student-report-manage:host .body .container-table .card-table ion-card-content .dlt-btn {\n  --padding-end: 10px;\n  --padding-start: 10px;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnQtcmVwb3J0LW1hbmFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNLLFlBQUE7QUFDUDtBQUNRO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNUO0FBQ1E7RUFDUSx5QkFBQTtFQUNOLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDVjtBQUNRO0VBQ0MsV0FBQTtBQUNUO0FBR0U7RUFDQyxZQUFBO0VBQ0csa0JBQUE7QUFETjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUVRO0VBQ0MsaUJBQUE7QUFBVDtBQUVLO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBVDtBQUVLO0VBQ0MscUJBQUE7QUFBTjtBQUVLO0VBQ0Msd0JBQUE7QUFBTjtBQUVLO0VBQ0Msc0JBQUE7QUFBTjtBQUVLO0VBQ0MsdUJBQUE7QUFBTjtBQUVLO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUFUIiwiZmlsZSI6InN0dWRlbnQtcmVwb3J0LW1hbmFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc3R1ZGVudC1yZXBvcnQtbWFuYWdlOmhvc3R7XHJcblx0LmJvZHl7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZDogI2U4ZThlODtcclxuXHRcdC5jb25hdGluZXItZm9ybXtcclxuXHRcdFx0ICAgIHBhZGRpbmc6IDhweDtcclxuXHRcdFx0ICAgIC5mb3JtLWNhcmR7XHJcblx0XHRcdCAgICBcdGlvbi1sYWJlbHtcclxuXHRcdFx0ICAgIFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHQgICAgY29sb3I6ICMyMjI0Mjg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0aW9uLWl0ZW17XHJcblx0XHQgICAgXHRcdCAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RhZDdkNztcclxuXHRcdFx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0XHRcdFx0ICAgIGNvbG9yOiAjMzE3MWUwO1xyXG5cdFx0XHRcdFx0XHQgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGlvbi1zZWxlY3R7XHJcblx0XHRcdCAgICBcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIH1cclxuXHRcdH1cclxuXHRcdC5jb250YWluZXItdGFibGV7XHJcblx0XHRcdHBhZGRpbmc6IDhweDtcclxuICAgIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdC5jYXJkLXRhYmxle1xyXG5cdFx0XHRcdGlvbi1jYXJkLWhlYWRlcntcclxuXHRcdFx0XHQgICAgZm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0ICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdCAgICBjb2xvcjogIzg4OGI4ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLWNhcmQtY29udGVudHtcclxuXHRcdFx0XHQgICAgcGFkZGluZzogMnB4O1xyXG5cdFx0XHRcdCAgICBpb24tY29se1xyXG5cdFx0XHRcdCAgICBcdHBhZGRpbmc6IDEwcHggMHB4O1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHQuaGVhZGVyLXJvd3tcclxuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiAjZWJmNmZmO1xyXG5cdFx0XHRcdFx0ICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0ICAgIGNvbG9yOiAjMmIzNzQyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRvcHtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmJvdHRvbXtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmxlZnR7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucmlnaHR7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmRsdC1idG57XHJcblx0XHRcdFx0XHQgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuXHRcdFx0XHRcdCAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcblx0XHRcdFx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0ICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "fSDR":
    /*!*******************************************************************************!*\
      !*** ./src/app/student-report-manage/student-report-manage-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: StudentReportManagePageRoutingModule */

    /***/
    function fSDR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentReportManagePageRoutingModule", function () {
        return StudentReportManagePageRoutingModule;
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


      var _student_report_manage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./student-report-manage.page */
      "iGjL");

      var routes = [{
        path: '',
        component: _student_report_manage_page__WEBPACK_IMPORTED_MODULE_3__["StudentReportManagePage"]
      }];

      var StudentReportManagePageRoutingModule = function StudentReportManagePageRoutingModule() {
        _classCallCheck(this, StudentReportManagePageRoutingModule);
      };

      StudentReportManagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StudentReportManagePageRoutingModule);
      /***/
    },

    /***/
    "iGjL":
    /*!*********************************************************************!*\
      !*** ./src/app/student-report-manage/student-report-manage.page.ts ***!
      \*********************************************************************/

    /*! exports provided: StudentReportManagePage */

    /***/
    function iGjL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentReportManagePage", function () {
        return StudentReportManagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_student_report_manage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./student-report-manage.page.html */
      "4CWl");
      /* harmony import */


      var _student_report_manage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./student-report-manage.page.scss */
      "aOq8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/auth/auth.service */
      "/AaM");
      /* harmony import */


      var _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/data/data.service */
      "v2nD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_database_database_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../service/database/database.service */
      "HbOQ");
      /* harmony import */


      var _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../service/student-data/student-data.service */
      "TgDs");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");

      var env = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"];

      var StudentReportManagePage = /*#__PURE__*/function () {
        function StudentReportManagePage(navCtrl, dataProvider, authProvider, dbProvider, studentService, alertController, translate, alertCtrl, camera, network, route, router, printer, zone, popover, platform, storage) {
          var _this = this;

          _classCallCheck(this, StudentReportManagePage);

          this.navCtrl = navCtrl;
          this.dataProvider = dataProvider;
          this.authProvider = authProvider;
          this.dbProvider = dbProvider;
          this.studentService = studentService;
          this.alertController = alertController;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.network = network;
          this.route = route;
          this.router = router;
          this.printer = printer;
          this.zone = zone;
          this.popover = popover;
          this.platform = platform;
          this.storage = storage;
          this.navData = {};
          this.formData = {
            reportType: '',
            selectedDate: '',
            selectedDays: '1',
            note: ''
          };
          this.userDetails = {};
          this.exitdays = [];
          this.isExitToday = false;
          this.medical = [];
          this.suspend = [];
          this.foundAnyReport = true;
          this.isDeleted = false;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.navData = _this.router.getCurrentNavigation().extras.state;
              console.log(_this.navData);
            }
          });
          this.translate.get("alertmessages").subscribe(function (val) {
            _this.lang = val;
          }); // for text changes in note field ===== Start Comment On 27-SEP-2021

          this.translate.get("manage_report").subscribe(function (val) {
            _this.lang1 = val;
          }); // for text changes in note field ===== End Comment On 27-SEP-2021
        }

        _createClass(StudentReportManagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem("userloggedin")) {
              this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
              this.getReports();
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this2 = this;

            var date = new Date(this.formData.selectedDate);
            this.formData.selectedDate = this.dataProvider.getFormatedDate(date);
            this.formData.student_id = this.navData.student_id, this.formData.course_id = this.navData.course_id, this.formData.user_no = this.userDetails.details.user_no, this.formData.school_id = this.userDetails.details.school_id, this.formData.session_id = this.userDetails.session_id, console.log('SDSDSD-', this.formData);
            this.dataProvider.showLoading();
            this.dataProvider.submitStudentReports(this.formData).then(function (data) {
              _this2.dataProvider.hideLoading();

              if (data) {
                _this2.dataProvider.showToast(_this2.lang.report_generated);

                _this2.getReports(false);
              }
            })["catch"](function (er) {
              _this2.dataProvider.hideLoading();

              _this2.dataProvider.showToast(er);

              console.log(er);
            });
          }
        }, {
          key: "getReports",
          value: function getReports() {
            var _this3 = this;

            var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var data = {
              student_id: this.navData.student_id,
              course_id: this.navData.course_id,
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              session_id: this.userDetails.session_id
            };
            if (loader) this.dataProvider.showLoading();
            this.dataProvider.getStudentReports(data).then(function (res) {
              if (loader) _this3.dataProvider.hideLoading();

              if (res.session) {
                if (res.data) {
                  if (res.data.suspend.length) {
                    _this3.suspend = res.data.suspend;
                    _this3.foundAnyReport = false;
                  } else {
                    _this3.suspend = [];
                  }

                  if (res.data.exitdays.length) {
                    _this3.exitdays = res.data.exitdays;

                    _this3.exitdays.forEach(function (d) {
                      var spl = d.date.split(' ');
                      d.date = spl[0];
                      d.time = spl[1];
                    });

                    _this3.foundAnyReport = false;
                  } else {
                    _this3.exitdays = [];
                  }

                  if (res.data.medical.length) {
                    _this3.medical = res.data.medical;
                    _this3.foundAnyReport = false;
                  } else {
                    _this3.medical = [];
                  }

                  _this3.isExitToday = false;

                  if (res.data.exittoday && res.data.exittoday.length) {
                    _this3.isExitToday = true;
                    _this3.foundAnyReport = false;
                  }
                }
              } else {
                _this3.authProvider.flushLocalStorage();

                _this3.router.navigate(['login'], {
                  replaceUrl: true
                });
              }
            })["catch"](function (er) {
              if (loader) _this3.dataProvider.hideLoading();
              console.log(er);
            });
            console.log('foundAnyReport', this.foundAnyReport);
          }
        }, {
          key: "changeReportType",
          value: function changeReportType(event) {
            if (event.detail.value == 'suspend') {
              var tomorrow = new Date();
              tomorrow.setDate(new Date().getDate() + 1);
              this.formData.note = this.lang1.suspend_def_note; // updated on 21-sep-21

              this.formData.selectedDate = this.dataProvider.getFormatedDate(tomorrow);
            } else {
              var today = new Date();
              this.formData.note = event.detail.value == 'exit' ? this.lang1.exit_def_note : '';
              this.formData.selectedDate = this.dataProvider.getFormatedDate(today);
            }
          }
        }, {
          key: "deleteReport",
          value: function deleteReport(rid, reportType) {
            var _this4 = this;

            console.log(rid);
            var data = {
              id: rid,
              reportType: reportType,
              student_id: this.navData.student_id,
              course_id: this.navData.course_id,
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id
            };
            this.dataProvider.removeStudentReportByType(data).then(function (data) {
              _this4.dataProvider.hideLoading();

              if (data) {
                _this4.dataProvider.showToast(_this4.lang.report_deleted);

                _this4.getReports(false);
              }
            })["catch"](function (er) {
              _this4.dataProvider.hideLoading();

              _this4.dataProvider.showToast(er);

              console.log(er);
            });
          }
        }, {
          key: "printReport",
          value: function printReport(reportType) {
            var _this5 = this;

            var data = {
              student_id: this.navData.student_id,
              course_id: this.navData.course_id,
              user_no: this.userDetails.details.user_no,
              school_id: this.userDetails.details.school_id,
              report_type: reportType
            };
            this.dataProvider.printAllReports(data).then(function (data) {
              _this5.dataProvider.hideLoading();

              if (data) {
                var options = {
                  orientation: 'portrait'
                };

                _this5.printer.print(data.data, options).then(function (onSuccess) {}, function (e) {
                  console.log('printer.print', e);

                  _this5.dataProvider.showToast(_this5.lang.report_error);
                });
              }
            })["catch"](function (er) {
              _this5.dataProvider.hideLoading();

              _this5.dataProvider.showToast(er);

              console.log(er);
            });
          } // added presentAlert for displaying confirmation message before delete

        }, {
          key: "presentAlert",
          value: function presentAlert(rid, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        message: this.lang.want_to_delete,
                        buttons: [{
                          text: this.lang.no,
                          role: 'Cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: this.lang.yes,
                          handler: function handler() {
                            _this6.deleteReport(rid, type);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return StudentReportManagePage;
      }();

      StudentReportManagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _service_database_database_service__WEBPACK_IMPORTED_MODULE_11__["DatabaseService"]
        }, {
          type: _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__["StudentDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_15__["Printer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"]
        }];
      };

      StudentReportManagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-student-report-manage',
        template: _raw_loader_student_report_manage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_report_manage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _service_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _service_database_database_service__WEBPACK_IMPORTED_MODULE_11__["DatabaseService"], _service_student_data_student_data_service__WEBPACK_IMPORTED_MODULE_12__["StudentDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_15__["Printer"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"]])], StudentReportManagePage);
      /***/
    },

    /***/
    "pTSB":
    /*!***********************************************************************!*\
      !*** ./src/app/student-report-manage/student-report-manage.module.ts ***!
      \***********************************************************************/

    /*! exports provided: StudentReportManagePageModule */

    /***/
    function pTSB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentReportManagePageModule", function () {
        return StudentReportManagePageModule;
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


      var _student_report_manage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./student-report-manage-routing.module */
      "fSDR");
      /* harmony import */


      var _student_report_manage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-report-manage.page */
      "iGjL");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");

      var StudentReportManagePageModule = function StudentReportManagePageModule() {
        _classCallCheck(this, StudentReportManagePageModule);
      };

      StudentReportManagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _student_report_manage_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentReportManagePageRoutingModule"]],
        declarations: [_student_report_manage_page__WEBPACK_IMPORTED_MODULE_6__["StudentReportManagePage"]]
      })], StudentReportManagePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=student-report-manage-student-report-manage-module-es5.js.map
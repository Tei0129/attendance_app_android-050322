import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
let StudentDataService = /** @class */ (() => {
    let StudentDataService = class StudentDataService {
        constructor(http, sqlite, platform, storage) {
            this.http = http;
            this.sqlite = sqlite;
            this.platform = platform;
            this.storage = storage;
            this.studentList = [];
            this.studentNote = [];
        }
        checkStudent(student) {
            this.storage.get('offlineStudent').then((data) => {
                if (data) {
                    this.studentList = data;
                    this.studentList[student.sid] = student;
                }
                else {
                    this.studentList[student.sid] = student;
                }
                this.storage.set('offlineStudent', this.studentList);
            });
        }
        checkStudentNotes(note, student_id) {
            this.storage.get('offlineStudentNote').then((data) => {
                if (data) {
                    this.studentNote = data;
                    this.studentNote[student_id] = note;
                }
                else {
                    this.studentNote[student_id] = note;
                }
                this.storage.set('offlineStudentNote', this.studentNote);
                //	console.log('offlineStudentNote',this.studentNote)
            });
        }
        getStudent(student_id, callback, error) {
            this.storage.get('offlineStudent').then((res) => {
                if (res) {
                    this.studentList = res;
                    //console.log(this.studentList,student_id);
                    let data = this.studentList[student_id];
                    if (data) {
                        callback(data);
                    }
                    else {
                        error(data);
                    }
                }
                else {
                    error('data');
                }
            });
        }
        getStudentNote(student_id, callback, error) {
            this.storage.get('offlineStudentNote').then((res) => {
                if (res) {
                    this.studentNote = res;
                    let data = this.studentNote[student_id];
                    if (data) {
                        callback(data);
                    }
                    else {
                        error(data);
                    }
                }
                else {
                    error('data');
                }
            });
        }
    };
    StudentDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, SQLite, Platform,
            Storage])
    ], StudentDataService);
    return StudentDataService;
})();
export { StudentDataService };
//# sourceMappingURL=student-data.service.js.map
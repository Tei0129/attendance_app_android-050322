import { Component, OnInit, Input, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { DataService } from '../service/data/data.service';
import { DatabaseService } from '../service/database/database.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CreateClassPage } from '../create-class/create-class.page';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.page.html',
	styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
	userDetails: any;
	usersData: any = {};
	classes: any = [];
	validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	lang: any = {};
	show_save_user_spinner: boolean = false;
	usersDataclass: any = [];
	email_validation: boolean = false;
	confirm_password_validation: boolean = false;
	password_validation: boolean = false;
	user_name_validation: boolean = false;
	submitted: boolean = false;
	user_id_required: boolean;

	constructor(public navCtrl: NavController,
		// public app: App, 
		public translate: TranslateService,
		public dataProvider: DataService,
		public authProvider: AuthService,
		//public events: Events,
		public alertCtrl: AlertController,
		private route: ActivatedRoute,
		public zone: NgZone,
		private router: Router,
		public modalController: ModalController) {
		this.translate.get("alertmessages").subscribe((res) => {
			this.lang = res;
			//console.log('alertmsg',res);
		})
	}


	ngOnInit() {
		if (localStorage.getItem("userloggedin")) {
			this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
			//console.log('userdls',this.userDetails);
		}
		this.getCourses();


	}

	submit() {
		// console.log('userDtaa', this.usersData);	
		if (this.validateForm()) {
			this.usersData.email_id = this.usersData.email_id || '';
			this.usersData.user_no = this.userDetails.details.user_no;
			this.usersData.school_id = this.userDetails.details.school_id;
			this.usersData.class = JSON.stringify(this.usersDataclass);

			// this.dataProvider.showLoading();
			this.show_save_user_spinner = true;
			this.dataProvider.registerNewUser(this.usersData).then((res) => {
				// this.dataProvider.hideLoading();
				this.show_save_user_spinner = false;
				// console.log('userdata', res);
				const navigation: NavigationExtras = {
					state: {
						isUpdated: true
					}
				};
				this.zone.run(() => {
					this.router.navigate(['users-list'], navigation)
				});
			}).catch(e => {
				this.dataProvider.showToast(e);
				this.dataProvider.showLoading();
			})
		}
	}

	validateForm() {
		let is_validate = true;
		this.email_validation = false;
		this.user_name_validation = false;
		this.password_validation = false;
		this.user_id_required = false;
		this.submitted = true;
		this.confirm_password_validation = false;
		console.log(this.usersData);
		if (this.usersData.email_id && !this.usersData.email_id.match(this.validRegex)) {
			// this.dataProvider.showToast(this.lang.email_valid);
			this.email_validation = true;
			is_validate = false
		} if (!this.usersData.first_name || this.usersData.first_name == '') {
			// this.dataProvider.showToast(this.lang.usename_required);
			this.user_name_validation = true;
			is_validate = false;
		} if (!this.usersData.username || this.usersData.username == '') {
			this.dataProvider.showToast(this.lang.user_id_required);
			this.user_id_required = true;
			is_validate = false
		} if (!this.usersData.password || this.usersData.password == '') {
			// this.dataProvider.showToast(this.lang.password_required);
			this.password_validation = true;
			is_validate = false;
		} if (!this.usersData.confirm_password || (this.usersData.confirm_password != this.usersData.password)) {
			// this.dataProvider.showToast(this.lang.confirm_password_required);
			this.confirm_password_validation = true;
			is_validate = false;
		} 
			return is_validate;
		
	}
	check() {
		console.log(this.usersData.attendence_permit);
	}

	getCourses() {
		let data = {
			"user_no": this.userDetails.details.user_no,
			"school_id": this.userDetails.details.school_id,
			"session_id": this.userDetails.session_id
		};
		this.dataProvider.showLoading();
		this.dataProvider.getCourses(data).then(response => {
			this.dataProvider.hideLoading();
			if (response.session) {
				this.classes = response.data;
				console.log("classs==>", this.classes);
			}

		}).catch(error => {
			this.dataProvider.hideLoading();
			this.dataProvider.errorALertMessage(error);
		})

	}

	portChange(event) {
		console.log("ev", event);
		// this.usersDataclass= event.value;
	}
}

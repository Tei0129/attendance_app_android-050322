import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data/data.service';
import { TranslateService } from '@ngx-translate/core';
import { NavigationExtras , Router, ActivatedRoute } from '@angular/router';  
@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.page.html',
  styleUrls: ['./add-parent.page.scss'],
})
export class AddParentPage implements OnInit {
  userdata:any;
  parentForm: FormGroup;
  submitted: boolean = false;
  signUpData :any;
  students:any;
  lang: any;
  lang1: any;
  selected_student={
    sid:"",
    name:""
  };
  
  constructor(
    public formBuilder: FormBuilder,
    public dataProvider: DataService,
    public translate: TranslateService,
    private router:Router,
  ) { 
    this.translate.get("alertmessages").subscribe((res)=>{
      this.lang = res;
    })
    this.translate.get("reg_parent").subscribe((res)=>{
      this.lang1 = res;
    })
  }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      parentID: ['', Validators.required],
      parentName: ['', Validators.required],
      parentPassword: ['', [Validators.required]],
      selected_student: ['', [Validators.required]],
    });

    this.userdata = JSON.parse(localStorage.getItem("userloggedin"));
    this.getStudents();

  }

  get f() { return this.parentForm.controls; }

  onSubmit() {
    this.submitted = true;  
    if(this.parentForm.invalid) {
        return;
    }else{
      this.signUpData = {
        "parentID" : this.f.parentID.value,
        "parentName" : this.f.parentName.value,
        "password" : this.f.parentPassword.value,
        "selected_students" : JSON.stringify(this.f.selected_student.value),
        "school_id" : this.userdata.details.school_id,
        "user_no" : this.userdata.details.user_no
      }
      console.log('this signUpData---', this.signUpData);

      this.dataProvider.showLoading();
      this.dataProvider.createNewParent(this.signUpData).then((response)=>{
        console.log('createNewParent--Response---',response);
        this.dataProvider.hideLoading();
        this.dataProvider.showToast(response);
        this.router.navigate(['requested-parent']);
      }).catch((err)=>{
        this.dataProvider.hideLoading();
        this.dataProvider.errorALertMessage(err);
      });


    }
  }

  getStudents(){
  	let data={
  		'school_id':this.userdata.details.school_id
  	}
    this.dataProvider.getSchoolStudents(data).then(res => {
      this.dataProvider.hideLoading();
      console.log('seminar class',res);
      if(res.data){
        this.students=res.data;
      }       
    }).catch(error=>{
      this.dataProvider.hideLoading();
      this.dataProvider.showToast(error);
      console.log(error)
    })

  }

  _keyPress(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {
  ratingStars: number;
  // @Input() lang;
  @Input() data;
  selections: any [] = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  postData: any [] = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  stars_array = [
    {
      title: 'متميز'
    },
    {
      title: 'جيد جداً'
    },
    {
      title: 'جيد'
    },
     {
      title: 'مقبول'
    },
    {
      title: 'ضعيف'
    },
   
    
   
    
  ];
  noteMessage: string = '';
  lang: any;

  constructor(public modalController: ModalController, public dataProvider: DataService,public translate: TranslateService,) { }

  ngOnInit() {
    // this.userDetails = JSON.parse(localStorage.getItem("userloggedin"));
    this.translate.get("alertmessages").subscribe((val)=>{
      this.lang = val;
    });
    if(this.data){
      if(this.data.note){
        this.noteMessage = this.data.note;
      }
      if(this.data.new_ratting){
        this.postData = JSON.parse(this.data.new_ratting);
        this.selections = this.postData;
      }
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      role: false,
      'dismissed': true,
    });
  }

  getSelectedStars(){
    let stars_array = [
      {
        title: 'متميز'
      },
      {
        title: 'جيد جداً'
      },
      {
        title: 'جيد'
      },
      {
        title: 'مقبول'
      },
      {
        title: 'ضعيف'
      }
    ]
    console.log(stars_array)
      return stars_array;
    return new Array(5);
  }
  getSemArray() {
    let stars_array = [
    {
      title: 'متميز'
    },
    {
      title: 'جيد جداً'
    },
    {
      title: 'جيد'
    },
    {
      title: 'مقبول'
    },
    {
      title: 'ضعيف'
    }
  ]
  console.log(stars_array)
    return stars_array;
  }

  selectStarsForRating(post_data_index: number, index: number){
    if(index === 0){
      index = 4;
    } else if(index === 1){
      index = 3;
    }else if(index === 2){
      index = 2;
    }else if(index === 3){
      index = 1;
    }else if(index === 4){
      index = 0;
    }
    this.postData[post_data_index] = index+1;
    this.selections= ['#04855f', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee'];
    for(let i=0;i<=index;i++){
      this.selections[post_data_index] = '#04855f';
    }
    console.log(this.postData);
  }

  onClickSend(){
    if(this.noteMessage && this.noteMessage.trim() != '') {
      if(this.noteMessage.length <= 45) {
    this.modalController.dismiss({ 
        'dismissed': true,
         data: this.postData,
         noteMessage: this.noteMessage
    });
    }else {
        this.dataProvider.showToast(this.lang.max_note_length);
      }
    }
    else{
      this.dataProvider.showToast(this.lang.empty_note);
    }
  }

}

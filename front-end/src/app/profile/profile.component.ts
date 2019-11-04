import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo  = JSON.parse(localStorage.getItem('userInfo'));

  data : FormData;

  profile : Boolean = false;
  cover : Boolean = false;

  constructor(private user : UserService , private flashMessage : FlashMessagesService) { }

  ngOnInit() {
  }

  togglecoverOption(){
    this.cover = !this.cover;
  }
  toggleProfileOption(){
    this.profile = !this.profile;
  }

  coverChange(event){
    let target = event['target'];
    this.data = new FormData() ;
    this.data.append('cover' , target['files'][0]);
    // console.log(this.data.has('profile'));
  }
  profileChange(event){
    let target = event['target'];
    this.data = new FormData() ;
    this.data.append('profile' , target['files'][0]);
    // console.log(this.data.has('profile'));
  }

  uploadFile(){
    this.user.uploadFile(this.data).subscribe(
      res => {
        if(res['body']){
          res = res['body'];
          if(res['status'] === 'done'){
            this.flashMessage.show(res['status'] , {cssClass : 'alert-success'});
            this.userInfo[res['data'].field] = res['data'].name;
            localStorage.setItem('userInfo' , JSON.stringify(this.userInfo));
            this.data = null;
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        }
      },
      err =>{
        this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
      }
    );
  }

}

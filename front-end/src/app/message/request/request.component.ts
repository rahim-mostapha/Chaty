import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests : Object [];

  constructor(private request : RequestService , private flashMessage : FlashMessagesService , private router : Router) { }

  ngOnInit() {
    this.request.getAllRequests().subscribe(
      res => {
        if(res['status'] === 'done'){
          if(res['data'].length > 0)this.requests = res['data'];
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
        }
      } , 
      err => {
        this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
      }
    );
  }

  // openChat(_id : string){
  //   this.router.navigate([`/message/chat/${_id}`]);
  // }

  rejectRequest(_id){
      this.request.rejectRequest({ _id}).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request rejected` , {cssClass : 'alert-success text-center'});     
            this.requests = this.requests.filter(item => item['_id'] !== _id);
            if(this.requests.length === 0)this.requests = null;
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        } , 
        err => {
          this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
        }
      );
  }
  acceptRequest(_id , friend){
      this.request.acceptRequest({ _id , friend}).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request accepted` , {cssClass : 'alert-success text-center'});
            this.requests = this.requests.filter(item => item['_id'] !== _id);
            if(this.requests.length === 0)this.requests = null;
          } else {
            this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
          }
        } , 
        err => {
          this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
        }
      );
  }

}

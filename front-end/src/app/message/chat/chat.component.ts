import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { RoomsService } from '../rooms.service';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  roomInfo : Object;
  requestInfo : Object;
  userInfo : Object= JSON.parse(localStorage.getItem('userInfo'));
  friendId : String;

  constructor(private request : RequestService , private room : RoomsService , private user : UserService ,
              private route : ActivatedRoute , private flashMessage : FlashMessagesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.friendId = params.get('_id');
    });
    this.getRoomInfo();
  }

  getRoomInfo() {
    this.room.haveRoom(this.friendId).subscribe(
      roomRes => {
        if(roomRes['status'] === 'done'){
          let data = roomRes['data'];
          if(data){
            // they have chat room
            this.roomInfo = data;
          } else {
            this.getRequestInfo();
          }
        } else {
          this.flashMessage.show(`${roomRes['status']} : ${roomRes['error']}` , {cssClass : 'alert-danger'});
        }
      },
      error => {
        this.flashMessage.show(error.message , {cssClass : 'alert-danger'});
      }
    );
  }

  getRequestInfo() {
    // check if they have chat friendship request or not
    this.request.haveRequest(this.friendId).subscribe(
      res => {
        if(res['status'] === 'done'){
          this.requestInfo = res['data'];
          if(this.requestInfo['to']._id === this.userInfo['_id'] && this.requestInfo['status'] === 0) this.requestInfo =null;
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
        }
      } ,
      err => {
        this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
      }
    );
  };
    
  sendRequest(){
    if(!this.requestInfo || this.requestInfo['status'] === 0){
      this.request.makeNewRequest(this.friendId).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`${res['status']}` , {cssClass : 'alert-success text-center'});
            this.getRequestInfo();        
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
  deleteRequest(){
    if(this.requestInfo){
      this.request.deleteRequest(this.requestInfo['_id']).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request deleted` , {cssClass : 'alert-success text-center'});
            this.getRequestInfo();        
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
  rejectRequest(){
    if(this.requestInfo){
      this.request.rejectRequest({ _id : this.requestInfo['_id']}).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request rejected` , {cssClass : 'alert-success text-center'});
            this.requestInfo = null;        
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
  acceptRequest(){
    if(this.requestInfo){
      this.request.acceptRequest({ _id : this.requestInfo['_id'] , friend : this.requestInfo['from']._id}).subscribe(
        res => {
          if(res['status'] === 'done'){
            this.flashMessage.show(`request accepted` , {cssClass : 'alert-success text-center'});
            this.getRoomInfo();
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

  showRequest(){
    console.log(this.roomInfo);
    console.log(this.requestInfo);
    console.log(this.userInfo);
  }
}

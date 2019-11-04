import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends : Object [];
  userInfo  = JSON.parse(localStorage.getItem('userInfo'));

  constructor(private room : RoomsService , private flashMessage : FlashMessagesService , private router : Router) { }

  ngOnInit() {
    this.room.getAllRooms().subscribe(
      res => {
        if(res['status'] === 'done'){
          if(res['data'].length > 0){
            this.friends = res['data'];
            this.friends.forEach( (item , i ) => {
              this.friends[i] = item['users'].filter(ele => ele['_id'] != this.userInfo['_id'])[0];
            } )
          }
          console.log(this.friends);
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert-danger'});
        }
      } , 
      err => {
        this.flashMessage.show(err.message , {cssClass : 'alert-danger'});
      }
    );
  }

  openChat(_id : string){
    this.router.navigate([`/message/chat/${_id}`]);
  }

}

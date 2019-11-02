import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : Object[];

  constructor(private user : UserService , private router : Router) { }

  ngOnInit() {
  }
  
  getUsers(ele : any){
    this.user.searchForUser(ele.value).subscribe(
      res => {
        if(res['status'] === 'done') this.users = res['data'];
      }
    );
  }

  randomNumber() : string {
    return Math.random().toString(16).slice(2, 8);
  }

  openChat(_id : string){
    this.router.navigate([`/message/chat/${_id}`]);
  }

}

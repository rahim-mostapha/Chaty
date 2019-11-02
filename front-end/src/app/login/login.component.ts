import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyValidation } from '../my-validation';
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  loginFormErrors : Object = {
    email: '',
    password: ''
  };
  pageCase : String = 'login';

  constructor(private fb : FormBuilder , private user : UserService , private flashMessage : FlashMessagesService ,
    private router : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['' , [Validators.required , MyValidation.email]] ,
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(30)]] ,
    });
    this.loginForm.valueChanges.subscribe( _ => {this.getFormError();});

  }

  hasError(field : string){
    return MyValidation.hasError(this.loginForm , field);
  }
  getFormError() {
    this.loginFormErrors = MyValidation.getFormError(this.loginForm);
  }

  onSubmit() {
    this.user.loginOrSignupOrUpdateUser(this.loginForm.value , 'login').subscribe(
      (res) => {
        if(res['status'] === 'done'){
          this.flashMessage.show(`done : welcom` , {cssClass : 'alert alert-success'});
          localStorage.setItem('token' , res['token']);
          localStorage.setItem('userInfo' , JSON.stringify(res['data']));
          location.href = '/profile';
        } else {
          this.flashMessage.show(`${res['status']} : ${res['error']}` , {cssClass : 'alert alert-danger'});
        }
      } , 
      (err) => {
        this.flashMessage.show(err.message , {cssClass : 'alert alert-danger'});
      }
    );
  }

}

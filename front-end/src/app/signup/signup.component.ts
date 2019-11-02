import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyValidation } from '../my-validation';
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  signupFormErrors : Object = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  pageCase : string = 'signup';

  constructor(private fb : FormBuilder , private user : UserService , private flashMessage : FlashMessagesService ,
              private router : Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname : ['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]] ,
      lastname : ['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]] ,
      email : ['' , [Validators.required , MyValidation.email]] ,
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(30)]] ,
    });
    this.signupForm.valueChanges.subscribe( _ => {this.getFormError();});

  }

  hasError(field : string){
    return MyValidation.hasError(this.signupForm , field);
  }
  getFormError() {
    this.signupFormErrors = MyValidation.getFormError(this.signupForm);
  }

  onSubmit() {
    this.user.loginOrSignupOrUpdateUser(this.signupForm.value , this.pageCase).subscribe(
      (res) => {
        if(res['status'] === 'done'){
          this.flashMessage.show(`done : You can login now` , {cssClass : 'alert alert-success'});
          this.router.navigate(['/login']);
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

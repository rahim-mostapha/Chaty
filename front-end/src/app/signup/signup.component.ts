import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyValidation } from '../my-validation';
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

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
  userInfo :Object;
  pageCase : string = 'signup';

  constructor(private fb : FormBuilder , private user : UserService , private flashMessage : FlashMessagesService ,
              private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname : ['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]] ,
      lastname : ['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]] ,
      email : ['' , [Validators.required , MyValidation.email]] ,
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.maxLength(30)]] ,
    });
    this.signupForm.valueChanges.subscribe( _ => {this.getFormError();});

    if(this.route.snapshot.routeConfig.path === 'profile'){
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.pageCase = 'update';
      this.signupForm.patchValue(
        { 
          firstname: this.userInfo['firstname'],
          lastname:  this.userInfo['lastname'],
          email:  this.userInfo['email']
       });
       this.signupForm.get('password').clearValidators();
    }

  }

  hasError(field : string){
    return MyValidation.hasError(this.signupForm , field);
  }
  getFormError() {
    this.signupFormErrors = MyValidation.getFormError(this.signupForm);
  }

  onSubmit() {
    let data = <Object>this.signupForm.value;
    console.log(data);
    if(this.pageCase === 'update'){
      if(data['password'] == '') delete data['password'];
    }
    console.log(data);
    this.user.loginOrSignupOrUpdateUser( data , this.pageCase).subscribe(
      (res) => {
        if(res['status'] === 'done'){
          if(this.pageCase === 'signup'){
            this.flashMessage.show(`done : You can login now` , {cssClass : 'alert alert-success'});
            this.router.navigate(['/login']);
          } else {
            this.flashMessage.show(`done` , {cssClass : 'alert alert-success'});
            this.userInfo['firstname'] = this.signupForm.get('firstname').value;
            this.userInfo['lastname'] = this.signupForm.get('lastname').value;
            this.userInfo['email'] = this.signupForm.get('email').value;
            localStorage.setItem('userInfo' , JSON.stringify(this.userInfo));
          }
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

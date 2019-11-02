import { FormGroup , AbstractControl } from '@angular/forms';

export class MyValidation {
    private static errors : Object = {
        required : ' is required field' ,
        minlength : ' has little character' ,
        maxlength : ' has much character' ,
        min : ' has small value' ,
        max : ' has large value' ,
        pattern : ' is not match pattern' ,
        email : 'this is not email' 
    }
    static errorMessage (error , fielname) : String{
        return `${fielname} ${this.errors[error]}`;
    }
    static hasError(form : FormGroup, field : string){
        return (form.get(field).invalid && (form.get(field).touched || form.get(field).dirty));
    }
    
    static getFormError(form : FormGroup) : Object {
        let signupFormErrors = {};
        Object.keys(form.controls).forEach( controll => {
          signupFormErrors[controll] = '';
          if(form.get(controll).invalid){
            Object.keys(form.get(controll).errors).forEach(error => {
              signupFormErrors[controll] += this.errorMessage(error , controll) + ' ';
            });
          }
        });
        return signupFormErrors;
    }

    static email(controll : AbstractControl ) : {[key : string] : Boolean} | null{
      let res = /[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9_\-]{3,9}\.[a-zA-Z0-9_\-]{3,6}/.test(controll.value);
      if(res){
        return null
      } else {
        return {'email' : true}
      }
    }
}

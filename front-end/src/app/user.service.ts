import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient , private jwt : JwtService) { }

  loginOrSignupOrUpdateUser(data : Object, path : string) : Observable<Object>{
    let token = this.jwt.getToken();
    return this.http.post<Object>(`http://localhost:3000/user/${path}` , data , {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responsError));
  }
  getUserData() : Observable<Object>{
    let token = this.jwt.getToken();
    return this.http.get<Object>(`http://localhost:3000/user/verifyAndGetData`, {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responsError));
  }

  responsError(error : HttpErrorResponse){
    if(error instanceof ErrorEvent){
      /// A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(error);;
  }

  isLoggedin() {
    return !this.jwt.isTokenExpire();
  }

}

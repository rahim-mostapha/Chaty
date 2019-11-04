import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtService } from '../jwt.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http : HttpClient , private jwt : JwtService) { }

  makeNewRequest(_id) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.post<Object>(`http://localhost:3000/request/new` , {_id} , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }

  getAllRequests() : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.get<Object>(`http://localhost:3000/request/all`, {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }

  haveRequest(_id) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.get<Object>(`http://localhost:3000/request/find/${_id}` , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }
  rejectRequest(data) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.post<Object>(`http://localhost:3000/request/reject/` , data , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }
  acceptRequest(data) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.post<Object>(`http://localhost:3000/request/accept/` , data , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }
  deleteRequest(_id) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.delete<Object>(`http://localhost:3000/request/delete/${_id}` , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }

  responseError(error : HttpErrorResponse) {
    if(error instanceof ErrorEvent){
      console.error(`back-end error : ${error.error.message}`);
    } else {
      console.error(`back-end developer send this error : ${error.message}`);
    }
    return throwError(error);
  }

}

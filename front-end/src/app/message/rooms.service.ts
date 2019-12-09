import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtService } from '../jwt.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(private http : HttpClient , private jwt : JwtService) { }

  makeNewRoom(_id) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.post<Object>(`room/new` , {_id} , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }

  getAllRooms() : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.get<Object>(`room/all`, {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }

  haveRoom(_id) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.get<Object>(`room/find/${_id}` , {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }).pipe(catchError(this.responseError));
  }
  deleteRoom(_id) : Observable<Object> {
    let token = this.jwt.getToken();
    return this.http.delete<Object>(`room/delete/${_id}` , {
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

import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken() : string {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    return localStorage.setItem('token' , token);
  }
  
  resetToken() {
    localStorage.removeItem('token');
  }

  isTokenExpire() : boolean {
    let token = this.getToken();
    if(token){
      let decoded = jwt_decode(token);
      const date = new Date(0); 
      date.setUTCSeconds(decoded.exp);
      return !(date.valueOf() > new Date().valueOf());
    } else {
      return true;
    }
  }

}

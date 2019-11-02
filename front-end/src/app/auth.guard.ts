import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router : Router , private jwt : JwtService){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    return this.checkLogin(); 
   }
   

  checkLogin() : boolean{
    if(!this.jwt.isTokenExpire()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}

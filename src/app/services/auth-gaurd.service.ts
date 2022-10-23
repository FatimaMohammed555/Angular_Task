import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(
    private router: Router) { }

    canActivate():boolean|Observable<boolean>{
      var token = localStorage.getItem('token');
      if(token)
      {
        return true
      }
      this.router.navigateByUrl("/Loggin");
      return false;
     }

}

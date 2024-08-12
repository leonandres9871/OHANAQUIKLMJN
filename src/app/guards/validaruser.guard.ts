import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router,CanActivateFn, CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class validaruserGuard implements CanActivate {

  iduser: any;

  constructor(private router:Router){}
  canActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    throw new Error('Method not implemented.');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.iduser = sessionStorage.getItem('id');

      if(this.iduser == null || this.iduser==""){
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
}





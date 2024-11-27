import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import {  Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {


  const auth=inject(AuthService);
  const _Router=inject(Router);



  if(auth.is_login.getValue()){
    
    return true;
  }
 else{
  _Router.navigate(['/login']);
  return false
 }


};



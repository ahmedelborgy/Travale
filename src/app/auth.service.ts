import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  is_login=new BehaviorSubject(false);
  userDataShare:string=' ';

  basUrl:string='https://ecommerce.routemisr.com';


  constructor(private _HttpClient:HttpClient ,private _Router:Router ) {
    if(localStorage.getItem('userToken') !=null){
      this.is_login.next(true)
    }
    else{
      this.is_login.next(false);
    }
  }
  
    
// sher user data token
 sherTokenData():void{
  let encodecToke=localStorage.getItem('userToken');
  console.log(encodecToke)
  
  
  this.userDataShare=jwtDecode(JSON.stringify(encodecToke));
  console.log(this.userDataShare);
  }
  
  
 
sendRegister(user:any):Observable<any>{
  return this._HttpClient.post(this.basUrl+'/api/v1/auth/signup',user);
 }
 login(userLogin:any):Observable<any>{
 return this._HttpClient.post(this.basUrl + '/api/v1/auth/signin',userLogin);
 }
 //--------- logOut---------------
 logOut():void{
 this._Router.navigate(['/login']);
 this.is_login.next(false);

  }
}


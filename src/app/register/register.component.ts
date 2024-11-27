import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
 import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  messErr :string = '';
  loading:boolean=false;

    constructor(private _AuthotactionService:AuthService,private _Router:Router) {
     
    }




    userForm: FormGroup = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [
        Validators.required,
      Validators.email
      ]),
  
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[10245][0-9]{8}$/)
      ]),
  
      password: new FormControl(null, [
        Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ])
    },this.validatorPass);
    validatorPass(fg: any) {
      return fg.get('password').value === fg.get('rePassword').value
         ? null : {'mismatch': true};
   }
   



   showFormData(userForm: FormGroup) {
    this.loading=true;
    if(userForm.valid){
      console.log(userForm.value)
    }
  
    this._AuthotactionService.sendRegister(userForm.value).subscribe(
  {
  
  next:(res:any)=> {
    
    console.log('respons is res');
    console.log(res);
    this._Router.navigate(['/login'])
    this.loading=false
  
  },
  error:(err:any)=> {
    console.log('respons is err');
    console.log(err)
    console.log(err.error)
    console.log(err.error.message)
    this.messErr=err.error.message;
   this.loading=false
  },
  complete:()=>{
    console.log('complet')
  }
  
  
  
  
  
  
  
  
  }
  
  
  
  
  
  
  
  
  
    )
  }
  


  goLogin(){
    this._Router.navigate(['/login']);
  
   }
  
}

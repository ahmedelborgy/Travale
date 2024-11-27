import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginMess: string = '';
  is_load: boolean = false;
  constructor(private _auth: AuthService, private _Router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
  });

  singin(loginForm: any) {
    this.is_load = true;
    if (this.loginForm.valid) console.log(this.loginForm.value);

    this._auth.login(loginForm.value).subscribe({
      next: (res) => {
        this.is_load = false;
        // 1-to to header
        // 2-localStorge
        // 3-aklem auth to store data ,sheard data
        console.log('success');

        if (res.message == 'success') {
          this.loginMess = res.message;

          console.log(res.token);
          localStorage.setItem('userToken', res.token);
          localStorage.setItem('checkLogin', 'true');
          this._auth.sherTokenData();

          this._Router.navigate(['/header']);
          this._auth.is_login.next(true);
        }
      },
      error: (err) => {
        this.is_load = false;
        console.log('error');
        console.log(err.error.message);

        this.loginMess = err.error.message;
      },
    });
  }

  goRegister() {
    this._Router.navigate(['/register']);
  }
}

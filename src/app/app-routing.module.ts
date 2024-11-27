import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { authGuard } from './auth.guard';

const routes: Routes = [

  {path:'',redirectTo:'/login',pathMatch:'full'},
   {path:"register",component:RegisterComponent},
   {path:"login",component:LoginComponent},
   {path:"header",component:HeaderComponent,canActivate:[authGuard]},

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

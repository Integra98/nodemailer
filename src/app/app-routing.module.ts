import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { LoginComponent } from './login/login.component';
import { NotloginComponent } from './notlogin/notlogin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', component: AuthComponent },
  { path: 'auth2', component: Auth2Component },
  { path: 'login', component: LoginComponent },
  { path: 'notlogin', component: NotloginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

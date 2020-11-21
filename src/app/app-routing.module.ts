import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { DetailspageComponent } from './detailspage/detailspage.component';

import { LoginformComponent } from './loginform/loginform.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: LoginformComponent},
  {path:'details', component:DetailspageComponent},
  {path:'pass', component:PasswordComponent},
  {path:'change-password',component:ChangepasswordComponent},
  {path:'policy-page',component:DetailspageComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

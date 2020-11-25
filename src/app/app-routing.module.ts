import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './auth.guard';


import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { DetailspageComponent } from './detailspage/detailspage.component';

import { LoginformComponent } from './loginform/loginform.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: LoginformComponent},
  {path:'details', component:DetailspageComponent,canActivate:[AuthGuard]},
  {path:'pass', component:PasswordComponent},
  {path:'change-password',component:ChangepasswordComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

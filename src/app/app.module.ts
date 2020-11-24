import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { Details1Component } from './details1/details1.component';
import { Details2Component } from './details2/details2.component';
import { PasswordComponent } from './password/password.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { Admin2Component } from './admin2/admin2.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';









@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    DetailspageComponent,
    LoginformComponent,
    Header1Component,
    Footer1Component,
    Details1Component,
    Details2Component,
    PasswordComponent,
    ChangepasswordComponent,
    AdminComponent,
    Admin2Component,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MaterialFileInputModule,
    ReactiveFormsModule
    
    
    
  
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

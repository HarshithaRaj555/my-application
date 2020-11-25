
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  
  login(userForm : FormGroup) : boolean {
     if(userForm.value.username === "Harshitha" && userForm.value.password === "111") {
      localStorage.setItem('isLoggedIn',"true")
      return true;
     }
     else {
       localStorage.setItem('isLoggedIn',"false")
       return false;
     }
  }
  isLoggedIn():boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}











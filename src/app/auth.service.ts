import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: "harshitha"
  password: 123;
  constructor() { }

  form : FormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })
  isCredentials() : boolean {
    //if(this.form.value.username == "harshitha" && this.form.value.password == "123") {

      
      return true;
    }
    
  }

//}

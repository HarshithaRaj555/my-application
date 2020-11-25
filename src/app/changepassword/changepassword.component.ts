import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  constructor(public Service: AuthService, private router: Router) { }
  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('',[Validators.required]),
    reEnterPassword: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }
  verifypassword() {
    if (this.changepassword.value.newPassword == this.changepassword.value.reEnterPassword) {
      alert("Password successfully changed!!");
      this.router.navigate(['home']);
    } else {
      alert("Passwords do not match!!");
      this.router.navigate(['change-password'])
    }
  }

}

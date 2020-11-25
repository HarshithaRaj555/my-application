import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  userForm : FormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  authenticate() : void {
    if(this.authService.login(this.userForm)) {
      this.router.navigate(['details']);
    }
    else {
      alert("Login failed: Invalid Username or Password!");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetailspageComponent } from '../detailspage/detailspage.component';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.scss']
})
export class Admin2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Admin2Component>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }

}

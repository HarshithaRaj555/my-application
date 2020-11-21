import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminComponent>) { }

  ngOnInit(): void {
  }
     closeDialog() {
       this.dialogRef.close();
     }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Details } from './Details';
import { DETAILS } from './Detailslist';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  detailsList: Details[] = DETAILS;
  details: Details = {
    name: '',
    employeeID: '',
    mailID: ''
    
  };

  deleteDetails(details: Details): void {
    this.detailsList.forEach((item, index) => {
      if (item === details) {
        this.detailsList.splice(index, 1);
      }
    });
    
  }

  addDetails(): void {
    const tempDetails: Details = { ...this.details };
    this.detailsList.unshift(tempDetails);
    
  }

  constructor(public dialogRef: MatDialogRef<AdminComponent>) { }

  ngOnInit(): void {
  }
     closeDialog() {
       this.dialogRef.close();
     }

}

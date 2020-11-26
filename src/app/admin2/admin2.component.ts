import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Details } from '../admin/Details';

import { DETAILS } from '../admin/Detailslist';

import { DetailspageComponent } from '../detailspage/detailspage.component';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.scss']
})
export class Admin2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Admin2Component>) { }
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


  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }

}

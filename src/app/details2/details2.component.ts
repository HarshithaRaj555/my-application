import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';
import { Admin2Component } from '../admin2/admin2.component';


@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.scss']
})
export class Details2Component implements OnInit {
  closeIcon = "add";
  overlay = false;
  toggleOverlayMode = () => {
    this.overlay = !this.overlay;
    this.closeIcon = this.closeIcon === "add"? "close" : "add";
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(AdminComponent);
    
  }
  openDialog1(){
    this.dialog.open(Admin2Component);
  }

}

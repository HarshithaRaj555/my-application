import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

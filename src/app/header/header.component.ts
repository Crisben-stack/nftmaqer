import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visibility = false;

  width = 60;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.visibility = !this.visibility;
  }

  onMouseOver(){
      this.width += 20;
  }

  onMouseLeave() {
      this.width = 60;
  }

}

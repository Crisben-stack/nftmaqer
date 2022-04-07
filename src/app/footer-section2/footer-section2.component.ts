import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section2',
  templateUrl: './footer-section2.component.html',
  styleUrls: ['./footer-section2.component.scss']
})
export class FooterSection2Component implements OnInit {

  visibility = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
      this.visibility = !this.visibility
  }

}

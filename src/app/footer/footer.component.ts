import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	initDate = "2017";
  constructor() { }

  ngOnInit() {
  }

}

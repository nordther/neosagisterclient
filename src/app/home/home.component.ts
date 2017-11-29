import { Component, OnInit } from '@angular/core';
import {ObserversModule} from '@angular/cdk/observers';
@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lists:any[] = [];

  constructor() { 
  	this.lists = [
      {src: 'assets/img/card-img/c1.jpg', cols:1, rows: 1, color: '#fffffff'},
      {src: 'assets/img/card-img/c1.jpg', cols:1, rows: 1, color: '#fffffff'},
      ];
      
  }

  ngOnInit() {
  }

}

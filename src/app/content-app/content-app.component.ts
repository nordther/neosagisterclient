import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'neo-content-app',
  templateUrl: './content-app.component.html',
  styleUrls: ['./content-app.component.css']
})

export class ContentAppComponent implements OnInit {

  routes:any = window.location.pathname;

  constructor(private route:ActivatedRoute) { 
  	
  }

  ngOnInit() {
  }
  
}

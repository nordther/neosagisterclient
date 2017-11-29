import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'neo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	 @ViewChild('sidenav') sidenav: MatSidenav;
  title_navbar = "Neosagister S.A";
  reason = ''; 
   

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor() {
     

  }

  ngOnInit() {

  }
 


}

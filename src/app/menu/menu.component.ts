import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:any [] = [];

  constructor() { 
  	this.menu = [
	  		{
          nameTitle:"home", 
          nameIcon:"home",
          menuToolbar:{idMenu:"home",
	                  	items:[
	                  	   	{titleItem:"menu-home-1"},
		                  	{titleItem:"menu-home-2"},
		                  	{titleItem:"menu-home-3"},
	                  	]
              		}
          },
          {
          nameTitle:"about", 
          nameIcon:"public",
          menuToolbar:{idMenu:"about",
	                  	items:[
	                  	   	{titleItem:"menu-about-1"},
		                  	{titleItem:"menu-about-2"},
		                  	{titleItem:"menu-about-3"},
	                  	]
              		}
          },
          {
          nameTitle:"services", 
          nameIcon:"phonelink",
          menuToolbar:{idMenu:"services",
	                  	items:[
	                  	   	{titleItem:"menu-services-1"},
		                  	{titleItem:"menu-services-2"},
		                  	{titleItem:"menu-services-3"},
	                  	]
              		}
          },
          {
          nameTitle:"contact", 
          nameIcon:"inbox",
          menuToolbar:{idMenu:"contact",
	                  	items:[
	                  	   	{titleItem:"menu-contact-1"},
		                  	{titleItem:"menu-contact-2"},
		                  	{titleItem:"menu-contact-3"},
	                  	]
              		}
          }];
   		console.log(this.menu); 
  }

  ngOnInit() {
  	;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.css']
})
export class AdminSpaceComponent implements OnInit {

  profileOn=false;
  clientsOn=false;
  categoryOn=false;
  articleOn=false;
  analyticsOn=true;

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {

      $('.sidenav').sidenav();
      //$('.materialboxed').materialbox();
    });


  }

  //Routing components
  turnProfileOn(){
    this.profileOn=true;
    this.articleOn=this.categoryOn=this.clientsOn=this.analyticsOn=false;

  }
  turnDashboard(){
    this.analyticsOn=true;
    this.articleOn=this.categoryOn=this.clientsOn=this.profileOn=false;
  }


  turnClientsOn(){
    this.clientsOn=true;
    this.articleOn=this.categoryOn=this.analyticsOn=this.profileOn=false;
  }

  turnCategoryOn(){
    this.categoryOn=true;
    this.articleOn=this.clientsOn=this.analyticsOn=this.profileOn=false;
  }

  turnArticleOn(){
    this.articleOn=true;
    this.categoryOn=this.clientsOn=this.analyticsOn=this.profileOn=false;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.css']
})
export class AdminSpaceComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $(document).ready(() => {

      $('.sidenav').sidenav();
    });

  }



}

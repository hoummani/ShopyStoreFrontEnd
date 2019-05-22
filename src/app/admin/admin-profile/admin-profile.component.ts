import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {

      $('.modal').modal();
    });
  }

}

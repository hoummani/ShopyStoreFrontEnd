import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      $('.select').formSelect();


    });
  }

}

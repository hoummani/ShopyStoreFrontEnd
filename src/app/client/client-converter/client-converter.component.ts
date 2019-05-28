import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-client-converter',
  templateUrl: './client-converter.component.html',
  styleUrls: ['./client-converter.component.css']
})
export class ClientConverterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      $('.select').formSelect();


    });
  }

}

import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {

      $('.slider').slider({indicators:false});
      $('.parallax').parallax();
      $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "IBM": null,
        "StarBox": null,
        "Camera": null,
        "Phone": null,
        "Clothes": null,
        "Shoes": null,
        "T-Shorts": null,
        "Google": 'https://placehold.it/250x250'
      },
      });
      $('.materialboxed').materialbox();
      $('.scrollspy').scrollSpy();
    });
  }

}

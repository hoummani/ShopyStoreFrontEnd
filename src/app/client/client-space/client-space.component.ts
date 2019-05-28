import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-space',
  templateUrl: './client-space.component.html',
  styleUrls: ['./client-space.component.css']
})
export class ClientSpaceComponent implements OnInit {
  articleOn:boolean=false;
  cartOn:boolean=false;
  converterOn:boolean=false;
  orderOn:boolean=false;

  constructor() { }

  ngOnInit() {
    this.triggerArticle();
  }

  triggerArticle(){
    this.articleOn=true;
    this.cartOn=this.converterOn=this.orderOn=false;
  }

  triggerCart(){
    this.cartOn=true;
    this.articleOn=this.converterOn=this.orderOn=false;
  }

  triggerConverter(){
    this.converterOn=true;
    this.cartOn=this.articleOn=this.orderOn=false;
  }

  triggerOrder(){
    this.orderOn=true;
    this.cartOn=this.converterOn=this.articleOn=false;
  }

}

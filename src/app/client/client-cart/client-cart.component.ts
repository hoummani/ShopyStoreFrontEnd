import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
declare var $: any;




export interface Cart{
  id:number;
  designation:string;
  price:number;
  photo:string;
  quantity:number;
  orderDate:Date;
}
//------------------------------------------>

const ELEMENT_DATA: Cart[] = [
  {id:1,designation:'Xperia',price:210,photo:'assets/images/Articles/xperia.png',quantity:15,orderDate:new Date()},
  {id:2,designation:'Nokia',price:110,photo:'assets/images/Articles/nokia-8-1-2018-fr.png',quantity:150,orderDate:new Date()},
  {id:3,designation:'Samsung',price:560,photo:'assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png',quantity:105,orderDate:new Date()},
];

@Component({
  selector: 'app-client-cart',
  templateUrl: './client-cart.component.html',
  styleUrls: ['./client-cart.component.css']
})
export class ClientCartComponent implements OnInit {

  displayedColumns: string[] = ['id', 'designation','price', 'photo','quantity','orderDate'];
  dataSource = new MatTableDataSource<Cart>(ELEMENT_DATA);

  globalPrice:number=0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  ngOnInit() {
    //Jquery
    $(document).ready(function(){


    });
    //TypeScript
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.calculateGlobalPrice();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateGlobalPrice(){
    for (const item of ELEMENT_DATA) {
      this.globalPrice+=item.price;
    }

  }

}

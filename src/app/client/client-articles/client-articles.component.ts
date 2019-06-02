import { Category } from './../../model/category.model';
import { CategoryServiceService } from './../../service/category-service.service';
import {Component, OnInit} from '@angular/core';



declare var $: any;


export interface Article {
  designation: string;
  id: number;
  price: number;
  photo:string;

}

const ELEMENT_DATA: Article[] = [
  {id:1, designation:"Xperia", price:250, photo:"assets/images/Articles/xperia.png"},
  {id:2, designation:"Samsung", price:150,photo:"assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png"},

  {id:3, designation:"Nokia", price:650,photo:"assets/images/Articles/nokia-8-1-2018-fr.png"},
  {id:4, designation:"Xperia", price:250, photo:"assets/images/Articles/xperia.png"},
  {id:5, designation:"Samsung", price:150,photo:"assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png"},

  {id:6, designation:"Nokia", price:650,photo:"assets/images/Articles/nokia-8-1-2018-fr.png"},
  {id:7, designation:"Xperia", price:250, photo:"assets/images/Articles/xperia.png"},
  {id:8, designation:"Samsung", price:150,photo:"assets/images/Articles/samsung-galaxy-s10-2019-frandroid.png"},

  {id:9, designation:"Nokia", price:650,photo:"assets/images/Articles/nokia-8-1-2018-fr.png"},



];
//------------------------------------------------->

@Component({
  selector: 'app-client-articles',
  templateUrl: './client-articles.component.html',
  styleUrls: ['./client-articles.component.css']
})
export class ClientArticlesComponent implements OnInit {

  constructor(public catService:CategoryServiceService){}

  categories:Category[];
  articles=ELEMENT_DATA;

/*
  displayedColumns: string[] = ['id', 'designation','photo', 'price','detail'];
  dataSource = new MatTableDataSource<Article>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  */
  ngOnInit() {

    this.loadCategories();

    $(document).ready(function(){
      $('.materialboxed').materialbox();
      $('.select').formSelect();
    });
    //TypeScript


    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  loadCategories(){
    this.catService.getAllCategories().subscribe(data=>{
      this.categories=data as Category[];
    },
    err=>{
      console.log(err);
    }
    );
  }


  filterMyOptions(event){
    console.log(event.name);
  }
}

import { CategoryServiceService } from './../../service/category-service.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Category } from 'src/app/model/category.model';




import {
  FormGroup,

  FormBuilder,
  Validators,

} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

declare var $: any;



@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  displayedColumns: string[] = ['categoryId', 'name','update','delete'];


  addCatForm: FormGroup;
  updateCatForm:FormGroup;
  submitted = false;
  dataSource= new MatTableDataSource<Category>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private catService:CategoryServiceService,private form: FormBuilder,private router: Router,private toastr: ToastrService) {}

  ngOnInit() {


    this.loadCategories();
    //JQuery
    $(document).ready(() => {

      $('.modal').modal();
    });

    //TypeScript

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.initAddCategoryForm();
    this.initUpdateCatFirst();
  }

  ngAfterViewInit(): void {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  loadCategories(){
    this.catService.getAllCategories().subscribe(data=>{
      this.dataSource.data=data as Category[];

    },
    err=>{
      console.log(err);
    }
    );
  }
  //==========================>
  //        Add new Category
  //==========================>
  initAddCategoryForm(){
    this.addCatForm = this.form.group({

      name: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() {
    return this.addCatForm.controls;
  }

  onAddCatSubmit() {
    //this.submitted = true;
    // stop here if form is invalid
    if (this.addCatForm.invalid) {
      return;
    }
    this.catService.postCategory(this.addCatForm.value).subscribe(data=>{

      this.toastr.success("the cat added !");
      this.loadCategories();
    },err=>{
      console.log(err);
      this.toastr.error('Something rong !', 'Major Error', {timeOut: 3000});
    });


  }
  //=============================>
  //        Update Category
  //=============================>

  initUpdateForm(formData){
    this.updateCatForm = this.form.group({
      categoryId:[formData.categoryId],
      name: [formData.name, [Validators.required, Validators.minLength(4)]]
    });
  }

  initUpdateCatFirst(){
    this.updateCatForm = this.form.group({

      name: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  onUpdateCat(data){
    //console.log(data);
    this.initUpdateForm(data);
  }

  onUpdateCatSubmit(){
    //console.log(this.updateCatForm.value);
    if (this.updateCatForm.invalid) {
      return;
    }
    this.catService.putCategory(this.updateCatForm.value.categoryId,this.updateCatForm.value).subscribe(data=>{

      this.toastr.success("the cat updated !");
      this.loadCategories();
    },err=>{
      console.log(err);
      this.toastr.error('Something rong !', 'Major Error', {timeOut: 3000});
    });
  }

  get fUp() {
    return this.updateCatForm.controls;
  }

  //========================>
  //      Delete Category
  //=========================?

  onDeleteCat(cat){
    //console.log(cat.categoryId);
    var r = confirm("Are You Sure You Want To Delete :"+cat.name);
    if (r == true) {

      this.catService.deleteCat(cat.categoryId).subscribe(data=>{
        this.toastr.success("Removed successfully !");
        this.loadCategories();
      },err=>{
        this.toastr.warning("You have some issue !");
      });
    } else {

    }
  }
}



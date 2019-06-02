import { Category } from './../model/category.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  readonly categoriesUrl="https://localhost:5001/api/Categories";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};

  category:Category;

  constructor(private http:HttpClient) { }



  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getCategory(id): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl+"/"+id);
  }

  postCategory(cat:Category){
    return this.http.post(this.categoriesUrl,cat);
  }


  putCategory(id,cat:Category){
    return this.http.put(this.categoriesUrl+"/"+id,cat);
  }

  deleteCat(id){
    return this.http.delete(this.categoriesUrl+"/"+id);
  }
}

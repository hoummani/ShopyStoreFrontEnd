import { Article } from './../admin/admin-articles/admin-articles.component';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  readonly articlesUrl="https://localhost:5001/api/Articles";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}

  constructor(private http:HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticle(id): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl+"/"+id);
  }

  postArticle(cat:Article){
    return this.http.post(this.articlesUrl,cat);
  }


  putArticle(id,cat:Article){
    return this.http.put(this.articlesUrl+"/"+id,cat);
  }

  deleteArticle(id){
    return this.http.delete(this.articlesUrl+"/"+id);
  }
}

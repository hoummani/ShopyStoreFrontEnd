import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(){
    //localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    //return localStorage.getItem('ACCESS_TOKEN') !== null;
    return true;

  }

  public logout(){
    //localStorage.removeItem('ACCESS_TOKEN');
  }
}

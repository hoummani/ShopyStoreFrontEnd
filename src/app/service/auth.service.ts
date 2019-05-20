import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //adminAuthenticated:boolean;

  @Output() adminAuthenticated: EventEmitter<any> = new EventEmitter();


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
  //============ Admin Space ==================
  public isAdminAuthenticated(){
    return this.adminAuthenticated;
  }

  public onLoginAdmin(){
    let state=true;
    this.adminAuthenticated.emit(state);
  }
}

import { AuthService } from './service/auth.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dotNetCoreProject';

  adminIsAutheticated:boolean;
  clientIsAuthenticated:boolean;


  constructor(private authService:AuthService){
    authService.adminAuthenticated.subscribe(state=>this.isAdminAutheticated(state));
    authService.clientAuthenticated.subscribe(state=>this.isClientAutheticated(state));
  }


  ngOnInit() {
    $(document).ready(() => {
      $('.sidenav').sidenav();
      $('.dropdown-trigger').dropdown();
    });

    //TypeScript


  }
  //--------------- Admin methods
  private isAdminAutheticated(state:boolean):void{
    this.adminIsAutheticated=state;
    console.log(this.adminIsAutheticated);
  }

  //------------- User methods
  private isClientAutheticated(state:boolean):void{
    this.clientIsAuthenticated=state;
    console.log(this.clientIsAuthenticated);
  }

}

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


  constructor(private authService:AuthService){
    authService.adminAuthenticated.subscribe(state=>this.isAdminAutheticated(state));
  }


  ngOnInit() {
    $(document).ready(() => {
      $('.sidenav').sidenav();
      $('.dropdown-trigger').dropdown();
    });

    //TypeScript


  }

  private isAdminAutheticated(state:boolean):void{
    this.adminIsAutheticated=state;
    console.log(this.adminIsAutheticated);
  }

}

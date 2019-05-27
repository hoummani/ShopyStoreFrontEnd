

import { AdminSpaceComponent } from './admin/admin-space/admin-space.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './404/error/error.component';
import { ClientSpaceComponent } from './client/client-space/client-space.component';
import { ClientArticlesComponent } from './client/client-articles/client-articles.component';
import { ClientCartComponent } from './client/client-cart/client-cart.component';
import { ClientOrderComponent } from './client/client-order/client-order.component';
import { ClientConverterComponent } from './client/client-converter/client-converter.component';


const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},

  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent, pathMatch:'full'},
  //----------    Admin
  {path:'adminHome', component:AdminSpaceComponent, pathMatch:'full'},


  //User

  {path:'clientHome', component:ClientSpaceComponent, pathMatch:'full'},
  {path:'clientArtcles', component:ClientArticlesComponent, pathMatch:'full'},
  {path:'clientCart', component:ClientCartComponent, pathMatch:'full'},
  {path:'clientOrder', component:ClientOrderComponent, pathMatch:'full'},
  {path:'clientConverter', component:ClientConverterComponent, pathMatch:'full'},
  //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
  {path:'**', component:ErrorComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

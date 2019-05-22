
import { EtudiantSpaceComponent } from './etudiant/etudiant-space/etudiant-space.component';
import { AdminSpaceComponent } from './admin/admin-space/admin-space.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './404/error/error.component';


const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},

  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent, pathMatch:'full'},

  //----------    Admin
  {path:'adminHome', component:AdminSpaceComponent, pathMatch:'full'},


  {path:'etudiantHome', component:EtudiantSpaceComponent, pathMatch:'full'},
  {path:'**', component:ErrorComponent, pathMatch:'full'},


  //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

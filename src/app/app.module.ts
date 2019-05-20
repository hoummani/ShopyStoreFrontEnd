import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ErrorComponent } from './404/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EtudiantSpaceComponent } from './etudiant/etudiant-space/etudiant-space.component';
import { AdminSpaceComponent } from './admin/admin-space/admin-space.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,

    ErrorComponent,

    EtudiantSpaceComponent,

    AdminSpaceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    AppRoutingModule,

  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { AdminSpaceComponent } from './admin/admin-space/admin-space.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminAnalyticsComponent } from './admin/admin-analytics/admin-analytics.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';

import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    AdminSpaceComponent,
    AdminProfileComponent,
    AdminAnalyticsComponent,
    AdminClientsComponent,
    AdminArticlesComponent,
    AdminCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    AppRoutingModule, MatTableModule, MatPaginatorModule, MatSortModule,MatFormFieldModule,

  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

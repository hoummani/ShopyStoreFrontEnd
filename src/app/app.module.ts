import { ArticleServiceService } from './service/article-service.service';
import { CategoryServiceService } from './service/category-service.service';
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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminAnalyticsComponent } from './admin/admin-analytics/admin-analytics.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';

import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';

import {MatDialogModule} from '@angular/material/dialog';

import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ClientSpaceComponent } from './client/client-space/client-space.component';
import { ClientArticlesComponent } from './client/client-articles/client-articles.component';
import { ClientCartComponent } from './client/client-cart/client-cart.component';
import { ClientConverterComponent } from './client/client-converter/client-converter.component';
import { ClientOrderComponent } from './client/client-order/client-order.component';


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
    ClientSpaceComponent,
    ClientArticlesComponent,
    ClientCartComponent,
    ClientConverterComponent,
    ClientOrderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    AppRoutingModule, MatTableModule, MatPaginatorModule, MatSortModule,MatFormFieldModule,MatDialogModule,
    MatSelectModule,

    NgxMatSelectSearchModule

  ],
  providers: [
    AuthService,
    AuthGuardService,
    CategoryServiceService,
    ArticleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

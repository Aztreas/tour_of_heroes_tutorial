import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnviromentComponent } from './enviroment/enviroment.component';
import { AppRoutingModule } from './/app-routing.module';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EnviromentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

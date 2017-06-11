import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, PreloadAllModules } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrr6OeDrSMl8cHbaGGWni717889TWZxg0'
    }),
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

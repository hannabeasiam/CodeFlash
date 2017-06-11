import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login.component';
import { FindEventComponent } from './findEvent.component';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindEventComponent,
    LoginComponent
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
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'findEvent',
        component: FindEventComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

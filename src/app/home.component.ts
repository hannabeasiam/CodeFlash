import { Component } from '@angular/core';
import {RouterModule, PreloadAllModules } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent{

  loadSignUp(): any {
        alert("this is a test");
    }
}
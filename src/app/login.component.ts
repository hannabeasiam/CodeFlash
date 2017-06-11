import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Response } from '@angular/http';

import { User } from './User'
import { codeFlashBackend } from "./codeFlash_backend.service";

@Component({
    selector: 'login-user',
    templateUrl: './login.component.html',
    providers: [codeFlashBackend]
})
export class LoginComponent {
    userName: string;
    passWord: string;
    
    constructor(private router: Router, private ucb: codeFlashBackend){

    }

    userLogin(): any {
        alert('submitting shit');
    }
}
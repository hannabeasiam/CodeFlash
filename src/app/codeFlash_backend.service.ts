import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './User';
import { Event } from './Event';

const SERVER_ADDR = "https://dry-beyond-53464.herokuapp.com";
const API_ENDPOINT_ROUTES = {
    'login': SERVER_ADDR + '/login',
    'createUser': SERVER_ADDR + '/createUser',
    'getEvent': SERVER_ADDR + '/getEvent',
    'createEvent': SERVER_ADDR + '/createEvent',
    'deleteEvent': SERVER_ADDR + '/deleteEvent'
}

@Injectable()
export class codeFlashBackend {
    constructor ( private http: Http) {}

    userLogin(userName: string, passWord: string): Observable<User> {
        return this.http.get(API_ENDPOINT_ROUTES['login'] + '/' + userName + '/' + passWord)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        console.log('currently looking at ', res);
        let data = res.json();
        if (data.length !== 1) {
            console.error('Unexpected data length for json: ' + data);
        }
        return data[data.length - 1] || { };
    }

    createUser(element: any): Observable<Response> {
        return this.http.post(API_ENDPOINT_ROUTES['createUser'], element, null);
    }

    getEvent(): Observable<Event> {
        return this.http.get(API_ENDPOINT_ROUTES['getEvent'])
        .map(this.extractData);
    }

    createEvent(element: any): Observable<Response> {
        return this.http.post(API_ENDPOINT_ROUTES['createEvent'], element, null);
    }

    deleteEvent(id: string): Observable<Response> {
        return this.http.delete(API_ENDPOINT_ROUTES['deleteEvent'] + '/' + id);
    }
}
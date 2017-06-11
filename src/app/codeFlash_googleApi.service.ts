import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Location }from './Location';
import { User } from './User';
import { Event } from './Event';

const GOOGLE_GEO_LOCATION_URL = "https://maps.googleapis.com/maps/api/geocode/json?";
const KEY = "AIzaSyCrr6OeDrSMl8cHbaGGWni717889TWZxg0";

@Injectable()
export class GoogleApiService {

    constructor ( private http: Http) {}

    findByAddress(address: string): Observable<Location> {
        return this.http.get(GOOGLE_GEO_LOCATION_URL + "address=" + address + "&key=" + KEY)
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
}
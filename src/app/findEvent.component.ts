import { Component } from '@angular/core';

import { GoogleApiService } from './codeFlash_googleApi.service';
import { Location } from './Location';
import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'app-root',
    templateUrl: './findEvent.component.html',
    styleUrls: ['./findEvent.component.css'],
    providers: [GoogleApiService]
})
export class FindEventComponent {
    constructor(private googleApi: GoogleApiService, ) {}

    address: string;
    lat: number = 42.858217;
    lng: number = -70.929990;

    getLocation(): any {
        this.googleApi.findByAddress
    }
}
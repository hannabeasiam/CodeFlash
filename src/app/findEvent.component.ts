import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './findEvent.component.html',
    styleUrls: ['./findEvent.component.css']
})
export class FindEventComponent {
    constructor() {}

    lat: number = 42.858217;
    lng: number = -70.929990;
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class testComponent implements OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() {
    }
}
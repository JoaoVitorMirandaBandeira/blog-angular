import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent implements OnInit {

    @Input() titulo: string = ``;
    @Input() url: string = ``;
    @Input() data: string = ``;

    constructor() {}

    ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-big-card',
    templateUrl: './big-card.component.html',
    styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {

    @Input() titulo:string = ``
    @Input() descricao:string = ``
    @Input() url:string = ``
    @Input() data: string = ``
    
    constructor() {}

    ngOnInit(): void {}
}

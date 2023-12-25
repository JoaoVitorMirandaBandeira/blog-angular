import { Component, OnInit } from '@angular/core';
import {Data,Noticia} from 'src/data/data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    noticiaPrincipal: Noticia | null = null
    noticiasAgregadas: Noticia[] | null = null
    constructor() {
        this.noticiaPrincipal = Data[0]
        this.noticiasAgregadas = Data.slice(1)
    }

    ngOnInit(): void {}
}

import { 
    Http, 
    Headers, 
    Response 
} from '@angular/http';

import { Injectable } from '@angular/core';

import { Horario } from './horario';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BaseListaHorariosService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/horarios';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public buscaHorarios(): Observable<Horario[]> {
        return this.http
            .get(this.url)
            .pipe(map(res => res.json())); 
    }

}
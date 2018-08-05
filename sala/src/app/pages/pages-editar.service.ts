import { 
    Http, 
    Headers, 
    Response 
} from '@angular/http';

import {HttpParams} from "@angular/common/http";

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Horario } from '../base/horario';
import { PagesResposta } from './pages-resposta';

@Injectable({providedIn: 'root'})
export class PagesEditarService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/editar/:id';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public editar(horario: Horario): Observable<PagesResposta> {
        let body = horario;
        let request = this.url.replace(':id', horario._id)
        return this.http
            .put(request, body)
            .pipe(map(res => res.json())); 
    }

}
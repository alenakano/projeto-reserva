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
export class PagesAdicionarService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/adicionar/';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public adicionar(horario: Horario): Observable<PagesResposta> {
        let body = horario;
        return this.http
            .post(this.url, body)
            .pipe(map(res => res.json())); 
    }

}
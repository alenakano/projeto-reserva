import { 
    Http, 
    Headers, 
    Response 
} from '@angular/http';

import { Injectable } from '@angular/core';

import { Horario } from '../base/horario';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PagesResposta } from './pages-resposta';

@Injectable({providedIn: 'root'})
export class PagesExcluirService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/deletar/:id';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public excluir(horario:Horario): Observable<PagesResposta> {
        let request = this.url.replace(':id', horario._id)
        return this.http
            .delete(request)
            .pipe(map(res => res.json())); 
    }

}
import { 
    Injectable
 } from '@angular/core';

 import {
     Http,
     Headers,
     Response
   } from '@angular/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { PagesUser } from './pages-user';
import { PagesResposta } from './pages-resposta';

 @Injectable({
     providedIn: 'root'
 })
 export class PagesLoginService {
   subscribe: any;
    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/login';
    response: PagesResposta

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public login(user: PagesUser): Observable<PagesResposta> {
        return this.http
            .post(this.url, user)
            .pipe(map(res => res.json()));
    }

 }
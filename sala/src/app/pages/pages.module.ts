import { NgModule } from '@angular/core';

import { PagesHomeComponent } from './pages-home.component';
import { PagesLoginComponent } from './pages-login.component';
import { PagesReservaComponent } from './pages-reserva.component';
import { PagesSituacaoComponent } from './pages-situacao.component';


@NgModule( 
    { 
    declarations: [
        PagesHomeComponent,
        PagesLoginComponent,
        PagesReservaComponent,
        PagesSituacaoComponent,
    ],
    exports: [
        PagesHomeComponent,
        PagesLoginComponent,
        PagesReservaComponent,
        PagesSituacaoComponent,
    ]
})
export class PagesModule { }
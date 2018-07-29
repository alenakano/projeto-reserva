import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesCadastroComponent } from './pages-cadastro.component';
import { PagesHomeComponent } from './pages-home.component';
import { PagesLoginComponent } from './pages-login.component';
import { PagesManipulacaoComponent } from './pages-manipulacao.component';
import { PagesSituacaoComponent } from './pages-situacao.component';

import { BaseModule } from "../base/base.module"

@NgModule( 
    { 
    imports: [
        BaseModule,
        CommonModule
    ],
    declarations: [
        PagesCadastroComponent,
        PagesHomeComponent,
        PagesLoginComponent,
        PagesManipulacaoComponent,
        PagesSituacaoComponent,
    ],
    exports: [
        PagesCadastroComponent,
        PagesHomeComponent,
        PagesLoginComponent,
        PagesManipulacaoComponent,        
        PagesSituacaoComponent,
    ]
})
export class PagesModule { }
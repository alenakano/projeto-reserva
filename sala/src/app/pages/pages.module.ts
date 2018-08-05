import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesAdicionarComponent } from './pages-adicionar.component';
import { PagesCadastroComponent } from './pages-cadastro.component';
import { PagesEditarComponent } from './pages-editar.component';
import { PagesExcluirComponent } from './pages-excluir.component';
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
        PagesAdicionarComponent,
        PagesCadastroComponent,
        PagesEditarComponent,
        PagesExcluirComponent,
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
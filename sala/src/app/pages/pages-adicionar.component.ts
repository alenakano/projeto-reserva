import { 
    Component, 
    EventEmitter, 
    Input, 
    OnDestroy, 
    Output,
} from '@angular/core';
import { Horario } from '../base/horario';

import { Subscription } from 'rxjs';

import { PagesAdicionarService } from './pages-adicionar.service';
import { PagesResposta } from './pages-resposta';

@Component({
    selector: 'pages-adicionar',
    templateUrl: './pages-adicionar.component.html',
    styleUrls: [ './pages-general.css' ]
})

export class PagesAdicionarComponent implements OnDestroy{

    @Output() voltar: EventEmitter<void> = new EventEmitter<void>();
    @Output() validacao: EventEmitter<void> = new EventEmitter<void>();
    
    public horario: Horario = new Horario();
    private erro: boolean;
    private loading: boolean = false;
    public mensagem: string;
    public resposta: PagesResposta;
    private serviceSubscription: Subscription;
        
    constructor(
        private pagesAdicionarService: PagesAdicionarService
    ){}

    ngOnDestroy(): void {
        if (this.serviceSubscription) {
            this.serviceSubscription.unsubscribe();
        }
    }

    public onClickAdicionar(): void {
        this.loading = true;
        this.serviceSubscription = 
            this.pagesAdicionarService.adicionar(this.horario).subscribe(
                res => {
                    this.resposta = res;
                    this.onAdicionarSucesso(this.resposta)
                    },
                    error => console.log('ERRO ==> ' + error)
            )
    }

    public onAdicionarSucesso(response: PagesResposta): void {
        this.loading = false;
        if (response.response === true) {
          this.validacao.emit();
        } else {
          if (response.msg != null) {
            this.mensagem = response.msg; 
            this.erro = true;
            }
        }
    }

    private onDataValue(data: string): void {
        let dataArray = data.split('/');
        let dataArray2 = data.split('-');

        if (dataArray) {
            let dia = dataArray[0];
            let mes = dataArray[1];
            let ano = dataArray[2];
            this.horario.data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
        } else if (dataArray2) {
            let dia = dataArray2[0];
            let mes = dataArray2[1];
            let ano = dataArray2[2];
            this.horario.data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
        }        
    }

    private onHoraValue(horario: number):void {
        this.horario.hora = horario;
    }

    public onVoltarClick(): void {
        this.voltar.emit();
    }

}
import { 
    Component, 
    EventEmitter, 
    Input, 
    OnInit, 
    OnDestroy,
    Output,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Horario } from '../base/horario';
import { PagesEditarService } from './pages-editar.service';
import { PagesResposta } from './pages-resposta';

@Component({
    selector: 'pages-editar',
    templateUrl: './pages-editar.component.html',
    styleUrls: [ './pages-general.css' ]
})

export class PagesEditarComponent implements OnInit, OnDestroy {

    @Input() horaEditar: Horario;

    @Output() voltar: EventEmitter<void> = new EventEmitter<void>();
    @Output() validacao: EventEmitter<void> = new EventEmitter<void>();

    private loading: boolean = false;

    private erro: boolean;
    private serviceSubscription: Subscription;
    public horarioNovo: Horario = new Horario();
    public mensagem: string;
    public resposta: PagesResposta;

    constructor(
        private pagesEditarService: PagesEditarService
    ){}

    ngOnInit() {
        this.horarioNovo = this.horaEditar;
    }

    ngOnDestroy(): void {
        if (this.serviceSubscription) {
            this.serviceSubscription.unsubscribe();
        }
    }

    public onClickEditar(): void {
        this.loading = true;
        this.serviceSubscription = 
            this.pagesEditarService.editar(this.horarioNovo).subscribe(
                res => {
                    this.resposta = res;
                    this.onEditarSucesso(this.resposta)
                    },
                error => console.log('ERRO==> ' + error)
            )
    }

    private onDataValue(data: string): void {
        let dataArray = data.split('/');
        let dataArray2 = data.split('-');

        if (dataArray) {
            let dia = dataArray[0];
            let mes = dataArray[1];
            let ano = dataArray[2];
            this.horarioNovo.data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
        } else if (dataArray2) {
            let dia = dataArray2[0];
            let mes = dataArray2[1];
            let ano = dataArray2[2];
            this.horarioNovo.data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
        }        
    }

    private onEditarSucesso(response: PagesResposta) {
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

    private onHoraValue(horario: number):void {
        this.horarioNovo.hora = horario;
    }

    public onVoltarClick(): void {
        this.voltar.emit();
    }

}
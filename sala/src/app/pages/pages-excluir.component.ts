import { 
    Component, 
    EventEmitter, 
    Input, 
    Output, 
} from '@angular/core';
import { Horario } from '../base/horario';

import { PagesExcluirService } from './pages-excluir.service';
import { PagesResposta } from './pages-resposta';

@Component({
    selector: 'pages-excluir',
    templateUrl: './pages-excluir.component.html',
    styleUrls: [ './pages-general.css' ]
})

export class PagesExcluirComponent {

    @Input() horaExcluir: Horario = new Horario();

    @Output() voltar: EventEmitter<void> = new EventEmitter<void>();
    @Output() validacao: EventEmitter<void> = new EventEmitter<void>();
    
    private erro: boolean;
    private loading: boolean = false;
    public mensagem: string;
    public resposta: PagesResposta;
    
    constructor(
        private pagesExcluirService: PagesExcluirService
    ){}


    public onExcluirClick(): void {
        this.loading = true;
        this.pagesExcluirService.excluir(this.horaExcluir).subscribe(
        res => {
            this.resposta = res;
            this.onExcluirSucesso(this.resposta)
            },
            error => console.log('ERRO==> ' + error)
        )
    }

    onExcluirSucesso(response: PagesResposta): void {
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

    public onVoltarClick(): void {
        this.voltar.emit();
    }

}
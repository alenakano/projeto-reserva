import { 
    Component, 
    EventEmitter, 
    Output, 
} from '@angular/core';

import { Horario } from '../base/horario';

@Component({
    selector: 'pages-cadastro',
    templateUrl: './pages-cadastro.component.html'
})

export class PagesCadastroComponent {

    public loading: boolean = true;

    @Output() editar: EventEmitter<Horario> = new EventEmitter<Horario>();
    @Output() excluir: EventEmitter<Horario> = new EventEmitter<Horario>();

    constructor(){}

    public isLoaded(): void {
        this.loading = false;
    }

    public onEditar(horario: Horario): void {
        this.editar.emit(horario);
    }

    public onExcluir(horario: Horario): void {
        this.excluir.emit(horario);
    }
}
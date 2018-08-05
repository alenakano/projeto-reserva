import { 
    Component,
    ChangeDetectorRef,
    HostListener,
    Input,
} from '@angular/core';

import { Horario } from '../base/horario';

@Component({
    selector: 'pages-manipulacao',
    templateUrl: './pages-manipulacao.component.html'
})

export class PagesManipulacaoComponent {

    @Input() passo: string = 'login';
    public horario: Horario = new Horario();

    constructor(
        private changeDetection: ChangeDetectorRef
    ){}

    public onEditar(horario): void {
        this.horario = horario;
        console.log(horario)
        this.passo = 'editar';
    }

    public onExcluir(horario: Horario): void {      
        console.log(horario)
        this.horario = horario;
        this.passo = 'excluir';
    }

    public onVoltarExcluir(): void {
        this.passo = 'reserva'
    }

    onValidacao(validar): void {
        this.passo = 'reserva';
    }
}
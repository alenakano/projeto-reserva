import { 
    Component,
    Input
} from '@angular/core';



@Component({
    selector: 'pages-manipulacao',
    templateUrl: './pages-manipulacao.component.html'
})

export class PagesManipulacaoComponent {

    @Input() passo: string = 'login';

    public onEditar(): void {
        this.passo = 'editar';
    }

    public onExcluir(): void {
        this.passo = 'excluir';
    }

    public onVoltarExcluir(): void {
        this.passo = 'reserva'
    }

    onValidacao(validar): void {
        this.passo = 'reserva';
    }
}
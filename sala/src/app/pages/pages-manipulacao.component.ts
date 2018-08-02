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

    onValidacao(validar): void {
        this.passo = 'reserva';
    }
}
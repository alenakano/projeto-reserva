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
        console.log("validar")
        if(validar == true) {
            this.passo = 'reserva';
        }
    }
}
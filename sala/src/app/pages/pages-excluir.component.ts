import { 
    Component, 
    EventEmitter, 
    Input, 
    Output, 
} from '@angular/core';
import { Horario } from '../base/horario';

@Component({
    selector: 'pages-excluir',
    templateUrl: './pages-excluir.component.html',
    styleUrls: [ './pages-general.css' ]
})

export class PagesExcluirComponent {

    @Input() horaExcluir: Horario = new Horario();

    @Output() voltar: EventEmitter<void> = new EventEmitter<void>();

    public onExcluirClick(): void {
        
    }

    public onVoltarClick(): void {
        this.voltar.emit();
    }

}
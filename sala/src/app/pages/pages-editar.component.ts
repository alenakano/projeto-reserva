import { 
    Component, 
    EventEmitter, 
    Input, 
    Output, 
} from '@angular/core';
import { Horario } from '../base/horario';

@Component({
    selector: 'pages-editar',
    templateUrl: './pages-editar.component.html'
})

export class PagesEditarComponent {
    @Input() horaEditar: Horario;

    ngOnInit() {
    }
    
    

}
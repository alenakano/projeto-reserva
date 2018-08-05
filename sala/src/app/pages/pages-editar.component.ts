import { 
    Component, 
    EventEmitter, 
    Input, 
    Output, 
} from '@angular/core';

import { Horario } from '../base/horario';

@Component({
    selector: 'pages-editar',
    templateUrl: './pages-editar.component.html',
    styleUrls: [ './pages-general.css' ]
})

export class PagesEditarComponent {

    @Input() horaEditar: Horario;

    @Output() voltar: EventEmitter<void> = new EventEmitter<void>();

    private loading: boolean = false;
    
    public horarioNovo: Horario = new Horario();

    ngOnInit() {
        this.horarioNovo = this.horaEditar;
    }

    public onClickEditar(): void {
        console.log(this.horarioNovo.data)
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

    private onHoraValue(horario: number):void {
        this.horarioNovo.hora = horario;
    }

    public onVoltarClick(): void {
        this.voltar.emit();
    }

}
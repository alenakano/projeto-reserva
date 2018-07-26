import { 
    Component,
    OnInit 
} from '@angular/core';

import { BaseListaHorariosService } from './base-lista-horarios.service';
import { Horario } from './horario';
import { error } from '@angular/compiler/src/util';

@Component(
    {
        selector: 'lista-horarios',
        templateUrl: './base-lista-horarios.component.html'
    }
) 

export class BaseListaHorariosComponent implements OnInit {
    
    private horarios: Horario[];

    constructor(
        private service: BaseListaHorariosService
    ) {}

    public ngOnInit(): void {
        this.service.buscaHorarios()
            .subscribe(
                response => {
                    this.horarios = response
                    console.log(response)
                },
                error => null,
            )
    };
}
import { 
    Component,
    EventEmitter,
    Input,
    OnInit, 
    Output
} from '@angular/core';

import { BaseListaHorariosService } from './base-lista-horarios.service';
import { Horario } from './horario';
import { error } from '@angular/compiler/src/util';

@Component(
    {
        selector: 'lista-horarios',
        templateUrl: './base-lista-horarios.component.html',
        styleUrls: [ './base-lista-horarios.component.css' ]
    }
) 

export class BaseListaHorariosComponent implements OnInit {
    
    private horarios: Horario[];

    @Input() admin: boolean = false;

    @Output() loaded: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private service: BaseListaHorariosService
    ) {}

    public ngOnInit(): void {
        this.service.buscaHorarios()
            .subscribe(
                response => {
                    this.horarios = response;
                    this.loaded.emit();
                },
                error => null,
            )
    };
}
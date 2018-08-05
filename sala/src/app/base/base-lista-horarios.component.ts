import { 
    Component,
    EventEmitter,
    Input,
    OnDestroy
    OnInit, 
    Output,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { BaseListaHorariosService } from './base-lista-horarios.service';
import { Horario } from './horario';

@Component(
    {
        selector: 'lista-horarios',
        templateUrl: './base-lista-horarios.component.html',
        styleUrls: [ './base-lista-horarios.component.css' ]
    }
) 

export class BaseListaHorariosComponent implements OnInit, OnDestroy {
    
    private horarios: Horario[];
    private confirma: boolean = false;
    private serviceSubscription: Subscription;
    public value: Horario;

    @Input() admin: boolean = false;

    @Output() editar: EventEmitter<Horario> = new EventEmitter<Horario>();
    @Output() excluir: EventEmitter<Horario> = new EventEmitter<Horario>();
    @Output() loaded: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private service: BaseListaHorariosService
    ) {}    

    public ngOnInit(): void {
        this.serviceSubscription = 
            this.service.buscaHorarios()
                .subscribe(
                    response => {
                        this.horarios = response;
                        this.loaded.emit();
                    },
                    error => null,
            )
    };

    public ngOnDestroy(): void {
        this.serviceSubscription.unsubscribe();
    }

    public onEditarClick(i): void {
        this.editar.emit(this.horarios[i]);
    }

    public onExcluirClick(i): void {
        this.confirma = true;
        this.excluir.emit(this.horarios[i]);
    }

    public onNaoClick(): void {
        this.confirma = false;
    }

    public onSimClick(): void {
        this.confirma = false;
    }
}
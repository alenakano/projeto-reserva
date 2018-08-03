import { 
    Component, 
    EventEmitter, 
    Output, 
} from '@angular/core';

@Component({
    selector: 'pages-cadastro',
    templateUrl: './pages-cadastro.component.html'
})

export class PagesCadastroComponent {

    public loading: boolean = true;

    @Output() editar: EventEmitter<void> = new EventEmitter<void>();
    @Output() excluir: EventEmitter<void> = new EventEmitter<void>();

    constructor(){}

    public isLoaded(): void {
        this.loading = false;
    }

    public onEditar(): void {
        this.editar.emit();
    }

    public onExcluir(): void {
        this.excluir.emit();
    }
}
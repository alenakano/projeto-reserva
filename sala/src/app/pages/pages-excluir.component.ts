import { 
    Component, Output, EventEmitter 
} from '@angular/core';

@Component({
    selector: 'pages-excluir',
    templateUrl: './pages-excluir.component.html',
    styleUrls: [ './pages-excluir.component.css' ]
})

export class PagesExcluirComponent {

    @Output() voltar: EventEmitter<void> = new EventEmitter<void>();

    public onExcluirClick(): void {

    }

    public onVoltarClick(): void {
        this.voltar.emit();
    }

}
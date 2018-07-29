import { 
  Component, 
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: [ './pages-general.css', 'pages-login.component.css' ]
})
export class PagesLoginComponent {

  @Output() validacao: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){

  }

  public onClick(): void {
    console.log("emitiu")
    this.validacao.emit(true);
  }

}

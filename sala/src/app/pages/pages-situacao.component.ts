import { Component } from '@angular/core';

@Component({
  selector: 'pages-home',
  templateUrl: './pages-situacao.component.html',
  styleUrls: [ './pages-general.css' ]
})
export class PagesSituacaoComponent {

  public loading: boolean = true;
  
  constructor(){}

  public onLoaded(): void {
    this.loading = false;
  }

}

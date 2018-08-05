import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private expandido: boolean = false;
  private classe: string = 'topnav';

  private onClick(): void {
    if (!this.expandido) {
      this.expandido = true;
      this.classe = 'topnav responsive'
    } else {
      this.expandido = false;
      this.classe = 'topnav'
    }
  }

}

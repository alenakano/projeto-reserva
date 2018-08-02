import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { PagesLoginService } from './pages-login.service';
import { PagesResposta } from './pages-resposta';
import { PagesUser } from './pages-user';

@Component({
  selector: 'pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-general.css', 'pages-login.component.css']
})
export class PagesLoginComponent {

  @Output() validacao: EventEmitter<boolean> = new EventEmitter<boolean>();

  usuario: PagesUser = new PagesUser();

  private erro: boolean;
  public mensagem: string;

  public resposta: PagesResposta = new PagesResposta();

  constructor(
    private pagesLoginService: PagesLoginService
  ) { }

    public onClick(): void {
      this.erro = false;
      this.mensagem = null;
      this.pagesLoginService.login(this.usuario).subscribe(
        res => {
          this.resposta = res;
          this.onLoginSucesso(this.resposta)
          },
        error => console.log('ERRO ' + error)
      )
  }

  public onUserInput(usuario: string): void {
    this.usuario.user = usuario;
  }

  private onPasswordInput(senha: string): void {
    this.usuario.password = senha;
  }

  private isFilled(): boolean {
    if (this.usuario.password && this.usuario.user) {
      return false
    } else {
     return true
    }
  }

  public onLoginSucesso(response: PagesResposta): void {
    console.log(response)
    if (response.response === true) {
      this.validacao.emit();
    } else {
      if (response.msg != null) {
        this.mensagem = response.msg; 
        this.erro = true;
      } 
    }
  }

}

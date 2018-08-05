import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

import { PagesLoginService } from './pages-login.service';
import { PagesResposta } from './pages-resposta';
import { PagesUser } from './pages-user';

import { Subscription } from 'rxjs';

@Component({
  selector: 'pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-general.css', 'pages-login.component.css']
})
export class PagesLoginComponent implements OnDestroy {

  @Output() validacao: EventEmitter<boolean> = new EventEmitter<boolean>();

  usuario: PagesUser = new PagesUser();

  private erro: boolean;
  public mensagem: string;
  public loading: boolean = false;

  public resposta: PagesResposta = new PagesResposta();

  private serviceSubscription: Subscription;

  constructor(
    private pagesLoginService: PagesLoginService
  ) { }

  ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
  }

    public onClick(): void {
      this.erro = false;
      this.mensagem = null;
      this.loading = true;
      this.serviceSubscription = this.pagesLoginService.login(this.usuario).subscribe(
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
    this.loading = false;
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

import { Component } from '@angular/core';
import { AuthGuardRotaService } from './services/auth-guard-rota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mostrarLogin!: boolean;
  mostrarMenu!: boolean;

  constructor(private authGardRotaService: AuthGuardRotaService,) { }

  ngOnInit(): void {
    this.mostrarLogin = false;
    this.mostrarMenu = false;
    this.authGardRotaService.logado.subscribe(parametro =>  this.mostrarMenu = parametro);
  }

  login(){
    this.mostrarLogin = true;
    this.mostrarMenu = false;
  }

  logout(){
    this.mostrarLogin = false;
    this.mostrarMenu = false;
  }

  ligarMenu(){
    this.mostrarLogin = false;
    this.mostrarMenu = true;
  }


}

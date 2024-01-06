import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRotaService {

  logado=new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login() {
    console.log('entrei');
    this.logado.emit(true);
    this.router.navigate(['/']);
  }

  logout(){
    console.log('sai');
    this.logado.emit(false);
    this.router.navigate(['/']);
  }

  retornarPaginaCondutor(){
    console.log('chamei de novo lista de condutores');
    this.logado.emit(true);
    this.router.navigate(['/cadastros/condutores']);
  }

}

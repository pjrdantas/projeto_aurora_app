import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

import { Perfil } from 'src/app/dominios/perfil';
import { PerfilService } from 'src/app/services/perfil.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { DialogPerfilComponent } from './dialog-perfil/dialog-perfil.component';

export interface DialogData {
  idPerfil: number;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  titulo!: string;
  filter: string = '';
  paginaAtual: number = 1;
  contador = 10;

  perfil: Perfil = new Perfil();
  perfilLista: Perfil[] = new Array();

  constructor(
    private snackBar: MatSnackBar,
    public perfilService: PerfilService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.titulo = 'Cadastro de Perfil';
    this.filter = '';
    this.getList();
  }

  onError(errorMsg: string, showContactAdminMessage: boolean) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message: errorMsg, showContactAdminMessage: showContactAdminMessage },
    });
  }


  getList(): void {
    this.perfilService.getAllPerfil().pipe(
      catchError((error) => {
        let errorMessage = '';

        if (error.status === 404) {
          errorMessage = 'A Lista de Perfis de Usuário está vazia.';
          this.onError(errorMessage, false);
        } else {
          errorMessage = 'Ocorreu um erro ao tentar carregar a Lista de Perfis de Usuário.';
          this.onError(errorMessage, true);
        }
        return of([]);
      })
    )
    .subscribe((res) => (this.perfilLista = res));
  }



  onAdd() {
    const dialogRef = this.dialog.open(DialogPerfilComponent, {
     width: '600px',
     height: '390',
     data: { idPerfil: 0 },
   });

   dialogRef.afterClosed().subscribe((result) => {
     this.getList();
   });
 }

 onEditar(idPerfil: number, index: number): void {
  const dialogRef = this.dialog.open(DialogPerfilComponent, {
   width: '600px',
   height: '390px',
   data: { idPerfil: idPerfil },
 });

 dialogRef.afterClosed().subscribe((result) => {
   this.getList();
 });
}

onRemove(idPerfil: number, index: number): void {
  this.perfilService.deletePerfil(idPerfil).pipe(
    catchError(error => {
      let errorMessage = '';
      errorMessage = 'Não foi possível excluir o cadastro.';
          this.onError(errorMessage, true);
      return of([])})
  ).subscribe(
    (response) => {
      this.perfilService.getAllPerfil().subscribe((res) => (this.perfilLista = res));
      this.snackBar.open('Perfil excluido com Sucesso!', '', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  );
}


}

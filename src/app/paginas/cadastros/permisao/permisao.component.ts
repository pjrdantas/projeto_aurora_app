import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

import { Permissao } from 'src/app/dominios/permissao';
import { PermissaoService } from 'src/app/services/permissao.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { DialogPermissaoComponent } from './dialog-permissao/dialog-permissao.component';

export interface DialogData {
  idPermissao: number;
}

@Component({
  selector: 'app-permisao',
  templateUrl: './permisao.component.html',
  styleUrls: ['./permisao.component.scss']
})
export class PermisaoComponent implements OnInit {

  titulo!: string;
  filter: string = '';
  paginaAtual: number = 1;
  contador = 10;

  permissao: Permissao = new Permissao();
  permissaoLista: Permissao[] = new Array();

  constructor(
    private snackBar: MatSnackBar,
    public permissaoService: PermissaoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.titulo = 'Cadastro de Permissões';
    this.filter = '';
    this.getList();
  }

  onError(errorMsg: string, showContactAdminMessage: boolean) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message: errorMsg, showContactAdminMessage: showContactAdminMessage },
    });
  }

  getList(): void {
    this.permissaoService.getAllPermissao().pipe(
      catchError((error) => {
        let errorMessage = '';

        if (error.status === 404) {
          errorMessage = 'A Lista de Permissões está vazia.';
          this.onError(errorMessage, false);
        } else {
          errorMessage = 'Ocorreu um erro ao tentar carregar a Lista de Permissões de Perfil.';
          this.onError(errorMessage, true);
        }
        return of([]);
      })
    )
      .subscribe((res) => (this.permissaoLista = res));
  }

  onAdd() {
    const dialogRef = this.dialog.open(DialogPermissaoComponent, {
     width: '400px',
     height: '318px',
     data: { idPermissao: 0 },
   });

   dialogRef.afterClosed().subscribe((result) => {
    this.getList();
  });
  }

   onEditar(idPermissao: number, index: number): void {
    const dialogRef = this.dialog.open(DialogPermissaoComponent, {
     width: '400px',
     height: '318px',
     data: { idPermissao: idPermissao },
   });

   dialogRef.afterClosed().subscribe((result) => {
    this.getList();
    });
  }

  onRemove(idPermissao: number, index: number): void {
    this.permissaoService.deletePermissao(idPermissao).pipe(
      catchError(error => {
        let errorMessage = '';
        errorMessage = 'Não foi possível excluir o cadastro.';
            this.onError(errorMessage, true);
        return of([])})
    ).subscribe(
      (response) => {
        this.permissaoService.getAllPermissao().subscribe((res) => (this.permissaoLista = res));
        this.snackBar.open('Permissão excluida com Sucesso!', '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }

}

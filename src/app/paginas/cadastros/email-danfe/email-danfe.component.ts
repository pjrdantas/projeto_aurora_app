import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

import { EquipamentoFilialRota } from 'src/app/dominios/equipamentoFilialRota';
import { EquipamentoFilialRotaService } from 'src/app/services/equipamentoFilialRota.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { DialogEmailDanfeComponent } from './dialog-email-danfe/dialog-email-danfe.component';

export interface DialogData {
  codigoEquipamentoFilialRota: number;
}

@Component({
  selector: 'app-email-danfe',
  templateUrl: './email-danfe.component.html',
  styleUrls: ['./email-danfe.component.scss']
})
export class EmailDanfeComponent implements OnInit {

  titulo!: string;
  filter: string = '';
  paginaAtual: number = 1;
  contador = 10;

  equipamentoFilialRota: EquipamentoFilialRota = new EquipamentoFilialRota;
  equipamentoFilialRotas: EquipamentoFilialRota[] = new Array();

  constructor(
    private snackBar: MatSnackBar,
    public equipamentoFilialRotaService: EquipamentoFilialRotaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.titulo = 'Cadastro Email Danfe Verde';
    this.filter = '';
    this.getList();
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  getList(): void {
    this.equipamentoFilialRotaService.getAllEquipamentoFilialRota().pipe(
        catchError(error => {
          this.onError('Não foi possível carregar a Consulta.');
          return of([])})
      )
      .subscribe((res) => (this.equipamentoFilialRotas = res));
  }

  onAdd() {
     const dialogRef = this.dialog.open(DialogEmailDanfeComponent, {
      width: '400px',
      height: '360px',
      data: { codigoEquipamentoFilialRota: 0 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
    });
  }

  onEditar(codigoEquipamentoFilialRota: number, index: number): void {
     const dialogRef = this.dialog.open(DialogEmailDanfeComponent, {
      width: '400px',
      height: '340px',
      data: { codigoEquipamentoFilialRota: codigoEquipamentoFilialRota },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getList();
    });
  }

  onRemove(codigoEquipamentoFilialRota: number, index: number): void {
    this.equipamentoFilialRotaService.deleteEquipamentoFilialRota(codigoEquipamentoFilialRota).pipe(
      catchError(error => {
        this.onError('Não foi possível excluir o cadastro.');
        return of([])})
    ).subscribe(
      (response) => {
        this.equipamentoFilialRotaService.getAllEquipamentoFilialRota().subscribe((res) => (this.equipamentoFilialRotas = res));
        this.snackBar.open('Condutor excluido com Sucesso!', '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }

}

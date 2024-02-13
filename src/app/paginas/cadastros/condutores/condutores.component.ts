import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';

import { Condutor } from 'src/app/dominios/condutor';
import { CondutorService } from 'src/app/services/condutor.service';
import { DialogCondutorCadastroComponent } from './dialog-condutor-cadastro/dialog-condutor-cadastro.component';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

export interface DialogData {
  idCondutor: number;
}

@Component({
  selector: 'app-condutores',
  templateUrl: './condutores.component.html',
  styleUrls: ['./condutores.component.scss'],
})
export class CondutoresComponent implements OnInit {
  titulo!: string;
  condutor: Condutor = new Condutor();
  condutores: Condutor[] = new Array();

  paginaAtual: number = 1;
  contador = 10;
  filter: string = '';

  constructor(
    private snackBar: MatSnackBar,
    public condutorService: CondutorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.titulo = 'Cadastro de Condutores';
    this.filter = '';
    this.getList();
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  getList(): void {
    this.condutorService
      .getAllCondutor()
      .pipe(
        catchError((error) => {
          this.onError('Não foi possível carregar a Consulta.');
          return of([]);
        })
      )
      .subscribe((res) => (this.condutores = res));
  }

  onRemove(idCondutor: number, index: number): void {
    this.condutorService
      .deleteCondutor(idCondutor)
      .pipe(
        catchError((error) => {
          this.onError('Não foi possível excluir o cadastro.');
          return of([]);
        })
      )
      .subscribe(
        (response) => {
          const res: Response = response as unknown as Response;
          if (res === null) {
            this.condutorService
              .getAllCondutor()
              .subscribe((res) => (this.condutores = res));
            this.snackBar.open('Condutor excluido com Sucesso!', '', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          } else {
            this.snackBar.open(
              'Ocorreu um erro ao excluir o Email Danfe Verde!',
              '',
              {
                duration: 2000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              }
            );
            console.error(res);
          }
        },
        (erro) => {
          this.snackBar.open(
            'Ocorreu um erro ao excluir o Email Danfe Verde!',
            erro,
            {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            }
          );
          console.error(erro);
        }
      );
  }

  onAdd() {
    const dialogRef = this.dialog.open(DialogCondutorCadastroComponent, {
      width: '400px',
      height: '450px',
      data: { idCondutor: 0 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getList();
    });
  }

  onEditar(idCondutor: number, index: number): void {
    const dialogRef = this.dialog.open(DialogCondutorCadastroComponent, {
      width: '400px',
      height: '450px',
      data: { idCondutor: idCondutor },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getList();
    });
  }
}

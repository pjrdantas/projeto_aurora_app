import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

import { Permissao } from 'src/app/dominios/permissao';
import { PermissaoService } from 'src/app/services/permissao.service';

import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { Response } from 'src/app/dominios/response';

export interface DialogData {
  idPermissao: number;
}

@Component({
  selector: 'app-dialog-permissao',
  templateUrl: './dialog-permissao.component.html',
  styleUrls: ['./dialog-permissao.component.scss'],
})
export class DialogPermissaoComponent implements OnInit {
  permissao: Permissao = new Permissao();
  permissaoLista: Permissao[] = new Array();

  titulo!: string;
  hide = true;
  durationInSeconds = 5;

  form: FormGroup = new FormGroup({
    permissaoId: new FormControl(null),
    permissaoCodigo: new FormControl('', [Validators.required]),
    permissaoDescricao: new FormControl('', [Validators.required]),
  });

  initializeFormGroup() {
    this.form.setValue({
      permissaoId: null,
      permissaoCodigo: '',
      permissaoDescricao: '',
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  constructor(
    private permissaoService: PermissaoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogPermissaoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) {}

  ngOnInit(): void {

    if (this.data.idPermissao === 0) {
      this.titulo = 'Cadastrar Permissão';
      this.initializeFormGroup();
    } else {
      this.titulo = 'Editar Permissao';
      this.permissaoService.getPermissao(Number(this.data.idPermissao)).subscribe((res) => (this.permissao = res));
    }
  }

  salvar(): void {
    if (this.permissao.idPermissao === undefined) {
      this.permissaoService
        .addPermissao(this.permissao)
        .subscribe(
          (response) => {
            const res: Response = response as Response;


            if (res === null) {
              this.permissaoService
                .getAllPermissao()
                .subscribe((res) => (this.permissaoLista = res));
              this.snackBar.open(
                'Permissao cadastrado com Sucesso!',
                '',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
            } else {
              this.snackBar.open(
                'ATENÇÃO:',
                'Ocorreu um erro ao Cadastrar a Permissao!',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
              console.error(res);
            }
          },
          (erro) => {
            this.snackBar.open(
              'ATENÇÃO:',
                'Ocorreu um erro ao Cadastrar a Permissao!',
              {
                duration: 4000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              }
            );
            console.error(erro);
          }
        );
    } else {
      this.permissaoService
        .updatePermissao(this.permissao)
        .subscribe(
          (response) => {
            const res: Response = response as unknown as Response;
            if (res === null) {
              this.permissaoService
                .getAllPermissao()
                .subscribe((res) => (this.permissaoLista = res));
              this.snackBar.open(
                'Permissão atualizada com Sucesso!',
                '',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
            } else {
              this.snackBar.open(
                'ATENÇÃO:',
                'Ocorreu um erro ao Cadastrar a Permissao!',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
              console.error(res);
            }
          },
          (erro) => {
            this.snackBar.open(
              'ATENÇÃO:',
              'Ocorreu um erro ao Cadastrar a Permissao!',
              {
                duration: 4000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              }
            );
            console.error(erro);
          }
        );
    }
  }
}

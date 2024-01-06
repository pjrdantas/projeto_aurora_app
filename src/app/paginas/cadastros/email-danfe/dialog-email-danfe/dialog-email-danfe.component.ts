import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

import { FilialRota } from 'src/app/dominios/filialRota';
import { FilialRotaService } from 'src/app/services/filialRota.service';

import { EquipamentoFilialRota } from 'src/app/dominios/equipamentoFilialRota';
import { EquipamentoFilialRotaService } from 'src/app/services/equipamentoFilialRota.service';

import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { Response } from 'src/app/dominios/response';

export interface DialogData {
  codigoEquipamentoFilialRota: number;
}

@Component({
  selector: 'app-dialog-email-danfe',
  templateUrl: './dialog-email-danfe.component.html',
  styleUrls: ['./dialog-email-danfe.component.scss'],
})
export class DialogEmailDanfeComponent implements OnInit {
  equipamentoFilialRota: EquipamentoFilialRota = new EquipamentoFilialRota();
  equipamentoFilialRotas: EquipamentoFilialRota[] = new Array();
  filialRotas: FilialRota[] = new Array();

  titulo!: string;
  hide = true;
  durationInSeconds = 5;
  maskCode = [/[0-9]/, /\d/, /\d/, /\d/];

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    codigoEquipamento: new FormControl('', [Validators.required]),
    filialRota: new FormControl('', [Validators.required]),
    emailDanfeVerde: new FormControl('', [Validators.required, Validators.email]),
    flag: new FormControl(false),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      codigoEquipamento: 0,
      filialRota: 0,
      emailDanfeVerde: '',
      flag: false,
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }


  constructor(
    private equipamentoFilialRotaService: EquipamentoFilialRotaService,
    private filialRotaService: FilialRotaService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogEmailDanfeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) {}

  ngOnInit(): void {
    this.filialRotaService
      .getAllFilialRota()
      .pipe(
        catchError((error) => {
          this.onError('Não foi possível carregar a Consulta.');
          return of([]);
        })
      )
      .subscribe((res) => (this.filialRotas = res));

    if (this.data.codigoEquipamentoFilialRota === 0) {
      this.titulo = 'Cadastrar Email Danfe Verde';
      this.initializeFormGroup();
    } else {
      this.titulo = 'Editar Email Danfe Verde';
      this.equipamentoFilialRotaService
        .getEquipamentoFilialRota(Number(this.data.codigoEquipamentoFilialRota))
        .subscribe((res) => (this.equipamentoFilialRota = res));
    }
  }

  salvar(): void {
    if (this.equipamentoFilialRota.codigoEquipamentoFilialRota === undefined) {
      this.equipamentoFilialRotaService
        .addEquipamentoFilialRota(this.equipamentoFilialRota)
        .subscribe(
          (response) => {
            const res: Response = response as Response;

            if (res === null) {
              this.equipamentoFilialRotaService
                .getAllEquipamentoFilialRota()
                .subscribe((res) => (this.equipamentoFilialRotas = res));
              this.snackBar.open(
                'Email Danfe Verde cadastrado com Sucesso!',
                '',
                {
                  duration: 2000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
            } else {
              this.snackBar.open(
                'Ocorreu um erro ao Cadastrar o Email Danfe Verde!',
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
              'Ocorreu um erro ao Cadastrar o Email Danfe Verde!',
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
    } else {
      this.equipamentoFilialRotaService
        .updateEquipamentoFilialRota(this.equipamentoFilialRota)
        .subscribe(
          (response) => {
            const res: Response = response as unknown as Response;
            if (res === null) {
              this.equipamentoFilialRotaService
                .getAllEquipamentoFilialRota()
                .subscribe((res) => (this.equipamentoFilialRotas = res));
              this.snackBar.open(
                'Email Danfe Verde atualizado com Sucesso!',
                '',
                {
                  duration: 2000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
            } else {
              this.snackBar.open(
                'Ocorreu um erro ao Cadastrar o Email Danfe Verde!',
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
              'Ocorreu um erro ao Cadastrar o Email Danfe Verde!',
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
  }
}

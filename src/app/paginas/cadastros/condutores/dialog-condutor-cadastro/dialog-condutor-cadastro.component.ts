import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { catchError, of } from 'rxjs';

import { Condutor } from 'src/app/dominios/condutor';
import { CondutorService } from 'src/app/services/condutor.service';

import { Fornecedor } from 'src/app/dominios/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { Response } from 'src/app/dominios/response';

export interface DialogData {
  idCondutor: number;
}

@Component({
  selector: 'app-dialog-condutor-cadastro',
  templateUrl: './dialog-condutor-cadastro.component.html',
  styleUrls: ['./dialog-condutor-cadastro.component.scss'],
})
export class DialogCondutorCadastroComponent implements OnInit {
  condutor: Condutor = new Condutor();
  condutores: Condutor[] = new Array();
  fornecedores: Fornecedor[] = new Array();


  titulo!: string;
  hide = true;
  durationInSeconds = 5;
  maskCode = [/[0-9]/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/];

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomeCondutor: new FormControl('', [Validators.required]),
    cpfCondutor: new FormControl('', [Validators.required]),
    cnhCondutor: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    flag: new FormControl(false),
    fornecedorCondutor: new FormControl('', [Validators.required]),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomeCondutor: '',
      cpfCondutor: '',
      cnhCondutor: '',
      flag: false,
      fornecedorCondutor: '',
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  constructor(
    private condutorService: CondutorService,
    private fornecedorService: FornecedorService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogCondutorCadastroComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) {}

  ngOnInit(): void {
    this.fornecedorService
      .getAllFornecedor().pipe(
        catchError((error) => {
          this.onError('Não foi possível carregar a Consulta.');
          return of([]);
        })).subscribe((res) => (this.fornecedores = res));

    if (this.data.idCondutor === 0) {
      this.titulo = 'Cadastrar Condutor';
      this.initializeFormGroup();
    } else {
      this.titulo = 'Editar Condutor';
      this.condutorService
      .getCondutor(Number(this.data.idCondutor))
      .subscribe((res) => (this.condutor = res));
    }
  }

  salvar(): void {
    if (this.condutor.cdCondutor === undefined) {
      this.condutorService.addCondutor(this.condutor).subscribe(
        (response) => {
          const res: Response = response as Response;
          console.log("=========================> ",res);
          if (res === null) {
            this.condutorService
              .getAllCondutor()
              .subscribe((res) => (this.condutores = res));
            this.snackBar.open('Condutor cadastrado com Sucesso!', '', {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          } else {
            this.snackBar.open('Ocorreu um erro ao Cadastrar o Condutor!', '', {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
            console.error(res);
          }
        },
        (erro) => {
          this.snackBar.open('Ocorreu um erro ao Cadastrar o Condutor!', erro, {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          console.error(erro);
        }
      );
    } else {
      this.condutorService.updateCondutor(this.condutor).subscribe(
        (response) => {
          const res: Response = response as unknown as Response;
          if (res === null) {
            this.condutorService
              .getAllCondutor()
              .subscribe((res) => (this.condutores = res));
            this.snackBar.open('Condutor atualizado com Sucesso!', '', {
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
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

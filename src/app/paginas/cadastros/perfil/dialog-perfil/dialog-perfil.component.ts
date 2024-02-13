import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { catchError, of } from 'rxjs';

import { Perfil } from 'src/app/dominios/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

import { Permissao } from 'src/app/dominios/permissao';
import { PermissaoService } from 'src/app/services/permissao.service';

import { PermissaoPerfil } from 'src/app/dominios/permissaoPerfil';
import { PermissaoPerfilService } from 'src/app/services/permissaoPerfil.service';

import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';


export interface DialogData {
  idPerfil: number;
}

@Component({
  selector: 'app-dialog-perfil',
  templateUrl: './dialog-perfil.component.html',
  styleUrls: ['./dialog-perfil.component.scss']
})

export class   DialogPerfilComponent implements OnInit {
  perfil: Perfil = new Perfil();
  perfilLista: Perfil[] = new Array();

  permissao: Permissao = new Permissao();
  permissaoLista: Permissao[] = new Array();

  PermissaoPerfil: PermissaoPerfil = new PermissaoPerfil();
  PermissaoPerfilLista: PermissaoPerfil[] = new Array();

  titulo!: string;
  hide = true;
  durationInSeconds = 5;

  form: FormGroup = new FormGroup({
    idPerfil: new FormControl(null),
    perfilNome: new FormControl('', [Validators.required]),
    perfilDescricao: new FormControl('', [Validators.required]),



  });

  initializeFormGroup() {
    this.form.setValue({
      idPerfil: null,
      perfilNome: '',
      perfilDescricao: '',


    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  constructor(
    private perfilService: PerfilService,
    private permissaoService: PermissaoService,
    private permissaoPerfilService: PermissaoPerfilService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogPerfilComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) { }

  ngOnInit(): void {
    this.permissaoService.getAllPermissao().pipe(
      catchError((error) => {
        this.onError('Não foi possível carregar a Lista der permissões.');
        return of([]);
      })
    ).subscribe((res: Permissao[]) => (this.permissaoLista = res));

    if (this.data.idPerfil === 0) {
      this.titulo = 'Cadastrar Perfil';
      this.initializeFormGroup();
    } else {
      this.titulo = 'Editar Perfil';
      this.perfilService.getPerfil(Number(this.data.idPerfil)).subscribe((res: Perfil) => (this.perfil = res));
    }
  }



  salvar(): void {
    if (this.perfil.idPerfil === undefined) {
      this.perfilService
        .addPerfil(this.perfil)
        .subscribe(
          (response) => {
            const res: Response = response as Response;
            if (res === null) {
              this.perfilService.getAllPerfil().subscribe((res: Perfil[]) => (this.perfilLista = res));
              this.snackBar.open('Perfil cadastrado com Sucesso!','',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
            } else {
              this.snackBar.open('ATENÇÃO:','Ocorreu um erro ao Cadastrar o Perfil!',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
              console.error(res);
            }
          },
          (erro: any) => {
            this.snackBar.open('ATENÇÃO:','Ocorreu um erro ao Cadastrar o Perfil!',
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
      this.perfilService
        .updatePerfil(this.perfil)
        .subscribe(
          (response: unknown) => {
            const res: Response = response as unknown as Response;
            if (res === null) {
              this.perfilService.getAllPerfil().subscribe((res: Perfil[]) => (this.perfilLista = res));
              this.snackBar.open('Perfil atualizado com Sucesso!','',
                {
                  duration: 3000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
            } else {
              this.snackBar.open('ATENÇÃO:','Ocorreu um erro ao Cadastrar o Perfil!',
                {
                  duration: 4000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                }
              );
              console.error(res);
            }
          },
          (erro: any) => {
            this.snackBar.open(
              'ATENÇÃO:','Ocorreu um erro ao Cadastrar o Perfil!',
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

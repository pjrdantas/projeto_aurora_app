import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Operador } from 'src/app/dominios/operador';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  operador: Operador = new Operador();

  form: FormGroup = new FormGroup({
    usuarioForm: new FormControl('', [Validators.required]),
    senhaForm: new FormControl('', [Validators.required]),
  });

  initializeFormGroup () {
    this.form.setValue({
      usuarioForm: '',
      senhaForm:''
    });
  }

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.initializeFormGroup();
  }

  fazerLogin() {
    this.appComponent.ligarMenu();
  }
}

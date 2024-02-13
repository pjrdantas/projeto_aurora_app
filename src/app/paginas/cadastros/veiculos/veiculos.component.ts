
import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { catchError, of } from 'rxjs';

import { Veiculo } from 'src/app/dominios/veiculo';
import { CondutorService } from 'src/app/services/condutor.service';



@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

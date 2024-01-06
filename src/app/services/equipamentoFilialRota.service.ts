import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { EquipamentoFilialRota } from '../dominios/equipamentoFilialRota';

@Injectable({
  providedIn: 'root',
})
export class EquipamentoFilialRotaService {

  static getAllEquipamentoFilialRota() {
    throw new Error('Method not implemented.');
  }


  private baseUrlService = '';
  loading = false;

  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/equipamentoFilialRota/';
  }

  getAllEquipamentoFilialRota(): Observable<EquipamentoFilialRota[]> {
    this.loading = true;
    return this.httpClient.get<EquipamentoFilialRota[]>(this.baseUrlService)
    .pipe( finalize(() => this.loading = false));
  }

  getEquipamentoFilialRota(codigoEquipamentoFilialRota: number) {
    return this.httpClient.get<EquipamentoFilialRota>(this.baseUrlService + codigoEquipamentoFilialRota);
  }

  deleteEquipamentoFilialRota(codigoEquipamentoFilialRota: number) {
    return this.httpClient.delete<EquipamentoFilialRota>(this.baseUrlService + codigoEquipamentoFilialRota);
  }

  addEquipamentoFilialRota(codigoEquipamentoFilialRota: EquipamentoFilialRota) {
    return this.httpClient.post(this.baseUrlService, codigoEquipamentoFilialRota);
  }

  updateEquipamentoFilialRota(codigoEquipamentoFilialRota: EquipamentoFilialRota) {
    return this.httpClient.put<EquipamentoFilialRota>(this.baseUrlService, codigoEquipamentoFilialRota);
  }


}

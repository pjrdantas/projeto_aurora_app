
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Veiculo } from '../dominios/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  static getAllVeiculo() {
    throw new Error('Method not implemented.');
  }

  private baseUrlService = '';
  loading = false;

  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/veiculo/';
  }

  getAllVeiculo(): Observable<Veiculo[]> {
    this.loading = true;
    return this.httpClient.get<Veiculo[]>(this.baseUrlService)
    .pipe( finalize(() => this.loading = false));
  }

  getVeiculo(idVeiculo: number) {
    return this.httpClient.get<Veiculo>(this.baseUrlService + idVeiculo);
  }

  deleteVeiculo(idVeiculo: number) {
    return this.httpClient.delete<Veiculo>(this.baseUrlService + idVeiculo);
  }

  addVeiculo(condutor: Veiculo) {
    return this.httpClient.post(this.baseUrlService, condutor);
  }

  updateVeiculo(condutor: Veiculo) {
    return this.httpClient.put<Veiculo>(this.baseUrlService, condutor);
  }

}

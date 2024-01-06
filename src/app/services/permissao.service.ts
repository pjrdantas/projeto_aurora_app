import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Permissao } from '../dominios/permissao';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  static getAllPermissao() {
    throw new Error('Method not implemented.');
  }

  private baseUrlService = '';
  loading = false;


  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/permissao/';
  }

  getAllPermissao(): Observable<Permissao[]> {
    this.loading = true;
    return this.httpClient.get<Permissao[]>(this.baseUrlService+'findAll/')
    .pipe( finalize(() => this.loading = false));
  }

  getPermissao(idPermissao: number) {
    return this.httpClient.get<Permissao>(this.baseUrlService +'findById/'+ idPermissao);
  }

  deletePermissao(idPermissao: number) {
    return this.httpClient.delete<Permissao>(this.baseUrlService+'delete/' + idPermissao);
  }

  addPermissao(idPermissao: Permissao) {
    return this.httpClient.post(this.baseUrlService +'create/', idPermissao);
  }

  updatePermissao(idPermissao: Permissao) {
    return this.httpClient.put<Permissao>(this.baseUrlService+'update/', idPermissao);
  }
}

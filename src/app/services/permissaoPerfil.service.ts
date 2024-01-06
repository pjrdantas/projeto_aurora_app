import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { PermissaoPerfil } from '../dominios/permissaoPerfil';

@Injectable({
  providedIn: 'root'
})
export class PermissaoPerfilService {

  static getAllPermissaoPerfil() {
    throw new Error('Method not implemented.');
  }

  private baseUrlService = '';
  loading = false;


  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/permissaoLista/';
  }

  getAllPermissaoPerfil(): Observable<PermissaoPerfil[]> {
    this.loading = true;
    return this.httpClient.get<PermissaoPerfil[]>(this.baseUrlService+'findAll/')
    .pipe( finalize(() => this.loading = false));
  }

  getPermissaoPerfil(idPermissaoPerfil: number) {
    return this.httpClient.get<PermissaoPerfil>(this.baseUrlService +'findById/'+ idPermissaoPerfil);
  }

  deletePermissaoPerfil(idPermissaoPerfil: number) {
    return this.httpClient.delete<PermissaoPerfil>(this.baseUrlService+'delete/' + idPermissaoPerfil);
  }

  addPermissaoPerfil(idPermissaoPerfil: PermissaoPerfil) {
    return this.httpClient.post(this.baseUrlService +'create/', idPermissaoPerfil);
  }

  updatePermissaoPerfil(idPermissaoPerfil: PermissaoPerfil) {
    return this.httpClient.put<PermissaoPerfil>(this.baseUrlService+'update/', idPermissaoPerfil);
  }
}

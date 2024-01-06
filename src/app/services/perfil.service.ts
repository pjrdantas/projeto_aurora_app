import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Perfil } from '../dominios/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  static getAllPerfil() {
    throw new Error('Method not implemented.');
  }

  private baseUrlService = '';
  loading = false;


  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/perfil/';
  }

  getAllPerfil(): Observable<Perfil[]> {
    this.loading = true;
    return this.httpClient.get<Perfil[]>(this.baseUrlService+'findAll/')
    .pipe( finalize(() => this.loading = false));
  }

  getPerfil(perfilId: number) {
    return this.httpClient.get<Perfil>(this.baseUrlService +'findById/'+ perfilId);
  }

  deletePerfil(perfilId: number) {
    return this.httpClient.delete<Perfil>(this.baseUrlService+'delete/' + perfilId);
  }

  addPerfil(perfilId: Perfil) {
    return this.httpClient.post(this.baseUrlService +'create/', perfilId);
  }

  updatePerfil(perfilId: Perfil) {
    return this.httpClient.put<Perfil>(this.baseUrlService+'update/', perfilId);
  }
}

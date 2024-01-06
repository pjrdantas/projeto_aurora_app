import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { FilialRota } from '../dominios/filialRota';


@Injectable({
  providedIn: 'root',
})
export class FilialRotaService {

  static getAllFilialRota() {
    throw new Error('Method not implemented.');
  }

  private baseUrlService = '';

  constructor(
    private http: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/filialRota/';
  }

  getAllFilialRota(): Observable<FilialRota[]> {
    return this.http.get<FilialRota[]>(this.baseUrlService);
  }

  getFilialRota(cdFilialRota: number): Observable<FilialRota> {
    return this.http.get<FilialRota>(this.baseUrlService + cdFilialRota);
  }

  deleteFilialRota(cdFilialRota: number): Observable<FilialRota> {
    return this.http.delete<FilialRota>(this.baseUrlService + cdFilialRota);
  }

  addFilialRota(filialRota: FilialRota): Observable<any> {
    return this.http.post(this.baseUrlService, filialRota);
  }

  updateFilialRota(filialRota: FilialRota): Observable<any> {
    return this.http.put<FilialRota>(this.baseUrlService, filialRota);
  }

}

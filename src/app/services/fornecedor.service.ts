import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Fornecedor } from 'src/app/dominios/fornecedor';


@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  static getAllFornecedor() {
    throw new Error('Method not implemented.');
  }
  private baseUrlService = '';

  constructor(
    private http: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/fornecedor/';
  }

  getAllFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrlService);
  }

  getFornecedor(idFornecedor: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(this.baseUrlService + idFornecedor);
  }

  deleteFornecedor(idFornecedor: number): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(this.baseUrlService + idFornecedor);
  }

  addFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.post(this.baseUrlService, fornecedor);
  }

  updateFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.put<Fornecedor>(this.baseUrlService, fornecedor);
  }
}

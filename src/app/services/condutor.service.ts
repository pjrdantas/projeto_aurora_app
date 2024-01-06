import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Condutor } from '../dominios/condutor';

@Injectable({
  providedIn: 'root',
})
export class CondutorService {

  static getAllCondutor() {
    throw new Error('Method not implemented.');
  }
  private baseUrlService = '';
  loading = false;

  constructor(
    private httpClient: HttpClient,
    public configService: ConfigService
  ) {
    this.baseUrlService = configService.getUrlService() + '/condutor/';
  }

  getAllCondutor(): Observable<Condutor[]> {
    this.loading = true;
    return this.httpClient.get<Condutor[]>(this.baseUrlService)
    .pipe( finalize(() => this.loading = false));
  }

  getCondutor(idCondutor: number) {
    return this.httpClient.get<Condutor>(this.baseUrlService + idCondutor);
  }

  deleteCondutor(idCondutor: number) {
    return this.httpClient.delete<Condutor>(this.baseUrlService + idCondutor);
  }

  addCondutor(condutor: Condutor) {
    return this.httpClient.post(this.baseUrlService, condutor);
  }

  updateCondutor(condutor: Condutor) {
    return this.httpClient.put<Condutor>(this.baseUrlService, condutor);
  }


}

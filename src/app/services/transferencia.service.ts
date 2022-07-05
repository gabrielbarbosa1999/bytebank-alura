import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

}

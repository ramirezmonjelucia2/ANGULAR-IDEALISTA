import { Injectable } from '@angular/core';
import {  Vivienda } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {
  private url = "http://localhost:3000/viviendas"

  constructor(
    private httpClient: HttpClient
  ) { }

  getVivi() {
    return this.httpClient.get(this.url);
  }
  /*
  getViviendas(): Observable<any> {
    const url = `${this.url}/viviendas`;
    return this.httpClient.get(url);
  }
*/

}

import { Injectable } from '@angular/core';
import {  Vivienda } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getViviendas(): Observable<Vivienda[]> {
    return this.httpClient.get<Vivienda[]>("https://idealista-api.herokuapp.com/viviendas");
  }
  

}

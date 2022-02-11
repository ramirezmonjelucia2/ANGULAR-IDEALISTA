import { Injectable } from '@angular/core';
import { Empleado, Vivienda } from '../interfaces/interfaces';
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
    return this.httpClient.get<Vivienda[]>("https://idealistav21.herokuapp.com/viviendas");
  }


}

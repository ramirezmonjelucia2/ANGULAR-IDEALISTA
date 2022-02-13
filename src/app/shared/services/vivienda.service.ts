import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {
  private url = "https://idealista-api.herokuapp.com"

  constructor(
    private httpClient: HttpClient
  ) { }

  

  getCasa(){
    const url = `${this.url}/viviendas/Casa`;
    return this.httpClient.get(url);
  }


  getChalet(){
    const url = `${this.url}/viviendas/Chalet`;
    return this.httpClient.get(url);
  }

  

  venta(idVivienda: number, idEmpleado: number) {
    const url = `${this.url}/venta/${idVivienda}/${idEmpleado}`
    return this.httpClient.put(url, null)
  }
}

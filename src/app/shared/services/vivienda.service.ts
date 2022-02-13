import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {
  private url = "http://localhost:3000"

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
}

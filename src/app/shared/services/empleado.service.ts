import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../classes/empleado';
import { Observable } from 'rxjs';
 //EL SERVICIO PERMITE DEFINIR METODOS QUE PUEDEN SER REUTILIZADOS EN TODA LA APLICACION
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = "http://localhost:3000"
  constructor(private httpClient: HttpClient) {
  }



  getEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.url);
  }

   
    agregarEmpleado(empleado: any){
      const url = `${this.url}/empleados`;
      return this.httpClient.post(url, empleado), {responseType: 'json'}
      ;
    }
  
}

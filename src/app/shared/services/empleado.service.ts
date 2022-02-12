import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../classes/empleado';
import { Observable } from 'rxjs';
//EL SERVICIO PERMITE DEFINIR METODOS QUE PUEDEN SER REUTILIZADOS EN TODA LA APLICACION
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = "https://idealista-api.herokuapp.com/"

  constructor(private httpClient: HttpClient) {
  }



  getEmpleados(): Observable<any> {
    const url = `${this.url}/empleados`;
    return this.httpClient.get(url);
  }


  agregarEmpleado(empleado: any): Observable<any> {
    const url = `${this.url}/empleados`;
    return this.httpClient.post(url, empleado);
  }

  eliminarEmpleado(id: number): Observable<any> {
    const url = `${this.url}/deleteEmpleado/${id}`;
    return this.httpClient.delete(url)
  }


  getEmpleado(id: number): Observable<any> {
    const url = `${this.url}/empleado/${id}`;
    return this.httpClient.get(url);
  }

  modificarEmpleado(idEmpleado:number , empleado: any) {
    const url = `${this.url}/empleado/${idEmpleado}`
    return this.httpClient.put(url, empleado)
  }
}




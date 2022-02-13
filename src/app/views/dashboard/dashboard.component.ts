import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { Empleado } from 'src/app/shared/classes/empleado';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
      text: 'Salarios de los empleados según sus ventas'
    },

    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'Salario'
      }
    },
    series: [
      {
        type: "column",
        name: "Salario",
        data: []
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private empleadoService: EmpleadoService) { }

  OEmpleado: Empleado[]; // usamos el tipo de la clase

  ngOnInit() {
    this.getMisDatos()
  }

  getMisDatos() {
    this.empleadoService.getEmpleados()
      .subscribe(
        (result: any) => {
          this.OEmpleado = result.map((empleado: any) => {
            return new Empleado(empleado.idEmpleado, empleado.nombre, empleado.email, empleado.telefono, empleado.suelbase, empleado.comisionventa, empleado.numeroVentas);
          });
          // Creamos los objetos y usamos un método para representar el valor devuelto
          const dataSeries = this.OEmpleado.map((x: Empleado) => x.salario);
          const dataCategorias = this.OEmpleado.map((x: Empleado) => x.nombre);
          this.chartOptions.series[0]["data"] = dataSeries;
          this.chartOptions.xAxis["categories"] = dataCategorias;
          Highcharts.chart("grafsalarios", this.chartOptions);
        },
        error => console.log(error)
      );
  }
}

import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import { Empleado } from 'src/app/shared/classes/empleado';
import { EmpleadoService } from 'src/app/shared/services/empleado.service';
HC_more(Highcharts);

interface ExtendedChart extends Highcharts.PlotPackedbubbleOptions {
  layoutAlgorithm: {
    splitSeries: any;
  };
}
@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {

      chart: {
        renderTo: "container",
        type: "packedbubble",
        height: "100%"
      },
      title: {
        text: "Ventas"
      },
      tooltip: {
        useHTML: true,
        pointFormat: "{point.value}"
      },
      plotOptions: {
        packedbubble: {
          minSize: "20%",
          maxSize: "100%",
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            style: {
              color: "black",
              textOutline: "none",
              fontWeight: "normal"
            }
          }
        } as ExtendedChart
      },
      series: [
        {
          type: "packedbubble",
          name: "Ventas",
          data: []
        }
      ]
    };
  


constructor(private empleadoService: EmpleadoService) { }

OEmpleado: Empleado[]; 
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
        const dataSeries = this.OEmpleado.map((x: Empleado) => x.numeroVentas);
        this.chartOptions.series[0]["data"] = dataSeries;
      

        Highcharts.chart("grafventas", this.chartOptions);
      },
      error => console.log(error)
    );
}
}

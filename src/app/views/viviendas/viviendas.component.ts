import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/shared/classes/casa';
import { Vivienda } from 'src/app/shared/classes/vivienda';
import { ViviendaService } from 'src/app/shared/services/vivienda.service';
@Component({
  selector: 'app-viviendas',
  templateUrl: './viviendas.component.html',
  styleUrls: ['./viviendas.component.css']
})
export class ViviendasComponent implements OnInit {
  Oviviendas: Vivienda[];
  constructor(private viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.getVivi()
  }
 
  
  getVivi() {
    this.viviendaService.getVivi().subscribe(
      (arrayEnt: any) => {
        this.Oviviendas = arrayEnt.map((x: any) => {
          return new Casa(x.idVivienda, x.largo,x.ancho, x.ubicacion, x.caracteristicas, x.estado, x.cochera);
        });
    });
  }
}





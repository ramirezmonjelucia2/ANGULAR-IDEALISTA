import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/shared/classes/casa';
import { ViviendaService } from 'src/app/shared/services/vivienda.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {
  OCasa: Casa[];
  constructor(private viviendaService: ViviendaService) { }

  ngOnInit() {
    this.Casa() 
    
  }


  Casa() {
    this.viviendaService.getCasa().subscribe(
      (casa: any) => {
        this.OCasa = casa.map((x: any) => {
          return new Casa(x.idVivienda, x.largo, x.ancho, x.ubicacion, x.caracteristicas, x.estado, x.cochera);
        });
      });
  
}
}
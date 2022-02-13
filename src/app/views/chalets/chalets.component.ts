import { Component, OnInit } from '@angular/core';
import { Chalet } from 'src/app/shared/classes/chalet';
import { ViviendaService } from 'src/app/shared/services/vivienda.service';

@Component({
  selector: 'app-chalets',
  templateUrl: './chalets.component.html',
  styleUrls: ['./chalets.component.css']
})
export class ChaletsComponent implements OnInit {
viviendas: Chalet[]
  constructor(private viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.Chalet()
  }

  Chalet() {
    this.viviendaService.getChalet().subscribe(
      (chalet: any) => {
        this.viviendas = chalet.map(
          (x: any) => {
            return new Chalet(x.idVivienda, x.largo, x.ancho, x.ubicacion, x.caracteristicas, x.estado, x.piscina, x.largojardin, x.anchojardin);
          });
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Vivienda } from 'src/app/shared/interfaces/interfaces';
import { ViviendaService } from 'src/app/shared/services/vivienda.service';
@Component({
  selector: 'app-viviendas',
  templateUrl: './viviendas.component.html',
  styleUrls: ['./viviendas.component.css']
})
export class ViviendasComponent implements OnInit {
  viviendas!: Vivienda[];
  selectedVivienda!: Vivienda;
  constructor(private viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.getViviendas()
  }
  public onSelect(vivienda: Vivienda) {
    this.selectedVivienda = vivienda
  }
  public getViviendas(): void {
    this.viviendaService.getViviendas().subscribe(viviendas => this.viviendas = viviendas)
  }
}





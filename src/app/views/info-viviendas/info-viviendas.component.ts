import { Component, OnInit, Input } from '@angular/core';
import { Vivienda } from 'src/app/shared/interfaces/interfaces';
@Component({
  selector: 'app-info-viviendas',
  templateUrl: './info-viviendas.component.html',
  styleUrls: ['./info-viviendas.component.css']
})
export class InfoViviendasComponent implements OnInit {
  @Input()
  //!   -> Este valor no puede ser undefined o nul

  vivienda!: Vivienda
  constructor() { }

  ngOnInit(): void {
  }

}

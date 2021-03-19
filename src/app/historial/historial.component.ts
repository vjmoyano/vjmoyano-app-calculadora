import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../operacion.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  @Input() operacion : Operacion;
  @Input() indice: number;
  constructor() { }

  ngOnInit(): void {
  }

}

import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Operacion } from '../operacion.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() operacionCreada = new EventEmitter<Operacion>();
  valor1: number;
  valor2: number;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSumar():void{

    this.result = this.valor1 + this.valor2;

    let op = new Operacion(this.valor1, this.valor2, this.result);
    console.log(op);
    this.operacionCreada.emit(op);

  }

}

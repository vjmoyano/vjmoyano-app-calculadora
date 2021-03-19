import { Operacion } from './operacion.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación calculadora';
  valores: Operacion[] =[];


  resultado: boolean;

  onGuardar(operacion: Operacion){
    this.valores.push(operacion);
  }

}

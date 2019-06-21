import { Component, OnInit } from '@angular/core';

/*Modelo*/
import { Funcion } from '../../../models/funcion';

@Component({
  selector: 'app-funcion-modal',
  templateUrl: './funcion-modal.component.html',
  styleUrls: ['./funcion-modal.component.css']
})
export class FuncionModalComponent implements OnInit {
  public title: string;
  public funcion: Funcion;
  constructor() {
    this.title = "NUEVA FUNCION";
    this.funcion = new Funcion(1, 2, 1, 'openUrl', 'http://');
  }

  ngOnInit() {
  }

}

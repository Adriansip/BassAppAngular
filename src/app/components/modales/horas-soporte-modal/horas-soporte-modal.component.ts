import { Component, OnInit } from '@angular/core';
import {HorasSoporte} from '../../../models/horasSoporte';

@Component({
  selector: 'app-horas-soporte-modal',
  templateUrl: './horas-soporte-modal.component.html',
  styleUrls: ['./horas-soporte-modal.component.css']
})
export class HorasSoporteModalComponent implements OnInit {
  public title: string;
  public horasSoporte: HorasSoporte;
  constructor() {
    this.title = "NUEVAS HORAS DE SOPORTE";
    this.horasSoporte=new HorasSoporte('2019-06-20',1,'Adrian','Ninguna','2019-07-01','BASSP',1,2);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

/*Modelo*/
import { Licencia } from '../../../models/licencia';

@Component({
  selector: 'app-licencia-modal',
  templateUrl: './licencia-modal.component.html',
  styleUrls: ['./licencia-modal.component.css']
})
export class LicenciaModalComponent implements OnInit {
  public title: string;
  public licencia: Licencia;
  constructor() {
    this.title = "NUEVA LICENCIA";
    this.licencia=new Licencia('2019-06-01',1);
  }

  ngOnInit() {
  }

}

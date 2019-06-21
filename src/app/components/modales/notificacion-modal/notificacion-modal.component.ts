import { Component, OnInit } from '@angular/core';

import { Notificacion } from '../../../models/notificacion';

@Component({
  selector: 'app-notificacion-modal',
  templateUrl: './notificacion-modal.component.html',
  styleUrls: ['./notificacion-modal.component.css']
})
export class NotificacionModalComponent implements OnInit {
  public title: string;
  public notificacion: Notificacion;
  constructor() {
    this.title = "NUEVA NOTIFICACION";
    this.notificacion = new Notificacion('2019-06-20', '[Actualizacion]testExecutor', 'Cambio para ejecucion de flujos...');
  }

  ngOnInit() {
  }

}

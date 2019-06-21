import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horas-soporte',
  templateUrl: './horas-soporte.component.html',
  styleUrls: ['./horas-soporte.component.css']
})
export class HorasSoporteComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = "HORAS DE SOPORTE";
  }

  ngOnInit() {
  }

}

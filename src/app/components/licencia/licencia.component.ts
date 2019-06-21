import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licencia',
  templateUrl: './licencia.component.html',
  styleUrls: ['./licencia.component.css']
})
export class LicenciaComponent implements OnInit {
  public title:string;
  constructor() { 
    this.title="LICENCIAS";
  }

  ngOnInit() {
  }

}

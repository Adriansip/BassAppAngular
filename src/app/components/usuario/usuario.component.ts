import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public title:string;
  constructor() { 
    this.title="USUARIOS";
  }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';

/*Modelo*/
import { Usuario } from '../../../models/usuario';


@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css']
})
export class UsuarioModalComponent implements OnInit {
  public title: string;
  public usuario: Usuario;
  constructor() {
    this.title = "NUEVO USUARIO";
    //Formato de las fechas yyyy-mm-dd
    this.usuario=new Usuario('adrian','cruz','islas','adriansip','adrian@gmail.com',2,'adriancruz','2018-06-20','2019-06-20');
  }

  ngOnInit() {
    
  }

  onSubmit(form) {
   this.usuario= form.form.value;
   this.usuario.correo="cambio.hotmail.com";
   console.log(this.usuario);   
  }

}

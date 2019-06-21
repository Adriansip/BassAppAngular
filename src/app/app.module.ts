import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

//formulario
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { LicenciaComponent } from './components/licencia/licencia.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { HorasSoporteComponent } from './components/horas-soporte/horas-soporte.component';

/**MODALES */
import { UsuarioModalComponent } from './components/modales/usuario-modal/usuario-modal.component';
import { FuncionModalComponent } from './components/modales/funcion-modal/funcion-modal.component';
import { LicenciaModalComponent } from './components/modales/licencia-modal/licencia-modal.component';
import { NotificacionModalComponent } from './components/modales/notificacion-modal/notificacion-modal.component';
import { HorasSoporteModalComponent } from './components/modales/horas-soporte-modal/horas-soporte-modal.component';

@NgModule({
  declarations: [ 
    AppComponent,
    UsuarioComponent,
    FuncionComponent,
    LicenciaComponent,
    NotificacionComponent,
    HorasSoporteComponent,    
    UsuarioModalComponent, 
    FuncionModalComponent, LicenciaModalComponent, NotificacionModalComponent, HorasSoporteModalComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [
    appRoutingProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

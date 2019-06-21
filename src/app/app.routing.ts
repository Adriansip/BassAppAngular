//Imports necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importar componentes
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { LicenciaComponent } from './components/licencia/licencia.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { HorasSoporteComponent } from './components/horas-soporte/horas-soporte.component';

//Definir las rutas
const appRoutes: Routes = [  
  { path: '', component: UsuarioComponent } , 
  { path: 'usuarios', component: UsuarioComponent } , 
  { path: 'funciones', component: FuncionComponent } ,
  { path: 'licencias', component: LicenciaComponent } ,
  { path: 'notificaciones', component: NotificacionComponent } ,
  { path: 'horas_de_soporte', component: HorasSoporteComponent } 
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

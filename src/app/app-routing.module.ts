import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulosComponent } from './pages/modulos/modulos.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { AltaPacienteComponent } from './pages/alta-paciente/alta-paciente.component';
import { EntregaEstudiosComponent } from './pages/entrega-estudios/entrega-estudios.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';

const routes: Routes = [
  {path: 'inicio', component: ModulosComponent},

  // Rutas del modulo RECEPCIÓN
  {path: 'recepcion', component: RecepcionComponent},
  {path: 'alta-paciente', component: AltaPacienteComponent},
  {path: 'entrega-estudios', component: EntregaEstudiosComponent},
  {path: 'cotizacion', component: CotizacionComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

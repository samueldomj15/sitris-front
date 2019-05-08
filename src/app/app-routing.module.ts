import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulosComponent } from './pages/modulos/modulos.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';

const routes: Routes = [
  {path: 'inicio', component: ModulosComponent},
  {path: 'recepcion', component: RecepcionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

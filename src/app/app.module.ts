import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { RecepcionComponent } from './pages/recepcion/recepcion.component';
import { AltaPacienteComponent } from './pages/alta-paciente/alta-paciente.component';
import { EntregaEstudiosComponent } from './pages/entrega-estudios/entrega-estudios.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ModulosComponent,
    RecepcionComponent,
    AltaPacienteComponent,
    EntregaEstudiosComponent,
    CotizacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

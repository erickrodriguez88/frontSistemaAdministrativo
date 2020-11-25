import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservarPuestoComponent } from './reservar-puesto/reservar-puesto.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { GenerarQRComponent } from './generar-qr/generar-qr.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },/*Estos son los links donde va a redireccionar */
  { path: 'inicio', component: InicioComponent },
  { path: 'reservar', component: ReservarPuestoComponent },
  { path: 'cancelar', component: CancelarReservaComponent },
  { path: 'generarQR', component: GenerarQRComponent },
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

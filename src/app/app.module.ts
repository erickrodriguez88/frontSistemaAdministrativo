import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReservarPuestoComponent } from './reservar-puesto/reservar-puesto.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { SolicitudesReservadoComponent } from './solicitudes-reservado/solicitudes-reservado.component';
import { GenerarQRComponent } from './generar-qr/generar-qr.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ReservarPuestoComponent,
    CancelarReservaComponent,
    MenuComponent,
    SolicitudesReservadoComponent,
    GenerarQRComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

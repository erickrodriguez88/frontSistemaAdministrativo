import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-reservado',
  templateUrl: './solicitudes-reservado.component.html',
  styleUrls: ['./solicitudes-reservado.component.css']
})
export class SolicitudesReservadoComponent implements OnInit {

   reservas;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://appjwin.azurewebsites.net/solicitudesReservado");
    resp.subscribe((data)=>
    {
      this.reservas = data; 
      console.log(this.reservas);
    })
  }

}



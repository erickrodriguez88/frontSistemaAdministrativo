import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.css']
})
export class GenerarQRComponent implements OnInit {

  qr;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   /* let resp = this.http.get("https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8");
    resp.subscribe((data)=>
    {
      this.qr = data; 
      console.log(this.qr);
    })*/

  }

  generarQR(item){ 

    console.log(item.value);
    this.qr = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl="+item.value+"&choe=UTF-8"; 
    console.log(this.qr);
  }

  
  

}

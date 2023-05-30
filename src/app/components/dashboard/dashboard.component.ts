import { Component, OnInit } from '@angular/core';
import { BitlyService } from 'src/app/services/bitly.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nombreUrl:string;
  urlShort: string;
  urlProcesada: boolean;
  loanding:boolean;
  alerta: string;

  constructor(private bitlyService:BitlyService) {
    this.nombreUrl = "";
    this.urlShort = "";
    this.urlProcesada = false;
    this.loanding = false;
    this.alerta = "";
  }

  ngOnInit(): void {
  }

  procesar(){
    if (this.nombreUrl != ""){
      this.alerta = "";
      this.loanding = true;
      this.bitlyService.procesar(this.nombreUrl).subscribe(data => {
        this.urlShort = data.link;
        this.urlProcesada = true;
        this.loanding = false;
      }, error => {
        this.alerta = "Por favor ingrese una url valida"; 
        this.loanding = false;
        this.nombreUrl = "";
      })
    } else this.alerta = "por favor ingrese una URL"
  }

}

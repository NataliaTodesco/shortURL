import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {
  url = "https://api-ssl.bitly.com/v4/shorten";

  constructor(private http:HttpClient) { }

  procesar(url:string): Observable<any>{
    return this.http.post(this.url,{
      long_url: url
    })
  }
}

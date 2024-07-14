import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SimulationService { 
  apiUrl = 'https://localhost:7129/api/MontyHallBackend';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  constructor(private http: HttpClient) { }

  getSimulate(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(retry(1));
  }
}

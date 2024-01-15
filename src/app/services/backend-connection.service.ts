import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  // Example GET request:
  getData(api:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${api}`);
  }

} 

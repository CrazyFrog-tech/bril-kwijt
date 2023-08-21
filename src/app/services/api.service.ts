import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FakeBril } from '../dao/fakebril';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://localhost:8083/brilkwijt/";

  constructor(private http: HttpClient) {
  }

  getImages(params: HttpParams): Observable<string[]> {
    return this.http.get<string[]>(this.baseURL +'brilImage', {params});
  }

  getAllBrillen(): Observable<any[]> {
    return this.http.get<FakeBril[]>(this.baseURL + 'brillen')
  }

  addFakeBril(fakebril:FormData): Observable<any> {

    console.log(fakebril)
    return this.http.post<FormData>(this.baseURL + 'description', fakebril);
  }

}

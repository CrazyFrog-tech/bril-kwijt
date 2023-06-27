import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FakeBril } from '../brilgevonden/fakebril';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://localhost:8082/brilkwijt/";

  constructor(private http: HttpClient) {
  }

  getFakebrillen(): Observable<FakeBril[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<FakeBril[]>(this.baseURL + 'people')
  }

  addFakeBril(fakebril:FakeBril): Observable<any> {

    console.log(fakebril + "service")
    return this.http.post(this.baseURL + 'description', fakebril);
  }

}

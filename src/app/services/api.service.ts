import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bril } from '../dao/bril';

@Injectable({ providedIn: 'root' })
export class ApiService {

    baseURL: string = 'https://brilkwijtbackend-e47bf8e71893.herokuapp.com/brilkwijt/';
    // baseURL: string = "http://localhost:8083/brilkwijt/";

    constructor(private http: HttpClient) {
    }

    getImages(httpParams: HttpParams): Observable<Blob> {
        return this.http.get(this.baseURL + 'brilImage', { params: httpParams, responseType: 'blob' });
    }

    getAllBrillen(): Observable<any[]> {
        return this.http.get<Bril[]>(this.baseURL + 'brillen');
    }

    getBril(id: string): Observable<Bril> {
        return this.http.get<Bril>(this.baseURL + 'bril/' + id);
    }

    addFakeBril(fakebril: FormData): Observable<any> {

        console.log(fakebril);
        return this.http.post<FormData>(this.baseURL + 'description', fakebril);
    }

    getAllChats(): Observable<any> {
        return this.http.get(this.baseURL + 'getChats');

    }

}

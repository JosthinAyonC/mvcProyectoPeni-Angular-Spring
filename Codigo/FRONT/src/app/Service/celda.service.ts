import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Celda } from '../models/Celda.model';


const jwt = localStorage.getItem('auth-token');
const baseUrl: string = 'http://localhost:8080/api';
const headers = new HttpHeaders({
  'Authorization': `Bearer ${jwt}`
});
@Injectable({
  providedIn: 'root'
})
export class CeldaService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Celda[]>(`${baseUrl}/celda`, {headers});
  }
  obtenerCelda(id: number){
    return this.http.get<Celda>(`${baseUrl}/celda/${id}`,  {headers});
  }
  updateCelda(id:number ,celda: Celda) {
    return this.http.put<Celda>(`${baseUrl}/celda/agregarGuardia/${id}`, celda,  {headers});
  }
}

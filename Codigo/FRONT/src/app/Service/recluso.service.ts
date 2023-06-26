import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recluso } from '../models/Recluso.model';

const jwt = localStorage.getItem('auth-token');
const baseUrl: string = 'http://localhost:8080/api';
const headers = new HttpHeaders({
  'Authorization': `Bearer ${jwt}`
});
@Injectable({
  providedIn: 'root'
})
export class ReclusoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Recluso[]>(`${baseUrl}/recluso`, {headers});
  }
  eliminar(id: number) {
    return this.http.put<Recluso[]>(`${baseUrl}/recluso/eliminar/${id}`, null, {headers});
  }
  crearNuevoRecluso(recluso: Recluso){
    return this.http.post<Recluso>(`${baseUrl}/recluso`, recluso,  {headers});
  }
  registrarse(recluso: Recluso){
    return this.http.post<Recluso>(`${baseUrl}/auth/signup`, recluso,  {headers});
  }
  obtenerUnRecluso(id: number){
    return this.http.get<Recluso>(`${baseUrl}/recluso/${id}`,  {headers});
  }
  updateRecluso(id:number ,recluso: Recluso){
    return this.http.put<Recluso>(`${baseUrl}/recluso/editar/${id}`, recluso,  {headers});
  }
}

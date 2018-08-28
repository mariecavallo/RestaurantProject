import { Injectable } from '@angular/core';
import { Plat } from '../content/model/Plat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PlatService {

  plats : Observable <Plat[]>

  constructor(private http : HttpClient) { }

  getPlat(){
    this.plats = this.http.get<Plat[]>('http://localhost:9090/Plats')
  }

  
}

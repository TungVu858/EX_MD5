import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tours} from "../model/tours";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  API_URL = `${environment.apiUrl}`;
  getAll() : Observable<Tours[]>{
    // @ts-ignore
    return this.http.get(<Tours[]>(this.API_URL + '/tuors'));
  }
  // @ts-ignore
  save(tour) : Observable<Tours>{
    return this.http.post<Tours>(this.API_URL + '/tuors', tour);
  }

  findById(id : number) :Observable<Tours>{
    return this.http.get<Tours>(`${this.API_URL}/tuors/${id}`);
  }

  update(id : number,tours : Tours) : Observable<Tours>{
    return this.http.put<Tours>(`${this.API_URL}/tuors/${id}`, tours);
  }

  delete(id:number) : Observable<Tours>{
    return this.http.delete<Tours>(`${this.API_URL}/tuors/${id}`);
  }

  constructor(private http : HttpClient) { }
}

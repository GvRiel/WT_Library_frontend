import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservering } from './reservering';
import { API_URL } from '../app.constants';

@Injectable({providedIn: 'root'})
export class reserveringService {
  constructor(private http: HttpClient){}

  public getReserveringen(): Observable<Reservering[]> {
    return this.http.get<Reservering[]>(`${API_URL}/statushistorie/find/status/gereserveerd/1`);
  }

  public goedkeurReservering(reserveringJson: any, user_id: number, exemplaar_id: number): Observable<Reservering> {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      // 'Cache-Control': 'no-cache'
    });
    return this.http.post<Reservering>(`${API_URL}/statushistorie/add/user/${user_id}/exemplaar/${exemplaar_id}`, reserveringJson, { headers : httpHeaders});
  }

  // public addBoek(Boek: Boek): Observable<Boek> {
  //   return this.http.post<Boek>(`${API_URL}/boek/add`, Boek);
  // }

  // public updateBoek(Boek: Boek): Observable<Boek> {
  //   return this.http.put<Boek>(`${API_URL}/boek/update`, Boek);
  // }

  // public deleteBoek(BoekId: number): Observable<void> {
  //   return this.http.delete<void>(`${API_URL}/boek/delete/${BoekId}`);
  // }
}

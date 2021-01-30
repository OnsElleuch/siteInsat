import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Event } from '../models/event';


@Injectable({
    providedIn: 'root'
  })
export class EvenmentsService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.baseUrl + 'evenments/getEvents');
  }
  getEventById(): Observable<Event> {
    return this.http.get<Event>(environment.baseUrl + 'evenments/getEventById');
  }

  getEventsByClub(club : string): Observable<Event[]> {
    return this.http.get<Event[]>(environment.baseUrl + 'evenments/getEventsByClub/'+ club);
  }
  
  
  

}

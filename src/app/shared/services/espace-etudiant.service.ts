import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Calendrier } from '../models/calendrier';
import { Note } from '../models/notes';
import { Contact } from '../models/Contact';

@Injectable()
export class EspaceEtudiantService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  getCalendrier(): Observable<Calendrier[]> {
    return this.http.get<Calendrier[]>(environment.baseUrl + 'calendrier');
  }
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(environment.baseUrl + 'notes');
  }
  sendContact(payload): Observable<Contact> {
    return this.http.post<Contact>(environment.baseUrl + 'contact-admin', payload);
  }
}

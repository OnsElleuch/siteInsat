import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root',
})
export class ClubsService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(environment.baseUrl + 'clubs/getClubs');
  }
  getClubById(id: number): Observable<Club> {
    return this.http.get<Club>(environment.baseUrl + 'clubs/club/' + id);
  }
}

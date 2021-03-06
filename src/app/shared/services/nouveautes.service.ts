import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NouveautesService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(environment.baseUrl + 'nouveautes/getNews');
  }
  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(environment.baseUrl + 'nouveautes/getNewsById/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Calendrier } from '../models/calendrier';
import { Note } from '../models/notes';
import { Contact } from '../models/Contact';
import { login } from '../models/login';

@Injectable()
export class LoginService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  login(payload): Observable<login> {
    return this.http.post<login>(environment.baseUrl + 'auth/login', payload);
  }
}

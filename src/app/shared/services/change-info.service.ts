import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class ChangeInfoService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  changeInfo(id, info): Observable<any> {
    return this.http.put<any>(environment.baseUrl + 'Etudiant/' + id, info);
  }
  getInfo(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl + 'Etudiant/' + id);
  }
}

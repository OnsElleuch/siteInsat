import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../models/enseignant';
import { Lab } from '../models/lab';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends GenericService {

  constructor(private http: HttpClient) { 
    super();
  }
  getLabs(department: string): Observable<Lab[]>{
    return this.http.get<Lab[]>(environment.baseUrl + 'department/getLabs/'+ department);

  }
  getProfesseurs(department: string): Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(environment.baseUrl + 'department/getEnseignant/'+ department + '/professeur');
  }
  getMaitreConf(department: string): Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(environment.baseUrl + 'department/getEnseignant/'+ department + '/conf');
  }
  getMaitreAss(department: string): Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(environment.baseUrl + 'department/getEnseignant/'+ department + '/ass');
  }
  getProfSec(department: string): Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(environment.baseUrl + 'department/getEnseignant/'+ department + '/sec');
  }
  
}

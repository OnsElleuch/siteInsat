import { Injectable } from '@angular/core';
import { Ressource } from '../models/ressource';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmploisService {
  emlpois = [
    {
      name: 'MPI 1/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'MPI 1/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'MPI 1/3',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'MPI 1/4',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'MPI  2/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'MPI 2/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'MPI 2/3',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'MPI 2/4',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'MPI 3/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'MPI 3/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'MPI 3/3',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'MPI 3/4',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'MPI 4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'MPI 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'MPI 4/3',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'MPI 4/4',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'CBA 1/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'CBA 1/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'CBA 1/3',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'CBA 1/4',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'CBA  2/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'CBA 2/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'CBA 2/3',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'CBA 2/4',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'GL 2/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'GL 2/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'GL 3/1',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'GL 3/2',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'GL  4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'GL 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'GL 5/1',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'GL 5/2',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'RT 2/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'RT 2/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'RT 3/1',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'RT 3/2',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'RT  4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'RT 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'RT 5/1',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'RT 5/2',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'IIA 2/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'IIA 2/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'IIA 3/1',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'IIA 3/2',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'IIA  4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'IIA 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'IIA 5/1',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'IIA 5/2',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'IMI 2/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'IMI 2/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'IMI 3/1',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'IMI 3/2',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'IMI  4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'IMI 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'IMI 5/1',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'IMI 5/2',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'BIO 2/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'BIO 2/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'BIO 3/1',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'BIO 3/2',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'BIO  4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'BIO 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'BIO 5/1',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'BIO 5/2',
      url: 'assets/upload/1527237750.pdf',
    },
    {
      name: 'CH 2/1',
      url: 'assets/upload/1527237747.pdf',
    },
    {
      name: 'CH 2/2',
      url: 'assets/upload/1527237749.pdf',
    },
    {
      name: 'CH 3/1',
      url: 'assets/upload/1527237742.pdf',
    },
    {
      name: 'CH 3/2',
      url: 'assets/upload/1527237741.pdf',
    },
    {
      name: 'CH  4/1',
      url: 'assets/upload/1527237744.pdf',
    },
    {
      name: 'CH 4/2',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'CH 5/1',
      url: 'assets/upload/1527237745.pdf',
    },
    {
      name: 'CH 5/2',
      url: 'assets/upload/1527237750.pdf',
    },
  ];

  constructor(private http: HttpClient) {}

  getMPI(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('MPI'));
  }

  getCBA(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('CBA'));
  }

  getGL(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('GL'));
  }

  getIIA(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('IIA'));
  }

  getIMI(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('IMI'));
  }

  getRT(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('RT'));
  }

  getBIO(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('BIO'));
  }

  getCH(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('CH'));
  }

  getEmplois(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(environment.baseUrl + 'rendez-vous/calendrier');
  }
}

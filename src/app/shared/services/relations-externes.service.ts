import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RelationsExternesService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }

  getDocsAdmin() {
    return [
      {
        name: 'Fiche de Proposition d’un Stage.pdf',
        url: 'assets/upload/1527157145.pdf',
      },
      {
        name: 'Lettre d’Affectation.pdf',
        url: 'assets/upload/1558706136.pdf',
      },
      {
        name: 'Modèle du Rapport du Stage.doc',
        url: 'assets/upload/1527157147.doc',
      },
      {
        name: "Lettre de liaison stage d'été.pdf",
        url: 'assets/upload/1559283976.pdf',
      },
      {
        name: 'Lettre de liaison stage volontaire.pdf',
        url: 'assets/upload/1559283978.pdf',
      },
      {
        name: 'Lettre d’affectation stage volontaire.pdf',
        url: 'assets/upload/1599477948.pdf',
      },
    ];
  }

  getDocsLicense() {
    return [
      {
        name: 'La Fiche de Proposition d’un Stage de Fin d’Etudes (SFE)',
        url: 'assets/upload/1476712981.pdf',
      },
      {
        name: 'La lettre de liaison destinée à l’entreprise (SFE)',
        url: 'assets/upload/1559283972.pdf',
      },
    ];
  }

  getDocsMastere() {
    return [
      {
        name: 'lettre Affectation MIQ',
        url: 'assets/upload/1592565488.pdf',
      },
    ];
  }

  getDocsIngenieur() {
    return [
      {
        name: 'La Fiche de Proposition d’un Stage de PFE ( Télécharger )',
        url: 'assets/upload/1440413070.pdf',
      },
      {
        name: 'La Fiche de Proposition d’un Stage de PFE ( Version Française )',
        url: 'assets/upload/1559283974.pdf',
      },
      {
        name: 'La Fiche de Proposition d’un Stage de PFE ( Version Anglaise )',
        url: 'assets/upload/1559283980.pdf',
      },
    ];
  }

  getPartenariats() {
    return this.http.get(environment.baseUrl + 'partenariat');
  }

  getConventions() {
    return this.http.get(environment.baseUrl + 'convention');
  }
}

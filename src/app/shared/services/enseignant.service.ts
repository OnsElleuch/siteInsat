import { Injectable } from '@angular/core';
import { Enseignant } from '../models/enseignant';

@Injectable({
  providedIn: 'root',
})
export class EnseignantService {
  enseignants: Enseignant[];

  constructor() {}

  getEnseignants(): Enseignant[] {
    return this.enseignants;
  }

  getResponsableEcoleDoctorale(): Enseignant[] {
    return this.enseignants.filter((enseignant) => enseignant.posteAdministratif.includes('ecole doctorale'));
  }
}

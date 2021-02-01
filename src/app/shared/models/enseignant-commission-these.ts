import { Enseignant } from './enseignant';
import { LaboratoireRecherche } from './laboratoire-recherche';

export class EnseignantCommissionThese extends Enseignant {
  public président: boolean;
  public laboratiore: LaboratoireRecherche;
  public domaine: string;
}

import { Injectable } from '@angular/core';
import { BrevetInvention } from '../models/brevet-invention';
import { Convention } from '../models/convention';
import { Ressource } from '../models/ressource';
import { ProjetDeRecherche } from '../models/projet-de-recherche';
import { Labo } from '../models/labo';

@Injectable({
  providedIn: 'root',
})
export class RechercheService {
  laboratoires = [
    {
      name: "LISI: Laboratoire d'Informatique pour les Systèmes Industriels",
      code: 'LR11ES26',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Moncef Gasmi',
    },
    {
      name: 'LIP.MB: Laboratoire Ingénierie des Protéines et des Molécules Bio Actif',
      code: 'LR11ES24',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Najib Marzoukii',
    },
    {
      name: 'M.M.A: Laboratoire Matériaux Mesures et Applications',
      code: 'LR11ES26',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Chaker Zaghdoudi',
    },
    {
      name: 'LETMI: Laboratoire Ecologie et Technologie Microbienne',
      code: 'LR05ES08',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Mokhtar Hamdi',
    },
  ];
  uniteRecherche = [
    {
      name: 'ERCO: Unité de recherches Energie Robotique Commande    et Optimisation',
      code: 'UR11ES34',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Rachid Dhifaoui',
    },
    {
      name: 'EMNA: Etude des Nano Matériaux et leurs Applications',
      code: '05UR12-04',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Narjes Battis',
    },
    {
      name: 'URNVPM: Unité de Recherche de Nanobiotechnologie et Valorisation des Phytoressources Médicinales',
      code: 'UR17ES22',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Mohamed Boussaid',
    },
    {
      name: 'UR-Service: Bactériologie Moléculaire et Génomique',
      code: 'UR-Service',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Maher Gtari',
    },
  ];
  projects: ProjetDeRecherche[];
  brevets: BrevetInvention[];
  conventionsInternationalles: Convention[];
  fiches = [
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°4 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208482.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°3 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208545.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°2 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208557.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°1 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208569.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°2 (Expérience Pédagogique)',
      url: 'assets/upload/1521208583.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°1 (Expérience Pédagogique))',
      url: 'assets/upload/1521208593.pdf',
    },
    {
      name: "Fiche de validation des crédits de la formation doctorale complémentaire (FDC) de l'année 2017/2018",
      url: 'assets/upload/1521206843.pdf',
    },
  ];

  constructor() {}

  getBrevets(): BrevetInvention[] {
    return this.brevets;
  }

  getConventions(): Convention[] {
    return this.conventionsInternationalles;
  }

  getFiches(): Ressource[] {
    return this.fiches;
  }

  getLabos(): Labo[] {
    return this.laboratoires;
  }

  getUnitesDeRecherche(): Labo[] {
    return this.uniteRecherche;
  }
  getprojets(): ProjetDeRecherche[] {
    return this.projects;
  }
}

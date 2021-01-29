import { Component, OnInit } from '@angular/core';
import { ProjetDeRecherche } from '../../shared/models/projet-de-recherche';

@Component({
  selector: 'app-labos',
  templateUrl: './labos.component.html',
  styleUrls: ['./labos.component.css'],
})
export class LabosComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-complementaire-lmd',
  templateUrl: './formation-complementaire-lmd.component.html',
  styleUrls: ['./formation-complementaire-lmd.component.css'],
})
export class FormationComplementaireLmdComponent implements OnInit {
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

  ngOnInit(): void {}
  openPdf(url: string): void {
    window.open(url, '_blank');
  }
}

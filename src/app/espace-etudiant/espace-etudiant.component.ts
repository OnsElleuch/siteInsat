import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css'],
})
export class EspaceEtudiantComponent implements OnInit {
  constructor() {}
  Notes: any;
  Calendrier: any;

  ngOnInit(): void {
    this.Notes = this.getNotes();
    this.Calendrier = this.getCalendrier();
  }
  getNotes() {
    return [
      {
        title: 'Deliberation semestre 1:',
        fields: [
          {
            fieldName: 'Class :',
            fieldContent: ' GL4 ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
      {
        title: 'Consulter relevée de notes:',
        fields: [
          {
            fieldName: 'etudiant :',
            fieldContent: ' elleuch sami ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
      {
        title: 'Consulter dernier affichage:',
        fields: [
          {
            fieldName: 'Class :',
            fieldContent: ' GL4 ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
      {
        title: 'Deliberation semestre 1:',
        fields: [
          {
            fieldName: 'Class :',
            fieldContent: ' GL4 ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
    ];
  }

  getCalendrier() {
    return [
      {
        title: 'Emploi du temps:',
        fields: [
          {
            fieldName: 'Class :',
            fieldContent: ' GL4 ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
      {
        title: 'Repartition TP',
        fields: [
          {
            fieldName: 'etudiant :',
            fieldContent: ' elleuch sami ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
      {
        title: 'Repartition Examen',
        fields: [
          {
            fieldName: 'Class :',
            fieldContent: ' GL4 ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
      {
        title: 'Deliberation semestre 1:',
        fields: [
          {
            fieldName: 'Class :',
            fieldContent: ' GL4 ',
          },
          {
            fieldName: 'Annee universitaires ::',
            fieldContent: '2021/2022 ',
          },
        ],
        link: '#',
      },
    ];
  }
}

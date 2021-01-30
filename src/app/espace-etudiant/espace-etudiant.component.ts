import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

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
    this.initCarousel9('owl-demo-99', 50);
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
    this.initCarousel9('owl-demo-999', 50);
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
  initCarousel9(className: string, timeout) {
    const carousel = jQuery('#' + className);

    setTimeout(function () {
      carousel.owlCarousel({
        items: 3, // 10 items above 1000px browser width
        itemsDesktop: [1000, 2], // 5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], // 2 items between 600 and 0
        itemsMobile: [400, 1], // itemsMobile disabled - inherit from itemsTablet option
      });
    }, timeout);
  }
}

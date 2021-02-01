import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EspaceEtudiantService } from '../shared/services/espace-etudiant.service';
declare var jQuery: any;

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css'],
})
export class EspaceEtudiantComponent implements OnInit {
  constructor(private espaceEtudiantService: EspaceEtudiantService) {}
  Notes: any;
  Calendrier: any;
  CalendrierData: any;
  ngOnInit(): void {
    this.getNotes();
    this.getCalendrier();
  }
  Filiere: any[] = [
    { option: 'GL' },
    { option: 'RT' },
    { option: 'IIA' },
    { option: 'IMI' },
    { option: 'CH' },
    { option: 'BIO' },
    { option: 'CBA' },
    { option: 'MPI' },
    { option: 'Licence' },
  ];
  onSubmit(formulaire: NgForm) {
    this.espaceEtudiantService.sendContact(formulaire.value).subscribe((res) => {
      console.log(res);
    });
  }
  getCalendrier() {
    this.espaceEtudiantService.getCalendrier().subscribe((data) => {
      this.initCarousel9('owl-demo-999', 50);
      console.log(data);
      this.Calendrier = data;
    });
  }
  getNotes() {
    this.espaceEtudiantService.getNotes().subscribe((data) => {
      this.initCarousel9('owl-demo-99', 50);
      console.log(data);
      this.Notes = data;
    });
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

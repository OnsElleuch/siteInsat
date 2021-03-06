import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangeInfoService } from '../shared/services/change-info.service';
import { EspaceEtudiantService } from '../shared/services/espace-etudiant.service';
declare var jQuery: any;

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css'],
})
export class EspaceEtudiantComponent implements OnInit {
  constructor(private espaceEtudiantService: EspaceEtudiantService, private changeInfoService: ChangeInfoService) {}
  Notes: any;
  Calendrier: any;
  CalendrierData: any;
  user: any;
  local: any;
  changeToggle: Boolean;

  ngOnInit(): void {
    this.getNotes();
    this.getCalendrier();
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.changeToggle = false;
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
  toggle() {
    this.changeToggle = !this.changeToggle;
  }
  onSubmit(formulaire: NgForm) {
    this.espaceEtudiantService.sendContact(formulaire.value).subscribe((res) => {
      console.log(res);
    });
  }
  submitChange(formulaireChange: NgForm) {
    this.changeInfoService.changeInfo(this.user.id, formulaireChange.value).subscribe((res) => {
      console.log(res);
      this.changeInfoService.getInfo(this.user.id).subscribe((res) => {
        this.user = res;
        console.log(res);
      });
    });
    this.toggle();
  }
  logout() {
    localStorage.clear();
    localStorage.removeItem('user');
    window.location.reload();
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

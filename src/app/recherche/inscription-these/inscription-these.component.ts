import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-these',
  templateUrl: './inscription-these.component.html',
  styleUrls: ['./inscription-these.component.css'],
})
export class InscriptionTheseComponent implements OnInit {
  constructor() {}
  anneeScolaire: string;

  getAneescolaire;

  ngOnInit(): void {
    const annee = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    if (month <= 7) {
      this.anneeScolaire = (annee - 1).toString() + '-' + annee.toString();
    } else {
      this.anneeScolaire = annee.toString() + '-' + (annee + 1).toString();
    }
  }
  openPdf(url: string): void {
    window.open(url, '_blank');
  }
}

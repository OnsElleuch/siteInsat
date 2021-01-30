import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot-dossier-these',
  templateUrl: './depot-dossier-these.component.html',
  styleUrls: ['./depot-dossier-these.component.css'],
})
export class DepotDossierTheseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  openPdf(url: string): void {
    window.open(url, '_blank');
  }
}

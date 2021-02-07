import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dossier-mission-stage',
  templateUrl: './dossier-mission-stage.component.html',
  styleUrls: ['./dossier-mission-stage.component.css'],
})
export class DossierMissionStageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  openPdf(url: string): void {
    window.open(url, '_blank');
  }
}

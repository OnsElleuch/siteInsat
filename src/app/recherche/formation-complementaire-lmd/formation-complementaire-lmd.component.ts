import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../shared/models/ressource';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-formation-complementaire-lmd',
  templateUrl: './formation-complementaire-lmd.component.html',
  styleUrls: ['./formation-complementaire-lmd.component.css'],
})
export class FormationComplementaireLmdComponent implements OnInit {
  fiches: Ressource[];

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.fiches = this.rechercheService.getFiches();
  }
  openPdf(url: string): void {
    window.open(url, '_blank');
  }
}

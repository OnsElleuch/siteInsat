import { Component, OnInit } from '@angular/core';
import { ProjetDeRecherche } from '../../shared/models/projet-de-recherche';
import { LaboratoireRecherche } from '../../shared/models/laboratoire-recherche';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-labos',
  templateUrl: './laboratoires-recherche.component.html',
  styleUrls: ['./laboratoires-recherche.component.css'],
})
export class LaboratoiresRechercheComponent implements OnInit {
  laboratoires: LaboratoireRecherche[];
  uniteRecherche: LaboratoireRecherche[];
  projects: ProjetDeRecherche[];

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getLabos().subscribe((labos) => (this.laboratoires = labos));
    this.rechercheService.getUnites().subscribe((labos) => (this.uniteRecherche = labos));

    this.rechercheService.getprojets().subscribe((projets) => (this.projects = projets));
  }
}

import { Component, OnInit } from '@angular/core';
import { ProjetDeRecherche } from '../../shared/models/projet-de-recherche';
import { Labo } from '../../shared/models/labo';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-labos',
  templateUrl: './labos.component.html',
  styleUrls: ['./labos.component.css'],
})
export class LabosComponent implements OnInit {
  laboratoires: Labo[];
  uniteRecherche: Labo[];
  projects: ProjetDeRecherche[];

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.laboratoires = this.rechercheService.getLabos();
    this.uniteRecherche = this.rechercheService.getUnitesDeRecherche();
    this.projects = this.rechercheService.getprojets();
  }
}

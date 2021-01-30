import { Component, OnInit } from '@angular/core';
import { BrevetInvention } from '../../shared/models/brevet-invention';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-brevet-invention',
  templateUrl: './brevet-invention.component.html',
  styleUrls: ['./brevet-invention.component.css'],
})
export class BrevetInventionComponent implements OnInit {
  brevets: BrevetInvention[];
  inventeurs: Array<any>;

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getBrevets().subscribe((brevets) => (this.brevets = brevets));
    this.getInventeurs();
  }

  getInventeurs(): void {
    for (const brevet of this.brevets) {
      this.inventeurs.push(brevet.inventeurs.map((inventeur) => inventeur.name.concat(inventeur.lastName)));
    }
  }
}

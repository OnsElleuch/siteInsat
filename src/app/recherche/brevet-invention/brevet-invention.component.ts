import { Component, OnInit } from '@angular/core';
import { BrevetInvention } from '../../shared/models/brevet-invention';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-brevet-invention',
  templateUrl: './brevet-invention.component.html',
  styleUrls: ['./brevet-invention.component.css'],
})
export class BrevetInventionComponent implements OnInit {
  brevets: BrevetInvention[] = [];

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getBrevets().subscribe((brevets) => {
      this.brevets = brevets;
    });
  }
}

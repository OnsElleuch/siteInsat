import { Component, OnInit } from '@angular/core';
import { Convention } from '../../shared/models/convention';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-collaborations-internationalles',
  templateUrl: './collaborations-internationalles.component.html',
  styleUrls: ['./collaborations-internationalles.component.css'],
})
export class CollaborationsInternationallesComponent implements OnInit {
  conventions: Convention[];
  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getConventions().subscribe((conventions) => (this.conventions = conventions));
  }
}

import { Component, OnInit } from '@angular/core';
import { RelationsExternesService } from '../shared/services/relations-externes.service';
import { Ressource } from '../shared/models/ressource';
import { Partenariat } from '../shared/models/partenariat.model';
import { Convention } from '../shared/models/convention.model';

@Component({
  selector: 'app-relations-externes',
  templateUrl: './relations-externes.component.html',
  styleUrls: ['./relations-externes.component.css'],
})
export class RelationsExternesComponent implements OnInit {
  tablist = [true, false, false, false, false, false];

  partenariats: Partenariat[];
  conventions: Convention[];
  docsAdmin: Ressource[];
  docsLicense: Ressource[];
  docsMastere: Ressource[];
  docsIngenieur: Ressource[];

  constructor(private relationsService: RelationsExternesService) {}

  ngOnInit(): void {
    this.getDocs();
  }

  getDocs() {
    this.docsAdmin = this.relationsService.getDocsAdmin();
    this.docsLicense = this.relationsService.getDocsLicense();
    this.docsMastere = this.relationsService.getDocsMastere();
    this.docsIngenieur = this.relationsService.getDocsIngenieur();
    this.partenariats = this.relationsService.getPartenariats();
    this.conventions = this.relationsService.getConventions();
  }

  changeActiveTab(tab: number) {
    this.tablist.forEach((value, index) => {
      if (index == tab) {
        this.tablist[index] = true;
      } else {
        this.tablist[index] = false;
      }
    });
  }

  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

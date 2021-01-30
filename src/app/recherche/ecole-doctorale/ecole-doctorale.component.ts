import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../shared/models/enseignant';
import { EnseignantService } from '../../shared/services/enseignant.service';
import { RechercheService } from '../../shared/services/recherche.service';
import { Doctorant } from '../../shared/models/doctorant';
import { EnseignantCommissionThese } from '../../shared/models/enseignant-commission-these';

@Component({
  selector: 'app-ecole-doctorale',
  templateUrl: './ecole-doctorale.component.html',
  styleUrls: ['./ecole-doctorale.component.css'],
})
export class EcoleDoctoraleComponent implements OnInit {
  responsables;
  comiteScientifique = [
    {
      email: '',
      name: 'Mohamed  Saber',
      lastName: 'Naceur',
      discipline: '',
      department: '',
      grade: 'Pr.',
      qualite: 'Directeur Ecole Doctorale',
      etablissement: 'UCAR',
      universite: 'UCAR',
      structureRecherche: '',
    },
  ];
  commissionThese: EnseignantCommissionThese[];
  commissionTheseBiologie: EnseignantCommissionThese[];
  commissionTheseInformatiqueIndistruelle: EnseignantCommissionThese[];
  commissionTheseChimie: EnseignantCommissionThese[];
  commissionTheseElectronique: EnseignantCommissionThese[];
  commission: EnseignantCommissionThese[];
  cotutelle: Doctorant[];
  doctorants: Doctorant[];
  domaineRecherche: string[];
  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getCommissionThese().subscribe((membres) => (this.commissionThese = membres));
    this.commissionTheseBiologie = this.commissionThese.filter((enseignant) => enseignant.domaine === 'biologie');
    this.commissionTheseChimie = this.commissionThese.filter((enseignant) => enseignant.domaine === 'Chimie');
    this.commissionTheseInformatiqueIndistruelle = this.commissionThese.filter(
      (enseignant) => enseignant.domaine === 'Informatique Indistruelle'
    );
    this.commissionTheseElectronique = this.commissionThese.filter(
      (enseignant) => enseignant.domaine === 'Electronique'
    );
    this.rechercheService.getDoctorants().subscribe((doctorants) => (this.doctorants = doctorants));
    this.cotutelle = this.getCotutelle();
    this.domaineRecherche = this.commissionThese.map((commission) => commission.domaine);

    this.domaineRecherche.filter((domaine, pos) => this.domaineRecherche.indexOf(domaine) === pos);
    console.log(this.domaineRecherche);
  }

  getCotutelle(): Doctorant[] {
    return this.doctorants.filter((doctorant) => doctorant.cotutelle);
  }
  setCommission(domaine: string): string {
    switch (domaine) {
      case 'biologie': {
        this.commissionThese = this.commissionTheseBiologie;
        break;
      }
      case 'Chimie': {
        this.commissionThese = this.commissionTheseChimie;
        break;
      }
      case 'Informatique Indistruelle': {
        this.commissionThese = this.commissionTheseInformatiqueIndistruelle;
        break;
      }
      case 'Electronique': {
        this.commissionThese = this.commissionTheseElectronique;
        break;
      }
    }
    return domaine;
  }
}

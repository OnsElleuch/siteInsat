import { Component, OnInit } from '@angular/core';
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
  domaineRecherche: string[] = [];

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getCommissionTheseBio().subscribe((membres) => {
      this.commissionTheseBiologie = membres;
      console.log(this.commissionTheseBiologie);
    });
    this.rechercheService.getCommissionTheseChimie().subscribe((membres) => {
      this.commissionTheseChimie = membres;
    });
    this.rechercheService.getCommissionTheseInformatiqueIndistruelle().subscribe((membres) => {
      this.commissionTheseInformatiqueIndistruelle = membres;
    });
    this.rechercheService.getCommissionTheseElectronique().subscribe((membres) => {
      this.commissionTheseElectronique = membres;
    });
    setTimeout(() => {
      console.log(this.getDomainesRecherche());
    }, 3000);
    this.rechercheService.getDoctorants().subscribe((doctorants) => (this.doctorants = doctorants));
    setTimeout(() => {
      this.cotutelle = this.getCotutelle();
    }, 1500);
  }

  getCotutelle(): Doctorant[] {
    return this.doctorants?.filter((doctorant) => doctorant.cotutelle);
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
    console.log(this.commissionThese);
    return domaine;
  }

  getDomainesRecherche(): string[] {
    if (this.commissionTheseBiologie) {
      this.domaineRecherche.push(this.commissionTheseBiologie[0].domaine);
    }
    if (this.commissionTheseElectronique) {
      this.domaineRecherche.push(this.commissionTheseElectronique[0].domaine);
    }
    if (this.commissionTheseInformatiqueIndistruelle) {
      this.domaineRecherche.push(this.commissionTheseInformatiqueIndistruelle[0].domaine);
    }
    if (this.commissionTheseChimie) {
      this.domaineRecherche.push(this.commissionTheseChimie[0].domaine);
    }
    return this.domaineRecherche;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

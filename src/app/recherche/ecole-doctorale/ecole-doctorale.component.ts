import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../shared/models/enseignant';
import { EnseignantService } from '../../shared/services/enseignant.service';

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
  commissionTheseBiologie: Enseignant[];
  commissionTheseInformatiqueIndistruelle: Enseignant[];
  commissionTheseChimie: Enseignant[];
  commissionTheseElectronique: Enseignant[];
  cotutelle;
  constructor(private enseignantsService: EnseignantService) {}

  ngOnInit(): void {}
}

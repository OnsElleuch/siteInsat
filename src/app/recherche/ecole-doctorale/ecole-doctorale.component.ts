import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../shared/models/enseignant';
import { EnseignantService } from '../../shared/services/enseignant.service';

@Component({
  selector: 'app-ecole-doctorale',
  templateUrl: './ecole-doctorale.component.html',
  styleUrls: ['./ecole-doctorale.component.css'],
})
export class EcoleDoctoraleComponent implements OnInit {
  responsables: Enseignant[];
  comiteScientifique: Enseignant[];
  commissionTheseBiologie: Enseignant[];
  commissionTheseInformatiqueIndistruelle: Enseignant[];
  commissionTheseChimie: Enseignant[];
  commissionTheseElectronique: Enseignant[];
  constructor(private enseignantsService: EnseignantService) {}

  ngOnInit(): void {
    this.responsables = this.enseignantsService.getResponsableEcoleDoctorale();
  }
}

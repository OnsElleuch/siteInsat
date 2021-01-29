import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcoleDoctoraleComponent } from './ecole-doctorale/ecole-doctorale.component';
import { FormationComplementaireLmdComponent } from './formation-complementaire-lmd/formation-complementaire-lmd.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAtom, faCheck, faLaptopCode, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { InscriptionTheseComponent } from './inscription-these/inscription-these.component';
import { DepotDossierTheseComponent } from './depot-dossier-these/depot-dossier-these.component';
import { DossierMissionStageComponent } from './dossier-mission-stage/dossier-mission-stage.component';
import { LabosComponent } from './labos/labos.component';
import { CollaborationsInternationallesComponent } from './collaborations-internationalles/collaborations-internationalles.component';
import { BrevetInventionComponent } from './brevet-invention/brevet-invention.component';

@NgModule({
  declarations: [
    EcoleDoctoraleComponent,
    FormationComplementaireLmdComponent,
    InscriptionTheseComponent,
    DepotDossierTheseComponent,
    DossierMissionStageComponent,
    LabosComponent,
    CollaborationsInternationallesComponent,
    BrevetInventionComponent,
  ],
  imports: [FontAwesomeModule, CommonModule],
})
export class RechercheModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCheck, faAtom, faLaptopCode, faMicroscope);
  }
}

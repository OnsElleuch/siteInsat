import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsRoutingModule } from './departements-routing.module';
import { PhyInsComponent } from './phy-ins/phy-ins.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faAtom, faLaptopCode, faMicroscope, faFlask } from '@fortawesome/free-solid-svg-icons';
import { InfMathComponent } from './inf-math/inf-math.component';
import { BioChComponent } from './bio-ch/bio-ch.component';
import { FormGenComponent } from './form-gen/form-gen.component';

@NgModule({
  declarations: [PhyInsComponent, InfMathComponent, BioChComponent, FormGenComponent],
  imports: [CommonModule, FontAwesomeModule, DepartementsRoutingModule],
})
export class DepartementsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCheck, faAtom, faLaptopCode, faMicroscope, faFlask);
  }
}

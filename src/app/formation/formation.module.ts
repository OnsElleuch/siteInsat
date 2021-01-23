import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepaComponent } from './prepa/prepa.component';
import { FormationRoutingModule } from './formation-routing.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faAtom, faLaptopCode, faMicroscope, faRobot, faIndustry, faNetworkWired, faLaptop, faFlask, faDna, faSquareRootAlt, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { IngComponent } from './ing/ing.component';
import { LaComponent } from './la/la.component';
import { MasterComponent } from './master/master.component';
import { FormDisComponent } from './form-dis/form-dis.component';



@NgModule({
  declarations: [
    PrepaComponent,
    IngComponent,
    LaComponent,
    MasterComponent,
    FormDisComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FontAwesomeModule
  ]
})
export class FormationModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faCheck, faAtom, faLaptopCode, faMicroscope, faRobot, faIndustry, faNetworkWired, faLaptop, faFlask, faDna,faSquareRootAlt,faMicrochip );
  }
}

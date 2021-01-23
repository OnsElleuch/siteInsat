import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepaComponent } from './prepa/prepa.component';
import { FormationRoutingModule } from './formation-routing.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faAtom, faLaptopCode, faMicroscope } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    PrepaComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FontAwesomeModule
  ]
})
export class FormationModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faCheck, faAtom, faLaptopCode, faMicroscope );
  }
}

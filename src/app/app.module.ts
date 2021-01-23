import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAtom, faCheck, faLaptopCode, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { DepartementsModule } from './departements/departements.module';
import { AboutUsService } from './shared/services/about-us.service';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './shared/services/department.service';
import { FormationModule } from './formation/formation.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    DepartementsModule,
    SharedModule,
    FormationModule
    
  ],
  providers: [AboutUsService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faCheck, faAtom, faLaptopCode, faMicroscope );
  }
}

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
import { EvenmentsComponent } from './evenments/evenments.component';
import { EventCardComponent } from './event-card/event-card.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { NewsEventTemplateComponent } from './news-event-template/news-event-template.component';
import { ClubsComponent } from './clubs/clubs.component';
import { CardClubComponent } from './card-club/card-club.component';
import { ClubTemplateComponent } from './club-template/club-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    EvenmentsComponent,
    EventCardComponent,
    NouveautesComponent,
    NewsEventTemplateComponent,
    ClubsComponent,
    CardClubComponent,
    ClubTemplateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    DepartementsModule,
    SharedModule
    
  ],
  providers: [AboutUsService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faCheck, faAtom, faLaptopCode, faMicroscope );
  }
}

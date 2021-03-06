import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BioChComponent } from './departements/bio-ch/bio-ch.component';
import { FormGenComponent } from './departements/form-gen/form-gen.component';
import { InfMathComponent } from './departements/inf-math/inf-math.component';
import { PhyInsComponent } from './departements/phy-ins/phy-ins.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { EvenmentsComponent } from './evenments/evenments.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { EmploisComponent } from './scolarite/emplois/emplois.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { NewsEventTemplateComponent } from './news-event-template/news-event-template.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubTemplateComponent } from './club-template/club-template.component';
import { BrevetInventionComponent } from './recherche/brevet-invention/brevet-invention.component';
import { CollaborationsInternationallesComponent } from './recherche/collaborations-internationalles/collaborations-internationalles.component';
import { DepotDossierTheseComponent } from './recherche/depot-dossier-these/depot-dossier-these.component';
import { DossierMissionStageComponent } from './recherche/dossier-mission-stage/dossier-mission-stage.component';
import { EcoleDoctoraleComponent } from './recherche/ecole-doctorale/ecole-doctorale.component';
import { FormationComplementaireLmdComponent } from './recherche/formation-complementaire-lmd/formation-complementaire-lmd.component';
import { InscriptionTheseComponent } from './recherche/inscription-these/inscription-these.component';
import { LaboratoiresRechercheComponent } from './recherche/laboratiores-recherche/laboratoires-recherche.component';
import { ProductionScientifiqueComponent } from './recherche/production-scientifique/production-scientifique.component';
import { RelationsExternesComponent } from './relations-externes/relations-externes.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { NewsTemplateComponent } from './news-template/news-template.component';
const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'relations-externes',
        component: RelationsExternesComponent,
      },
      {
        path: 'insat',
        component: AboutUsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'espace-etudiant',
        component: EspaceEtudiantComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'insat/phyins',
        component: PhyInsComponent,
      },
      {
        path: 'insat/infmath',
        component: InfMathComponent,
      },
      {
        path: 'insat/bioch',
        component: BioChComponent,
      },
      {
        path: 'insat/formgen',
        component: FormGenComponent,
      },
      {
        path: 'insat/emplois',
        component: EmploisComponent,
      },
      {
        path: 'insat/evenments',
        component: EvenmentsComponent,
      },
      {
        path: 'insat/nouveautes',
        component: NouveautesComponent,
      },
      {
        path: 'insat/evenments/event/:id',
        component: NewsEventTemplateComponent,
      },
      {
        path: 'insat/nouveautes/nouveaute/:id',
        component: NewsTemplateComponent,
      },
      {
        path: 'insat/clubs',
        component: ClubsComponent,
      },
      {
        path: 'insat/clubs/club/:id',
        component: ClubTemplateComponent,
      },
      {
        path: 'formation',
        loadChildren: () => import('./formation/formation.module').then((m) => m.FormationModule),
      },
      {
        path: 'insat/recherche/ecole-doctorale',
        component: EcoleDoctoraleComponent,
      },
      {
        path: 'insat/recherche/formation-complementaire-lmd',
        component: FormationComplementaireLmdComponent,
      },
      {
        path: 'insat/recherche/inscription-these',
        component: InscriptionTheseComponent,
      },
      {
        path: 'insat/recherche/depot-dossier-these',
        component: DepotDossierTheseComponent,
      },
      {
        path: 'insat/recherche/dossier-mission-stage',
        component: DossierMissionStageComponent,
      },
      {
        path: 'insat/recherche/laboratiores-recherche',
        component: LaboratoiresRechercheComponent,
      },
      {
        path: 'insat/recherche/collaboration-internationnalles',
        component: CollaborationsInternationallesComponent,
      },
      {
        path: 'insat/recherche/brevets',
        component: BrevetInventionComponent,
      },
      {
        path: 'insat/recherche/production-scientifique',
        component: ProductionScientifiqueComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

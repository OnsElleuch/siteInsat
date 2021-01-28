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
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmploisComponent } from './scolarite/emplois/emplois.component';
import { RelationsExternesComponent } from './relations-externes/relations-externes.component';

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
        path: 'insat',
        component: AboutUsComponent,
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
        path: 'relations-externes',
        component: RelationsExternesComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

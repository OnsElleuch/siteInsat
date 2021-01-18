import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PhyInsComponent } from './departements/phy-ins/phy-ins.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
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
        path: '**',
        component: NotFoundComponent
      }

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

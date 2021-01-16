import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

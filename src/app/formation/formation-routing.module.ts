import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDisComponent } from './form-dis/form-dis.component';
import { IngComponent } from './ing/ing.component';
import { LaComponent } from './la/la.component';
import { MasterComponent } from './master/master.component';
import { PrepaComponent } from './prepa/prepa.component';
import { QuatreCComponent } from './quatre-c/quatre-c.component';
import { SamsungComponent } from './samsung/samsung.component';

const routes: Routes = [
  {
    path: 'prepa',
    component: PrepaComponent,
  },
  {
    path: 'ing',
    component: IngComponent,
  },
  {
    path: 'la',
    component: LaComponent,
  },
  {
    path: 'mastere',
    component: MasterComponent,
  },
  {
    path: 'formation-a-distance',
    component: FormDisComponent,
  },
  {
    path: 'samsung',
    component: SamsungComponent,
  },
  {
    path: '4c',
    component: QuatreCComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationRoutingModule {}

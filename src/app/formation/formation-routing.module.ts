import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrepaComponent } from './prepa/prepa.component';

const routes: Routes = [
    {
        path: 'prepa',
        component : PrepaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }

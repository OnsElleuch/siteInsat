import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import { EmploisComponent } from './emplois/emplois.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [EmploisComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ScolariteModule { }

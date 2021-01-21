import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';

import { DepartmentService } from 'src/app/shared/services/department.service';


@Component({
  selector: 'app-form-gen',
  templateUrl: './form-gen.component.html',
  styleUrls: ['./form-gen.component.css']
})
export class FormGenComponent implements OnInit {

  constructor(private departmentService : DepartmentService) { }
  tablist = [true, false];
  
  professeurs : Enseignant [] = [];
  maitresConf : Enseignant [] = [];
  maitresAss : Enseignant [] = [];
  sec : Enseignant [] = [];

  changeActiveTab(tab : number){
    this.tablist.forEach((value, index) => {
      if(index == tab) {
        this.tablist[index] = true;
      }
      else {
        this.tablist[index] = false;
      }
    });
  }
  getSec() {
    this.departmentService.getProfSec('FG').subscribe(data => {
      this.sec = data;
    });
  }
  getProfesseurs() {
    this.departmentService.getProfesseurs('FG').subscribe(data => {
      this.professeurs = data;
    });
  }
  getMaitresConf() {
    this.departmentService.getMaitreConf('FG').subscribe(data => {
      this.maitresConf = data;
    });
  }
  getMaitresAss() {
    this.departmentService.getMaitreAss('FG').subscribe(data => {
      this.maitresAss = data;
    });
  }
  ngOnInit(): void {
    
    this.getProfesseurs();
    this.getMaitresConf();
    this.getMaitresAss();

    this.getSec();

  }

}

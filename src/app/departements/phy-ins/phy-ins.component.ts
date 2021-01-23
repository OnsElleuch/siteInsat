import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { Lab } from 'src/app/shared/models/lab';

import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-phy-ins',
  templateUrl: './phy-ins.component.html',
  styleUrls: ['./phy-ins.component.css'],
})
export class PhyInsComponent implements OnInit {
  labs: Lab[] = [];
  professeurs: Enseignant[] = [];
  maitresConf: Enseignant[] = [];
  maitresAss: Enseignant[] = [];
  constructor(private departmentService: DepartmentService) {}
  tablist = [true, false, false];

  ngOnInit(): void {
    this.getLabs();
    this.getProfesseurs();
    this.getMaitresConf();
    this.getMaitresAss();
  }
  getProfesseurs() {
    this.departmentService.getProfesseurs('GPI').subscribe((data) => {
      this.professeurs = data;
    });
  }
  getMaitresConf() {
    this.departmentService.getMaitreConf('GPI').subscribe((data) => {
      this.maitresConf = data;
    });
  }
  getMaitresAss() {
    this.departmentService.getMaitreAss('GPI').subscribe((data) => {
      this.maitresAss = data;
    });
  }
  changeActiveTab(tab: number) {
    this.tablist.forEach((value, index) => {
      if (index == tab) {
        this.tablist[index] = true;
      } else {
        this.tablist[index] = false;
      }
    });
  }
  getLabs() {
    this.departmentService.getLabs('GPI').subscribe((data) => {
      this.labs = data;
    });
  }
}

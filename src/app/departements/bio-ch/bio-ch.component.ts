import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-bio-ch',
  templateUrl: './bio-ch.component.html',
  styleUrls: ['./bio-ch.component.css']
})
export class BioChComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }
  tablist = [true, false, false, false];
  
  professeurs : Enseignant [] = [];
  maitresConf : Enseignant [] = [];
  maitresAss : Enseignant [] = [];
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
  getProfesseurs() {
    this.departmentService.getProfesseurs('GBC').subscribe(data => {
      this.professeurs = data;
    });
  }
  getMaitresConf() {
    this.departmentService.getMaitreConf('GBC').subscribe(data => {
      this.maitresConf = data;
    });
  }
  getMaitresAss() {
    this.departmentService.getMaitreAss('GBC').subscribe(data => {
      this.maitresAss = data;
    });
  }
  ngOnInit(): void {
    
    this.getProfesseurs();
    this.getMaitresConf();
    this.getMaitresAss();
  }

}

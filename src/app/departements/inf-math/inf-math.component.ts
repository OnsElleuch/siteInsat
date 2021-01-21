import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-inf-math',
  templateUrl: './inf-math.component.html',
  styleUrls: ['./inf-math.component.css']
})
export class InfMathComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }
  tablist = [true, false, false, false];
  professeurs : Enseignant []= [];
  maitresConf : Enseignant [] = [];
  maitresAss : Enseignant [] = [];
  sec : Enseignant []= [];

  ngOnInit(): void {
    this.getProfesseurs();
    this.getMaitresConf();
    this.getMaitresAss();

    this.getSec();
  }
  

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
    this.departmentService.getProfSec('GIM').subscribe(data => {
      this.sec = data;
    });
  }
  getProfesseurs() {
    this.departmentService.getProfesseurs('GIM').subscribe(data => {
      this.professeurs = data;
    });
  }
  getMaitresConf() {
    this.departmentService.getMaitreConf('GIM').subscribe(data => {
      this.maitresConf = data;
    });
  }
  getMaitresAss() {
    this.departmentService.getMaitreAss('GIM').subscribe(data => {
      this.maitresAss = data;
    });
  }

}

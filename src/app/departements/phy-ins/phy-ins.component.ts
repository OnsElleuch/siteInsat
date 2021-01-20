import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { Lab } from 'src/app/shared/models/lab';

@Component({
  selector: 'app-phy-ins',
  templateUrl: './phy-ins.component.html',
  styleUrls: ['./phy-ins.component.css']
})
export class PhyInsComponent implements OnInit {
  labs: Lab [];
  professeurs : Enseignant [];
  maitresConf : Enseignant [];
  maitresAss : Enseignant [];
  constructor() { }
  tablist = [true, false, false];
  

  ngOnInit(): void {
    this.getLabs();
    this.getProfesseurs();
    this.getMaitresConf();
    this.getMaitresAss();
  }
  getProfesseurs() {
    this.professeurs=[
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Professeur', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'},
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Professeur', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'},
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Professeur', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'}
    ];
  }
  getMaitresConf() {
    this.maitresConf=[
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Maître de Conférences', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'},
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Maître de Conférences', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'},
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Maître de Conférences', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'}
    ];
  }
  getMaitresAss() {
    this.maitresAss=[
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Maître Assistant', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'},
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Maître Assistant', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'},
      {id : 1, nom : 'ABDELGHANI Adnane', grade : 'Maître Assistant', email : 'aabdelghan@yahoo.fr', department : 'GPI', discipline: 'Physique'}
    ];
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
  getLabs(){
    this.labs= [
      {num: 'LP 002', name: 'Laboratoire de CAO', department: 'GPI'},
      {num: 'LP 004', name: 'Laboratoire de RdM et de CND', department: 'GPI'},
      {num: 'LP 006', name: 'Laboratoire de Production Mécanique et d’Analyse Vibratoire', department: 'GPI'},
    ]
  }

}

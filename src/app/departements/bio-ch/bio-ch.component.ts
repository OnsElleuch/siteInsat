import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';

@Component({
  selector: 'app-bio-ch',
  templateUrl: './bio-ch.component.html',
  styleUrls: ['./bio-ch.component.css'],
})
export class BioChComponent implements OnInit {
  constructor() {}
  tablist = [true, false, false, false];

  professeurs: Enseignant[];
  maitresConf: Enseignant[];
  maitresAss: Enseignant[];
  changeActiveTab(tab: number) {
    this.tablist.forEach((value, index) => {
      if (index == tab) {
        this.tablist[index] = true;
      } else {
        this.tablist[index] = false;
      }
    });
  }
  getProfesseurs() {
    this.professeurs = [
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Professeur',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Professeur',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Professeur',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
    ];
  }
  getMaitresConf() {
    this.maitresConf = [
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Maître de Conférences',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Maître de Conférences',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Maître de Conférences',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
    ];
  }
  getMaitresAss() {
    this.maitresAss = [
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Maître Assistant',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Maître Assistant',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
      {
        id: 1,
        nom: 'ABDELGHANI Adnane',
        grade: 'Maître Assistant',
        email: 'aabdelghan@yahoo.fr',
        department: 'GPI',
        discipline: 'Physique',
      },
    ];
  }
  ngOnInit(): void {
    this.getProfesseurs();
    this.getMaitresConf();
    this.getMaitresAss();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit {
  progUrl = 'assets/upload/prog_prepa.pdf';

  constructor() {}
  documents_mastere = [
    {
      name: "Lettre d'affectation",
      path: 'assets/upload/lettre_aff.pdf',
    },
    {
      name: 'Convention de stage de Mastère Professionnel MIQ',
      path: 'assets/upload/conv_stage.pdf',
    },
    {
      name: "PLAN D'ETUDES DU MASTERE METROLOGIE ET INGENIERIE DE LA QUALITE", //This one is missing
      path: 'assets/upload/lettre_aff.pdf',
    },
    {
      name: 'ANNONCE DU MASTERE METROLOGIE ET INGENIERIE DE LA QUALITE',
      path: 'assets/upload/annonce.pdf',
    },
    {
      name: "FORMULAIRE DE L'AUTORISATION D’INSCRIPTION EN MASTER PROFESSIONNEL",
      path: 'assets/upload/form.pdf',
    },
  ];

  ngOnInit(): void {}
  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

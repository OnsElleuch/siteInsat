import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../shared/models/ressource';
import { EmploisService } from '../../shared/services/emplois.service';

@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css'],
})
export class EmploisComponent implements OnInit {
  currDiv: string;
  EmploiMPI: Ressource[];
  EmploiGL: Ressource[];
  EmploiIIA: Ressource[];
  EmploiIMI: Ressource[];
  EmploiRT: Ressource[];
  EmploiCBA: Ressource[];
  EmploiBIO: Ressource[];
  EmploiCH: Ressource[];

  constructor(private emploisService: EmploisService) {}

  ngOnInit(): void {
    this.EmploiBIO = this.emploisService.getBIO();
    this.EmploiCBA = this.emploisService.getCBA();
    this.EmploiMPI = this.emploisService.getMPI();
    this.EmploiCH = this.emploisService.getCH();
    this.EmploiIIA = this.emploisService.getIIA();
    this.EmploiIMI = this.emploisService.getIMI();
    this.EmploiRT = this.emploisService.getRT();
    this.EmploiGL = this.emploisService.getGL();
    console.log(this.EmploiMPI);
  }

  ShowDiv(divVal: string): void {
    this.currDiv = divVal;
    console.log(this.currDiv);
  }
  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

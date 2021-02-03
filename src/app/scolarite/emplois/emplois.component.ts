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
  emplois: Ressource[];
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
    this.emploisService.getEmplois.subscribe(emplois => this.emplois = emplois);
    this.EmploiBIO = this.getBIO();
    this.EmploiCBA = this.getCBA();
    this.EmploiMPI = this.getMPI();
    this.EmploiCH = this.getCH();
    this.EmploiIIA = this.getIIA();
    this.EmploiIMI = this.getIMI();
    this.EmploiRT = this.getRT();
    this.EmploiGL = this.getGL();
    
  }

  ShowDiv(divVal: string): void {
    this.currDiv = divVal;
    console.log(this.currDiv);
  }
  openPdf(url: string) {
    window.open(url, '_blank');
  }
  getMPI(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('MPI'));
  }

  getCBA(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('CBA'));
  }

  getGL(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('GL'));
  }

  getIIA(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('IIA'));
  }

  getIMI(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('IMI'));
  }

  getRT(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('RT'));
  }

  getBIO(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('BIO'));
  }

  getCH(): Ressource[] {
    return this.emlpois.filter((filiere) => filiere.name.includes('CH'));
  }
}

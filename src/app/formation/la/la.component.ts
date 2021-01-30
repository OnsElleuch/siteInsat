import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la',
  templateUrl: './la.component.html',
  styleUrls: ['./la.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.3s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.3s ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LaComponent implements OnInit {
  progUrl = 'assets/upload/prog_prepa.pdf';

  display: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    for (var i = 0; i < 2; i++) {
      this.display.push(false);
    }
  }
  switchDisplay(n: number) {
    this.display[n] = !this.display[n];
  }
  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

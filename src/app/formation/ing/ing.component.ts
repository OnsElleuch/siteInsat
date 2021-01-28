import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ing',
  templateUrl: './ing.component.html',
  styleUrls: ['./ing.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.3s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.3s ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class IngComponent implements OnInit {
  progUrl = 'assets/upload/prog_ing.pdf';

  constructor() {}

  ngOnInit(): void {}

  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

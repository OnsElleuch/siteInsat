import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
})
export class FullLayoutComponent implements OnInit {
  constructor() {}
  cellule = '/assets/upload/cellule_qualité.pdf';

  ngOnInit(): void {}

  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

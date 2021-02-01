import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css'],
})
export class SamsungComponent implements OnInit {
  image = '';
  presentation = 'assets/upload/SamsungAcademy.pdf';

  constructor() {}

  ngOnInit(): void {}
  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

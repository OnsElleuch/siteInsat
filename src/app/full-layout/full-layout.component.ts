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
  initCarousel(className: string, timeout) {
    const carousel = jQuery('#' + className);

    setTimeout(function () {
      carousel.owlCarousel({
        items: 4, // 10 items above 1000px browser width
        itemsDesktop: [1000, 3], // 5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 1], // 2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
      });
    }, timeout);
  }
  initCarousel9(className: string, timeout) {
    const carousel = jQuery('#' + className);

    setTimeout(function () {
      carousel.owlCarousel({
        items: 3, // 10 items above 1000px browser width
        itemsDesktop: [1000, 2], // 5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], // 2 items between 600 and 0
        itemsMobile: [400, 1], // itemsMobile disabled - inherit from itemsTablet option
      });
    }, timeout);
  }
  openPdf(url: string) {
    window.open(url, '_blank');
  }
}

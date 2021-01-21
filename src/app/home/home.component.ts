import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCarousel('owl-demo-main', 50);
  }
  initCarousel(className: string, timeout) {
    const carousel = jQuery('#' + className);

    setTimeout(function() {
      carousel.owlCarousel(
        {

          items: 1, //10 items above 1000px browser width
          itemsDesktop: [1000, 1], //5 items between 1000px and 901px
          itemsDesktopSmall: [900, 1], // betweem 900px and 601px
          itemsTablet: [600, 1], //2 items between 600 and 0
          itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

        }
      );
    }, timeout);
  }

}

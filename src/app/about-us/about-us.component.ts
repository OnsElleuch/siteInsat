import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../shared/models/rendez-vous';
import { Ressource } from '../shared/models/ressource';
import { Subscription } from 'rxjs';
import { AboutUsService } from '../shared/services/about-us.service';
import { Direction } from '../shared/models/direction';
import { environment } from 'src/environments/environment';

declare var jQuery: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  rendezVous: RendezVous[];
  docsAdmin: Ressource[];

  busy: Subscription;
  directionMembers: Direction[];
  administrationMembers: Direction[];
  filesUrl = environment.baseUrlFiles;
  constructor(private aboutService: AboutUsService) {}

  ngOnInit(): void {
    this.getDirectionMembers();
    this.getAdministrationMembers();
    this.getRendezVous();
    this.getDocsAdmin();
  }
  getRendezVous() {
    this.busy = this.aboutService.getRendezVous().subscribe((data) => {
      this.rendezVous = data;
      this.initCarousel('owl-demo-8', 50);
    });
  }
  getMonth(date) {
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avrile',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Decembre',
    ];
    return monthNames[new Date(date).getMonth()];
  }
  getYear(date) {
    return new Date(date).getFullYear();
  }
  getDocsAdmin() {
    this.docsAdmin = this.aboutService.getDocsAdmin();
  }
  openPdf(url: string) {
    window.open(url, '_blank');
  }
  initBx(className: string, timeout) {
    const slider = jQuery('#' + className);

    setTimeout(function () {
      slider.bxSlider({
        pagerCustom: '#bx-pager',
      });
    }, timeout);
  }
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

  getDirectionMembers() {
    this.busy = this.aboutService.getDirectionMembers().subscribe((data) => {
      this.directionMembers = data;
      this.initCarousel9('owl-demo-99', 50);
    });
  }
  getAdministrationMembers() {
    this.aboutService.getAdministrationMembers().subscribe((data) => {
      this.administrationMembers = data;
      this.initCarousel9('owl-demo-999', 50);
    });
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
}

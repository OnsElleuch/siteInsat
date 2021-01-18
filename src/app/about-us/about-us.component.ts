import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../shared/models/rendez-vous';
import { Ressource } from '../shared/models/ressource';
declare var jQuery: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  rendezVous :  RendezVous[];
  docsAdmin : Ressource[];
  constructor() {

  }

  ngOnInit(): void {
    this.initCarousel9('owl-demo-99', 50);
    this.initCarousel9('owl-demo-999', 50);
    this.initCarousel('owl-demo-8', 50);
    this.getRendezVous();
    this.getDocsAdmin();
  }
  getRendezVous() {
    this.rendezVous = [
      { name: "Prof. Dr. Klaus von Klitzing, Prix Nobel de Physique", date: "Mai 2018 ", photoUrl: "../../assets/images/photos_insat/profKaus.jpg" }, 
      { name: "Visite de l'ambassadrice de la République de Pologne", date: "Avril 2018 ", photoUrl: "../../assets/images/photos_insat/ambassadPologne.jpg" }, 
      { name: "Délégation de l'Organisation des Nations unies pour l'Education, la Science et la Culture (UNESCO)", date: "Avril 2018 ", photoUrl: "../../assets/images/photos_insat/unesco.jpg" },
      { name: "Ambassadeur de la turquie en Tunisie", date: "Mars 2017", photoUrl: "../../assets/images/photos_insat/turquie.jpg" }, 
      { name: "Mission Benelux en Tunisie: rencontre débat avec des étudiants de l'INSAT", date: "Juin 2012 ", photoUrl: "../../assets/images/photos_insat/mission.jpg" }, 
      { name: "Le président Nicolas Sarkozy a qualifié l’INSAT comme étant l'une des plus belles réussites de la coopération Tuniso-Française", date: "2008 ", photoUrl: "../../assets/images/photos_insat/sarkozy.jpg" }
    ];
  }
  getDocsAdmin(){
    this.docsAdmin = [
      {
      name : 'طلب رخصة تغیب',
      url : '../../../../upload/1527237747.pdf'
    },
    {
      name : 'مطلب ترشح للقیام بساعات تدریس تكمیلیة',
      url : '../../../../upload/1527237747.pdf'
    },
  ];
  }
  openPdf(url: string){
    window.open(url, '_blank');
  }
  initBx(className: string, timeout) {
    const slider = jQuery('#' + className);

    setTimeout(function () {
      slider.bxSlider({
        pagerCustom: '#bx-pager'
      });
    }, timeout);
  }
  initCarousel(className: string, timeout) {
    const carousel = jQuery('#' + className);

    setTimeout(function () {
      carousel.owlCarousel(
        {
          items: 4, //10 items above 1000px browser width
          itemsDesktop: [1000, 3], //5 items between 1000px and 901px
          itemsDesktopSmall: [900, 3], // betweem 900px and 601px
          itemsTablet: [600, 1], //2 items between 600 and 0
          itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
          navigation: true
        }
      );
    }, timeout);
  }
  initCarousel9(className: string, timeout) {
    const carousel = jQuery('#' + className);

    setTimeout(function () {
      carousel.owlCarousel(
        {
          items: 3, //10 items above 1000px browser width
          itemsDesktop: [1000, 2], //5 items between 1000px and 901px
          itemsDesktopSmall: [900, 2], // betweem 900px and 601px
          itemsTablet: [600, 1], //2 items between 600 and 0
          itemsMobile: [400, 1] // itemsMobile disabled - inherit from itemsTablet option
        }
      );
    }, timeout);
  }


}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from '../shared/models/news';
import { Event } from '../shared/models/event';
import { EvenmentsService } from '../shared/services/evenments.service';
import { NouveautesService } from '../shared/services/nouveautes.service';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  busy: Subscription;
  news: News[] = [];
  constructor(private nouveautesService: NouveautesService, private evenmentsService: EvenmentsService) {}

  ngOnInit(): void {
    this.getNews();
    this.getEvents();
    this.initCarousel('owl-carousel', 50);
  }
  getEvents() {
    this.busy = this.evenmentsService.getEvents().subscribe((data) => {
      this.events = data.splice(0, 4);
      console.log(this.events);
    });
  }

  getNews() {
    this.busy = this.nouveautesService.getNews().subscribe((data) => {
      this.news = data.splice(0, 6);
    });
  }
  initCarousel(className: string, timeout) {
    const carousel = jQuery('.' + className);

    setTimeout(function () {
      carousel.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
      });
    }, timeout);
  }
}

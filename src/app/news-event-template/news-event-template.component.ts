import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EvenmentsService } from '../shared/services/evenments.service';
import { Event } from '../shared/models/event';

@Component({
  selector: 'app-news-event-template',
  templateUrl: './news-event-template.component.html',
  styleUrls: ['./news-event-template.component.css'],
})
export class NewsEventTemplateComponent implements OnInit {
  event = new Event();
  eventId: number;
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;

  constructor(private route: ActivatedRoute, private evenmentsService: EvenmentsService) {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getEventsById();
  }
  getEventsById() {
    this.busy = this.evenmentsService.getEventsById(this.eventId).subscribe((data) => {
      this.event = data[0];
    });
  }
}

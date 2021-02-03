import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/models/event';
import { EvenmentsService } from '../shared/services/evenments.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-evenments',
  templateUrl: './evenments.component.html',
  styleUrls: ['./evenments.component.css'],
})
export class EvenmentsComponent implements OnInit {
  events: Event[];
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;
  
  constructor(private evenmentsService: EvenmentsService) {}

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents() {
    this.busy = this.evenmentsService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}

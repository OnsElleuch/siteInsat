import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../shared/models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  @Input() event: Event;
  baseFileUrl= environment.baseUrlFiles;
  constructor() {}

  ngOnInit(): void {}
}

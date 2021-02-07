import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../shared/models/event';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { EvenmentsService } from '../shared/services/evenments.service';
import { Club } from '../shared/models/club';
import { ClubsService } from '../shared/services/clubs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-template',
  templateUrl: './club-template.component.html',
  styleUrls: ['./club-template.component.css'],
})
export class ClubTemplateComponent implements OnInit {
  club = new Club();

  clubId: number;
  events: Event[];
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;
  constructor(
    private route: ActivatedRoute,
    private clubService: ClubsService,
    private evenmentsService: EvenmentsService
  ) {
    this.route.params.subscribe((params) => {
      this.clubId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getClubById();
  }
  getClubById() {
    this.busy = this.clubService.getClubById(this.clubId).subscribe((data) => {
      this.club = data[0];
      this.getEventsByClub(this.club.clubName);
    });
  }
  getEventsByClub(clubName: string) {
    this.busy = this.evenmentsService.getEventsByClub(clubName).subscribe((data) => {
      this.events = data;
    });
  }
}

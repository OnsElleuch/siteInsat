import { Component, OnInit } from '@angular/core';
import { Club } from '../shared/models/club';
import { ClubsService } from '../shared/services/clubs.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})
export class ClubsComponent implements OnInit {
  clubs: Club[];
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;
  constructor(private clubsService: ClubsService) {}

  ngOnInit(): void {
    this.getClubs();
  }

  getClubs() {
    this.busy = this.clubsService.getClubs().subscribe((data) => {
      this.clubs = data;
    });
  }
}

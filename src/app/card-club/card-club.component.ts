import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../shared/models/club';

@Component({
  selector: 'app-card-club',
  templateUrl: './card-club.component.html',
  styleUrls: ['./card-club.component.css'],
})
export class CardClubComponent implements OnInit {
  @Input() club: Club;
  constructor() {}

  ngOnInit(): void {}
}

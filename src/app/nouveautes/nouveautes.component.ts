import { Component, OnInit } from '@angular/core';
import { News } from '../shared/models/news';
import { NouveautesService } from '../shared/services/nouveautes.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.css'],
})
export class NouveautesComponent implements OnInit {
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;
  news: News[];

  constructor(private nouveautesService: NouveautesService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.busy = this.nouveautesService.getNews().subscribe((data) => {
      this.news = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../shared/models/news';
import { NouveautesService } from '../shared/services/nouveautes.service';

@Component({
  selector: 'app-news-template',
  templateUrl: './news-template.component.html',
  styleUrls: ['./news-template.component.css']
})
export class NewsTemplateComponent implements OnInit {
  news : News;
  newsId : number;
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;

  constructor(private route: ActivatedRoute,private nouveautesService: NouveautesService) {
    this.route.params.subscribe((params)=>{ this.newsId = params['id'] ;}) ;
    console.log(this.newsId);
  }

  ngOnInit(): void {
    this.getNewsById();
    
  }
  getNewsById(){
    this.busy = this.nouveautesService.getNewsById(this.newsId).subscribe((data) => {
    this.news = data[0];
    
  });
}
}

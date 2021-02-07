import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/models/article';
import { RechercheService } from '../../shared/services/recherche.service';

@Component({
  selector: 'app-production-scientifique',
  templateUrl: './production-scientifique.component.html',
  styleUrls: ['./production-scientifique.component.css'],
})
export class ProductionScientifiqueComponent implements OnInit {
  articles: Article[];

  constructor(private rechercheService: RechercheService) {}

  ngOnInit(): void {
    this.rechercheService.getArticles().subscribe((articles) => {
      this.articles = articles;
      console.log(this.articles);
    });
  }
}

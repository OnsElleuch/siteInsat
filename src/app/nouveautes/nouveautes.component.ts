import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component' 

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.css']
})
export class NouveautesComponent implements OnInit {
 
  news = [
    {title: 'Coopération internationale : Convention INSAT-- INSA-Lyon', description: 'Berline', date : '03/12/2015', photo_url : '../assets/extra-images/insat-insa.jpg'},
    {title: 'Le Café R&D (Teams) 01', description: 'Berline', date : '03/12/2015', photo_url : '../assets/extra-images/nouveauté1.jpg'},
    {title: 'INSAT : 25ème anniversaire de l INSAT (1996-2021)', description: 'Berline', date : '03/12/2015', photo_url : '../assets/extra-images/slider1.jpg'}
    
];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/models/event';
import { EvenmentsService } from '../shared/services/evenments.service';
import { environment } from 'src/environments/environment';
import {Subscription} from 'rxjs';
 

@Component({
  selector: 'app-evenments',
  templateUrl: './evenments.component.html',
  styleUrls: ['./evenments.component.css']
})
export class EvenmentsComponent implements OnInit {
  events: Event[];
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;

  // events = [
    // {title: 'un hackathon pour tous les étudiants', description: 'Berline', date : '03/12/2015',club : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', photo_url : '../assets/extra-images/news3.jpg'},
    // {title: 'un hackathon pour tous les professeurs', description: 'Berline', date : '25/05/2013',club : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', photo_url : '../assets/extra-images/news2.jpg'},
    // {title: 'un hackathon pour tous les lycéens', description: 'Berline', date : '10/09/2020',club : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', photo_url : '../assets/extra-images/news1.jpg'}

  // ];
constructor(private evenmentsService : EvenmentsService) {

}

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents() {
    this.busy = this.evenmentsService.getEvents().subscribe(
      (data) => {
        this.events = data;
        
        
      }
    );

  }
  


}

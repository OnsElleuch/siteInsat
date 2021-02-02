import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../shared/models/event';
import { ClubTemplateService } from '../shared/services/club-template.service';
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
  club : Club ;
  // id : number;
  @Input() clubi = {
    clubName: 'InsatClub',
    descriptionClub:
      'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).',
    president: 'Maria hello',
    photo_url: '../assets/extra-images/news3.jpg',
  };
  // events = [
  // {title: 'un hackathon pour tous les étudiants', description: 'Berline', date : '03/12/2015',club : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', photo_url : '../assets/extra-images/news3.jpg'},
  //  {title: 'un hackathon pour tous les professeurs', description: 'Berline', date : '25/05/2013',club : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', photo_url : '../assets/extra-images/news2.jpg'},
  //  {title: 'un hackathon pour tous les lycéens', description: 'Berline', date : '10/09/2020',club : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', photo_url : '../assets/extra-images/news1.jpg'}

  // ];
  events: Event[];
  filesUrl = environment.baseUrl + '/';
  busy: Subscription;
  constructor(private route: ActivatedRoute,private clubService: ClubsService, private evenmentsService: EvenmentsService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.getClubById();
    this.getEventsByClub();
  }
  getClubById(){
      this.busy = this.clubService.getClubById(this.route.snapshot.params.id).subscribe((data) => {
      this.club = data;
      console.log(this.club);
    });
  }
  getEventsByClub() {
    this.busy = this.evenmentsService.getEventsByClub(this.club.clubName).subscribe((data) => {
      this.events = data;
    });
  }
}

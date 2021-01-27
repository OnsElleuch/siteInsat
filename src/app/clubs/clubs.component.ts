import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs = [
    {clubName : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).',president : 'chantal she', photo_url : '../assets/extra-images/news3.jpg'},
    {clubName : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', president : 'chantal she' , photo_url : '../assets/extra-images/news3.jpg'},
    {clubName : 'InsatClub' , descriptionClub : 'Un club d étudiants est une organisation d étudiants inscrits à l INSAT, à but non lucratif et dont les activités peuvent avoir des orientations socioculturelles, scientifiques et technologiques.L objectif général du club d’étudiants de l INSAT est de i) participer et promouvoir la vie associative estudiantine au sein de l INSAT et ii) contribuer à son rayonnement aux échelles nationale et internationale par l ensemble des activités qu il organise ; - Chaque club doit définir clairement ses objectifs et s assurer qu il n existe pas déjà à l INSAT un club actif qui a un mandat ou un focus similaires ; - L objectif et les activités du club ne doivent en aucun cas être basés sur des fondements d un mouvement religieux, politique ou syndical ou sur des critères discriminatoires ;informatique, ...).', president : 'chantal she' ,photo_url : '../assets/extra-images/news3.jpg'}
 
];

  constructor() { }

  ngOnInit(): void {
  }

}

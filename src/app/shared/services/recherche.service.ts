import { Injectable } from '@angular/core';
import { BrevetInvention } from '../models/brevet-invention';
import { Convention } from '../models/convention';
import { Ressource } from '../models/ressource';
import { ProjetDeRecherche } from '../models/projet-de-recherche';
import { LaboratoireRecherche } from '../models/laboratoire-recherche';
import { Article } from '../models/article';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { EnseignantCommissionThese } from '../models/enseignant-commission-these';
import { Doctorant } from '../models/doctorant';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RechercheService extends GenericService {
  responsables;
  comiteScientifique = [
    {
      email: '',
      name: 'Mohamed  Saber',
      lastName: 'Naceur',
      discipline: '',
      department: '',
      grade: 'Pr.',
      qualite: 'Directeur Ecole Doctorale',
      etablissement: 'UCAR',
      universite: 'UCAR',
      structureRecherche: '',
    },
  ];
  commissionThese: EnseignantCommissionThese[];
  doctorants: Doctorant[];

  articles = [
    {
      content:
        'M. Hermassi, Joan Dosta, Cesar Valderama, Edxon Eduardo, Licon Bernal, Natalia Moreno, Xavier Querol, Narjes Batis, Jose Luis Cortina, Simultaneous ammonium and phosphate recovery and stabilisation from urban sewage sludge anaerobic digestates using reactive sorbents, Science of the Total Environment, (2018) pp.781-789.',
    },
    {
      content:
        'Maroua Allani, Narjes Batis, Hugues Cabane, Kheireddine Lebou, Christophe Pecheyran, J. Jeaques Boy, Effect of the langatate crystalquality of the bulk acoustic waves resonators, Advances in Applied Ceramics, (2018).',
    },
    {
      content:
        ' Nadra Bohli, Olivier Meilhac, Philippe Rondeau, Syrine Gueffrache, Laurence Mora, Adnane Abdelghani, A facile route to glycated albumin detection, Talanta, (2018), in Press.',
    },
    {
      content:
        'Hella Boumaiza, Romain Coustel, Christelle Despas, Christian Ruby, Latifa Bergaoui, Interaction of ammonium with birnessite: Evidence of a chemical and structural transformation in alkaline aqueous medium, Journal of Solid State Chemistry, Vol.258 (2018) pp.543–550.',
    },
    {
      content:
        'Bohli Nadra, Chammem Hanen, Meilhac Olivier, Mora Laurence, Abdelghani Adnane, Electrochemical Impedance Spectroscopy on Interdigitated Gold Microelectrodes for Glycosylated Human Serum Albumin Characterization, IEEE Transactions on Nanobioscience, Vol. 16 (2017) pp.676-681.',
    },
    {
      content:
        'Imen Aouadi, Houcine Touati, Jean-Michel Tatibouët, Latifa Bergaoui, Titanate nanotubes as ethanol decomposition catalysts: Effect of coupling photocatalysis with non-thermal plasma, Journal of Photochemistry and Photobiology A: Chemistry, Vol.346 (2017) pp.485–492.',
    },
    {
      content:
        'Hella Boumaiza, Romain Coustel, Gouti Medjahdi, Christian Ruby, Latifa Bergaoui, Conditions for the formation of pure birnessite during the oxidation of Mn(II) cations in aqueous alkaline medium, Journal of Solid State Chemistr., Vol. 248 (2017) pp.18–25.',
    },
    {
      content:
        'Hachicha Hbaieb R, Kotti F, Valli E, Bendini A, Gallina Toschi T & Gargouri M., Effect of Tunisian olive ripeness on endogenous enzymes and virgin olive oil phenolic composition, J. Food Compo. Analys., Vol.62 (2017) pp.43-50.',
    },
    {
      content:
        'Kirdi R, Ben Akacha N, Messaoudi Y & Gargouri M., Enhanced synthesis of isoamyl acetate using liquid-gas biphasic system: transesterification in a solvent free-system, Biotechnol. Bioproc. Engin., Vol.22 (2017)pp. 413- 422.',
    },
    {
      content:
        'M. Ben Sassi, S. Kaddeche, M. Lappa, S. Millet, D. Henry et H. Ben Hadid, On the effect of thermodiffusion on solute segregation during the growth of semiconductor materials by the vertical Bridgman metho, Journal of Crystal Growth, (2017) pp. 154-165.',
    },
    {
      content:
        'A. Medelfef, D. Henry, A. Bouabdallah, S. Kaddeche et R. Boussaa, Effect of rotation on the stability of side-heated buoyant convection between infinite horizontal walls, Physical Review Fluids, Vol. 2 (2017) pp. 093902-1-29.',
    },
    {
      content:
        'Maroua Allani, Narjes Batis, Abdeldjelil Nehari, Hugues Cabane, Kheireddine Lebou, Christophe Pecheyran; Corine Rabe, J.Jeaques Boy., Color Origins in Langatate Crystals, International Annals of Science, Vol. 2, (2017) pp. 12-19.',
    },
    {
      content:
        'M. Hermassi, Cesar Valderama, Oriol Gibert, Natalia Moreno, Xavier Querol, Narjes Batis, Jose Luis Cortina, Recovry of nutrients(N-P-K) from potassium-rich sludge anaerobic digestion side-streams by integration of a hybrid sorption-membrane ultrafiltration process: Use of powder reactive sorbents as nutrient carriers, Science of the Total Environment , Vol. 599-600 (2017) pp. 422-430.',
    },
    {
      content:
        'Hana El Khal, Anne Cordier, Narjes Batis, Eliazbeth Siebert, Samuel Georges, Marlu Cesar Steil, Effect of porosity on the Electrical conductivity of LAMOX materials, Solid State Ionic, Vol.304 (2017) pp.75-84.',
    },
    {
      content:
        ' Najoua Rahali, Sameh Mehdi, Faten Younsi, Mohamed Boussaid, Chokri Messaoud, Antioxidant, amylase, and acetylcholineste inhibitory activites of Hertia cheirifolia essential oils : Influence of plant organs and seasonal variation, International Journal Of Food Properties, (2017), pp.1-15.',
    },
    {
      content:
        'Islem Yangui, Meriem Zouaoui Boutiti, Mohamed Boussaid, Chokri Messaoud, Essential oils of myrtaceae Species growing Wild in tunisia : Chemical variability and antifungal Activity against Biscogniauxia mediterranea, the Causative Agent of charcoal Canker, Chem. Biodiversity, Vol.14 (2017), Doi 10.1002/cbdv.201700058.',
    },

    {
      content:
        'Faten Younsi, Sameh Mehdi, oumayma Aissi, Najoua rahali, Rym Jaouadi, Mohamed Boussaied, Chokri Messaoud,Essential Oil variability in Natural Populations of Artemisia campestris (L.) and Artemisia herba-alba (Asso) and Incidence on Antiacetylcholinesterase and Antioxidant Activities, Chemistry & biodiversity, (2017) doi: 10.1002/cbdv.201700017',
    },
    {
      content:
        'Thamri Atef, Baccar Hamdi, Abdelghani Adnane, Llobet Eduard, MHDA-functionalized multiwall carbon nanotubes for detecting non-aromatic VOCs, Scientific Reports, Vol.6 (2016) pp. 35130.',
    },
    {
      content:
        'Amal Bejar, Semy Ben Chaabene, Maguy Jaber, Jean-François Lambert, Latifa Bergaoui, Al-Mn-Silicate nanobubbles phase as an intermediate in zeolite formation, Applied Clay Science, Vol.123 (2016) pp.202–209.',
    },
    {
      content:
        'Imen Aouadi, Jean-Michel Tatibouët, Latifa Bergaoui, MnOx/TiO2 Catalysts for VOCs Abatement by Coupling Non-thermal Plasma and Photocatalysis, Plasma Chemistry Plasma Process, Vol.36 (2016) pp.1485-1499.',
    },
    {
      content:
        'Smichi N, Messaoudi Y, Moujahed N & Gargouri M., Ethanol production from halophyte Juncus maritimus using freezing and thawing biomass pretreatment, Renew. Energy, Vol.85 (2016) pp.1357-1361.',
    },
    {
      content:
        'Khouloud Jebri, Nicolas Galy, Viacheslav Zgonnik, Marie-Rose Mazières, Yves Génisson, Frédéric Guillen, Taïcir Ben Ayed, Michel Baltas, Jean Christophe Plaquevent, Peptide Synthesis in Ionic Liquids (PEPSIL): All You Need is in the Toolbox!, French Ukrainian Journal of Chemistry, Vol.4 (2016) pp.1-13.',
    },
    {
      content:
        'Mechmech F, Marinova M, Chadjaa H, Rahni M, Ben Akacha N & Gargouri M., Co-fermentation of alfalfa juice and hardwood hydrolysate for butanol production in combined biorefinery systems, Ind. Crops Prod., Vol.89 (2016)pp. 29-33.].',
    },
  ];
  laboratoires = [
    {
      name: "LISI: Laboratoire d'Informatique pour les Systèmes Industriels",
      code: 'LR11ES26',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Moncef Gasmi',
      type: 'laboratoire de recherche',
    },
    {
      name: 'LIP.MB: Laboratoire Ingénierie des Protéines et des Molécules Bio Actif',
      code: 'LR11ES24',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Najib Marzoukii',
      type: 'laboratoire de recherche',
    },
    {
      name: 'M.M.A: Laboratoire Matériaux Mesures et Applications',
      code: 'LR11ES26',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Chaker Zaghdoudi',
      type: 'laboratoire de recherche',
    },
    {
      name: 'LETMI: Laboratoire Ecologie et Technologie Microbienne',
      code: 'LR05ES08',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Mokhtar Hamdi',
      type: 'laboratoire de recherche',
    },
  ];
  uniteRecherche = [
    {
      name: 'ERCO: Unité de recherches Energie Robotique Commande    et Optimisation',
      code: 'UR11ES34',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Rachid Dhifaoui',
      type: 'unité de recherche',
    },
    {
      name: 'EMNA: Etude des Nano Matériaux et leurs Applications',
      code: '05UR12-04',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Narjes Battis',
      type: 'unité de recherche',
    },
    {
      name: 'URNVPM: Unité de Recherche de Nanobiotechnologie et Valorisation des Phytoressources Médicinales',
      code: 'UR17ES22',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Mohamed Boussaid',
      type: 'unité de recherche',
    },
    {
      name: 'UR-Service: Bactériologie Moléculaire et Génomique',
      code: 'UR-Service',
      etablissement: 'INSAT Université de Carthage',
      responsable: 'Professeur Maher Gtari',
      type: 'unité de recherche',
    },
  ];
  projects: ProjetDeRecherche[];
  brevets: BrevetInvention[];
  conventionsInternationalles: Convention[];
  fiches = [
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°4 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208482.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°3 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208545.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°2 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208557.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°1 (Formation Scientifique Spécialisée)',
      url: 'assets/upload/1521208569.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°2 (Expérience Pédagogique)',
      url: 'assets/upload/1521208583.pdf',
    },
    {
      name:
        'Fiche de présence du doctorant à une activité de formation doctorale complémentaire, Formulaire n°1 (Expérience Pédagogique))',
      url: 'assets/upload/1521208593.pdf',
    },
    {
      name: "Fiche de validation des crédits de la formation doctorale complémentaire (FDC) de l'année 2017/2018",
      url: 'assets/upload/1521206843.pdf',
    },
  ];

  constructor(private http: HttpClient) {
    super();
  }

  getBrevets(): Observable<BrevetInvention[]> {
    return this.http.get<BrevetInvention[]>(environment.baseUrl + 'brevet/getBrevets');
  }

  getConventions(): Observable<Convention[]> {
    return this.http.get<Convention[]>(environment.baseUrl + 'convention/getConventions');
  }

  getFiches(): Ressource[] {
    return this.fiches;
  }

  getLabos(): Observable<LaboratoireRecherche[]> {
    return this.http.get<LaboratoireRecherche[]>(
      environment.baseUrl + 'laboratoires-recherche/getLaboratoiresRecherche'
    );
  }

  getprojets(): Observable<ProjetDeRecherche[]> {
    return this.http.get<ProjetDeRecherche[]>(environment.baseUrl + 'projet-recherche/getProjets');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.baseUrl + 'article/getArticles');
  }

  getCommissionThese(): Observable<EnseignantCommissionThese[]> {
    return this.http.get<EnseignantCommissionThese[]>(
      environment.baseUrl + 'enseignant-commission-these/getMembresDeCommites'
    );
  }

  getDoctorants(): Observable<Doctorant[]> {
    return this.http.get<Doctorant[]>(environment.baseUrl + 'doctorant/getDoctorants');
  }
}

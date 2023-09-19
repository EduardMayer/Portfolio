import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      "name": "Join",
      "languages": "JavaScript | HTML | CSS",
      "translations": {
        "en": "A task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
        "de": "Ein Aufgaben-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu."
      },
      "image": "join.png",
      "url": "https://mayer-eduard.de/Join/",
      "github": "https://github.com/EduardMayer/Join"
    },
    {
      "name": "El Pollo Loco",
      "languages": "JavaScript | HTML | CSS",
      "translations": {
        "en": "A jump, run, and throw game based on an object-oriented approach. Help Pepe find coins and Tabasco salsa to fight against the crazy hen.",
        "de": "Jump-and-Run-Spiel auf Basis eines objektorientierten Ansatzes. Helfen Sie Pepe, Münzen und Tabasco Flaschen zu finden, um gegen die verrückte Henne zu kämpfen."
      },
      "image": "ElPolloLoco.png",
      "url": "https://mayer-eduard.de/El-Pollo-Loco/",
      "github": "https://github.com/EduardMayer/El-Pollo-Loco"
    },
    {
      "name": "Ring of Fire",
      "languages": "Angular | TypeScript | HTML | SCSS | Firebase",
      "translations": {
        "en": "A multiplayer game of the famous card game, which saves all data in Firebase.",
        "de": "Ein Mehrspieler-Spiel des berühmten Kartenspiels, das alle Daten in Firebase speichert."
      },
      "image": "RingOfFire.png",
      "url": "https://mayer-eduard.de/ringoffire/",
      "github": "https://github.com/EduardMayer/ringoffire"
    },
    {
      "name": "Pokédex",
      "languages": "JavaScript | HTML | CSS | API",
      "translations": {
        "en": "A simple library based on the PokéAPI that provides and catalogs Pokémon information.",
        "de": "Eine einfache Bibliothek basierend auf der PokéAPI, die Pokémon-Informationen bereitstellt und katalogisiert."
      },
      "image": "pokedex.png",
      "url": "https://mayer-eduard.de/Pokedex/",
      "github": "https://github.com/EduardMayer/Pokedex"
    },
  ];

  constructor(private translate: TranslateService) {

    
  }

  getProjectDescription(project: any): string {
    let lang = this.translate.currentLang;
    return project.translations[lang] || project.translations['en'];
  }
  

  ngOnInit() {
  }
}

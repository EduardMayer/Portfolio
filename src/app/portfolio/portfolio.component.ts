import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      "name": "Join",
      "languages": "JavaScript | HTML | CSS",
      "description": "A task mananger ispired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
      "image": "join.png",
      "url": "https://eduard-mayer.developerakademie.net/Join/",
      "github": "https://github.com/EduardMayer/Join"
    },
    {
      "name": "El Pollo Loco",
      "languages": "JavaScript | HTML | CSS",
      "description": "A jump, run and throw game based on an object-oriented approach. Help Pepe find coins and Tabasco salsa to fight against the crazy hen.",
      "image": "ElPolloLoco.png",
      "url": "https://eduard-mayer.developerakademie.net/El-Pollo-Loco/",
      "github": "https://github.com/EduardMayer/El-Pollo-Loco"
    },
    {
      "name": "Pokédex",
      "languages": "JavaScript | HTML | CSS | API",
      "description": "A simple library based on the PokéAPI that provides and catalogs Pokémon information.",
      "image": "pokedex.png",
      "url": "https://eduard-mayer.developerakademie.net/Pokedex/",
      "github": "https://github.com/EduardMayer/Pokedex"
    },
    {
      "name": "Ring of Fire",
      "languages": "Angular | TypeScript | HTML | SCSS | Firebase",
      "description": "A multiplayer game of the famous card game, which saves all data in Firebase.",
      "image": "RingOfFire.png",
      "url": "https://eduard-mayer.developerakademie.net/ringoffire/",
      "github": "https://github.com/EduardMayer/ringoffire"
    }
  ];
}

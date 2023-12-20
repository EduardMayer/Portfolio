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
      "image": "elpolloloco.png",
      "url": "https://mayer-eduard.de/El-Pollo-Loco/",
      "github": "https://github.com/EduardMayer/El-Pollo-Loco"
    },
    {
      "name": "Portfolio",
      "languages": "Angular | TypeScript | HTML | SCSS",
      "translations": {
        "en": "A website for showcasing my portfolio, developed using Angular, TypeScript, HTML, and CSS. Here, I present my projects and skills.",
        "de": "Eine Website mit meinem Portfolio, entwickelt mit Angular, TypeScript, HTML und CSS. Hier präsentiere ich meine Projekte und Fähigkeiten."
      },
      "image": "portfolio.png",
      "url": "https://mayer-eduard.de/",
      "github": "https://github.com/EduardMayer/Portfolio"
      
    },
    {
      "name": "DABubble",
      "languages": "Angular | TypeScript | HTML | SCSS",
      "translations": {
        "en": "DABubble is a web application designed as a platform for communication and collaboration. Inspired by the functionality of Slack, it provides teams and groups with a seamless and user-friendly way to interact, exchange files, and collaborate on projects",
        "de": "DABubble ist eine Webanwendung, die als Plattform für Kommunikation und Zusammenarbeit konzipiert ist. Inspiriert von der Funktionalität von Slack bietet sie Teams und Gruppen eine nahtlose und benutzerfreundliche Möglichkeit zur Interaktion, zum Austausch von Dateien und zur Zusammenarbeit an Projekten."
      },
      "image": "dabubble.png",
      "url": "https://mayer-eduard.de/da-bubble/",
      "github": "https://github.com/EduardMayer/DABubble"
      
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

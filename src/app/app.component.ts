import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  /** loads the AOS library on init */
  ngOnInit() {
    AOS.init({});

    // Scrollen zu verschiedenen IDs nach der Navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToElementOnRoute(this.router.url);
      }
    });
  }

  scrollToElementOnRoute(route: string) {
    const elementIdMap: { [key: string]: string } = {
      '/AboutmeComponent': 'aboutMe',
      '/MyskillsComponent': 'mySkills',
      '/PortfolioComponent': 'portfolio',
      '/ContactComponent': 'contact',
      // Fügen Sie hier weitere Routen-Element-ID-Paare hinzu
    };

    const elementId = elementIdMap[route];

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
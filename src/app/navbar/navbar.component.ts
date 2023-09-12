import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  toggleNav() {
    const burgerLinks = document.querySelector('.burgerLinks') as HTMLElement | null;
    if (burgerLinks) {
      burgerLinks.classList.toggle('show');
    }
  }
}
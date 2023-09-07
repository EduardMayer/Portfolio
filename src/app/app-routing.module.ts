import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';


const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'AboutmeComponent', component: AboutmeComponent },
  { path: 'MyskillsComponent', component: MyskillsComponent }, 
  { path: 'PortfolioComponent', component: PortfolioComponent },
  { path: 'PortfolioComponent', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
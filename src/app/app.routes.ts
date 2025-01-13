import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path to match your structure
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'über-mich', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
];
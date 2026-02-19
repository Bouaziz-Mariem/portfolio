import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { CertPageComponent } from './components/certs/cert-page/cert-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'cert/:slug', component: CertPageComponent },
  { path: '**', redirectTo: '' }
];

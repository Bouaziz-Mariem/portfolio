import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from '../../../models/certificate.model';
import { CertsService } from '../../../services/certs.service';

@Component({
  selector: 'app-landing-page-certs-section',
  imports: [],
  templateUrl: './landing-page-certs-section.component.html',
  styleUrl: './landing-page-certs-section.component.scss'
})
export class LandingPageCertsSectionComponent {

  private router = inject(Router);
  certsService = inject(CertsService);

  activeCert = signal(0);

  get certs(): Certificate[] {
    return this.certsService.certs;
  }

  get active(): Certificate {
    return this.certs[this.activeCert()];
  }

  getTitle(cert: Certificate): string {
    return this.certsService.getTitle(cert);
  }

  getOrganization(cert: Certificate): string {
    return this.certsService.getOrganization(cert);
  }

  getDate(cert: Certificate): string {
    return this.certsService.getDate(cert);
  }

  getSubtitle(cert: Certificate): string {
    return this.certsService.getSubtitle(cert);
  }

  setActive(index: number): void {
    this.activeCert.set(index);
  }

  viewDetails(): void {
    const slug = this.certsService.getSlug(this.active);
    this.router.navigate(['/cert', slug]);
  }
}

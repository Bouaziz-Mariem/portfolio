import { Component, ViewChild, ElementRef, signal, OnInit, OnDestroy } from '@angular/core';
import { LandingPageNavComponent } from '../landing-page-nav/landing-page-nav.component';
import { LandingPageHeroSectionComponent } from '../landing-page-hero-section/landing-page-hero-section.component';
import { LandingPageProjectsSectionComponent } from '../landing-page-projects-section/landing-page-projects-section.component';
import { LandingPageSkillsSectionComponent } from '../landing-page-skills-section/landing-page-skills-section.component';
import { LandingPageCertsSectionComponent } from '../landing-page-certs-section/landing-page-certs-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    LandingPageNavComponent,
    LandingPageHeroSectionComponent,
    LandingPageProjectsSectionComponent,
    LandingPageSkillsSectionComponent,
    LandingPageCertsSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  activeSection = signal('hero');
  private observer: IntersectionObserver | null = null;
  private readonly sectionIds = ['hero', 'projects', 'skills', 'certs'];

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { Component, input, output, signal, effect } from '@angular/core';

@Component({
  selector: 'app-landing-page-nav',
  imports: [],
  templateUrl: './landing-page-nav.component.html',
  styleUrl: './landing-page-nav.component.scss'
})
export class LandingPageNavComponent {
  navigateTo = output<string>();
  mobileMenuOpen = signal(false);
  currentSection = input<string>('hero');

  sections = [
    { id: 'hero', label: 'Home', icon: '~' },
    { id: 'projects', label: 'Projects', icon: '>' },
    { id: 'skills', label: 'Skills', icon: '#' },
    { id: 'certs', label: 'Certs', icon: '★' },
  ];

  activeSection = signal('hero');

  constructor() {
    effect(() => {
      this.activeSection.set(this.currentSection());
    });
  }

  scrollTo(sectionId: string): void {
    this.activeSection.set(sectionId);
    this.mobileMenuOpen.set(false);
    this.navigateTo.emit(sectionId);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }
}

import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing-page-hero-section',
  imports: [],
  templateUrl: './landing-page-hero-section.component.html',
  styleUrl: './landing-page-hero-section.component.scss'
})
export class LandingPageHeroSectionComponent implements OnInit, OnDestroy {


  typedText = signal('');
  private phrases = [
    'Building intelligent web apps',
    'Crafting AI-powered solutions',
    'Turning ideas into code',
    'Designing modern interfaces',
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.typeTimer) {
      clearTimeout(this.typeTimer);
    }
  }

  private typeLoop(): void {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.typedText.set(currentPhrase.substring(0, this.charIndex));

    let delay = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 500;
    }

    this.typeTimer = setTimeout(() => this.typeLoop(), delay);
  }
}

import { Component, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-landing-page-projects-section',
  imports: [],
  templateUrl: './landing-page-projects-section.component.html',
  styleUrl: './landing-page-projects-section.component.scss'
})
export class LandingPageProjectsSectionComponent {
  activeProject = signal(0);

  projects: Project[] = [
    {
      title: 'AI Chat Assistant',
      description: 'A conversational AI platform built with Angular and integrated with NLP models. Features real-time responses, context memory, and a sleek chat interface.',
      tags: ['Angular', 'Python', 'NLP', 'WebSocket'],
      gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      icon: '🤖',
      link: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Full-stack analytics dashboard with real-time sales tracking, inventory management, and predictive insights powered by machine learning.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Chart.js'],
      gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
      icon: '📊',
      link: '#'
    },
    {
      title: 'Smart Task Manager',
      description: 'An intelligent project management tool that uses AI to prioritize tasks, estimate completion times, and suggest optimal workflows.',
      tags: ['TypeScript', 'Firebase', 'TailwindCSS', 'AI'],
      gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
      icon: '✨',
      link: '#'
    },
    {
      title: 'Portfolio Generator',
      description: 'A dynamic portfolio builder that auto-generates stunning layouts from user data using template engines and responsive design principles.',
      tags: ['Angular', 'SCSS', 'REST API', 'Figma'],
      gradient: 'linear-gradient(135deg, #F59E0B, #F97316)',
      icon: '🎨',
      link: '#'
    },
  ];

  setActive(index: number): void {
    this.activeProject.set(index);
  }

  get active(): Project {
    return this.projects[this.activeProject()];
  }
}

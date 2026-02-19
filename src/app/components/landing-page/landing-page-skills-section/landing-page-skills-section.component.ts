import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  accentColor: string;
  borderColor: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
}

@Component({
  selector: 'app-landing-page-skills-section',
  imports: [],
  templateUrl: './landing-page-skills-section.component.html',
  styleUrl: './landing-page-skills-section.component.scss'
})
export class LandingPageSkillsSectionComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '&lt;/&gt;',
      accentColor: 'text-primary-light',
      borderColor: 'border-primary/30',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML / CSS', level: 95 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'React', level: 70 },
      ]
    },
    {
      title: 'Backend & Data',
      icon: '{ }',
      accentColor: 'text-accent',
      borderColor: 'border-accent/30',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Node.js', level: 78 },
        { name: 'SQL / NoSQL', level: 80 },
        { name: 'REST APIs', level: 88 },
        { name: 'Firebase', level: 72 },
      ]
    },
    {
      title: 'AI & ML',
      icon: '⚡',
      accentColor: 'text-cyan-600',
      borderColor: 'border-cyan-600/30',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'NLP', level: 70 },
        { name: 'TensorFlow', level: 65 },
        { name: 'Data Analysis', level: 80 },
        { name: 'Prompt Engineering', level: 85 },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: '⚙',
      accentColor: 'text-emerald-600',
      borderColor: 'border-emerald-600/30',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 65 },
        { name: 'Figma', level: 75 },
        { name: 'CI / CD', level: 68 },
        { name: 'Linux', level: 72 },
      ]
    },
  ];
}

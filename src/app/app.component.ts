import { Component, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education, experiences, navItems, skillGroups } from './portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly navItems = navItems;

  private readonly heroTitles = [
    'Full Stack Software Engineer',
    'Complex System Architect and Microservices Development',
    'C#, Angular, Azure, AI',
  ];

  protected readonly currentHeroTitle = signal('');
  private titleIndex = 0;
  private characterIndex = 0;
  private isDeleting = false;
  protected readonly skillGroups = skillGroups;
  protected readonly education = education;
  protected readonly experiences = experiences;
//   protected readonly achievements = achievements;

  protected readonly isDarkMode = signal(false);

  constructor() {
    this.runTypewriterEffect();
  }

  @HostBinding('class.dark-theme')
  get darkTheme(): boolean {
    return this.isDarkMode();
  }

  protected toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
  }

  protected scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private runTypewriterEffect(): void {
    const currentTitle = this.heroTitles[this.titleIndex];

    if (this.isDeleting) {
      this.currentHeroTitle.set(currentTitle.substring(0, this.characterIndex - 1));
      this.characterIndex--;
    } else {
      this.currentHeroTitle.set(currentTitle.substring(0, this.characterIndex + 1));
      this.characterIndex++;
    }

    const typingSpeed = this.isDeleting ? 45 : 85;
    const pauseAfterTyping = 1500;
    const pauseAfterDeleting = 350;

    if (!this.isDeleting && this.characterIndex === currentTitle.length) {
      this.isDeleting = true;
      setTimeout(() => this.runTypewriterEffect(), pauseAfterTyping);
      return;
    }

    if (this.isDeleting && this.characterIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.heroTitles.length;
      setTimeout(() => this.runTypewriterEffect(), pauseAfterDeleting);
      return;
    }

    setTimeout(() => this.runTypewriterEffect(), typingSpeed);
  }
}
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SKILLS } from '../../core/constants/skills.data';

@Component({
  selector: 'app-skills',
  imports: [SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = SKILLS;

  get categories(): string[] {
    return [...new Set(this.skills.map(s => s.category))];
  }

  getSkillsByCategory(category: string) {
    return this.skills.filter(s => s.category === category);
  }
}

import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { AboutComponent } from '../../features/about/about.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SkillsComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}

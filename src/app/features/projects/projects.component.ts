import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PROJECTS } from '../../core/constants/projects.data';

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = PROJECTS;
}

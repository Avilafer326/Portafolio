import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { NAV_LINKS } from '../../../core/constants/nav-links';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  links = NAV_LINKS;

  toggleTheme(): void {
    this.themeService.toggle();
  }
}

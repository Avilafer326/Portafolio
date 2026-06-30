import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { NAV_LINKS } from '../../../core/constants/nav-links';

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  links = NAV_LINKS;
}

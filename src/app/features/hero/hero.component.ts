import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { TerminalComponent } from '../../shared/components/terminal/terminal.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, SocialLinksComponent, TerminalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}

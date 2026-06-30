import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  imports: [SectionTitleComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}

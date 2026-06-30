import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  template: `
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="text-text-secondary text-lg max-w-2xl">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
}

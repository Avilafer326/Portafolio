import { Component, input } from '@angular/core';

/**
 * Título de sección reutilizable.
 * Alterna color de texto entre modo claro y oscuro vía `dark:` prefix.
 */
@Component({
  selector: 'app-section-title',
  imports: [],
  template: `
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark mb-4 tracking-tight">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="text-text-secondary dark:text-text-secondary-dark text-lg max-w-2xl">
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

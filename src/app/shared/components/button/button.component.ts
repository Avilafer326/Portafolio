import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary';

/**
 * Botón reutilizable con dos variantes:
 * - primary: fondo morado, texto blanco (ideal para CTAs)
 * - secondary: borde gris, texto oscuro (ideal para acciones secundarias)
 *
 * El modo oscuro alterna los colores de borde/texto vía `dark:` prefix.
 */
@Component({
  selector: 'app-button',
  imports: [],
  template: `
    @if (href()) {
      <a
        [href]="href()"
        class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200"
        [class.bg-accent-purple]="variant() === 'primary'"
        [class.text-white]="variant() === 'primary'"
        [class.hover-bg-accent-purple-hover]="variant() === 'primary'"
        [class.hover-shadow-lg]="variant() === 'primary'"
        [class.shadow-md]="variant() === 'primary'"
        [class.border]="variant() === 'secondary'"
        [class.border-border]="variant() === 'secondary'"
        [class.dark:border-border-dark]="variant() === 'secondary'"
        [class.text-text-main]="variant() === 'secondary'"
        [class.dark:text-text-main-dark]="variant() === 'secondary'"
        [class.hover-border-accent-purple]="variant() === 'secondary'"
        [class.hover-text-accent-purple]="variant() === 'secondary'"
      >
        {{ label() }}
        @if (icon()) {
          <span [innerHTML]="icon()"></span>
        }
      </a>
    } @else {
      <button
        (click)="onClick.emit($event)"
        class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200"
        [class.bg-accent-purple]="variant() === 'primary'"
        [class.text-white]="variant() === 'primary'"
        [class.hover-bg-accent-purple-hover]="variant() === 'primary'"
        [class.hover-shadow-lg]="variant() === 'primary'"
        [class.shadow-md]="variant() === 'primary'"
        [class.border]="variant() === 'secondary'"
        [class.border-border]="variant() === 'secondary'"
        [class.dark:border-border-dark]="variant() === 'secondary'"
        [class.text-text-main]="variant() === 'secondary'"
        [class.dark:text-text-main-dark]="variant() === 'secondary'"
        [class.hover-border-accent-purple]="variant() === 'secondary'"
        [class.hover-text-accent-purple]="variant() === 'secondary'"
      >
        {{ label() }}
        @if (icon()) {
          <span [innerHTML]="icon()"></span>
        }
      </button>
    }
  `,
})
export class ButtonComponent {
  label = input.required<string>();
  variant = input<ButtonVariant>('primary');
  href = input<string>();
  icon = input<string>();
  onClick = output<Event>();
}

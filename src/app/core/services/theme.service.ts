import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';
  private readonly defaultTheme: Theme = 'dark';

  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, current);
      }
      this.applyTheme(current);
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  private getInitialTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(this.storageKey) as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return this.defaultTheme;
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }
}

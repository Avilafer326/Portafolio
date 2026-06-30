import { Component } from '@angular/core';

interface TerminalSkill {
  name: string;
  percent: number;
}

@Component({
  selector: 'app-terminal',
  imports: [],
  template: `
    <div class="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl">
      <!-- Window header -->
      <div class="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevation">
        <span class="w-3 h-3 rounded-full bg-red-500"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span class="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <!-- Terminal body -->
      <div class="p-5 font-mono text-sm leading-relaxed">
        <div class="mb-4">
          <span class="text-accent-teal">></span>
          <span class="text-text-main ml-2">developer&#64;portfolio:~$ whoami</span>
        </div>
        <p class="text-text-secondary mb-4">Fernando Ávila</p>

        <div class="mb-4">
          <span class="text-accent-teal">></span>
          <span class="text-text-main ml-2">developer&#64;portfolio:~$ skills --top</span>
        </div>
        <div class="space-y-3 mb-4">
          @for (skill of skills; track skill.name) {
            <div class="flex items-center gap-4">
              <span class="text-text-secondary w-24">{{ skill.name }}</span>
              <div class="flex-1 h-2 rounded-full bg-border overflow-hidden">
                <div
                  class="h-full rounded-full bg-accent-teal"
                  [style.width.%]="skill.percent"
                ></div>
              </div>
              <span class="text-text-muted w-10 text-right">{{ skill.percent }}%</span>
            </div>
          }
        </div>

        <div class="flex items-center">
          <span class="text-accent-teal">></span>
          <span class="text-text-main ml-2">developer&#64;portfolio:~$</span>
          <span class="w-2 h-4 bg-accent-purple ml-1 animate-pulse"></span>
        </div>
      </div>
    </div>
  `,
})
export class TerminalComponent {
  skills: TerminalSkill[] = [
    { name: 'Angular', percent: 95 },
    { name: 'Node.js', percent: 90 },
    { name: 'Flutter', percent: 85 },
    { name: 'Unity / C#', percent: 80 },
    { name: 'SQL / NoSQL', percent: 85 },
  ];
}

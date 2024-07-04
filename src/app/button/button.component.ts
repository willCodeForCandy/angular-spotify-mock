import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text = 'Click';
  @Input() mode = 'dark';
  @Input() icon = false;
  @Input() size = 'lg';
  get classList(): string {
    return `btn-${this.mode} ${this.size} ${this.icon ? 'icon' : ''}`;
  }
}

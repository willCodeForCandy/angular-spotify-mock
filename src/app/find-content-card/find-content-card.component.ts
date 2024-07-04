import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { EXPLORE_CONTENT_LIST } from '../../mocks/mock-data';

@Component({
  selector: 'app-find-content-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './find-content-card.component.html',
  styleUrl: './find-content-card.component.scss',
})
export class FindContentCardComponent {
  @Input() data = EXPLORE_CONTENT_LIST[0];
}

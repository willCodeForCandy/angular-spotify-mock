import { Component, Input } from '@angular/core';
import { MOCK_ARTISTS } from '../../../mocks/mock-data';
import { NgClass, NgIf } from '@angular/common';
import { RadioImageComponent } from '../radio-image/radio-image.component';
import { PlayButtonComponent } from '../../play-button/play-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RadioImageComponent, PlayButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: {
    id?: number;
    category?: string;
    name?: string;
    artist?: string;
    description?: string;
    img?: string;
  } = MOCK_ARTISTS[0];
}

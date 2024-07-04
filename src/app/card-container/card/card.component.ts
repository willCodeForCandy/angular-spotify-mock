import { Component, Input } from '@angular/core';
import { MOCK_ARTISTS } from '../../../mocks/mock-data';
import { NgClass } from '@angular/common';
import { RadioImageComponent } from '../radio-image/radio-image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RadioImageComponent],
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

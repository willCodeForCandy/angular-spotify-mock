import { Component, Input } from '@angular/core';
import { MOCK_STATIONS } from '../../../mocks/mock-data';

@Component({
  selector: 'app-radio-image',
  standalone: true,
  imports: [],
  templateUrl: './radio-image.component.html',
  styleUrl: './radio-image.component.scss',
})
export class RadioImageComponent {
  @Input() data: {
    id?: number;
    category?: string;
    name?: string;
    artist?: string;
    description?: string;
    img?: string;
  } = MOCK_STATIONS[0];
}

import { Component, Input,  } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MOCK_ARTISTS } from '../../mocks/mock-data';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent {
@Input() title = '';
@Input() list = MOCK_ARTISTS;
}

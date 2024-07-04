import { Component, Input,  } from '@angular/core';
import { MOCK_ARTISTS } from '../../../mocks/mock-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data:{
category?: string,
name?: string,
artist?: string,
description?: string,
img?: string
  } = MOCK_ARTISTS[0];
// @Input() category='';
// @Input() name='';
// @Input() artist='';
// @Input() album='';
// @Input() description='';
// @Input() img='';
}

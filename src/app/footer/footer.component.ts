import { Component } from '@angular/core';
import { FOOTER_DATA } from '../../mocks/mock-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerData = FOOTER_DATA;
}

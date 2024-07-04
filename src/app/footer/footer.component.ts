import { Component } from '@angular/core';
import { FOOTER_DATA } from '../../mocks/mock-data';
import { socialsArray } from '../../data/footerLinks';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerData = FOOTER_DATA;
  socials = socialsArray;
}

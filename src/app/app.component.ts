import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { MOCK_ALBUMS, MOCK_STATIONS } from '../mocks/mock-data';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardContainerComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mockify';
  albums = MOCK_ALBUMS;
  radioStations = MOCK_STATIONS;
}

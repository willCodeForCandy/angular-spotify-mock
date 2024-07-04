import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import {
  EXPLORE_CONTENT_LIST,
  MOCK_ALBUMS,
  MOCK_STATIONS,
} from '../mocks/mock-data';
import { ButtonComponent } from './button/button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FindContentCardComponent } from './find-content-card/find-content-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardContainerComponent,
    ButtonComponent,
    MenuItemComponent,
    FindContentCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mockify';
  albums = MOCK_ALBUMS;
  radioStations = MOCK_STATIONS;
  sideMenu = [
    {
      img: '/assets/Spotify_Logo_sm.png',
      alt: 'Spotify logo',
      link: '#',
    },
    {
      img: '/assets/home-icon.svg',
      alt: 'Icono inicio',
      text: 'Inicio',
      link: '#',
    },
    {
      img: '/assets/search-icon.svg',
      alt: 'Icono buscar',
      text: 'Buscar',
      link: '#',
    },
  ];
  libraryMenu = [
    {
      img: '/assets/library-icon.png',
      alt: 'Biblioteca',
      text: 'Tu biblioteca',
      link: '#',
    },
  ];
  newContentMenu = EXPLORE_CONTENT_LIST;
}

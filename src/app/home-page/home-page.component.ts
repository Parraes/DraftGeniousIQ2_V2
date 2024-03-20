import { Component } from '@angular/core';
import { MenuHomePageComponent } from '../menu-home-page/menu-home-page.component';
import { CarruselJugadoresRecomendadosComponent } from '../carrusel-jugadores-recomendados/carrusel-jugadores-recomendados.component';
import { InfiniteEventScrollComponent } from '../infinite-event-scroll/infinite-event-scroll.component';
import { TransferredPlayersComponent } from '../transferred-players/transferred-players.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MenuHomePageComponent,CarruselJugadoresRecomendadosComponent,InfiniteEventScrollComponent, TransferredPlayersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
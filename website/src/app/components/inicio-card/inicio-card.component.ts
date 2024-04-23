import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-card',
  standalone: true,
  imports: [],
  templateUrl: './inicio-card.component.html',
  styleUrl: './inicio-card.component.css',
})
export class InicioCardComponent {
  cardText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique,';
}

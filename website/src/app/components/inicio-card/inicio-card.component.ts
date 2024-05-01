import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-inicio-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './inicio-card.component.html',
  styleUrl: './inicio-card.component.css',
})
export class InicioCardComponent {
  cardItems = [
    {
      imageURL: 'https://picsum.photos/200',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
    },
    {
      imageURL: 'https://picsum.photos/100',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
    },
    {
      imageURL: 'https://picsum.photos/150',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
    },
    {
      imageURL: 'https://picsum.photos/300',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
    },
    {
      imageURL: 'https://picsum.photos/350',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
    },
    {
      imageURL: 'https://picsum.photos/400',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
    },
  ];
}

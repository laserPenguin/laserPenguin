import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-inicio-card',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './inicio-card.component.html',
  styleUrl: './inicio-card.component.css',
})
export class InicioCardComponent {
  modalTitle = 'Descripcion';
  modalOrderButton = 'Ordena Ahora';
  modalPrice = Math.floor(Math.random() * 1000) / 10;

  cardItems = [
    {
      id: 1,
      imageURL: 'https://picsum.photos/200',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
      price: Math.floor(Math.random() * 1000) / 10,
    },
    {
      id: 2,
      imageURL: 'https://picsum.photos/100',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
      price: Math.floor(Math.random() * 1000) / 10,
    },
    {
      id: 3,
      imageURL: 'https://picsum.photos/150',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
      price: Math.floor(Math.random() * 1000) / 10,
    },
    {
      id: 4,
      imageURL: 'https://picsum.photos/300',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
      price: Math.floor(Math.random() * 1000) / 10,
    },
    {
      id: 5,
      imageURL: 'https://picsum.photos/350',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
      price: Math.floor(Math.random() * 1000) / 10,
    },
    {
      id: 6,
      imageURL: 'https://picsum.photos/400',
      context:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        '\nVestibulum accumsan magna quis ipsum blandit commodo. Morbi tristique',
      price: Math.floor(Math.random() * 1000) / 10,
    },
  ];

  getID(id: number) {
    console.log(id);
  }
}

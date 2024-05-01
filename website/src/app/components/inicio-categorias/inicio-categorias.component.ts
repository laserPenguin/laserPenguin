import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-inicio-categorias',
  standalone: true,
  imports: [NgFor],
  templateUrl: './inicio-categorias.component.html',
  styleUrl: './inicio-categorias.component.css',
})
export class InicioCategoriasComponent {
  categoryNames = [
    { name: 'Accesorios' },
    { name: 'Navideño' },
    { name: 'Cocina' },
    { name: 'Gamer' },
    { name: 'Anime' },
  ];
  customize = 'Personalizado';
}

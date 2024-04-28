import { Component } from '@angular/core';
import { InicioCategoriasComponent } from '../../components/inicio-categorias/inicio-categorias.component';
import { InicioCardComponent } from '../../components/inicio-card/inicio-card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [InicioCategoriasComponent, InicioCardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  inicioMainTitle = 'Nuevos Diseños';
  inicioSecTitle = 'Categorias mas visto';
}

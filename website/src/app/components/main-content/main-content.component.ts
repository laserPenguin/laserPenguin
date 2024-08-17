import { Component } from '@angular/core';
import { InicioComponent } from '../../views/inicio/inicio.component';
import { MasVendidoComponent } from '../../views/mas-vendido/mas-vendido.component';
import { CategoriasComponent } from '../../views/categorias/categorias.component';
import { AcercaComponent } from '../../views/acerca/acerca.component';
import { RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from '../../views/page-not-found/page-not-found.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    MasVendidoComponent,
    CategoriasComponent,
    AcercaComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {}

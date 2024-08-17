import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { MasVendidoComponent } from './views/mas-vendido/mas-vendido.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { AcercaComponent } from './views/acerca/acerca.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DetalleCategoriaComponent } from './views/detalle-categoria/detalle-categoria.component';

export const routes: Routes = [
  {
    path: 'Inicio',
    title: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'masvendido',
    title: 'Lo mas vendido',
    component: MasVendidoComponent,
  },
  {
    path: 'categorias',
    title: 'Categorias',
    component: CategoriasComponent,
  },
  {
    path: 'acerca',
    title: 'Acerca de',
    component: AcercaComponent,
  },
  {
    path: 'DetalleCategorias',
    title: 'Detalle Categoria',
    component: DetalleCategoriaComponent,
  },
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { MasVendidoComponent } from './views/mas-vendido/mas-vendido.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { AcercaComponent } from './views/acerca/acerca.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'masvendido', component: MasVendidoComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'acerca', component: AcercaComponent}
    ];

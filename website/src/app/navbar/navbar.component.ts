import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoTitle = 'Laser Penguin';
  
  //List title
  option1 = 'Inicio';
  option2 = 'Lo mas vendido';
  option3 = 'Categorias';
  option4 = 'Acerca de';

}

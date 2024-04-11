import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  logoTitle = 'Laser Penguin';
  
  //List title
  option1 = 'Inicio';
  option2 = 'Lo mas vendido';
  option3 = 'Categorias';
  option4 = 'Acerca de';
}

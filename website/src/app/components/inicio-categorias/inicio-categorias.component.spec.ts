import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioCategoriasComponent } from './inicio-categorias.component';

describe('InicioCategoriasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, InicioCategoriasComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InicioCategoriasComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

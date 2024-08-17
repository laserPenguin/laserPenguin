import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioCategoriasComponent } from './inicio-categorias.component';

describe('InicioCategoriasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCategoriasComponent, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InicioCategoriasComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

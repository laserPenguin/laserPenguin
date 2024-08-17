import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCategoriasComponent } from './inicio-categorias.component';

describe('InicioCategoriasComponent', () => {
  let component: InicioCategoriasComponent;
  let fixture: ComponentFixture<InicioCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

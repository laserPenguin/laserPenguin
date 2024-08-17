import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { InicioComponent } from './inicio.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('InicioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Asegúrate de incluir RouterTestingModule
      declarations: [InicioComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

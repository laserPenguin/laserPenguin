import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCardComponent } from './inicio-card.component';

describe('InicioCardComponent', () => {
  let component: InicioCardComponent;
  let fixture: ComponentFixture<InicioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

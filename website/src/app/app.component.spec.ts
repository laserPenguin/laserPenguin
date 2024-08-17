import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule], // Usa imports para componentes standalone y módulos
      providers: [
        { provide: ActivatedRoute, useValue: {} } // Proporciona una instancia falsa de ActivatedRoute
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'website' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('website');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('website');
  });
});

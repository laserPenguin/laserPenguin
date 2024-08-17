import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('PageNotFoundComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PageNotFoundComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

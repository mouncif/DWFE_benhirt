import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeVentesComponent } from './gestion-de-ventes.component';

describe('GestionDeVentesComponent', () => {
  let component: GestionDeVentesComponent;
  let fixture: ComponentFixture<GestionDeVentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeVentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurEtDroitComponent } from './utilisateur-et-droit.component';

describe('UtilisateurEtDroitComponent', () => {
  let component: UtilisateurEtDroitComponent;
  let fixture: ComponentFixture<UtilisateurEtDroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurEtDroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurEtDroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

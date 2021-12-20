import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionplatsComponent } from './gestionplats.component';

describe('GestionplatsComponent', () => {
  let component: GestionplatsComponent;
  let fixture: ComponentFixture<GestionplatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionplatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
